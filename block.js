class block extends BaseClass{
    constructor(x,y){
        super(x, y, 30, 30);
        this.Visiblity = 255;
       this.image = loadImage("sprites/wood1.png");
    }
    display(){
        console.log(this.body.speed);
        super.display();
        if(this.body.speed<3){
            super.display();
           }

           else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity-5;
            tint(255, this.Visiblity);
               image(this.image, this.body.position.x, this.body.position.y, 50, 50);
           pop();
          } 
    }
};