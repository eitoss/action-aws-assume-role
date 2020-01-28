
<p align="center">
  <a href="https://github.com/eitoss/action-aws-assume-role/actions"><img alt="action-aws-assume-role status" src="https://github.com/eitoss/action-aws-assume-role/workflows/assume-role/badge.svg"></a>
</p>

# GitHub Action for AWS Assume Role

Run `aws sts assume-role` and set environment variables, written in JavaScript:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_SESSION_TOKEN`

## Usage

```
jobs:
  aws-command:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - uses: eitoss/action-aws-assume-role@v1.2
      env:
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
      with:
        role_arn: arn:aws:iam::<ACCOUNT-ID>:role/sts-test-role
        role_session_name: sts-test-session
        # optional
        region: us-east-1
        duration_seconds: 3600

    # Test AWS CLI
    - uses: chrislennon/action-aws-cli@v1.1
    - run: |
        aws sts get-caller-identity
```

Output example:

```
> Run eitoss/action-aws-assume-role@v1.2
aws sts assume-role --role-arn arn:aws:iam::<ACCOUNT-ID>:role/sts-test-role --role-session-name sts-test-session
```
