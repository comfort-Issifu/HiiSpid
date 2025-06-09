import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "./Button";
import { Card } from "./Card";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="p-4 shadow-lg border-amber-200">
        <div className="flex items-start gap-3">
          <Cookie className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-sm mb-2">We use cookies</h3>
            <p className="text-xs text-gray-600 mb-3">
              We use cookies to enhance your browsing experience and analyze our
              traffic. By clicking "Accept", you consent to our use of cookies.
            </p>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={acceptCookies}
                className="bg-amber-600 hover:bg-amber-700"
              >
                Accept
              </Button>
              <Button size="sm" variant="outline" onClick={declineCookies}>
                Decline
              </Button>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="p-1 h-auto"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
