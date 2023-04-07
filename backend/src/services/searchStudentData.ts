


export interface Student {
    studentNumber: number;
    firstName: string;
    lastName: string;
    emailAddress: string;
  }

export class SearchStudentData

{
    
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

    static students = [
        {
          "studentNumber": 1,
          "firstName": "John",
          "lastName": "Doe",
          "emailAddress": "john.doe@example.com"
        },
        {
          "studentNumber": 2,
          "firstName": "Mary",
          "lastName": "Smith",
          "emailAddress": "mary.smith@example.com"
        },
        {
          "studentNumber": 3,
          "firstName": "Jack",
          "lastName": "Brown",
          "emailAddress": "jack.brown@example.com"
        },
        {
          "studentNumber": 4,
          "firstName": "Jill",
          "lastName": "Johnson",
          "emailAddress": "jill.johnson@example.com"
        },
        {
          "studentNumber": 5,
          "firstName": "Peter",
          "lastName": "Williams",
          "emailAddress": "peter.williams@example.com"
        },
        {
          "studentNumber": 6,
          "firstName": "Anne",
          "lastName": "Miller",
          "emailAddress": "anne.miller@example.com"
        },
        {
          "studentNumber": 7,
          "firstName": "David",
          "lastName": "Taylor",
          "emailAddress": "david.taylor@example.com"
        },
        {
          "studentNumber": 8,
          "firstName": "Michael",
          "lastName": "White",
          "emailAddress": "michael.white@example.com"
        },
        {
          "studentNumber": 9,
          "firstName": "Sara",
          "lastName": "Davis",
          "emailAddress": "sara.davis@example.com"
        },
        {
          "studentNumber": 10,
          "firstName": "Kevin",
          "lastName": "Moore",
          "emailAddress": "kevin.moore@example.com"
        },
        {
          "studentNumber": 11,
          "firstName": "Jane",
          "lastName": "Thompson",
          "emailAddress": "jane.thompson@example.com"
        },
        {
          "studentNumber": 12,
          "firstName": "Mark",
          "lastName": "Harris",
          "emailAddress": "mark.harris@example.com"
        },
        {
          "studentNumber": 13,
          "firstName": "Robert",
          "lastName": "Martin",
          "emailAddress": "robert.martin@example.com"
        },
        {
          "studentNumber": 14,
          "firstName": "William",
          "lastName": "Anderson",
          "emailAddress": "william.anderson@example.com"
        },
        {
          "studentNumber": 15,
          "firstName": "Elizabeth",
          "lastName": "Taylor",
          "emailAddress": "elizabeth.taylor@example.com"
        },
        {
          "studentNumber": 16,
          "firstName": "Christopher",
          "lastName": "Thomas",
          "emailAddress": "christopher.thomas@example.com"
        },
        {
          "studentNumber": 17,
          "firstName": "Joseph",
          "lastName": "Jackson",
          "emailAddress": "joseph.jackson@example.com"
        },
        {
          "studentNumber": 18,
          "firstName": "Jennifer",
          "lastName": "White",
          "emailAddress": "jennifer.white@example.com"
        },
        {
          "studentNumber": 19,
          "firstName": "Charles",
          "lastName": "Harris",
          "emailAddress": "charles.harris@example.com"
        },
        {
          "studentNumber": 20,
          "firstName": "Matthew",
          "lastName": "Martin",
          "emailAddress": "matthew.martin@example.com"
        },
        {
          "studentNumber": 21,
          "firstName": "Anthony",
          "lastName": "Thompson",
          "emailAddress": "anthony.thompson@example.com"
        },
        {
          "studentNumber": 22,
          "firstName": "Joshua",
          "lastName": "Garcia",
          "emailAddress": "joshua.garcia@example.com"
        },
        {
          "studentNumber": 23,
          "firstName": "Amanda",
          "lastName": "Martinez",
          "emailAddress": "amanda.martinez@example.com"
        },
        {
          "studentNumber": 24,
          "firstName": "Daniel",
          "lastName": "Robinson",
          "emailAddress": "daniel.robinson@example.com"
        },
        {
          "studentNumber": 25,
          "firstName": "Andrew",
          "lastName": "Clark",
          "emailAddress": "andrew.clark@example.com"
        },
        {
          "studentNumber": 26,
          "firstName": "Paul",
          "lastName": "Rodriguez",
          "emailAddress": "paul.rodriguez@example.com"
        },
        {
          "studentNumber": 27,
          "firstName": "Jessica",
          "lastName": "Lewis",
          "emailAddress": "jessica.lewis@example.com"
        },
        {
          "studentNumber": 28,
          "firstName": "Jessica",
          "lastName": "Lee",
          "emailAddress": "jessica.lee@example.com"
        },
        {
          "studentNumber": 29,
          "firstName": "Thomas",
          "lastName": "Walker",
          "emailAddress": "thomas.walker@example.com"
        },
        {
          "studentNumber": 30,
          "firstName": "Jason",
          "lastName": "Hall",
          "emailAddress": "jason.hall@example.com"
        },
        {
          "studentNumber": 31,
          "firstName": "Patricia",
          "lastName": "Allen",
          "emailAddress": "patricia.allen@example.com"
        },
        {
          "studentNumber": 32,
          "firstName": "Susan",
          "lastName": "Young",
          "emailAddress": "susan.young@example.com"
        },
        {
          "studentNumber": 33,
          "firstName": "Timothy",
          "lastName": "Hernandez",
          "emailAddress": "timothy.hernandez@example.com"
        },
        {
          "studentNumber": 34,
          "firstName": "Karen",
          "lastName": "King",
          "emailAddress": "karen.king@example.com"
        },
        {
          "studentNumber": 35,
          "firstName": "Kathleen",
          "lastName": "Wright",
          "emailAddress": "kathleen.wright@example.com"
        },
        {
          "studentNumber": 36,
          "firstName": "Steven",
          "lastName": "Lopez",
          "emailAddress": "steven.lopez@example.com"
        },
        {
          "studentNumber": 37,
          "firstName": "Ruth",
          "lastName": "Hill",
          "emailAddress": "ruth.hill@example.com"
        },
        {
          "studentNumber": 38,
          "firstName": "Brian",
          "lastName": "Scott",
          "emailAddress": "brian.scott@example.com"
        },
        {
          "studentNumber": 39,
          "firstName": "Lisa",
          "lastName": "Green",
          "emailAddress": "lisa.green@example.com"
        },
        {
          "studentNumber": 40,
          "firstName": "Sharon",
          "lastName": "Adams",
          "emailAddress": "sharon.adams@example.com"
        },
        {
          "studentNumber": 41,
          "firstName": "Brandon",
          "lastName": "Baker",
          "emailAddress": "brandon.baker@example.com"
        },
        {
          "studentNumber": 42,
          "firstName": "Kimberly",
          "lastName": "Gonzalez",
          "emailAddress": "kimberly.gonzalez@example.com"
        },
        {
          "studentNumber": 43,
          "firstName": "Aaron",
          "lastName": "Nelson",
          "emailAddress": "aaron.nelson@example.com"
        },
        {
          "studentNumber": 44,
          "firstName": "Carol",
          "lastName": "Carter",
          "emailAddress": "carol.carter@example.com"
        },
        {
          "studentNumber": 45,
          "firstName": "Stephanie",
          "lastName": "Mitchell",
          "emailAddress": "stephanie.mitchell@example.com"
        },
        {
          "studentNumber": 46,
          "firstName": "Emily",
          "lastName": "Perez",
          "emailAddress": "emily.perez@example.com"
        },
        {
          "studentNumber": 47,
          "firstName": "Sandra",
          "lastName": "Roberts",
          "emailAddress": "sandra.roberts@example.com"
        },
        {
          "studentNumber": 48,
          "firstName": "William",
          "lastName": "Turner",
          "emailAddress": "william.turner@example.com"
        },
        {
          "studentNumber": 49,
          "firstName": "Amy",
          "lastName": "Phillips",
          "emailAddress": "amy.phillips@example.com"
        },
        {
          "studentNumber": 50,
          "firstName": "Anna",
          "lastName": "Campbell",
          "emailAddress": "anna.campbell@example.com"
        },
        {
          "studentNumber": 51,
          "firstName": "Frank",
          "lastName": "Parker",
          "emailAddress": "frank.parker@example.com"
        },
        {
          "studentNumber": 52,
          "firstName": "Rebecca",
          "lastName": "Evans",
          "emailAddress": "rebecca.evans@example.com"
        },
        {
          "studentNumber": 53,
          "firstName": "Justin",
          "lastName": "Edwards",
          "emailAddress": "justin.edwards@example.com"
        },
        {
          "studentNumber": 54,
          "firstName": "Deborah",
          "lastName": "Collins",
          "emailAddress": "deborah.collins@example.com"
        },
        {
          "studentNumber": 55,
          "firstName": "Brandon",
          "lastName": "Stewart",
          "emailAddress": "brandon.stewart@example.com"
        },
        {
          "studentNumber": 56,
          "firstName": "Keith",
          "lastName": "Sanchez",
          "emailAddress": "keith.sanchez@example.com"
        },
        {
          "studentNumber": 57,
          "firstName": "Helen",
          "lastName": "Morris",
          "emailAddress": "helen.morris@example.com"
        },
        {
          "studentNumber": 58,
          "firstName": "Cynthia",
          "lastName": "Rogers",
          "emailAddress": "cynthia.rogers@example.com"
        },
        {
          "studentNumber": 59,
          "firstName": "Maria",
          "lastName": "Reed",
          "emailAddress": "maria.reed@example.com"
        },
        {
          "studentNumber": 60,
          "firstName": "Margaret",
          "lastName": "Cook",
          "emailAddress": "margaret.cook@example.com"
        },
        {
          "studentNumber": 61,
          "firstName": "Dennis",
          "lastName": "Morgan",
          "emailAddress": "dennis.morgan@example.com"
        },
        {
          "studentNumber": 62,
          "firstName": "Josephine",
          "lastName": "Bell",
          "emailAddress": "josephine.bell@example.com"
        },
        {
          "studentNumber": 63,
          "firstName": "Arthur",
          "lastName": "Murphy",
          "emailAddress": "arthur.murphy@example.com"
        },
        {
          "studentNumber": 64,
          "firstName": "Joyce",
          "lastName": "Bailey",
          "emailAddress": "joyce.bailey@example.com"
        },
        {
          "studentNumber": 65,
          "firstName": "Shirley",
          "lastName": "Rivera",
          "emailAddress": "shirley.rivera@example.com"
        },
        {
          "studentNumber": 66,
          "firstName": "Raymond",
          "lastName": "Cooper",
          "emailAddress": "raymond.cooper@example.com"
        },
        {
          "studentNumber": 67,
          "firstName": "Julie",
          "lastName": "Richardson",
          "emailAddress": "julie.richardson@example.com"
        },
        {
          "studentNumber": 68,
          "firstName": "Albert",
          "lastName": "Cox",
          "emailAddress": "albert.cox@example.com"
        }
      ]
}