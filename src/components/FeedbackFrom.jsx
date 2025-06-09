import { useState } from "react";
import toast from "react-hot-toast";

import { MessageSquare, Send, Star } from "lucide-react";
import { Card, CardHeader, CardTitle , CardContent} from "./Card";
import { Label } from "./Label";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { RadioGroup, RadioGroupItem } from "./RadioButton";
import { useFeedback } from "../contexts/feedback/Feedback.context";
import { Button } from "./Button";
import Spinner from "./Spinner";


function FeedbackFrom() {
    const [hoveredRating, setHoveredRating] = useState(0);
 const { createFeedback, isButtonloading } =
    useFeedback();
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    visitDate: "",
    comment: "",
    rating,
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

    return (
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
              <Label className="text-base font-medium">Overall Rating *</Label>
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
                onChange={(e) => handleInputChange("name", e.target.value)}
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
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>

            {/* <div>
              <Label htmlFor="location">Location Visited</Label>
              <RadioGroup
                value={formData.location}
                onValueChange={(value) => handleInputChange("location", value)}
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
            </div> */}

            <div>
              <Label htmlFor="visitDate">Visit Date</Label>
              <Input
                className="border-zinc-200"
                id="visitDate"
                type="date"
                value={formData.visitDate}
                onChange={(e) => handleInputChange("visitDate", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="comment">Your Review *</Label>
              <Textarea
                id="comment"
                placeholder="Tell us about your experience..."
                value={formData.comment}
                onChange={(e) => handleInputChange("comment", e.target.value)}
                rows={4}
                required
              />
            </div>

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
    );
}

export default FeedbackFrom
