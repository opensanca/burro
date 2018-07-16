# DonkeyUI
> dumb component oficial Opensanca
![22nct0](https://user-images.githubusercontent.com/10289071/34912085-64330040-f8be-11e7-99a2-dae4b520ded1.jpg)
DonkeyUI se refere á uma biblioteca de UI Componentes do [Opensanca](https://www.opensanca.com.br)
Todo projeto que necessita de uma User Interface pode se basear a partir desse projeto. 

# Quick Start


# Contributing to DonkeyUI
:tada: Thanks for your interest in contributing! :tada:

The purpose of this guide is to provide the necessary information to help you make your contribution. Please, read with attention and feel free to propose changes on this guide in a pull request.

#### Table of Contents

[Installing the project](#installing-the-project)
  * [Dependencies](#dependencies)
  * [Basic tasks](#basic-tasks)
  * [Project structure](#project-structure)

[Development](#development)
  * [Design process](#design-process)
  * [Naming Conventions](#code-convetions)
  * [Your First Component](#your-fist-component)
  * [Solving a bug](#solving-a-bug)
  * [Submitting Changes](#submitting-changes)

[Deploy](#deploy)
  * [Versioning](#versioning)
  * [Deploy process](#deploy-process)
  * [Creating version release](#creating-version-release)


#### Utilities

Classes that can be applied to components and other elements.

| Sintax                       | Example               |
| -----------------------------|:---------------------:|
| `.donkey-u-[<utility>]`          | `.donkey-u-margin-top-10` |

#### Components

| Sintax                                          | Example                      |
| ------------------------------------------------|:----------------------------:|
| `.donkey-[<component>]`                             | `.donkey-slimbox`                |
| `.donkey-[<component>][-descendent]`                | `.donkey-slimbox-header`         |
| `.donkey-[<component>][-descendent][--modifier]`    | `.donkey-slimbox-header--primary`|
| `.donkey-[<component>].is[-state]`                  | `.donkey-slimbox.is-disable`     |

### Your First Component

**Only** consider starting the development of a new component if the [Design Process](#design-process) is OK.

The first thing to do, is to create an issue on [Development Project](https://github.com/opensanca/burro). Link every pull request to this issue. The project board will guide the steps of development:

- **Todos**: backlog of tasks.
- **In progress**: tasks that are under development.
- **Deploy**: tasks that are on branch master (in production).
- **Add to styleguide**: after deploy, make a [pull request on styleguide](https://github.com/ContaAzul/styleguide) with your feature.
- **Done**: last step. On this column we have control of what has been released.

With the issue created, you can start to development your component.

1. *(Optional)* Create a directory with a CSS file on [components CSS folder](https://github.com/).
2. Import this stylesheet on [donkey.css file](https://github.com/).
3. Create a HTML inteface test on [interface/standalone directory](https://github.com/).
4. *(Optional)* Create a directory with a JavaScript file on [components JavaScript folder]().

A good example of a component is the [Breadcrumb](http://donkey.opensanca.github.io/#!donkey):

- [breadcrumb.css]()
- [breadcrumb.js]()
- [breadcrumbTest.js]()

### Solving a bug

You can contribute to the project by solving a bug! Check the issues with [bug label on Github](https://github.com/). If there is no issue related to your bug, create an issue on [Development Project](https://github.com/).

With the issue created, send a [pull request](#pull-request) to donkey-ui.

## Submitting Changes

* Push your changes to a topic branch in your fork of the repository.
* **Maintainers will look at pull requests on a regular basis and after 1 approval the pull request is considered approved.**
* Maintainers cannot approve their own pull request.
* Code Review is welcomed from all members.
* After the approval the pull request can be merged.


# Maintainers
@guidiego 


