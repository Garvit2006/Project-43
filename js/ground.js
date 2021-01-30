class Ground {
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.visibility = 0;
        World.add(world,this.body);
    }
     display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }
}