/**
  Juju Pinger version 1.
  This API facade is available on both controller and model connections.

  NOTE: this file has been generated by the generate command in js-libjuju
  on Tue 2018/11/27 16:23:14 UTC. Do not manually edit this file.
*/

'use strict';

const {autoBind, createAsyncHandler} = require('../transform.js');

/**
  pinger describes a resource that can be pinged and stopped.
*/
class PingerV1 {

  constructor(transport, info) {
    this._transport = transport;
    this._info = info;
    this.version = 1;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  /**
    There is no documentation for this method.

    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error or null if the operation succeeded.
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  ping(callback) {
    return new Promise((resolve, reject) => {
      const params = {};
      // Prepare the request to the Juju API.
      const req = {
        type: 'Pinger',
        request: 'Ping',
        version: 1,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }

  /**
    There is no documentation for this method.

    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error or null if the operation succeeded.
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  stop(callback) {
    return new Promise((resolve, reject) => {
      const params = {};
      // Prepare the request to the Juju API.
      const req = {
        type: 'Pinger',
        request: 'Stop',
        version: 1,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }
}


const wrappers = require('../wrappers.js');
if (wrappers.wrapPinger) {
  // Decorate the facade class in order to improve user experience.
  PingerV1 = wrappers.wrapPinger(PingerV1);
}

module.exports = PingerV1;