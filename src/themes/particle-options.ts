export const particleOptions = {
  background: {
    color: {
      value: "#F1F0EA"
    }
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: '#474448'
    },
    collisions: {
      enable: true
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 2,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 50
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle'
    },
    size: {
      random: true,
      value: {min: 1, max: 5}
    }
  },
  detectRetina: true
}
