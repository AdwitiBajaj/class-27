class join{
constructor(){
var options={
stiffness : 0.6,
length : 0.2,
bodyA: bird.body,
bodyB: constraintlog.body

}
this.bat = Constraint.create(options)
World.add(world,this.bat)
}
display(){
line(bird.body.position.x,bird.body.position.y,constraintlog.body.position.x,constraintlog.body.position.y)
}
}