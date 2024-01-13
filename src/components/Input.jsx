// import  PropTypes  from 'prop-types';

// Input.propTypes = {
//     value: PropTypes.number,
//     setValue: PropTypes.func
// }

// eslint-disable-next-line react/prop-types
const Input = ({ setValueNumber }) => {
    
    return (
        <div>
            <label htmlFor="passwordSize">Tamanho da senha:</label>
            <input type="number"
                id="passwordSize"
                min={7}
                max={24}
                onChange={(e) => setValueNumber(+e.target.value)} />
        </div>
    )
}
export default Input;