var vinylDOM = document.querySelector('.vinyl');
var followerDOM = document.querySelector('.follower-box');

var ws = new WebSocket("ws://127.0.0.1:2666/");
ws.onopen = function() {
// Web Socket is connected, send data using send()
//ws.send(JSON.stringify(navigator));
};

ws.onmessage = function (evt) {
var data = JSON.parse(evt.data);

if (data.action == "show vinyl") {
  vinylDOM.style.visibility = "visible";
}

else if (data.action == "hide vinyl") {
  vinylDOM.style.visibility = "hidden";
}

else if (data.action.search("follower") == 0) {
  var command = "follower";
  var name = "";
  name = data.action.substring(command.length + 1, data.action.lenght);

  displayFollower(name);
}

};

function displayFollower(name) {
  console.log("displayFollower");
  var nameDOM = followerDOM.querySelector('.follower-name');
  nameDOM.innerHTML = name;
  followerDOM.querySelector('.follower-inner').style.left = "0%";
  setTimeout(function() {
    followerDOM.querySelector('.follower-inner').style.left = "100%";
  }, 4000);
}

ws.onclose = function() {

// websocket is closed.
console.log("WS Closed");
};
