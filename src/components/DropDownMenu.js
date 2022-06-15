import '../style/DropDownMenu.css';
import cartContext from './cartContext'
import { useContext } from "react"

function DropDownMenu(props) {
    
  // a function that sends the current index of the slected type option
  const returnOptionIndex = (i) =>{
    props.updateTypeIndex(i)
  }

  return (
    <div className="dropMenuContainer"><div className='sizeAndFlavorText'>Choose: </div> 
        <label htmlFor="selectMenu"></label>
        <select name="selectMenu" className="dropDownMenu">
       
            
        {props.type.map((type, index) => {
                        return (<option id={type} value={type} key={type} className='optionText' onClick={() =>{returnOptionIndex(index)}}>
                            {type}  
                            </option>)                       
                        })}
        </select>
    </div>
  );
}

export default DropDownMenu;