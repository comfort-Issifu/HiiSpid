import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { joiResolver } from "@hookform/resolvers/joi";

import { reservationSchema } from "../schema/validation";
import { Label } from "./Label";
import { Input } from "./Input";
import { Button } from "./Button";
import { addReservation } from "../services/apiReservation";
import toast from "react-hot-toast";
import Spinner from "./Spinner";

function ReservationForm({ locations, onCloseModal }) {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const location = locations.find((loc) => loc.id === Number(id));

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: joiResolver(reservationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: 2,
      location: location?.name || "",
    },
  });

  useEffect(() => {
    if (location?.name) {
      setValue("location", location.name);
    }
  }, [location, setValue]);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      console.log(data)
      const response = await addReservation(data);
      toast.success(response.message);
      console.log("Reservation submitted:", response.reservation);

      reset();
      onCloseModal(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="location">Location *</Label>
        <Input
          id="location"
          disabled
          {...register("location")}
          className="bg-gray-50"
        />
        {errors.location && (
          <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="name">Full Name *</Label>
        <Input id="name" {...register("name")} />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email *</Label>
        <Input id="email" type="email" {...register("email")} />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input id="phone" type="tel" {...register("phone")} />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="date">Date *</Label>
          <Input
            id="date"
            type="date"
            {...register("date")}
            min={new Date().toISOString().split("T")[0]}
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="time">Time *</Label>
          <Input id="time" type="time" {...register("time")} />
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="guests">Number of Guests *</Label>
        <select
          id="guests"
          {...register("guests")}
          className="flex h-10 w-full items-center justify-between rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? "Guest" : "Guests"}
            </option>
          ))}
        </select>
        {errors.guests && (
          <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>
        )}
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            reset();
            onCloseModal(false);
          }}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="bg-amber-600 hover:bg-amber-700 text-white"
          disabled={isLoading}
        >
          {isLoading && <Spinner color="white" size="xsmall" />}
          Submit Reservation
        </Button>
      </div>
    </form>
  );
}

export default ReservationForm;
