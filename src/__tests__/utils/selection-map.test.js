import selectionMap from '../../utils/selection-map';

it('selectionMap with legitimate data', () => {
  const series = [
    {
      id: 'series-1x',
      title: 'Tiger King',
      description: 'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
      genre: 'documentaries',
      maturity: '18',
      slug: 'tiger-king',
    },
  ];
  const films = [
    {
      id: 'film-1x',
      title: 'The Prestige',
      description: 'Great film...',
      genre: 'drama',
      maturity: '15',
      slug: 'the-prestige',
    },
  ];

  const slides = selectionMap({ series, films });
  expect(slides.films[0].title).toEqual('Drama');
  expect(slides.films[0].data[0].title).toEqual('The Prestige');
  expect(slides.series[0].title).toEqual('Documentaries');
  expect(slides.series[0].data[0].title).toEqual('Tiger King');
});

it('selectionMap with no data', () => {
  const slides = selectionMap();
  expect(slides.films[0].title).toEqual('Drama');
  expect(slides.series[0].title).toEqual('Documentaries');
  expect(slides.films[0].data).toBe(undefined);
  expect(slides.series[0].data).toBe(undefined);
});
