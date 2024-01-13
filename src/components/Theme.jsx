import PropTypes from "prop-types";
import style from "./style.btnTheme.module.css";

const Theme = ({ currentTheme, setCurrentTheme }) => {
  const newTheme = currentTheme === "escuro" ? "claro" : "escuro";

  return (
    <button
      onClick={() => setCurrentTheme(newTheme)}
      className={currentTheme === "claro" ? "" : style.btnThemeLight }
    >
      Trocar tema para {currentTheme}
    </button>
  );
};
Theme.propTypes = {
  currentTheme: PropTypes.string.isRequired,
  setCurrentTheme: PropTypes.func.isRequired,
};
export default Theme;
