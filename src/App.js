import './App.css';
import ClassCompo from './Components/ClassCompo';
import Compo from './Components/FunctionCompo';

function App() {
  return (
    <>
    <h1>EMPLOYEE FEEDBACK FORM</h1><br/>
    <div id="main">
    {/* <Compo/> */}
    <ClassCompo/>
    </div>
    </>
  );
}

export default App;
