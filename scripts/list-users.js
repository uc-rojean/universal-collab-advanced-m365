/**
 * list-users.js
 * Purpose: List all users in Microsoft 365 tenant using Microsoft Graph API
 */

require('isomorphic-fetch');
const { Client } = require('@microsoft/microsoft-graph-client');
require('dotenv').config();

// Load credentials from .env file
const tenantId = process.env.TENANT_ID;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

// OAuth token endpoint
const tokenEndpoint = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

// Get access token
async function getAccessToken() {
    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('scope', 'https://graph.microsoft.com/.default');
    params.append('client_secret', clientSecret);
    params.append('grant_type', 'client_credentials');

    const response = await fetch(tokenEndpoint, {
        method: 'POST',
        body: params
    });

    const data = await response.json();
    return data.access_token;
}

// List users
async function listUsers() {
    try {
        const token = await getAccessToken();

        const client = Client.init({
            authProvider: (done) => {
                done(null, token);
            }
        });

        const users = await client.api('/users').get();
        console.log('✅ Users in your tenant:');
        console.log(users.value);
    } catch (error) {
        console.error('❌ Error listing users:', error);
    }
}

listUsers();
