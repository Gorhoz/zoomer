import { useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import '../Styles/Data.css'
import { FaChevronDown } from "react-icons/fa";
import Navbar from "./Navbar";
import { CiGrid41 } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import Item from "./Item";
import FilterBar from './Filters'
import moment from "moment";


function Data () {
    const [products, setProducts] = useState([]);
    const [images, setImages] = useState([]);
    const [brands, setBrands] = useState([]);
    const [prices, setPrices] = useState([]);
    const [names, setNames] = useState([]);
    const [years, setYears] = useState([]);    
    const [loading, setLoading] = useState(false);
    const [searchItem, setSearchItem] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [checkbox, setCheckbox] = useState(0)


    function fetchData () {
        setLoading(true);

        fetch('https://api.zoommer.ge/v1/Products/v3?CategoryId=855')
        .then(response => response.json())
        .then(data => {
            setProducts(data.products);
        })
        .catch(error => console.error(error))
        .finally(()=> setLoading(false))
    }

    useEffect(()=> {
        fetchData()        
    }, [])

    useEffect(()=> {
        handleMinPrice       
    }, [minPrice])



    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)    
        const filteredItems = products.filter((p) =>
            p.name.toLowerCase().includes(searchItem.toLowerCase())
        );        
        setFilteredProducts(filteredItems);
        setImages(filteredItems.map((p)=>p.imageUrl));
        setBrands(filteredItems.map((p)=>p.brandName));
        setNames(filteredItems.map((p)=>p.name));
        setPrices(filteredItems.map((p)=>p.price));
        setYears(filteredItems.map((p)=>p.releaseDate));
    };

    const handleMinPrice = (e) => {
        setMinPrice(e.target.value);
        const filteredByMinPrice = products.filter((p)=>
           Number(minPrice)<=Number(p.price)
        )
        setFilteredProducts(filteredByMinPrice);      
    }
      
    const handleMaxPrice = (e) => {
        setMaxPrice(e.target.value);
        const filteredByMaxPrice = products.filter((p)=>
           Number(maxPrice)>=Number(p.price)
        )
        setFilteredProducts(filteredByMaxPrice);         
    }

    const handleCheckbox = (e) => {
        setCheckbox(e.target.value);
        console.log(checkbox)
        const filterYear = products.filter((p)=>
        Number(checkbox)===Number(moment(p.releaseDate).utc().format('YYYY'))
     )
     setFilteredProducts(filterYear); 
    }

    return (        
        <>
            {loading === true ? <div>loading...</div>:
            <>
                <Navbar 
                    handleInputChange={handleInputChange}
                />
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
                        <FilterBar 
                            handleMinPrice={handleMinPrice}
                            handleMaxPrice={handleMaxPrice}
                            handleCheckbox={handleCheckbox}
                        />           
                    </div>
                    
                    <div className="items">
                        {filteredProducts?.map((phone, index)=>{
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
        </>
    )

}

export default Data