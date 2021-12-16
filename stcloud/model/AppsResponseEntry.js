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
import App from './App.js'

/**
* The AppsResponseEntry model module.
* @module model/AppsResponseEntry
* @version 0.1.0
*/
export default class AppsResponseEntry {
  /**
    * Constructs a new <code>AppsResponseEntry</code>.
    * @alias module:model/AppsResponseEntry
    * @class
    */

  constructor() {



  }

  /**
    * Constructs a <code>AppsResponseEntry</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AppsResponseEntry} obj Optional instance to populate.
    * @return {module:model/AppsResponseEntry} The populated <code>AppsResponseEntry</code> instance.
    */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AppsResponseEntry()


      if (Object.prototype.hasOwnProperty.call(data,'apps')) {
        obj['apps'] = ApiClient.convertToType(data['apps'], [App])
      }
    }
    return obj
  }

    /**
    * @member {Array.<module:model/App>} apps
    */
    'apps' = undefined;




}
