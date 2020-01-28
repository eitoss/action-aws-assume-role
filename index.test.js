const process = require('process');
const cp = require('child_process');
const path = require('path');

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_ROLE_ARN'] = 'arn:aws:iam::217080158438:role/sts-test-role';
  process.env['INPUT_ROLE_SESSION_NAME'] = 'sts-test-session';
  const ip = path.join(__dirname, 'index.js');
  console.log(cp.execSync(`node ${ip}`, { env: process.env }).toString());
});
