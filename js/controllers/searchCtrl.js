define(['angular', 'jquery'], function(angular){
  function SearchCtrl($scope, $location, $log, instagram) {
    'use strict';

    instagram.popularMedia().success(function(data) {
      $scope.popularMedia = data.data;
    });

    $scope.$on('search', function(e, args){
      $log.info("Search for hashtag " + args.term);

      if (args.type == 'hashtag'){
		  $scope.$apply(function() {
			instagram.hashtagMedia(args.term).success(function(data) {			
				$scope.searchResults = data.data;
			})
        });
	  }
    });	
	
    // var container = $('#container');
    // container.isotope({
    //   // options
    //   itemSelector: '.item',
    //   layoutMode: 'fitRows'
    // });
  };

  SearchCtrl.$inject = ['$scope', '$location', '$log', 'instagram'];
  return SearchCtrl;
});
