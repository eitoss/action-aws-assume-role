const core = require('@actions/core');
const { STSClient, AssumeRoleCommand } = require('@aws-sdk/client-sts-node');

async function run() {
  const region = core.getInput('region');
  const RoleArn = core.getInput('role_arn');
  const RoleSessionName = core.getInput('role_session_name');
  const DurationSeconds = core.getInput('duration_seconds');

  let clientParams = {};
  let cmd = `aws`;
  if (region) {
    clientParams = { ...clientParams, region };
    cmd += ` --region ${region}`;
  } else if (!process.env.AWS_REGION) {
    clientParams = { ...clientParams, region: "us-east-1" };
    cmd += ` --region ${clientParams.region}`;
  }

  let assumeRoleParams = { RoleArn, RoleSessionName };
  cmd += ` sts assume-role --role-arn ${RoleArn} --role-session-name ${RoleSessionName}`;
  if (DurationSeconds) {
    assumeRoleParams = { ...assumeRoleParams, DurationSeconds };
    cmd += ` --duration-seconds ${DurationSeconds}`;
  }

  try {
    const client = new STSClient(clientParams);
    const command = new AssumeRoleCommand(assumeRoleParams);
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
