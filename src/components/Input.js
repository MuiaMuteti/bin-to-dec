import './Input.css';

//allows user to enter digits for conversion
//controlled component --> isBinary, valueDigits, handleInputChange

function Input(props) {
    //some conditional rendering
    const mode = props.isBinary ? "binary" : "decimal";
    const pattern = props.isBinary ? "[01]*" : "[0-9]*";
    const placeholder = props.isBinary ? "e.g. 101010" : "e.g. 12345";

    return (
        <div className="inputContainer">
            <p>Enter the {mode} digits</p>
            <input 
                type="text" 
                name="digits"
                pattern={pattern}
                placeholder={placeholder} 
                value={props.valueDigits}
                onChange={(e)=>props.handleInputChange(e.target.value)} ></input>
        </div>
    );
}

export default Input;