var http = require("http");
var formidable = require("formidable");
var fs = require("fs");
var convert = require('./index');

http
  .createServer(function (req, res) {
    if (req.url == "/fileupload") {
      var form = new formidable.IncomingForm();
      form.uploadDir = 'E:/workspace/李小婵/svgtofont';
      form.parse(req, function (err, fields, files) {
        console.log(files.filetoupload);
        var oldpath = files.filetoupload.filepath;
        var newpath = "E:/workspace/李小婵/svgtofont/svg/" + files.filetoupload.originalFilename;

        fs.renameSync(oldpath, newpath);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('received image:<br/>');
        res.write('received image:<br/>');
        res.write(`<button onClick=${convert()}>generget font</button>`);
        res.end();
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write("</form>");
      return res.end();
    }
  })
  .listen(8080);
