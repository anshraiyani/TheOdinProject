const http = require('http');
const fs=require('fs')

// const options = {
//   hostname: 'example.com',
//   port: 443,
//   path: '/todos',
//   method: 'GET',
// };

// const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`);

//   res.on('data', d => {
//     process.stdout.write(d);
//   });
// });

// req.on('error', error => {
//   console.error(error);
// });

// req.end();

const data=fs.readFileSync('data.json','utf-8')
const index=fs.readFileSync('index.html','utf-8')

const server=http.createServer((req,res)=>{
  console.log('server started')
  res.setHeader('dummy','dummyValue')
  res.setHeader('Content-Type','application/json')
  res.setHeader('Content-Type','text/html')
  res.end(index)
})

server.listen(8080)