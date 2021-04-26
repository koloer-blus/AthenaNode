import mongoose from 'mongoose';
import mongoInstance from './connect';
import * as dbName from './model.name';
import * as util from '@/utils';

type AFindKey = Record<string, any>

const MeetSchema = new mongoose.Schema({
  name: String,
  description: String,
  open_id: String,
  room_id: String,
  capacity: Number,
  device: Array,
  address: String,
  avatar_url: String,
  password: String,
  open: Boolean
});


MeetSchema.methods.getMemberBaseInfo = function (findKey: AFindKey, callBack: (value: any) => void) {
  const params = util.verify.verifyParams(findKey);
  if (!params) return [];
  return this.model(dbName.meet).find(findKey, callBack);
}
const MemberModal = mongoInstance.model(dbName.member, MeetSchema);

export default MemberModal;