import Footer from "../components/Footer";
import Header from "../components/Header";

import { useState } from "react";
import { Clock, MapPin, CreditCard, User } from "lucide-react";
import { Button } from "../components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { Textarea } from "../components/Textarea";
import { RadioGroup, RadioGroupItem } from "../components/RadioButton";
import { Checkbox } from "../components/Checkbox";
import ImageCaptcha from "../components/ImageCaptcha";
import toast from "react-hot-toast";

function Order() {
  const [orderType, setOrderType] = useState("delivery");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    specialInstructions: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCaptchaVerify = (isVerified) => {
    setIsCaptchaVerified(isVerified);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if CAPTCHA is verified
    if (!isCaptchaVerified) {
      toast.error(
        "Please complete the security verification before submitting your order.",
      );
      return;
    }

    // Handle order submission
    toast.success(
      "Order submitted successfully! Thank you for choosing Bella Vista.",
    );
  };
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Order Online
            </h1>
            <p className="text-lg text-gray-600">
              Place your order for pickup or delivery
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Order Type Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Order Type
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={orderType} onValueChange={setOrderType}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 p-4 border-zinc-200 border rounded-lg">
                      <RadioGroupItem value="delivery" id="delivery" />
                      <Label
                        htmlFor="delivery"
                        className="flex-1 cursor-pointer"
                      >
                        <div className="font-medium">Delivery</div>
                        <div className="text-sm text-gray-500">
                          45-60 minutes • GH¢ 3.99 delivery fee
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border-zinc-200 border rounded-lg">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup" className="flex-1 cursor-pointer">
                        <div className="font-medium">Pickup</div>
                        <div className="text-sm text-gray-500">
                          20-30 minutes • No additional fees
                        </div>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Customer Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Customer Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      required
                      className="border-zinc-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      required
                      className="border-zinc-200"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                      className="border-zinc-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      required
                      className="border-zinc-200"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Address (only show if delivery is selected) */}
            {orderType === "delivery" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Delivery Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                      required={orderType === "delivery"}
                      className="border-zinc-200"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) =>
                          handleInputChange("city", e.target.value)
                        }
                        required={orderType === "delivery"}
                        className="border-zinc-200"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code *</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) =>
                          handleInputChange("zipCode", e.target.value)
                        }
                        className="border-zinc-200"
                        required={orderType === "delivery"}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Special Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>Special Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  className="border-zinc-200"
                  placeholder="Any special requests or dietary restrictions..."
                  value={formData.specialInstructions}
                  onChange={(e) =>
                    handleInputChange("specialInstructions", e.target.value)
                  }
                  rows={3}
                />
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card">Credit/Debit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash">
                      Cash on {orderType === "delivery" ? "Delivery" : "Pickup"}
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="space-y-4 mt-4 p-4 border-zinc-200 border rounded-lg bg-gray-50">
                    <div>
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={(e) =>
                          handleInputChange("cardNumber", e.target.value)
                        }
                        required={paymentMethod === "card"}
                        className="border-zinc-200"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2">
                        <Label htmlFor="expiryDate">Expiry Date *</Label>
                        <Input
                          id="expiryDate"
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={(e) =>
                            handleInputChange("expiryDate", e.target.value)
                          }
                          required={paymentMethod === "card"}
                          className="border-zinc-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={(e) =>
                            handleInputChange("cvv", e.target.value)
                          }
                          required={paymentMethod === "card"}
                          className="border-zinc-200"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="nameOnCard">Name on Card *</Label>
                      <Input
                        id="nameOnCard"
                        value={formData.nameOnCard}
                        onChange={(e) =>
                          handleInputChange("nameOnCard", e.target.value)
                        }
                        required={paymentMethod === "card"}
                        className="border-zinc-200"
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Image CAPTCHA Security Verification */}
            <Card>
              <CardHeader>
                <CardTitle>Security Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <ImageCaptcha
                  onVerify={handleCaptchaVerify}
                  isRequired={true}
                />
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>GH¢ 45.97</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>GH¢ 3.68</span>
                  </div>
                  {orderType === "delivery" && (
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span>GH¢ 3.99</span>
                    </div>
                  )}
                  <div className="border-zinc-200 border-t pt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-amber-600">
                        GH¢ {orderType === "delivery" ? "53.64" : "49.65"}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Terms and Submit */}
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
                        ? "bg-amber-600 hover:bg-amber-700"
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
                      Please complete the security verification above to place
                      your order.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Order;
