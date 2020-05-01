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
    root.SematextCloudApi.BillingInfo = factory(root.SematextCloudApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The BillingInfo model module.
   * @module model/BillingInfo
   * @version v3
   */

  /**
   * Constructs a new <code>BillingInfo</code>.
   * @alias module:model/BillingInfo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>BillingInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BillingInfo} obj Optional instance to populate.
   * @return {module:model/BillingInfo} The populated <code>BillingInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('creditCardId'))
        obj.creditCardId = ApiClient.convertToType(data['creditCardId'], 'Number');
      if (data.hasOwnProperty('paymentMethod'))
        obj.paymentMethod = ApiClient.convertToType(data['paymentMethod'], 'String');
      if (data.hasOwnProperty('planId'))
        obj.planId = ApiClient.convertToType(data['planId'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} creditCardId
   */
  exports.prototype.creditCardId = undefined;

  /**
   * @member {String} paymentMethod
   */
  exports.prototype.paymentMethod = undefined;

  /**
   * @member {Number} planId
   */
  exports.prototype.planId = undefined;

  return exports;

}));
