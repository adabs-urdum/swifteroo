(function($) {

  $.fn.Swifteroo = function() {
    var $swifteroo = $(this);

    function init(){
      setVars();
      bindEvents();
    }

    function setVars(){
    }

    function bindEvents(){
      $swifteroo.on('mousemove', getMousePosition);
      $swifteroo.on('mouseleave', resetOrigin);

      if (window.DeviceOrientationEvent) {
          window.addEventListener("deviceorientation", function () {
            getDevicePosition(event.beta, event.gamma);
          }, true);
      } else if (window.DeviceMotionEvent) {
          window.addEventListener('devicemotion', function () {
              getDevicePosition(event.acceleration.x * 2, event.acceleration.y * 2);
          }, true);
      } else {
          window.addEventListener("MozOrientation", function () {
              getDevicePosition(orientation.x * 50, orientation.y * 50);
          }, true);
      }
    }

    function resetOrigin(){
      setTransformOrigin(50, 50, 0, 0, 0);
    }

    function getDevicePosition(z, x){

      var relativeYPositionPercentage = 100 / 180 * (x + 90);
      if( relativeYPositionPercentage < 0 ){ relativeYPositionPercentage = 0; }
      if( relativeYPositionPercentage > 100 ){ relativeYPositionPercentage = 100; }

      var relativeXPositionPercentage = 100 / 180 * (z + 90);
      if( relativeXPositionPercentage < 0 ){ relativeXPositionPercentage = 0; }
      if( relativeXPositionPercentage > 100 ){ relativeXPositionPercentage = 100; }

      var maxRotateDegrees = 50;

      var rotation3dX = maxRotateDegrees * (relativeXPositionPercentage - 50) / 100;
      if(rotation3dX > maxRotateDegrees / 2){rotation3dX = maxRotateDegrees;}
      if(rotation3dX < maxRotateDegrees / 2 * -1){rotation3dX = maxRotateDegrees * -1}
      rotation3dX = rotation3dX * 2;

      var rotation3dY = maxRotateDegrees * (relativeYPositionPercentage - 50) / 100;
      if(rotation3dY > maxRotateDegrees / 2){rotation3dY = maxRotateDegrees;}
      if(rotation3dY < maxRotateDegrees / 2 * -1){rotation3dY = maxRotateDegrees * -1}
      rotation3dY = rotation3dY * 2;

      var rotation3dZ = maxRotateDegrees * (relativeXPositionPercentage - 50) / 200 * -1;
      if(rotation3dZ > maxRotateDegrees / 2){rotation3dZ = maxRotateDegrees;}
      if(rotation3dZ < maxRotateDegrees / 2 * -1){rotation3dZ = maxRotateDegrees * -1}
      rotation3dZ = rotation3dZ * 2;

      setTransformOrigin(relativeXPositionPercentage, relativeYPositionPercentage, rotation3dX, rotation3dY, rotation3dZ);

    }

    function getMousePosition(e){

      var swifterooOffset = $swifteroo.offset();
      var swifterooHeight = $swifteroo.height();
      var swifterooWidth = $swifteroo.width();

      var maxPercentage = 80;
      var minPercentage = 20;

      var relativeXPosition = (e.clientX - swifterooOffset.left);
      var relativeXPositionPercentage = maxPercentage / swifterooWidth * relativeXPosition;
      if(relativeXPositionPercentage > maxPercentage){relativeXPositionPercentage = maxPercentage;}
      if(relativeXPositionPercentage < minPercentage){relativeXPositionPercentage = minPercentage;}

      var relativeYPosition = (e.clientY - swifterooOffset.top);
      var relativeYPositionPercentage = maxPercentage / swifterooHeight * relativeYPosition;
      if(relativeYPositionPercentage > maxPercentage){relativeYPositionPercentage = maxPercentage;}
      if(relativeYPositionPercentage < minPercentage){relativeYPositionPercentage = minPercentage;}

      var maxRotateDegrees = 20;

      var rotation3dX = maxRotateDegrees * (relativeXPositionPercentage - 50) / 100;
      if(rotation3dX > maxRotateDegrees / 2){rotation3dX = maxRotateDegrees;}
      if(rotation3dX < maxRotateDegrees / 2 * -1){rotation3dX = maxRotateDegrees * -1}

      var rotation3dY = maxRotateDegrees * (relativeYPositionPercentage - 50) / 100;
      if(rotation3dY > maxRotateDegrees / 2){rotation3dY = maxRotateDegrees;}
      if(rotation3dY < maxRotateDegrees / 2 * -1){rotation3dY = maxRotateDegrees * -1}

      var rotation3dZ = maxRotateDegrees * (relativeXPositionPercentage - 50) / 200 * -1;
      if(rotation3dZ > maxRotateDegrees / 2){rotation3dZ = maxRotateDegrees;}
      if(rotation3dZ < maxRotateDegrees / 2 * -1){rotation3dZ = maxRotateDegrees * -1}

      // console.log(relativeXPositionPercentage, relativeYPositionPercentage, rotation3dX, rotation3dY, rotation3dZ);
      setTransformOrigin(relativeXPositionPercentage, relativeYPositionPercentage, rotation3dX, rotation3dY, rotation3dZ);
    }

    function setTransformOrigin(x, y, degX, degY, degZ){

      var origin = x + '% ' + y + '% 0';
      var rotation3dX = degX + 'deg';
      var rotation3dY = degY + 'deg';
      var rotation3dZ = degZ + 'deg';
      $swifteroo.css({
        'transform-origin': origin,
        '-webkit-transform-origin': origin,
        '-moz-transform-origin': origin,
        '-ms-transform-origin': origin,
        'transform': 'perspective(350px) rotateX(' + rotation3dX + ')' + 'rotateY(' + rotation3dY + ')' + 'rotateZ(' + rotation3dZ + ')',
      });
    }

    init();
  };

  $('.swifteroo').Swifteroo();

})(jQuery);
