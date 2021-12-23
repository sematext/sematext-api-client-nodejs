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
;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../stcloud/index'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../stcloud/index'))
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SematextApiClientJavascript)
  }
})(this, function (expect, SematextApiClientJavascript) {
  'use strict'

  var instance

  describe('(package)', function () {
    describe('CloudWatchSettings', function () {
      beforeEach(function () {
        instance = new SematextApiClientJavascript.CloudWatchSettings()
      })

      it('should create an instance of CloudWatchSettings', function () {
        // TODO: update the code to test CloudWatchSettings
        expect(instance).to.be.a(SematextApiClientJavascript.CloudWatchSettings)
      })

      it('should have the property accessKey (base name: "accessKey")', function () {
        // TODO: update the code to test the property accessKey
        expect(instance).to.have.property('accessKey')
        // expect(instance.accessKey).to.be(expectedValueLiteral);
      })

      it('should have the property fetchFrequency (base name: "fetchFrequency")', function () {
        // TODO: update the code to test the property fetchFrequency
        expect(instance).to.have.property('fetchFrequency')
        // expect(instance.fetchFrequency).to.be(expectedValueLiteral);
      })

      it('should have the property region (base name: "region")', function () {
        // TODO: update the code to test the property region
        expect(instance).to.have.property('region')
        // expect(instance.region).to.be(expectedValueLiteral);
      })

      it('should have the property secretKey (base name: "secretKey")', function () {
        // TODO: update the code to test the property secretKey
        expect(instance).to.have.property('secretKey')
        // expect(instance.secretKey).to.be(expectedValueLiteral);
      })
    })
  })
})
