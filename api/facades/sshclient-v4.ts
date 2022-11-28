/**
  Juju SSHClient version 4.
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


export interface CloudCredential {
  attrs?: AdditionalProperties;
  'auth-type': string;
  redacted?: string[];
}

export interface CloudSpec {
  cacertificates?: string[];
  credential?: CloudCredential;
  endpoint?: string;
  'identity-endpoint'?: string;
  'is-controller-cloud'?: boolean;
  name: string;
  region?: string;
  'skip-tls-verify'?: boolean;
  'storage-endpoint'?: string;
  type: string;
}

export interface CloudSpecResult {
  error: Error;
  result: CloudSpec;
}

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

export interface SSHAddressResult {
  address: string;
  error: Error;
}

export interface SSHAddressResults {
  results: SSHAddressResult[];
}

export interface SSHAddressesResult {
  addresses: string[];
  error?: Error;
}

export interface SSHAddressesResults {
  results: SSHAddressesResult[];
}

export interface SSHProxyResult {
  'use-proxy': boolean;
}

export interface SSHPublicKeysResult {
  error: Error;
  'public-keys': string[];
}

export interface SSHPublicKeysResults {
  results: SSHPublicKeysResult[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  Facade implements the API required by the sshclient worker.
*/
class SSHClientV4 {
  static NAME: string = 'SSHClient';
  static VERSION: number = 4;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 4;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    AllAddresses reports all addresses that might have SSH listening for each
    entity in args. The result is sorted with public addresses first.
    Machines and units are supported as entity types.
  */
  allAddresses(params: Entities): Promise<SSHAddressesResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'SSHClient',
        request: 'AllAddresses',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelCredentialForSSH returns a cloud spec for ssh purpose.
    This facade call is only used for k8s model.
  */
  modelCredentialForSSH(): Promise<CloudSpecResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'SSHClient',
        request: 'ModelCredentialForSSH',
        version: 4,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    PrivateAddress reports the preferred private network address for one or
    more entities. Machines and units are supported.
  */
  privateAddress(params: Entities): Promise<SSHAddressResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'SSHClient',
        request: 'PrivateAddress',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Proxy returns whether SSH connections should be proxied through the
    controller hosts for the model associated with the API connection.
  */
  proxy(): Promise<SSHProxyResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'SSHClient',
        request: 'Proxy',
        version: 4,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    PublicAddress reports the preferred public network address for one
    or more entities. Machines and units are supported.
  */
  publicAddress(params: Entities): Promise<SSHAddressResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'SSHClient',
        request: 'PublicAddress',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    PublicKeys returns the public SSH hosts for one or more
    entities. Machines and units are supported.
  */
  publicKeys(params: Entities): Promise<SSHPublicKeysResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'SSHClient',
        request: 'PublicKeys',
        version: 4,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default SSHClientV4;
