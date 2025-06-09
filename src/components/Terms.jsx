
import { Card, CardContent } from "./Card";
import { Label } from "./Label";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";

function Terms({ isCaptchaVerified, orderType }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" required />
            <Label htmlFor="terms" className="text-sm">
              I agree to the Terms of Service and Privacy Policy *
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="marketing" />
            <Label htmlFor="marketing" className="text-sm">
              I would like to receive promotional emails and offers
            </Label>
          </div>
          <Button
            type="submit"
            className={`w-full text-lg py-6 ${
              isCaptchaVerified
                ? "bg-amber-600 hover:bg-amber-700 text-white"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isCaptchaVerified}
          >
            {isCaptchaVerified
              ? `Place Order - 
                  GH¢ ${orderType === "delivery" ? "53.64" : "49.65"}`
              : "Complete Security Verification to Continue"}
          </Button>
          {!isCaptchaVerified && (
            <p className="text-center text-sm text-gray-500">
              Please complete the security verification above to place your
              order.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default Terms;
