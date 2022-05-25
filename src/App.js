import logo from './logo.svg';
// import './App.css';
import Header from './components/Header'
import ListOfProducts from './components/ListOfProducts'
import Adding from './components/AddProduct'
import Details from'./components/Details'
import react from 'react'
import { render } from '@testing-library/react';

class App extends react.Component {
  constructor(){
    super();
    this.state={
      
      ListOfProd :[
        { id: 1, Name: "Product1", Price: 111,Quantity:100,Description:"aaaaaaaa",ProdImg:'c-d-x-PDX_a_82obo-unsplash.jpg' },
        { id: 2, Name: "Product2", Price: 222,Quantity:200,Description:"bbbbbbbb", ProdImg:'daniel-korpai-hbTKIbuMmBI-unsplash.jpg'  },
        { id: 3, Name: "Product3", Price: 333,Quantity:300,Description:"cccccccc",ProdImg:'liviu-c-ti3P_Bm2zio-unsplash.jpg'  },
        { id: 4, Name: "Product4", Price: 444,Quantity:400,Description:"dddddddd",ProdImg:'olena-sergienko-GOVTETevRm8-unsplash.jpg'  },
      ],
      showAdd:false,
      showdetails:false,
      item:{}
    };
  }
  AddProduct=(newProduct)=>{
    let newArray=[...this.state.ListOfProd,newProduct]
    console.log(newArray)
    this.setState({
      ListOfProd:newArray,
      showAdd:false
    }) 

  }
  RemoveProduct=(index)=>{
    this.state.ListOfProd.splice(index,1)
    this.setState({ListOfProd:this.state.ListOfProd})

    }
  ProductDetails=(it)=>{
    this.setState({
      showdetails:true,
      item:it
      

    
    })

    }
    back=()=>{
      this.setState({
        showdetails:false,
        
      })


      }

  render(){
    if(this.state.showAdd==false&&this.state.showdetails==false)
    {return (
    <div className="container">
      <header className="App-header">
        {/* <Header/> */}
        </header>
        <ListOfProducts Data={this.state.ListOfProd} AddRef={this.AddProduct} RemoveRef={this.RemoveProduct} DetailsRef={this.ProductDetails}/>
        
        <input
            type="button"
            value="showAdd"
            className="btn btn-primary offset-4"
            onClick={()=>this.setState({
              showAdd: true,
            })}
          />
          
    
    </div>
  )}
  else if(this.state.showAdd==true&&this.state.showdetails==false){return(
    <Adding AddRef={this.AddProduct} />
  )}
  else if(this.state.showdetails==true)
  {return(
    <Details backref={this.back} data={this.state.item}/>
  )}
  
}
  
}

export default App;
