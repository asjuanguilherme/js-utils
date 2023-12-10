module.exports = {
  '**/**': filenames => `npm run format ${filenames.join(' ')}`,
  '**/**': filenames => `npm run lint ${filenames.join(' ')} --fix`,
}
