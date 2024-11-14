


const fs = require('fs')

const content  = fs.readFileSync('README.md', 'utf8')

const wordCount = content.split(' ')

const reactWordCount = words.filter(word => word.toLowerCase() === 'React').length


console.log('Palabras: ', reactWordCount)
