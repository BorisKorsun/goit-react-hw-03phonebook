import PropTypes from 'prop-types';
import { Item, DeleteBtn } from './Contacts.styled';

const Contacts = ({ contacts, onButtonClick }) => {
  return (
    <>
      <ul>
        {contacts.map(({ name, id, number }) => {
          return (
            <Item key={id}>
              <p>
                {name}: {number}
              </p>
              <DeleteBtn onClick={() => onButtonClick(id)} type="button">
                Delete
              </DeleteBtn>
            </Item>
          );
        })}
      </ul>
    </>
  );
};

export default Contacts;

Contacts.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
