require("DHT22");
var run = false;
LED1.write(1);

function start() {
  run = true;
  setInterval(function () {
    if (run) {
      LED1.write(0);
      LED2.write(1);
      var dht = require("DHT22").connect(B3);
      dht.read(function (a) {
        var temp = a.temp.toString();
        var hum = a.rh.toString();
        console.log(t + "C / " + h + "%");
      });
    } else {
      LED1.write(1);
      LED2.write(0);
    }
  }, 1000);
}

function stop() {
  run = false;
}

start();