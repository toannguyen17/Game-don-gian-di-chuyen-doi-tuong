/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, width, height){
	this.goBack = false;
  this.image = image;
  this.top = top;
  this.left = left;
  this.width = width;
  this.height = height;

  this.getHeroElement = function(){
	return '<img width="'+ this.width + '"' +
	  ' height="'+ this.height + '"' +
	  ' src="' + this.image +'"' +
	  ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
	this.left += 1;
  }
  this.moveLeft = function(){
	this.left -= 1;
  }

}

let hero = new Hero('pikachu.png', 20, 0, 100, 160);
let game = document.getElementById('game');

function start(){
	if(hero.goBack == false){
		if(hero.left < window.innerWidth - hero.width){
			hero.moveRight();
		}else{
			hero.goBack = true;
		}
	}else{
		if(hero.left > 0){
			hero.moveLeft();
		}else{
			hero.goBack = false;
		}
	}
	game.innerHTML = hero.getHeroElement();
}
setInterval(start, 10);
