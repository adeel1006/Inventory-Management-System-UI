import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from "./Pages/Login/login";
import Dashboard from './Pages/Super_Admin/Dashboard/dashboard';
import Header from './Components/Header/header';
import Organizations from './Pages/Super_Admin/Organizations/organizations';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header/> */}
        <Routes>
          <Route path='/' element = {<Login/>}/>
          <Route path='/dashboard' element = {<Dashboard/>}/>
          <Route path='/organizations' element = {<Organizations/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
