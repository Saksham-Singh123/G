class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.fly = Constraint.create(options);
        World.add(world, this.fly);
    }
    
    power(){
        this.fly.bodyA = null;
    }

    
   

    display(){
        if(this.fly.bodyA){
            var pointA = this.fly.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(3);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
            }
           
            
            pop();
        }
    }
    
}