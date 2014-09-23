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
  var client = getClient(); // xmlhttprequest object
  client.onreadystatechange = function() {
    if (client.readyState > 0) {
      var done = new Date();
      var start_ms = start.getTime();
      var done_ms = done.getTime();
      var ms = done_ms - start_ms;
      alert(start_ms + 'ms(Start) ' + done_ms + 'ms(Done) ' + ms + 'ms Ping Latency');
      client.onreadystatechange = null;
    }
  };
  start = new Date();
  client.open("GET", "/speedtest/ping.txt?" + Math.random(), true);
  client.send();
}
