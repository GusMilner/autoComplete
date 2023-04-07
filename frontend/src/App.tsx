import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import StudentSearch from './components/StudentSearch';



export const App = () => {
 

  return (
    <div style={{ textAlign: 'center' }}>
     <CardHeader
        title="Search for Student by name"
      />
      <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
      }}>
          <StudentSearch ></StudentSearch>
      </div>
      
    </div>
  );
}

export default App;
