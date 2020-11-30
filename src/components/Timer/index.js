import React from "react";
import Display from "seven-segment-display"

const Timer = function (props) {
  return  <div style={{ width: "200px" }}>
            <Display value={props.time} digitCount={4} />
          </div>
};

export default Timer;
