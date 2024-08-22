# Flex Extension Template
This template employs tailwindcss for styling and uses Shadcn lib for styled components.

## Setup

Install the dependencies:

```bash
pnpm install
```

## Configure Extension

Setup extension name:
In **rsbuild.config**, change the default extension name **FLEX_EXTENSION_TEMPLATE** to the intended name. Extension name is to be constructed using letters and underscores only.

Setup Nodemon:
Nodemon is used in this project to reflect code changes on save. In the **package.json** file, under the copy:build script, change the placeholder **PATH_TO_YOUR_FLEX_PROJECT_EXTENSION_DIRECTORY** to the path of the newly created extension directory in the main flex app. 

Setup Flex app:
To integrate the extension with Flex app, two things needs to be done:
1. create a new folder under the **static/extensions** directory and rename it with the custom extension name.
2. change the extension manifest file **static/config.json** to include the new extension, refer to Flex app doc for the detailed format of extension manifest file.

Start watch mode for css changes:

```bash
npx tailwindcss -i ./src/App.css -o ./src/output.css --watch
```

Start watch mode with Nodemon:

```bash
npx nodemon
```


On saving changes in code, nodemon will build and copy the latest built files to the main flex project. The changes will be reflected in the Flex app upon refresh.

