import { useState } from "react";

import { Card, CardHeader, CardTitle } from "../components/Card";
import { useFeedback } from "../contexts/feedback/Feedback.context";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";
import ReviewsCard from "../components/ReviewsCard";
import RatingSammary from "../components/RatingSammary";
import FeedbackFrom from "../components/FeedbackFrom";
import FilterControls from "../components/FilterControls";
import AppLayout from "../components/AppLayout";
import PageHeader from "../components/PageHeader";
import { getSortedReviews } from "../utils";

function Feedback() {
  const { feedbacks, isLoading } = useFeedback();
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage, setReviewsPerPage] = useState(5);
  const [sortBy, setSortBy] = useState("newest");
  const sortedReviews = getSortedReviews(feedbacks, sortBy);
  const totalPages = Math.ceil(sortedReviews.length / reviewsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to reviews section
    document
      .getElementById("reviews-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <AppLayout>
      <PageHeader
        title={" Customer Feedback"}
        description={"Share your experience and read what others are saying"}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <FeedbackFrom />
          </div>

          <div className="lg:col-span-2 space-y-6">
            {/* Rating Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
              </CardHeader>

              {isLoading ? (
                <Spinner />
              ) : (
                <RatingSammary feedbacks={feedbacks} />
              )}
            </Card>

            <FilterControls
              sortBy={sortBy}
              setSortBy={setSortBy}
              setCurrentPage={setCurrentPage}
              reviewsPerPage={reviewsPerPage}
              setReviewsPerPage={setReviewsPerPage}
            />

            {isLoading ? (
              <Spinner />
            ) : (
              <ReviewsCard
                currentPage={currentPage}
                reviewsPerPage={reviewsPerPage}
                sortedReviews={sortedReviews}
              />
            )}
            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                itemsPerPage={reviewsPerPage}
                totalItems={sortedReviews.length}
              />
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Feedback;
