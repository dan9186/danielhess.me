SHELL = bash

all: test

test:  ## Run all tests
	@echo "Running tests"

travis_setup:  ## Setup the travis environment
	@pip install gsutil
