/**
 * Sematext Cloud API
 * API Explorer provides access and documentation for Sematext REST API. The REST API requires the API Key to be sent as part of `Authorization` header. E.g.: `Authorization : apiKey e5f18450-205a-48eb-8589-7d49edaea813`.
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../api/ApiClient.js'

/**
* The AlertNotification model module.
* @module model/AlertNotification
* @version 0.1.0
*/
export default class AlertNotification {
  /**
    * Constructs a new <code>AlertNotification</code>.
    * @alias module:model/AlertNotification
    * @class
    */

  constructor() {



  }

  /**
    * Constructs a <code>AlertNotification</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AlertNotification} obj Optional instance to populate.
    * @return {module:model/AlertNotification} The populated <code>AlertNotification</code> instance.
    */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AlertNotification()


      if (Object.prototype.hasOwnProperty.call(data, 'appName')) {
        obj['appName'] = ApiClient.convertToType(data['appName'], 'String')
      }
      if (Object.prototype.hasOwnProperty.call(data,'appType')) {
        obj['appType'] = ApiClient.convertToType(data['appType'], 'String')
      }
      if (Object.prototype.hasOwnProperty.call(data,'backToNormal')) {
        obj['backToNormal'] = ApiClient.convertToType(data['backToNormal'], 'Boolean')
      }
      if (Object.prototype.hasOwnProperty.call(data,'createTime')) {
        obj['createTime'] = ApiClient.convertToType(data['createTime'], 'String')
      }
      if (Object.prototype.hasOwnProperty.call(data,'sent')) {
        obj['sent'] = ApiClient.convertToType(data['sent'], 'Boolean')
      }
      if (Object.prototype.hasOwnProperty.call(data,'text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String')
      }
      if (Object.prototype.hasOwnProperty.call(data,'when')) {
        obj['when'] = ApiClient.convertToType(data['when'], 'String')
      }
    }
    return obj
  }

    /**
    * @member {String} appName
    */
    'appName' = undefined;
    /**
    * @member {String} appType
    */
    'appType' = undefined;
    /**
    * @member {Boolean} backToNormal
    */
    'backToNormal' = undefined;
    /**
    * @member {String} createTime
    */
    'createTime' = undefined;
    /**
    * @member {Boolean} sent
    */
    'sent' = undefined;
    /**
    * @member {String} text
    */
    'text' = undefined;
    /**
    * @member {String} when
    */
    'when' = undefined;




}
