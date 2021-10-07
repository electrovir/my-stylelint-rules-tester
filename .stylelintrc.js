module.exports = {
    plugins: ['stylelint-plugin-color', 'stylelint-plugin-import'],
    rules: {
        'plugin-color/color-types': {
            mode: 'require',
            types: ['rgb'],
        },
        'plugin-import/file-extension': {
            mode: 'require',
            extension: '.css',
        },
    },
};
