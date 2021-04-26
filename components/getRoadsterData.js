import { gql } from '@apollo/client'

const getRoadsterData = gql`
{
  roadster {
    name
    norad_id
    apoapsis_au
    details
    earth_distance_mi
    earth_distance_km
    eccentricity
    epoch_jd
    inclination
    launch_date_utc
    launch_date_unix
    launch_mass_kg
    launch_mass_lbs
    longitude
    mars_distance_km
    mars_distance_mi
    periapsis_arg
    periapsis_au
    period_days
    semi_major_axis_au
    speed_kph
    speed_mph
    wikipedia
  }
}
`

export default getRoadsterData
