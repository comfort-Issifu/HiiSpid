import { MapPin } from "lucide-react";
import { Card, CardContent } from "./Card";

function Map() {
    return (
      <Card>
        <CardContent className="p-0">
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="h-12 w-12 mx-auto mb-2" />
              <p>Interactive Map</p>
              <p className="text-sm">Click on a location to view on map</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
}

export default Map
