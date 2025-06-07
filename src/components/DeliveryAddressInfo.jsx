import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { Label } from "./Label";
import { Input } from "./Input";

function DeliveryAddressInfo({ formData,  orderType,onHandleInputChange }) {
  return (
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
            onChange={(e) => onHandleInputChange("address", e.target.value)}
            required={orderType === "delivery"}
            className="border-zinc-200"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="location">Location *</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => onHandleInputChange("location", e.target.value)}
              required={orderType === "delivery"}
              className="border-zinc-200"
            />
          </div>
          {/* <div>
            <Label htmlFor="zipCode">ZIP Code *</Label>
            <Input
              id="zipCode"
              value={formData.zipCode}
              onChange={(e) => onHandleInputChange("zipCode", e.target.value)}
              className="border-zinc-200"
              required={orderType === "delivery"}
            />
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
}

export default DeliveryAddressInfo
