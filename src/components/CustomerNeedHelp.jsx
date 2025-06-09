import { Phone } from "lucide-react";

import { Button } from "./Button";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";

function CustomerNeedHelp({onOpenModal}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Need Help?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-amber-600" />
            <span>General Inquiries: (+233) 504-9336</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-amber-600" />
            <span>Reservations: (555) 123-4568</span>
          </div>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => onOpenModal()}
          >
            Contact Customer Service
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default CustomerNeedHelp;
