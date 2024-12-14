import PropTypes from 'prop-types';

function RenderName ({ breed='chi', ...props }) {
    return <div>Hi {props.name}, {props.age} - {breed}.</div>;
}

RenderName.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    breed: PropTypes.string
};

/*RenderName.defaultProps = {
    breed: 'chi',
}*/

export { RenderName };