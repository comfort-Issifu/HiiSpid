import { Card, CardContent, CardHeader, CardTitle } from "./Card";

function OrderSummaryInfor({ orderType }) {
  return (
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
  );
}

export default OrderSummaryInfor;
