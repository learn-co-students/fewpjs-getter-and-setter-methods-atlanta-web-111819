// Add your Circle class here
class Circle {
    constructor(radius) {
      this.radius = radius
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return (this.radius * 2) * Math.PI
    }

    get area() {
        return (this.radius ** 2) * Math.PI
    }

    set diameter(val) {
       this.radius = val/ 2
    }

    set circumference(val) {
        this.radius = (val / 3.14) /2
    }
}