[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://prisma-components.vercel.app/)
[![npm version](https://badge.fury.io/js/%40mprisma%2Fcomponents.svg)](https://www.npmjs.com/package/@mprisma/components)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/gabriel-gn/prisma-components/blob/main/LICENSE)

[comment]: <> (![alt text]&#40;./design-system/.storybook/public/logo.png&#41;)

# Prisma Components
___

## Getting Started

Add to your `base.scss` file the following:

```
@import '~@mprisma/components/src/styles/base';
@import '~@mprisma/components/src/styles/icons/unicons/css/animation.css';
@import '~@mprisma/components/src/styles/icons/unicons/css/line.css';
@import '~@mprisma/components/src/styles/icons/unicons/css/before.css';
@import '~@mprisma/components/src/styles/icons/prisma-cube/webfont.css';
```

## Creating new components

```
design-system/create-component.sh -c <ComponentName> 
```

it supports folders, like `myfolder/inputs/ComponentName`
