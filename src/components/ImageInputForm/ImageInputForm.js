import React from "react"
import "./ImageInputForm.css"

const ImageInputForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p>
        This computer brain can detect faces on the photos. Paste URL of your
        photo to give it a try.
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageInputForm
