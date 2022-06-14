import '../style/DropDownMenu.css';
import cartContext from './cartContext'
import { useContext } from "react"

function DropDownMenu(props) {
    
  return (
    <div className="dropMenuContainer"><div className='sizeAndFlavorText'>Choose: </div> 
        <label htmlFor="selectMenu"></label>
        <select name="selectMenu" className="dropDownMenu">
       
            
        {props.type.map((type) => {
                        return (<option value={type} key={type} className='optionText'>
                            {type}  
                            </option>)                       
                        })}
        </select>
    </div>
  );
}

export default DropDownMenu;