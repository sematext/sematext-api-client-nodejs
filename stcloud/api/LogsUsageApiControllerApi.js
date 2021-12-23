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
import { UsageResponse } from '../model/UsageResponse'

/**
 * LogsUsageApiController service.
 * @module api/LogsUsageApiControllerApi
 * @version 0.4.0
 */
export class LogsUsageApiControllerApi {
  /**
    * Constructs a new LogsUsageApiControllerApi. 
    * @alias module:api/LogsUsageApiControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
  constructor (apiClient) {
    this.apiClient = apiClient || ApiClient.instance
  }

  /**
   * getForRange
   * @param {Number} appId appId
   * @param {Number} from from
   * @param {Number} to to
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UsageResponse} and HTTP response
   */
  getForRangeUsingGETWithHttpInfo (appId, from, to) {
    let postBody = null
    // verify the required parameter 'appId' is set
    if (appId === undefined || appId === null) {
      throw new Error(
        "Missing the required parameter 'appId' when calling getForRangeUsingGET"
      )
    }
    // verify the required parameter 'from' is set
    if (from === undefined || from === null) {
      throw new Error(
        "Missing the required parameter 'from' when calling getForRangeUsingGET"
      )
    }
    // verify the required parameter 'to' is set
    if (to === undefined || to === null) {
      throw new Error(
        "Missing the required parameter 'to' when calling getForRangeUsingGET"
      )
    }

    let pathParams = {
      appId: appId,
      from: from,
      to: to
    }
    let queryParams = {}
    let headerParams = {}
    let formParams = {}

    let authNames = ['api_key']
    let contentTypes = []
    let accepts = ['application/json']
    let returnType = UsageResponse

    return this.apiClient.callApi(
      '/logsene-reports/api/v3/apps/{appId}/usage/{from}/{to}',
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
   * getForRange
   * @param {<&vendorExtensions.x-jsdoc-type>} appId appId
   * @param {<&vendorExtensions.x-jsdoc-type>} from from
   * @param {<&vendorExtensions.x-jsdoc-type>} to to
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UsageResponse}
   */
  getForRangeUsingGET (appId, from, to) {
    return this.getForRangeUsingGETWithHttpInfo(appId, from, to).then(function (
      response_and_data
    ) {
      return response_and_data.data
    })
  }
}
