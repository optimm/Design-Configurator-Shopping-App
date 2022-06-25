import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticleComponent({ val }) {
    const particlesInit = async (main) => {
        // console.log(main);
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
        // console.log(container);
    };
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 100,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                        },
                        onHover: {
                            enable: false,
                        },
                        resize: true,
                    },
                },
                particles: {
                    color: {
                        value: "#fff",
                        opacity: 0.5,
                    },
                    links: {
                        color: "#fff",
                        enable: false,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: val,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 1 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

export default ParticleComponent