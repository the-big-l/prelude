# This file should contain all the record creation needed to seed the
# database with its default values. The data can then be loaded with the
# rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

test = {artist: 'Ariana Grande', title: 'Dangerous Woman', tracks: [{ url: 'Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F01-ariana_grande-moonlight-a644cff8.mp3', title: 'Moonlight'}]}

albums = [
  {
    artist: 'Ariana Grande',
    title: 'Dangerous Woman',
    tracks: [
      {
        url: 'Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F01-ariana_grande-moonlight-a644cff8.mp3',
        title: 'Moonlight'
      },
      {
        url: 'Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F02-ariana_grande-dangerous_woman-237149a0.mp3',
        title: 'Dangerous Woman'
      },
      {
        url: 'Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F03-ariana_grande-be_alright-d4e8e66f.mp3',
        title: 'Be Alright'
      },
      {
        url: 'Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F04-ariana_grande-into_you-0f7e331c.mp3',
        title: 'Into You'
      },
      {
        url: 'Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F05-ariana_grande-side_to_side_(feat_nicki_minaj)-096a9cfe.mp3',
        title: 'Side To Side'
      },
      {
        url: 'Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F06-ariana_grande-let_me_love_you_(feat_lil_wayne)-0dc67332.mp3',
        title: 'Let Me Love You'
      },
      {
        url: 'Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F07-ariana_grande-greedy-1374d823.mp3',
        title: 'Greedy'
      },
      {
        url: 'Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F08-ariana_grande-leave_me_lonely_(feat_macy_gray)-7cbce66b.mp3',
        title: 'Leave Me Lonely (feat Macy Gray)'
      },
      {
        url: 'Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F09-ariana_grande-everyday_(feat_future)-a9a45e7d.mp3',
        title: 'Everyday (feat Future)'
      },
      {
        url: 'Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F10-ariana_grande-sometimes-d723c47b.mp3',
        title: 'Sometimes'
      },
      {
        url: 'Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F11-ariana_grande-i_dont_care-d7a758e5.mp3',
        title: "I Don't Care"
      },
      {
        url: 'Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F12-ariana_grande-bad_decisions-30b8faf5.mp3',
        title: 'Bad Decisions'
      },
      {
        url: 'Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F13-ariana_grande-touch_it-4810dfba.mp3',
        title: 'Touch It'
      },
      {
        url: 'Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F14-ariana_grande-knew_better__forever_boy-3c3d6ef2.mp3',
        title: 'Knew Better / Forever Boy'
      },
      {
        url: 'Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F15-ariana_grande-thinking_bout_you-e368d683.mp3',
        title: 'Thinking Bout You'
      }
    ]
  },
  {
    artist: 'Drake',
    title: '',
    tracks: [
    ]
  },
  {
    artist: 'Ed Sheeran',
    title: '',
    tracks: [
    ]
  },
  {
    artist: 'Keane',
    title: '',
    tracks: [
    ]
  },
  {
    artist: 'MKTO',
    title: '',
    tracks: [
    ]
  },
  {
    artist: 'Of Monsters And Men',
    title: '',
    tracks: [
    ]
  },
  {
    artist: 'Rebelution',
    title: '',
    tracks: [
    ]
  },
  {
    artist: 'Shakira',
    title: '',
    tracks: [
    ]
  },
  {
    artist: 'Tom Waits',
    title: '',
    tracks: [
    ]
  }
]

albums.each do |seed_album|
  artist = Artist.create(name: seed_album[:artist])
  album = Album.create(artist_id: artist[:id], title: seed_album[:title])
  seed_album[:tracks].each_with_index do |track, idx|
    Track.create(
      title: track[:title],
      track_no: idx,
      album_id: album.id,
      artist_id: artist.id,
      track_url: track[:url]
    )
  end



song_urls = [
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-1%20-%20You%20Are%20Young.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-10%20-%20Day%20Will%20Come.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-11%20-%20In%20Your%20Own%20Time.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-12%20-%20Sea%20Fog.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-2%20-%20Silenced%20by%20the%20Night.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-3%20-%20Disconnected.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-4%20-%20Watch%20How%20You%20Go.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-5%20-%20Sovereign%20Light%20Cafe.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-6%20-%20On%20the%20Road.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-7%20-%20The%20Starting%20Line.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-8%20-%20Black%20Rain.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-9%20-%20Neon%20River.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F01-Keane-Spiralling.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F02-Keane-The_Lovers_Are_Losing.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F03-Keane-Better_Than_This.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F04-Keane-You_Havent_Told_Me_Anything.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F05-Keane-Perfect_Symmetry.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F06-Keane-You_Dont_See_Me.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F07-Keane-Again_And_Again.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F08-Keane-Playing_Along.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F09-Keane-Pretend_That_Youre_Alone.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F10-Keane-Black_Burning_Heart.mp3',
  'https://s3-us-west-1.amazonaws.com/prelude-prd/Keane-Perfect_Symmetry-2008-V0%2F11-Keane-Love_Is_The_End.mp3'
]
