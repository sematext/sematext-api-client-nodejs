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
    define(['ApiClient', 'model/AlertRuleScheduleWeekdayDto', 'model/FilterValue', 'model/NotificationIntegration', 'model/UserPermissions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AlertRuleScheduleWeekdayDto'), require('./FilterValue'), require('./NotificationIntegration'), require('./UserPermissions'));
  } else {
    // Browser globals (root is window)
    if (!root.SematextCloudApi) {
      root.SematextCloudApi = {};
    }
    root.SematextCloudApi.AlertRule = factory(root.SematextCloudApi.ApiClient, root.SematextCloudApi.AlertRuleScheduleWeekdayDto, root.SematextCloudApi.FilterValue, root.SematextCloudApi.NotificationIntegration, root.SematextCloudApi.UserPermissions);
  }
}(this, function(ApiClient, AlertRuleScheduleWeekdayDto, FilterValue, NotificationIntegration, UserPermissions) {
  'use strict';

  /**
   * The AlertRule model module.
   * @module model/AlertRule
   * @version v3
   */

  /**
   * Constructs a new <code>AlertRule</code>.
   * @alias module:model/AlertRule
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>AlertRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AlertRule} obj Optional instance to populate.
   * @return {module:model/AlertRule} The populated <code>AlertRule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accountEmail'))
        obj.accountEmail = ApiClient.convertToType(data['accountEmail'], 'String');
      if (data.hasOwnProperty('allowedAppTypes'))
        obj.allowedAppTypes = ApiClient.convertToType(data['allowedAppTypes'], ['Number']);
      if (data.hasOwnProperty('analyzingTime'))
        obj.analyzingTime = ApiClient.convertToType(data['analyzingTime'], 'String');
      if (data.hasOwnProperty('appDisplayState'))
        obj.appDisplayState = ApiClient.convertToType(data['appDisplayState'], 'String');
      if (data.hasOwnProperty('appId'))
        obj.appId = ApiClient.convertToType(data['appId'], 'Number');
      if (data.hasOwnProperty('appName'))
        obj.appName = ApiClient.convertToType(data['appName'], 'String');
      if (data.hasOwnProperty('appState'))
        obj.appState = ApiClient.convertToType(data['appState'], 'String');
      if (data.hasOwnProperty('appToken'))
        obj.appToken = ApiClient.convertToType(data['appToken'], 'String');
      if (data.hasOwnProperty('appType'))
        obj.appType = ApiClient.convertToType(data['appType'], 'String');
      if (data.hasOwnProperty('backToNormalNeeded'))
        obj.backToNormalNeeded = ApiClient.convertToType(data['backToNormalNeeded'], 'Boolean');
      if (data.hasOwnProperty('chartKey'))
        obj.chartKey = ApiClient.convertToType(data['chartKey'], 'String');
      if (data.hasOwnProperty('color'))
        obj.color = ApiClient.convertToType(data['color'], 'String');
      if (data.hasOwnProperty('creatorEmail'))
        obj.creatorEmail = ApiClient.convertToType(data['creatorEmail'], 'String');
      if (data.hasOwnProperty('defaultAggType'))
        obj.defaultAggType = ApiClient.convertToType(data['defaultAggType'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('disallowedAppTypes'))
        obj.disallowedAppTypes = ApiClient.convertToType(data['disallowedAppTypes'], ['Number']);
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('estimateOperation'))
        obj.estimateOperation = ApiClient.convertToType(data['estimateOperation'], 'String');
      if (data.hasOwnProperty('estimateValue'))
        obj.estimateValue = ApiClient.convertToType(data['estimateValue'], 'Number');
      if (data.hasOwnProperty('filterValues'))
        obj.filterValues = ApiClient.convertToType(data['filterValues'], 'String');
      if (data.hasOwnProperty('filterValuesObj'))
        obj.filterValuesObj = ApiClient.convertToType(data['filterValuesObj'], [FilterValue]);
      if (data.hasOwnProperty('ignoreRegularEventsEnabled'))
        obj.ignoreRegularEventsEnabled = ApiClient.convertToType(data['ignoreRegularEventsEnabled'], 'Boolean');
      if (data.hasOwnProperty('integrations'))
        obj.integrations = ApiClient.convertToType(data['integrations'], 'String');
      if (data.hasOwnProperty('lastDataReceivedDate'))
        obj.lastDataReceivedDate = ApiClient.convertToType(data['lastDataReceivedDate'], 'Number');
      if (data.hasOwnProperty('lastSent'))
        obj.lastSent = ApiClient.convertToType(data['lastSent'], 'Number');
      if (data.hasOwnProperty('lastTriggered'))
        obj.lastTriggered = ApiClient.convertToType(data['lastTriggered'], 'Number');
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ApiClient.convertToType(data['metadata'], Object);
      if (data.hasOwnProperty('metricKey'))
        obj.metricKey = ApiClient.convertToType(data['metricKey'], 'String');
      if (data.hasOwnProperty('metricLabel'))
        obj.metricLabel = ApiClient.convertToType(data['metricLabel'], 'String');
      if (data.hasOwnProperty('minDelayBetweenNotificationsInMinutes'))
        obj.minDelayBetweenNotificationsInMinutes = ApiClient.convertToType(data['minDelayBetweenNotificationsInMinutes'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('notificationEmails'))
        obj.notificationEmails = ApiClient.convertToType(data['notificationEmails'], ['String']);
      if (data.hasOwnProperty('notificationIntegrations'))
        obj.notificationIntegrations = ApiClient.convertToType(data['notificationIntegrations'], [NotificationIntegration]);
      if (data.hasOwnProperty('notificationsEnabled'))
        obj.notificationsEnabled = ApiClient.convertToType(data['notificationsEnabled'], 'Boolean');
      if (data.hasOwnProperty('query'))
        obj.query = ApiClient.convertToType(data['query'], 'String');
      if (data.hasOwnProperty('reportName'))
        obj.reportName = ApiClient.convertToType(data['reportName'], 'String');
      if (data.hasOwnProperty('ruleKey'))
        obj.ruleKey = ApiClient.convertToType(data['ruleKey'], 'Number');
      if (data.hasOwnProperty('ruleType'))
        obj.ruleType = ApiClient.convertToType(data['ruleType'], 'String');
      if (data.hasOwnProperty('runbook'))
        obj.runbook = ApiClient.convertToType(data['runbook'], 'String');
      if (data.hasOwnProperty('savedQueryId'))
        obj.savedQueryId = ApiClient.convertToType(data['savedQueryId'], 'Number');
      if (data.hasOwnProperty('schedule'))
        obj.schedule = ApiClient.convertToType(data['schedule'], [AlertRuleScheduleWeekdayDto]);
      if (data.hasOwnProperty('sematextService'))
        obj.sematextService = ApiClient.convertToType(data['sematextService'], 'String');
      if (data.hasOwnProperty('sendToEmail'))
        obj.sendToEmail = ApiClient.convertToType(data['sendToEmail'], 'String');
      if (data.hasOwnProperty('timezone'))
        obj.timezone = ApiClient.convertToType(data['timezone'], 'String');
      if (data.hasOwnProperty('useOnlyAlertRuleIntegrations'))
        obj.useOnlyAlertRuleIntegrations = ApiClient.convertToType(data['useOnlyAlertRuleIntegrations'], 'Boolean');
      if (data.hasOwnProperty('userPermissions'))
        obj.userPermissions = UserPermissions.constructFromObject(data['userPermissions']);
      if (data.hasOwnProperty('valueColumnName'))
        obj.valueColumnName = ApiClient.convertToType(data['valueColumnName'], 'String');
      if (data.hasOwnProperty('valueName'))
        obj.valueName = ApiClient.convertToType(data['valueName'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} accountEmail
   */
  exports.prototype.accountEmail = undefined;

  /**
   * @member {Array.<Number>} allowedAppTypes
   */
  exports.prototype.allowedAppTypes = undefined;

  /**
   * @member {String} analyzingTime
   */
  exports.prototype.analyzingTime = undefined;

  /**
   * @member {String} appDisplayState
   */
  exports.prototype.appDisplayState = undefined;

  /**
   * @member {Number} appId
   */
  exports.prototype.appId = undefined;

  /**
   * @member {String} appName
   */
  exports.prototype.appName = undefined;

  /**
   * @member {String} appState
   */
  exports.prototype.appState = undefined;

  /**
   * @member {String} appToken
   */
  exports.prototype.appToken = undefined;

  /**
   * @member {String} appType
   */
  exports.prototype.appType = undefined;

  /**
   * @member {Boolean} backToNormalNeeded
   */
  exports.prototype.backToNormalNeeded = undefined;

  /**
   * @member {String} chartKey
   */
  exports.prototype.chartKey = undefined;

  /**
   * @member {String} color
   */
  exports.prototype.color = undefined;

  /**
   * @member {String} creatorEmail
   */
  exports.prototype.creatorEmail = undefined;

  /**
   * @member {String} defaultAggType
   */
  exports.prototype.defaultAggType = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {Array.<Number>} disallowedAppTypes
   */
  exports.prototype.disallowedAppTypes = undefined;

  /**
   * @member {Boolean} enabled
   */
  exports.prototype.enabled = undefined;

  /**
   * @member {module:model/AlertRule.EstimateOperationEnum} estimateOperation
   */
  exports.prototype.estimateOperation = undefined;

  /**
   * @member {Number} estimateValue
   */
  exports.prototype.estimateValue = undefined;

  /**
   * @member {String} filterValues
   */
  exports.prototype.filterValues = undefined;

  /**
   * @member {Array.<module:model/FilterValue>} filterValuesObj
   */
  exports.prototype.filterValuesObj = undefined;

  /**
   * @member {Boolean} ignoreRegularEventsEnabled
   */
  exports.prototype.ignoreRegularEventsEnabled = undefined;

  /**
   * @member {String} integrations
   */
  exports.prototype.integrations = undefined;

  /**
   * @member {Number} lastDataReceivedDate
   */
  exports.prototype.lastDataReceivedDate = undefined;

  /**
   * @member {Number} lastSent
   */
  exports.prototype.lastSent = undefined;

  /**
   * @member {Number} lastTriggered
   */
  exports.prototype.lastTriggered = undefined;

  /**
   * @member {Object} metadata
   */
  exports.prototype.metadata = undefined;

  /**
   * @member {String} metricKey
   */
  exports.prototype.metricKey = undefined;

  /**
   * @member {String} metricLabel
   */
  exports.prototype.metricLabel = undefined;

  /**
   * @member {String} minDelayBetweenNotificationsInMinutes
   */
  exports.prototype.minDelayBetweenNotificationsInMinutes = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Array.<String>} notificationEmails
   */
  exports.prototype.notificationEmails = undefined;

  /**
   * @member {Array.<module:model/NotificationIntegration>} notificationIntegrations
   */
  exports.prototype.notificationIntegrations = undefined;

  /**
   * @member {Boolean} notificationsEnabled
   */
  exports.prototype.notificationsEnabled = undefined;

  /**
   * @member {String} query
   */
  exports.prototype.query = undefined;

  /**
   * @member {String} reportName
   */
  exports.prototype.reportName = undefined;

  /**
   * @member {Number} ruleKey
   */
  exports.prototype.ruleKey = undefined;

  /**
   * @member {String} ruleType
   */
  exports.prototype.ruleType = undefined;

  /**
   * @member {String} runbook
   */
  exports.prototype.runbook = undefined;

  /**
   * @member {Number} savedQueryId
   */
  exports.prototype.savedQueryId = undefined;

  /**
   * @member {Array.<module:model/AlertRuleScheduleWeekdayDto>} schedule
   */
  exports.prototype.schedule = undefined;

  /**
   * @member {String} sematextService
   */
  exports.prototype.sematextService = undefined;

  /**
   * @member {String} sendToEmail
   */
  exports.prototype.sendToEmail = undefined;

  /**
   * @member {String} timezone
   */
  exports.prototype.timezone = undefined;

  /**
   * @member {Boolean} useOnlyAlertRuleIntegrations
   */
  exports.prototype.useOnlyAlertRuleIntegrations = undefined;

  /**
   * @member {module:model/UserPermissions} userPermissions
   */
  exports.prototype.userPermissions = undefined;

  /**
   * @member {String} valueColumnName
   */
  exports.prototype.valueColumnName = undefined;

  /**
   * @member {String} valueName
   */
  exports.prototype.valueName = undefined;


  /**
   * Allowed values for the <code>estimateOperation</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EstimateOperationEnum = {
    /**
     * value: "LESS"
     * @const
     */
    LESS: "LESS",

    /**
     * value: "MORE"
     * @const
     */
    MORE: "MORE",

    /**
     * value: "EQUAL"
     * @const
     */
    EQUAL: "EQUAL",

    /**
     * value: "UN_EQUAL"
     * @const
     */
    UN_EQUAL: "UN_EQUAL",

    /**
     * value: "LESS_OR_EQUAL"
     * @const
     */
    LESS_OR_EQUAL: "LESS_OR_EQUAL",

    /**
     * value: "MORE_OR_EQUAL"
     * @const
     */
    MORE_OR_EQUAL: "MORE_OR_EQUAL"
  };

  return exports;

}));
