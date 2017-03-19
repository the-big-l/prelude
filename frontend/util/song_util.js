const fetchSongs = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/songs'
  });
};

export default fetchSongs;
