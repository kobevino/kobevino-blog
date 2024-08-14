import type { ISourceOptions } from '@tsparticles/engine';

export const OPTIONS: ISourceOptions = {
  background: {
    color: 'transparent',
  },
  fullScreen: {
    enable: true,
  },
  interactivity: {
    detectsOn: 'window',
    events: {
      onClick: {
        enable: false,
        mode: [],
      },
      onDiv: {
        selectors: [],
        enable: false,
        mode: [],
        type: 'circle',
      },
      onHover: {
        enable: true,
        mode: 'trail',
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },
    modes: {
      trail: {
        delay: 0.005,
        pauseOnStop: true,
        quantity: 5,
        particles: {
          color: {
            value: '#ff0000',
            animation: {
              enable: true,
              speed: 400,
              sync: true,
            },
          },
          collisions: {
            enable: false,
          },
          links: {
            enable: false,
          },
          size: {
            value: {
              min: 1,
              max: 5,
            },
            animation: {
              enable: true,
              speed: 5,
              sync: true,
              startValue: 'min',
              destroy: 'max',
            },
          },
        },
      },
      attract: {
        distance: 200,
        duration: 0.4,
        easing: 'ease-out-quad',
        factor: 1,
        maxSpeed: 50,
        speed: 1,
      },
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 200,
        duration: 0.4,
        mix: false,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: [],
        },
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 100,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
      push: {
        default: true,
        groups: [],
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: 'ease-out-quad',
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: 'ease-out-quad',
          selectors: [],
        },
      },
      slow: {
        factor: 3,
        radius: 200,
      },
      light: {
        area: {
          gradient: {
            start: {
              value: '#ffffff',
            },
            stop: {
              value: '#000000',
            },
          },
          radius: 1000,
        },
        shadow: {
          color: {
            value: '#000000',
          },
          length: 2000,
        },
      },
    },
  },
  particles: {
    color: {
      value: 'random'
    },
    links: {
      enable: true,
      distance: 200,
      color: {
        value: "random"
      },
    },
    move: {
      direction: 'none',
      enable: true,
      random: false,
      speed: { min: 1, max: 5 },
      outModes: {
        default: 'bounce',
      },
      straight: false,
    },
    opacity: {
      value: { min: 0.3, max: 0.7 },
    },
    size: {
      value: { min: 1, max: 3 },
    },
    number: {
      density: {
        enable: true,
      },
      value: 30,
    },
  },
};
