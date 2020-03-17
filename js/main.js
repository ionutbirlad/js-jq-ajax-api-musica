$(document).ready(function() {

// HANDLEBARS
  var source = $("#card-template").html();
  var template = Handlebars.compile(source);
// HANDLEBARS


  $("#selezione-genere").change(function () {
    var genereSelezionato = $("#selezione-genere").val().toLowerCase();
    // console.log(genereSelezionato);
    if (genereSelezionato == "") {
      $(".card").show();
    } else {
      $(".card").each(function () {
        
      })
    }


  });



// Chiamata AJAX
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function (data) {
      // console.log(data);
      var albums = data.response;
      // console.log(albums);
      for (var i = 0; i < albums.length; i++) {
        var album = {
          image: albums[i].poster,
          titolo: albums[i].title,
          author: albums[i].author,
          year: albums[i].year
        };
      // console.log(album);
      var templateCompiled = template(album);
      $(".cards").append(templateCompiled);

      }
    },
    error: function () {
      alert("Qualcosa è andato storto!");
    }
  });












});
