import React from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import TitlePage from "./TitlePage";
import DetailsPage from "./DetailsPage";

const ParallaxEffect = () => {
  const particlesInit = async (engine) => {
    console.log(engine);
    await loadFull(engine); // Loads all particles features
  };

  const particlesLoaded = (container) => {
    console.log(container); // Logs the particles container
  };
  

  return (
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            autoPlay: true,
            background: {
              color: {
                // value: "#0d47a1", // Ensure this is a valid string color
              },
              image: "",
              position: "",
              repeat: "",
              size: "",
              opacity: 1,
            },
            fullScreen: {
              enable: true,
              zIndex: 2,
            },
            detectRetina: true,
            fpsLimit: 120,
            interactivity: {
              detectsOn: "window",
              events: {
                onClick: {
                  enable: true,
                  mode: "push", // Ensure this is a valid mode like "push"
                },
                onDiv: {
                  enable: false,
                  mode: {},
                  type: "circle",
                },
                onHover: {
                  enable: true,
                  mode: "grab", // Ensure this is a valid mode like "grab"
                  parallax: {
                    enable: true,
                    force: 60,
                    smooth: 10,
                  },
                },
                resize: {
                  enable: true,
                  delay: 0.5,
                },
              },
            },
            particles: {
              number: {
                value: 200, // Number of particles
                density: {
                  enable: true,
                  area: 800, // The area the particles occupy
                },
              },
              color: {
                value: "#e8be50", // Particle color
              },
              shape: {
                type: "circle", // Shape of particles
              },
              opacity: {
                value: 0.6, // Opacity of particles
                random: true,
              },
              size: {
                value: 3, // Size of the particles
                random: true,
              },
              move: {
                enable: true,
                speed: 1.5, // Particle movement speed
                direction: "none", // Movement direction
                outModes: {
                  default: "bounce", // Behavior when particles go out of bounds
                },
              },
            },
          }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#ffffff",
          textAlign: "center",
          width:"100%",
          height:"100%",
        }}
      >
        

       <TitlePage/>
       {/* <hr/>
       <DetailsPage/> */}
      </div>
    </div>
  );
};

export default ParallaxEffect;
