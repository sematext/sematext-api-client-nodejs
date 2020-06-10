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

import { ApiClient } from '../ApiClient'
import { AppDescription } from '../model/AppDescription' // eslint-disable-line no-unused-vars
import { GenericApiResponse } from '../model/GenericApiResponse'
import { Invitation } from '../model/Invitation' // eslint-disable-line no-unused-vars
import { UpdateAppInfo } from '../model/UpdateAppInfo' // eslint-disable-line no-unused-vars

/**
 * Apps service.
 * @module api/AppsApi
 * @version 0.1.0
 */
export class AppsApi {
  /**
   * Constructs a new AppsApi.
   * @alias module:api/AppsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor (apiClient) {
    this.apiClient = apiClient || ApiClient.instance
  }

  /**
   * Get all App types supported for the account identified with apiKey
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenericApiResponse} and HTTP response
   */
  getAppTypesUsingGETWithHttpInfo () {
    let postBody = null

    let pathParams = {}
    let queryParams = {}
    let headerParams = {}
    let formParams = {}

    let authNames = ['api_key']
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = GenericApiResponse

    return this.apiClient.callApi(
      '/users-web/api/v3/apps/types',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    )
  }

  /**
   * Get all App types supported for the account identified with apiKey
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenericApiResponse}
   */
  getAppTypesUsingGET () {
    return this.getAppTypesUsingGETWithHttpInfo().then(function (
      response_and_data
    ) {
      return response_and_data.data
    })
  }

  /**
   * Gets defails for one particular App
   * @param {Number} anyStateAppId anyStateAppId
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenericApiResponse} and HTTP response
   */
  getUsingGETWithHttpInfo (anyStateAppId) {
    let postBody = null

    // verify the required parameter 'anyStateAppId' is set
    if (anyStateAppId === undefined || anyStateAppId === null) {
      throw new Error(
        'Missing the required parameter \'anyStateAppId\' when calling getUsingGET'
      )
    }

    let pathParams = {
      anyStateAppId: anyStateAppId
    }
    let queryParams = {}
    let headerParams = {}
    let formParams = {}

    let authNames = ['api_key']
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = GenericApiResponse

    return this.apiClient.callApi(
      '/users-web/api/v3/apps/{anyStateAppId}',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    )
  }

  /**
   * Gets defails for one particular App
   * @param {Number} anyStateAppId anyStateAppId
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenericApiResponse}
   */
  getUsingGET (anyStateAppId) {
    return this.getUsingGETWithHttpInfo(anyStateAppId).then(function (
      response_and_data
    ) {
      return response_and_data.data
    })
  }

  /**
   * Invite guests to an app
   * @param {module:model/Invitation} invitation For `app` and `apps` fields only `id` needs to be populated.Other fields can be left empty or with default values
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenericApiResponse} and HTTP response
   */
  inviteAppGuestsUsingPOSTWithHttpInfo (invitation) {
    let postBody = invitation

    // verify the required parameter 'invitation' is set
    if (invitation === undefined || invitation === null) {
      throw new Error(
        'Missing the required parameter \'invitation\' when calling inviteAppGuestsUsingPOST'
      )
    }

    let pathParams = {}
    let queryParams = {}
    let headerParams = {}
    let formParams = {}

    let authNames = ['api_key']
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = GenericApiResponse

    return this.apiClient.callApi(
      '/users-web/api/v3/apps/guests',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    )
  }

  /**
   * Invite guests to an app
   * @param {module:model/Invitation} invitation For `app` and `apps` fields only `id` needs to be populated.Other fields can be left empty or with default values
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenericApiResponse}
   */
  inviteAppGuestsUsingPOST (invitation) {
    return this.inviteAppGuestsUsingPOSTWithHttpInfo(invitation).then(function (
      response_and_data
    ) {
      return response_and_data.data
    })
  }

  /**
   * Get all users of apps accessible to this account
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenericApiResponse} and HTTP response
   */
  listAppsUsersUsingGETWithHttpInfo () {
    let postBody = null

    let pathParams = {}
    let queryParams = {}
    let headerParams = {}
    let formParams = {}

    let authNames = ['api_key']
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = GenericApiResponse

    return this.apiClient.callApi(
      '/users-web/api/v3/apps/users',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    )
  }

