const car = {
  maker: "Toyota",
  model: "Camry",
  horsepower: 301,
  fuel: "Gasoline",
  year: 2021,
};
console.log(`${car.maker} ${car.model}`);

const person = new Object();
person.name = "Tunahan";
person.age = 19;
person.profession = "Student";
console.log(`${person.name} is ${person.age} year old.`);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array[5]);

const school = {
  Name: "NTI",
  address: {
    city: "Stockholm",
    street: "Rongenvagen 19",
    municipality: "Huddinge",
    postalCode: "141 52",
  },
  classes: [
    {
      Name: "TE4_25",
      numberOfStudents: 10,
    },
    {
      Name: "EE24",
      numberOfStudents: 21,
    },
  ],
};
console.log(school.address.street);
console.log(school.classes[0].Name);
console.log(school.classes[1].numberOfStudents);

for (const item in school) {
  console.log(item, school[item]);
}

//Exercise A
const book = {
  title: "Moby Dick",
  author: "Herman Melville",
  year: "1851",
};
book.pages = 635;
console.log(book);

//Exercise B
const user = {
  userName: "Mike Hawk",
  userCity: "Bangkok",
};
console.log(`Hi, I'm ${user.userName} from ${user.userCity}.`);

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
];
console.log(`${books[1].title} by ${books[1].author}.`);

//Exercise C
const classroom = {
  teacher: {
    name: "Sara",
    subject: "Mathematics",
  },
  students: [
    { name: "John", age: 16 },
    { name: "Emma", age: 15 },
    { name: "Michael", age: 17 },
  ],
};
for (const student of classroom.students) {
  console.log(student.name);
}
