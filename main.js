(function(){

  $('#Colour').spectrum({
    preferredFormat: "rgb",
    move: function (color) {
      // console.log(color);

      console.log(color.toRgb());
      console.log(color.toRgbString());

      var rgb = color.toRgb();

      $('.brightness.red').attr('slope', rgb.r/255);
      $('.brightness.green').attr('slope', rgb.g/255);
      $('.brightness.blue').attr('slope', rgb.b/255);
    }
  });

})();