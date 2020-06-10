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
 * The AppMetadata model module.
 * @module model/AppMetadata
 * @version 0.1.0
 */
export class AppMetadata {
  /**
   * Constructs a new <code>AppMetadata</code>.
   * @alias module:model/AppMetadata
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AppMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppMetadata} obj Optional instance to populate.
   * @return {module:model/AppMetadata} The populated <code>AppMetadata</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AppMetadata()
      if (data.hasOwnProperty('awsCloudWatchAccessKey'))  // eslint-disable-line no-prototype-builtins
        obj.awsCloudWatchAccessKey = ApiClient.convertToType(data['awsCloudWatchAccessKey'], 'String')
      if (data.hasOwnProperty('awsCloudWatchSecretKey')) // eslint-disable-line no-prototype-builtins
        obj.awsCloudWatchSecretKey = ApiClient.convertToType(data['awsCloudWatchSecretKey'], 'String')
      if (data.hasOwnProperty('awsFetchFrequency')) // eslint-disable-line no-prototype-builtins
        obj.awsFetchFrequency = ApiClient.convertToType(data['awsFetchFrequency'], 'String')
      if (data.hasOwnProperty('awsRegion')) // eslint-disable-line no-prototype-builtins
        obj.awsRegion = ApiClient.convertToType(data['awsRegion'], 'String')
      if (data.hasOwnProperty('subTypes')) // eslint-disable-line no-prototype-builtins
        obj.subTypes = ApiClient.convertToType(data['subTypes'], ['String'])
    }
    return obj
  }
}

/**
 * @member {String} awsCloudWatchAccessKey
 */
AppMetadata.prototype.awsCloudWatchAccessKey = undefined

/**
 * @member {String} awsCloudWatchSecretKey
 */
AppMetadata.prototype.awsCloudWatchSecretKey = undefined

/**
 * Allowed values for the <code>awsFetchFrequency</code> property.
 * @enum {String}
 * @readonly
 */
AppMetadata.AwsFetchFrequencyEnum = {
  /**
   * value: "MINUTE"
   * @const
   */
  MINUTE: 'MINUTE',

  /**
   * value: "FIVE_MINUTES"
   * @const
   */
  FIVE_MINUTES: 'FIVE_MINUTES',

  /**
   * value: "FIFTEEN_MINUTES"
   * @const
   */
  FIFTEEN_MINUTES: 'FIFTEEN_MINUTES'
}

/**
 * @member {module:model/AppMetadata.AwsFetchFrequencyEnum} awsFetchFrequency
 */
AppMetadata.prototype.awsFetchFrequency = undefined

/**
 * Allowed values for the <code>awsRegion</code> property.
 * @enum {String}
 * @readonly
 */
AppMetadata.AwsRegionEnum = {
  /**
   * value: "US_EAST_1"
   * @const
   */
  uSEAST1: 'US_EAST_1',

  /**
   * value: "US_WEST_1"
   * @const
   */
  uSWEST1: 'US_WEST_1',

  /**
   * value: "EU_WEST_1"
   * @const
   */
  eUWEST1: 'EU_WEST_1',

  /**
   * value: "US_WEST_2"
   * @const
   */
  uSWEST2: 'US_WEST_2',

  /**
   * value: "AP_SOUTHEAST_1"
   * @const
   */
  aPSOUTHEAST1: 'AP_SOUTHEAST_1',

  /**
   * value: "AP_SOUTHEAST_2"
   * @const
   */
  aPSOUTHEAST2: 'AP_SOUTHEAST_2',

  /**
   * value: "AP_NORTHEAST_1"
   * @const
   */
  aPNORTHEAST1: 'AP_NORTHEAST_1',

  /**
   * value: "SA_EAST_1"
   * @const
   */
  sAEAST1: 'SA_EAST_1',

  /**
   * value: "GovCloud"
   * @const
   */
  govCloud: 'GovCloud',

  /**
   * value: "CN_NORTH_1"
   * @const
   */
  cNNORTH1: 'CN_NORTH_1',

  /**
   * value: "US_EAST_2"
   * @const
   */
  uSEAST2: 'US_EAST_2',

  /**
   * value: "AP_SOUTH_1"
   * @const
   */
  aPSOUTH1: 'AP_SOUTH_1',

  /**
   * value: "AP_NORTHEAST_2"
   * @const
   */
  aPNORTHEAST2: 'AP_NORTHEAST_2',

  /**
   * value: "CA_CENTRAL_1"
   * @const
   */
  cACENTRAL1: 'CA_CENTRAL_1',

  /**
   * value: "EU_CENTRAL_1"
   * @const
   */
  eUCENTRAL1: 'EU_CENTRAL_1',

  /**
   * value: "EU_WEST_2"
   * @const
   */
  eUWEST2: 'EU_WEST_2'
}

/**
 * @member {module:model/AppMetadata.AwsRegionEnum} awsRegion
 */
AppMetadata.prototype.awsRegion = undefined

/**
 * Allowed values for the <code>subTypes</code> property.
 * @enum {String}
 * @readonly
 */
AppMetadata.SubTypesEnum = {
  /**
   * value: "aws_ec2"
   * @const
   */
  ec2: 'aws_ec2',

  /**
   * value: "aws_elb"
   * @const
   */
  elb: 'aws_elb',

  /**
   * value: "aws_ebs"
   * @const
   */
  ebs: 'aws_ebs'
}

/**
 * Comma separated list of AWS types monitored by created app
 * @member {Array.<module:model/AppMetadata.SubTypesEnum>} subTypes
 */
AppMetadata.prototype.subTypes = undefined
