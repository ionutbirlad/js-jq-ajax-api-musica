$(document).ready(function() {


  var source = $("entry-template").html();
  var template = Handlebars.compile(source);


  var templateCompiled = template(myObject);
  $(".main.active").append(templateCompiled);


  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data) {
      // console.log(data);
    },
    error: function () {
      alert("Qualcosa è andato storto!");
    }
  });













});
