const fs = require('fs');
const path = require('path');
const url = require('url');
const events = require('events');

const EventEmitter = new events.EventEmitter();

/**
 * 获取后缀名
 * @param {*} EventEmitter 事件监听
 * @param {*} extname 后缀名
 */
const getExt = (EventEmitter, extname) => {
  fs.readFile('./json/mime.json', (err, data) => {
    if (err) {
      console.log(err);
      return false;
    }
    const Mime = JSON.parse(data.toString());
    EventEmitter.emit('to_mime', Mime[extname] || 'text/html');
    // callback(Mime[extname]);
  });
};

// /**
//  * 路由
//  * @param {*} req
//  * @param {*} res
//  * @param {*} staticName 静态资源的路径
//  */
// const router = (req, res, staticName) => {
//   let pathname = url.parse(req.url, true).pathname;

//   // 加载首页
//   if (pathname === '/') {
//     pathname = '/index.html';
//   }

//   const extname = path.extname(pathname);
//   // 过滤网站图标
//   if (pathname !== '/favicon.ico') {
//     console.log(`${staticName}/${pathname}`);
//     fs.readFile(`${staticName}/${pathname}`, (err, data) => {
//       if (err) {
//         console.log(err);
//         fs.readFile('static/404.html', (err, data404) => {
//           if (err) {
//             console.log(err);
//             return false;
//           }
//           res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
//           res.write(data404);
//           res.end();
//         });
//       } else {
//         let headType = '';
//         getExt(EventEmitter, extname);
//         EventEmitter.on('to_mime', (type) => {
//           console.log(type);
//           headType = type;
//           console.log(headType);
//           res.writeHead(200, { "Content-Type": `${headType};charset=utf-8` });
//           // res.write(data); // 事件驱动时，不可用
//           res.end(data);
//         });
//       }
//     });
//   }
// }

const router = {
  login: (req, res) => {
    console.log('login');
  },

  register: (req, res) => {
    console.log('register');
  },


};

module.exports = router;