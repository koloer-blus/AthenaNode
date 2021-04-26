import mongoose from 'mongoose';
import mongoInstance from './connect';
import * as dbName from './model.name';
import * as util from '@/utils';

type AFindKey = Record<string, any>

const MemberSchema = new mongoose.Schema({
  name: String,
  user_id: String,
  open_id: String,
  avatar_url: String,
  group_id: Array,
  organization_id: String,
  phone_number: String,
  email: String,
  password: String
});


MemberSchema.methods.getMemberBaseInfo = function (findKey: AFindKey, callBack: (value: any) => void) {
  const params = util.verify.verifyParams(findKey);
  if (!params) return [];
  return this.model(dbName.member).find(findKey, callBack);
}
const MemberModal = mongoInstance.model(dbName.member, MemberSchema);

export default MemberModal;