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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../stcloud/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../stcloud/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SematextApiClientJavascript);
  }
}(this, function(expect, SematextApiClientJavascript) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Invitation', function() {
      beforeEach(function() {
        instance = new SematextApiClientJavascript.Invitation();
      });

      it('should create an instance of Invitation', function() {
        // TODO: update the code to test Invitation
        expect(instance).to.be.a(SematextApiClientJavascript.Invitation);
      });

      it('should have the property app (base name: "app")', function() {
        // TODO: update the code to test the property app
        expect(instance).to.have.property('app');
        // expect(instance.app).to.be(expectedValueLiteral);
      });

      it('should have the property apps (base name: "apps")', function() {
        // TODO: update the code to test the property apps
        expect(instance).to.have.property('apps');
        // expect(instance.apps).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property inviteDate (base name: "inviteDate")', function() {
        // TODO: update the code to test the property inviteDate
        expect(instance).to.have.property('inviteDate');
        // expect(instance.inviteDate).to.be(expectedValueLiteral);
      });

      it('should have the property inviteStatus (base name: "inviteStatus")', function() {
        // TODO: update the code to test the property inviteStatus
        expect(instance).to.have.property('inviteStatus');
        // expect(instance.inviteStatus).to.be(expectedValueLiteral);
      });

      it('should have the property inviteeEmail (base name: "inviteeEmail")', function() {
        // TODO: update the code to test the property inviteeEmail
        expect(instance).to.have.property('inviteeEmail');
        // expect(instance.inviteeEmail).to.be(expectedValueLiteral);
      });

      it('should have the property inviteeRole (base name: "inviteeRole")', function() {
        // TODO: update the code to test the property inviteeRole
        expect(instance).to.have.property('inviteeRole');
        // expect(instance.inviteeRole).to.be(expectedValueLiteral);
      });

      it('should have the property inviteeStatus (base name: "inviteeStatus")', function() {
        // TODO: update the code to test the property inviteeStatus
        expect(instance).to.have.property('inviteeStatus');
        // expect(instance.inviteeStatus).to.be(expectedValueLiteral);
      });

      it('should have the property inviterEmail (base name: "inviterEmail")', function() {
        // TODO: update the code to test the property inviterEmail
        expect(instance).to.have.property('inviterEmail');
        // expect(instance.inviterEmail).to.be(expectedValueLiteral);
      });

      it('should have the property uuid (base name: "uuid")', function() {
        // TODO: update the code to test the property uuid
        expect(instance).to.have.property('uuid');
        // expect(instance.uuid).to.be(expectedValueLiteral);
      });

    });
  });

}));
