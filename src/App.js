import CharacterList from "./components/CharacterList" 
import './styles/Global.css'
import Normalize from 'react-normalize'
import {Route, BrowserRouter, Switch} from 'react-router-dom'



function App() {
  return (
    <>
    
    <Normalize/>
      <BrowserRouter>

        <Switch>
          <div className='background'>
          <Route exact path='/' component={CharacterList}/>
          </div>
        </Switch>

      </BrowserRouter>
    </>
);
}

export default App;
