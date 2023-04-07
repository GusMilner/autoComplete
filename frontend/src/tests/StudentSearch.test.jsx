import { render, fireEvent, screen } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import StudentSearch from '../components/StudentSearch.tsx';

jest.mock('axios');

describe('StudentSearch', () => {
  it('should render an autocomplete component', () => {
    jest.spyOn(axios, 'get');
    render(<StudentSearch />);
    expect(screen.getByLabelText('Search for Student')).toBeTruthy();
  });

  it('should call fetchData when input changes', () => {
    jest.spyOn(axios, 'get');
    render(<StudentSearch />);
    fireEvent.change(screen.getByLabelText('Search for Student'), { target: { value: 'John' }});
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/dev/students/search?name=John');
  });
});
