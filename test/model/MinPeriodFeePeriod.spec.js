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
    describe('MinPeriodFeePeriod', function() {
      beforeEach(function() {
        instance = new SematextApiClientJavascript.MinPeriodFeePeriod();
      });

      it('should create an instance of MinPeriodFeePeriod', function() {
        // TODO: update the code to test MinPeriodFeePeriod
        expect(instance).to.be.a(SematextApiClientJavascript.MinPeriodFeePeriod);
      });

      it('should have the property browserMonitors (base name: "browserMonitors")', function() {
        // TODO: update the code to test the property browserMonitors
        expect(instance).to.have.property('browserMonitors');
        // expect(instance.browserMonitors).to.be(expectedValueLiteral);
      });

      it('should have the property discount (base name: "discount")', function() {
        // TODO: update the code to test the property discount
        expect(instance).to.have.property('discount');
        // expect(instance.discount).to.be(expectedValueLiteral);
      });

      it('should have the property fromDate (base name: "fromDate")', function() {
        // TODO: update the code to test the property fromDate
        expect(instance).to.have.property('fromDate');
        // expect(instance.fromDate).to.be(expectedValueLiteral);
      });

      it('should have the property httpMonitors (base name: "httpMonitors")', function() {
        // TODO: update the code to test the property httpMonitors
        expect(instance).to.have.property('httpMonitors');
        // expect(instance.httpMonitors).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property ingestionPeriodFeeAmount (base name: "ingestionPeriodFeeAmount")', function() {
        // TODO: update the code to test the property ingestionPeriodFeeAmount
        expect(instance).to.have.property('ingestionPeriodFeeAmount');
        // expect(instance.ingestionPeriodFeeAmount).to.be(expectedValueLiteral);
      });

      it('should have the property minPeriodFeeAmount (base name: "minPeriodFeeAmount")', function() {
        // TODO: update the code to test the property minPeriodFeeAmount
        expect(instance).to.have.property('minPeriodFeeAmount');
        // expect(instance.minPeriodFeeAmount).to.be(expectedValueLiteral);
      });

      it('should have the property overagePercentage (base name: "overagePercentage")', function() {
        // TODO: update the code to test the property overagePercentage
        expect(instance).to.have.property('overagePercentage');
        // expect(instance.overagePercentage).to.be(expectedValueLiteral);
      });

      it('should have the property planDataLimit (base name: "planDataLimit")', function() {
        // TODO: update the code to test the property planDataLimit
        expect(instance).to.have.property('planDataLimit');
        // expect(instance.planDataLimit).to.be(expectedValueLiteral);
      });

      it('should have the property storagePeriodFeeAmount (base name: "storagePeriodFeeAmount")', function() {
        // TODO: update the code to test the property storagePeriodFeeAmount
        expect(instance).to.have.property('storagePeriodFeeAmount');
        // expect(instance.storagePeriodFeeAmount).to.be(expectedValueLiteral);
      });

      it('should have the property toDate (base name: "toDate")', function() {
        // TODO: update the code to test the property toDate
        expect(instance).to.have.property('toDate');
        // expect(instance.toDate).to.be(expectedValueLiteral);
      });

      it('should have the property usedPlan (base name: "usedPlan")', function() {
        // TODO: update the code to test the property usedPlan
        expect(instance).to.have.property('usedPlan');
        // expect(instance.usedPlan).to.be(expectedValueLiteral);
      });

      it('should have the property usedPlanPeriodFee (base name: "usedPlanPeriodFee")', function() {
        // TODO: update the code to test the property usedPlanPeriodFee
        expect(instance).to.have.property('usedPlanPeriodFee');
        // expect(instance.usedPlanPeriodFee).to.be(expectedValueLiteral);
      });

    });
  });

}));
