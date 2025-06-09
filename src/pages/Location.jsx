import { useState } from "react";

import { useLocation } from "../contexts/location/Location.context";
import PageHeader from "../components/PageHeader";
import AppLayout from "../components/AppLayout";
import LocationCard from "../components/LocationCard";
import Map from "../components/Map";
import LocationDetails from "../components/LocationDetails";
import CustomerNeedHelp from "../components/CustomerNeedHelp";
import ReservationForm from "../components/ReservationForm";
import Modal from "../components/Modal";
import Spinner from "../components/Spinner";
import ContactForm from "../components/ContactForm";

function Location() {
  const { locations, isLoading } = useLocation();
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
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
    setIsReservationModalOpen(true);
  };
  const handleCustomerNeedHelp = () => {
    setIsContactModalOpen(true);
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

      <Modal
        isOpen={isContactModalOpen}
        onClose={() => {
          setIsContactModalOpen(false);
        }}
        title="Need Immediate Assistance?"
        size="md"
      >
        <ContactForm setIsContactModalOpen={setIsContactModalOpen} />
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
                onOpenModal={handleCustomerNeedHelp}
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
