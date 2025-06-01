import { useState, useEffect, useCallback } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";

// Image CAPTCHA options
const captchaImages = [
  {
    id: "fruits",
    question: "How many fruits do you see?",
    image: "/captcha/fruits.png",
    answer: "5",
  },
  {
    id: "animals",
    question: "How many animals do you see?",
    image: "/captcha/animals.png",
    answer: "4",
  },
  {
    id: "vehicles",
    question: "How many vehicles do you see?",
    image: "/captcha/vehicles.png",
    answer: "5",
  },
  {
    id: "shapes",
    question: "How many circles do you see?",
    image: "/captcha/shapes.png",
    answer: "5",
  },
  {
    id: "food",
    question: "How many food items do you see?",
    image: "/captcha/food.png",
    answer: "5",
  },
  {
    id: "buildings",
    question: "How many buildings do you see?",
    image: "/captcha/buildings.png",
    answer: "6",
  },
];

export default function ImageCaptcha({ onVerify, isRequired = true }) {
  const [captcha, setCaptcha] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");

  // Generate new CAPTCHA on component mount
  useEffect(() => {
    refreshCaptcha();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const refreshCaptcha = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * captchaImages.length);
    setCaptcha(captchaImages[randomIndex]);
    setUserAnswer("");
    setIsVerified(false);
    setError("");
    if (onVerify) {
      onVerify(false);
    }
  });

  const verifyCaptcha = () => {
    if (!captcha) return;

    if (userAnswer.trim().toLowerCase() === captcha.answer.toLowerCase()) {
      setIsVerified(true);
      setError("");
      if (onVerify) {
        onVerify(true);
      }
    } else {
      setIsVerified(false);
      setError("Incorrect answer. Please try again.");
      if (onVerify) {
        onVerify(false);
      }
    }
  };

  verifyCaptcha;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserAnswer(value);
    setError("");

    // Auto-verify when user types
    if (value.trim()) {
      if (value.trim().toLowerCase() === captcha.answer.toLowerCase()) {
        setIsVerified(true);
        if (onVerify) {
          onVerify(true);
        }
      } else {
        setIsVerified(false);
        if (onVerify) {
          onVerify(false);
        }
      }
    }
  };

  if (!captcha) return null;

  return (
    <div className="space-y-3">
      <Label className="text-base font-medium">
        Security Verification {isRequired && "*"}
      </Label>

      {/* CAPTCHA Display */}
      <div className="p-4 bg-gray-50 rounded-lg border">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src={captcha.image || "/placeholder.svg"}
              alt="CAPTCHA verification"
              className="rounded border bg-white p-2 max-w-full h-auto"
              style={{ maxHeight: "150px" }}
            />
          </div>

          {/* Question and Input */}
          <div className="flex-1 space-y-3">
            <div className="font-medium text-gray-800">{captcha.question}</div>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="Your answer"
                value={userAnswer}
                onChange={handleInputChange}
                className={`w-32 ${
                  isVerified
                    ? "border-green-500 bg-green-50"
                    : error
                    ? "border-red-500 bg-red-50"
                    : ""
                }`}
                required={isRequired}
              />
              {isVerified && (
                <span className="text-green-600 text-sm font-medium">
                  ✓ Verified
                </span>
              )}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={refreshCaptcha}
                className="flex items-center gap-1"
              >
                <RefreshCw className="h-4 w-4" />
                New Image
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-600 text-sm">{error}</p>}

      {/* Instructions */}
      <p className="text-gray-500 text-xs">
        Please answer the question about the image above to verify you're human.
      </p>
    </div>
  );
}
