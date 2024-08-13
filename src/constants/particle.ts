import type { ISourceOptions } from '@tsparticles/engine';

export const OPTIONS: ISourceOptions = {
  background: {
    color: 'transparent'
  },
  fullScreen: {
    enable: true,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      onHover: {
        enable: true,
        mode: 'repulse'
      }
    },
    modes: {
      push: {
        quantity: 3
      },
      repluse: {
        distance: 100
      }
    }
  },
  
  particles: {
    // links: {
    //   enable: true,
    //   distance: 200,
    // },
    move: {
      direction: 'none',
      enable: true,
      random: false,
      speed: { min: 1, max: 5 },
      outModes: {
        default: "bounce",
      },
      straight: false
    },
    opacity: {
      value: { min: 0.3, max: 0.7 }
    },
    size: {
      value: { min: 1, max: 3 }
    },
    number: {
      density: {
          enable: true,
      },
      value: 25,
    },
    shape: {
      type: 'image',
      options: {
        image: [
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
            width: 50,
            height: 50,
            particles: {
              size: {
                value: 25,
              },
            },
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
            width: 50,
            height: 50,
            particles: {
              size: {
                value: 25,
              },
            },
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg',
            width: 50,
            height: 50,
            particles: {
              size: {
                value: 25,
              },
            },
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
            width: 50,
            height: 50,
            particles: {
              size: {
                value: 25,
              },
            },
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg',
            width: 50,
            height: 50,
            particles: {
              size: {
                value: 25,
              },
            },
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original-wordmark.svg',
            width: 50,
            height: 50,
            particles: {
              size: {
                value: 25,
              },
            },
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
            width: 50,
            height: 50,
            particles: {
              size: {
                value: 25,
              },
            },
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
            width: 50,
            height: 50,
            particles: {
              size: {
                value: 25,
              },
            },
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
            width: 50,
            height: 50,
            particles: {
              size: {
                value: 25,
              },
            },
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg',
            width: 50,
            height: 50,
            particles: {
              size: {
                value: 25,
              },
            },
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rollup/rollup-original.svg',
            width: 50,
            height: 50,
            particles: {
              size: {
                value: 25,
              },
            },
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
            width: 50,
            height: 50,
            particles: {
              size: {
                value: 25,
              },
            },
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
            width: 50,
            height: 50,
            particles: {
              size: {
                value: 25,
              },
            },
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg',
            width: 50,
            height: 50,
            particles: {
              size: {
                value: 25,
              },
            },
          },
        ]
      }
    }
  },
}