function Container(param) {

//Private Method
    function dec() {
        if (secret > 0) {
            secret -= 1;
            console.log("In Inner method");
            return true;
        } else {
            return false;
        }
    }

    this.member = param;
    //This variable is private, if the variable was this.secret =3, then calling the dec() method would not work beacuse that tries to call the secret instance variable
    var secret = 3;
    var that = dec();
    console.log(that);
}

var objcet = new Container("Hello");