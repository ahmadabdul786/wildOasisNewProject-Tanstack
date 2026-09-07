import { useEffect, useState } from "react";
import BookingDataBox from "../../features/bookings/BookingDataBox";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useGetSingleBooking } from "../bookings/useGetSingleBooking";
import useCheckIn from "./useCheckIn";
import { useSettings } from "../settings/useSettings";
import { formatCurrency } from "../../utils/helpers";

function CheckinBooking() {

  const moveBack = useMoveBack();
  const { booking, isLoading } = useGetSingleBooking();
  const { checkin, isCheckingIn } = useCheckIn();
  const {settings , isLoading: isSettingLoading} = useSettings();

  const [confirmedPaid, setConfirmedPaid] = useState(false);
  const [addBreakFast,setaddBreakFast] = useState(false);

  
  const {breakfastPrice} = settings || {};

  useEffect(()=>{
    setConfirmedPaid(booking?.isPaid ?? false);
  },[booking])

console.log(booking,settings);
  const { id: bookingId, guests, totalPrice, isPaid, numGuests, numNights,hasBreakfast} = booking || {};

  // // ✅ auto-check if already paid
  // const finalConfirmedPaid = isPaid ? true : confirmedPaid;
const optionalBreakFastPrice = settings?.breakfastPrice * numGuests * numNights;
  function handleCheckin() {
    if (!confirmedPaid) return;
    console.log("Checkin booking", bookingId);
    checkin(bookingId);
  }

  if (isLoading || !booking || isSettingLoading) return <div>Loading...</div>;
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">
          Check in booking #{bookingId}
        </h1>

        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </div>

      <BookingDataBox booking={booking} />

      {/* Checkbox */}
     {
       
      !hasBreakfast &&<div className="flex items-center gap-3 mt-6 p-4 border border-gray-200 rounded-md bg-gray-50">
          <input
            type="checkbox"
            id="addBreakfast"
            checked={addBreakFast}
            onChange={() =>{
              setaddBreakFast((add)=> !add)
              setConfirmedPaid(false)
            } }
            className="h-5 w-5 cursor-pointer"
            // disabled={isPaid}
          />

          <label htmlFor="addBreakfast" className="text-gray-700">
            <span> want to add breakfast for {formatCurrency(optionalBreakFastPrice)}
          </span>
          </label>
        </div>
     }

        <div className="flex items-center gap-3 mt-6 p-4 border border-gray-200 rounded-md bg-gray-50">
          <input
            type="checkbox"
            id="confirmPaid"
            checked={confirmedPaid}
            onChange={(e) => setConfirmedPaid(e.target.checked)}
            className="h-5 w-5 cursor-pointer"
            disabled={confirmedPaid}
          />

          <label htmlFor="confirmPaid" className="text-gray-700">
            I confirm that{" "}
            <span className="font-semibold">{guests.fullName}</span> has paid the
            total amount <span className="font-semibold"> {!addBreakFast ?  formatCurrency(totalPrice) : ` ${formatCurrency(totalPrice + optionalBreakFastPrice)} (${formatCurrency(totalPrice)} + ${formatCurrency(optionalBreakFastPrice)})`}</span>
          </label>
        </div>
    

      {/* Buttons */}
      <div className="flex justify-end gap-3 mr-6 p-3 mt-6">
        <Button onClick={handleCheckin} disabled={!confirmedPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </div>
    </>
  );
}

export default CheckinBooking;