/*
 * Sematext Cloud API
 * API Explorer provides access and documentation for Sematext REST API. The REST API requires the API Key to be sent as part of `Authorization` header. E.g.: `Authorization : apiKey e5f18450-205a-48eb-8589-7d49edaea813`.
 *
 * OpenAPI spec version: v3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient'

/**
 * The UserInfo model module.
 * @module model/UserInfo
 * @version 0.1.0
 */
export class UserInfo {
  /**
   * Constructs a new <code>UserInfo</code>.
   * @alias module:model/UserInfo
   * @class
   */
  constructor () {}

  /**
   * Constructs a <code>UserInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserInfo} obj Optional instance to populate.
   * @return {module:model/UserInfo} The populated <code>UserInfo</code> instance.
   */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new UserInfo()
      if (data.hasOwnProperty('loginName'))
        // eslint-disable-line no-prototype-builtins
        obj.loginName = ApiClient.convertToType(data['loginName'], 'String')
    }
    return obj
  }
}

/**
 * @member {String} loginName
 */
UserInfo.prototype.loginName = undefined
