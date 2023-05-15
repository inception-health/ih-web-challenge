import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Search.css";

function Search(props: any) {
  const [queryParam, setQueryParam] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const onClickHandler = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(
        "https://swapi.dev/api/people/?" +
          new URLSearchParams({
            search: queryParam,
          })
      );
      console.log(data);
      setIsLoading(false);
      const response = await data.json();

      if (response.results.length === 0) {
        alert(
          "Not a real StarWars Fan! That character doesn't exist, check your spelling or try another character"
        );
      } else {
        const character = response.results[0];
        const characterPlanet = await fetch(character.homeworld).then(
          async (res) => {
            return await res.json();
          }
        );

        console.log(characterPlanet);

        setQueryParam("");

        props.callback({
          name: character.name,
          birthYear: character.birth_year,
          height: character.height,
          weight: character.mass,
          planet: characterPlanet.name,
        });
        console.log(response);
      }
    } catch (e) {
      console.log("Had the following Error: " + e);
      throw e;
    }
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={queryParam}
          onChange={(newText) => setQueryParam(newText.target.value)}
        />
        <Button variant="warning" disabled={isloading} onClick={onClickHandler}>
          {isloading ? "Loading..." : "Search"}
        </Button>
      </div>
    </>
  );
}

export default Search;
