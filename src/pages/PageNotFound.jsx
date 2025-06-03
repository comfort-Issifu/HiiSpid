import { Home, Search, UtensilsCrossed, ArrowLeft } from "lucide-react";
import { Button } from "../components/Button";
import { Card, CardContent } from "../components/Card";
import { Link } from "react-router-dom";

export default function NotFound() {
  // const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="text-9xl font-bold text-amber-600 mb-4">404</div>
          <div className="text-6xl mb-4">🍽️</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Oops! This dish isn't on our menu
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            It looks like the page you're looking for has been moved, deleted,
            or doesn't exist. But don't worry - we have plenty of delicious
            options waiting for you!
          </p>
        </div>
        <div className="flex justify-center gap-6 mb-8">
          <Card className="w-full max-w-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Quick Navigation
              </h2>
              <div className="space-y-3">
                <Button
                  asChild
                  className="w-full bg-amber-600 hover:bg-amber-700"
                  size="lg"
                >
                  <Link to="/">
                    <Home className="h-5 w-5 mr-2" />
                    Back to Home
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full" size="lg">
                  <Link to="/menu">
                    <UtensilsCrossed className="h-5 w-5 mr-2" />
                    Browse Menu
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Go Back
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* You can add another card here if you want side by side */}
        </div>
      </div>
    </div>
  );
}
