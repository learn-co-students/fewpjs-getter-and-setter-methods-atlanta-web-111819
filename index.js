// Add your Circle class here


class Circle{
    constructor(radius) {
        this.radius = radius
        
    }

    get diameter(){
        console.log(this.radius * 2)
        return this.radius * 2
    }

    get circumference(){
        console.log(this.diameter * Math.PI)
        return this.diameter * Math.PI
    }

    get area(){
        return Math.PI * (this.radius**2)
    }

    set diameter(diameter){
        this.radius = diameter/2
    }

    set circumference(circumference){
        this.radius = circumference / (Math.PI * 2)
    }











}