  /**
   * Get all users of apps accessible to this account
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenericApiResponse}
   */
  listAppsUsersUsingGET () {
    return this.listAppsUsersUsingGETWithHttpInfo().then(function (
      response_and_data
    ) {
      return response_and_data.data
    })
  }

  /**
   * Get all apps accessible by account identified with apiKey
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenericApiResponse} and HTTP response
   */
  listUsingGETWithHttpInfo () {
    let postBody = null

    let pathParams = {}
    let queryParams = {}
    let headerParams = {}
    let formParams = {}

    let authNames = ['api_key']
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = GenericApiResponse

    return this.apiClient.callApi(
      '/users-web/api/v3/apps',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    )
  }

  /**
   * Get all apps accessible by account identified with apiKey
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenericApiResponse}
   */
  listUsingGET () {
    return this.listUsingGETWithHttpInfo().then(function (response_and_data) {
      return response_and_data.data
    })
  }

  /**
   * Update description of the app
   * App can be in any state
   * @param {Number} anyStateAppId App Id
   * @param {Object} opts Optional parameters
   * @param {module:model/AppDescription} opts.updateDetails Update Details
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenericApiResponse} and HTTP response
   */
  updateDescriptionUsingPUTWithHttpInfo (anyStateAppId, opts) {
    opts = opts || {}
    let postBody = opts['updateDetails']

    // verify the required parameter 'anyStateAppId' is set
    if (anyStateAppId === undefined || anyStateAppId === null) {
      throw new Error(
        'Missing the required parameter \'anyStateAppId\' when calling updateDescriptionUsingPUT'
      )
    }

    let pathParams = {
      anyStateAppId: anyStateAppId
    }
    let queryParams = {}
    let headerParams = {}
    let formParams = {}

    let authNames = ['api_key']
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = GenericApiResponse

    return this.apiClient.callApi(
      '/users-web/api/v3/apps/{anyStateAppId}/description',
      'PUT',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    )
  }

  /**
   * Update description of the app
   * App can be in any state
   * @param {Number} anyStateAppId App Id
   * @param {Object} opts Optional parameters
   * @param {module:model/AppDescription} opts.updateDetails Update Details
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenericApiResponse}
   */
  updateDescriptionUsingPUT (anyStateAppId, opts) {
    return this.updateDescriptionUsingPUTWithHttpInfo(anyStateAppId, opts).then(
      function (response_and_data) {
        return response_and_data.data
      }
    )
  }

  /**
   * Update app
   * App can be in any state
   * @param {module:model/UpdateAppInfo} dto dto
   * @param {Number} anyStateAppId App Id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GenericApiResponse} and HTTP response
   */
  updateUsingPUT1WithHttpInfo (dto, anyStateAppId) {
    let postBody = dto

    // verify the required parameter 'dto' is set
    if (dto === undefined || dto === null) {
      throw new Error(
        'Missing the required parameter \'dto\' when calling updateUsingPUT1'
      )
    }

    // verify the required parameter 'anyStateAppId' is set
    if (anyStateAppId === undefined || anyStateAppId === null) {
      throw new Error(
        'Missing the required parameter \'anyStateAppId\' when calling updateUsingPUT1'
      )
    }

    let pathParams = {
      anyStateAppId: anyStateAppId
    }
    let queryParams = {}
    let headerParams = {}
    let formParams = {}

    let authNames = ['api_key']
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = GenericApiResponse

    return this.apiClient.callApi(
      '/users-web/api/v3/apps/{anyStateAppId}',
      'PUT',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType
    )
  }

  /**
   * Update app
   * App can be in any state
   * @param {module:model/UpdateAppInfo} dto dto
   * @param {Number} anyStateAppId App Id
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GenericApiResponse}
   */
  updateUsingPUT1 (dto, anyStateAppId) {
    return this.updateUsingPUT1WithHttpInfo(dto, anyStateAppId).then(function (
      response_and_data
    ) {
      return response_and_data.data
    })
  }
}
