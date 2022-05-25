let ListOfProducts=(props)=>{
    let prods=props.Data.map((item,i)=>{
        return(
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.Name}</td>
                <td>{item.Price}</td>
                <td>{item.Quantity}</td>
                <td><img src={`images/${item.ProdImg}`} style={{width: 75,height: 50}}></img></td>
                <td>{item.Description}</td>
                <td>
                    <input onClick={()=>props.RemoveRef(i)} type={"button"} value="Delete" className="btn btn-danger" />
                    <input onClick={()=>props.DetailsRef(item)} type={"button"} value="Details" className="btn btn-success" />
                </td>

            </tr>
        )
    }
    )
    return(
        <div className="container">
        <table className="table bordered">
            <thead>            
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Image</th>
            <th>Description</th>
            <th>Operations</th>
            </thead>
            <tbody>
                {prods}

            </tbody>
        </table>
        </div>
    )


}
export default ListOfProducts;