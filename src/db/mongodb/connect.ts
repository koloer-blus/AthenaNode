import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/test');

const mongoInstance = mongoose.createConnection(
  'mongodb://127.0.0.1:27017/athena_meeting',

  // 一些兼容配置，必须加，你不写运行的时候会提示你加。
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
mongoInstance.on('open', () => {
  console.log('打开 mongodb 连接');
})
mongoInstance.on('err', (err) => {
  console.log('err:' + err);
})

export default mongoInstance;