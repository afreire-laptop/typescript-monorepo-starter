# TypeScript Monorepo Starter

A convinient React App with a Backend-for-Frontend Monorepo

## Setup

### Prerequisites
  - Node.js - v14
  - Yarn
  - nvm

### NVM
The Node Version Manager (NVM) Provides a simple way to install and switch between Node.js versions
  - Follow the [installation guide](https://github.com/nvm-sh/nvm#installation-and-update)
  - Install v14 - `nvm install 14`
  - Set the version - `nvm use 14`
  - Setting it to default - `nvm alias default 14`

### Installation
  - Clone the repo
  - `yarn` for main dependencies install
  - `yarn bootstrap` for packages dependencies install

### Running
From Command line:
  - `yarn start` - launch React App and Node BFF
  - `yarn start:app` - launch React App
  - `yarn start:bff` - launch Node BFF
  - `yarn build` - Build React App and BFF for prod environment

  #### Stack Included
  - Lerna for managing packages in Monorepo 
  - Yarn for Package Management and Task runner\
  - TypeScript for static type-checking
  - React for UI
  - Express For Backend-for-frontend

