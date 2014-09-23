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
  client.open("HEAD", "/speedtest/ping.txt", true); //HEAD static file
  client.send();
}

function pingDone(start) {
  done = new Date();
  ms = done.getTime() - start.getTime();
  alert(done.getTime() + "ms(Done)" + start.getTime() + "ms(Start)" + ms + "ms ping time");
}

function getClient() {
  if (window.XMLHttpRequest)
    return new XMLHttpRequest();
  if (window.ActiveXObject)
    return new ActiveXObject('MSXML2.XMLHTTP.3.0');
  throw ("No XMLHttpRequest Object Available.");
}
