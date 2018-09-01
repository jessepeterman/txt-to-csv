// node toCSV.js [fileName to convert]
 
const fs = require('fs');
const fileName = process.argv[2];

if(fileName){
  
const saveFileName = process.argv[3] || fileName.split('.txt')[0] + '.csv';


const commaSeparate = (text) => {
  return text.split(' ').join(',');
};

fs.readFile(fileName, 'utf8', (err, data) => {
  if(err) throw err;
  
  fs.writeFile(saveFileName, commaSeparate(data), 'utf8', (err) => {
   if(err) throw err;
    console.log('CSV exported');
  });

});
}

console.log('***** Error: Please rerun command with a file to convert.*****')
process.exitCode = 1;
