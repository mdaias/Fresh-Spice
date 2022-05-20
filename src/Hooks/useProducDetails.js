import { useEffect, useState } from "react";

const useProductDetails = productId =>{
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `https://obscure-earth-95050.herokuapp.com/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId]);
    return [product,setProduct]
}

export default useProductDetails;