class Employee{
    //constructor
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
}
}

//method
getName(){
    return this.name;
}


getId(){
    return this.id;
}

getEmail(){
    return this.email;
}

getRole(){
    return "Employee";
}

module.exports = Employee;