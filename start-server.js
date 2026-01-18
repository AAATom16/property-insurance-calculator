#!/usr/bin/env node
// Wrapper script to ensure PORT and HOSTNAME are set correctly for Railway
// Railway sets PORT automatically, but we must ensure HOSTNAME is 0.0.0.0
const port = process.env.PORT || '80';
// Always use 0.0.0.0 to listen on all interfaces
const hostname = '0.0.0.0';

// Explicitly set both before requiring the server
process.env.PORT = port;
process.env.HOSTNAME = hostname;

console.log(`Starting server on ${hostname}:${port}`);
console.log(`NODE_ENV: ${process.env.NODE_ENV || 'production'}`);
console.log(`PORT from env: ${process.env.PORT}`);
console.log(`HOSTNAME set to: ${process.env.HOSTNAME}`);

// Start the Next.js standalone server
require('./.next/standalone/server.js');
