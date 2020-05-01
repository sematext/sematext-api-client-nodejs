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
    define(['ApiClient', 'model/GenericApiResponse', 'model/UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GenericApiResponse'), require('../model/UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.SematextCloudApi) {
      root.SematextCloudApi = {};
    }
    root.SematextCloudApi.ResetPasswordApi = factory(root.SematextCloudApi.ApiClient, root.SematextCloudApi.GenericApiResponse, root.SematextCloudApi.UserInfo);
  }
}(this, function(ApiClient, GenericApiResponse, UserInfo) {
  'use strict';

  /**
   * ResetPassword service.
   * @module api/ResetPasswordApi
   * @version v3
   */

  /**
   * Constructs a new ResetPasswordApi. 
   * @alias module:api/ResetPasswordApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the resetPasswordUsingPOST operation.
     * @callback module:api/ResetPasswordApi~resetPasswordUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GenericApiResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset Password
     * @param {module:model/UserInfo} dto dto
     * @param {module:api/ResetPasswordApi~resetPasswordUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GenericApiResponse}
     */
    this.resetPasswordUsingPOST = function(dto, callback) {
      var postBody = dto;

      // verify the required parameter 'dto' is set
      if (dto === undefined || dto === null) {
        throw new Error("Missing the required parameter 'dto' when calling resetPasswordUsingPOST");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GenericApiResponse;

      return this.apiClient.callApi(
        '/users-web/api/v3/account/password/reset', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
