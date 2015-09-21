(function(){

	var app = angular.module('directives', []);

	// ADMIN NAVBAR
	app.directive('adminNavbar', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/admin/desktop/admin-navbar.html'
		};
	});

	// BREADCRUMBS
	app.directive('breadcrumbs', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/_global/desktop/breadcrumbs.html'
		};
	});

	// GLOBAL NAVIGATION
	app.directive('globalNav', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/_global/global-nav.html'
		};
	});

	// CAROUSEL WIDGET
	app.directive('carousel', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/admin/desktop/widget-carousel.html'
		};
	});

	// MOBILE FOOTER
	app.directive('mobileFooter', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/admin/mobile/mobile-footer.html'
		};
	});

})();