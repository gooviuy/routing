import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  NavLink,
  useParams,
} from "react-router-dom";

const Home = (props) => {
  console.log(props);
  return <div>Home</div>;
};
const About = () => <div>About</div>;
const User = () => {
  const params = useParams();
  return <div>Usuario con id: {params.userId}</div>;
};
const NotFound = () => <div>Not Found</div>;

function App() {
  return (
    <Router>
      <div>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <br />
        <NavLink exact activeClassName="active" to="/about">
          About
        </NavLink>
      </div>
      <Switch>
        <Route exact path="/about" component={About} />
        <Redirect exact path="/acerca-de" to="/about" />
        <Route exact path="/" component={Home} />
        <Route exact path="/user/:userId" component={User} />

        <Route exact path="/" component={Home} />

        <Route component={NotFound} />
        {/* <Redirect to="/" /> */}
      </Switch>
    </Router>
  );
}

export default App;
