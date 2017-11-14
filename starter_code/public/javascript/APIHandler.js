class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
   url: this.BASE_URL +"/characters",
   method: "GET",
   success: function(response){
     for (let i = 0; i < response.length; i++) {
       $(".characters-container").append(
            "<div class='character-info'>" +
                "<div class='name'>Name: " + response[i].name + "</div>" +
                "<div class='occupation'>Occupation: " + response[i].occupation + "</div>" +
                "<div class='debt'>Debt: " + response[i].debt + "</div>" +
                "<div class='weapon'>Weapon: " + response[i].weapon + "</div>" +
            "</div>"
          );
        }

     }
     //El error me da error, muy redundante...
    //  error: function (err) {
    //    console.log(err);
  });
 }

  getOneRegister (id) {
    $.ajax({
  url: this.BASE_URL +"/characters"+id,
  method: "GET",
  success: function (response) {
    $('.character-info').remove();
    $(".characters-container").append(
      "<div class='character-info'>" +
          "<div class='name'>Name: " + response.name + "</div>" +
          "<div class='occupation'>Occupation: " + response.occupation + "</div>" +
          "<div class='debt'>Debt: " + response.debt + "</div>" +
          "<div class='weapon'>Weapon: " + response.weapon + "</div>" +
      "</div>"
  );
  },
  error: function (err) {
  console.log(err);
  },
});
}


  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
