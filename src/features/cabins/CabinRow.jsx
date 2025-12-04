import styled from "styled-components";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
export default function CabinRow({cabin}){
  const {name,maxCapacity,regularPrice,discount,image} = cabin;
  return<tr className="bg-amber-50  grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] items-center gap-1">
    <td>
    <img className=" object-fit  " src={image} />
    </td>
    <td>
    <div className=" justify-self-center ">{name}</div>
</td>
<td>
    <div className=" justify-self-center ">fit upto {maxCapacity} guests</div>
    </td>
    <td>
    <div className=" justify-self-center ">{regularPrice}</div>
    </td>
    <td>
    <div className=" justify-self-center ">{discount}</div>
    </td>
    <td>
    <div className="justify-self-center"><button>delete</button></div>
    </td>
    
  </tr>
}