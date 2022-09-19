'use strict'

function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}
let student3 = new Student("Oleg","male",29)

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if ( this.marks === undefined) {
  this.marks = [mark]; 
    } else {
  this.marks.push(mark); 
  }
}

Student.prototype.addMarks = function(...mark){
   this.marks = mark;
}

Student.prototype.getAverage = function(){
  let avg = 0;
  for (let elem in this.marks) {
    avg += this.marks[elem];
  }
  return avg / this.marks.length;
}  

Student.prototype.exclude = function(reason){
    delete Student.subject;
    delete Student.marks;
    this.excluded = reason;
} 

