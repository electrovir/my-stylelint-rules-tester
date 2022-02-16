module.exports = {
    plugins: [
        'stylelint-plugin-color',
        'stylelint-plugin-import',
        'stylelint-plugin-property',
    ],
    rules: {
        'plugin-color/color-types': {
            mode: 'require',
            types: ['rgb'],
        },
        'plugin-import/file-extension': {
            mode: 'require',
            extension: '.css',
        },
        'plugin-property/block-properties': {
            mode: 'block',
            properties: ['float'],
            detailedProperties: [
                {
                    property: 'font-family',
                    exceptions: {
                        values: [
                            'inherit',
                            'unset',
                            /my-.*/,
                        ],
                        selectors: [
                            'input',
                            'select',
                        ],
                    },
                },
            ],
        },
    },
};
