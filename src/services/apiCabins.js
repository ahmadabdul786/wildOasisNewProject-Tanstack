import supabase, { supabaseUrl } from "./supabase"

export default async function getCabins(){
    
let { data, error } = await supabase
  .from('cabins')
  .select('*')
  console.log(data, 'query');
  

if(error){
    console.error(error);
    throw new Error('cabin could not found ');

}
return  data;

}
//create cabin
export async function createCabin(newCabin){

  // const imageName = `${crypto.randomUUID()}-${newCabin.image.name}`;
  // const imageName = `${Date.now()}-${newCabin.image.name}`;
  // https://tmxrivmyvmjtenhoxudm.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
 // https://tmxrivmyvmjtenhoxudm.supabase.co/storage/v1/object/public/cabin-images/cabin-003.jpg
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/','');
  console.log(imageName,newCabin.image.name);
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
const { data, error } = await supabase
  .from('cabins')
  .insert([
    {...newCabin, image:imagePath},
  ])
  .select().single();

 if(error){
    console.error(error);
    throw new Error('cabin could not found ');

}
//here we will upload the image to the supabase storage
const {  error:storageError} = await supabase
  .storage
  .from('cabin-images')
  .upload(imageName, newCabin.image)

//so if there is an error while uploading image we need to delete the cabin entry we just created
if(storageError){
  console.log(storageError)
  const { error } = await supabase
  .from('cabins')
  .delete()
  .eq('user_id', data.id)

  throw new Error('cabin image  could not uploaded ');
}
}
//update cabin
export async function updateCabin( updatedCabin) {

   console.log(updatedCabin, 'updated cabin');
//when we was creating we have an array in update func and here we have just object 
console.log(updatedCabin);
const  hasImage = updatedCabin.image?.name?.startsWith(supabaseUrl);
  const imageName = `${Math.random()}-${updatedCabin.image.name}`.replaceAll('/','');
  const imagePath = hasImage? updatedCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  const { data, error } = await supabase
  .from('cabins')
  .update({...updatedCabin, image:imagePath})
  .eq('user_id', updatedCabin.user_id)
  

 if(error){
    console.error(error);
    throw new Error('cabin could not found ');

}

//here we will upload the image to the supabase storage
if(!hasImage){
const {  error:storageError} = await supabase
  .storage
  .from('cabin-images')
  .upload(imageName, updatedCabin.image)

//so if there is an error while uploading image we need to delete the cabin entry we just created
if(storageError){
  console.log(storageError)
  const { error } = await supabase
  .from('cabins')
  .delete()
  .eq('user_id', data.id)

  throw new Error('cabin image  could not uploaded ');
}
}

}

export  async function deleteCabin(id) {
  const { error } = await supabase
  .from('cabins')
  .delete()
  .eq('user_id', id)

  if(error){
    console.error(error);
    throw new Error('cabin could not found ');

}
}
