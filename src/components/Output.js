import './Output.css';

//used to output the result of the conversion
function Output(props) {
    const mode = props.isBinary? "Decimal" : "Binary";
    return (
        <div className="output">
            <p className="desc">{mode} equivalent</p>
            <p className="result">{props.result}</p>
        </div>
    );
}

export default Output;