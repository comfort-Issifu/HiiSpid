import supabase from "./supabase";

export const addContact = async (data) => {
    const { data:res, error } = await supabase
      .from("contacts")
      .insert([{ ...data }])
      .select();

  if (error) {
    console.log(error);
    ("Sorry, we couldn't process your it at the moment. Please try again or contact support.");
  }

  return res;
};
