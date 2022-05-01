# Setup clash
Github action for setup clash

default http(s) proxy port is `11223`

### Example
```yml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Setup clash
      uses: OtaDou/setup-clash@v1
      with:
        subscription_url: ${{ secrets.SUBSCRIPTION_URL }}
        proxies_name_regex: JAPAN
    - run: curl --proxy "http://127.0.0.1:11223" ipinfo.io
```
### Inputs
| name               | value  | default | description                              |
| ------------------ | ------ | ------- | ---------------------------------------- |
| subscription_url   | string |         | Pass it using github secret to cover it. |
| proxies_name_regex | string | ''      | Regex for filter proxies                 |
