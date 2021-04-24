import mongoose from 'mongoose';

const db = mongoose.connection;

// 连接成功
db.on('open', function(){
  console.log('MongoDB Connection Successed');
});
// 连接失败
db.on('error', function(){
  console.log('MongoDB Connection Error');
});