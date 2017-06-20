// var demo = {};

demo.state9 = function() {};

demo.state9.prototype = {
	preload: function() {},
	create: function() {
		game.stage.backgroundColor = '#996600';
		console.log('state9');

		addChangeStateEventListeners();
	},
	update: function() {}	
};