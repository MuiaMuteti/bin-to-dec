import './ModeSelector.css';

//used to change between decimal and binary mode
//it is a controlled component
//handleChange and mode are passed in from the parent using props
function ModeSelector(props)
{
    return (
        <div className="mode">
            <p>Select mode</p>
            <div className="modeControls">
                <input 
                    type="radio" 
                    name="mode" 
                    value="binary" 
                    checked={props.mode === "binary"}
                    onChange={(e)=>props.handleChange(e.target.value)} />
                <label>Binary to decimal</label>
                <input 
                    type="radio" 
                    name="mode" 
                    value="decimal" 
                    checked={props.mode === "decimal"}
                    onChange={(e)=>props.handleChange(e.target.value)} />
                <label>Decimal to binary</label>
            </div>
        </div>
    );
}

export default ModeSelector;