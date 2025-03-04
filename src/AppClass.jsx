import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
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

  // code here
  render(){
    this.data = this.imageData()
    console.log(this.data)

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
  <img src = {this.data[0].img} width={"400px"}/>
  <img src = {this.data[1].img} width={"400px"}/>
  <img src = {this.data[2].img} width={"400px"}/>
  <img src = {this.data[3].img} width={"400px"}/>
</div>
    </>
    
  )
    }
  }
