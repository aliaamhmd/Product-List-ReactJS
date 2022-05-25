import react from 'react'
import { Link } from "react-router-dom";
class AddProd extends react.Component{
    // console.log(props)
    state={
        _id:'',
        _name:'',
        _price:'',
        _Quantity:'',
        _description:'',
        _category:'',
        _imgsrc:''

    }
    onImageChange = event => {
      if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        this.setState({
          _imgsrc: img.name
        });
        console.log(event.target.files[0]);
      }
    };
    handlerInput = (eventObject) => {

        this.setState({
          [eventObject.target.name]:eventObject.target.value
        })
      };
    render(){
    return (
        <>
        

         <span>ID</span>
         
        <input type={"text"}
         className="form-control"
         value={this.state._id}
         name="_id"
         onChange={this.handlerInput}
         />
        <span>Name</span>
        <input type={"text"}
         className="form-control"
         value={this.state._Name}
         name="_name"
         onChange={this.handlerInput}
         />
        <span>Price</span>
        <input type={"text"}
         className="form-control"
         value={this.state._price}
         name="_price"
         onChange={this.handlerInput}
         />
        <span>Quantity</span>
        <input type={"text"}
         className="form-control"
         value={this.state._Quantity}
         name="_Quantity"
         onChange={this.handlerInput}
         />

        <span>Description</span>
        <input type={"text"}
         className="form-control"
         value={this.state._description}
         name="_description"
         onChange={this.handlerInput}
         />
        <span>Category</span>
        <input type={"text"}
         className="form-control"
         value={this.state._category}
         name="_category"
         onChange={this.handlerInput}
         />
          <input type="file" name="myImage" onChange={this.onImageChange} />
        <input onClick={()=>{this.props.AddRef({id:this.state._id,Name:this.state._name,Price:this.state._price,Quantity:this.state._Quantity,Description:this.state._description,Category:this.state._category,ProdImg:this.state._imgsrc});
        this.props.history.push("/")}} 
         type={"button"} className="btn btn-primary" value={"ADD"} /> 
        </>
    )
    }
}
export default AddProd;