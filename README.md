# Clirio Starter Kit

**[Clirio](https://www.npmjs.com/package/clirio)** is a mini framework for node.js command-line interfaces based on TypeScript, decorators, DTOs

This project is a ready-made Typescript assembly with Clirio. Code formatting rules, typescript building and unit tests are configured

Clirio is [developed](https://github.com/stepanzabelin/clirio) according to SOLID principles, so it is possible apply OOP, dependency injection and other programming patterns.

Clirio starter kit contains the recommended assembly. But it is possible to integrate any other libraries and custom decorators.

## Get started

Pull this project from git and create your own repo

```bash
$ git clone https://github.com/stepanzabelin/clirio-starter-kit my-cli-app
$ cd my-cli-app
$ rm -rf .git
$ git init
```

Open `package.json`. Change the following fields: `name`, `version`, `description`, `repository`, `keywords`, `author`, `bin`

## Installing

```bash
yarn install
```

## Run cli commands

In development mode, commands work when running the following script

```bash
$ yarn dev {any command}
```

Examples of command-lines

```bash
$ yarn dev math formula "(2 + 5) ^ 2 - 7"
$ yarn dev math sum 5 10
$ yarn dev weather get --city=Prague
```

## Building

```bash
yarn build
```

## Calling CLI

The `bin` param in `package.json` is responsible for calling CLI. Change it to your version before building the application and publishing your package
