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
    instance = new SematextCloudApi.TagApiControllerApi();
  });

  describe('(package)', function() {
    describe('TagApiControllerApi', function() {
      describe('getTagNamesUsingGET', function() {
        it('should call getTagNamesUsingGET successfully', function(done) {
          // TODO: uncomment, update parameter values for getTagNamesUsingGET call and complete the assertions
          /*
          var appIds = "appIds_example";
          var opts = {};
          opts.from = 789;
          opts.to = 789;
          opts.metrics = true;
          opts.logs = true;
          opts.events = false;
          opts.rum = true;

          instance.getTagNamesUsingGET(appIds, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getUsingGET2', function() {
        it('should call getUsingGET2 successfully', function(done) {
          // TODO: uncomment, update parameter values for getUsingGET2 call and complete the assertions
          /*
          var appIds = "appIds_example";
          var tag = ["tag_example"];
          var opts = {};
          opts.from = 789;
          opts.to = 789;
          opts.metrics = true;
          opts.logs = true;
          opts.events = false;
          opts.rum = true;

          instance.getUsingGET2(appIds, tag, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getUsingGET3', function() {
        it('should call getUsingGET3 successfully', function(done) {
          // TODO: uncomment, update parameter values for getUsingGET3 call and complete the assertions
          /*
          var appIds = "appIds_example";
          var tag = ["tag_example"];
          var opts = {};
          opts.from = 789;
          opts.to = 789;
          opts.metrics = true;
          opts.logs = true;
          opts.events = false;
          opts.rum = true;

          instance.getUsingGET3(appIds, tag, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

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
