(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.anim = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// p1 R
	this.instance = new lib.Animar11("synched",0);
	this.instance.setTransform(234.2,197.2,0.439,0.439,45,0,0,-27.3,15);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({startPosition:0,_off:false},0).to({regX:-27.1,regY:14.9,scaleX:1,scaleY:1,rotation:0,x:234.3,y:197.1},8,cjs.Ease.get(-0.99)).wait(2));

	// p2 R
	this.instance_1 = new lib.Animar12("synched",0);
	this.instance_1.setTransform(244.1,214.2,0.298,0.298,-14.9,0,0,-37.7,-10.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({startPosition:0,_off:false},0).to({regX:-37.7,regY:-10.3,scaleX:1,scaleY:1,rotation:0,x:244.2,y:214.4},9).wait(1));

	// p3 R
	this.instance_2 = new lib.Animar13("synched",0);
	this.instance_2.setTransform(237,246.4,0.41,0.41,-89.9,0,0,-56.9,-24.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(37).to({startPosition:0,_off:false},0).to({regY:-24.8,scaleX:1,scaleY:1,rotation:0,x:236.9,y:246.5},10,cjs.Ease.get(-0.99)).wait(3));

	// p1 L
	this.instance_3 = new lib.Animar8("synched",0);
	this.instance_3.setTransform(141.7,228.3,0.301,0.301,0,120,-59.9,24.9,5.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({startPosition:0,_off:false},0).to({regY:5.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:141.6,y:228.1},9,cjs.Ease.get(-0.99)).wait(6));

	// p2 L
	this.instance_4 = new lib.Animar9("synched",0);
	this.instance_4.setTransform(144.3,234.2,0.249,0.249,15,0,0,33.4,-16.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38).to({startPosition:0,_off:false},0).to({regX:33.5,scaleX:1,scaleY:1,rotation:0,x:143.3,y:234.4},9,cjs.Ease.get(-0.99)).wait(3));

	// p3 L
	this.instance_5 = new lib.Animar10("synched",0);
	this.instance_5.setTransform(148.3,249.3,0.336,0.336,105,0,0,24.6,-30.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(36).to({startPosition:0,_off:false},0).to({regX:24.4,regY:-30.6,scaleX:1,scaleY:1,rotation:0,y:249.2},10,cjs.Ease.get(-0.99)).wait(4));

	// brazo R
	this.instance_6 = new lib.Animar6("synched",0);
	this.instance_6.setTransform(194.2,208.5,0.511,0.511,-29.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(22).to({startPosition:0,_off:false},0).to({scaleX:0.71,scaleY:0.71,rotation:-17.6,x:207.6,y:147.4},6,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1,rotation:0,x:227.6,y:148.8},6,cjs.Ease.get(1)).wait(16));

	// pinza R
	this.instance_7 = new lib.Animar7("synched",0);
	this.instance_7.setTransform(189.5,178.5,0.511,0.511,-29.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(22).to({startPosition:0,_off:false},0).to({scaleX:0.71,scaleY:0.71,rotation:-17.6,x:213.3,y:107.3},6,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1,rotation:0,x:249,y:93.3},6,cjs.Ease.get(1)).wait(16));

	// brazo L
	this.instance_8 = new lib.Animar4("synched",0);
	this.instance_8.setTransform(196.7,216.8,0.693,0.696,0,-104.9,-105.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({startPosition:0,_off:false},0).to({x:181.7,y:268.8},5,cjs.Ease.get(1)).to({scaleX:0.8,scaleY:0.81,skewX:-67,skewY:-67.3,x:128.2,y:239.2},6,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:127.5,y:186.6},4).wait(18));

	// pinza L
	this.instance_9 = new lib.Animar5("synched",0);
	this.instance_9.setTransform(187.9,243.8,0.693,0.696,0,-104.9,-105.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({startPosition:0,_off:false},0).to({x:172.9,y:295.8},5,cjs.Ease.get(1)).to({scaleX:0.8,scaleY:0.81,skewX:-67,skewY:-67.3,x:110.2,y:248.4},6,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:93.2,y:164.1},4).wait(18));

	// cuerpo
	this.instance_10 = new lib.Animar3("synched",0);
	this.instance_10.setTransform(197.5,220.6,0.007,0.007);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:0.34,scaleY:0.34},4,cjs.Ease.get(-0.99)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(-0.99)).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(197,220.1,1,1);


// symbols:
(lib.Animar13 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlIioQDVBYFeDfQCwBwCGBfQhwiVjbiuQjXirkSidIABgDQgegBgngJQgugMgWgGQg6gPgKgBQgugGgRAUQgFAHAKAYQAJAVAQAaQAdACAjAVQAUAMAkAdQAlAHAUANIAHAE").cp();

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.4,-35,109.1,70.2);


