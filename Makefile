SHELL = bash

NO_COLOR := \033[0m
INFO_COLOR := \033[0;36m

TRAVIS_BRANCH ?= $(shell git branch | grep \* | cut -d " " -f 2)
TRAVIS_COMMIT ?= $(shell git rev-parse --short HEAD)
CI_BRANCH ?= $(TRAVIS_BRANCH)

TESTING_BUCKET := danielhess-me-testing-site
PROD_BUCKET := danielhess-me-prod-site
URL_MAP := sites-url-map
PROD_CDN_HOST := www.danielhess.me

.PHONY: all
all: test

.PHONY: analyze_bundle
analyze_bundle: build ## view the bundle stats
	yarn run webpack-bundle-analyzer dist/stats.json

.PHONY: build
build: ## Build the project
	@yarn run webpack -p

.PHONY: ci
ci: install linters test ## Run ci

.PHONY: ci_setup
ci_setup: ## Setup the ci environment
	@if [[ -n "$$BUILD_ENV" ]] && [[ "$$BUILD_ENV" == "testing" ]]; then echo -e "$(INFO_COLOR)THIS IS EXECUTING AGAINST THE TESTING ENVIRONMEMNT$(NO_COLOR)"; fi
	@mkdir -p $(HOME)/.gcloud
	@$(shell echo $(GCP_KEY_FILE) | base64 --decode > $(HOME)/keyfile.json)
	@gcloud auth activate-service-account --key-file=$(HOME)/keyfile.json
	@gcloud config set project $(GCP_PROJECT_ID)

.PHONY: clean
clean: ## Cleanup all running and generated items
	-@rm -rf dist
	-@rm -rf coverage
	-@rm -f *-debug.log *-error.log

.PHONY: coverage
coverage: ## Generate code coverage
	yarn run nyc --reporter=text --reporter=html --all --extension .js mocha --require babel-core/register "src/**/*.test.js"

.PHONY: deploy
deploy: ## Deploy the project
	@if [ "$(CI_BRANCH)" == "master" ]; then \
		echo "Deploying to Testing Bucket"; \
		gsutil -m rsync -r -d dist gs://$(TESTING_BUCKET)/; \
	elif [ "$(CI_BRANCH)" == "release" ]; then \
		echo "Deploying to Prod Bucket"; \
		gsutil -m rsync -r -d dist gs://$(PROD_BUCKET)/; \
		gcloud compute url-maps invalidate-cdn-cache $(URL_MAP) --host $(PROD_CDN_HOST) --async --path "/*"; \
	else \
		echo "Not a deploy branch, no action performed"; \
	fi

.PHONY: dev
dev: ## Run the dev test server
	@yarn run webpack-dev-server --hot --progress --port 8080

.PHONY: help
help:  ## Show This Help
	@for line in $$(cat Makefile | grep "##" | grep -v "grep" | sed  "s/:.*##/:/g" | sed "s/\ /!/g"); do verb=$$(echo $$line | cut -d ":" -f 1); desc=$$(echo $$line | cut -d ":" -f 2 | sed "s/!/\ /g"); printf "%-30s--%s\n" "$$verb" "$$desc"; done

.PHONY: install
install: ## Install dependencies
	@yarn install

.PHONY: release
release: ## Create a release PR
	@hub pull-request -b release -h master -m Release

.PHONY: linters
linters: ## Run all linters
	yarn run eslint src/**/*.jsx

.PHONY: story
story: ## Run storybook
	yarn run start-storybook -p 9001 -c .storybook

.PHONY: test
test: unit_test  ## Run all tests available

.PHONY: unit_test
unit_test:  ## Run unit tests
	@echo "Running tests"
	@yarn run mocha --require babel-core/register "src/**/*.test.js"
