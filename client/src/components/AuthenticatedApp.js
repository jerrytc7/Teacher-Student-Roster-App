import Teachers from "./Teachers"
import Students from "./Students"
import { Switch, Route, NavLink, useHistory } from 'react-router-dom'

function AuthenticatedApp({ currentUser, setCurrentUser }) {
  const history = useHistory()
  
  const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          history.push('/')
        }
      })
  }
  return (
    <div className="App">
      <nav>
        <span>
          <NavLink to="/teachers">Teachers</NavLink>{" - "}
          <NavLink to="/students">Students</NavLink>
        </span>
        <span>Logged in as {currentUser.username} <button onClick={handleLogout}>Logout</button></span>
      </nav>
      <Switch>
        <Route path="/teachers">
          <Teachers />
        </Route>
        <Route path="/students">
          <Students />
        </Route>
      </Switch>
    </div>
  );
}

export default AuthenticatedApp;