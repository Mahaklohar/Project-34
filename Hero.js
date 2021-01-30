class Hero{
    constructor(x, y){
        var options = {
            density: 1, 
            frictionAir: 1.0
        }

        this.image = loadImage("Image/Superhero-01.png"); 
        this.body = Bodies.circle(x, y, 100, options);
        this.radius = 100;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 200, 100)
        
        pop();
    }
}