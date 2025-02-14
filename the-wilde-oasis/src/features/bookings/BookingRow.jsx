/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { format, isToday } from 'date-fns';

import Tag from '../../ui/Tag';
import Table from '../../ui/Table';
import ConfirmDelete from '../../ui/ConfirmDelete';

import { formatCurrency } from '../../utils/helpers';
import { formatDistanceFromNow } from '../../utils/helpers';
import Menus from '../../ui/Menus';
import Modal from '../../ui/Modal';
import { HiOutlineEye, HiOutlineDownload } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { HiArrowUpOnSquare, HiOutlineTrash } from 'react-icons/hi2';
import { useCheckout } from '../check-in-out/useCheckout';
import { useDeleteBooking } from './useDeleteBooking';

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
`;

function BookingRow({
  booking: {
    id: bookingId,
    // created_at,
    startDate,
    endDate,
    numNights,
    // numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const { checkout, isCheckingOut } = useCheckout();
  const { isDeleting, deleteBooking } = useDeleteBooking();

  const navigate = useNavigate();

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? 'Today'
            : formatDistanceFromNow(startDate)}{' '}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), 'MMM dd yyyy')} &mdash;{' '}
          {format(new Date(endDate), 'MMM dd yyyy')}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.MenuButton
              onClick={() => navigate(`/bookings/${bookingId}`)}
              icon={<HiOutlineEye />}
            >
              See details
            </Menus.MenuButton>
            {status === 'unconfirmed' && (
              <Menus.MenuButton
                onClick={() => navigate(`/checkin/${bookingId}`)}
                icon={<HiOutlineDownload />}
              >
                Check in
              </Menus.MenuButton>
            )}
            {status === 'checked-in' && (
              <Menus.MenuButton
                disabled={isCheckingOut}
                onClick={() => checkout(bookingId)}
                icon={<HiArrowUpOnSquare />}
              >
                Check out
              </Menus.MenuButton>
            )}

            <Modal.Open opens={'delete'}>
              <Menus.MenuButton disabled={isDeleting} icon={<HiOutlineTrash />}>
                Delete Booking
              </Menus.MenuButton>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>
        <Modal.Window name={'delete'}>
          <ConfirmDelete
            disabled={isDeleting}
            resourceName="booking"
            onConfirm={() => deleteBooking(bookingId)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default BookingRow;
