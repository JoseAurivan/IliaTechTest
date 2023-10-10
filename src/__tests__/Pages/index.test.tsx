import { render, screen } from '@testing-library/react'
import Home from '../../app/page'
import '@testing-library/jest-dom'
 
describe('Home', () => {
  it('check if it is rendering correctly', () => {
    render(<Home />);
 
    const heading = screen.getByRole('heading');
 
    expect(heading).toHaveTextContent("Hello world !")
  });
})