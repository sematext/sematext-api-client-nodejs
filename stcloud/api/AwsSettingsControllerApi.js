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
import {ApiClient} from "../ApiClient";
import {CloudWatchSettings} from '../model/CloudWatchSettings';
import {CloudWatchSettingsResponse} from '../model/CloudWatchSettingsResponse';

/**
* AwsSettingsController service.
* @module api/AwsSettingsControllerApi
* @version 0.5.0
*/
export class AwsSettingsControllerApi {

    /**
    * Constructs a new AwsSettingsControllerApi. 
    * @alias module:api/AwsSettingsControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Update App&#x27;s AWS CloudWatch settings
     * Applicable only for AWS Apps
     * @param {module:model/CloudWatchSettings} body dto
     * @param {Number} appId appId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CloudWatchSettingsResponse} and HTTP response
     */
    updateUsingPUTWithHttpInfo(body, appId) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateUsingPUT");
      }
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateUsingPUT");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CloudWatchSettingsResponse;

      return this.apiClient.callApi(
        '/users-web/api/v3/apps/{appId}/aws', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update App&#x27;s AWS CloudWatch settings
     * Applicable only for AWS Apps
     * @param {<&vendorExtensions.x-jsdoc-type>} body dto
     * @param {<&vendorExtensions.x-jsdoc-type>} appId appId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CloudWatchSettingsResponse}
     */
    updateUsingPUT(body, appId) {
      return this.updateUsingPUTWithHttpInfo(body, appId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}