import { useState } from "react";
import { MapPin, Phone, Clock, Star, Navigation } from "lucide-react";
import { Button } from "../components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Badge } from "../components/Badge";
import PageHeader from "../components/PageHeader";
import AppLayout from "../components/AppLayout";

const locations = [
  {
    id: 1,
    name: "Bella Vista Downtown",
    address: "123 Culinary Street, Downtown District, New York, NY 10001",
    phone: "(555) 123-4567",
    hours: {
      Monday: "5:00 PM - 10:00 PM",
      Tuesday: "5:00 PM - 10:00 PM",
      Wednesday: "5:00 PM - 10:00 PM",
      Thursday: "5:00 PM - 10:00 PM",
      Friday: "5:00 PM - 11:00 PM",
      Saturday: "5:00 PM - 11:00 PM",
      Sunday: "4:00 PM - 9:00 PM",
    },
    rating: 4.9,
    reviews: 1247,
    features: ["Valet Parking", "Private Dining", "Wine Cellar", "Live Music"],
    image: "/public/assets/images/Bella-Vista_0000s_0002__62A0851.webp",
    coordinates: { lat: 40.7128, lng: -74.006 },
    description:
      "Our flagship location in the heart of downtown, featuring our full menu and extensive wine collection.",
  },
  {
    id: 2,
    name: "Bella Vista Uptown",
    address: "456 Garden Avenue, Uptown District, New York, NY 10025",
    phone: "(555) 123-4568",
    hours: {
      Monday: "5:00 PM - 10:00 PM",
      Tuesday: "5:00 PM - 10:00 PM",
      Wednesday: "5:00 PM - 10:00 PM",
      Thursday: "5:00 PM - 10:00 PM",
      Friday: "5:00 PM - 11:00 PM",
      Saturday: "5:00 PM - 11:00 PM",
      Sunday: "4:00 PM - 9:00 PM",
    },
    rating: 4.7,
    reviews: 892,
    features: ["Outdoor Seating", "Family Friendly", "Brunch Menu", "Takeout"],
    image: "/public/assets/images/Bella-Vista_0000s_0002__62A0851.webp",
    coordinates: { lat: 40.7831, lng: -73.9712 },
    description:
      "A cozy neighborhood location with a beautiful garden terrace and family-friendly atmosphere.",
  },
  {
    id: 3,
    name: "Bella Vista Waterfront",
    address: "789 Harbor View, Waterfront District, New York, NY 10004",
    phone: "(555) 123-4569",
    hours: {
      Monday: "5:00 PM - 10:00 PM",
      Tuesday: "5:00 PM - 10:00 PM",
      Wednesday: "5:00 PM - 10:00 PM",
      Thursday: "5:00 PM - 10:00 PM",
      Friday: "5:00 PM - 11:00 PM",
      Saturday: "5:00 PM - 11:00 PM",
      Sunday: "4:00 PM - 9:00 PM",
    },
    rating: 4.8,
    reviews: 654,
    features: [
      "Ocean View",
      "Seafood Specialties",
      "Sunset Dining",
      "Event Space",
    ],
    image: "/public/assets/images/Bella-Vista_0000s_0002__62A0851.webp",
    coordinates: { lat: 40.7074, lng: -74.0113 },
    description:
      "Stunning waterfront views with a focus on fresh seafood and romantic sunset dining.",
  },
];

function Location() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const getCurrentDay = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[new Date().getDay()];
  };

  const isOpenNow = (hours) => {
    const currentDay = getCurrentDay();
    const todayHours = hours[currentDay];
    if (!todayHours || todayHours === "Closed") return false;
    // This is a simplified check — you can improve it by parsing actual time strings.
    return true;
  };

  return (
    <AppLayout>
        <PageHeader
          title={"Our Locations"}
          description={"Find a Bella Vista restaurant near you"}
        />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {locations.map((location) => (
                <Card
                  key={location.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedLocation === location.id
                      ? "ring-2 ring-amber-500"
                      : ""
                  }`}
                  onClick={() => setSelectedLocation(location.id)}
                >
                  <div className="flex">
                    <div className="w-32 flex-shrink-0">
                      <img
                        src={location.image}
                        alt={location.name}
                        className="w-full h-full object-cover rounded-l-lg"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">
                          {location.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">
                            {location.rating}
                          </span>
                          <span className="text-sm text-gray-500">
                            ({location.reviews})
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 mb-2">
                        <MapPin className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">
                          {location.address}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600 text-sm">
                          {location.phone}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600 text-sm">
                          {location.hours[getCurrentDay()]}
                        </span>
                        <Badge
                          variant={
                            isOpenNow(location.hours) ? "default" : "secondary"
                          }
                          className={
                            isOpenNow(location.hours) ? "bg-green-500" : ""
                          }
                        >
                          {isOpenNow(location.hours) ? "Open Now" : "Closed"}
                        </Badge>
                      </div>

                      <p className="text-gray-600 text-sm mb-3">
                        {location.description}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {location.features.slice(0, 3).map((feature) => (
                          <Badge
                            key={feature}
                            variant="outline"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                        {location.features.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{location.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">
                        Click on a location to view on map
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {selectedLocation && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {locations.find((l) => l.id === selectedLocation)?.name}
                      <Button
                        size="sm"
                        className="bg-amber-600 hover:bg-amber-700"
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {(() => {
                      const location = locations.find(
                        (l) => l.id === selectedLocation
                      );
                      if (!location) return null;

                      return (
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">
                              Hours of Operation
                            </h4>
                            <div className="space-y-1">
                              {Object.entries(location.hours).map(
                                ([day, hours]) => (
                                  <div
                                    key={day}
                                    className="flex justify-between text-sm"
                                  >
                                    <span
                                      className={
                                        day === getCurrentDay()
                                          ? "font-semibold"
                                          : ""
                                      }
                                    >
                                      {day}
                                    </span>
                                    <span>{hours}</span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">
                              Features & Amenities
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {location.features.map((feature) => (
                                <Badge key={feature} variant="secondary">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button className="flex-1 bg-amber-600 hover:bg-amber-700">
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
              )}

              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-amber-600" />
                      <span>General Inquiries: (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-amber-600" />
                      <span>Reservations: (555) 123-4568</span>
                    </div>
                    <Button variant="outline" className="w-full">
                      Contact Customer Service
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
    </AppLayout>
  );
}

export default Location;
