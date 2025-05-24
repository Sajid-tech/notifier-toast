# Publishing tinkr-react

This document outlines the steps to publish the tinkr-react package to npm.

## Prerequisites

1. Make sure you have an [npm account](https://www.npmjs.com/signup)
2. Log in to npm in your terminal:
   ```bash
   npm login
   ```

## Before Publishing

1. Update the `package.json` file:
   - Set the correct version number
   - Update the package description if needed
   - Make sure author and license information are correct
   - Update keywords if needed

2. Make sure all tests pass:
   ```bash
   npm run test
   ```

3. Build the package:
   ```bash
   npm run build
   ```

4. Check the contents of the `dist` folder to ensure all necessary files are included.

5. Update the README.md with any new features or changes.

## Publishing Process

### First Time Publishing

1. Check if the package name is available:
   ```bash
   npm search tinkr-react
   ```

2. If the name is available, publish the package:
   ```bash
   npm publish --access=public
   ```

### Publishing Updates

1. Update the version in `package.json` following semantic versioning:
   - Patch (bug fixes): `npm version patch`
   - Minor (new features): `npm version minor`
   - Major (breaking changes): `npm version major`

2. Publish the updated package:
   ```bash
   npm publish
   ```

## After Publishing

1. Create a new GitHub release and tag with the same version number.
2. Update any documentation websites or examples to reflect the changes.
3. Announce the new release on relevant platforms if significant.

## Handling Scoped Packages

If you want to publish under a scope (e.g., `@yourscope/tinkr-react`):

1. Update the name in `package.json` to include the scope:
   ```json
   {
     "name": "@yourscope/tinkr-react"
   }
   ```

2. Publish with the public access flag:
   ```bash
   npm publish --access=public
   ```

## Troubleshooting

- If you encounter "You must be logged in" errors, run `npm login` again.
- If the package name is taken, consider using a scoped package name.
- If there are issues with the published package, you can deprecate a version:
  ```bash
  npm deprecate tinkr-react@"<version>" "reason for deprecation"
  ```

## Unpublishing

Note that npm has strict policies about unpublishing:
- You can only unpublish within 72 hours of publishing
- After 72 hours, you should deprecate instead

To unpublish:
```bash
npm unpublish tinkr-react@<version>
```

To deprecate:
```bash
npm deprecate tinkr-react@"<version>" "reason for deprecation"
```