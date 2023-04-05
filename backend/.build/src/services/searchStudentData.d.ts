export interface Student {
    studentNumber: number;
    firstName: string;
    lastName: string;
    emailAddress: string;
}
export declare class SearchStudentData {
    static students: {
        studentNumber: number;
        firstName: string;
        lastName: string;
        emailAddress: string;
    }[];
    students: Student[];
    constructor();
    searchStudentsByName(query: string): Student[];
}
