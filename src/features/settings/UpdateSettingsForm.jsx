import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import useUpdateSetting from "./useUpdateSetting";

function UpdateSettingsForm() {
  
 const {settings:{minBookingLength,maxBookingLength,maxGuestPerBooking,breakfastPrice}={},isLoading} = useSettings();
 const {isUpdating, updateSettingMutation} = useUpdateSetting();
  console.log(isLoading);
  if(isLoading) return <div>...loading</div>
  function  handleUpdate(e, settingName) {
    console.log(e.target.value);
    console.log({[settingName]:Number(e.target.value)})
   
    updateSettingMutation({[settingName]:Number(e.target.value)});


  }
  return (
   <div className="flex justify-center items-center">
   <form className="space-y-6">
      {/* Minimum nights */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="min-nights"
          className="text-sm font-medium text-gray-700"
        >
          Minimum nights / booking
        </label>
        <input
          type="number"
          defaultValue={minBookingLength}
          onBlur={(e)=>handleUpdate(e,'minBookingLength')}
          disabled ={isUpdating}
          id="min-nights"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Maximum nights */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="max-nights"
          className="text-sm font-medium text-gray-700"
        >
          Maximum nights / booking
        </label>
        <input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          onBlur={(e)=>handleUpdate(e,'maxBookingLength')}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Maximum guests */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="max-guests"
          className="text-sm font-medium text-gray-700"
        >
          Maximum guests / booking
        </label>
        <input
          type="number"
          id="max-guests"
          
          defaultValue={maxGuestPerBooking}
          onBlur={(e)=>handleUpdate(e,'maxGuestPerBooking')}

          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Breakfast price */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="breakfast-price"
          className="text-sm font-medium text-gray-700"
        >
          Breakfast price
        </label>
        <input
          type="number"
          id="breakfast-price"
          
          defaultValue={breakfastPrice}
          onBlur={(e)=>handleUpdate(e,'breakfastPrice')}

          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </form>
    </div>
  );
}

export default UpdateSettingsForm;
