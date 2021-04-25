import _ from 'lodash';

export const verifyParams = function (params: any) {
  const newParams = _.clone(params);
  if (_.isBoolean(params)) return newParams;
  if (_.isNil(params) || _.isNaN(params)) return undefined;
  if ((_.isArray(params) || _.isArrayLike(params)) && !params.length) return undefined;
  if ((_.isObject(params) || _.isObjectLike(params)) && _.isEmpty(params)) return undefined;
  return newParams;
}