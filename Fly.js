class Fly{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            length: 200,
            stiffness: 0.2
        }
        this.pointB = pointB;
        this.fly = Constraint.create(options);

        World.add(world, this.fly);
    }

    display(){
        var aPos = this.fly.bodyA.position;
        var bPos = this.pointB;

        push();

        //strokeWeight(3);
        //stroke(181, 231, 246);
        noStroke();
        line(aPos.x, aPos.y, bPos.x, bPos.y);

        pop();
    }
}