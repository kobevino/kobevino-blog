import type { ISourceOptions } from '@tsparticles/engine';

export const OPTIONS: ISourceOptions = {
  fullScreen: {
    zIndex: 1,
  },
  emitters: [
    {
      position: {
        x: 0,
        y: 30,
      },
      rate: {
        quantity: 2,
        delay: 1,
      },
      particles: {
        move: {
          direction: 'top-right',
          outModes: {
            top: 'none',
            left: 'none',
            default: 'destroy',
          },
        },
      },
    },
    {
      position: {
        x: 100,
        y: 30,
      },
      rate: {
        quantity: 2,
        delay: 1,
      },
      particles: {
        move: {
          direction: 'top-left',
          outModes: {
            top: 'none',
            right: 'none',
            default: 'destroy',
          },
        },
      },
    },
  ],
  particles: {
    color: {
      value: ['#ffffff', '#FF0000'],
    },
    move: {
      decay: 0.05,
      direction: 'top',
      enable: true,
      gravity: {
        enable: true,
      },
      outModes: {
        top: 'none',
        default: 'destroy',
      },
      speed: {
        min: 10,
        max: 50,
      },
    },
    number: {
      value: 0,
    },
    opacity: {
      value: 1,
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      direction: 'random',
      animation: {
        enable: true,
        speed: 30,
      },
    },
    tilt: {
      direction: 'random',
      enable: true,
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: true,
        speed: 30,
      },
    },
    size: {
      value: {
        min: 0,
        max: 2,
      },
      animation: {
        enable: true,
        startValue: 'min',
        count: 1,
        speed: 16,
        sync: true,
      },
    },
    roll: {
      darken: {
        enable: true,
        value: 25,
      },
      enable: true,
      speed: {
        min: 5,
        max: 15,
      },
    },
    wobble: {
      distance: 30,
      enable: true,
      speed: {
        min: -7,
        max: 7,
      },
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
        ],
      },
    },
  },
};
