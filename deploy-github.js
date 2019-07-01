const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/aj-4/aj-4.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)