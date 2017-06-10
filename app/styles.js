export default {

  nerp: {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      padding: '0 50 0 50'
    },
    gridList: {
      width: '97%',
      height: 250,
    },
    textList: {
      width: '97%',
      height: 250,
      overflowY: 'auto',
    }
  },

  projects: {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: '97%',
      height: '100%',
    },
    title: {
      textAlign: 'center'
    },
    img: {
      height: 364,
      width: 718,
      border: '1px solid black',
      margin: 'auto',
      display: 'block'
    }
  },

  emailModal: {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: 350
    }
  },

  // emailModalMobile: {
  //   content: {
  //     top: '50%',
  //     left: '50%',
  //     right: 'auto',
  //     bottom: 'auto',
  //     marginRight: '-50%',
  //     transform: 'translate(-50%, -50%)',
  //     width: 450,
  //     background: 'red',
  //     display: 'hidden'
  //   }
  // }
}
