SHELL = bash
TRAVIS_BRANCH ?= $(shell git branch | grep \* | cut -d " " -f 2)
TESTING_BUCKET := danielhess-me-testing-site
PROD_BUCKET := danielhess-me-prod-site

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

.PHONY: deploy
deploy:  ## Deploy the project
	@if [ "$(TRAVIS_BRANCH)" == "master" ]; then \
		echo "Deploying to Testing Bucket"; \
		gsutil -m rsync -d dist gs://$(TESTING_BUCKET)/; \
	elif [ "$(TRAVIS_BRANCH)" == "release" ]; then \
		echo "Deploying to Prod Bucket"; \
		gsutil -m rsync -d dist gs://$(PROD_BUCKET)/; \
	else \
		echo "Not a deploy branch, no action performed"; \
	fi

.PHONY: install
install:  ## Install project
	@yarn install

.PHONY: test
test: unit_test  ## Run all tests

.PHONY: unit_test
unit_test:  ## Run unit tests
	@echo "Running tests"
	@yarn run test
