import { Star } from "lucide-react";
import { CardContent } from "./Card";

function RatingSammary({ feedbacks }) {
  const averageRating =
    feedbacks.reduce((sum, review) => sum + review.rating, 0) /
    feedbacks.length;

  const ratingDistribution = [5, 4, 3, 2, 1].map((star) => ({
    rating: star,
    count: feedbacks.filter((review) => review.rating === star).length,
    percentage:
      (feedbacks.filter((review) => review.rating === star).length /
        feedbacks.length) *
      100,
  }));

  return (
    <CardContent>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-amber-600 mb-2">
            {averageRating.toFixed(1)}
          </div>
          <div className="flex justify-center mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-5 w-5 ${
                  star <= Math.round(averageRating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="text-gray-600">
            Based on {feedbacks.length} reviews
          </div>
        </div>
        <div className="space-y-2">
          {ratingDistribution.map(({ rating, count, percentage }) => (
            <div key={rating} className="flex items-center gap-2">
              <span className="text-sm w-8">{rating}★</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-amber-600 h-2 rounded-full"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="text-sm w-8 text-gray-600">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  );
}

export default RatingSammary;
