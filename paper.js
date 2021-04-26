class Paper{
    constructor(x,y,width){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
       
        this.body = Bodies.circle(x,y,width,options);
        World.add(world, this.body);

        this.width=width;
        this.height = height;
    }
    display(){
        var pen = this.body.position;
        fill("pink");
        
        //circleMode(CENTER);
        
        circle(pen.x,pen.y,this.width,this.height);
    }
}