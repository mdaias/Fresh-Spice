import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
    const [user] = useAuthState(auth)
    const email = user.email
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        console.log(email)
        const url = `http://localhost:5000/myproduct?email=${email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
        })
    },[email])
    
    return (
        <div className='p-24'>
            <h1>my items whoice added</h1>
            <h3>Products:{products.length}</h3>
        </div>
    );
};

export default MyItems;