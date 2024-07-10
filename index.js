//login page//

document.getElementById("admin").onclick=function(){
    document.getElementById("login-details").style.display="block";
}


document.getElementById("candy").onclick=function(){
    document.getElementById("login-details").style.display="block";
}



document.getElementById("closebtn-1").onclick=function(){
    document.getElementById("login-details").style.display="none";
}



//form//

document.addEventListener("DOMContentLoaded", function() {
    // Initialize multiselect
    var multiselectElements = document.querySelectorAll('.multiselect');
    multiselectElements.forEach(function(element) {
      new bootstrapMultiselect(element);
    });
  
    // Initialize datepicker
    var datepickerElements = document.querySelectorAll('.datepicker');
    datepickerElements.forEach(function(element) {
      new bootstrapDatepicker(element);
    });
  });
