#!/usr/bin/env node
// Wrapper script to ensure PORT and HOSTNAME are set correctly for Railway
// Railway sets PORT automatically, but we ensure it's used
const port = process.env.PORT || '80';
const hostname = process.env.HOSTNAME || '0.0.0.0';

process.env.PORT = port;
process.env.HOSTNAME = hostname;

console.log(`Starting server on ${hostname}:${port}`);
console.log(`NODE_ENV: ${process.env.NODE_ENV || 'production'}`);
console.log(`PORT from env: ${process.env.PORT}`);

// Start the Next.js standalone server
require('./.next/standalone/server.js');
