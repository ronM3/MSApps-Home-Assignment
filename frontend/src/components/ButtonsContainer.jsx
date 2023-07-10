import "../assets/styles/buttonsContainer.css";
import { useSelector } from "react-redux";

const ButtonsContainer = ({handlePrevPage, handleNextPage}) => {
  const { data } = useSelector((state) => state.photosState);
  return (
    <div className="buttons-container">
      <button className="button prev" disabled={!data.hasPrevPage} onClick={handlePrevPage}>Prev</button>
      <button className="button button" disabled={!data.hasNextPage} onClick={handleNextPage}>Next</button>
    </div>
  );
};

export default ButtonsContainer;
