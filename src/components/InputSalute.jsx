
// eslint-disable-next-line react/prop-types
const InputSalute = ({ setSalute }) => {

    return (
        <input
            type="text"
            placeholder="Diga o seu nome"
            onChange={(e) => setSalute(e.target.value)}
        />
    )
}
export default InputSalute;