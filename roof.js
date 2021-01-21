class roof{
    constructor(x1,y1,width1,height1){
        var property_change={
            isStatic:true,
        }
        this.body=Bodies.rectangle(x1,y1,width1,height1,property_change);
        World.add(world,this.body);
        this.width=width1;
        this.height=height1;

    }
    display(){
        var pos=this.body.position;
        fill("grey")
        rect(pos.x,pos.y,this.width,this.height);
    }
}