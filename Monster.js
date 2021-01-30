class Monster{
    constructor(x, y){
        var options={
            density: 1,
            frictionAir: 0.04
        }
        this.image1 = loadImage("Image/Monster-01.png");
        this.image2 = loadImage("Image/Monster-02.png");

        this.body = Bodies.circle(x, y, 120, options);
        this.radius = 120;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();

        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image1, 0, 0, 180, 300);
        pop();
    }

    change(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();

        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image2, 0, 0, 180, 300);
        
        pop(); 
    }
    
}