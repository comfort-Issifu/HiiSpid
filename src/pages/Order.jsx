import { useState } from "react";
import toast from "react-hot-toast";

import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import ImageCaptcha from "../components/ImageCaptcha";
import AppLayout from "../components/AppLayout";
import PageHeader from "../components/PageHeader";
import CustomerInfoForm from "../components/CustomerInfoForm";
import PaymentMethodForm from "../components/PaymentMethodForm";
import OrderSummaryInfor from "../components/OrderSummaryInfor";
import SpecialInstructionForm from "../components/SpecialInstructionForm";
import DeliveryAddressInfo from "../components/DeliveryAddressInfo";
import Terms from "../components/Terms";
import OrderType from "../components/OrderType";

function Order() {
  const [orderType, setOrderType] = useState("delivery");
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
        "Please complete the security verification before submitting your order."
      );
      return;
    }

    // Handle order submission
    toast.success(
      "Order submitted successfully! Thank you for choosing HiiSpid Lounge."
    );
  };
  return (
    <AppLayout>
      <PageHeader
        title={"Order Online"}
        description={" Place your order for pickup or delivery"}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <OrderType orderType={orderType} setOrderType={setOrderType} />

          <CustomerInfoForm
            formData={formData}
            onHandleInputChange={handleInputChange}
          />

          {orderType === "delivery" && (
            <DeliveryAddressInfo
              formData={formData}
              orderType={orderType}
              onHandleInputChange={handleInputChange}
            />
          )}

          <SpecialInstructionForm
            formData={formData}
            onHandleInputChange={handleInputChange}
          />

          <PaymentMethodForm
            formData={formData}
            orderType={orderType}
            onHandleInputChange={handleInputChange}
          />

          {/* Image CAPTCHA Security Verification */}
          <Card>
            <CardHeader>
              <CardTitle>Security Verification</CardTitle>
            </CardHeader>
            <CardContent>
              <ImageCaptcha onVerify={handleCaptchaVerify} isRequired={true} />
            </CardContent>
          </Card>

          <OrderSummaryInfor orderType={orderType} />

          <Terms isCaptchaVerified={isCaptchaVerified} orderType={orderType} />
        </form>
      </div>
    </AppLayout>
  );
}

export default Order;
