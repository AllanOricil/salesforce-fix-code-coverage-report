function lwc(codeCoverageReport) {
    Object.keys(codeCoverageReport.coverageMap).forEach((currentFilePath) => {
        const newFilePath = currentFilePath.replace(process.cwd() + '/', '');
        codeCoverageReport.coverageMap[currentFilePath].path = newFilePath;
        delete Object.assign(codeCoverageReport.coverageMap, {
            [newFilePath]: codeCoverageReport.coverageMap[currentFilePath]
        })[currentFilePath];
    });

    return codeCoverageReport;
}

module.exports = {
	lwc
}