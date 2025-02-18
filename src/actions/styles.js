import EventBus from '../event-bus'

/**
 * Load predefined theme and apply it
 */
function initTheme() {
  let themeLinkEl = document.getElementById('theme_link')

  // Remove theme css
  if (this.state.theme === 'none') {
    if (themeLinkEl) themeLinkEl.setAttribute('disabled', 'disabled')
    return
  } else {
    if (themeLinkEl) themeLinkEl.removeAttribute('disabled')
  }

  if (!themeLinkEl) {
    themeLinkEl = document.createElement('link')
    themeLinkEl.id = 'theme_link'
    themeLinkEl.type = 'text/css'
    themeLinkEl.rel = 'stylesheet'
    document.head.appendChild(themeLinkEl)
  }

  themeLinkEl.href = `../themes/${this.state.theme}/${this.state.instanceType}.css`
  setTimeout(() => EventBus.$emit('dynVarChange'), 120)
}

/**
 * Load custom css and apply it
 */
async function loadCustomCSS() {
  const fieldName = this.state.instanceType + 'CSS'
  let ans = await browser.storage.local.get(fieldName)
  if (!ans || !ans[fieldName]) return

  this.actions.applyCustomCSS(ans[fieldName])
}

/**
 * Update custom css
 */
function applyCustomCSS(css) {
  // Find or create new style element
  let customStyleEl = document.getElementById('custom_css')
  if (!customStyleEl) {
    customStyleEl = document.createElement('style')
    customStyleEl.id = 'custom_css'
    customStyleEl.type = 'text/css'
    customStyleEl.rel = 'stylesheet'
    document.head.appendChild(customStyleEl)
  } else {
    while (customStyleEl.lastChild) {
      customStyleEl.removeChild(customStyleEl.lastChild)
    }
  }

  // Apply css
  if (css) {
    customStyleEl.appendChild(document.createTextNode(css))
  }
}

export default {
  initTheme,

  loadCustomCSS,
  applyCustomCSS,
}