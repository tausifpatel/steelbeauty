$(document).ready(function(){

    // ANIMATION ON SCROLL
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeInDown');
    }, {
        offset: '80%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '80%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInUp');
    }, {
        offset: '80%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeInDown');
    }, {
        offset: '80%'
    });

    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeInDown');
    }, {
        offset: '80%'
    });

    $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated fadeInUp');
    }, {
        offset: '80%'
    });

    $('.js--wp-7').waypoint(function(direction) {
        $('.js--wp-7').addClass('animated fadeInUp');
    }, {
        offset: '90%'
    });

    $('.js--wp-8').waypoint(function(direction) {
        $('.js--wp-8').addClass('animated pulse');
    }, {
        offset: '80%'
    });

  // NAVIGATION ON SCROLL
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
         });
       }
     }
  });  
});



// GOOGLE MAP
function initMap() {
    // Styles a map in night mode.
    var myLatLng = {lat: 51.576132, lng:0.066456};

    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 12,
      disableDefaultUI: true,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });

    var image = '../img/gold-marker-big.png';

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
    });
  }



