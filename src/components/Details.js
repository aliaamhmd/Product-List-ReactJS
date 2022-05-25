let Details=(props)=>{
    return(
        <>
        <h3>ID: {props.data.id}</h3>
        <h3>Name: {props.data.Name}</h3>
        <h3>Price: {props.data.Price}</h3>
        <h3>Quantity: {props.data.Quantity}</h3>
        <h3>Description: {props.data.Description}</h3>
        <div><img src={`images/${props.data.ProdImg}`} style={{width: 75,height: 50}}></img></div>
        <button className="btn btn-primary" onClick={props.backref}>back to list</button>
        </>
    )


 
}
export default Details;