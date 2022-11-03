import React from 'react'
import Project from "../../components/Project";
import chatImage from "./assets/chat.png";
import nutriImage from "./assets/nutriTeam.png"

export default function PortFolio() {
  return (
    <div className="portfolio">
      <Project
        image={nutriImage}
        title={"NutriTeam : Nutrition App"}
        github={"https://github.com/AlexanderGalen/NutriTech"}
        link={"https://rubendc91.github.io/NutriTeam/"}
      />
      <Project
        image={chatImage}
        title={"Chattable : Instant Messaging App"}
        github={"https://github.com/AlexanderGalen/Chattable"}
        link={"https://corgi-messenger.herokuapp.com/login"}
      />
      <Project
        image={"https://picsum.photos/200/300"}
        title={"Project 3"}
        github={"https://github.com/AlexanderGalen/"}
        link={"#"}

      />
      <Project
        image={"https://picsum.photos/200/300"}
        title={"Project 4"}
        github={"https://github.com/AlexanderGalen/"}
        link={"#"}
      />

    </div>
  )
}
