import '../Styles/Item.css'
import { TbArrowsExchange } from "react-icons/tb";
import { RiShoppingCartLine } from "react-icons/ri";



function Item(props) {
    return (
        <div className='item-block'>
            <img className='image-small' src={props.photo}></img>
            <button className='btn-orange'>
                    <span className='text-small'>სულსწრაფი ფასი</span>                    
            </button>  
            <span className='price-txt'>{props.price} ₾</span>
            <p className='text-small'>{props.name}</p>
            <div className='basket-div'>
                <button className='btn-gray'> 
                    <TbArrowsExchange />                                         
                </button>
                <button className='btn-basket'> 
                    <RiShoppingCartLine />
                    <span className='text-small'> დამატება </span>                                       
                </button>    

            </div>
        </div>
    )
}

export default Item