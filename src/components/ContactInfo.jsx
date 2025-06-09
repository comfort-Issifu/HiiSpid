import { Clock, MapPin, Phone } from "lucide-react";
import { Card } from "./Card";

function ContactInfo() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visit Us Today
          </h2>
          <p className="text-lg text-gray-600">
            We're open and ready to serve you
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center">
            <MapPin className="h-12 w-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">
              123 Culinary Street
              <br />
              Downtown District
              <br />
              New York, NY 10001
            </p>
          </Card>
          <Card className="p-6 text-center">
            <Clock className="h-12 w-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Hours</h3>
            <p className="text-gray-600">
              Mon-Thu: 5:00 PM - 10:00 PM
              <br />
              Fri-Sat: 5:00 PM - 11:00 PM
              <br />
              Sun: 4:00 PM - 9:00 PM
            </p>
          </Card>
          <Card className="p-6 text-center">
            <Phone className="h-12 w-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="text-gray-600">
              Phone: (+233) 504-9336
              <br />
              Email: info@hiispidlounge
              <br />
              Reservations: (555) 123-4568
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
