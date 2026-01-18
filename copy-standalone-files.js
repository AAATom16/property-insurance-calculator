#!/usr/bin/env node
// Script to copy static files to standalone build
const fs = require('fs');
const path = require('path');

const standaloneDir = path.join(__dirname, '.next/standalone');
const staticSource = path.join(__dirname, '.next/static');
const staticDest = path.join(standaloneDir, '.next/static');
const publicSource = path.join(__dirname, 'public');
const publicDest = path.join(standaloneDir, 'public');

// Copy .next/static
if (fs.existsSync(staticSource)) {
  console.log('Copying .next/static to standalone...');
  if (!fs.existsSync(path.join(standaloneDir, '.next'))) {
    fs.mkdirSync(path.join(standaloneDir, '.next'), { recursive: true });
  }
  copyRecursiveSync(staticSource, staticDest);
  console.log('✓ Copied .next/static');
}

// Copy public folder
if (fs.existsSync(publicSource)) {
  console.log('Copying public to standalone...');
  copyRecursiveSync(publicSource, publicDest);
  console.log('✓ Copied public');
}

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log('✓ All static files copied to standalone build');
