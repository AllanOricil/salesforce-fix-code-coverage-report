## Salesforce Fix Apex and LWC Code Coverage Reports

This action fix file paths inside the Apex and LWC Code Coverage Reports


### inputs

- `code-coverage-report-path` path where codecoverage.json is located
- `code-coverage-report-type` it can be either APEX or LWC
- `output-directory` directory path where the fixed code coverage report will be saved

### outputs

Outputs a transformed code coverage in the desired `output-dir` with the following name `fixed-coverage.json`


This is how it can be used in a workflow:

````yaml
- name: Fix Apex Code Coverage
  uses: VodafoneIS/salesforce-fix-apex-coverage-report@main
  continue-on-error: true
  with:
    code-coverage-report-path: ./dist/${{ secrets.SF_ORG_ALIAS }}/tests/coverage/coverage.json
    code-coverage-report-type: APEX
    output-directory: ./dist/${{ secrets.SF_ORG_ALIAS }}/tests/coverage
````




