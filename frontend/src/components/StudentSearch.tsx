
import React, { SyntheticEvent, useEffect, useState } from 'react';
import axios from "axios";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Student } from '../interfaces/Student';

export default function StudentSearch() {

  const [data, setData] = useState<Student[]>([])
  const [inputValue, setInputValue] = useState('');
  
  // Get data from the API endpoint
  const fetchData = async (query?: string) => {
    const baseUrl = `http://localhost:3001/dev/students/search`;
    const apiUrl = query ? baseUrl + `?name=${query}` : baseUrl;

    const result = await axios(apiUrl);
    setData(result.data.students);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = async (event: SyntheticEvent<Element, Event>, value: string) => {
      fetchData(value);
      setInputValue(value);    
  };

	return (
		<Autocomplete
            disablePortal
            id="student-search-autocomplete"
            options={data}
            inputValue={inputValue}
            sx={{ width: 600 }}
            getOptionLabel={(student) => student.firstName + ' ' + student.lastName + ' - ' + student.emailAddress + ':' + student.studentNumber}
            onInputChange={handleChange}
            renderInput={(params) => <TextField {...params} label="Search for Student" />}
            clearOnEscape
        />
	)
}

