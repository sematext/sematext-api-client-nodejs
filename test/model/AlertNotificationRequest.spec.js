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
    describe('AlertNotificationRequest', function() {
      beforeEach(function() {
        instance = new SematextApiClientJavascript.AlertNotificationRequest();
      });

      it('should create an instance of AlertNotificationRequest', function() {
        // TODO: update the code to test AlertNotificationRequest
        expect(instance).to.be.a(SematextApiClientJavascript.AlertNotificationRequest);
      });

      it('should have the property defaultInterval (base name: "defaultInterval")', function() {
        // TODO: update the code to test the property defaultInterval
        expect(instance).to.have.property('defaultInterval');
        // expect(instance.defaultInterval).to.be(expectedValueLiteral);
      });

      it('should have the property end (base name: "end")', function() {
        // TODO: update the code to test the property end
        expect(instance).to.have.property('end');
        // expect(instance.end).to.be(expectedValueLiteral);
      });

      it('should have the property interval (base name: "interval")', function() {
        // TODO: update the code to test the property interval
        expect(instance).to.have.property('interval');
        // expect(instance.interval).to.be(expectedValueLiteral);
      });

      it('should have the property start (base name: "start")', function() {
        // TODO: update the code to test the property start
        expect(instance).to.have.property('start');
        // expect(instance.start).to.be(expectedValueLiteral);
      });

    });
  });

}));
