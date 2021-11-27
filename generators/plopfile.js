module.exports = function (plop) {
  plop.setGenerator('components', {
    description: 'application components logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'components name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.tsx',
        templateFile: 'templates/styles.ts.hbs'
      }
    ]
  })
}
