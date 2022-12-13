function divider(){
    this.divide = function (numberA, numberB){
        return numberA/numberB
    }
}

module.exports= new divider();
