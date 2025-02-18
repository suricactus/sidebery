import SnapshotsActions from './actions/snapshots.js'
import WindowsActions from './actions/windows.js'
import ContainersActions from './actions/containers.js'
import PanelsActions from './actions/panels.js'
import TabsActions from './actions/tabs.js'
import MsgActions from './actions/msg.js'
import ProxyActions from './actions/proxy.js'
import FaviconsActions from './actions/favicons.js'
import UpgradeActions from './actions/upgrade.js'
import StorageActions from './actions/storage.js'
import MiscActions from './actions/misc.js'

const Actions = {
  ...SnapshotsActions,
  ...WindowsActions,
  ...ContainersActions,
  ...PanelsActions,
  ...TabsActions,
  ...MsgActions,
  ...ProxyActions,
  ...FaviconsActions,
  ...UpgradeActions,
  ...StorageActions,
  ...MiscActions,
}

/**
 * Inject any stuff to these actions
 */
export function injectInActions(injectable = {}) {
  for (let key of Object.keys(Actions)) {
    Actions[key] = Actions[key].bind(injectable)
  }
  Actions.initialized = true
  return injectable
}

export default Actions