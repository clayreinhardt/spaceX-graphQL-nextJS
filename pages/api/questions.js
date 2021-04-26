export default (req, res) => {
  const questions = [
    {
      id: '81614',
      likes: '29',
      replies: '11',
      views: '2.7k',
      author: {
        name: 'Clay Reinhardt',
        imageUrl:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        href: '#',
      },
      date: 'April 26 at 11:43 AM',
      datetime: '2021-04-26T11:43:00',
      href: 'https://www.spacex.com/human-spaceflight/mars',
      title: 'Do you think we will ever get humans to Mars?',
      body:
        `\n          <p>\n            Musk said in January 2020 he plans to send 1 million people to Mars by 2050. This involves building 1,000 Starship rockets over 10 years — that's 100 Starships every year — and launching an average of three Starships per day.\n          </p>\n        `,
    },
    // More questions...
  ]
  res.status(200).json(questions)
}
