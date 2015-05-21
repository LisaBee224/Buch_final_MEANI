
vegApp.controller('itemListController', function ($scope){
	$scope.items = [
			{imageurl: 'images/strawberry.png', type: 'strawberry', name: 'Herbert Strawberry',  superpower: 'power-C boost'},
			{imageurl: 'images/blueberry.png', type: 'blueberry', name: 'Ulysses Blueberry',  superpower: 'omniscience' },
			{imageurl: 'images/orange.png', type: 'orange', name: 'Otto Sly Orange',  superpower: 'immuno-defense' },
			{imageurl: 'images/carrot.png' , type: 'carrot', name: 'Dr. Claude Carrotte',  superpower: 'night vision' },
			{imageurl: 'images/apple.png' , type: 'apple', name: 'Sally Apple',  superpower: 'razor sharp teeth' },
			{imageurl: 'images/broccoli.png' , type: 'broccoli', name: 'Barkley Broccoli',  superpower: 'unbreakable bones' },
			{imageurl: 'images/spinach.png' , type: 'spinach', name: 'George Spinachopolous',  superpower: 'calcium forcefield' },
			{imageurl: 'images/avocado.png' , type: 'avocado', name: 'Garcia Avocado',  superpower: 'uber fast growing hair' },
			{imageurl: 'images/brusselssprout.png' , type: 'brussels sprout', name: 'Sir Theodore Bruxelles',  superpower: 'time travel' },
			{imageurl: 'images/banana.png' , type: 'banana', name: 'Nana Colada',  superpower: 'heat shield' },
			{imageurl: 'images/beet.png' , type: 'beet', name: 'Bruiser Bob the Beet',  superpower: 'super strength' },
			{imageurl: 'images/tomato.png' , type: 'tomato', name: 'Tony Tomato',  superpower: 'carcinogen-shield' }

		];
		$scope.arsenal = [];



	$scope.additem = function(new_item){
			$scope.arsenal.push( new_item );

		};
		console.log('scope', $scope);
	});




