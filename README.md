<p align="center">
  <a href="https://kibis.is">
    <img alt="Kibisis logo" src="assets/logo-64x64.png" style="padding-top: 15px" height="64" />
  </a>
</p>

<h1 p align="center">
  Kibisis Website
</h1>

<p p align="center">
  The front facing website for the Kibisis wallet.
</p>

<p p align="center">
  The website is built using <a href="https://docusaurus.io/" target="_blank">Docusaurus</a> and fills the role of landing page, tutorial and blog.
</p>

<p align="center">
  <a href="https://github.com/agoralabs-sh/kibisis-website/actions/workflows/deploy.yml">
    <img src="https://github.com/agoralabs-sh/kibisis-website/actions/workflows/deploy.yml/badge.svg?branch=main" alt="Deploy" />
  </a>
</p>

### Table of contents

* [1. Overview](#-1-overview)
* [2. Requirements](#-2-requirements)
* [3. Setup](#-3-setup)
  * [3.1. Installations](#31-installations)
* [4. Development](#-4-development)
  * [4.1. Running locally](#41-running-locally)
* [5. Deployment](#-5-deployment)
  * [5.1. Overview](#51-overview)
  * [5.2. Requirements](#52-requirements)
  * [5.3. Deploy to `gh-pages` branch](#53-deploy-to-gh-pages-branch)
* [6. Miscellaneous](#-6-miscellaneous)
  * [6.1. Useful commands](#61-useful-commands)
* [7. How to Contribute](#-7-how-to-contribute)
* [8. License](#-8-license)

## 🔭 1. Overview

TBA...

<sup>[Back to top ^][table-of-contents]</sup>

## 📋 2. Requirements

* Install [Node v16.14.0][node]
* Install [Yarn v1.22.5+][yarn]

<sup>[Back to top ^][table-of-contents]</sup>

## 📦 3. Setup

### 3.1. Installations

1. Install the Yarn dependencies:
```shell
yarn install
```

<sup>[Back to top ^][table-of-contents]</sup>

## 🛠️ 4. Development

### 4.1. Running locally

1. After the dependencies have been installed, simply run:
```shell
yarn start
```

2. If the page is not opened automatically, navigate to [http://localhost:3000](http://localhost:3000).

<sup>[Back to top ^][table-of-contents]</sup>

## 🚀 5. Deployment

### 5.1. Overview

Although the deployment is handled through the CI (GitHub Actions), it is necessary to outline the steps that are involved in the deployment.

<sup>[Back to top ^][table-of-contents]</sup>

### 5.2. Requirements

* Install [Node v16.14.0][node]
* Install [Yarn v1.22.5+][yarn]

<sup>[Back to top ^][table-of-contents]</sup>

###  5.3. Deploy to `gh-pages` branch

<sup>[Back to top ^][table-of-contents]</sup>

## 📑 6. Miscellaneous

### 6.1. Useful commands

| Command                | Description                                                                                                                                |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| `yarn build`           | builds the static website in the `/build` directory.                                                                                       |
| `yarn serve`           | serves the static website from the `/build` directory.                                                                                     |
| `yarn start`           | starts a development server that will serve your website and reflect the latest changes on [http://localhost:3000](http://localhost:3000). |

<sup>[Back to top ^][table-of-contents]</sup>

## 👏 7. How to Contribute

Please read the [**Contributing Guide**][contribute] to learn about the development process.

<sup>[Back to top ^][table-of-contents]</sup>

## 📄 8. License

Please refer to the [LICENSE][license] file.

<sup>[Back to top ^][table-of-contents]</sup>

<!-- Links -->
[contribute]: ./CONTRIBUTING.md
[license]: ./LICENSE
[node]: https://nodejs.org/en/
[table-of-contents]: #table-of-contents
[yarn]: https://yarnpkg.com/
