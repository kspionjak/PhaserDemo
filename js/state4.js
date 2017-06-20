// var demo = {};

demo.state4 = function() {};

demo.state4.prototype = {
	preload: function() {},
	create: function() {
		game.stage.backgroundColor = '#66ff33';
		console.log('state4');

		addChangeStateEventListeners();
	},
	update: function() {}	
};