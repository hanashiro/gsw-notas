module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Componente',
        prompts: [
            {
                name: 'name',
                type: 'input',
                message: "Component's Name: ",
                default: 'List',
            },
            {
                name: 'type',
                type: 'list',
                message: "Component's Type: ",
                choices: [
                    {
                        name: 'Animation',
                        value: 'animation',
                    },
                    {
                        name: 'Data Display',
                        value: 'data-display',
                    },
                    {
                        name: 'Feedback',
                        value: 'feedback',
                    },
                    {
                        name: 'Inputs',
                        value: 'inputs',
                    },
                    {
                        name: 'Layout',
                        value: 'layout',
                    },
                    {
                        name: 'Navigation',
                        value: 'navigation',
                    },
                    {
                        name: 'Surfaces',
                        value: 'surfaces',
                    },
                ],
            },
        ],
        actions(data) {
            const basePath = `src/ui/components/${data.type}/${data.name}/`;
            const actions = [
                {
                    type: 'add',
                    path: `${basePath}/${data.name}.tsx`,
                    templateFile: 'plop/component/component-template.hbs',
                },
                {
                    type: 'add',
                    path: `${basePath}/${data.name}.style.tsx`,
                    templateFile: 'plop/component/component-style-template.hbs',
                },
                {
                    type: 'add',
                    path: `${basePath}/${data.name}.test.tsx`,
                    templateFile: 'plop/component/component-test-template.hbs',
                },
                {
                    type: 'add',
                    path: `${basePath}/${data.name}.stories.tsx`,
                    templateFile: 'plop/component/component-story-template.hbs',
                },
            ];

            return actions;
        },
    });
};

