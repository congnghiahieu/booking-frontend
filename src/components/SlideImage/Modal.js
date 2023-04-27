import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Modal = ({
  clickedImg,
  setClickedImg,
  handelRotationRight,
  handelRotationLeft
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <>
      <div className="overlay dismiss" onClick={handleClick}>
        <img src={clickedImg} alt="bigger pic" />
        <span className="dismiss" onClick={handleClick}>
          X
        </span>
        <div onClick={handelRotationLeft} className="overlay-arrows_left">
          <div>
            <FontAwesomeIcon icon={faCaretLeft} />
          </div>
        </div>
        <div onClick={handelRotationRight} className="overlay-arrows_right">
          <div>
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
