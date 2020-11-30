import React from "react";

const text = "Play";

const Button = (action) => {
  return <Button onClick={action} value={text} />;
};

export default TimerButton;
