import "./App.css";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";

const Home = (props) => {
  console.log(props);
  return <div>Home</div>;
};

const About = () => <div>About</div>;

const NotFound = () => <div>Not Found</div>;

const User = ({ match }) => {
  // const params = useParams();

  return <div> Usuario con id: {match.params.userId}</div>;
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
      </div>
      <switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
        <Route exact path="/user/:userId" component={User} />
      </switch>
    </BrowserRouter>
  );
}

export default App;
