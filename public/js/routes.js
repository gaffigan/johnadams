(function(){

	var app = angular.module('routes', []);

	app.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider

		.state('/', {
			url: '/',
			templateUrl: 'views/user-select.html'
		})

		.state('admin-dashboard', {
			url: '/admin-dashboard',
			templateUrl: 'views/admin/desktop/admin-dashboard.html'
		})

		.state('desk-schedule', {
			url: '/admin-desk-schedule',
			templateUrl: 'views/admin/desktop/admin-desk-schedule.html'
		})

		//DESKTOP SCHEDULE STATES

			.state('desk-schedule.admin-schedule-bckgrnd-img', {
				url: '/admin-schedule-bckgrnd-img',
				templateUrl: 'partials/admin/desktop/schedule/02-bckgrnd-img.html'
			})

			.state('desk-schedule.admin-schedule-schedule', {
				url: '/admin-schedule-schedule',
				templateUrl: 'partials/admin/desktop/schedule/03-schedule.html'
			})

			.state('desk-schedule.admin-schedule-stream-source', {
				url: '/admin-schedule-stream-source',
				templateUrl: 'partials/admin/desktop/schedule/04-stream-source.html'
			})

			.state('desk-schedule.admin-schedule-stream-preview', {
				url: '/admin-schedule-stream-preview',
				templateUrl: 'partials/admin/desktop/schedule/05-preview.html'
			})

			.state('desk-schedule.admin-schedule-stream-confirm', {
				url: '/admin-schedule-stream-confirm',
				templateUrl: 'partials/admin/desktop/schedule/06-confirm.html'
			})

/*	

		.state('desk-schedule.admin-mobi-schedule', {
			url: '/admin-mobi-schedule',
			templateUrl: 'partials/admin-mobi-schedule-01-stream-info.html'
		})

		.state('/desk-schedule.user-dashboard', {
			url: '/user-dashboard',
			templateUrl: 'partials/user-dashboard.html'
		})

*/


		.state('mobile-schedule', {
			url: '/admin-mobi-schedule',
			templateUrl: 'views/admin/mobile/admin-mobile-schedule.html'
		})

		//MOBILE SCHEDULE STATES
			.state('mobile-schedule.general-information', {
				url: '/general-information',
				templateUrl: 'partials/admin/mobile/schedule/02-general-information.html'
			})
			.state('mobile-schedule.background-image-options', {
				url: '/background-image-options',
				templateUrl: 'partials/admin/mobile/schedule/03-background-image-options.html'
			})
			.state('mobile-schedule.list-stored-images', {
				url: '/list-stored-images',
				templateUrl: 'partials/admin/mobile/schedule/03-op01-list-stored-images.html'
			})
			.state('mobile-schedule.upload-image', {
				url: '/upload-image',
				templateUrl: 'partials/admin/mobile/schedule/03-op02-upload-image.html'
			})
			.state('mobile-schedule.date-time-schedule', {
				url: '/date-time-schedule',
				templateUrl: 'partials/admin/mobile/schedule/04-date-time-schedule.html'
			})
			.state('mobile-schedule.source-options', {
				url: '/source-options',
				templateUrl: 'partials/admin/mobile/schedule/05-source-options.html'
			})
			.state('mobile-schedule.choose-source', {
				url: '/choose-source',
				templateUrl: 'partials/admin/mobile/schedule/05-op01-choose-source.html'
			})
			.state('mobile-schedule.add-source', {
				url: '/add-source',
				templateUrl: 'partials/admin/mobile/schedule/05-op02-add-source.html'
			})
			.state('mobile-schedule.preview-schedule', {
				url: '/preview-schedule',
				templateUrl: 'partials/admin/mobile/schedule/06-preview-schedule.html'
			})
			.state('mobile-schedule.confirm-schedule', {
				url: '/confirm-schedule',
				templateUrl: 'partials/admin/mobile/schedule/07-confirm-schedule.html'
			})

		.state('mobile-settings', {
			url: '/admin-mobile-settings',
			templateUrl: 'views/admin/mobile/admin-mobile-settings.html'
		})

		//MOBILE SETTINGS STATES

			.state('mobile-settings.add-background-image', {
				url: '/add-background-image',
				templateUrl: 'partials/admin/mobile/settings/background-images/01-add-background-image.html'
			})

			.state('mobile-settings.select-image', {
				url: '/select-image',
				templateUrl: 'partials/admin/mobile/settings/background-images/02-select-image.html'
			})

			.state('mobile-settings.upload-image', {
				url: '/upload-image',
				templateUrl: 'partials/admin/mobile/settings/background-images/03-upload-image.html'
			})

			.state('mobile-settings.confirm-upload', {
				url: '/confirm-upload',
				templateUrl: 'partials/admin/mobile/settings/background-images/04-confirm-upload.html'
			});



		$urlRouterProvider.otherwise('/');


	});

})();