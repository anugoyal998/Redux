import { useDispatch, useSelector } from "react-redux";
import {setProducts, fetchProducts} from '../redux/actions/productAction'
import ProductComponent from "./ProductComponent";
import axios from 'axios'
import {useEffect} from "react"


const ProductListing = ()=> {
    const products = useSelector(state=> state);
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchProducts());
    },[])
    console.log(products)
    return(
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    )
}
export default ProductListing