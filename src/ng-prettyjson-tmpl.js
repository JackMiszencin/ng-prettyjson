(function(angular) {
'use strict';

  angular.module('ngPrettyJson')
  .run(['$templateCache', function ($templateCache) {
    $templateCache.put('ng-prettyjson/ng-prettyjson-panel.tmpl.html',
    '<div>' +
    '<button ng-click="edit()" ng-show="edition && !settings.editActivated && showEditButton">Edit</button>' +
    '<button ng-click="edit()" ng-show="edition && settings.editActivated && showEditButton">Cancel</button>' +
    '<button ng-click="update()" ng-show="settings.editActivated && parsable && showEditButton">Update</button>' +
    '<pre class="pretty-json" id="{{id}}"></pre>' +
    '</div>');
  }]);

})(window.angular);
