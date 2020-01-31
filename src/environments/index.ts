/* tslint:disable */

let env: any;
// if (process.env.ENVIRONMENT === 'production') {
//   env = require('./environments.production');
// } else if (process.env.ENVIRONMENT === 'staging') {
//   env = require('./environments.staging');
// } else if (process.env.ENVIRONMENT === 'qa') {
//   env = require('./environments.qa');
// } else {
//   env = require('./environments.local');
// }
env = require('./environments.qa');
//env = require('./environments.local');

export const environments = env.environment;
