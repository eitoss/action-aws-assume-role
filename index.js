const core = require('@actions/core');
const { STSClient, AssumeRoleCommand } = require('@aws-sdk/client-sts-node');

async function run() {
  const RoleArn = core.getInput('role_arn');
  const RoleSessionName = core.getInput('role_session_name');
  const DurationSeconds = core.getInput('duration_seconds');

  let params = { RoleArn, RoleSessionName };
  let cmd = `aws sts assume-role --role-arn ${RoleArn} --role-session-name ${RoleSessionName}`;
  if (DurationSeconds) {
    params = { ...params, DurationSeconds };
    cmd += ` --duration-seconds ${DurationSeconds}`;
  }

  try {
    const client = new STSClient({});
    const command = new AssumeRoleCommand(params);
    const result = await client.send(command);
    console.log(`[command]${cmd}`);
    console.log(`::add-mask::${result.Credentials.AccessKeyId}`);
    console.log(`::add-mask::${result.Credentials.SecretAccessKey}`);
    console.log(`::add-mask::${result.Credentials.SessionToken}`);
    console.log(`::set-env name=AWS_ACCESS_KEY_ID::${result.Credentials.AccessKeyId}`);
    console.log(`::set-env name=AWS_SECRET_ACCESS_KEY::${result.Credentials.SecretAccessKey}`);
    console.log(`::set-env name=AWS_SESSION_TOKEN::${result.Credentials.SessionToken}`);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
