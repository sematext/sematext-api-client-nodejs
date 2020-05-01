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

  beforeEach(function() {
    instance = new SematextCloudApi.BillingApi();
  });

  describe('(package)', function() {
    describe('BillingApi', function() {
      describe('getDetailedInvoiceUsingGET', function() {
        it('should call getDetailedInvoiceUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for getDetailedInvoiceUsingGET call and complete the assertions
          /*
          var service = "service_example";
          var year = 56;
          var month = 56;

          instance.getDetailedInvoiceUsingGET(service, year, month, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SematextCloudApi.GenericApiResponse);
            expect(data.data).to.be.a(Object);
            expect(data.data).to.be();
            {
              let dataCtr = data.errors;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SematextCloudApi.Error);
                expect(data.code).to.be.a('string');
                expect(data.code).to.be("");
                expect(data.message).to.be.a('string');
                expect(data.message).to.be("");
              }
            }
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.success).to.be.a('boolean');
            expect(data.success).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listAvailablePlansUsingGET', function() {
        it('should call listAvailablePlansUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for listAvailablePlansUsingGET call and complete the assertions
          /*
          var opts = {};
          opts.integrationId = 789;
          opts.appType = "appType_example";

          instance.listAvailablePlansUsingGET(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SematextCloudApi.GenericApiResponse);
            expect(data.data).to.be.a(Object);
            expect(data.data).to.be();
            {
              let dataCtr = data.errors;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SematextCloudApi.Error);
                expect(data.code).to.be.a('string');
                expect(data.code).to.be("");
                expect(data.message).to.be.a('string');
                expect(data.message).to.be("");
              }
            }
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.success).to.be.a('boolean');
            expect(data.success).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updatePlanUsingPUT', function() {
        it('should call updatePlanUsingPUT successfully', function(done) {
          // TODO: uncomment, update parameter values for updatePlanUsingPUT call and complete the assertions
          /*
          var appId = 789;
          var dto = new SematextCloudApi.BillingInfo();
          dto.creditCardId = "0";
          dto.paymentMethod = "";
          dto.planId = "0";

          instance.updatePlanUsingPUT(appId, dto, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SematextCloudApi.GenericApiResponse);
            expect(data.data).to.be.a(Object);
            expect(data.data).to.be();
            {
              let dataCtr = data.errors;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SematextCloudApi.Error);
                expect(data.code).to.be.a('string');
                expect(data.code).to.be("");
                expect(data.message).to.be.a('string');
                expect(data.message).to.be("");
              }
            }
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.success).to.be.a('boolean');
            expect(data.success).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
