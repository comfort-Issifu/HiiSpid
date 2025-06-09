import { CreditCard } from "lucide-react";

import { Input } from "./Input";
import { Label } from "./Label";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { RadioGroup, RadioGroupItem } from "../components/RadioButton";
import { useState } from "react";

function PaymentMethodForm({ formData, orderType, onHandleInputChange }) {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Payment Method
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
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
                  onHandleInputChange("cardNumber", e.target.value)
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
                    onHandleInputChange("expiryDate", e.target.value)
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
                  onChange={(e) => onHandleInputChange("cvv", e.target.value)}
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
                  onHandleInputChange("nameOnCard", e.target.value)
                }
                required={paymentMethod === "card"}
                className="border-zinc-200"
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default PaymentMethodForm;
