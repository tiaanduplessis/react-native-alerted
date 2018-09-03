import { Alert } from 'react-native' // eslint-disable-line

/**
 *
 * @param {String} title Title of alert
 * @param {String} message Description of alert
 * @param {Object} buttons Buttons of alert
 * @param {Boolean} cancelable If alert can be dismissed
 */
function alerted(title, message, buttons = {}, cancelable = false) {
  let buttonActions = Object.keys(buttons).map(key => ({ text: key, onPress: buttons[key] }))

  if (!buttonActions.length) {
    buttonActions = [{ text: 'OK', onPress: () => {} }]
  }

  return Alert.alert(title, message, buttonActions, { cancelable })
}

export default alerted
