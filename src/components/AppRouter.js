import { BrowserRouter as Router,Route } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import ListOfProducts from './Routes/ListRouter'
import ProdDetails from './Routes/DetailsRouter'
import AddProd from "./Routes/AddRouter";
import Header from "./Header";
import reactRouterDom from "react-router-dom";
class AppRouter extends React.Component {
  constructor(){
    super();
    this.state={
      
        ListOfProd :[
          { id: 1, Name: "Product1", Price: 111,Quantity:100,Description:"aaaaaaaa",Category:"Headphones",ProdImg:'c-d-x-PDX_a_82obo-unsplash.jpg' },
          { id: 2, Name: "Product2", Price: 222,Quantity:200,Description:"bbbbbbbb",Category:"Watches", ProdImg:'louis-mornaud-ADvixEYm5qE-unsplash.jpg'  },
          { id: 3, Name: "Product3", Price: 333,Quantity:300,Description:"cccccccc",Category:"Watches",ProdImg:'yash-parashar-LWPPpkn6NEQ-unsplash.jpg'  },
          { id: 4, Name: "Product4", Price: 444,Quantity:400,Description:"ffffffff",Category:"Headphones",ProdImg:'lee-campbell-GI6L2pkiZgQ-unsplash.jpg'  },
          { id: 5, Name: "Product5", Price: 555,Quantity:500,Description:"gggggggg",Category:"Perfumes",ProdImg:'jeroen-den-otter-2b0JeJTEclQ-unsplash.jpg'  },
        ],
        item:{}
}
  }

AddProduct=(newProduct)=>{
    let newArray=[...this.state.ListOfProd,newProduct]
    console.log(newArray)
    this.setState({
      ListOfProd:newArray,
      
    })   

}
RemoveProduct=(index)=>{
  this.state.ListOfProd.splice(index,1)
  this.setState({ListOfProd:this.state.ListOfProd})

  }
ProductDetails=(it)=>{
  this.setState({
    item:it
    

  
  })}


  render(){
      return(
          <>

           <Router>
           <Header />
           <Route component={(props) => <ListOfProducts RemoveRef={this.RemoveProduct} DetailsRef={this.ProductDetails}  Data={this.state.ListOfProd} {...props} />} path="/" exact /> 
           <Route component={(props)=>< AddProd AddRef={this.AddProduct} {...props}/>} path="/Add"/>
           <Route component={(props)=><ProdDetails data={this.state.item} {...props}/>} path="/Details/:id"/>
          
          {/* <Route component={(props) => <ListOfProducts RemoveRef={this.r}  ProductArrayRef={this.state.ListOfProd} {...props} />} path="/" exact /> 
          
          <Route component={(props)=><Adding  AddRef={this.AddProduct} {...props}/>} path="/Add" />
          <Route
            component={() => {
              return (
                <div>
                  <span>Test Component</span>
                </div>
              );
            }}
            path="/test"
          /> 
          <Route component={(props)=><Details {...props}/>} path="/Details/:id" /> */}
          </Router>
          </>
      )
  }
}
export default AppRouter;