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

import {ApiClient} from '../ApiClient'

/**
 * The AppDescription model module.
 * @module model/AppDescription
 * @version 0.1.0
 */
export class AppDescription {
  /**
   * Constructs a new <code>AppDescription</code>.
   * @alias module:model/AppDescription
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AppDescription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppDescription} obj Optional instance to populate.
   * @return {module:model/AppDescription} The populated <code>AppDescription</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AppDescription()
      if (data.hasOwnProperty('description'))  // eslint-disable-line no-prototype-builtins
        obj.description = ApiClient.convertToType(data['description'], 'String')
    }
    return obj
  }
}

/**
 * @member {String} description
 */
AppDescription.prototype.description = undefined
