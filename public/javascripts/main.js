$(() => {
//JQUERY STUFF IN HERE

    $.ajax({
        url: "http://localhost:5432/api",
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

    //Action for clicking submit review button
    $("#submitReview").click((e) => {
        e.preventDefault();
        $.ajax({url: "http://localhost:5432/api/create",
                method: "POST"
        };
    })
    // .done(() => {
    //     sequelize.sync()
    //     .then(() => User.create({ //Create User
    //         user: $("#submitForm").attr("exampleInputUser") 
    //     }))
    //     .then(() => Review.create({ //Create Review from the User
    //         review: $("#submitForm").attr("exampleInputReview"),
    //         city: $("#submitForm").attr("exampleInputCity"),
    //         country: $("#submitForm").attr("exampleInputCountry"),
    //         rating: $("#submitForm").attr("exampleInputRating")
    //     }))
    // })
});