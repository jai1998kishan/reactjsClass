import { useState } from "react";
import AppName from "./components/AppName";
import AppMessage from "./components/AppMessage";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <center>
      <AppName></AppName>
      <AppMessage></AppMessage>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
