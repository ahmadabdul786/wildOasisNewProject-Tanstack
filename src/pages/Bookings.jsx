import { createColumnHelper } from "@tanstack/react-table";
import useBookings from "../features/bookings/useBookings";
import BookingsTable from "../features/bookings/BookingsTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Pagination from "../ui/Pagination";
import { Badge, Menu, ActionIcon } from "@mantine/core";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import useCheckIn from "../features/check-in-out/useCheckIn";
import useCheckOut from "../features/check-in-out/useCheckOut";

function Bookings() {
  const columnHelper = createColumnHelper();
  const navigate = useNavigate();
  const { checkin } = useCheckIn();
  const { checkout } = useCheckOut();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "gray",
    active: "green",
  };

  const columns = [
    columnHelper.accessor("cabinId", {
      header: "Cabin",
    }),
    columnHelper.accessor("guestId", {
      header: "Guest",
    }),
    columnHelper.accessor("startDate", {
      header: "Dates",
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (cell) => {
        const status = cell.getValue();

        return (
          <Badge color={statusToTagName[status] || "gray"} variant="light">
            {status}
          </Badge>
        );
      },
    }),
    columnHelper.accessor("totalPrice", {
      header: "Price",
    }),

    // ✅ NEW ACTION COLUMN
    columnHelper.display({
      id: "actions",
      header: "",
      cell: ({ row }) => {
        const booking = row.original;

        return (
          <Menu shadow="md" width={160} position="bottom-end">
            <Menu.Target>
              <ActionIcon variant="subtle">
                <HiEllipsisVertical size={18} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item onClick={() => navigate(`/bookings/${booking.id}`)}>
                See detail
              </Menu.Item>

              {booking.status === "unconfirmed" && (
                <Menu.Item onClick={() => checkin(booking.id)}>
                  Check in
                </Menu.Item>
              )}

              {booking.status === "checked-in" && (
                <Menu.Item onClick={() => checkout(booking.id)}>
                  Check out
                </Menu.Item>
              )}
            </Menu.Dropdown>
          </Menu>
        );
      },
    }),
  ];

  const { bookings, isLoading, count } = useBookings();

  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h1>All bookings</h1>
      <BookingTableOperations />
      <BookingsTable data={bookings} columns={columns} />
      <Pagination count={count} />
    </div>
  );
}

export default Bookings;