module.exports = function (plop, handlers) {
    plop.setGenerator('store', {
        description: 'Store',
        prompts: [
            {
                name: 'name',
                type: 'input',
                message: "Store's Name: ",
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
                    path: `src/data/stores/${folder}/${fileName}Store.ts`,
                    templateFile: 'plop/store/store-template.hbs',
                },
            ];

            return actions;
        },
    });
};

