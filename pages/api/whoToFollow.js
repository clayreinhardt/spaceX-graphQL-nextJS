export default (req, res) => {
  const whoToFollow = [
    {
      name: 'Hassan Tariq',
      handle: 'hassanmt96',
      href: 'https://github.com/hassanmt96',
      imageUrl:
        'https://avatars.githubusercontent.com/u/66930201?v=4',
    },
    {
      name: 'Hassan Tariq',
      handle: 'hassanmt96',
      href: 'https://github.com/hassanmt96',
      imageUrl:
        'https://avatars.githubusercontent.com/u/66930201?v=4',
    },
    // More people...
  ]
  res.status(200).json(whoToFollow)
}


