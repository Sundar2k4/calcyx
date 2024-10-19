import "./Input.css";
const Input = ({text,result}) =>
{
    return(
        <div class="input-wrapper">
        <div class="result">
           <h1>{result}</h1> 
        </div>


        <div class="text">
            <h3>{text}</h3>
        </div>
        </div>
    ); 
};

export default Input;