import { useState } from "react";
import PageHeader from "../components/PageHeader";
import AppLayout from "../components/AppLayout";
import LocationCard from "../components/LocationCard";
import Map from "../components/Map";
import LocationDetails from "../components/LocationDetails";
import CustomerNeedHelp from "../components/CustomerNeedHelp";
import ReservationForm from "../components/ReservationForm";
import Modal from "../components/Modal";

const locations = [
  {
    id: 1,
    name: "HiiSpid Lounge Downtown",
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
    name: "HiiSpid Lounge Uptown",
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
    name: "HiiSpid Lounge Waterfront",
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
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
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

  const handleMakeReservation = () => {
    // setSelectedLocation(location);
    setIsReservationModalOpen(true);
  };

  return (
    <>
      <Modal
        isOpen={isReservationModalOpen}
        onClose={() => {
          setIsReservationModalOpen(false);
          // reservationForm.resetForm();
        }}
        title="Make a Reservation"
        size="md"
      >
        <ReservationForm locations={locations} />
      </Modal>

      <AppLayout>
        <PageHeader
          title={"Our Locations"}
          description={"Find a HiiSpid Lounge restaurant near you"}
        />

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {locations.map((location, key) => (
                <LocationCard
                  key={key}
                  location={location}
                  getCurrentDay={getCurrentDay}
                  setSelectedLocation={setSelectedLocation}
                  selectedLocation={selectedLocation}
                />
              ))}
            </div>

            <div className="space-y-6">
              <Map />

              {selectedLocation && (
                <LocationDetails
                  locations={locations}
                  selectedLocation={selectedLocation}
                  getCurrentDay={getCurrentDay}
                  onHandleMakeReservation={() =>
                    handleMakeReservation(location)
                  }
                />
              )}

              <CustomerNeedHelp
                onHandleMakeReservation={handleMakeReservation}
                location={location}
              />
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}

export default Location;
