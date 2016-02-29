Karma Electron Require Preprocessor
====================

### install

```sh
npm install --save-dev karma-electronrequire-preprocessor
```

### use karma config

 * karma.config.js

```javascript

preprocessors: {
  'client/{app,components}/**/*.js': ['electronrequire'],
},

```
