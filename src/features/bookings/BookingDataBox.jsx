import { format, isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";

import DataItem from "../../ui/DataItem";
import { Flag } from "../../ui/Flag";

import { formatDistanceFromNow, formatCurrency } from "../../utils/helpers";

function BookingDataBox({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: { fullName: guestName, email, country, countryFlag, nationalID },
    cabins: { name: cabinName },
  } = booking;

  return (
    <section className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Header */}
      <header className="bg-indigo-600 px-16 py-8 text-indigo-100 text-[18px] font-medium flex items-center justify-between">
        <div className="flex items-center gap-6 font-semibold text-[18px]">
          <HiOutlineHomeModern className="h-12 w-12" />
          <p>
            {numNights} nights in Cabin{" "}
            <span className="font-sono text-[20px] ml-1">{cabinName}</span>
          </p>
        </div>

        <p>
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
      </header>

      {/* Section */}
      <section className="px-16 pt-12 pb-4">
        {/* Guest */}
        <div className="flex items-center gap-5 mb-6 text-gray-500">
          {countryFlag && (
            <Flag src={countryFlag} alt={`Flag of ${country}`} />
          )}

          <p className="font-medium text-gray-700">
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
          </p>

          <span>&bull;</span>
          <p>{email}</p>

          <span>&bull;</span>
          <p>National ID {nationalID}</p>
        </div>

        {/* Observations */}
        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label="Observations"
          >
            {observations}
          </DataItem>
        )}

        {/* Breakfast */}
        <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
          {hasBreakfast ? "Yes" : "No"}
        </DataItem>

        {/* Price Box */}
        <div
          className={`flex items-center justify-between px-12 py-6 rounded-md mt-10 
          ${
            isPaid
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          <DataItem icon={<HiOutlineCurrencyDollar />} label="Total price">
            {formatCurrency(totalPrice)}

            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice
              )} breakfast)`}
          </DataItem>

          <p className="uppercase text-[14px] font-semibold">
            {isPaid ? "Paid" : "Will pay at property"}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-16 py-6 text-[12px] text-gray-500 text-right">
        <p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
      </footer>
    </section>
  );
}

export default BookingDataBox;