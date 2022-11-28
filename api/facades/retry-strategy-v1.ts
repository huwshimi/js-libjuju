/**
  Juju RetryStrategy version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

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

export interface RetryStrategy {
  'jitter-retry-time': boolean;
  'max-retry-time': number;
  'min-retry-time': number;
  'retry-time-factor': number;
  'should-retry': boolean;
}

export interface RetryStrategyResult {
  error: Error;
  result: RetryStrategy;
}

export interface RetryStrategyResults {
  results: RetryStrategyResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  RetryStrategyAPI implements RetryStrategy
*/
class RetryStrategyV1 {
  static NAME: string = 'RetryStrategy';
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
    RetryStrategy returns RetryStrategyResults that can be used by any code that uses
    to configure the retry timer that's currently in juju utils.
  */
  retryStrategy(params: Entities): Promise<RetryStrategyResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'RetryStrategy',
        request: 'RetryStrategy',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchRetryStrategy watches for changes to the model. Currently we only allow
    changes to the boolean that determines whether retries should be attempted or not.
  */
  watchRetryStrategy(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'RetryStrategy',
        request: 'WatchRetryStrategy',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default RetryStrategyV1;
