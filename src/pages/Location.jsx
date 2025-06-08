import { useState } from "react";
import PageHeader from "../components/PageHeader";
import AppLayout from "../components/AppLayout";
import LocationCard from "../components/LocationCard";
import Map from "../components/Map";
import LocationDetails from "../components/LocationDetails";
import CustomerNeedHelp from "../components/CustomerNeedHelp";
import ReservationForm from "../components/ReservationForm";
import Modal from "../components/Modal";
import {
  LocationProvider,
  useLocation,
} from "../contexts/location/Location.context";
import Spinner from "../components/Spinner";


function Location() {
  const { locations, isLoading } = useLocation();
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
        <ReservationForm
          locations={locations}
          onCloseModal={setIsReservationModalOpen}
        />
      </Modal>

      <AppLayout>
        <PageHeader
          title={"Our Locations"}
          description={"Find a HiiSpid Lounge restaurant near you"}
        />

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {isLoading ? (
                <Spinner />
              ) : (
                locations.map((location, key) => (
                  <LocationCard
                    key={key}
                    location={location}
                    getCurrentDay={getCurrentDay}
                    setSelectedLocation={setSelectedLocation}
                    selectedLocation={selectedLocation}
                  />
                ))
              )}
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
