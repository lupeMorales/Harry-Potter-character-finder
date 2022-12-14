import { Link } from "react-router-dom";
import "../styles/layout/Main.scss";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const renderCharList = props.character.map((char, index) => {
    return <CharacterCard key={index} char={char} />;
  });
  return (
    <section className="list">
      <ul className="list__element">{renderCharList}</ul>
      {/*   <Link to="/error">
        <i className="fa-solid fa-arrow-up fa-xl list__arrow"></i>
      </Link> */}
    </section>
  );
};
export default CharacterList;
