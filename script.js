class Employee{
    constructor(fname,lname, age, address, city, zipcode, state, country){
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.address=address;
    this.city=city;
    this.zipcode=zipcode;
    this.state=state;
    this.country=country;
    }
    createEmployees(){
        console.log("this guy " + this.fname + "" + this.lname)
    }
}

class Details extends Employee{
    constructor(fname, lname, job_title, dept, salary, years){
        super(fname, lname);
        this.fname=fname;
        this.lname=lname;
        this.job_title=job_title;
        this.dept=dept;
        this.salary=salary;
        this.years=years;
    }

    createDetails(){
        return " First Name: " + nEmp.fname +" Last Name: "+ nEmp.lname + " Job Title: " + nEmp.job_title + " Department: " + nEmp.dept + " Salary: " + nEmp.salary + " Years Worked: " + nEmp.years  
    }
}
var nEmp;

function newEmployee(e){
    e.preventDefault()
    var f = document.getElementById("fname").value
    var l = document.getElementById("lname").value
    var j = document.getElementById("job_title").value
    var d = document.getElementById("dept").value
    var s = document.getElementById("salary").value
    var y = document.getElementById("years").value
     nEmp = new Details(f,l,j,d,s,y)
        document.getElementById("empDiv").innerHTML = nEmp.createDetails();
}