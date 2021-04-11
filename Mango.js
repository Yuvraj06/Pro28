class Mango{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }

        this.body = Matter.Bodies.rectangle(x,y,40,56,options);
        width = this.width;
        height = this.height;
        World.add(world, this.body);
        this.image = loadImage("mango1.png");
        
        
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
