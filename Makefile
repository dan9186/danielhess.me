SHELL = bash
TRAVIS_BRANCH ?= $(shell git branch | grep \* | cut -d " " -f 2)
TESTING_BUCKET := new.danielhess.me
PROD_BUCKET := www.danielhess.me

all: test

build: install  ## Build the project
	@echo "Building Project"
	@npm run build

deploy:  ## Deploy the project
	@if [ "$(TRAVIS_BRANCH)" == "master" ]; then \
		gsutil -m rsync -d dist gs://$(TESTING_BUCKET)/; \
	elif [ "$(TRAVIS_BRANCH)" == "release" ]; then \
		gsutil -m rsync -d dist gs://$(PROD_BUCKET)/; \
	else \
		echo "Not a deploy branch, no action performed"; \
	fi

install:  ## Install project
	@npm install

test: unit_test  ## Run all tests

unit_test:  ## Run unit tests
	@echo "Running tests"
	@npm run test
