angular.module('sampleApp', [])
    .service('MenuService', ['$log', function MenuService($log) {
        var menu = [];

        return {
            menu: menu,
            add: function(item) {
                menu.push(item);
                $log.log(item);
            }
        };

    }])
    .controller('ControllerA', ['MenuService', '$scope', function(MenuService, $scope) {

        $scope.menu = MenuService.menu;

        $scope.addItem = function() {
            MenuService.add($scope.newItem);
        };

    }]);