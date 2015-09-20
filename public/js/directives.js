(function(){

	var app = angular.module('directives', []);

	// ADMIN NAVBAR
	app.directive('adminNavbar', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/admin-navbar.html'
		};
	});

	// BREADCRUMBS
	app.directive('breadcrumbs', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/breadcrumbs.html'
		};
	});

	// GLOBAL NAVIGATION
	app.directive('globalNav', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/global-nav.html'
		};
	});

	// CAROUSEL WIDGET
	app.directive('carousel', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/widget-carousel.html'
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