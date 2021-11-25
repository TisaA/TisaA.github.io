// module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {
//       keyframes: {
//         slideLeft: {
//           'to': { transform: 'translateX(-100%)' },
//         },
//         wiggle: {
//           '0%,100%': {
//             transform: 'rotate(-3deg)'
//           },
//           '50%': {
//             transform: 'rotate(3deg)'
//           },
//         },
//       },
//       animation: {
//         slideLeft: 'slideLeft .5s ease both',
//         wiggle: 'wiggle 1s ease-in-out infinte',
//       },
//       variants: {
//         extend: {},
//       },
//       plugins: [],
//     }
//   }
// }
module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
      },
      keyframes: {
        slideLeft: {
          'to': { transform: 'translateX(-100%)' },
        },
        slideRight: {
          'to': { transform: 'translateX(100%)' },
        },
        slideFromLeft: {
          'from': { transform: 'translateX(-100%)' },
          'to': { transform: 'translateX(0%)' },
        },
        slideFromRight: {
          'from': { transform: 'translateX(100%)' },
          'to': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        slideLeft: 'slideLeft .5s ease both',
        slideRight: 'slideRight .5s ease both',
        slideFromLeft: 'slideFromLeft .5s ease both',
        slideFromRight: ' slideFromRight .5s ease both',
      }
    },
  },
  variants: {
    height: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}