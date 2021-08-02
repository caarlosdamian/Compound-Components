import './App.css';
import Card from './components/cards';
function App() {
  return (
    <div className="App">
        <Card>
          <Card.Image 
          src={'https://reqres.in/img/faces/7-image.jpg'}
          alt='avatar'
          />
          <Card.Body>
            <Card.Title> Carlos Damian</Card.Title>
            <Card.Text>dapecarlos@gmail.com</Card.Text>
            <Card.Button>Click Me</Card.Button>
          </Card.Body>
        </Card>
    </div>
  );
}

export default App;
