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
import { UsageDto } from './UsageDto'

/**
 * The UsageMultiResponseEntry model module.
 * @module model/UsageMultiResponseEntry
 * @version 0.4.0
 */
export class UsageMultiResponseEntry {
  /**
   * Constructs a new <code>UsageMultiResponseEntry</code>.
   * @alias module:model/UsageMultiResponseEntry
   * @class
   */
  constructor () {}

  /**
   * Constructs a <code>UsageMultiResponseEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsageMultiResponseEntry} obj Optional instance to populate.
   * @return {module:model/UsageMultiResponseEntry} The populated <code>UsageMultiResponseEntry</code> instance.
   */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new UsageMultiResponseEntry()
      if (data.hasOwnProperty('usage'))
        obj.usage = UsageDto.constructFromObject(data['usage'])
    }
    return obj
  }
}

/**
 * @member {module:model/UsageDto} usage
 */
UsageMultiResponseEntry.prototype.usage = undefined
