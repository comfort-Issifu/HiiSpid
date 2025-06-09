import supabase from "./supabase";

export const getLocations = async () => {
  // const { data, error } = await supabase.from("location").select("*");
  const { data, error } = await supabase
    .from("location")
    .select(
      "id, name, address, phone, description, image, hours(monday, tuesday, wednesday, thursday, friday, saturday, sunday), coordinates(latitude, longitude)"
    );

  if (error) {
    throw new Error(
      "Sorry! We couldn’t load the location right now. Please refresh the page or try again later."
    );
  }

  return data;
};

