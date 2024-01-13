import Input from './Input';

// eslint-disable-next-line react/prop-types
const InputCustom = ({ check, setCheck, valueNumber, setValueNumber }) => {
    
    return (
        <div>
            <label htmlFor="showInput">
                Prefere escolher a quantidade de caractares ?
            </label>
            <input
                type="checkbox"
                id="showInput"
                onChange={() => setCheck(alias => !alias)}
            />{check && <Input valueNumber={valueNumber} setValueNumber={setValueNumber}></Input>}
        </div>
    )

}
export default InputCustom;
