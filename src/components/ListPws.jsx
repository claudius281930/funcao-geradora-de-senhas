
const ListPsw = ({ password, previousPassword,
    beforePreviousPassword, auxBeforePassword }) => {

    <ul className="contentList">
        <li>{password === "" ? "" : password}</li>
        <li>{previousPassword === password ? beforePreviousPassword : previousPassword}</li>
        <li>{beforePreviousPassword === previousPassword ? beforePreviousPassword : auxBeforePassword}</li>
    </ul>
}
export default ListPsw;