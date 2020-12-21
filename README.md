## Installation

You need the [node](https://nodejs.org/en/download/) to run this project, this example was created for the version `v12.18.3`.

### Run application

```bash
npm install
npm start
```

## Folder structure

```
public - Static file serving
src/
  |___components - UI components
  |___containers - UI components that have business rules
  |___docs - Documentation and documentation assets
  |___utils - Functions utils
  |___layout - UI components that are displayed on all pages of the site
  |___pages - Pages that reflect the browser address
  |___reducers - Reducer/Actions
```


## Stacks

- react-hook-form: To validate form;
- react-imask: To apply mask into inputs;
- redux: To keep store of applications;
- react-router-dom: To control router;
- styled-components: To apply Style into App;
