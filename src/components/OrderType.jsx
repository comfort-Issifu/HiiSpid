import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { Clock } from "lucide-react";
import { Label } from "./Label";
import { RadioGroup, RadioGroupItem } from "./RadioButton";

function OrderType({ orderType, setOrderType }) {
  return (
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
              <Label htmlFor="delivery" className="flex-1 cursor-pointer">
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
  );
}

export default OrderType;
