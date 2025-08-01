import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    console.log("Error in loading");
  }
  //   const { data, error } = await supabase.from("bookings").select("*");
  //   if (error) {
  //     console.error(error);
  //     console.log("Error in loading");
  //   }
  return data;
}

export async function createEditCabin(newCabin, id) {
  //https://ylpvmhncopqdjotlvkyj.supabase.co/storage/v1/object/public/cabin-images//cabin-002.jpg
  //console.log(newCabin, id);

  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  //console.log(imagePath);

  // 1. create/edit cabin
  let query = supabase.from("cabins");
  // create cabin if id not exists
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  //update cabin if exists
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    console.log("Error in creating cabin");
  }
  //2. upload image
  if (imagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  //3. Delete cabin if there is problem in uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error("Cabin image couldn't be uploaded and cabin not created");
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    console.log("Error in delete cabin");
  }
  return data;
}
