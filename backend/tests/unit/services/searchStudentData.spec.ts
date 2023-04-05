import { SearchStudentData} from '../../../src/services/searchStudentData';


describe('searchStudentData.ts Tests', () => {

    describe('constructor() test:', () => {
        it(`returns list of students`, () => {
        const searchStudentData = new SearchStudentData();
        expect(searchStudentData.students.length).toBe(10);
        });
    });

    describe('searchStudentsByName() test:', () => {
        it(`returns filtered list of students`, () => {
            const searchStudentData = new SearchStudentData();
            expect(searchStudentData.searchStudentsByName(`J`).length).toBe(5);
            expect(searchStudentData.searchStudentsByName(`Jo`).length).toBe(4);
            expect(searchStudentData.searchStudentsByName(`Joh`).length).toBe(2);
        });
    });

});