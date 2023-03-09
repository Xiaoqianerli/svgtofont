import express from 'express';
import base64Img from 'base64-img';
import svgtofont from 'svgtofont';
import path from 'path';
import fetch from 'node-fetch';
import bodyParse from 'body-parser';

const app = express();
const port = 3000;

// app.use(express.json());
app.use(bodyParse.json({limit: '10000kb'}));
app.use(bodyParse.urlencoded({
  limit: '10000kb',
  extended: true,
  parameterLimit: 50000
}))

const convert = function(filepath) {
  svgtofont({
      src: path.resolve(process.cwd(), 'icon'), // svg path
      dist: path.resolve(process.cwd(), 'fonts'), // output path
      fontName: 'svgtofont', // font name
      css: true, // Create CSS files.
    }).then(() => {
      console.log('done!');
    });
};

app.post('/api', (req, res) => {
  const {data, name='empty'} = req.body;
  base64Img.img(data, 'svg', name, function(err, filepath) {
  res.send(filepath)

    console.log(filepath)
  });

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
