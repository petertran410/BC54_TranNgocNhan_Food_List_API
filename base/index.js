function SinhVien(ten, gmail) {
  this.ten = ten;
  this.gmail = gmail;
}

class Student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

let student1 = new Student("alice", 7);
let student2 = new Student("bob", 3);

console.log(student1);
console.log(student2);
console.log(student1.name);
console.log(student2.email);
