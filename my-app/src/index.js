import React from "react";
import ReactDOM from "react-dom";

import add from "./App";
import {Sub,div,mult} from "./App";

ReactDOM.render(
 <>
  <ul>
    <li>Sum of two no is {add(40,3)}</li>
    <li>Difference of two no is {Sub(60,60)}</li>
    <li>Division of two no is{div(18,6)}</li>
    <li>Multiplication of two no is{mult(5,3)}</li>
  </ul>
 </>
,document.getElementById("root"));