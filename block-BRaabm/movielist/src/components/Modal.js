import { AiOutlineClose } from "react-icons/ai";
function Modal(props) {
  console.log(props.handleClick);
  return (
    <div className="max-w-3xl w-full mx-auto fixed top-[40%] left-[50%] translate-x-[-50%] translate-y-[-40%] bg-slate-900 bg-opacity-30 backdrop-blur-lg rounded drop-shadow-lg z-10 text-white p-4 overflow-y-scroll">
      <div className="flex justify-end items-center mb-4">
        <button onClick={props.handleClick} className="text-2xl">
          <AiOutlineClose />
        </button>
      </div>
      <div className="mb-4">
        <img
          className="w-full h-[400px] object-cover object-top"
          src={props.Images[0]}
          alt={props.Title}
        />
      </div>
      <div className="flex justify-center items-start">
        <div className="basis-[45%] p-4">
          <h2 className="text-3xl font-bold mb-2">{props.Title}</h2>
          <p className="text-sm">
            <span className="text-lg font-bold">Director:</span>{" "}
            {props.Director}
          </p>
          <p className="text-sm mb-2">
            <span className="text-base font-bold ">Writer:</span> {props.Writer}
          </p>
          <p className="text-sm">
            <span className="text-base ">Released:</span> {props.Released}
          </p>
          <p className="text-sm">
            <span className="text-base ">Runtime:</span> {props.Runtime}
          </p>
          <p className="text-sm">
            <span className="text-base ">Genre:</span> {props.Genre}
          </p>
        </div>

        <div className="basis-[45%] p-4">
          <div className="text-sm flex justify-between items-start">
            <p className="text-base font-bold">Actors:</p>
            <p className="p-1">{props.Actors}</p>
          </div>
          <div className="text-sm flex justify-between items-start">
            <p className="text-base font-bold">Plot:</p>
            <p className="p-1">{props.Plot}</p>
          </div>
          <p className="text-sm">
            <span className="text-base ">IMDB:</span> {props.imdbRating}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Modal;
