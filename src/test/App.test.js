import { render, screen, cleanup} from '@testing-library/react';
import App from '../App';
import renderer from 'react-test-renderer';

afterEach(() =>{
    cleanup();
})

it("renders without crashing",()=>{
   render(<App/>);
   const appElement = screen.getByTestId("app-1");
   expect(appElement).toBeInTheDocument();
   expect(appElement).toHaveTextContent('Todo List App');
   expect(appElement).toHaveTextContent('Done');
   
})

it("matches snapshot",()=>{
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
})

