import express from 'express';
import _ from 'lodash';
import mongo from '../db/mongodb/member.model';
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // const memberTest = new mongo({
  //   name: 'test',
  //   user_id: '1222',
  //   open_id: '2222',
  //   avatar_url: '232',
  //   group_id: ['1232'],
  //   organization_id: '232',
  //   phone_number: '232',
  //   email: '232',
  //   password: '232'
  // })
  // memberTest.save(function (err, fluffy) {
  //   if (err) return console.error(err);
  //   console.log(fluffy)
  // });
  mongo.find(function (err, fluffy) {
    if (err) return console.error(err);
    console.log(fluffy)
  })
  res.render('index', { title: 'Express' });
});

export default router
