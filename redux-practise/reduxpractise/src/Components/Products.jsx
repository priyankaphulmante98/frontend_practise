import React, { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { getProducts } from "../Redux/Products/action";

function Products() {
  const dispatch = useDispatch();
  const {products} = useSelector(store=>store.ProductReducer)
  const dummy = useSelector(store=>store.dummyreducer)
  

  useEffect(() => {
    dispatch(getProducts());
   
  }, []);
  return <div>
products
{
  products?.map(e=><div>
    <img src={e.image} alt={e.title} style={{width:"150px"}} />
    <h3>{e.title}</h3>
    <p>{e.price}</p>
    <p>{e.description}</p>
  </div>)
}


  </div>;
}

export default Products;
