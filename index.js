var express = require('express');
var multer = require('multer');
var cors = require('cors');
require('dotenv').config()

var app = express();
const upload = multer({dest: 'uploads/'});

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

const raedFileHeaders = function(req, res) {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
}

app.post("/api/fileanalyse", upload.single('upfile'), raedFileHeaders);