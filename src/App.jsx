import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}
let data = imageData()

function App() {
  // code here
  let galleyStyle = {
    textAlign: "center",
    
  }
  let styleMydiv = {
    display: "grid",
    gridTemplateColumns:"repeat(2,1fr)",
    margin:"20px",
    gap:"100px",
    placeItems: "center"

  }
  return(
    <>
    <h1 style ={galleyStyle}>Kalvium Gallery</h1>

    <div style={styleMydiv}> 
      <img src = {data[0].img} width={"400px"}/>
      <img src = {data[1].img} width={"400px"}/>
      <img src = {data[2].img} width={"400px"}/>
      <img src = {data[3].img} width={"400px"}/>
    </div>

    {/* <div style = {styleMydiv}>
      {data.map((el)=>(
      <div>
        <img src = {el.img} width={"300px"}/>
      </div>
      ))}
    </div> */}



    </>

  )
}

export default App;
