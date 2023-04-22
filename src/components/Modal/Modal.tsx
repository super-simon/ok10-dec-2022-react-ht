import { FC } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import "./Modal.css";

type Props = {
  children?: React.ReactNode;
  handleClose: React.MouseEventHandler<SVGElement>;
};

const Modal: FC<Props> = ({ children, handleClose }) => {
  return (
    <div className="modal">
      <div className="modal__children">
        <div className="modal__close-button-container">
          <FaRegTimesCircle
            onClick={handleClose}
            className="modal__close-button"
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
