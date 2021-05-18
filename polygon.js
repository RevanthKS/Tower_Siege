class Polygon{
    constructor(x,y){
        this.image = loadImage("polygon.png");
        this.body = Bodies.circle(50,200,30);
        World.add(world,this.body);

    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
    }
}