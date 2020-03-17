$(document).ready(function() {

  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data) {
      console.log(data);
    },
    error: function () {
      alert("Qualcosa è andato storto!");
    }
  });













});
