import { useState } from "react";
import { Label } from "./Label";
import { Input } from "./Input";
import { Button } from "./Button";
import { useParams } from "react-router-dom";

function ReservationForm({ locations }) {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    location: "",
  });


  const location = locations.find((location) => location.id === Number(id));
 
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Reservation:", {
      ...formData,
      location: location.name,
    });
    // Add actual submission logic here
  };

  return (
    <form onSubmit={handleReservationSubmit} className="space-y-4">
      <div>
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          value={location.name}
          disabled
          className="bg-gray-50"
        />
      </div>

      <div>
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          //   onBlur={() => reservationForm.handleBlur("name")}
          //   className={reservationForm.errors.name ? "border-red-500" : ""}
          required
        />
        {/* {reservationForm.errors.name && (
          <p className="text-red-500 text-sm mt-1">
            {reservationForm.errors.name}
          </p>
        )} */}
      </div>

      <div>
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          //   onBlur={() => reservationForm.handleBlur("email")}
          //   className={reservationForm.errors.email ? "border-red-500" : ""}
          required
        />
        {/* {reservationForm.errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {reservationForm.errors.email}
          </p>
        )} */}
      </div>

      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          //   onBlur={() => reservationForm.handleBlur("phone")}
          //   className={reservationForm.errors.phone ? "border-red-500" : ""}
          placeholder="(555) 123-4567"
          required
        />
        {/* {reservationForm.errors.phone && (
          <p className="text-red-500 text-sm mt-1">
            {reservationForm.errors.phone}
          </p>
        )} */}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="date">Date *</Label>
          <Input
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => handleInputChange("date", e.target.value)}
            // onBlur={() => reservationForm.handleBlur("date")}
            // className={reservationForm.errors.date ? "border-red-500" : ""}
            min={new Date().toISOString().split("T")[0]}
            required
          />
          {/* {reservationForm.errors.date && (
            <p className="text-red-500 text-sm mt-1">
              {reservationForm.errors.date}
            </p>
          )} */}
        </div>
        <div>
          <Label htmlFor="time">Time *</Label>
          <Input
            id="time"
            type="time"
            value={formData.time}
            onChange={(e) => handleInputChange("time", e.target.value)}
            // onBlur={() => reservationForm.handleBlur("time")}
            // className={reservationForm.errors.time ? "border-red-500" : ""}
            required
          />
          {/* {reservationForm.errors.time && (
            <p className="text-red-500 text-sm mt-1">
              {reservationForm.errors.time}
            </p>
          )} */}
        </div>
      </div>

      <div>
        <Label htmlFor="guests">Number of Guests *</Label>$
        {/* {reservationForm.errors.guests ? "border-red-500" : ""} */}
        <select
          id="guests"
          value={formData.guests}
          onChange={(e) => handleInputChange("guests", e.target.value)}
          //   onBlur={() => reservationForm.handleBlur("guests")}
          className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
             `}
          required
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? "Guest" : "Guests"}
            </option>
          ))}
        </select>
        {/* {reservationForm.errors.guests && (
          <p className="text-red-500 text-sm mt-1">
            {reservationForm.errors.guests}
          </p>
        )} */}
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            // setIsReservationModalOpen(false);
            // reservationForm.resetForm();
          }}
        >
          Cancel
        </Button>
        <Button type="submit" className="bg-amber-600 hover:bg-amber-700">
          Submit Reservation
        </Button>
      </div>
    </form>
  );
}

export default ReservationForm;
