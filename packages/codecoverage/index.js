const fs = require('fs');
const path = require('path');
const { getTransform } = require('./transformers');

function transformCodeCoverageReport(codeCoverageReportType, coverageReportPath, outputDir){
    if(!fs.existsSync(path.resolve(coverageReportPath))) throw new Error("ERROR: code coverage report not found.");
    const transform = getTransform(codeCoverageReportType);
    const coverageReport = JSON.parse(
        fs.readFileSync(path.resolve(coverageReportPath)),
        { encoding: 'utf-8' }
    );
    console.log(`Fixing ${codeCoverageReportType} Code Coverage Report`);
    const fixedCodeCoverageReport = transform(coverageReport);
    fs.writeFileSync(
        path.resolve(outputDir, 'fixed-coverage.json'),
        JSON.stringify(fixedCodeCoverageReport),
        { encoding: 'utf-8' }
    );
}

module.exports = {
	transformCodeCoverageReport
}
