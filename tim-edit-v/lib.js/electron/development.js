// Importing this adds a right-click menu with 'Inspect Element' option
const { remote } = require('electron')
const { Menu, MenuItem } = remote

let rightClickPosition = null
const menu = new Menu()
//menu.append(new MenuItem({ label: 'MenuItem1', click() { console.log('item 1 clicked') } }))
//menu.append(new MenuItem({ type: 'separator' }))
//menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }))
//menu.append(new MenuItem({ type: 'separator' }))
menu.append(new MenuItem({
    label: 'Inspect Element',
    click: () => {
        remote.getCurrentWindow().inspectElement(rightClickPosition.x, rightClickPosition.y)
    }
}))

window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  rightClickPosition = { x: e.x, y: e.y }
  menu.popup({ window: remote.getCurrentWindow() })
}, false)



document.addEventListener("keydown", function (e) {
  //console.log(e) // aktualni stisktnuta klavesa
  if (e.key === 'F12') {
      require('electron').remote.getCurrentWindow().toggleDevTools();
  } else if (e.key === 'F5') {
      location.reload();
  }

});