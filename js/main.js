$(document).ready(function() {


  // var source = $("card-template").html();
  // var template = Handlebars.compile(source);
  //
  //
  // var templateCompiled = template(myObject);
  // $(".main.active").append(templateCompiled);


  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data) {
      // console.log(data);
      var albums = data.response;
      // console.log(albums);
      for (var i = 0; i < albums.length; i++) {
        var album = {
          image: "",
          titolo: "",
          author: "",
          year: ""
        };


      }
    },
    error: function () {
      alert("Qualcosa è andato storto!");
    }
  });












});
