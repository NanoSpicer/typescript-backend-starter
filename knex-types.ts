// Note: Pass NODE_ENV to this script to change the codegen behavior
const { knexInstance } = require('./src/database/database')
const { updateTypes } = require('knex-types');
const pathUtils = require('path')
const fs = require('fs')

const basePath = pathUtils.join(__dirname, 'src', 'database', 'generated',)
const filePath = pathUtils.join(basePath, 'models.ts')


// ensure creation of folder structure 
if (!fs.existsSync(basePath)) {
  fs.mkdirSync(basePath, { recursive: true });
}

// delete previous file
try { fs.unlinkSync(filePath); } catch { /*file didnt exist, doesnt matter */ }


updateTypes(knexInstance, { output: filePath })
  .then(_ => {
    console.log(`✅ DB types generated at '${filePath}'`)
  })
  .catch((err) => {
    console.error(`❌ An error has ocurred`, err)
    process.exit(1);
  });
