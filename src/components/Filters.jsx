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
                onChange={(e)=> console.log(e.target.value)}>                    
            </input>  
            <input 
                className='price'
                type="number" 
                placeholder='MAX:    5799 ₾'
                onChange={(e)=> console.log(e.target.value)}>                    
            </input> 
        </div>

    </>
    )
}
export default FilterBar;







// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'


// function Filters() {
//     <Sidebar>
//         <Menu>
//             <SubMenu label="Charts">
//             <MenuItem> Pie charts </MenuItem>
//             <MenuItem> Line charts </MenuItem>
//             </SubMenu>
//             <MenuItem> Documentation </MenuItem>
//             <MenuItem> Calendar </MenuItem>
//         </Menu>
//     </Sidebar>;
// }