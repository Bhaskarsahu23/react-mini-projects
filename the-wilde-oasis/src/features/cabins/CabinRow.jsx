/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import { useState } from 'react';
import CreateCabinForm from './CreateCabinForm';
import { useDeleteCabin } from './useDeleteCabin';
import { HiDuplicate } from 'react-icons/hi';
import { HiOutlineTrash } from 'react-icons/hi';
import { HiOutlinePencil } from 'react-icons/hi';
import { useCreateCabin } from './useCreateCabin';

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
  font-family: 'Sono';
`;

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

function CabinRow({ cabin }) {
  const { isCreating, createCabin } = useCreateCabin();
  const [showForm, setShowForm] = useState(false);

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  const { isDeleting, deleteCabin } = useDeleteCabin();

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits upto {maxCapacity}</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <ButtonContainer>
          <Button disabled={isCreating} onClick={handleDuplicate}>
            <HiDuplicate />
          </Button>
          <Button
            disabled={isDeleting}
            onClick={() => setShowForm((show) => !show)}
          >
            <HiOutlinePencil />
          </Button>
          <Button
            variation="danger"
            disabled={isDeleting}
            onClick={() => deleteCabin(cabinId)}
          >
            <HiOutlineTrash />
          </Button>
        </ButtonContainer>
      </TableRow>
      {showForm && (
        <CreateCabinForm
          cabinToEdit={cabin}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      )}
    </>
  );
}
export default CabinRow;
