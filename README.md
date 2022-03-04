[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://prisma-components.vercel.app/)
[![npm version](https://badge.fury.io/js/%40mprisma%2Fcomponents.svg)](https://www.npmjs.com/package/@mprisma/components)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/gabriel-gn/prisma-components/blob/main/LICENSE)
[![Actions Status](https://github.com/gabriel-gn/prisma-components/actions/workflows/main.yml/badge.svg)](https://github.com/gabriel-gn/prisma-components/actions)

# DesignSystem

## Versions

| Angular Version | NPM Version |
|-----------------|-------------|
| 13.2.3          | 13.0.3      |
| < 13.0.0        | 0.0.77      |

## Reference

Initial project reference:
[Ref](https://dev.to/activenode/angular-10-storybook-npm-package-ng-design-system-step-by-step-2dn2)

## Getting Started

Install Prisma Components

```
npm i bootstrap popper.js @angular/material @mprisma/components --save
```

add to your `angular.json` file the following:

```
...
  "scripts": [
               "node_modules/popper.js/dist/umd/popper.js",
               "node_modules/bootstrap/dist/js/bootstrap.js",
               ...
             ],
...
```

Add to your `base.scss` file the following:

```
@import '~@mprisma/components/src/styles/base';
// @import '~@mprisma/components/src/styles/icons/unicons/css/animation.css';
// @import '~@mprisma/components/src/styles/icons/unicons/css/line.css';
// @import '~@mprisma/components/src/styles/icons/unicons/css/before.css';
// @import '~@mprisma/components/src/styles/icons/prisma-cube/webfont.css';
```

## Creating new components

```
scripts/create-component.sh -c <ComponentName> 
```

it supports folders, like `myfolder/inputs/ComponentName`
