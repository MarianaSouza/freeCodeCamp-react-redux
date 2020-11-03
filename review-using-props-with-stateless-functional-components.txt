class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper name={"My Camper"}/>
      </div>
    );
  }
};
// Change code below this line
const Camper = (props) => {
  return(
    <p><strong>{props.name}</strong></p>
  )
}

Camper.defaultProps ={
  name: 'CamperBot'
}

Camper.propTypes = {
  name: PropTypes.string.isRequired
}