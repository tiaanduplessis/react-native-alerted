import alert from 'react-native-alerted' // eslint-disable-line

const isCancelable = false

alert('Oops!', 'Something broke', {
  'No problem': () => console.log('whatever'),
  Cancel: () => console.log('Sh*t hit the fan'),
}, isCancelable)

alert('Yay!', 'You can now delete this app')
