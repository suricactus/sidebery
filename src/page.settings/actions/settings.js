import { DEFAULT_SETTINGS } from '../../defaults'
import CommonActions from '../../actions/settings'
import Actions from './index'

/**
 * Set setting value
 */
function setSetting(key, val) {
  if (DEFAULT_SETTINGS[key] === undefined) return
  this.state[key] = val
}

/**
 * Reset settings to defaults
 * and store them to local storage
 */
function resetSettings() {
  // Reset settings
  for (let key of Object.keys(DEFAULT_SETTINGS)) {
    if (this.state[key] == null || this.state[key] == undefined) continue
    this.state[key] = DEFAULT_SETTINGS[key]
  }
}

/**
 * Save settings to local storage
 */
async function saveSettings() {
  let settings = {}
  for (const key of Object.keys(DEFAULT_SETTINGS)) {
    if (this.state[key] == null || this.state[key] == undefined) continue
    if (this.state[key] instanceof Object) settings[key] = JSON.parse(JSON.stringify(this.state[key]))
    else settings[key] = this.state[key]
  }
  await browser.storage.local.set({ settings })
}

/**
 * Update settings
 */
function updateSettings(settings) {
  if (!settings) return

  // Check what values was updated
  const theme = this.state.theme !== settings.theme

  // Update settings
  for (let k of Object.keys(settings)) {
    if (settings[k] !== undefined) this.state[k] = settings[k]
  }

  if (theme) {
    Actions.initTheme()
  }
}

export default {
  ...CommonActions,

  setSetting,
  resetSettings,
  saveSettings,
  updateSettings,
}