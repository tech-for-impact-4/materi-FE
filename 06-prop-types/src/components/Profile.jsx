import PropTypes from 'prop-types'

function Profile({name, age}) {
  return (
    <>
      <h1>Nama: {name}</h1>
      <h2>umur: {age}</h2>
    </>
  )
}

Profile.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}

export default Profile