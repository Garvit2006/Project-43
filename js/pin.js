class Pin{
    constructor(x,y){
        var options ={
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;

        this.image = loadImage("bowlingPin.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
       
        var angle = this.body.angle;
        push();
        translate (pos.x,pos.y);
        rotate(angle);
        imageMode (CENTER);
        image(this.image,0,0,this.width,this.height);
        pop (); 
        
        /*if(this.body.speed < 3){
            super.display();
           }
           else {
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             image(this.image, this.body.position.x, this.body.position.y, 50, 50);
             pop();  
           }*/     
         
      
    }
        
    
     
       //console.log(this.body.speed);
     
    
}