module.exports = function (plop, handlers) {
    plop.setGenerator('service', {
        description: 'Service',
        prompts: [
            {
                name: 'name',
                type: 'input',
                message: "Service's Name: ",
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
                    path: `src/data/services/${folder}/${fileName}/${fileName}Service.ts`,
                    templateFile: 'plop/service/service-template.hbs',
                },
                {
                    type: 'add',
                    path: `src/data/services/${folder}/${fileName}/${fileName}Service.test.ts`,
                    templateFile: 'plop/service/service-test-template.hbs',
                },
            ];

            return actions;
        },
    });
};
