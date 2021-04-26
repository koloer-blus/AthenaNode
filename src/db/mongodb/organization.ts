import mongoose from 'mongoose';
import mongoInstance from './connect';
import * as dbName from './model.name';
import * as util from '@/utils';

type AFindKey = Record<string, any>

const OrganizationSchema = new mongoose.Schema({
  name: String,
  description: String,
  organization_id: String,
  open_id: String,
  avatar_url: String,
  groups: Array,
  phone_number: String,
  email: String,
  owner: String,
  open: Boolean
});


OrganizationSchema.methods.getMemberBaseInfo = function (findKey: AFindKey, callBack: (value: any) => void) {
  const params = util.verify.verifyParams(findKey);
  if (!params) return [];
  return this.model(dbName.member).find(findKey, callBack);
}
const OrganizationModal = mongoInstance.model(dbName.organization,OrganizationSchema);

export default OrganizationModal