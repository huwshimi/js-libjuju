/**
  Juju KeyUpdater version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent

  NOTE: This file was generated on Mon, 28 Nov 2022 01:16:43 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils";
import type { JujuRequest } from "../../generator/interfaces";


export interface Entities {
  entities: Entity[];
}

export interface Entity {
  tag: string;
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

export interface StringsResult {
  error: Error;
  result: string[];
}

export interface StringsResults {
  results: StringsResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  KeyUpdaterAPI implements the KeyUpdater interface and is the concrete
  implementation of the api end point.
*/
class KeyUpdaterV1 {
  static NAME: string = 'KeyUpdater';
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
    AuthorisedKeys reports the authorised ssh keys for the specified machines.
    The current implementation relies on global authorised keys being stored in the model config.
    This will change as new user management and authorisation functionality is added.
  */
  authorisedKeys(params: Entities): Promise<StringsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'KeyUpdater',
        request: 'AuthorisedKeys',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchAuthorisedKeys starts a watcher to track changes to the authorised ssh keys
    for the specified machines.
    The current implementation relies on global authorised keys being stored in the model config.
    This will change as new user management and authorisation functionality is added.
  */
  watchAuthorisedKeys(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'KeyUpdater',
        request: 'WatchAuthorisedKeys',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default KeyUpdaterV1;
