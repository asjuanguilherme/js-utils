import { promises as fsPromises, unlinkSync } from 'fs'
import { join } from 'path'
import { glob } from 'glob'

async function generateIndexFile() {
  const indexPath = join('./src', 'index.ts')
  const files = glob.sync('*.ts', { cwd: './src' })

  const content =
    files
      .filter(i => i !== 'index.ts')
      .map(file => `export * from './${file.split('.')[0]}'`)
      .join('\n') + '\n'

  try {
    unlinkSync(indexPath)
    console.log(`Cleaning ${indexPath}`)
    await fsPromises.writeFile(indexPath, content)
    console.log(`Generated ${indexPath}`)
  } catch (error) {
    console.error(`Error generating ${indexPath}:`, error)
  }
}

generateIndexFile()

export default generateIndexFile
