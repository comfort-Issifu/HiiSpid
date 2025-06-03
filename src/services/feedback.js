import supabase from "./supabase";

const getFeedbacks = async () => {
  const { data, error } = await supabase.from("feedback").select("*");

  if (error) {
    throw new Error(
      "Sorry! We couldn’t load the feedback right now. Please refresh the page or try again later."
    );
  }

  return data;
};

const addFeedbacks = async (feedback) => {
  const { data, error } = await supabase
    .from("feedback")
    .insert([{ ...feedback }])
    .select();

  if (error) {
    if (error.code === "23505" || error.message.includes("duplicate key")) {
      throw new Error(
        "A feedback with this email already exists. Please check or try again."
      );
    } else {
      throw new Error(
        "Oops! We couldn’t save your feedback right now. Please try again in a moment."
      );
    }
  }

  return data;
};

export { getFeedbacks, addFeedbacks };
