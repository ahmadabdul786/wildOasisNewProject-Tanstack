// import styled from "styled-components";

// import Input from "../../ui/Input";
// import Form from "../../ui/Form";
// import Button from "../../ui/Button";
// import FileInput from "../../ui/FileInput";
// import Textarea from "../../ui/Textarea";

// const FormRow = styled.div`
//   display: grid;
//   align-items: center;
//   grid-template-columns: 24rem 1fr 1.2fr;
//   gap: 2.4rem;

//   padding: 1.2rem 0;

//   &:first-child {
//     padding-top: 0;
//   }

//   &:last-child {
//     padding-bottom: 0;
//   }

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }

//   &:has(button) {
//     display: flex;
//     justify-content: flex-end;
//     gap: 1.2rem;
//   }
// `;

// const Label = styled.label`
//   font-weight: 500;
// `;

// const Error = styled.span`
//   font-size: 1.4rem;
//   color: var(--color-red-700);
// `;

// function CreateCabinForm() {
//   return (
//     <Form>
//       <FormRow>
//         <Label htmlFor="name">Cabin name</Label>
//         <Input type="text" id="name" />
//       </FormRow>

//       <FormRow>
//         <Label htmlFor="maxCapacity">Maximum capacity</Label>
//         <Input type="number" id="maxCapacity" />
//       </FormRow>

//       <FormRow>
//         <Label htmlFor="regularPrice">Regular price</Label>
//         <Input type="number" id="regularPrice" />
//       </FormRow>

//       <FormRow>
//         <Label htmlFor="discount">Discount</Label>
//         <Input type="number" id="discount" defaultValue={0} />
//       </FormRow>

//       <FormRow>
//         <Label htmlFor="description">Description for website</Label>
//         <Textarea type="number" id="description" defaultValue="" />
//       </FormRow>

//       <FormRow>
//         <Label htmlFor="image">Cabin photo</Label>
//         <FileInput id="image" accept="image/*" />
//       </FormRow>

//       <FormRow>
//         {/* type is an HTML attribute! */}
//         <Button variation="secondary" type="reset">
//           Cancel
//         </Button>
//         <Button>Edit cabin</Button>
//       </FormRow>
//     </Form>
//   );
// }

// export default CreateCabinForm;

import React from "react";
import { useForm } from "react-hook-form";

import useUpdateCabin from "./useUpdateCabin";
import useCreateCabin from "./useCreateCabin";

function CreateCabinForm({editCabinData = {}, setShowEditForm , setShowForm}) {

  const {isCreating,createCabinMutation} = useCreateCabin();

  const {isUpdating,updateCabinMutation} = useUpdateCabin();
  
    const {user_id:editId}= editCabinData;
    // console.log(editId);
    const isEditSession = Boolean(editId);

   const {register,handleSubmit,reset,getValues,formState} = useForm({
    defaultValues:isEditSession ? editCabinData:{}
   });
   const {errors} = formState;

  //  console.log(errors);
   


  

  

  // Reusable Tailwind classes for consistent styling
  const labelStyles = "text-sm font-medium text-gray-700";
  const inputStyles = "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:bg-gray-50";
  const rowStyles = "grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 py-3 border-b border-gray-100 first:pt-0 last:border-b-0 last:pb-0 has-[button]:flex has-[button]:justify-end has-[button]:gap-3";
   
  function onSubmit(data){
     console.log(data.image[0], 'data image');
     if(isEditSession){
      console.log(data);
      const image = typeof data.image === 'string' ? data.image : data.image[0];
   console.log(image);
       updateCabinMutation({...data, image:image});
     }
    else {
      
       createCabinMutation({...data, image:data.image[0]})
    console.log(data);
    console.log(data.image[0]);
    }

     reset();
   }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[80rem] overflow-hidden rounded-md border border-gray-100 bg-white p-10 text-base">
      
      {/* Cabin Name */}
      <div className={rowStyles}>
        <label htmlFor="name" className={labelStyles}>Cabin name</label>
        <input type="text" id="name" {...register("name",{required:'this field is required'})} className={inputStyles} />
        {errors?.name?.message && <span className="text-sm text-red-600">{errors?.name?.message}</span>}
      </div>

      {/* Max Capacity */}
      {/* 
        //hmain validation ki zrorat hai sb sy pehli chez k koi field khali nae honi chaye
        //jis k lye required property istmal ki phir hmne ye btaya k min value kya honi chaye 
        //or incase k koi error aye to uska message kya show krwana hai */}
        <div className={rowStyles}>
        <label htmlFor="maxCapacity" className={labelStyles}>Maximum capacity</label>
        <input type="number" id="maxCapacity" {...register("maxCapacity",
        
        {
          required:'this field is required',
          min:{value:1,message:'capacity should be atleast 1'}
        })} className={inputStyles} />
        {errors?.maxCapacity?.message && <span className="text-sm text-red-600">{errors?.maxCapacity?.message}</span>}
      </div>

      {/* Regular Price */}
      <div className={rowStyles}>
        <label htmlFor="regularPrice" className={labelStyles}>Regular price</label>
        <input type="number" id="regularPrice" {...register("regularPrice",{required:'this field is required'})} className={inputStyles} />
      {errors?.regularPrice?.message && <span className="text-sm text-red-600">{errors?.regularPrice?.message}</span>}
      </div>

      {/* Discount */}
      {/* yhn validate func istmaal kya k discount ki value regular price sy kam honi chaye  */}
      <div className={rowStyles}>
        <label htmlFor="discount" className={labelStyles}>Discount</label>
        <input type="number" id="discount" defaultValue={0} {...register("discount",
          {required:'this field is required',
            validate:value=>{if(value <= getValues().regularPrice) return true; else return 'discount should be less than regular price'} 
          })}
           className={inputStyles} />
           {errors?.discount?.message && <span className="text-sm text-red-600">{errors?.discount?.message}</span>}
      </div>

      {/* Description */}
      <div className={rowStyles}>
        <label htmlFor="description" className={labelStyles}>Description for website</label>
        <textarea 
          id="description" 
          defaultValue="" 
          rows="3"
          {...register("description",{required:'this field is required'})}
          className={`${inputStyles} resize-none`} 
        />
        {errors?.description?.message && <span className="text-sm text-red-600">{errors?.description?.message}</span>}
      </div>

      {/* File Input */}
      <div className={rowStyles}>
        <label htmlFor="image" className={labelStyles}>Cabin photo</label>
        <input 
          type="file" 
          id="image" 
          accept="image/*" 
          {...register("image",{required: isEditSession? false:'this field is required'})}
          className="text-sm text-gray-600 file:mr-4 file:rounded-sm file:border-0 file:bg-indigo-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-indigo-700"
        />
      </div>

      {/* Action Buttons */}
      <div className={rowStyles}>
        <button 
          onClick={()=>setShowEditForm((prev=>!prev))}
          type="reset" 
          className="rounded-sm border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 shadow-sm"
        >
          Cancel
        </button>
        <button 
          type="submit" 
          className="rounded-sm bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 shadow-sm"
        >
          {isEditSession? 'Edit cabin' : 'Create cabin'}
        </button>
      </div>

    </form>
  );
}

export default CreateCabinForm;