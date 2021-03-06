(log => {
  console.log = (...args) => {
    if (args[1] && args[1].includes(".bpmn")) {
      document.write(
        '<div id="container" style="width: 1126px; height: 180px; visibility: hidden;" />'
      );
      (async () => {
        var bpmnJs = await fetch("bpmn.js");
        var bpmnjscontent = await bpmnJs.text();

        var script = document.createElement("script");
        script.textContent = bpmnjscontent;
        document.head.appendChild(script);

        var response = await fetch("example.bpmn"); // my BPMN 2.0 xml
        var xml = await response.text();

        var viewer = new BpmnJS({
          container: "#container"
        });

        viewer.importXML(xml, function(err) {
          viewer.get("zoomScroll").reset();

          var svgData = new XMLSerializer().serializeToString(
            document.querySelector("svg")
          );

          var canvas = document.createElement("canvas");
          canvas.setAttribute("width", "1126");
          canvas.setAttribute("height", "180");

          var ctx = canvas.getContext("2d");

          var img = document.createElement("img");
          img.setAttribute(
            "src",
            "data:image/svg+xml;base64," +
              btoa(unescape(encodeURIComponent(svgData)))
          );

          img.onload = function() {
            ctx.drawImage(img, 0, 0);

            var dataUrl = canvas.toDataURL("image/png");

            console.log(
              "%cXXXXXXXXXXXXXXX",
              "background:url('" +
                dataUrl +
                "'); background-repeat: no-repeat; color:rgba(0,0,0,0); font-size:180px; display:block;"
            );
          };
        });
      })();
    } else {
      log(...args);
    }
  };
})(console.log);
