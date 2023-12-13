import { useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import '../Styles/Data.css'
import { FaChevronDown } from "react-icons/fa";
import Navbar from "./Navbar";
import { CiGrid41 } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import Item from "./Item";


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


    // const fetchData = async () => {
    //     try {
    //       const response = await fetch('https://api.zoommer.ge/v1/Products/v3?CategoryId=855');
    //       const products = await response.json();
    //       setProducts(products);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };

    function fetchData () {
        setLoading(true);

        fetch('https://api.zoommer.ge/v1/Products/v3?CategoryId=855')
        .then(response => response.json())
        .then(data => {
            setProducts(data.products);
            setImages(data.products.map((img)=>img.imageUrl));
            setBrands(data.products.map((img)=>img.brandName));
            setNames(data.products.map((img)=>img.name));
            setPrices(data.products.map((img)=>img.price));
            setYears(data.products.map((img)=>img.releaseDate));

        })
        .catch(error => console.error(error))
        .finally(()=> setLoading(false))
    }

    useEffect(()=> {
        fetchData()
        
    }, [])

    // console.log(brands)
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

                <Item 
                    photo = {images[49]}
                    price = {prices[49]}
                    name = {names[49]}
                    
                />
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