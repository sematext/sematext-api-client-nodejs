/*
 * Sematext Cloud API
 * API Explorer provides access and documentation for Sematext REST API. The REST API requires the API Key to be sent as part of `Authorization` header. E.g.: `Authorization : apiKey e5f18450-205a-48eb-8589-7d49edaea813`.
 *
 * OpenAPI spec version: v3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.30
 *
 * Do not edit the class manually.
 *
 */
import { ApiClient } from '../ApiClient'
import { Error } from './Error'
import { TokenResponseEntry } from './TokenResponseEntry'

/**
 * The TokenResponse model module.
 * @module model/TokenResponse
 * @version 0.4.0
 */
export class TokenResponse {
  /**
   * Constructs a new <code>TokenResponse</code>.
   * @alias module:model/TokenResponse
   * @class
   */
  constructor () {}

  /**
   * Constructs a <code>TokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TokenResponse} obj Optional instance to populate.
   * @return {module:model/TokenResponse} The populated <code>TokenResponse</code> instance.
   */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new TokenResponse()
      if (data.hasOwnProperty('data'))
        obj.data = TokenResponseEntry.constructFromObject(data['data'])
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], [Error])
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String')
      if (data.hasOwnProperty('success'))
        obj.success = ApiClient.convertToType(data['success'], 'Boolean')
    }
    return obj
  }
}

/**
 * @member {module:model/TokenResponseEntry} data
 */
TokenResponse.prototype.data = undefined

/**
 * @member {Array.<module:model/Error>} errors
 */
TokenResponse.prototype.errors = undefined

/**
 * @member {String} message
 */
TokenResponse.prototype.message = undefined

/**
 * @member {Boolean} success
 */
TokenResponse.prototype.success = undefined
