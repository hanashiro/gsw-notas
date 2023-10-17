module.exports = function (plop, handlers) {
    plop.setGenerator('page', {
        description: 'Page',
        prompts: [
            {
                name: 'name',
                type: 'input',
                message: "Page's Name: ",
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
                    path: `src/pages/${folder}/${fileName}.tsx`,
                    templateFile: 'plop/page/page-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/ui/partials/${folder}/${fileName}/${data.name}.styled.tsx`,
                    templateFile: 'plop/page/page-style-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/ui/partials/${folder}/${fileName}/${data.name}.hook.ts`,
                    templateFile: 'plop/page/page-hook-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/ui/partials/${folder}/${fileName}/${data.name}.logic.ts`,
                    templateFile: 'plop/page/page-logic-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/ui/partials/${folder}/${fileName}/${data.name}.logic.test.ts`,
                    templateFile: 'plop/page/page-logic-test-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/ui/partials/${folder}/${fileName}/${data.name}.store.ts`,
                    templateFile: 'plop/page/page-store-template.hbs',
                },
            ];

            return actions;
        },
    });
};
