(function () {
  'use strict';

  var navbar = document.querySelector('.navbar');

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
      toastr.success('Hi, You`re currently viewing my Updated CV');
      navbar.classList.remove('offline');
      navbar.classList.add('bg-color');
    }
    else {
      toastr.error('Hi! You`recurrently offline!');
      navbar.classList.remove('bg-color');
      navbar.classList.add('offline');
      
    }
  }
})();