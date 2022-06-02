const data = [
  {
    title: 'name1',
    movieUrl: 'https://1.ntflx.com',
    image: '1.png',
    genre: 'documentary',
    releaseDate: '2019',
    overview: 'overview1',
    rating: 5.6,
    runtime: '1h 55min'
  },
  {
    title: 'name2',
    movieUrl: 'https://2.ntflx.com',
    image: '2.png',
    genre: 'comedy',
    releaseDate: '2019',
    overview: 'overview2',
    rating: 5.8,
    runtime: '1h 50min'
  },
  {
    title: 'name3',
    movieUrl: 'https://3.ntflx.com',
    image: '3.png',
    genre: 'horror',
    releaseDate: '2015',
    overview: 'overview3',
    rating: 9.8,
    runtime: '1h 33min'
  },
  {
    title: 'name4',
    movieUrl: 'https://4.ntflx.com',
    image: '4.png',
    genre: 'crime',
    releaseDate: '2020',
    overview: 'overview4',
    rating: 4.8,
    runtime: '1h 44min'
  },
  {
    title: 'name5',
    movieUrl: 'https://5.ntflx.com',
    image: '5.png',
    genre: 'comedy',
    releaseDate: '2021',
    overview: 'overview5',
    rating: 5.8,
    runtime: '1h 15min'
  },
  {
    title: 'name6',
    movieUrl: 'https://6.ntflx.com',
    image: '6.png',
    genre: 'horror',
    releaseDate: '2020',
    overview: 'overview6',
    rating: 6.8,
    runtime: '1h 35min'
  },
  {
    title: 'name7',
    movieUrl: 'https://7.ntflx.com',
    image: '7.png',
    genre: 'documentary',
    releaseDate: '2013',
    overview: 'overview7',
    rating: 6.7,
    runtime: '1h 47min'
  },
  {
    title: 'name8',
    movieUrl: 'https://8.ntflx.com',
    image: '8.png',
    genre: 'documentary',
    releaseDate: '2018',
    overview: 'overview8',
    rating: 8.7,
    runtime: '1h 48min'
  },
  {
    title: 'name9',
    movieUrl: 'https://9.ntflx.com',
    image: '9.png',
    genre: 'horror',
    releaseDate: '2019',
    overview: 'overview9',
    rating: 8.9,
    runtime: '1h 29min'
  },
  {
    title: 'name10',
    movieUrl: 'https://10.ntflx.com',
    image: '10.png',
    genre: 'crime',
    releaseDate: '2010',
    overview: 'overview10',
    rating: 8.0,
    runtime: '1h 20min'
  },
  {
    title: 'name11',
    movieUrl: 'https://11.ntflx.com',
    image: '11.png',
    genre: 'comedy',
    releaseDate: '2011',
    overview: 'overview11',
    rating: 8.1,
    runtime: '1h 21min'
  },
  {
    title: 'name12',
    movieUrl: 'https://12.ntflx.com',
    image: '12.png',
    genre: 'documentary',
    releaseDate: '2012',
    overview: 'overview12',
    rating: 2.91,
    runtime: '1h 22min'
  },
  {
    title: 'name13',
    movieUrl: 'https://13.ntflx.com',
    image: '13.png',
    genre: 'crime',
    releaseDate: '2013',
    overview: 'overview13',
    rating: 3.93,
    runtime: '1h 32min'
  },
  {
    title: 'name14',
    movieUrl: 'https://14.ntflx.com',
    image: '14.png',
    genre: 'comedy',
    releaseDate: '2014',
    overview: 'overview14',
    rating: 4.93,
    runtime: '1h 34min'
  },
  {
    title: 'name15',
    movieUrl: 'https://15.ntflx.com',
    image: '15.png',
    genre: 'documentary',
    releaseDate: '2005',
    overview: 'overview15',
    rating: 5.51,
    runtime: '1h 54min'
  },
  {
    title: 'name16',
    movieUrl: 'https://16.ntflx.com',
    image: '16.png',
    genre: 'horror',
    releaseDate: '2016',
    overview: 'overview16',
    rating: 6.51,
    runtime: '1h 56min'
  },
  {
    title: 'name17',
    movieUrl: 'https://17.ntflx.com',
    image: '17.png',
    genre: 'documentary',
    releaseDate: '2017',
    overview: 'overview17',
    rating: 7.22,
    runtime: '1h 47min'
  },
  {
    title: 'name18',
    movieUrl: 'https://18.ntflx.com',
    image: '18.png',
    genre: 'horror',
    releaseDate: '2018',
    overview: 'overview18',
    rating: 7.28,
    runtime: '1h 48min'
  },
  {
    title: 'name19',
    movieUrl: 'https://19.ntflx.com',
    image: '19.png',
    genre: 'documentary',
    releaseDate: '2019',
    overview: 'overview19',
    rating: 7.19,
    runtime: '1h 39min'
  },
  {
    title: 'name20',
    movieUrl: 'https://20.ntflx.com',
    image: '20.png',
    genre: 'comedy',
    releaseDate: '2020',
    overview: 'overview20',
    rating: 5.20,
    runtime: '1h 20min'
  },
  {
    title: 'name21',
    movieUrl: 'https://21.ntflx.com',
    image: '21.png',
    genre: 'crime',
    releaseDate: '2011',
    overview: 'overview21',
    rating: 6.20,
    runtime: '1h 21min'
  },
  {
    title: 'name22',
    movieUrl: 'https://22.ntflx.com',
    image: '22.png',
    genre: 'horror',
    releaseDate: '2012',
    overview: 'overview22',
    rating: 9.10,
    runtime: '1h 42min'
  },
  {
    title: 'name23',
    movieUrl: 'https://23.ntflx.com',
    image: '23.png',
    genre: 'documentary',
    releaseDate: '2013',
    overview: 'overview23',
    rating: 9.03,
    runtime: '1h 43min'
  },
  {
    title: 'name24',
    movieUrl: 'https://24.ntflx.com',
    image: '24.png',
    genre: 'crime',
    releaseDate: '2014',
    overview: 'overview24',
    rating: 9.45,
    runtime: '1h 34min'
  },
  {
    title: 'name25',
    movieUrl: 'https://25.ntflx.com',
    image: '25.png',
    genre: 'documentary',
    releaseDate: '2015',
    overview: 'overview25',
    rating: 9.33,
    runtime: '1h 15min'
  },
  {
    title: 'name26',
    movieUrl: 'https://26.ntflx.com',
    image: '26.png',
    genre: 'comedy',
    releaseDate: '2005',
    overview: 'overview26',
    rating: 3.66,
    runtime: '1h 26min'
  },
  {
    title: 'name27',
    movieUrl: 'https://27.ntflx.com',
    image: '27.png',
    genre: 'horror',
    releaseDate: '2017',
    overview: 'overview27',
    rating: 7.77,
    runtime: '1h 47min'
  },
  {
    title: 'name28',
    movieUrl: 'https://28.ntflx.com',
    image: '28.png',
    genre: 'documentary',
    releaseDate: '2008',
    overview: 'overview28',
    rating: 8.77,
    runtime: '1h 28min'
  },
  {
    title: 'name29',
    movieUrl: 'https://29.ntflx.com',
    image: '29.png',
    genre: 'horror',
    releaseDate: '2019',
    overview: 'overview29',
    rating: 8.09,
    runtime: '1h 19min'
  },
  {
    title: 'name30',
    movieUrl: 'https://30.ntflx.com',
    image: '30.png',
    genre: 'crime',
    releaseDate: '2010',
    overview: 'overview30',
    rating: 4.30,
    runtime: '1h 31min'
  },
];