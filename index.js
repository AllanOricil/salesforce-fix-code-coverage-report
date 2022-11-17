const core = require('@actions/core');
const { transformCodeCoverageReport } = require('./packages/codecoverage');

try{
    console.log('CWD: ' + process.cwd());
    const codeCoverageReportPath = core.getInput('code-coverage-report-path');
    const codeCoverageReportType = core.getInput('code-coverage-report-type');
    const outputDir = core.getInput('output-directory');
    console.log('processing code coverage report');
    transformCodeCoverageReport(codeCoverageReportType, codeCoverageReportPath, outputDir);
    console.log('code coverage report was successfully processed');
}catch(error){
    core.setFailed(error.message);
}
