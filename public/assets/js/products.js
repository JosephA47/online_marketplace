$(function() {
  $(".add-toCart").on("click", function(event) {
    var id = $(this).data("id");


    var newInCart = {
      inCart: 1
    };

    $.ajax("/products/" + id, {
      type: "PUT",
      data: newInCart,
    }).then(
      function(response) {
        console.log(response)
        location.reload();
      }
    );

    // $.ajax("/products/" + id, {
    //   type: "GET",
    // }).then(
    //   function(response) {
    //     console.log(response)
    //     var priceTotal = $(".totalBox").val()
    //     priceTotal += response.products.price
    //     console.log(priceTotal);
    //   }
    // );
    location.reload();
  });
});
