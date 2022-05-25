import { Link } from "react-router-dom";
import{setState, useState} from 'react'
let ListOfProducts=(props)=>{
    let[selectedval,setSelctedVal]=useState("All Products")

    let prods=props.Data.map((item,i)=>{
        if(item.Category==selectedval|| selectedval=="All Products")
        return(

            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.Name}</td>
                <td>{item.Price}</td>
                <td>{item.Quantity}</td>
                <td><img src={`images/${item.ProdImg}`} style={{width:100,height: 75}}></img></td>
                <td>{item.Description}</td>
                <td>{item.Category}</td>
                <td>
                    <input onClick={()=>props.RemoveRef(i)} type={"button"} value="Delete" className="btn btn-danger" />
                    <Link onClick={()=>props.DetailsRef(item)} className="btn btn-success" to={`/Details/${item.id}`} >Details</Link>
                    {/* <input onClick={()=>props.DetailsRef(item)} type={"button"} value="Details" className="btn btn-success" /> */}
                </td>

            </tr>)

    }
    )
    return(
        
        <>
        
        <label>Choose Category</label>  <select onChange={(e)=>{setSelctedVal(e.target.value)}}>
            <option value={"All Products"}>All Products</option>
            <option value={"Watches"}>Watches</option>
            <option value={"Perfumes"}>Perfumes</option>
            <option value={"Headphones"}>Headphones</option>

        </select><br/>
        <div className="container">
        <table className="table bordered">
            <thead>  
                <tr>         
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Image</th>
            <th>Description</th>
            <th>Category</th>
            <th>Operations</th>
            </tr> 
            </thead>
            <tbody>

                {prods}

            </tbody>
        </table>
        </div>
        </>
    )


}
export default ListOfProducts;