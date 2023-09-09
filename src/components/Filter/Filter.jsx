import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

const Filter = ({ filter, onFilterChange }) => {
  const initialValues = { filter: '' };
  return (
    <Formik initialValues={initialValues}>
      <Form>
        <label>
          Find contacts by name{' '}
          <Field
            onChange={onFilterChange}
            value={filter}
            autoComplete="off"
            name="filter"
          />
        </label>
      </Form>
    </Formik>
  );
};

export default Filter;

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,

}