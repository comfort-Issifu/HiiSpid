import { Navigation } from "lucide-react";
import { Button } from "./Button";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { Badge } from "../components/Badge";

function LocationDetails({
  locations,
  selectedLocation,
  getCurrentDay,
  onHandleMakeReservation,
  //   location,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {locations.find((l) => l.id === selectedLocation)?.name}
          <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
            <Navigation className="h-4 w-4 mr-2" />
            Get Directions
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {(() => {
          const location = locations.find((l) => l.id === selectedLocation);
          if (!location) return null;

          return (
            <div className="space-y-4">
              {location.hour && Object.keys(location.hours).length > 0 ? (
                <div>
                  <h4 className="font-semibold mb-2">Hours of Operation</h4>
                  <div className="space-y-1">
                    {Object.entries(location.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between text-sm">
                        <span
                          className={
                            day === getCurrentDay() ? "font-semibold" : ""
                          }
                        >
                          {day}
                        </span>
                        <span>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-500">No hours available.</p>
              )}
              {location.features && location.features.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Features & Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature) => (
                      <Badge key={feature} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button
                  className="flex-1 bg-amber-600 hover:bg-amber-700"
                  onClick={() => onHandleMakeReservation(location)}
                >
                  Make Reservation
                </Button>
                <Button variant="outline" className="flex-1">
                  Order Online
                </Button>
              </div>
            </div>
          );
        })()}
      </CardContent>
    </Card>
  );
}

export default LocationDetails;
