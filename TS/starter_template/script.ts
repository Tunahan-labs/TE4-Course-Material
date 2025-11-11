// TypeScript copies this path into dist/script.js, and the browser only loads .js files, so we reference data.js here even though the source file is data.ts.

import { projectInfo } from "./modules/data.js";

const { name, version, description } = projectInfo;

console.log(`Project: ${name}`);
console.log(`Version: ${version}`);
console.log(`About: ${description}`);
