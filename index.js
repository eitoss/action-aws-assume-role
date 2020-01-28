const core = require('@actions/core');
const exec = require('@actions/exec');


// most @actions toolkit packages have async methods
async function run() {
  const role_arn = core.getInput('role_arn');
  const role_session_name = core.getInput('role_session_name');
  const duration_seconds = core.getInput('duration_seconds');

  let args = ['sts', 'assume-role'];
  if (role_arn) {
    args = [...args, '--role-arn', role_arn];
  }
  if (role_session_name) {
    args = [...args, '--role-session-name', role_session_name];
  }
  if (duration_seconds) {
    args = [...args, '--duration-seconds', duration_seconds];
  }

  try {
    await exec.exec('aws', args, {
      listeners: {
        stdout: data => {
          const result = JSON.parse(data.toString());
          console.log(`::add-mask::${result.Credentials.AccessKeyId}`);
          console.log(`::add-mask::${result.Credentials.SecretAccessKey}`);
          console.log(`::add-mask::${result.Credentials.SessionToken}`);
          console.log(`::set-env name=AWS_ACCESS_KEY_ID::${result.Credentials.AccessKeyId}`);
          console.log(`::set-env name=AWS_SECRET_ACCESS_KEY::${result.Credentials.SecretAccessKey}`);
          console.log(`::set-env name=AWS_SESSION_TOKEN::${result.Credentials.SessionToken}`);
        }
      }
    });
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
