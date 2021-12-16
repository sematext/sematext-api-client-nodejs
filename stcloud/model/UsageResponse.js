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
import Error from './Error.js'
import UsageResponseEntry from './UsageResponseEntry.js'

/**
* The UsageResponse model module.
* @module model/UsageResponse
* @version 0.1.0
*/
export default class UsageResponse {
  /**
    * Constructs a new <code>UsageResponse</code>.
    * @alias module:model/UsageResponse
    * @class
    */

  constructor() {



  }

  /**
    * Constructs a <code>UsageResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UsageResponse} obj Optional instance to populate.
    * @return {module:model/UsageResponse} The populated <code>UsageResponse</code> instance.
    */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UsageResponse()


      if (Object.prototype.hasOwnProperty.call(data,'data')) {
        obj['data'] = UsageResponseEntry.constructFromObject(data['data'])
      }
      if (Object.prototype.hasOwnProperty.call(data,'errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [Error])
      }
      if (Object.prototype.hasOwnProperty.call(data,'message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String')
      }
      if (Object.prototype.hasOwnProperty.call(data,'success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean')
      }
    }
    return obj
  }

    /**
    * @member {module:model/UsageResponseEntry} data
    */
    'data' = undefined;
    /**
    * @member {Array.<module:model/Error>} errors
    */
    'errors' = undefined;
    /**
    * @member {String} message
    */
    'message' = undefined;
    /**
    * @member {Boolean} success
    */
    'success' = undefined;




}
