// -----------------Function to display functionality in a popup ---------------------------

function showFunctionality(action) {
    console.log(action + " functionality displayed.");
    alert(action + " functionality will be implemented.");
    
  }
  
  //-------------------- Toggle responsive menu ----------------------------------

  document.getElementById('toggleMenu').addEventListener('click', function() {
    document.getElementById('responsiveMenu').classList.toggle('hidden');
    document.getElementById('toggleMenu').classList.toggle('open');
  });