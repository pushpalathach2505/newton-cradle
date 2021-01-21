class bob{
    constructor(x,y,d){
        
        var options={
            isStatic:false,
            restitution:1,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,d/2,options)
        
        World.add(world,this.body)
        this.r1=d/2;
        
    }
    display(){
        var bobpos=this.body.position;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(bobpos.x,bobpos.y,this.r1)
        
        
    }
}