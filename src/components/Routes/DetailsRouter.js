import { Link } from "react-router-dom";
let ProdDetails=(props)=>{console.log(props.data)
    return(
        <>
        

        <h3>ID: {props.data.id}</h3>
        <h3>Name: {props.data.Name}</h3>
        <h3>Price: {props.data.Price}</h3>
        <h3>Quantity: {props.data.Quantity}</h3>
        <h3>Description: {props.data.Description}</h3>
        <h3>Category: {props.data.Category}</h3>
        <div><img src={`../images/${props.data.ProdImg}`} style={{width: 200,height: 200}}></img></div>
        
        <Link className="btn btn-primary" to="/">back to list</Link>
        </>
    )


 
}
export default ProdDetails;