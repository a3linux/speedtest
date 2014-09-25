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
      $('#ping-check-result').append('HTTP Ping延迟 ' + ms + 'ms!<br>');
      client.onreadystatechange = null;
    }
  };
  start = new Date();
  client.open("GET", "/speedtest/ping.txt?" + Math.random(), true);
  client.send();
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  var i = 0;
  for (i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

$(window).load(function() {
  $('#ping-check-result').append('<p class="small">点击<b>运行时延测试</b>按钮执行HTTP Ping时延测试</p>');
  $('input[type="image"]').removeAttr('disabled');
  $('#run-ping-check').click(function(){
    $('#ping-check-result').empty();
    getPing();
    getPing();
    getPing();
    getPing();
    getPing();
  });
});
