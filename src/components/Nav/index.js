import React from "react";
const tabs = ['Home', 'Thoughts', 'Contact'];

function Nav () {
  const attractions = [
    {
      name: "landscape",
      description: "Fields, Waterfalls, Beauty of nature"
    },
    {
      name: "trekking",
      description: "Mountains, Forest area"
    },

  ];
  function attractionsSelected(name) {
    //console.log("Hello");
    console.log(`${name} clicked`)
  }
    return (
      <header>
        <h2>
          <a href="/">
            <span> Here you go !</span>
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a href="#about">
                About me
              </a>
            </li>
            <li>
            <span>Contact</span>
            </li>
            {attractions.map((attraction) => (
            <li
              className="mx-1"
                key={attraction.name}
            >
              <span onClick={ () => attractionsSelected(attraction.name)}>
                {attraction.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
      </header>
    )
}


export default Nav;
