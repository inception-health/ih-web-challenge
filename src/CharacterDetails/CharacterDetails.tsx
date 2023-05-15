import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./CharacterDetails.css";

function CharacterDetails(props: any) {
  const [infoLoaded, setInfoLoaded] = useState(true);
  const wookieTranslator = () =>{
    //some code to call wookie endpoint with same info
  }

  return (
    <>
      <div className="character-container">
        {!infoLoaded && (
          <div className="unselected-character">
            <h1>Search Your Character Below</h1>
          </div>
        )}
        {infoLoaded && (
          <div className="selected-character">
            <div className="image-container">
                <img src="../../public/images/anakin skywalker.jpg" alt="" />
            </div>
            <div className="info-container">
                <ul>
                    <li>Name: {props.value.name}</li>
                    <li>BirthYear: {props.value.birthYear}</li>
                    <li>Height: {props.value.height} cm</li>
                    <li>Weight: {props.value.weight} kg</li>
                    <li>Home Planet: {props.value.planet}</li>
                </ul>
            </div>
            <Button variant="warning" onClick={wookieTranslator}>Translate to Wookie</Button>
          </div>
        )}
      </div>
    </>
  );
}

export default CharacterDetails;
