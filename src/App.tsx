import { useEffect } from "react";
import { io } from "socket.io-client";
import "./App.css";

function App() {
  useEffect(() => {
    const socket = io("wss://ws.binaryws.com/websockets/v3?app_id=1089");

    socket.on("connect", () => {
      console.log("connection happened");
    });
  }, []);

  return (
    <div className="App">
      <p>Web Socket App</p>
    </div>
  );
}

export default App;
