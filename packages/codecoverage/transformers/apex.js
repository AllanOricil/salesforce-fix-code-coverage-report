const glob = require('glob');

function apex(codeCoverageReport) {
    const files = glob.sync(
        '**/*.{cls,trigger}',
        {
            ignore: [
                '.git',
                '.github',
                '.vlocity',
                '.vscode',
                '.sfdx',
                '.sf',
                '.husky',
                'node_modules',
                'dist',
                'test',
                'images',
                'newport-design-system',
                'vlocity',
                'vlocity_old',
                'vlocity-temp',
                'mdapi',
                'env',
                'env-tmp',
                '**/__test__/**',
                '**/__tests__/**',
                '**/__mocks__/**',
                '**/*.{xml,yml,html,css,sh}',
            ]
        }
    );

    if(!files || !files.length) throw new Error("ERROR: could not retrieve apex classes and triggers file paths");
    
    const noMatches = [];
    Object.keys(codeCoverageReport).forEach((key) => {
        const fileName = key.replace('no-map/', '');
        const newPath = files.find((file) => file.endsWith(fileName + '.cls')) || files.find((file) => file.endsWith(fileName + '.trigger'));
        if (newPath) {
            codeCoverageReport[key].path = newPath;
            delete Object.assign(codeCoverageReport, {
                [newPath]: codeCoverageReport[key]
            })[key];
        } else {
            noMatches.push(fileName);
            delete codeCoverageReport[key];
        }
    });
    console.log('Files that are not managed in this repository');
    console.table(noMatches);

    return codeCoverageReport;
}

module.exports = {
	apex
}