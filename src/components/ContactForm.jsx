import { joiResolver } from "@hookform/resolvers/joi";
import { useForm, Controller } from "react-hook-form";

import { contactFormSchema } from "../schema/validation";
import { Label } from "./Label";
import { Input } from "./Input";
import { Button } from "./Button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./select";
import { addReservation } from "../services/apiReservation";
import toast from "react-hot-toast";
import { useState } from "react";
import Spinner from "./Spinner";

function ContactForm({ setIsContactModalOpen }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: joiResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      priority: "low",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("Form submitted:", data);

    try {
      setIsLoading(true);
      await addReservation(data);

      reset();
      setIsContactModalOpen(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-amber-800 mb-2">
          Need Immediate Assistance?
        </h4>
        <p className="text-amber-700 text-sm mb-2">
          For urgent matters, please call us directly:
        </p>
        <a
          href="tel:+15551234567"
          className="text-amber-600 font-semibold hover:text-amber-700 transition-colors"
        >
          (555) 123-4567
        </a>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            {...register("name")}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="Optional"
          />
        </div>

        <div>
          <Label htmlFor="priority">Priority Level *</Label>
          <Controller
            name="priority"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  className={`w-full ${
                    errors.priority ? "border-red-500" : ""
                  }`}
                >
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent className="bg-white border-[#E4E4E7]">
                  <SelectItem value="low">Low - General inquiry</SelectItem>
                  <SelectItem value="normal">
                    Normal - Standard request
                  </SelectItem>
                  <SelectItem value="high">High - Urgent matter</SelectItem>
                  <SelectItem value="critical">Critical - Emergency</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.priority && (
            <p className="text-red-500 text-sm mt-1">
              {errors.priority.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="subject">Subject *</Label>
          <Input
            id="subject"
            {...register("subject")}
            className={errors.subject ? "border-red-500" : ""}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="message">Message *</Label>
          <textarea
            id="message"
            {...register("message")}
            placeholder="Please provide details about your inquiry..."
            rows={4}
            className={`flex w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 resize-none ${
              errors.message ? "border-red-500" : ""
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-800 mb-2">Response Time</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>
              • <strong>Critical:</strong> Within 1 hour
            </li>
            <li>
              • <strong>High:</strong> Within 4 hours
            </li>
            <li>
              • <strong>Normal:</strong> Within 24 hours
            </li>
            <li>
              • <strong>Low:</strong> Within 48 hours
            </li>
          </ul>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              reset();
              setIsContactModalOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button type="submit" className="bg-amber-600 hover:bg-amber-700">
            {isLoading && <Spinner color="white" size="xsmall" />}
            Send Message
          </Button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
