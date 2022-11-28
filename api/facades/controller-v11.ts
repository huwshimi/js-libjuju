/**
  Juju Controller version 11.
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


export interface AllWatcherId {
  'watcher-id': string;
}

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

export interface CloudSpecResults {
  results: CloudSpecResult[];
}

export interface ConfigValue {
  source: string;
  value: AdditionalProperties;
}

export interface ControllerAPIInfoResult {
  addresses: string[];
  cacert: string;
  error?: Error;
}

export interface ControllerAPIInfoResults {
  results: ControllerAPIInfoResult[];
}

export interface ControllerConfigResult {
  config: AdditionalProperties;
}

export interface ControllerConfigSet {
  config: AdditionalProperties;
}

export interface ControllerVersionResults {
  'git-commit': string;
  version: string;
}

export interface DashboardConnectionInfo {
  error?: Error;
  'proxy-connection': DashboardConnectionProxy;
  'ssh-connection': DashboardConnectionSSHTunnel;
}

export interface DashboardConnectionProxy {
  config: AdditionalProperties;
  type: string;
}

export interface DashboardConnectionSSHTunnel {
  host: string;
  port: string;
}

export interface DestroyControllerArgs {
  'destroy-models': boolean;
  'destroy-storage'?: boolean;
  force?: boolean;
  'max-wait'?: number;
  'model-timeout'?: number;
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

export interface ErrorResult {
  error: Error;
}

export interface ErrorResults {
  results: ErrorResult[];
}

export interface HostedModelConfig {
  'cloud-spec'?: CloudSpec;
  config?: AdditionalProperties;
  error?: Error;
  name: string;
  owner: string;
}

export interface HostedModelConfigsResults {
  models: HostedModelConfig[];
}

export interface InitiateMigrationArgs {
  specs: MigrationSpec[];
}

export interface InitiateMigrationResult {
  error?: Error;
  'migration-id': string;
  'model-tag': string;
}

export interface InitiateMigrationResults {
  results: InitiateMigrationResult[];
}

export interface MachineHardware {
  arch: string;
  'availability-zone': string;
  cores: number;
  'cpu-power': number;
  mem: number;
  'root-disk': number;
  tags: string[];
}

export interface MigrationSpec {
  'model-tag': string;
  'target-info': MigrationTargetInfo;
}

export interface MigrationTargetInfo {
  addrs: string[];
  'auth-tag': string;
  'ca-cert': string;
  'controller-alias'?: string;
  'controller-tag': string;
  macaroons?: string;
  password?: string;
}

export interface Model {
  name: string;
  'owner-tag': string;
  type: string;
  uuid: string;
}

export interface ModelBlockInfo {
  blocks: string[];
  'model-uuid': string;
  name: string;
  'owner-tag': string;
}

export interface ModelBlockInfoList {
  models: ModelBlockInfo[];
}

export interface ModelConfigResults {
  config: AdditionalProperties;
}

export interface ModelFilesystemInfo {
  detachable?: boolean;
  id: string;
  message?: string;
  'provider-id'?: string;
  status?: string;
}

export interface ModelMachineInfo {
  'display-name'?: string;
  'ha-primary'?: boolean;
  hardware?: MachineHardware;
  'has-vote'?: boolean;
  id: string;
  'instance-id'?: string;
  message?: string;
  status?: string;
  'wants-vote'?: boolean;
}

export interface ModelStatus {
  'application-count': number;
  error?: Error;
  filesystems?: ModelFilesystemInfo[];
  'hosted-machine-count': number;
  life: string;
  machines?: ModelMachineInfo[];
  'model-tag': string;
  'owner-tag': string;
  type: string;
  'unit-count': number;
  volumes?: ModelVolumeInfo[];
}

export interface ModelStatusResults {
  models: ModelStatus[];
}

export interface ModelTag {
  [key: string]: AdditionalProperties;
}

export interface ModelVolumeInfo {
  detachable?: boolean;
  id: string;
  message?: string;
  'provider-id'?: string;
  status?: string;
}

export interface ModifyControllerAccess {
  access: string;
  action: string;
  'user-tag': string;
}

export interface ModifyControllerAccessRequest {
  changes: ModifyControllerAccess[];
}

export interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

export interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

export interface RemoveBlocksArgs {
  all: boolean;
}

export interface StringResult {
  error?: Error;
  result: string;
}

export interface SummaryWatcherID {
  'watcher-id': string;
}

export interface UserAccess {
  access: string;
  'user-tag': string;
}

export interface UserAccessResult {
  error: Error;
  result: UserAccess;
}

export interface UserAccessResults {
  results: UserAccessResult[];
}

export interface UserModel {
  'last-connection': string;
  model: Model;
}

export interface UserModelList {
  'user-models': UserModel[];
}

export interface AdditionalProperties {
  [key: string]: any;
}

/**
  ControllerAPI provides the Controller API.
*/
class ControllerV11 {
  static NAME: string = 'Controller';
  static VERSION: number = 11;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 11;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    AllModels allows controller administrators to get the list of all the
    models in the controller.
  */
  allModels(): Promise<UserModelList> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'AllModels',
        version: 11,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CloudSpec returns the model's cloud spec.
  */
  cloudSpec(params: Entities): Promise<CloudSpecResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'CloudSpec',
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ConfigSet changes the value of specified controller configuration
    settings. Only some settings can be changed after bootstrap.
    Settings that aren't specified in the params are left unchanged.
  */
  configSet(params: ControllerConfigSet): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'ConfigSet',
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ControllerAPIInfoForModels returns the controller api connection details for the specified models.
  */
  controllerAPIInfoForModels(params: Entities): Promise<ControllerAPIInfoResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'ControllerAPIInfoForModels',
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ControllerConfig returns the controller's configuration.
  */
  controllerConfig(): Promise<ControllerConfigResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'ControllerConfig',
        version: 11,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ControllerVersion returns the version information associated with this
    controller binary.
    
