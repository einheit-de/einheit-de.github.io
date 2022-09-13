import { googleFormsToJson } from 'react-google-forms-hooks'
import * as fs from "fs"

const saveJsonToFile = (filename, json) => {
  fs.writeFile(filename, JSON.stringify(json), 'utf8', function (err) {
    if (err) throw err
  })
}

const run = async () => {
  const result = await googleFormsToJson(
    'https://forms.gle/FP26eV1oeBT628QU7'
  )
  saveJsonToFile('./form.json', result)
}

run()

// import { googleFormsToJson } from 'react-google-forms-hooks'
// import * as fs from "fs"

// // can use both full and shortened form url
// const result = await googleFormsToJson(
//   'https://docs.google.com/forms/d/e/1FAIpQLSe5U3qvg8WHs4nkU-e6h2RlAD7fKoCkou6HO2w2-tXYIA_F8g/viewform'
// )

// fs.writeFile("./form.json", JSON.stringify(result.fields), function (err) {
//   if (err) {
//     return console.log(err)
//   }
//   console.log("The file was saved!")
// })


// console.log(result.fields)
// // will output the form fields in an appropriate structure
// // [
// //   {
// //     label: 'Do you want to give some feedback?',
// //     type: 'LONG_ANSWER',
// //     id: '1864908950',
// //     required: false
// //   },
// //   ...
// // ]
