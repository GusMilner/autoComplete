import express from 'express';
import serverless from 'serverless-http';
import { SearchStudentData, Student } from '../../services/searchStudentData';


const app = express();



app.use(express.json({ limit: '10mb' }));
app.use(`/students/search`, async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
      let getStudents: Student[] = [];
      const searchStudentData = new SearchStudentData();
      const searchValue = req.query.name?.toString();
    
      if(searchValue)
      {
        getStudents = searchStudentData.searchStudentsByName(searchValue);
      }
      else
      {
        getStudents = searchStudentData.students.slice(0,49).sort((a, b) => (a.lastName + a.firstName > b.lastName + b.firstName) ? 1 : -1);
      }
    
      return res.status(200).json({
        students: getStudents
      });
    } catch (err) {
        return next(err);
    }
});


module.exports.handler = serverless(app);
