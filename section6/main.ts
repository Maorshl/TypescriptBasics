class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const devDepartment = new Department("Dev");
console.log(devDepartment);
