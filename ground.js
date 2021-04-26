class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
    }
    
    display(){
        var pencil = this.body.position;
        rectMode(CENTER);
        
        fill("yellow");
        rect(pencil.x,pencil.y,this.width,this.height);
    }
}