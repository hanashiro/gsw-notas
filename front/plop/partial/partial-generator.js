module.exports = function (plop, handlers) {
    plop.setGenerator('partial', {
        description: 'Partial',
        prompts: [
            {
                name: 'name',
                type: 'input',
                message: "Partial's Name: ",
                default: 'Product',
            },
            {
                name: 'folder',
                type: 'input',
                message: "Folder's Name: (kebab-case) ",
            },
        ],
        actions(data) {
            const fileName = handlers.createFilename(data.name);
            const folder = data.folder.toLowerCase();

            const actions = [
                {
                    type: 'add',
                    path: `src/ui/partials/${folder}/${fileName}/_${data.name}.tsx`,
                    templateFile: 'plop/partial/partial-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/ui/partials/${folder}/${fileName}/_${data.name}.styled.tsx`,
                    templateFile: 'plop/partial/partial-style-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/ui/partials/${folder}/${fileName}/_${data.name}.hook.ts`,
                    templateFile: 'plop/partial/partial-hook-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/ui/partials/${folder}/${fileName}/_${data.name}.logic.ts`,
                    templateFile: 'plop/partial/partial-logic-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/ui/partials/${folder}/${fileName}/_${data.name}.logic.test.ts`,
                    templateFile:
                        'plop/partial/partial-logic-test-template.hbs',
                },
            ];

            return actions;
        },
    });
};
