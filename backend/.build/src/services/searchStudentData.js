"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchStudentData = void 0;
var SearchStudentData = exports.SearchStudentData = (function () {
    function SearchStudentData() {
        this.students = SearchStudentData.students;
    }
    SearchStudentData.prototype.searchStudentsByName = function (query) {
        var filterValue = query.toLowerCase();
        var filteredResults = this.students.filter(function (student) {
            if (student.lastName.toLowerCase().startsWith(filterValue, 0) || student.firstName.toLowerCase().startsWith(filterValue, 0)) {
                return student;
            }
            return;
        });
        return filteredResults;
    };
    SearchStudentData.students = [
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
    ];
    return SearchStudentData;
}());
//# sourceMappingURL=searchStudentData.js.map