const process = require('process');
const cp = require('child_process');
const path = require('path');

test('test runs', () => {
  process.env['INPUT_ROLE_ARN'] = 'arn:aws:iam::217080158438:role/sts-test-role';
  process.env['INPUT_ROLE_SESSION_NAME'] = 'sts-test-session';
  const ip = path.join(__dirname, 'index.js');
  console.log(cp.execSync(`node ${ip}`, { env: process.env }).toString());
});

test('test runs with region', () => {
  process.env['INPUT_REGION'] = 'us-east-1';
  const ip = path.join(__dirname, 'index.js');
  console.log(cp.execSync(`node ${ip}`, { env: process.env }).toString());
});

test('test runs with duration_seconds', () => {
  process.env['INPUT_DURATION_SECONDS'] = '900';
  const ip = path.join(__dirname, 'index.js');
  console.log(cp.execSync(`node ${ip}`, { env: process.env }).toString());
});
