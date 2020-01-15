// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius 
    }

    get diameter(){
        return this.radius * 2
    }

    set diameter(diam){
        this.radius = diam/2
    }

    get circumference(){
        return Math.PI * this.diameter
    }

    set circumference(circum){
        this.diameter = circum/Math.PI

    }

    get area(){
        return Math.PI * this.radius * this.radius
    }

    set area(are){
        this.radius = are / (this.radius*Math.PI)
    }
}