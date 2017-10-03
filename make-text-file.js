const fs = require('fs')

const makeFile = () => {
  fs.writeFile('./text_files/thing.txt', 'hi, thing.txt', (err) => {
      if (err) console.log(err)

      console.log('thing saved dude')
  })
}

export default makeFile;