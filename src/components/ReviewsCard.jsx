import { Badge, Star, User } from "lucide-react";
import { timeAgo } from "../utils";
import { Card, CardContent } from "./Card";

function ReviewsCard({ currentPage, reviewsPerPage, sortedReviews }) {
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = sortedReviews.slice(startIndex, endIndex);

  return (
    <div className="space-y-4">
      {currentReviews.map((review) => (
        <Card key={review.id}>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{review.name}</span>
                    {review.verified && (
                      <Badge variant="secondary" className="text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    {review.location} • {timeAgo(review.date)}
                  </div>
                </div>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-4">{review.comment}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ReviewsCard;
