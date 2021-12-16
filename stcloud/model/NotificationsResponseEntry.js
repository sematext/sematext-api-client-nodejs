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
import AlertNotification from './AlertNotification.js'

/**
* The NotificationsResponseEntry model module.
* @module model/NotificationsResponseEntry
* @version 0.1.0
*/
export default class NotificationsResponseEntry {
  /**
    * Constructs a new <code>NotificationsResponseEntry</code>.
    * @alias module:model/NotificationsResponseEntry
    * @class
    */

  constructor() {



  }

  /**
    * Constructs a <code>NotificationsResponseEntry</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NotificationsResponseEntry} obj Optional instance to populate.
    * @return {module:model/NotificationsResponseEntry} The populated <code>NotificationsResponseEntry</code> instance.
    */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new NotificationsResponseEntry()


      if (Object.prototype.hasOwnProperty.call(data,'end')) {
        obj['end'] = ApiClient.convertToType(data['end'], 'String')
      }
      if (Object.prototype.hasOwnProperty.call(data,'notifications')) {
        obj['notifications'] = ApiClient.convertToType(data['notifications'], [AlertNotification])
      }
      if (Object.prototype.hasOwnProperty.call(data,'start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'String')
      }
    }
    return obj
  }

    /**
    * @member {String} end
    */
    'end' = undefined;
    /**
    * @member {Array.<module:model/AlertNotification>} notifications
    */
    'notifications' = undefined;
    /**
    * @member {String} start
    */
    'start' = undefined;




}
