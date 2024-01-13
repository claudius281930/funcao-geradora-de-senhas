const Generate = ({ valueNumber, copy, setCopy, }) => {

    const characters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*!?<>-_()=+0123456789";

    let randomChar = "";

    for (let i = 0; i < valueNumber; i++) {
        randomChar += characters.charAt(Math.random() * characters.length);
    }
    if (copy) {
        setCopy("Copiar")
    }

    return randomChar;
};

export default Generate;
