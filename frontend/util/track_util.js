const fetchTracks = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/tracks'
  });
};

export default fetchTracks;
