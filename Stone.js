class Stone{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.body = Matter.Bodies.rectangle(x,y,55,41,options);
        width = this.width;
        height = this.height;
        World.add(world, this.body);
        this.image = loadImage("stone 1.png");
        
        
    }

    display(){

        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,height,width);
        pop();

    }
}
