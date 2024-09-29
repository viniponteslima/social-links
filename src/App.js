import './App.css';
import UserCard from './components/UserCard';
import SocialLinks from './components/SocialLinks';
import { BrowserRouter as Router} from "react-router-dom";
import Container from './components/Container';

function App() {
  return (
    <Router>
      <Container>
        <UserCard />
        <SocialLinks />
      </Container>
    </Router>
  );
}

export default App;
