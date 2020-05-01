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
    describe('SavedQuery', function() {
      beforeEach(function() {
        instance = new SematextCloudApi.SavedQuery();
      });

      it('should create an instance of SavedQuery', function() {
        // TODO: update the code to test SavedQuery
        expect(instance).to.be.a(SematextCloudApi.SavedQuery);
      });

      it('should have the property alertRule (base name: "alertRule")', function() {
        // TODO: update the code to test the property alertRule
        expect(instance).to.have.property('alertRule');
        // expect(instance.alertRule).to.be(expectedValueLiteral);
      });

      it('should have the property allowModification (base name: "allowModification")', function() {
        // TODO: update the code to test the property allowModification
        expect(instance).to.have.property('allowModification');
        // expect(instance.allowModification).to.be(expectedValueLiteral);
      });

      it('should have the property applicationId (base name: "applicationId")', function() {
        // TODO: update the code to test the property applicationId
        expect(instance).to.have.property('applicationId');
        // expect(instance.applicationId).to.be(expectedValueLiteral);
      });

      it('should have the property applicationName (base name: "applicationName")', function() {
        // TODO: update the code to test the property applicationName
        expect(instance).to.have.property('applicationName');
        // expect(instance.applicationName).to.be(expectedValueLiteral);
      });

      it('should have the property applicationToken (base name: "applicationToken")', function() {
        // TODO: update the code to test the property applicationToken
        expect(instance).to.have.property('applicationToken');
        // expect(instance.applicationToken).to.be(expectedValueLiteral);
      });

      it('should have the property creatorEmail (base name: "creatorEmail")', function() {
        // TODO: update the code to test the property creatorEmail
        expect(instance).to.have.property('creatorEmail');
        // expect(instance.creatorEmail).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property labelColor (base name: "labelColor")', function() {
        // TODO: update the code to test the property labelColor
        expect(instance).to.have.property('labelColor');
        // expect(instance.labelColor).to.be(expectedValueLiteral);
      });

      it('should have the property logseneAlertType (base name: "logseneAlertType")', function() {
        // TODO: update the code to test the property logseneAlertType
        expect(instance).to.have.property('logseneAlertType');
        // expect(instance.logseneAlertType).to.be(expectedValueLiteral);
      });

      it('should have the property ownerEmail (base name: "ownerEmail")', function() {
        // TODO: update the code to test the property ownerEmail
        expect(instance).to.have.property('ownerEmail');
        // expect(instance.ownerEmail).to.be(expectedValueLiteral);
      });

      it('should have the property queryName (base name: "queryName")', function() {
        // TODO: update the code to test the property queryName
        expect(instance).to.have.property('queryName');
        // expect(instance.queryName).to.be(expectedValueLiteral);
      });

      it('should have the property queryString (base name: "queryString")', function() {
        // TODO: update the code to test the property queryString
        expect(instance).to.have.property('queryString');
        // expect(instance.queryString).to.be(expectedValueLiteral);
      });

      it('should have the property userPermissions (base name: "userPermissions")', function() {
        // TODO: update the code to test the property userPermissions
        expect(instance).to.have.property('userPermissions');
        // expect(instance.userPermissions).to.be(expectedValueLiteral);
      });

    });
  });

}));
