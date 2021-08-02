import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/cards";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://reqres.in/api/users?page=2");
      setUsers(res.data.data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      {users.map((user, i) => (
        <Card key ={i}>
          <Card.Image
            src={user.avatar}
            alt="avatar"
          />
          <Card.Body>
            <Card.Title>{user.first_name} {user.last_name} </Card.Title>
            <Card.Text>{user.email}</Card.Text>
            <Card.Button>Details</Card.Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default App;