(lib.Animar12 = function() {
	this.initialize();

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACngFQiEg2ijgqIgBgDIgCABIgFgBQgKAFgMABQhbAAgxAXQgPAHgOgDQghAUgMARQgPAVAZALQARAGAdADQAPABAfACQAlADAQABQAdACAXgEQAKgHARAAQAHAAADABIAAgBQC3AdC0AmQBbATA1AOQhPg6iFg0IAAAA").cp();

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.8,-10.4,75.8,21.1);


(lib.Animar11 = function() {
	this.initialize();

	// Capa 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AERiTQhxBVhXAoQhJAagXALIgBAAQgGADgIABQhGALg9AdQhLAlgcA0QANAAAFgBQAegDAfgHQBEgPBpgbQANgDAJADQAHgEAMAAQCIhZBHhTQAkgqAJgYIAAAA").cp();

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.2,-14.8,54.7,29.8);


(lib.Animar10 = function() {
	this.initialize();

	// Capa 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AC1kdQgZALgOAFQgWAJgRAEIgCABIACACQh9CbhaCQQhcCTgmByIB/imQCWi8B4h8IAAABQACgGAEgGQAPgTAbgmQAXghAOgcIADgGIgMADQgYALgaAHIAAAA").cp();

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.3,-30.7,48.8,61.6);


(lib.Animar9 = function() {
	this.initialize();

	// Capa 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AFPiDIgBAAIgDgCQgPgCgpgHQgjgHgWgBIgFgBIgHABQgUAAgOgNIABAIQimBKiDBSQiHBVhLBOIC5hfQDThmCFgqIABABQAHgDAKAAQAvgCAtgPIAWgIIACgBQgBgOAHgOIAAAA").cp();

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33.4,-16.3,67,32.9);


(lib.Animar8 = function() {
	this.initialize();

	// Capa 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ACagwQgCABgIADQABgBAGgFQgNAKgQADQgQACgPgJIAAAFQg3AHgxACQhgADiKgbIAPAMQAXAPAhAOQBoArClATIACAGQAMgaAeAAIAEAAQAFgBAEABQAGAAACABQAegFAIgCQAUgEAOgHQADgMAJgJQAEgGACgIQACgJgEgFQgGgLgLgBQgigCgSABQgQAAgHACIAAAA").cp();

	this.addChild(this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.8,-5.4,49.8,11.1);


(lib.Animar7 = function() {
	this.initialize();

	// Capa 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkKlaQBTAAA6A7QA8A7AABTQAABTg8A6Qg6A5hTAAQg2AAgtgbQgtgZgagqQgDASAAAXQAAC2CBCBQCCCBC0AAQC2AACBiBQCBiBAAi2QAAi1iBiBQiBiBi2AAQhKAAhGAZQhEAYg5AsIADAA").cp();

	this.addChild(this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.9,-43.9,88,88.1);


(lib.Animar6 = function() {
	this.initialize();

	// Capa 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA4gdQASgnAcgYQAegbAaADIAAgCQgEg3hBgPQgzgMhDAOQAUAVgBAnQgBAkgTAkQgtBXhDgPIgHgCQgIBUAAALQAAA3AdAYIAMACQB5ATBChqIgFgDQgbgTgBgnQgBgjATgmIAAAA").cp();

	this.addChild(this.shape_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.8,-19.4,31.8,39.1);


(lib.Animar5 = function() {
	this.initialize();

	// Capa 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AkTgCQAABwBRBRQBRBSBxAAQByAABRhSQBRhRAAhwQAAhhg8hMQg8hKhdgXQALAVAAAXQAAAngbAaQgbAcgkAAQgmAAgcgcQgbgaAAgnQAAgQAFgOQhMAfgvBFQgwBGAABWIAAAA").cp();

	this.addChild(this.shape_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.6,-27.2,55.4,54.6);


(lib.Animar4 = function() {
	this.initialize();

	// Capa 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Aioh7QgdA4AYAkQAGAIACAKIADgDQAYgPAjAIQAhAHAeAYQBHA8gWBNIAAABIALADQAwASAugVQAwgVAQgxQAPgugPglQgKgaglgwIgFgIIgCADQgzA+hNgkQghgPgTgZQgVgbADgaIABgDQgjAAgSAFQgfAHgLAVIAAAA").cp();

	this.addChild(this.shape_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.5,-15.7,37.1,31.5);


(lib.Animar3 = function() {
	this.initialize();

	// Capa 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AH6n5QBjBiA3CBQA4CGAACQQAACRg4CFQg3CChjBiQhjBkiBA2QiFA4iRAAQiRAAiFg4QiBg2hjhkQhjhig2iCQg5iFAAiRQAAiQA5iGQA2iABjhjQBjhkCBg2QCFg4CRAAQEoAADSDSIAAAA").cp();

	this.addChild(this.shape_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.6,-71.6,143.4,143.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;