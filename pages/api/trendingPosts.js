export default (req, res) => {
  const trendingPosts = [
    {
      id: 1,
      user: {
        name: 'Jeff Granof',
        imageUrl:
          'https://avatars.githubusercontent.com/u/16584157?v=4',
      },
      body: 'What books do you have on your bookshelf just to look smarter than you actually are?',
      comments: 291,
    },
    // More posts...
  ]

  res.status(200).json(trendingPosts)
}
