$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");

    var newInCart = {
      inCart: 1
    };
    $.ajax("/product/" + id, {
      type: "PUT",
      data: newInCart
    }).then(
      function() {
        console.log("changed sleep to", newInCart);
        location.reload();
      }
    );
  });
});
