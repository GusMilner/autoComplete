import './App.css';
import CardHeader from '@mui/material/CardHeader';
import StudentSearch from './components/StudentSearch.tsx';



function App() {
 

  return (
    <div className="App">
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
