(function() {
  'use strict';

  /** 
   * @name nonmember-author-form
   * @memberof directives
   * 
   * @description
   *  Component that renders a contribution form.
   * 
   * @example
   * 
   *  <nonmember-author-form on-change="change(author)" disabled="false"></nonmember-author-form>
   */

  appCivistApp.component('nonmemberAuthorForm', {
    selector: 'nonmemberAuthorForm',
    bindings: {
      onChange: '&',
      disabled: '=',

      // Optional object to use as source. Also, values will be updated in this object, making
      // onChange callback unnecessary.
      author: '=?'
    },
    controller: Form,
    controllerAs: 'vm',
    templateUrl: '/app/v2/partials/directives/nonmember-author-form.html'
  });


  Form.$inject = ['Space', '$scope'];

  function Form(Space, $scope) {
    this.loadCustomFields = loadCustomFields.bind(this);

    this.$onInit = () => {

      if (!this.author) {
        this.author = {};
        $scope.$watchCollection('vm.author', author => {
          this.onChange({ author: author });
        });
      }
    };


    function loadCustomFields() {
      let campaign = localStorageService.get('currentCampaign');
      let rsp = Space.fields(campaign.resourceSpaceId).query().$promise;
      rsp.then(
        fields => this.campaignFields = fields.filter(f => f.entityType === ' NON_MEMBER_AUTHOR'),
        error => {
          Notify.show('Error while trying to get fields from resource space', 'error');
        }
      );
    }
  }
}());