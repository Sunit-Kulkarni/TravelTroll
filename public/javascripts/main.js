$(() => {
//JQUERY STUFF IN HERE

    $.ajax({
        url: "http://localhost:3000/api",
        method:"GET"
    })
    .done((reviews) => {
        console.log(reviews);
        renderReviews(reviews);
    });

    renderReviews = (reviews) => {
        let recentReviews = "";

        reviews.forEach((review) => {
            recentReviews += "<div class='row'>";
            recentReviews += "<div class='col'>";
            recentReviews += review.country;
            recentReviews += "</div></div>";
        });
        $(".top-reviews").append(recentReviews);
    };

    $("#submitReview").click((e) => {
        e.preventDefault();
        $.ajax({url: "http://localhost:3000/api/create",
                method: "POST",
                data: { id: $("#Shareitem").val(), access_token: $("#access_token").val() },
                success:function(result){
          $("#sharelink").html(result);
        }});
    })
});