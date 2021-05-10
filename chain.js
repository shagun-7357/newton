class Chain{
    constructor(body1, body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        } 
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            

            push()
            stroke(48,22,8);
           
            line(pointA.x, pointA.y, pointB.x+this.offsetX, pointB.y+this.offsetY);            
            pop()
        }
    }
    
}