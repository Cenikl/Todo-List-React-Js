import { render, screen, cleanup} from '@testing-library/react';
import App from '../App';

afterEach(() =>{
    cleanup();
})

it("renders without crashing",()=>{
   render(<App/>);
   const appElement = screen.getByTestId("app-1");
   expect(appElement).toBeInTheDocument();
   expect(appElement).toHaveTextContent('Todo List App');
})