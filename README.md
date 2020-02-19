# My personal website
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/dan9186/danielhess.me/Build/master)](https://github.com/dan9186/danielhess.me/actions?query=workflow%3ABuild+branch%3Amaster)
![GitHub](https://img.shields.io/github/license/dan9186/danielhess.me)
![GitHub last commit](https://img.shields.io/github/last-commit/dan9186/danielhess.me)
[![Website](https://img.shields.io/website?down_message=down&up_message=up&url=https%3A%2F%2Fdanielhess.dev)](https://danielhess.me)

This is the source for my personal website. The build is automated, and merges to `master` deploy the site.

## Development

```
make install dev
```
or

```
make dev
```

## Tests
View individual components for independent inspection.

```
make story
```

Run any and all tests

```
make test
```

## Deploy
```
make deploy
```