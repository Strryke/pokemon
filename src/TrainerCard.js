import React from "react";

function TrainerCard() {
  return (
    <div className="wrapper" style={{ backgroundColor: "lightgray" }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
        alt=""
        className="d-block w-25 mx-auto my-3"
      />
      <div className="row">
        <div className="col-7 justify-content-center">
          <div className="wrapper">
            <div className="text-center title-name">Pokemon Trainer</div>
            <img
              src="https://archives.bulbagarden.net/media/upload/thumb/c/cd/Ash_JN.png/150px-Ash_JN.png"
              alt=""
              className="d-block mx-auto"
            />
          </div>
        </div>
        <div className="col-5 ms-0">
          <div className="wrapper">
            <div className="text-center title-name">Info</div>
            <div className="info">
              <p className="font-monospace text-uppercase fs-8 mb-0">Name:</p>
              <p className="fw-bold fs-5 mb-0">Ash Ketchum</p>
            </div>
            <div className="info">
              <p className="font-monospace text-uppercase fs-8 mb-0">Age:</p>
              <p className="fw-bold fs-5 mb-0">10</p>
            </div>
            <div className="info">
              <p className="font-monospace text-uppercase fs-8 mb-0">
                Eye Colour:
              </p>
              <p className="fw-bold fs-5 mb-0">Black</p>
            </div>
            <div className="info">
              <p className="font-monospace text-uppercase fs-8 mb-0">Rival:</p>
              <p className="fw-bold fs-5 mb-0">Red</p>
            </div>
            <div className="info">
              <p className="font-monospace text-uppercase fs-8 mb-0">Region:</p>
              <p className="fw-bold fs-5 mb-0">Kanto</p>
            </div>
            <div className="info">
              <p className="font-monospace text-uppercase fs-8 mb-0">
                Hometown:
              </p>
              <p className="fw-bold fs-5 mb-0">Pallet Town</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
}

export default TrainerCard;
