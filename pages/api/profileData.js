export default (req, res) => {
const user = {
  name: 'Elon Musk',
  email: 'elon@spacexiscool.com',
  imageUrl:
    'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Popular', href: '#', current: false },
    { name: 'Who To Follow', href: '#', current: false },
    { name: 'Trending', href: '#', current: false },
  ]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const communities = [
  { name: 'Starlink', href: '#' },
  { name: 'SpaceX', href: '#' },
  { name: 'Nasa', href: '#' },
  { name: 'SpaceForce', href: '#' },
  { name: 'Science', href: '#' },
  { name: 'Talents', href: '#' },
  { name: 'Gaming', href: '#' },
]
const tabs = [
  { name: 'Questions', href: '#', current: true },
  { name: 'Rockets', href: '#', current: false },
  { name: 'Missions', href: '#', current: false },
  { name: 'Next Launches', href: '#', current: false },
]
const profileData = {
  user,
  navigation,
  userNavigation,
  communities,
  tabs,
}
  res.status(200).json(profileData)
}
