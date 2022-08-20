import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeecomponent from './components/CreateEmployeecomponent';


function App() {
  return (
    <div>
      
          <HeaderComponent></HeaderComponent>
            <div className='container'>
              <Switch>
                <Route path= '/' exact component = {ListEmployeeComponent}></Route>
                <Route path= '/employees' component = {ListEmployeeComponent}></Route>
                <Route path= '/add-employee' component = {CreateEmployeecomponent}></Route>
              </Switch>
            </div>
          <FooterComponent></FooterComponent>
      
    </div>
  );
}

export default App;
