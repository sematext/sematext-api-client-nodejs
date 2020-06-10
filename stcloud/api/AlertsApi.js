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
import {AlertRule} from '../model/AlertRule' // eslint-disable-line no-unused-vars
import {GenericApiResponse} from '../model/GenericApiResponse'

/**
* Alerts service.
* @module api/AlertsApi
* @version 0.1.0
*/
export class AlertsApi {

  /**
    * Constructs a new AlertsApi.
    * @alias module:api/AlertsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance
  }



  /**
     * Create alert rule
     * @param {module:model/AlertRule} dto dto
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenericApiResponse} and HTTP response
     */
  createAlertUsingPOSTWithHttpInfo(dto) {
    let postBody = dto

    // verify the required parameter 'dto' is set
    if (dto === undefined || dto === null) {
      throw new Error('Missing the required parameter \'dto\' when calling createAlertUsingPOST')
    }


    let pathParams = {
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = ['api_key']
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = GenericApiResponse

    return this.apiClient.callApi(
      '/users-web/api/v3/alerts', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    )
  }

  /**
     * Create alert rule
     * @param {module:model/AlertRule} dto dto
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenericApiResponse}
     */
  createAlertUsingPOST(dto) {
    return this.createAlertUsingPOSTWithHttpInfo(dto)
      .then(function(response_and_data) {
        return response_and_data.data
      })
  }


  /**
     * Delete alert rule
     * @param {Number} updateableAlertId updateableAlertId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenericApiResponse} and HTTP response
     */
  deleteAlertRuleUsingDELETEWithHttpInfo(updateableAlertId) {
    let postBody = null

    // verify the required parameter 'updateableAlertId' is set
    if (updateableAlertId === undefined || updateableAlertId === null) {
      throw new Error('Missing the required parameter \'updateableAlertId\' when calling deleteAlertRuleUsingDELETE')
    }


    let pathParams = {
      'updateableAlertId': updateableAlertId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = ['api_key']
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = GenericApiResponse

    return this.apiClient.callApi(
      '/users-web/api/v3/alerts/{updateableAlertId}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    )
  }

  /**
     * Delete alert rule
     * @param {Number} updateableAlertId updateableAlertId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenericApiResponse}
     */
  deleteAlertRuleUsingDELETE(updateableAlertId) {
    return this.deleteAlertRuleUsingDELETEWithHttpInfo(updateableAlertId)
      .then(function(response_and_data) {
        return response_and_data.data
      })
  }


  /**
     * Disable alert rule
     * @param {Number} updateableAlertId updateableAlertId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenericApiResponse} and HTTP response
     */
  disableAlertRuleUsingPUTWithHttpInfo(updateableAlertId) {
    let postBody = null

    // verify the required parameter 'updateableAlertId' is set
    if (updateableAlertId === undefined || updateableAlertId === null) {
      throw new Error('Missing the required parameter \'updateableAlertId\' when calling disableAlertRuleUsingPUT')
    }


    let pathParams = {
      'updateableAlertId': updateableAlertId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = ['api_key']
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = GenericApiResponse

    return this.apiClient.callApi(
      '/users-web/api/v3/alerts/{updateableAlertId}/disable', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    )
  }

  /**
     * Disable alert rule
     * @param {Number} updateableAlertId updateableAlertId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenericApiResponse}
     */
  disableAlertRuleUsingPUT(updateableAlertId) {
    return this.disableAlertRuleUsingPUTWithHttpInfo(updateableAlertId)
      .then(function(response_and_data) {
        return response_and_data.data
      })
  }


  /**
     * Enable alert rule
     * @param {Number} updateableAlertId updateableAlertId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenericApiResponse} and HTTP response
     */
  enableAlertRuleUsingPUTWithHttpInfo(updateableAlertId) {
    let postBody = null

    // verify the required parameter 'updateableAlertId' is set
    if (updateableAlertId === undefined || updateableAlertId === null) {
      throw new Error('Missing the required parameter \'updateableAlertId\' when calling enableAlertRuleUsingPUT')
    }


    let pathParams = {
      'updateableAlertId': updateableAlertId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = ['api_key']
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = GenericApiResponse

    return this.apiClient.callApi(
      '/users-web/api/v3/alerts/{updateableAlertId}/enable', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    )
  }

  /**
     * Enable alert rule
     * @param {Number} updateableAlertId updateableAlertId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenericApiResponse}
     */
  enableAlertRuleUsingPUT(updateableAlertId) {
    return this.enableAlertRuleUsingPUTWithHttpInfo(updateableAlertId)
      .then(function(response_and_data) {
        return response_and_data.data
      })
  }


  /**
     * Get alert rules for an app
     * @param {Number} appId appId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenericApiResponse} and HTTP response
     */
  getAlertRulesForAppUsingGETWithHttpInfo(appId) {
    let postBody = null

    // verify the required parameter 'appId' is set
    if (appId === undefined || appId === null) {
      throw new Error('Missing the required parameter \'appId\' when calling getAlertRulesForAppUsingGET')
    }


    let pathParams = {
      'appId': appId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = ['api_key']
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = GenericApiResponse

    return this.apiClient.callApi(
      '/users-web/api/v3/apps/{appId}/alerts', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    )
  }

  /**
     * Get alert rules for an app
     * @param {Number} appId appId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenericApiResponse}
     */
  getAlertRulesForAppUsingGET(appId) {
    return this.getAlertRulesForAppUsingGETWithHttpInfo(appId)
      .then(function(response_and_data) {
        return response_and_data.data
      })
  }


}
