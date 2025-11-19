/**
 * scripts/list-users.js
 * Lists users via Microsoft Graph using Client Credentials flow.
 * Safe version: validates env vars and avoids printing sensitive data.
 */

require('dotenv').config();
require('isomorphic-fetch');
const { Client } = require('@microsoft/microsoft-graph-client');

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

const tokenEndpoint = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

async function getAccessToken() {
  const params = new URLSearchParams();
  params.append('client_id', clientId);
  params.append('scope', 'https://graph.microsoft.com/.default');
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

async function listUsers() {
  assertEnv();
  const token = await getAccessToken();
  const client = Client.init({
    authProvider: (done) => done(null, token),
  });

  // Use a small page size to avoid huge output
  const resp = await client.api('/users').top(10).select('id,displayName,mail,userPrincipalName').get();

  console.log('✅ Users (first 10):');
  for (const u of resp.value) {
    console.log(`- ${u.displayName || '(no name)'} | ${u.userPrincipalName || u.mail || ''}`);
  }
}

listUsers().catch((err) => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
