import mongoose from 'mongoose';
import mongoInstance from './connect';
import * as dbName from './model.name';
import * as util from '@/utils';

type AFindKey = Record<string, any>

const GroupSchema = new mongoose.Schema({
  name: String,
  description: String,
  group_id: String,
  open_id: String,
  avatar_url: String,
  members: Array,
  phone_number: String,
  email: String,
  owner: String,
  open: Boolean
});


GroupSchema.methods.getMemberBaseInfo = function (findKey: AFindKey, callBack: (value: any) => void) {
  const params = util.verify.verifyParams(findKey);
  if (!params) return [];
  return this.model(dbName.member).find(findKey, callBack);
}
const GroupModal = mongoInstance.model(dbName.group, GroupSchema);

export default GroupModal