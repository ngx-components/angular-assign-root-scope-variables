export default function(ngModule, options){

  ngModule.config(assignRootScopeVariables);

  /**
   * Assign $rootScope variables
   *
   * Make sure to inject required dependencies
   * e.g. when assigning a service to a $rootScope variable
   */
  function assignRootScopeVariables($rootScope) {

    // $rootScope.$state = $state;
  }

  assignRootScopeVariables.$inject = ['$rootScope'];

};

