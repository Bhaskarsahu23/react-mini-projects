import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  console.log(newCabin, id);

  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = newCabin.image`${Math.random()}-${
    newCabin.image.name
  }`.replaceAll('/', '');

  // https://zrsjfukvwepvkxqccbyc.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2023-08-19T13%3A47%3A17.527Z

  const imagePath = hasImagePath
    ? newCabin?.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // create / edit cabin

  let query = supabase.from('cabins');

  //   A) Create Cabin

  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) edit Cabin

  if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be created');
  }

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);

    throw new Error(
      'Cabin image could not be uploaded and the the cabin was not created'
    );
  }
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be delcted');
  }

  return data;
}
