import angular from 'angular';
import config from './config';

import assignRootScopeVariables from './assign-root-scope-variables';

export default function(ngModule, options){
  angular.merge(config, options);

  assignRootScopeVariables(ngModule, config);
};
