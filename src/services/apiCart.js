import supabase from "./supabase";

const getMenus = async () => {
  const { data, error } = await supabase.from("menu").select("*");

  if (error) {
    throw new Error("Card could not be loaded");
  }

  return data;
};

export { getMenus };
