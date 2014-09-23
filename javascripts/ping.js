function getPing() {
  var start;
  var client = getClient(); // xmlhttprequest object
  client.onreadystatechange = function() {
    if (client.readyState > 0) {
      pingDone(start); //handle ping
      client.onreadystatechange = null; //remove handler
    }
  }
  start = new Date();
  client.open("HEAD", "/speedtest/ping.txt"); //static file
  client.send();
}

function pingDone(start) {
  done = new Date();
  ms = done.valueOf() - start.valueOf();
  alert(ms + "ms ping time");
}

function getClient() {
  if (window.XMLHttpRequest)
    return new XMLHttpRequest();
  if (window.ActiveXObject)
    return new ActiveXObject('MSXML2.XMLHTTP.3.0');
  throw ("No XMLHttpRequest Object Available.");
}
