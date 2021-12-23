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
import { UsageMultiResponseEntry } from './UsageMultiResponseEntry'

/**
 * The UsageMultiResponse model module.
 * @module model/UsageMultiResponse
 * @version 0.4.0
 */
export class UsageMultiResponse {
  /**
   * Constructs a new <code>UsageMultiResponse</code>.
   * @alias module:model/UsageMultiResponse
   * @class
   */
  constructor () {}

  /**
   * Constructs a <code>UsageMultiResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsageMultiResponse} obj Optional instance to populate.
   * @return {module:model/UsageMultiResponse} The populated <code>UsageMultiResponse</code> instance.
   */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new UsageMultiResponse()
      if (data.hasOwnProperty('data'))
        obj.data = UsageMultiResponseEntry.constructFromObject(data['data'])
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
 * @member {module:model/UsageMultiResponseEntry} data
 */
UsageMultiResponse.prototype.data = undefined

/**
 * @member {Array.<module:model/Error>} errors
 */
UsageMultiResponse.prototype.errors = undefined

/**
 * @member {String} message
 */
UsageMultiResponse.prototype.message = undefined

/**
 * @member {Boolean} success
 */
UsageMultiResponse.prototype.success = undefined
