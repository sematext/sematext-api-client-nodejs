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
    root.SematextCloudApi.TagApiControllerApi = factory(root.SematextCloudApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * TagApiController service.
   * @module api/TagApiControllerApi
   * @version v3
   */

  /**
   * Constructs a new TagApiControllerApi. 
   * @alias module:api/TagApiControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getTagNamesUsingGET operation.
     * @callback module:api/TagApiControllerApi~getTagNamesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets tag names for the given application identifiers appearing in the given time frame.
     * @param {String} appIds appIds
     * @param {Object} opts Optional parameters
     * @param {Number} opts.from from
     * @param {Number} opts.to to
     * @param {Boolean} opts.metrics metrics (default to true)
     * @param {Boolean} opts.logs logs (default to true)
     * @param {Boolean} opts.events events (default to false)
     * @param {Boolean} opts.rum rum (default to true)
     * @param {module:api/TagApiControllerApi~getTagNamesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getTagNamesUsingGET = function(appIds, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'appIds' is set
      if (appIds === undefined || appIds === null) {
        throw new Error("Missing the required parameter 'appIds' when calling getTagNamesUsingGET");
      }


      var pathParams = {
        'appIds': appIds
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'metrics': opts['metrics'],
        'logs': opts['logs'],
        'events': opts['events'],
        'rum': opts['rum'],
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/spm-reports/api/v3/apps/{appIds}/tagNames', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsingGET2 operation.
     * @callback module:api/TagApiControllerApi~getUsingGET2Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets values for specified tags for the given application identifiers appearing in the given time frame.
     * @param {String} appIds appIds
     * @param {Array.<String>} tag tag
     * @param {Object} opts Optional parameters
     * @param {Number} opts.from from
     * @param {Number} opts.to to
     * @param {Boolean} opts.metrics metrics (default to true)
     * @param {Boolean} opts.logs logs (default to true)
     * @param {Boolean} opts.events events (default to false)
     * @param {Boolean} opts.rum rum (default to true)
     * @param {module:api/TagApiControllerApi~getUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getUsingGET2 = function(appIds, tag, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'appIds' is set
      if (appIds === undefined || appIds === null) {
        throw new Error("Missing the required parameter 'appIds' when calling getUsingGET2");
      }

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling getUsingGET2");
      }


      var pathParams = {
        'appIds': appIds
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'metrics': opts['metrics'],
        'logs': opts['logs'],
        'events': opts['events'],
        'rum': opts['rum'],
      };
      var collectionQueryParams = {
        'tag': {
          value: tag,
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/spm-reports/api/v3/apps/{appIds}/metrics/filters', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsingGET3 operation.
     * @callback module:api/TagApiControllerApi~getUsingGET3Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets values for specified tags for the given application identifiers appearing in the given time frame.
     * @param {String} appIds appIds
     * @param {Array.<String>} tag tag
     * @param {Object} opts Optional parameters
     * @param {Number} opts.from from
     * @param {Number} opts.to to
     * @param {Boolean} opts.metrics metrics (default to true)
     * @param {Boolean} opts.logs logs (default to true)
     * @param {Boolean} opts.events events (default to false)
     * @param {Boolean} opts.rum rum (default to true)
     * @param {module:api/TagApiControllerApi~getUsingGET3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.getUsingGET3 = function(appIds, tag, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'appIds' is set
      if (appIds === undefined || appIds === null) {
        throw new Error("Missing the required parameter 'appIds' when calling getUsingGET3");
      }

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling getUsingGET3");
      }


      var pathParams = {
        'appIds': appIds
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'metrics': opts['metrics'],
        'logs': opts['logs'],
        'events': opts['events'],
        'rum': opts['rum'],
      };
      var collectionQueryParams = {
        'tag': {
          value: tag,
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api_key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/spm-reports/api/v3/apps/{appIds}/tags', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
