angular.module('requestApp')

    .directive('navBar', function(){
        return{
            restrict: 'E',
            templateUrl: '/templates/pages/nav-bar.html'
        };
    })
    .directive('pageHeader', function(){
        return{
            restrict: 'E',
            templateUrl: '/templates/pages/page-header.html'
        };
    })
    .directive('userGetter', function(){
        return{
            restrict: 'E',
            templateUrl: '/templates/pages/user-getter.html'
        };
    })
    .directive('toolGetter', function(){
        return{
            restrict: 'E',
            templateUrl: '/templates/pages/tool-getter.html'
        };
    })
    .directive('clinkUpdateGetter', function(){
        return{
            restrict: 'E',
            templateUrl: '/templates/pages/clink-update-getter.html'
        };
    })
    .directive('ascGetter', function(){
        return{
            restrict: 'E',
            templateUrl: '/templates/pages/asc-getter.html'
        };
    })
    .directive('ascDetails', function(){
        return{
            restrict: 'E',
            templateUrl: '/templates/pages/asc-details.html'
        };
    })
    .directive('pageFooter', function(){
        return{
            restrict: 'E',
            templateUrl: '/templates/pages/page-footer.html'
        };
    });