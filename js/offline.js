(function () {
  'use strict';

  var navbar = document.querySelector('.navbar');
  var wifibar = document.getElementById('hidden');

  //After DOM Loaded
  document.addEventListener('DOMContentLoaded', function(event) {
    //On initial load to check connectivity
    if (!navigator.onLine) {
      updateNetworkStatus();
    }

    window.addEventListener('online', updateNetworkStatus, false);
    window.addEventListener('offline', updateNetworkStatus, false);
  });

  //To update network status
  function updateNetworkStatus() {
    if (navigator.onLine) {
      wifibar.className = "hidden";
      navbar.classList.remove('offline');
      navbar.classList.add('bg-color');
    }
    else {
      wifibar.className = "";
      navbar.classList.remove('bg-color');
      navbar.classList.add('offline');
      location.reload();
      
    }
  }
})();