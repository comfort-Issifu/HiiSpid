import { User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { Input } from "./Input";
import { Label } from "./Label";

function CustomerInfoForm({formData, onHandleInputChange}) {
    return (
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
                onChange={(e) => onHandleInputChange("firstName", e.target.value)}
                required
                className="border-zinc-200"
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => onHandleInputChange("lastName", e.target.value)}
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
                onChange={(e) => onHandleInputChange("email", e.target.value)}
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
                onChange={(e) => onHandleInputChange("phone", e.target.value)}
                required
                className="border-zinc-200"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    );
}

export default CustomerInfoForm
