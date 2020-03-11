# Nuxt Hatchly Files Module

> Module to integrate the Hatchly File module into a Nuxt app.

Currently the only feature of this module is to redirect files to the api when linked to via WYSIWYG attributes in the Pages module.

## Installation

```bash
yarn add @hatchly/nuxt-files-module
```

Register the module in your nuxt applications config file:

```js
module.exports = {
    // Nuxt config
    modules: {
        // Other Modules
        ['@hatchly/nuxt-files-module', {
            // Options
        }],
    },

    hatchly: {
        files: {
            // Options can also be defined here
        },
    },
};
```

Add the API url to your .env:

```
API_BASE=http://my-application.localhost
```

## Options

The options object can contain the following values: 

```js
{
    apiBase: '',
    pathPrefix: '',
},
```

Each option is described below.

### `apiBase`

> The url of your Hatchly site. This is should be updated in your .env rather than hardcoding a value here.

- Default: `process.env.API_BASE`
- Type: `string`

### `pathPrefix`

> The path to where the file module links to images.

- Default: `'/files'`
- Type: `string`
