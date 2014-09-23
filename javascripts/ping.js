function getClient() {
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  }
  if (window.ActiveXObject) {
    return new ActiveXObject('MSXML2.XMLHTTP.3.0');
  }
  throw ("No XMLHttpRequest Object Available.");
}

function getPing() {
  var start;
  var client = getClient();
  client.onreadystatechange = function() {
    // 0 not initialized 1 connection est 2 request received 3 processing request 4 request finished and response is ready
    if (client.readyState == 4 && client.status == 200) {
      var done = new Date();
      var start_ms = start.getTime();
      var done_ms = done.getTime();
      var ms = done_ms - start_ms;
      $('#ping-check-result').append('<div>HTTP Ping延迟 ' + ms + 'ms!</div>');
      client.onreadystatechange = null;
    }
  };
  start = new Date();
  client.open("GET", "/speedtest/ping.txt?" + Math.random(), true);
  client.send();
}

$(document).ready(function(){
  getPing();
  getPing();
  getPing();
  getPing();
  getPing();
});
