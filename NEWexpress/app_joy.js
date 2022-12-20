var express = require("express");
var app = express.Router();

var cors = require('cors');   // 加在 var app = express(); 之後
app.use(cors({}));            // 加入一個 middleware
// var cookieParser = require('cookie-parser');
// app.use(cookieParser());
// const bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded();

// 引入圖片
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8000);
// 連接資料庫 MySQL
var db = require('./db');

const member = require('./member')
app.use('/member', member)
// const back = require("./back");
// app.use("/back", back);

app.get("/", function (req, res) {
  res.send(
    "hello 2022"
  );
})



///// 首頁 可動態更新最新消息
app.get("/homeNEWS", function (req, res) {
  // res.send(req.params);
  db.conn(
    "select * from homepage order by homepage.postdate DESC LIMIT 6",
    "",
    function (result) {
      res.send(JSON.stringify(result));
    })
})

///// 周邊商品資訊 + 周邊封面縮圖
app.get("/PeripheralInfo/:id", function (req, res) {
  // res.send(req.params);
  db.conn(
    "select * from (peripheralinfo inner join peripheralinfopic on peripheralinfo.peripheralId = peripheralinfopic.peripheralId)inner join peripheralformat on peripheralinfo.peripheralId = peripheralformat.peripheralId WHERE peripheralformat.peripheralId = ?",
    [req.params.id],
    function (rows) {
      // console.log(err)
      res.send(JSON.stringify(rows[0]));
    })
})

///// 周邊規格
app.get('/PeripheralSpec/:id', (req, res) => {
  // console.log(req.params.id)
  db.conn(
    "SELECT * FROM peripheralformat WHERE peripheralId = ?",
    [req.params.id],
    (rows, err) => {
      res.send(rows);
    }
  )
})

///// 周邊圖片
app.get('/PeripheralPic/:id', (req, res) => {
  // console.log(req.params.id)
  db.conn(
    "SELECT * FROM `peripheralinfopic` WHERE peripheralId = ?",
    [req.params.id],
    (rows, err) => {
      res.send(rows);
    }
  )
})

///// 遊戲商品資訊 + 遊戲圖片 + 遊戲評論 + 遊戲圖片的文字
app.get("/GameInfo/:id", function (req, res) {
  // res.send(req.params);
  db.conn(
    // "select * from (((comment inner join gameinfo on comment.gameId = gameinfo.gameId)inner join gameinfopic on comment.gameId = gameinfopic.gameId)inner join system_spec on comment.gameId = system_spec.gameId)inner join gameinfopictext on comment.gameId = gameinfopictext.gameId",
    // "select * from (((comment inner join gameinfo on comment.gameId = gameinfo.gameId)inner join gameinfopic on comment.gameId = gameinfopic.gameId)inner join gameinfopictext on comment.gameId = gameinfopictext.gameId)inner join system_spec on comment.gameId = system_spec.gameId",
    "select * from ((((comment inner join member on comment.uid = member.uid)inner join gameinfo on comment.gameId = gameinfo.gameId)inner join system_spec on comment.gameId = system_spec.gameId)inner join gameinfopic_joy on comment.gameId = gameinfopic_joy.gameId)inner join gameinfopictext_joy on comment.gameId = gameinfopictext_joy.gameId WHERE comment.gameId = ?",
    [req.params.id],
    function (rows) {
      // console.log(err)
      res.send(JSON.stringify(rows[0]));
    })
})

///// 遊戲圖片 + 配圖片的文字
app.get('/GamePic/:id', (req, res) => {
  // console.log(req.params.id)
  db.conn(
    "SELECT * FROM gameinfopic inner join gameinfopictext on gameinfopic.imgId = gameinfopictext.imgId WHERE gameinfopic.gameId = ?",
    [req.params.id],
    (rows, err) => {
      res.send(rows);
    }
  )
})

///// 會員資料
app.get('/member/:id', (req, res) => {
  // console.log(req.params.id)
  db.conn(
    "SELECT * FROM comment inner join member on comment.uid = member.uid WHERE comment.gameId = ?",
    [req.params.id],
    (rows, err) => {
      res.send(rows);
    }

  )
})

///// 增加遊戲的評論
app.post("/GameInfoComment", function (req, res) {
  db.conn(
    "INSERT INTO `comment`( `gameId`, `comment`) VALUES (?,?)",
    [req.body.gameId, req.body.comment],
    function (result) {
      res.send(JSON.stringify(result));
      console.log(result)
    }
  )
})

///// 增加周邊商品到購物車裡
app.post("/cartListTest", function (req, res) {
  db.conn(
    "INSERT INTO `cart` ( `peripheralId`, `peripheralName`, `pid`, `peripheralPhoto`, `count`, `mail`) VALUES (?,?,?,?,?,?)",
    // "INSERT INTO shopcart (peripheralId, peripheralName, peripheralQty, peripheralPrice, peripheralSpec) VALUES (?,?,?,?,?)",
    [req.body.peripheralId, req.body.peripheralName, req.body.pid, req.body.peripheralPhoto, req.body.count, req.body.mail],
    function (result) {
      res.send(JSON.stringify(result));
    }
  )
})


module.exports = app;
