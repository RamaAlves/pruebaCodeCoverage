function multiplier(){
    this.multiply = function (numberA, numberB){
        return numberA*numberB
    }
}

module.exports= new multiplier();