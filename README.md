# Learn Vercel Deploy

This project is a simple Node.js application built with Elysia.js. It has been configured for deployment to Vercel.

## Changes for Vercel Deployment

To deploy this project to Vercel, the following changes were made:

### `package.json`

- The `main` entry was changed to `dist/server.js`.
- The `start` and `start:local` scripts were updated to execute `dist/server.js`.

### `vercel.json`

- The `builds` and `routes` configurations were removed.
- The `outputDirectory` property was removed.
- A `rewrites` rule was added to direct all incoming requests to `dist/server.js`.

These changes align the project with Vercel's deployment process for a Node.js server.

## Deployment

You can deploy this project by running the `vercel` command from your project's root directory, or by connecting your Git repository to your Vercel account.
