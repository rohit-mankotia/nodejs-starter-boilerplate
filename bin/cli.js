#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest);
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

function main() {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.error('Usage: npx nodejs-starter-boilerplate <project-directory>');
    process.exit(1);
  }
  const projectDir = args[0];
  if (fs.existsSync(projectDir)) {
    console.error(`Directory ${projectDir} already exists.`);
    process.exit(1);
  }
  fs.mkdirSync(projectDir);
  const exclude = ['node_modules', '.git', 'bin', 'package-lock.json', 'npm-debug.log', '.env', '.DS_Store'];
  fs.readdirSync(__dirname).forEach((item) => {
    if (!exclude.includes(item)) {
      copyRecursiveSync(path.join(__dirname, item), path.join(projectDir, item));
    }
  });
  console.log(`\nProject created in ${projectDir}`);
  console.log('Installing dependencies...');
  execSync('npm install', { cwd: projectDir, stdio: 'inherit' });
  console.log('\nAll done! To get started:');
  console.log(`  cd ${projectDir}`);
  console.log('  npm start');
}

main();
