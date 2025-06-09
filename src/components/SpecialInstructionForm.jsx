import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { Textarea } from "./Textarea";

function SpecialInstructionForm({ formData, onHandleInputChange }) {
  return (
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
            onHandleInputChange("specialInstructions", e.target.value)
          }
          rows={3}
        />
      </CardContent>
    </Card>
  );
}

export default SpecialInstructionForm
