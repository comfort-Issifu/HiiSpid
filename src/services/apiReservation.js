import supabase from "./supabase";

export const addReservation = async (reservation) => {
  const { data, error } = await supabase
    .from("reservations")
    .insert([{ ...reservation }])
    .select();

  if (error) {
    console.log(error);
    throw new Error(
      "Sorry, we couldn't process your reservation at the moment. Please try again or contact support."
    );
  }

  return data;
};
