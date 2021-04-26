import express from 'express';
import _ from 'lodash';
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export default router;