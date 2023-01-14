import React from "react";
import ReactDOM from "react";
function Form(){
 const [count,setCount]=React.useState(0);
function increment(){
 setCount(count + 1);

}
function decrement(){
setCount(count - 1);
}
function reset(){
setCount(0);
}
return(
<div>
<button onClick={increment}> + </button>
<h1>{count}</h1>
<button onClick={decrement}> - </button>
<button onClick={reset}> Reset </button>
</div>
);
}
export{Form};
