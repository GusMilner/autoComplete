import express from 'express';
import serverless from 'serverless-http';
import { SearchStudentData, Student } from '../../services/searchStudentData';


const app = express();



app.use(express.json({ limit: '10mb' }));
app.use(`/students/search`, async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
      let getStudents: Student[] = [];
      const searchStudentData = new SearchStudentData();
      const filterValue = req.query.filter?.toString();
    
      if(filterValue)
      {
        getStudents = searchStudentData.searchStudentsByName(filterValue);
      }
    
      return res.status(200).json({
        students: getStudents
      });
    } catch (err) {
        return next(err);
    }
});


module.exports.handler = serverless(app);
