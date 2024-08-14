import { students, houses } from './student_data';
import createId from './create_ID';
import studentsOnDom from './students_on_dom';

// sorts student to a house and then place them in the students array
const sortStudent = (e) => {
  e.preventDefault();
  const sortingHat = houses[Math.floor(Math.random() * houses.length)];

  if (e.target.id === 'sorting') {
    const student = document.querySelector('#student-name');

    // create the new student object
    students.push({
      id: createId(students),
      name: student.value,
      house: sortingHat.house,
      crest: sortingHat.crest
    });

    student.value = ''; // reset value of input
    // eslint-disable-next-line no-use-before-define
    studentsOnDom('#students', students);
  }
};

export default sortStudent;
