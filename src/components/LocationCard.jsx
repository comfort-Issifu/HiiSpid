import { Card } from "./Card";

import { MapPin, Phone, Clock, Star, Navigation } from "lucide-react";
import { Badge } from "./Badge";
import { useNavigate } from "react-router-dom";

function LocationCard({
  location,
  getCurrentDay,
  setSelectedLocation,
  selectedLocation,
}) {
  const navigate = useNavigate();
  // const { id } = useParams();
  
  const isOpenNow = (hours) => {
    const currentDay = getCurrentDay();
    const todayHours = hours[currentDay];
    if (!todayHours || todayHours === "Closed") return false;
    // This is a simplified check — you can improve it by parsing actual time strings.
    return true;
  };
  return (
    <Card
      key={location.id}
      className={`cursor-pointer transition-all hover:shadow-lg ${
        selectedLocation === location.id ? "ring-2 ring-amber-500" : ""
      }`}
      onClick={() => {
        navigate(`/locations/${location.id}`);
        setSelectedLocation(location.id);
      }}
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
            <h3 className="text-xl font-semibold">{location.name}</h3>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{location.rating}</span>
              <span className="text-sm text-gray-500">
                ({location.reviews})
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2 mb-2">
            <MapPin className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
            <span className="text-gray-600 text-sm">{location.address}</span>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <Phone className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600 text-sm">{location.phone}</span>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600 text-sm">
              {location.hours[getCurrentDay()]}
            </span>
            <Badge
              variant={isOpenNow(location.hours) ? "default" : "secondary"}
              className={isOpenNow(location.hours) ? "bg-green-500" : ""}
            >
              {isOpenNow(location.hours) ? "Open Now" : "Closed"}
            </Badge>
          </div>

          <p className="text-gray-600 text-sm mb-3">{location.description}</p>

          <div className="flex flex-wrap gap-1">
            {location.features.slice(0, 3).map((feature) => (
              <Badge key={feature} variant="outline" className="text-xs">
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
  );
}

export default LocationCard;
