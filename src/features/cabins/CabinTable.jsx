import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import getCabins from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;
export default function CabinTable(){
  
  const {data:cabins,error,isLoading} =  useQuery({
    queryKey:['cabin'],
    queryFn:getCabins
   })

  if(isLoading) return <Spinner/>
  return<table className="flex w-full  flex-col  ">
    <thead className="bg-stone-100 flex justify-center">
    <tr className=" w-full " >
      <th className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] items-center gap-1">
        <div>abc</div>
        <div >Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div>abc</div>
      </th>
    </tr>
    </thead>
    <tbody>
    {cabins.map((cabin)=><CabinRow cabin={cabin} key={cabin.id}/>)}
    </tbody>
  </table>
}