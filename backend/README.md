# README

This is the [hapi](https://hapijs.com) [Getting Started](https://hapijs.com/tutorials) tutorial on [Render](https://render.com).

The app in this repo is deployed at [https://hapijs.onrender.com](https://hapijs.onrender.com).

## Deployment
1. Create a new Render project using your version of this repo.

2. Create a new web service in the project with the following values:
    * Build Command: `npm install`
    * Start Command: `node server.js`

That's it! Your web service will be live on your Render URL as soon as the build finishes.

## Node versions
By default, Render uses the latest LTS version of Node.

It can also automatically detects and install the version of Node specified in the [engines](https://docs.npmjs.com/files/package.json#engines) directive in `package.json`. This can be an exact version like `10.11.0` or a range like `>=10.11 <10.12`.

This is the relevant snippet from `package.json` in this repo:
```json
  "engines": {
    "node": ">=10 <11"
  }
```
