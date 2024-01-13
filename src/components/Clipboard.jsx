const CopyToClipboard = ({ password, setCopy }) => {

    window.navigator.clipboard.writeText(password)

    if (password != "") {
        setCopy("Copiado!");

    } else {
        setCopy("Copiar")
    }

};

export default CopyToClipboard;