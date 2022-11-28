/**
  Juju CrossController version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Controllers

  NOTE: This file was generated on Mon, 28 Nov 2022 01:16:43 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils";
import type { JujuRequest } from "../../generator/interfaces";


export interface ControllerAPIInfoResult {
  addresses: string[];
  cacert: string;
  error?: Error;
}

export interface ControllerAPIInfoResults {
  results: ControllerAPIInfoResult[];
}

export interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  CrossControllerAPI provides access to the CrossModelRelations API facade.
*/
class CrossControllerV1 {
  static NAME: string = 'CrossController';
  static VERSION: number = 1;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 1;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    ControllerInfo returns the API info for the controller.
  */
  controllerInfo(): Promise<ControllerAPIInfoResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CrossController',
        request: 'ControllerInfo',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchControllerInfo creates a watcher that notifies when the API info
    for the controller changes.
  */
  watchControllerInfo(): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'CrossController',
        request: 'WatchControllerInfo',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default CrossControllerV1;
