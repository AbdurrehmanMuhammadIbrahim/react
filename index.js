import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import img1 from "../src/images/img"
import App from './App';
import reportWebVitals from './reportWebVitals';
import react from 'react';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

function Hi(props) {


  return <div>
    {/* <img src={props.pic}/> */}
    <p className = "name" > { props.text } </p>
    <p className = "data" > { props.date } </p>
    <p className = "descrip" > { props.descrip } </p>
    {/* <p>
      <button>abc</button>
    </p>
    */}
  </div>;





}<br></br>
ReactDOM.render(<div className="post"><Hi 
  //  pic = { img1 }
   text = "My Third Car"
   date ="22/5/21"
   descrip="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying ...
   "


/>

</div>, document.querySelector('#root'));


function Room(){
  const [isbright,setIsBright]=React.useState(true)
  var a ="something"
  const handlechange = ()=>{
    setIsBright(isbright)
    a = "something else"

  }
  return(
    <div>
      {a}the room is {isbright?"Bright":"Dark"}
      <button onClick= {handlechange}>change</button>
    </div>
  )
}ReactDOM.render(<Room/> , document.querySelector('#root'));