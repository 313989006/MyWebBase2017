/**
 * 
 */
function pasta(grain,width,shape,hasEgg){
	this.grain = grain;
	this.width = width;
	this.shape = shape;
	this.hasEgg = hasEgg;
	this.toString = pastaToString;
}
function pastaToString() {
	return "Grain: " + this.grain + "\n" + "Width : " + this.width + "\n" + "shape : "+ this.shape + "\n" + "Egg? : " + Boolean(this.hasEgg);
}