SHELL = bash

NO_COLOR := \033[0m
INFO_COLOR := \033[0;36m

CI_BRANCH ?= $(shell git branch | grep \* | cut -d " " -f 2)
CI_COMMIT ?= $(shell git rev-parse --short HEAD)

.PHONY: all
all: test

.PHONY: analyze_bundle
analyze_bundle: build ## view the bundle stats
	npx webpack-bundle-analyzer dist/stats.json

.PHONY: build
build: ## Build the project
	@npx webpack -p

.PHONY: clean
clean: ## Cleanup all running and generated items
	-@rm -rf dist
	-@rm -rf coverage
	-@rm -f *-debug.log *-error.log

.PHONY: coverage
coverage: ## Generate code coverage
	npx nyc --reporter=text --reporter=html --all --extension .js mocha --require babel-core/register "src/**/*.test.js"

.PHONY: deploy
deploy: ## Deploy the generated site
	firebase deploy

.PHONY: dev
dev: ## Run the dev test server
	@npx webpack-dev-server --hot --progress --port 8080 --host 0.0.0.0

.PHONY: help
help:  ## Show This Help
	@for line in $$(cat Makefile | grep "##" | grep -v "grep" | sed  "s/:.*##/:/g" | sed "s/\ /!/g"); do verb=$$(echo $$line | cut -d ":" -f 1); desc=$$(echo $$line | cut -d ":" -f 2 | sed "s/!/\ /g"); printf "%-30s--%s\n" "$$verb" "$$desc"; done

.PHONY: install
install: ## Install dependencies
	@npm install

.PHONY: linters
linters: lint prettied ## Run all linters

.PHONY: lint
lint: ## Run the linter
	npx eslint src/**/*.js

.PHONY: prettied
prettied: ## Run the check for prettier
	npx prettier -c "src/**/*.js"

.PHONY: pretty
pretty: ## Run prettier
	npx prettier --write "src/**/*.js"

.PHONY: story
story: ## Run storybook
	npx start-storybook -p 9001 -c .storybook

.PHONY: test
test: snapshots ## Run all tests available

.PHONY: snapshots
snapshots:  ## Run snapshot tests
	npx jest --config jest.snapshot.config.js

.PHONY: update_snapshots
update_snapshots:  ## Run snapshots to update the save state
	npx jest --config jest.snapshot.config.js -u
