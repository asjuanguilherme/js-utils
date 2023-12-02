module.exports = {
  '**/*.{js,jsx,ts,tsx,md,json}': filenames =>
    `yarn format ${filenames.join(' ')}`,
}
