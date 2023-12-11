import { useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import '../Styles/Data.css'
import { FaChevronDown } from "react-icons/fa";
import Navbar from "./Navbar";
import { CiGrid41 } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";

function Data () {
    const [products, setProducts] = useState([]);    
    const [loading, setLoading] = useState(false);
    const [searchItem, setSearchItem] = useState('')
    const [filteredProducts, setFilteredProducts] = useState(products)
    

    function fetchProducts () {
        setLoading(true);

        fetch('https://api.zoommer.ge/v1/Content/mega-menu')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error(error))
        .finally(()=> setLoading(false))
    }

    useEffect(()=> {
        fetchProducts()
        
    }, [])

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)
    
        const filteredItems = products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    
        setFilteredProducts(filteredItems);

      };

    return (
        <>
        <Navbar />
        <br />

        <div>
            <span className='go-back'><FaChevronLeft /> მობილური ტელეფონები</span>
            <div className='sorting'>
                <button className="button-grey">სორტირება <FaChevronDown /></button>
                <span className='grid'><CiGrid41 /> </span> <span className='list'><CiViewList /></span>
            </div>
        </div>
        {/* <div>
            
            {loading && "Products are loading..."}

            <input type="text" placeholder="Product Name" onChange={handleInputChange}></input>
            <br />
            {filteredProducts.map((item, index) => (
            <p key={index}>{item.name}</p>))}
            <br />
        
        </div> */}
        </>
    )

}

export default Data