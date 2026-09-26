function add(){
    console.log("hello");
}
add();

let person = {//object calling function
    name: "Jane",//person.name=this

    greet: function() {
        console.log(this.name);
    }
};

person.greet();