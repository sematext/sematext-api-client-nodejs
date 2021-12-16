/**
 * Sematext Cloud API
 * API Explorer provides access and documentation for Sematext REST API. The REST API requires the API Key to be sent as part of `Authorization` header. E.g.: `Authorization : apiKey e5f18450-205a-48eb-8589-7d49edaea813`.
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../api/ApiClient.js'
import BasicOrganizationDto from './BasicOrganizationDto.js'
import Plan from './Plan.js'
import ServiceIntegration from './ServiceIntegration.js'
import UserRole from './UserRole.js'

/**
* The App model module.
* @module model/App
* @version 0.1.0
*/
export default class App {
  /**
    * Constructs a new <code>App</code>.
    * @alias module:model/App
    * @class
    */

  constructor() {



  }

  /**
    * Constructs a <code>App</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/App} obj Optional instance to populate.
    * @return {module:model/App} The populated <code>App</code> instance.
    */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new App()


      if (Object.prototype.hasOwnProperty.call(data,'ajaxThreshold')) {
        obj['ajaxThreshold'] = ApiClient.convertToType(data['ajaxThreshold'], 'Number')
      }
      if (Object.prototype.hasOwnProperty.call(data,'appType')) {
        obj['appType'] = ApiClient.convertToType(data['appType'], 'String')
      }
      if (Object.prototype.hasOwnProperty.call(data,'appTypeId')) {
        obj['appTypeId'] = ApiClient.convertToType(data['appTypeId'], 'Number')
      }
      if (Object.prototype.hasOwnProperty.call(data,'creatorEmail')) {
        obj['creatorEmail'] = ApiClient.convertToType(data['creatorEmail'], 'String')
      }
      if (Object.prototype.hasOwnProperty.call(data,'creditCardExpiry')) {
        obj['creditCardExpiry'] = ApiClient.convertToType(data['creditCardExpiry'], 'String')
      }
      if (Object.prototype.hasOwnProperty.call(data,'creditCardNumber')) {
        obj['creditCardNumber'] = ApiClient.convertToType(data['creditCardNumber'], 'String')
      }
      if (Object.prototype.hasOwnProperty.call(data,'description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String')
      }
      if (Object.prototype.hasOwnProperty.call(data,'displayStatus')) {
        obj['displayStatus'] = ApiClient.convertToType(data['displayStatus'], 'String')
      }
      if (Object.prototype.hasOwnProperty.call(data,'firstDataSavedDate')) {
        obj['firstDataSavedDate'] = ApiClient.convertToType(data['firstDataSavedDate'], 'Number')
      }
      if (Object.prototype.hasOwnProperty.call(data,'id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number')
      }
      if (Object.prototype.hasOwnProperty.call(data,'integration')) {
        obj['integration'] = ServiceIntegration.constructFromObject(data['integration'])
      }
      if (Object.prototype.hasOwnProperty.call(data,'lastDataReceivedDate')) {
        obj['lastDataReceivedDate'] = ApiClient.convertToType(data['lastDataReceivedDate'], 'Number')
      }
      if (Object.prototype.hasOwnProperty.call(data,'lastDataSavedDate')) {
        obj['lastDataSavedDate'] = ApiClient.convertToType(data['lastDataSavedDate'], 'Number')
      }
      if (Object.prototype.hasOwnProperty.call(data,'loggedInUserAppRole')) {
        obj['loggedInUserAppRole'] = ApiClient.convertToType(data['loggedInUserAppRole'], 'String')
      }
      if (Object.prototype.hasOwnProperty.call(data,'monthlyInvoiceAccount')) {
        obj['monthlyInvoiceAccount'] = ApiClient.convertToType(data['monthlyInvoiceAccount'], 'Boolean')
      }
      if (Object.prototype.hasOwnProperty.call(data,'name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String')
      }
      if (Object.prototype.hasOwnProperty.call(data,'ownerEmail')) {
        obj['ownerEmail'] = ApiClient.convertToType(data['ownerEmail'], 'String')
      }
      if (Object.prototype.hasOwnProperty.call(data,'owningOrganization')) {
        obj['owningOrganization'] = BasicOrganizationDto.constructFromObject(data['owningOrganization'])
      }
      if (Object.prototype.hasOwnProperty.call(data,'pageLoadThreshold')) {
        obj['pageLoadThreshold'] = ApiClient.convertToType(data['pageLoadThreshold'], 'Number')
      }
      if (Object.prototype.hasOwnProperty.call(data,'paymentMethodId')) {
        obj['paymentMethodId'] = ApiClient.convertToType(data['paymentMethodId'], 'Number')
      }
      if (Object.prototype.hasOwnProperty.call(data,'plan')) {
        obj['plan'] = Plan.constructFromObject(data['plan'])
      }
      if (Object.prototype.hasOwnProperty.call(data,'prepaidAccount')) {
        obj['prepaidAccount'] = ApiClient.convertToType(data['prepaidAccount'], 'Boolean')
      }
      if (Object.prototype.hasOwnProperty.call(data,'readToken')) {
        obj['readToken'] = ApiClient.convertToType(data['readToken'], 'String')
      }
      if (Object.prototype.hasOwnProperty.call(data,'readWriteToken')) {
        obj['readWriteToken'] = ApiClient.convertToType(data['readWriteToken'], 'String')
      }
      if (Object.prototype.hasOwnProperty.call(data,'registrationDate')) {
        obj['registrationDate'] = ApiClient.convertToType(data['registrationDate'], 'Number')
      }
      if (Object.prototype.hasOwnProperty.call(data,'status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String')
      }
      if (Object.prototype.hasOwnProperty.call(data,'token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String')
      }
      if (Object.prototype.hasOwnProperty.call(data,'tokens')) {
        obj['tokens'] = ApiClient.convertToType(data['tokens'], ['String'])
      }
      if (Object.prototype.hasOwnProperty.call(data,'trialEndDate')) {
        obj['trialEndDate'] = ApiClient.convertToType(data['trialEndDate'], 'Number')
      }
      if (Object.prototype.hasOwnProperty.call(data,'urlGroupLimit')) {
        obj['urlGroupLimit'] = ApiClient.convertToType(data['urlGroupLimit'], 'Number')
      }
      if (Object.prototype.hasOwnProperty.call(data,'userRoles')) {
        obj['userRoles'] = ApiClient.convertToType(data['userRoles'], [UserRole])
      }
      if (Object.prototype.hasOwnProperty.call(data,'writeToken')) {
        obj['writeToken'] = ApiClient.convertToType(data['writeToken'], 'String')
      }
    }
    return obj
  }

    /**
    * @member {Number} ajaxThreshold
    */
    'ajaxThreshold' = undefined;
    /**
    * @member {String} appType
    */
    'appType' = undefined;
    /**
    * @member {Number} appTypeId
    */
    'appTypeId' = undefined;
    /**
    * @member {String} creatorEmail
    */
    'creatorEmail' = undefined;
    /**
    * @member {String} creditCardExpiry
    */
    'creditCardExpiry' = undefined;
    /**
    * @member {String} creditCardNumber
    */
    'creditCardNumber' = undefined;
    /**
    * @member {String} description
    */
    'description' = undefined;
    /**
    * @member {String} displayStatus
    */
    'displayStatus' = undefined;
    /**
    * @member {Number} firstDataSavedDate
    */
    'firstDataSavedDate' = undefined;
    /**
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * @member {module:model/ServiceIntegration} integration
    */
    'integration' = undefined;
    /**
    * @member {Number} lastDataReceivedDate
    */
    'lastDataReceivedDate' = undefined;
    /**
    * @member {Number} lastDataSavedDate
    */
    'lastDataSavedDate' = undefined;
    /**
    * @member {String} loggedInUserAppRole
    */
    'loggedInUserAppRole' = undefined;
    /**
    * @member {Boolean} monthlyInvoiceAccount
    */
    'monthlyInvoiceAccount' = undefined;
    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {String} ownerEmail
    */
    'ownerEmail' = undefined;
    /**
    * @member {module:model/BasicOrganizationDto} owningOrganization
    */
    'owningOrganization' = undefined;
    /**
    * @member {Number} pageLoadThreshold
    */
    'pageLoadThreshold' = undefined;
    /**
    * @member {Number} paymentMethodId
    */
    'paymentMethodId' = undefined;
    /**
    * @member {module:model/Plan} plan
    */
    'plan' = undefined;
    /**
    * @member {Boolean} prepaidAccount
    */
    'prepaidAccount' = undefined;
    /**
    * @member {String} readToken
    */
    'readToken' = undefined;
    /**
    * @member {String} readWriteToken
    */
    'readWriteToken' = undefined;
    /**
    * @member {Number} registrationDate
    */
    'registrationDate' = undefined;
    /**
    * @member {String} status
    */
    'status' = undefined;
    /**
    * @member {String} token
    */
    'token' = undefined;
    /**
    * @member {Array.<String>} tokens
    */
    'tokens' = undefined;
    /**
    * @member {Number} trialEndDate
    */
    'trialEndDate' = undefined;
    /**
    * @member {Number} urlGroupLimit
    */
    'urlGroupLimit' = undefined;
    /**
    * @member {Array.<module:model/UserRole>} userRoles
    */
    'userRoles' = undefined;
    /**
    * @member {String} writeToken
    */
    'writeToken' = undefined;




}
