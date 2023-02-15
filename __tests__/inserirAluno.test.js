const Student = require('./Student');
const database = require('./database');

describe('Test inclusion of student entity in database', () => {
  it('should add a student to the database successfully', async () => {
    const student = new Student({ name: 'John Doe', age: 25, grade: 'A' });
    await database.addStudent(student);

    const savedStudent = await database.getStudentByName('John Doe');

    expect(savedStudent.name).toBe('John Doe');
    expect(savedStudent.age).toBe(25);
    expect(savedStudent.grade).toBe('A');
  });
});