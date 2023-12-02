const fs = require('fs')
const path = require('path')
const glob = require('glob')

function generateIndexFile() {
  const indexPath = path.join('./src', 'index.ts')
  const files = glob.sync('**/*.ts', { cwd: './src' })

  const content = files
    .filter(i => i !== 'index.ts')
    .map(file => `export * from './${file.split('.')[0]}'`)
    .join('\n')

  fs.writeFileSync(indexPath, content)

  console.log(`Generated ${indexPath}`)
}

module.exports = generateIndexFile
