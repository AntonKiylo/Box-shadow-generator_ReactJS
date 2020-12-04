import { Route, Switch } from 'react-router-dom'
import './App.css'
import BoxShadowBlock from './components/BoxShadow/BoxShadowBlock/BoxShadowBlock'
import Nav from './components/Nav/Nav'
import Border from './components/Border/Border'

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <BoxShadowBlock />
        </Route>
        <Route path='/border'>
          <Border />
        </Route>
      </Switch>
    </>
  )
}

export default App