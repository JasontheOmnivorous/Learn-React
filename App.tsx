import ListGroup from "./components/ListGroup"; // import ListGroup Component
import React, { useState } from "react";
import Alert from "./components/Alert";
import Button from "./exercises/Button";

function App() {
  const [alertViible, setAlertVisibility] = useState(false);

  // the children props represents everything between open and close Alert commponents
  return (
    <div>
      {alertViible && (
        <Alert onClose={() => setAlertVisibility(false)} color="success">
          Hello
        </Alert>
      )}
      <Button
        color="primary"
        onClick={() => {
          setAlertVisibility(true);
        }}
      />
    </div>
  );
}

export default App;
