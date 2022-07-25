/*
 * Sematext Cloud API
 * API Explorer provides access and documentation for Sematext REST API. The REST API requires the API Key to be sent as part of `Authorization` header. E.g.: `Authorization : apiKey e5f18450-205a-48eb-8589-7d49edaea813`.
 *
 * OpenAPI spec version: v3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The CreateTokenDto model module.
 * @module model/CreateTokenDto
 * @version 0.5.0
 */
export class CreateTokenDto {
  /**
   * Constructs a new <code>CreateTokenDto</code>.
   * @alias module:model/CreateTokenDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateTokenDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateTokenDto} obj Optional instance to populate.
   * @return {module:model/CreateTokenDto} The populated <code>CreateTokenDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateTokenDto();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('readable'))
        obj.readable = ApiClient.convertToType(data['readable'], 'Boolean');
      if (data.hasOwnProperty('writeable'))
        obj.writeable = ApiClient.convertToType(data['writeable'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
CreateTokenDto.prototype.name = undefined;

/**
 * @member {Boolean} readable
 */
CreateTokenDto.prototype.readable = undefined;

/**
 * @member {Boolean} writeable
 */
CreateTokenDto.prototype.writeable = undefined;

