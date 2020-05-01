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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SematextCloudApi);
  }
}(this, function(expect, SematextCloudApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('CreateAppInfo', function() {
      beforeEach(function() {
        instance = new SematextCloudApi.CreateAppInfo();
      });

      it('should create an instance of CreateAppInfo', function() {
        // TODO: update the code to test CreateAppInfo
        expect(instance).to.be.a(SematextCloudApi.CreateAppInfo);
      });

      it('should have the property appType (base name: "appType")', function() {
        // TODO: update the code to test the property appType
        expect(instance).to.have.property('appType');
        // expect(instance.appType).to.be(expectedValueLiteral);
      });

      it('should have the property discountCode (base name: "discountCode")', function() {
        // TODO: update the code to test the property discountCode
        expect(instance).to.have.property('discountCode');
        // expect(instance.discountCode).to.be(expectedValueLiteral);
      });

      it('should have the property initialPlanId (base name: "initialPlanId")', function() {
        // TODO: update the code to test the property initialPlanId
        expect(instance).to.have.property('initialPlanId');
        // expect(instance.initialPlanId).to.be(expectedValueLiteral);
      });

      it('should have the property metaData (base name: "metaData")', function() {
        // TODO: update the code to test the property metaData
        expect(instance).to.have.property('metaData');
        // expect(instance.metaData).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

    });
  });

}));
