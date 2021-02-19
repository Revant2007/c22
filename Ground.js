class Ground {

constructor(x,y){

    var options = {
         isStatic: true
     }
  
  this.body = Bodies.rectangle(x,y,800,25,options);    
  
  this.w = 800;
  this.h = 25;

  World.add(world,this.body);
}

display(){
    
    var position = this.body.position;
    rectMode(CENTER);
    rect(position.x,position.y,this.w,this.h);

}

}