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
 * The NotificationIntegration model module.
 * @module model/NotificationIntegration
 * @version 0.1.0
 */
export class NotificationIntegration {
  /**
   * Constructs a new <code>NotificationIntegration</code>.
   * @alias module:model/NotificationIntegration
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>NotificationIntegration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificationIntegration} obj Optional instance to populate.
   * @return {module:model/NotificationIntegration} The populated <code>NotificationIntegration</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new NotificationIntegration()
      if (data.hasOwnProperty('applicability')) // eslint-disable-line no-prototype-builtins
        obj.applicability = ApiClient.convertToType(data['applicability'], 'String')
      if (data.hasOwnProperty('createDate')) // eslint-disable-line no-prototype-builtins
        obj.createDate = ApiClient.convertToType(data['createDate'], 'Date')
      if (data.hasOwnProperty('createdByOwner')) // eslint-disable-line no-prototype-builtins
        obj.createdByOwner = ApiClient.convertToType(data['createdByOwner'], 'Boolean')
      if (data.hasOwnProperty('creatorId')) // eslint-disable-line no-prototype-builtins
        obj.creatorId = ApiClient.convertToType(data['creatorId'], 'Number')
      if (data.hasOwnProperty('id')) // eslint-disable-line no-prototype-builtins
        obj.id = ApiClient.convertToType(data['id'], 'Number')
      if (data.hasOwnProperty('integrationType')) // eslint-disable-line no-prototype-builtins
        obj.integrationType = ApiClient.convertToType(data['integrationType'], 'String')
      if (data.hasOwnProperty('name')) // eslint-disable-line no-prototype-builtins
        obj.name = ApiClient.convertToType(data['name'], 'String')
      if (data.hasOwnProperty('params')) // eslint-disable-line no-prototype-builtins
        obj.params = ApiClient.convertToType(data['params'], {'String': 'String'})
      if (data.hasOwnProperty('state')) // eslint-disable-line no-prototype-builtins
        obj.state = ApiClient.convertToType(data['state'], 'String')
      if (data.hasOwnProperty('userId')) // eslint-disable-line no-prototype-builtins
        obj.userId = ApiClient.convertToType(data['userId'], 'Number')
    }
    return obj
  }
}

/**
 * Allowed values for the <code>applicability</code> property.
 * @enum {String}
 * @readonly
 */
NotificationIntegration.ApplicabilityEnum = {
  /**
   * value: "NONE"
   * @const
   */
  NONE: 'NONE',

  /**
   * value: "USE_ALWAYS"
   * @const
   */
  USE_ALWAYS: 'USE_ALWAYS'
}

/**
 * @member {module:model/NotificationIntegration.ApplicabilityEnum} applicability
 */
NotificationIntegration.prototype.applicability = undefined

/**
 * @member {Date} createDate
 */
NotificationIntegration.prototype.createDate = undefined

/**
 * @member {Boolean} createdByOwner
 */
NotificationIntegration.prototype.createdByOwner = undefined

/**
 * @member {Number} creatorId
 */
NotificationIntegration.prototype.creatorId = undefined

/**
 * @member {Number} id
 */
NotificationIntegration.prototype.id = undefined

/**
 * Allowed values for the <code>integrationType</code> property.
 * @enum {String}
 * @readonly
 */
NotificationIntegration.IntegrationTypeEnum = {
  /**
   * value: "PAGER_DUTY"
   * @const
   */
  PAGER_DUTY: 'PAGER_DUTY',

  /**
   * value: "NAGIOS"
   * @const
   */
  NAGIOS: 'NAGIOS',

  /**
   * value: "WEB_HOOKS"
   * @const
   */
  WEB_HOOKS: 'WEB_HOOKS',

  /**
   * value: "WEB_HOOKS_TEMPLATE"
   * @const
   */
  WEB_HOOKS_TEMPLATE: 'WEB_HOOKS_TEMPLATE',

  /**
   * value: "HIP_CHAT"
   * @const
   */
  HIP_CHAT: 'HIP_CHAT',

  /**
   * value: "EMAIL_LIST"
   * @const
   */
  EMAIL_LIST: 'EMAIL_LIST',

  /**
   * value: "TEMPORARY_EMAIL_LIST"
   * @const
   */
  TEMPORARY_EMAIL_LIST: 'TEMPORARY_EMAIL_LIST'
}

/**
 * @member {module:model/NotificationIntegration.IntegrationTypeEnum} integrationType
 */
NotificationIntegration.prototype.integrationType = undefined

/**
 * @member {String} name
 */
NotificationIntegration.prototype.name = undefined

/**
 * @member {Object.<String, String>} params
 */
NotificationIntegration.prototype.params = undefined

/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
NotificationIntegration.StateEnum = {
  /**
   * value: "ACTIVE"
   * @const
   */
  ACTIVE: 'ACTIVE',

  /**
   * value: "DISABLED"
   * @const
   */
  DISABLED: 'DISABLED',

  /**
   * value: "DELETED"
   * @const
   */
  DELETED: 'DELETED'
}

/**
 * @member {module:model/NotificationIntegration.StateEnum} state
 */
NotificationIntegration.prototype.state = undefined

/**
 * @member {Number} userId
 */
NotificationIntegration.prototype.userId = undefined
