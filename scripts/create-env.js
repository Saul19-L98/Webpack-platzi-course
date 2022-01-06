// import {fs} from 'fs'
const fs = require('fs');

fs.writeFileSync('./.env', `API=${process.env.API}\n`)