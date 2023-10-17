module.exports = function (plop, handlers) {
    plop.setGenerator('hook', {
        description: 'Hook',
        prompts: [
            {
                name: 'name',
                type: 'input',
                message: "Hooks's Name: ",
                default: 'Product',
            },
            {
                name: 'folder',
                type: 'input',
                message: "Folder's Name: (kebab-case) ",
            },
        ],
        actions(data) {
            const fileName = data.name;
            const folder = data.folder.toLowerCase();

            const actions = [
                {
                    type: 'add',
                    path: `src/data/hooks/${folder}/use${fileName}/use${fileName}.hook.ts`,
                    templateFile: 'plop/hook/hook-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/data/hooks/${folder}/use${fileName}/use${fileName}.hook.test.ts`,
                    templateFile: 'plop/hook/hook-template-test.hbs',
                },
            ];

            return actions;
        },
    });
};
