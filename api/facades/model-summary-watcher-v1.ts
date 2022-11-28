/**
  Juju ModelSummaryWatcher version 1.
  This facade is available on:
    Controllers

  NOTE: This file was generated on Mon, 28 Nov 2022 01:16:43 GMT using
  the Juju schema from  Juju juju-3.0 at the git SHA deb94d4.
  Do not manually edit this file.
*/

import { autoBind } from "../utils";
import type { JujuRequest } from "../../generator/interfaces";


export interface ModelAbstract {
  admins?: string[];
  annotations?: AdditionalProperties;
  cloud?: string;
  controller?: string;
  credential?: string;
  messages?: ModelSummaryMessage[];
  name?: string;
  region?: string;
  removed?: boolean;
  size?: ModelSummarySize;
  status?: string;
  uuid: string;
}

export interface ModelSummaryMessage {
  agent: string;
  message: string;
}

export interface ModelSummarySize {
  applications: number;
  containers: number;
  machines: number;
  relations: number;
  units: number;
}

export interface SummaryWatcherNextResults {
  models: ModelAbstract[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  SrvModelSummaryWatcher defines the API methods on a ModelSummaryWatcher.
*/
class ModelSummaryWatcherV1 {
  static NAME: string = 'ModelSummaryWatcher';
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
    Next will return the current state of everything on the first call
    and subsequent calls will return just those model summaries that have
    changed.
  */
  next(): Promise<SummaryWatcherNextResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelSummaryWatcher',
        request: 'Next',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Stop stops the watcher.
  */
  stop(): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ModelSummaryWatcher',
        request: 'Stop',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ModelSummaryWatcherV1;
