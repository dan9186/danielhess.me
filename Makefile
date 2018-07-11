SHELL = bash
TRAVIS_BRANCH ?= $(shell git branch | grep \* | cut -d " " -f 2)
CI_BRANCH ?= $(TRAVIS_BRANCH)
TESTING_BUCKET := danielhess-me-testing-site
PROD_BUCKET := danielhess-me-prod-site
URL_MAP := sites-url-map
PROD_CDN_HOST := www.danielhess.me

.PHONY: all
all: test

.PHONY: build
build: install  ## Build the project
	@echo "Building Project"
	@yarn run build

.PHONY: ci_setup
ci_setup:  ## Setup the CI system
	@mkdir -p $(HOME)/.gcloud
	@$(shell echo $(GCP_KEY_FILE) | base64 --decode > $(HOME)/keyfile.json)
	@gcloud auth activate-service-account --key-file=$(HOME)/keyfile.json
	@gcloud config set project $(GCP_PROJECT_ID)

.PHONY: clean
clean: ## Cleanup all running and generated items
	-@rm -rf dist
	-@rm -rf coverage
	-@rm -f *-debug.log *-error.log

.PHONY: deploy
deploy:  ## Deploy the project
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

.PHONY: install
install:  ## Install project
	@yarn install

.PHONY: release
release:  ## Create a release PR
	@hub pull-request -b release -h master -m Release

.PHONY: test
test: unit_test  ## Run all tests

.PHONY: unit_test
unit_test:  ## Run unit tests
	@echo "Running tests"
	@yarn run test
