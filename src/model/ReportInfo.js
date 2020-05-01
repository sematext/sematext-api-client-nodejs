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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SematextCloudApi) {
      root.SematextCloudApi = {};
    }
    root.SematextCloudApi.ReportInfo = factory(root.SematextCloudApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ReportInfo model module.
   * @module model/ReportInfo
   * @version v3
   */

  /**
   * Constructs a new <code>ReportInfo</code>.
   * @alias module:model/ReportInfo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ReportInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportInfo} obj Optional instance to populate.
   * @return {module:model/ReportInfo} The populated <code>ReportInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('addresses'))
        obj.addresses = ApiClient.convertToType(data['addresses'], 'String');
      if (data.hasOwnProperty('appId'))
        obj.appId = ApiClient.convertToType(data['appId'], 'Number');
      if (data.hasOwnProperty('endDate'))
        obj.endDate = ApiClient.convertToType(data['endDate'], 'Date');
      if (data.hasOwnProperty('filters'))
        obj.filters = ApiClient.convertToType(data['filters'], 'String');
      if (data.hasOwnProperty('reportName'))
        obj.reportName = ApiClient.convertToType(data['reportName'], 'String');
      if (data.hasOwnProperty('startDate'))
        obj.startDate = ApiClient.convertToType(data['startDate'], 'Date');
      if (data.hasOwnProperty('subject'))
        obj.subject = ApiClient.convertToType(data['subject'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
    }
    return obj;
  }

  /**
   * Comma separated list of email addresses
   * @member {String} addresses
   */
  exports.prototype.addresses = undefined;

  /**
   * @member {Number} appId
   */
  exports.prototype.appId = undefined;

  /**
   * @member {Date} endDate
   */
  exports.prototype.endDate = undefined;

  /**
   * @member {String} filters
   */
  exports.prototype.filters = undefined;

  /**
   * @member {String} reportName
   */
  exports.prototype.reportName = undefined;

  /**
   * @member {Date} startDate
   */
  exports.prototype.startDate = undefined;

  /**
   * @member {String} subject
   */
  exports.prototype.subject = undefined;

  /**
   * @member {String} text
   */
  exports.prototype.text = undefined;

  return exports;

}));
