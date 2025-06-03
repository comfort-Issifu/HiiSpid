import React, { useState } from "react";
import { Star, MessageSquare, ThumbsUp, Send, User } from "lucide-react";
import { Button } from "../components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { Textarea } from "../components/Textarea";
import { RadioGroup, RadioGroupItem } from "../components/RadioButton";
import { Badge } from "../components/Badge";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useFeedback } from "../contexts/feedback/Feedback.context";
import Spinner from "../components/Spinner";
import { timeAgo } from "../utils";
import toast from "react-hot-toast";

function Feedback() {
  const { feedbacks, createFeedback, isLoading, isButtonloading } =
    useFeedback();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "blog",
    email: "lizzfile90@gmail.com",
    location: "Downtown",
    visitDate: "",
    comment: "wow",
    rating,
    date: `${new Date().toISOString()}`,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }

    const finalFormData = {
      ...formData,
      rating,
    };

    await createFeedback(finalFormData);

    setRating(0);
    setFormData({
      name: "",
      email: "",
      location: "",
      visitDate: "",
      comment: "",
    });
  };

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
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Customer Feedback
            </h1>
            <p className="text-lg text-gray-600">
              Share your experience and read what others are saying
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Leave a Review
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label className="text-base font-medium">
                        Overall Rating *
                      </Label>
                      <div className="flex gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(0)}
                            className="p-1"
                          >
                            <Star
                              className={`h-6 w-6 ${
                                star <= (hoveredRating || rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        className="border-zinc-200"
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        className="border-zinc-200"
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="location">Location Visited</Label>
                      <RadioGroup
                        value={formData.location}
                        onValueChange={(value) =>
                          handleInputChange("location", value)
                        }
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="downtown" id="downtown" />
                          <Label htmlFor="downtown">Downtown</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="uptown" id="uptown" />
                          <Label htmlFor="uptown">Uptown</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="waterfront" id="waterfront" />
                          <Label htmlFor="waterfront">Waterfront</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="visitDate">Visit Date</Label>
                      <Input
                        className="border-zinc-200"
                        id="visitDate"
                        type="date"
                        value={formData.visitDate}
                        onChange={(e) =>
                          handleInputChange("visitDate", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="comment">Your Review *</Label>
                      <Textarea
                        id="comment"
                        placeholder="Tell us about your experience..."
                        value={formData.comment}
                        onChange={(e) =>
                          handleInputChange("comment", e.target.value)
                        }
                        rows={4}
                        required
                      />
                    </div>

                    {/* <div>
                      <Label>Would you recommend us to others?</Label>
                      <RadioGroup
                        value={formData.recommend}
                        onValueChange={(value) =>
                          handleInputChange("recommend", value)
                        }
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="yes" />
                          <Label htmlFor="yes">Yes, definitely</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="maybe" id="maybe" />
                          <Label htmlFor="maybe">Maybe</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="no" />
                          <Label htmlFor="no">No</Label>
                        </div>
                      </RadioGroup>
                    </div> */}

                    <Button
                      type="submit"
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    >
                      {isButtonloading ? (
                        <Spinner size="small" color="white" />
                      ) : (
                        <Send className="h-4 w-4 mr-2 bg" />
                      )}
                      Submit Review
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {isLoading ? (
              <Spinner />
            ) : (
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Reviews</CardTitle>
                  </CardHeader>
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
                        {ratingDistribution.map(
                          ({ rating, count, percentage }) => (
                            <div
                              key={rating}
                              className="flex items-center gap-2"
                            >
                              <span className="text-sm w-8">{rating}★</span>
                              <div className="flex-1 bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-amber-600 h-2 rounded-full"
                                  style={{ width: `${percentage}%` }}
                                />
                              </div>
                              <span className="text-sm w-8 text-gray-600">
                                {count}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  {feedbacks.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                              <User className="h-5 w-5 text-amber-600" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-semibold">
                                  {review.name}
                                </span>
                                {review.verified && (
                                  <Badge
                                    variant="secondary"
                                    className="text-xs"
                                  >
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
                        {/* <div className="flex items-center justify-between">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleHelpful(review.id)}
                            className={
                              helpfulVotes[review.id]
                                ? "text-amber-600"
                                : "text-gray-500"
                            }
                          >
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            Helpful (
                            {review.helpful + (helpfulVotes[review.id] ? 1 : 0)}
                            )
                          </Button>
                        </div> */}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Feedback;
