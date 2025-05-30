import { useState } from "react";
import { Card } from "./Card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "Absolutely amazing food and service! The atmosphere is perfect for a romantic dinner.",
    date: "2 days ago",
  },
  {
    name: "Michael Chen",
    rating: 5,
    comment: "Best restaurant in the city. The chef's special was incredible!",
    date: "1 week ago",
  },
  {
    name: "Emily Davis",
    rating: 4,
    comment: "Great food and friendly staff. Will definitely come back!",
    date: "2 weeks ago",
  },
];

function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-lg text-gray-600">
            Real reviews from real customers
          </p>
        </div>
        <div className="relative">
          <Card className="p-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  )
                )}
              </div>
              <blockquote className="text-xl text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonial].comment}"
              </blockquote>
              <div className="font-semibold text-gray-900">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-gray-500 text-sm">
                {testimonials[currentTestimonial].date}
              </div>
            </div>
          </Card>
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-amber-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
