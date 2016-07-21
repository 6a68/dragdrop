function dragstart_handler(ev) {
  console.log("drag start");
  ev.dataTransfer.setData('text/plain', ev.target.id);
}

function drop_handler(ev) {
  console.log("drop");
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data))
}

function dragover_handler(ev) {
  console.log("draggin over")
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
}
