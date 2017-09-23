'use strict'
const fs = require('fs')

let data = JSON.parse(fs.readFileSync(`amb9-e5y3.json`, 'utf8'))
// amb9-e5y3.json is pulled from sfopen data

let assetTypes =
["Food",
"Water",
"Energy/Fuel",
"Medical"]

let names = [
  'Gianni Hart',
  'Rayne Nash',
  'Jonathon Pope',
  'Alana Mcdowell',
  'Pedro Salazar',
  'Payton Allison'
]

let titles =
['Primis ornare vestibulum',
'Placerat ornare massa',
'Aliquam pellentesque est',
'Integer accumsan fringilla',
'Eros venenatis taciti',
'Dignissim justo in',
'Purus nisi imperdiet',
'Aliquam eget dis',
'Donec faucibus duis',
'Hendrerit habitasse dui',
'Felis class augue',
'Taciti at netus',
'Vel est ipsum',
'Dui mollis sollicitudin',
'Pharetra proin mattis']


let output = data.map(function (el){
  let res = {  }
  Object.assign(res, el)

  res.title = titles[getRandomInt(0,titles.length)]
  res.description = el.description
  res.date = el.date
  res.location = el.location
  res.category = assetTypes[getRandomInt(0,assetTypes.length)]
  res.author = names[getRandomInt(0,names.length)]


  return res
 })

write('data.json', output)
// output the file
function write(filename, text){
  if (typeof text != 'string') text = JSON.stringify(text)
  fs.writeFile(filename, text,
    function(err) {
      if (err) { return console.log(err); }
      console.log('The file was saved as', filename);
    }
  )
}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

