/**
  Juju Bundle version 2.
  This API facade is available on both controller and model connections.

  NOTE: this file has been generated by the generate command in js-libjuju
  on Tue 2018/11/27 16:23:14 UTC. Do not manually edit this file.
*/

'use strict';

const {autoBind, createAsyncHandler} = require('../transform.js');

/**
  APIv2 provides the Bundle API facade for version 2.
*/
class BundleV2 {

  constructor(transport, info) {
    this._transport = transport;
    this._info = info;
    this.version = 2;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  /**
    ExportBundle exports the current model configuration as bundle.

    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          error: {
            message: string,
            code: string,
            info: {
              macaroon: anything,
              macaroonPath: string
            }
          },
          result: string
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  exportBundle(callback) {
    return new Promise((resolve, reject) => {
      const params = {};
      // Prepare the request to the Juju API.
      const req = {
        type: 'Bundle',
        request: 'ExportBundle',
        version: 2,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#StringResult
        if (resp) {
          result = {};
          // github.com/juju/juju/apiserver/params#Error
          if (resp['error']) {
            result.error = {};
            result.error.message = resp['error']['message'];
            result.error.code = resp['error']['code'];
            // github.com/juju/juju/apiserver/params#ErrorInfo
            if (resp['error']['info']) {
              result.error.info = {};
              // gopkg.in/macaroon.v2-unstable#Macaroon
              result.error.info.macaroon = resp['error']['info']['macaroon'];
              result.error.info.macaroonPath = resp['error']['info']['macaroon-path'];
            }
          }
          result.result = resp['result'];
        }
        return result;
      };

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }

  /**
    GetChanges returns the list of changes required to deploy the given bundle
    data. The changes are sorted by requirements, so that they can be
    applied in order.

    @param {Object} args Arguments to be provided to Juju, as an object like
      the following:
        {
          yaml: string,
          bundleurl: string
        }
    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          changes: []{
            id: string,
            method: string,
            args: []anything,
            requires: []string
          },
          errors: []string
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  getChanges(args, callback) {
    return new Promise((resolve, reject) => {
      // Prepare request parameters.
      let params;
      // github.com/juju/juju/apiserver/params#BundleChangesParams
      if (args) {
        params = {};
        params['yaml'] = args.yaml;
        params['bundleURL'] = args.bundleurl;
      }
      // Prepare the request to the Juju API.
      const req = {
        type: 'Bundle',
        request: 'GetChanges',
        version: 2,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#BundleChangesResults
        if (resp) {
          result = {};
          result.changes = [];
          resp['changes'] = resp['changes'] || [];
          for (let i = 0; i < resp['changes'].length; i++) {
            // github.com/juju/juju/apiserver/params#BundleChange
            if (resp['changes'][i]) {
              result.changes[i] = {};
              result.changes[i].id = resp['changes'][i]['id'];
              result.changes[i].method = resp['changes'][i]['method'];
              result.changes[i].args = [];
              resp['changes'][i]['args'] = resp['changes'][i]['args'] || [];
              for (let i2 = 0; i2 < resp['changes'][i]['args'].length; i2++) {
                result.changes[i].args[i2] = resp['changes'][i]['args'][i2];
              }
              result.changes[i].requires = [];
              resp['changes'][i]['requires'] = resp['changes'][i]['requires'] || [];
              for (let i2 = 0; i2 < resp['changes'][i]['requires'].length; i2++) {
                result.changes[i].requires[i2] = resp['changes'][i]['requires'][i2];
              }
            }
          }
          result.errors = [];
          resp['errors'] = resp['errors'] || [];
          for (let i = 0; i < resp['errors'].length; i++) {
            result.errors[i] = resp['errors'][i];
          }
        }
        return result;
      };

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }
}


const wrappers = require('../wrappers.js');
if (wrappers.wrapBundle) {
  // Decorate the facade class in order to improve user experience.
  BundleV2 = wrappers.wrapBundle(BundleV2);
}

module.exports = BundleV2;