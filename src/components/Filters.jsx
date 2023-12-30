import '../Styles/Filters.css'
import { HiOutlineTrash } from "react-icons/hi2";



function FilterBar(props) {
    return (
    <>
        <div className='sidebar-filters'>        
            <span className="bold-text">ფილტრი</span> <span className="grey-text"><HiOutlineTrash /> გასუფთავება</span>
        </div>
        <div className='sidebar-filters'> 
            <input 
                className='price'
                type="number" 
                placeholder='MIN:         0 ₾'
                onChange={props.handleMinPrice}>                    
            </input>  
            <input 
                className='price'
                type="number" 
                placeholder='MAX:    5799 ₾'
                onChange={props.handleMaxPrice}>                    
            </input> 
            <div className='checkbox'>
            <p><b>გამოშვების თარიღი</b></p>
                <input type="checkbox" id="2018" name="2018" value="2018" onClick={props.handleCheckbox}></input>
                <label for="2018"> 2018 </label><br></br>
                <input type="checkbox" id="2019" name="2019" value="2019" onClick={props.handleCheckbox}></input>
                <label for="2019"> 2019 </label><br></br>
                <input type="checkbox" id="2020" name="2020" value="2020" onClick={props.handleCheckbox}></input>
                <label for="2020"> 2020 </label><br></br>
                <input type="checkbox" id="2021" name="2021" value="2021" onClick={props.handleCheckbox}></input>
                <label for="2021"> 2021 </label><br></br>
            </div>
        </div>

    </>
    )
}
export default FilterBar;