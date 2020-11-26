import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import 'antd/dist/antd.css';
import FormListView from './pages/FormListView'
import FormCreateView from './pages/FormCreateView'
import FormDetailView from './pages/FormDetailView'
import './App.css';

function App() {
  return (
    <Router basename="/survey_form/forms">
      <Switch>
        <Route path="/create">
          <FormCreateView />
        </Route>
        <Route exact path="/">
          <FormListView />
        </Route>
        <Route path='/:id'>
          <FormDetailView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
