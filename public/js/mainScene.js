import Snake from './Snake.js'

export default class mainScene extends Phaser.Scene {
    constructor(){
        super('mainScene');
    }

    create(){
        this.snake = new Snake(this);
    }

    update(time){
        this.snake.update(time);
    }
}