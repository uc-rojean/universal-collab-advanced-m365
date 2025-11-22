
/**
 * scripts/list-users.cjs
 * Lists users via Microsoft Graph using Client Credentials flow.
 * Safe version: validates env vars and avoids printing sensitive data.
 */

require('dotenv').config();                 // loads .env in repo root
require('isomorphic-fetch');               // fetch polyfill for Node
const { Client } = require('@microsoft/microsoft-graph-client');

// --- Environment variables ---
const tenantId = process.env.TENANT_ID;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

function assertEnv() {
  const missing = [];
  if (!tenantId) missing.push('TENANT_ID');
  if (!clientId) missing.push('CLIENT_ID');
  if (!clientSecret) missing.push('CLIENT_SECRET');
  if (missing.length) {
    console.error('❌ Missing environment variables:', missing.join(', '));
    console.error('ℹ️ Create a local .env file (do not commit it) or set system env vars.');
    process.exit(1);
  }
}

// --- OAuth Client Credentials token ---
const tokenEndpoint = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

async function getAccessToken() {
  const params = new URLSearchParams();
  params.append('client_id', clientId);
  params.append('scope', 'https://graph.microsoft.com/.default'); // uses app permissions granted in Azure
  params.append('client_secret', clientSecret);
  params.append('grant_type', 'client_credentials');

  const res = await fetch(tokenEndpoint, { method: 'POST', body: params });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token request failed: ${res.status} ${res.statusText}\n${text}`);
  }
  const data = await res.json();
  return data.access_token;
}

// --- Main: list first 10 users ---
async function listUsers() {
  assertEnv();

  const token = await getAccessToken();
  const client = Client.init({
    authProvider: (done) => done(null, token),
  });

  // Keep response small to avoid noisy logs in CI
  const resp = await client
    .api('/users')
    .top(10)
    .select('id,displayName,mail,userPrincipalName')
    .get();

  console.log('✅ Users (first 10):');
  for (const u of resp.value) {
    const name = u.displayName ?? '(no name)';
    const email = u.userPrincipalName ?? (u.mail ?? '');
    console.log(`- ${name} ${email}`);
  }
}

listUsers().catch((err) => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
