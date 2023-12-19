import { useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import '../Styles/Data.css'
import { FaChevronDown } from "react-icons/fa";
import Navbar from "./Navbar";
import { CiGrid41 } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import Item from "./Item";
import FilterBar from './Filters'
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'



function Data () {
    const [products, setProducts] = useState([]);
    const [images, setImages] = useState([]);
    const [brands, setBrands] = useState([]);
    const [prices, setPrices] = useState([]);
    const [names, setNames] = useState([]);
    const [years, setYears] = useState([]);
    
    
    const [loading, setLoading] = useState(false);
    const [searchItem, setSearchItem] = useState('')
    const [filteredProducts, setFilteredProducts] = useState(products)

    function fetchData () {
        setLoading(true);

        fetch('https://api.zoommer.ge/v1/Products/v3?CategoryId=855')
        .then(response => response.json())
        .then(data => {
            setProducts(data.products);
            setImages(products.map((img)=>img.imageUrl));
            setBrands(products.map((img)=>img.brandName));
            setNames(products.map((img)=>img.name));
            setPrices(products.map((img)=>img.price));
            setYears(products.map((img)=>img.releaseDate));

        })
        .catch(error => console.error(error))
        .finally(()=> setLoading(false))
    }

    useEffect(()=> {
        fetchData()
        
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
            {loading === true ? <div>loading...</div>:
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
                <br />
                <br />
                <br />
                <br />
                
                <div className="combined-div">
                    <div className="sidebar">
                        <FilterBar />           
                    </div>
                    
                    <div className="items">
                        {products?.map((phone, index)=>{
                            return (
                            <Item 
                            photo = {images[index]}
                            price = {prices[index]}
                            name = {names[index]}                    
                        />)
                        })
                        }
                    </div>
                </div>
            </>
            }
        
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