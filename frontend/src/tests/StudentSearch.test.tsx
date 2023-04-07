
import React from 'react';
import { render } from '@testing-library/react';
import StudentSearch from '../components/StudentSearch';

describe('StudentSearch', () => {


  
  it('should render without crashing', () => {
    render(<StudentSearch />);

  });


});