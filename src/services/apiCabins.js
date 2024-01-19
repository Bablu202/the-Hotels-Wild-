import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("unable to load cabins data");
  }

  return data;
}
export async function createEditCabin(newCabin, id) {
  console.log(newCabin, id);
  const hasImagePath = newCabin?.image?.startsWith?.(supabaseUrl);

  //Default image  Address
  //https://lcbdwqmmcmbjafecnosw.supabase.co/storage/v1/object/public/cabin-images/cabin-005.jpg
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  //both EDIT / CREATE
  let query = supabase.from("cabins");
  //1 - CREATE CABIN if no ID
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  //2- UPDATE CABIN if there is ID
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("unable to update this Cabin data");
  }
  //2 - UPLOAD IMAGE

  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("unable to read the image FILE, cannot create a cabin");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("cabin could not be deleted by this action");
  }

  return data;
}
