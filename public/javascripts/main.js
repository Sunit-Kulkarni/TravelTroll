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
                method: "POST"
        };
    })
    .done(() => {
        sequelize.sync()
        .then(() => Review.create({
            user: $("#submitForm").attr("exampleInputUser"),
            city: $("#submitForm").attr("exampleInputCity"),
            country: $("#submitForm").attr("exampleInputCountry"),
            stars: $("#submitForm").attr("exampleInputRating"),
            image: '',
            review: $("#submitForm").attr("exampleInputReview")
        }))
    })
});