import { Formik, Field, Form, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

const Phonebook = ({ name, number, onChange, onSubmit }) => {
  const initialValue = {
    name: '',
  };
  return (
    <>
      <Formik initialValues={initialValue} onSubmit={onSubmit}>
        <Form>
          <label>
            Name{' '}
            <Field
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              autoComplete="off"
              onChange={onChange}
              name="name"
              value={name}
            />
          </label>
          <ErrorMessage name="name" />
          <label>
            Number{' '}
            <Field
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              autoComplete="off"
              onChange={onChange}
              name="number"
              value={number}
            />
          </label>
          <ErrorMessage name="number" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};

export default Phonebook;

Phonebook.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
