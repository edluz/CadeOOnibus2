var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.post('/auth', function(req, res, next) {
  request.post(`http://api.olhovivo.sptrans.com.br/v2.1/Login/Autenticar?token=${req.query.token}`)
  .pipe(res);
});

router.get('/auth', function(req, res, next) {
  request.get(`http://api.olhovivo.sptrans.com.br/v2.1/Login/Autenticar?token=${req.query.token}`)
  .pipe(res);
});

router.get('/Posicao', function(req, res, next) {
  request({
    uri: 'http://api.olhovivo.sptrans.com.br/v2.1/Posicao',
    headers: {
      'Accept': req.headers.accept,
      'Cookie': req.headers.cookie,
      'Connection': req.headers.connection
    }
  }).pipe(res);
});

module.exports = router;
