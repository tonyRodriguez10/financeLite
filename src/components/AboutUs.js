import React from "react";
import Formulario from "./Formulario";



function AboutUs() {
    return (
      <React.Fragment>
        <div className="borders container" style={{ textAlign:'center',width:'100%',height:'41em', marginBottom:"2%"}}>
          <h1>Finance lite</h1>
          <p className="container" style={{ fontSize:'38px', textAlign:"justify"}}>
            Finance lite is a platform which benefits diverse groups of women by hosting supportive events. The About Us page successfully captures the spirit of the organization, beginning with a heartwarming text about its mission and photographs of empowered women who represent their community. 
            The website color scheme is gentle, combining purples and pinks that channel positive female vibes. Parallax scrolling helps to engage visitors even more, allowing the areas of color and photographs to shift throughout the page as they browse. 
            By confidently placing calls-to-action on the About Us page - a sweet “Donate” button on the right hand side, and a slider at the bottom of the page - visitors are invited to become members of the organization. 
          </p>
        </div>
          

        <Formulario />
        </React.Fragment>
    );
  }



export default AboutUs;
