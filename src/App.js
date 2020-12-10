import { Route, Switch } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav/Nav'
import BoxShadowBlock from './components/BoxShadow/BoxShadowBlock/BoxShadowBlock'
import BorderBlock from './components/Border/BorderBlock/BorderBlock'

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <BoxShadowBlock />
        </Route>
        <Route path='/border'>
          <BorderBlock />
        </Route>
      </Switch>
    </>
  )
}

export default App