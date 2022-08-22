# Development 

This guide will explain to you the steps to produce a local copy of anDiary and so you can start contributing. 

## Prerequisites 

- [Node.js](https://hh.gg)
- [Pnpm](https://hh.gg) 

## Downloading the repo 

1. [Fork this repo]()
2. Clone it to your machine
  Use these commands in your terminal (powershell, bash or cmd) 

```shell
git clone git@github.com:${YOUR_GITHUB_USERNAME}/anDiary.git
cd serving
git remote add upstream https://github.com/anDiary/anDiary.git
git remote set-url --push upstream no_push
``` 

## Installing Dependencies 

```shell
pnpm install
``` 

## Running the development server 

You can start the dev servers of docs and electron app individually: 

```shell
# Documentation
pnpm dev --filter=docs 

# Electron app
pnpm dev --filter=app
``` 

Or at the same time: 

```shell
pnpm dev
``` 

## Running tests 

```shell
pnpm test
``` 

## Creating Builds 

Individually: 

```shell
# Documentation
pnpm build --filter=docs 

# Electron app
pnpm build --filter=app
``` 

OR in Parallel: 

```shell
pnpm build
```
