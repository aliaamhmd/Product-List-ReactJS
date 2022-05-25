import react from 'react'
class Adding extends react.Component{
    // console.log(props)
    state={
        _id:'',
        _name:'',
        _price:'',
        _Quantity:'',
        _description:''

    }
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
          <input type="file" name="myImage" onChange={this.onImageChange} />
        </>
    )
    }
}
export default Adding;