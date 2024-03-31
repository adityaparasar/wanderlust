const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync= require("../utils/wrapAsync");
const Review= require("../models/review.js");
const Listing= require("../models/listing.js");
const {isLoggedIn,validateReview,isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");


//Reviews
//Post route
router.post("/",isLoggedIn ,validateReview, wrapAsync(reviewController.createreview));

//Delete Review route
router.delete("/:reviewId", isLoggedIn,isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;