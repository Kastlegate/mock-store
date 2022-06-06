import '../style/DropDownMenu.css';

function DropDownMenu(props) {
    
  return (
    <div className="dropMenuContainer"><div className='sizeAndFlavorText'>Choose: </div> 
        <label htmlFor="selectMenu"></label>
        <select name="selectMenu" className="dropDownMenu">
            
        {props.type.map((type) => {
                        return (<option value={type}>
                            {type}
                            </option>)
                       
                        })}
        </select>
    </div>
  );
}

export default DropDownMenu;