// var demo = {};

demo.state6 = function() {};

demo.state6.prototype = {
	preload: function() {},
	create: function() {
		game.stage.backgroundColor = '#009900';
		console.log('state6');

		addChangeStateEventListeners();
	},
	update: function() {}	
};