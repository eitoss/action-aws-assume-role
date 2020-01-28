
<p align="center">
  <a href="https://github.com/eitoss/action-aws-assume-role/actions"><img alt="action-aws-assume-role status" src="https://github.com/eitoss/action-aws-assume-role/workflows/assume-role/badge.svg"></a>
</p>

# GitHub Action for AWS Assume Role

A simple action, written in JavaScript, that runs `aws sts assume-role` and set environment variables:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_SESSION_TOKEN`

Note: please install AWS CLI (`aws`) by another action, such as [chrislennon/action-aws-cli](https://github.com/chrislennon/action-aws-cli).

## Usage

```
jobs:
  aws-command:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - uses: chrislennon/action-aws-cli@v1.1
    - uses: eitoss/action-aws-assume-role@v1
      env:
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
      with:
        role_arn: arn:aws:iam::<ACCOUNT-ID>:role/sts-test-role
        role_session_name: sts-test-session
        # optional
        duration_seconds: 900
    - run: |
        aws sts get-caller-identity
```

Output:

```
> Run eitoss/action-aws-assume-role@v1
/opt/hostedtoolcache/aws/1.17.9/x64/aws sts assume-role --role-arn arn:aws:iam::<ACCOUNT-ID>:role/sts-test-role --role-session-name sts-test-session
{
    "AssumedRoleUser": {
        "AssumedRoleId": "ARO...:sts-test-session",
        "Arn": "arn:aws:sts::<ACCOUNT-ID>:assumed-role/sts-test-role/sts-test-session"
    }, 
    "Credentials": {
        "SecretAccessKey": "***",
        "SessionToken": "***",
        "Expiration": "2020-01-28T04:28:17Z",
        "AccessKeyId": "***"
    }
}
```
