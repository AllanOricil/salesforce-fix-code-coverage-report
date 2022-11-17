const { apex } = require('./apex');
const { lwc } = require('./lwc');

function getTransform(codeCoverageReportType){
    switch (codeCoverageReportType) {
        case 'APEX': return apex;
        case 'LWC': return lwc;
        default:
            throw new Error('Wrong code coverage type. It must be either APEX or LWC');
    }
}

module.exports = { 
	getTransform
}