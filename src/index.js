/* eslint-disable indent */
import * as PIXI from 'pixi.js';

import BootStrap from './bootstrap';

import { width, height } from './config';

const optins = {
    width,
    height,
    antialias: true,
    transparent: false,
    resolution: 1,
};

window.game = PIXI.Application;

class Game extends PIXI.Application {

    constructor(options) {
        super(options);

        window.game = this;

        // initial
        this.status = -2;

        this.play = this.play.bind(this);
        this.won = this.won.bind(this);
        this.lost = this.lost.bind(this);
        this.gameLoop = this.gameLoop.bind(this);

        this.loader = new BootStrap();
        this.ticker.add(this.gameLoop);
    }

    gameLoop() {
        switch (this.status) {
            default:
            case -1:
                break;
            case 0:
                // initial 
                this.play();
                break;
            case 1:
                // won
                this.won();
                break;
            case 2:
                // lost
                this.lost();
                break;
        }
    }

    play() {
        const gameScene = this.scenes.find(s => s.name === 'GameScene');
        this.stage.addChild(gameScene);
    }

    won() {
        this.stage.removeChildren();
        const GameOverScene = this.scenes.find(s => s.name === 'GameOverScene');
        GameOverScene.onGameWon();
        this.stage.addChild(GameOverScene);
    }

    lost() {
        this.stage.removeChildren();
        const GameOverScene = this.scenes.find(s => s.name === 'GameOverScene');
        GameOverScene.onGameLost();
        this.stage.addChild(GameOverScene);
    }
}

window.game = new Game(optins);
document.body.appendChild(window.game.view);
