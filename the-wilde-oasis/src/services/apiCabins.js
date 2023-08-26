import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );

  // https://zrsjfukvwepvkxqccbyc.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2023-08-19T13%3A47%3A17.527Z

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  const { data, error } = await supabase
    .from('cabins')
    .insert([{ ...newCabin, image: imagePath }])
    .select();

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