    NOTE: the implementation intentionally does not check for SuperuserAccess
    as the Version is known even to users with login access.
  */
  controllerVersion(): Promise<ControllerVersionResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'ControllerVersion',
        version: 11,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    DashboardConnectionInfo returns the connection information for a client to
    connect to the Juju Dashboard including any proxying information.
  */
  dashboardConnectionInfo(): Promise<DashboardConnectionInfo> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'DashboardConnectionInfo',
        version: 11,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    DestroyController destroys the controller.
    
    If the args specify the destruction of the models, this method will
    attempt to do so. Otherwise, if the controller has any non-empty,
    non-Dead hosted models, then an error with the code
    params.CodeHasHostedModels will be transmitted.
  */
  destroyController(params: DestroyControllerArgs): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'DestroyController',
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GetCloudSpec constructs the CloudSpec for a validated and authorized model.
  */
  getCloudSpec(params: ModelTag): Promise<CloudSpecResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'GetCloudSpec',
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GetControllerAccess returns the level of access the specified users
    have on the controller.
  */
  getControllerAccess(params: Entities): Promise<UserAccessResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'GetControllerAccess',
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    HostedModelConfigs returns all the information that the client needs in
    order to connect directly with the host model's provider and destroy it
    directly.
  */
  hostedModelConfigs(): Promise<HostedModelConfigsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'HostedModelConfigs',
        version: 11,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    IdentityProviderURL returns the URL of the configured external identity
    provider for this controller or an empty string if no external identity
    provider has been configured when the controller was bootstrapped.
    
    NOTE: the implementation intentionally does not check for SuperuserAccess
    as the URL is known even to users with login access.
  */
  identityProviderURL(): Promise<StringResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'IdentityProviderURL',
        version: 11,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    InitiateMigration attempts to begin the migration of one or
    more models to other controllers.
  */
  initiateMigration(params: InitiateMigrationArgs): Promise<InitiateMigrationResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'InitiateMigration',
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ListBlockedModels returns a list of all models on the controller
    which have a block in place.  The resulting slice is sorted by model
    name, then owner. Callers must be controller administrators to retrieve the
    list.
  */
  listBlockedModels(): Promise<ModelBlockInfoList> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'ListBlockedModels',
        version: 11,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelConfig returns the model config for the controller
    model.  For information on the current model, use
    client.ModelGet
  */
  modelConfig(): Promise<ModelConfigResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'ModelConfig',
        version: 11,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelStatus returns a summary of the model.
  */
  modelStatus(params: Entities): Promise<ModelStatusResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'ModelStatus',
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModifyControllerAccess changes the model access granted to users.
  */
  modifyControllerAccess(params: ModifyControllerAccessRequest): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'ModifyControllerAccess',
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    MongoVersion allows the introspection of the mongo version per controller
  */
  mongoVersion(): Promise<StringResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'MongoVersion',
        version: 11,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RemoveBlocks removes all the blocks in the controller.
  */
  removeBlocks(params: RemoveBlocksArgs): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'RemoveBlocks',
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchAllModelSummaries starts watching the summary updates from the cache.
    This method is superuser access only, and watches all models in the
    controller.
  */
  watchAllModelSummaries(): Promise<SummaryWatcherID> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'WatchAllModelSummaries',
        version: 11,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchAllModels starts watching events for all models in the
    controller. The returned AllWatcherId should be used with Next on the
    AllModelWatcher endpoint to receive deltas.
  */
  watchAllModels(): Promise<AllWatcherId> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'WatchAllModels',
        version: 11,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchCloudSpecsChanges returns a watcher for cloud spec changes.
  */
  watchCloudSpecsChanges(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'WatchCloudSpecsChanges',
        version: 11,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchModelSummaries starts watching the summary updates from the cache.
    Only models that the user has access to are returned.
  */
  watchModelSummaries(): Promise<SummaryWatcherID> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Controller',
        request: 'WatchModelSummaries',
        version: 11,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ControllerV11;
