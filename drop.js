class Bird{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.bodies=Bodies.rectangle(x,y,50,50,options);// determining the shape of the body
        this.width=50;
        this.height=50;
         World.add(world,this.bodies);// adding the body to the world
   }
   display(){
    if(this.body.y >398){
        var position= [this.body.position.x, this.body.position.y];   
    }
    translate(this.bodies.position.x,this.bodies.position.y);
    rotate(angle);
    fill("blue");
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    var maxDrops=100;
    for(var i=0; i<maxDrops; i++){
        maxDrops.push(new createDrop(random(0,400), random(0,400)));
    }
}
    }
  
