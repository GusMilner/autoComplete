


export interface Student {
    studentNumber: number;
    firstName: string;
    lastName: string;
    emailAddress: string;
  }

export class SearchStudentData

{
    static students = [
        {
          "studentNumber": 12345,
          "firstName": "John",
          "lastName": "Smith",
          "emailAddress": "johnsmith@example.com"
        },
        {
          "studentNumber": 54321,
          "firstName": "Jane",
          "lastName": "Doe",
          "emailAddress": "janedoe@example.com"
        },
        {
          "studentNumber": 98765,
          "firstName": "Adam",
          "lastName": "Johnson",
          "emailAddress": "adamjohnson@example.com"
        },
        {
          "studentNumber": 67890,
          "firstName": "Emily",
          "lastName": "Williams",
          "emailAddress": "emilywilliams@example.com"
        },
        {
          "studentNumber": 12345,
          "firstName": "Sarah",
          "lastName": "Jones",
          "emailAddress": "sarahjones@example.com"
        },
        {
          "studentNumber": 54321,
          "firstName": "David",
          "lastName": "Brown",
          "emailAddress": "davidbrown@example.com"
        },
        {
          "studentNumber": 98765,
          "firstName": "Emma",
          "lastName": "Miller",
          "emailAddress": "emmamiller@example.com"
        },
        {
          "studentNumber": 67890,
          "firstName": "Michael",
          "lastName": "Davis",
          "emailAddress": "michaeldavis@example.com"
        },
        {
          "studentNumber": 12345,
          "firstName": "Olivia",
          "lastName": "Wilson",
          "emailAddress": "oliviawilson@example.com"
        },
        {
          "studentNumber": 54321,
          "firstName": "Joshua",
          "lastName": "Moore",
          "emailAddress": "joshuamoore@example.com"
        }
      ]
    students: Student[];

    constructor() {
        this.students = SearchStudentData.students;
    }

    searchStudentsByName(searchValue: string): Student[]
    {
        const startsWithValue = searchValue.toLowerCase();
        const filteredResults = this.students.filter(student => {
            if( student.lastName.toLowerCase().startsWith(startsWithValue, 0) || student.firstName.toLowerCase().startsWith(startsWithValue, 0))
            {
                return student;
            }
            return;
        })

        return filteredResults;

    }
}