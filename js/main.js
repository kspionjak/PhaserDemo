var game = new Phaser.Game(600, 400, Phaser.CANVAS, 'gameDiv');
game.state.add('state1', demo.state1);

// Jump to the first state
game.state.start('state1');