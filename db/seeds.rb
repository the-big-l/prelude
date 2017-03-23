# This file should contain all the record creation needed to seed the
# database with its default values. The data can then be loaded with the
# rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'database_cleaner'
# DatabaseCleaner.strategy = :transaction
# DatabaseCleaner.clean

albums = [
  {
    artist: 'Ariana Grande',
    title: 'Dangerous Woman',
    tracks: [
      {
        url: 'https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F01-ariana_grande-moonlight-a644cff8.mp3',
        title: 'Moonlight'
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F02-ariana_grande-dangerous_woman-237149a0.mp3',
        title: 'Dangerous Woman'
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F03-ariana_grande-be_alright-d4e8e66f.mp3',
        title: 'Be Alright'
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F04-ariana_grande-into_you-0f7e331c.mp3',
        title: 'Into You'
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F05-ariana_grande-side_to_side_(feat_nicki_minaj)-096a9cfe.mp3',
        title: 'Side To Side'
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F06-ariana_grande-let_me_love_you_(feat_lil_wayne)-0dc67332.mp3',
        title: 'Let Me Love You'
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F07-ariana_grande-greedy-1374d823.mp3',
        title: 'Greedy'
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F08-ariana_grande-leave_me_lonely_(feat_macy_gray)-7cbce66b.mp3',
        title: 'Leave Me Lonely (feat Macy Gray)'
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F09-ariana_grande-everyday_(feat_future)-a9a45e7d.mp3',
        title: 'Everyday (feat Future)'
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F10-ariana_grande-sometimes-d723c47b.mp3',
        title: 'Sometimes'
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F11-ariana_grande-i_dont_care-d7a758e5.mp3',
        title: "I Don't Care"
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F12-ariana_grande-bad_decisions-30b8faf5.mp3',
        title: 'Bad Decisions'
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F13-ariana_grande-touch_it-4810dfba.mp3',
        title: 'Touch It'
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F14-ariana_grande-knew_better__forever_boy-3c3d6ef2.mp3',
        title: 'Knew Better / Forever Boy'
      },
      {
        url: 'https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ariana_Grande-Dangerous_Woman-BONUS_TRACKS-WEB-2016-ENTiTLED%2F15-ariana_grande-thinking_bout_you-e368d683.mp3',
        title: 'Thinking Bout You'
      }
    ]
  },
  {
    artist: 'Drake',
    title: 'Views',
    tracks: [
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Drake%20-%20Views%2F01.Keep%20the%20Family%20Close.mp3",
        title: "Keep the Family Close"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Drake%20-%20Views%2F02.9.mp3",
        title: "9"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Drake%20-%20Views%2F03.U%20With%20Me.mp3",
        title: "U With Me?"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Drake%20-%20Views%2F04.Feel%20No%20Ways.mp3",
        title: "Feel No Ways"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Drake%20-%20Views%2F05.Hype.mp3",
        title: "Hype"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Drake%20-%20Views%2F06.Weston%20Road%20Flows.mp3",
        title: "Weston Road Flows"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Drake%20-%20Views%2F07.Redemption.mp3",
        title: "Redemption"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Drake%20-%20Views%2F08.With%20You%20(feat.%20PARTYNEXTDOOR).mp3",
        title: "With You (feat. PARTYNEXTDOOR)"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Drake%20-%20Views%2F09.Faithful%20(feat.%20Pimp%20C%20%26%20dvsn).mp3",
        title: "Faithful (feat. Pimp C & dvsn)"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Drake%20-%20Views%2F10.Still%20Here.mp3",
        title: "Still Here"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Drake%20-%20Views%2F11.Controlla.mp3",
        title: "Controlla"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Drake%20-%20Views%2F12.One%20Dance%20(feat.%20Wizkid%20%26%20Kyla).mp3",
        title: "One Dance (feat. Wizkid & Kyla)"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Drake%20-%20Views%2F13.Grammys%20(feat.%20Future).mp3",
        title: "Grammys (feat. Future)"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Drake%20-%20Views%2F14.Childs%20Play.mp3",
        title: "Childs Play"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Drake%20-%20Views%2F15.Pop%20Style.mp3",
        title: "Pop Style"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Drake%20-%20Views%2F16.Too%20Good%20(feat.%20Rihanna).mp3",
        title: "Too Good (feat. Rihanna)"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Drake%20-%20Views%2F17.Summers%20Over%20Interlude.mp3",
        title: "Summers Over Interlude"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Drake%20-%20Views%2F18.Fire%20%26%20Desire.mp3",
        title: "Fire & Desire"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Drake%20-%20Views%2F19.Views.mp3",
        title: "Views"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Drake%20-%20Views%2F20.Hotline%20Bling.mp3",
        title: "Hotline Bling"
      }
    ]
  },
  {
    artist: 'Ed Sheeran',
    title: 'Divide',
    tracks: [
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ed%20Sheeran%20-%20(2017)%20-%20Divide%20(Deluxe%20Edition)%20-%20%5BReQ%5D%2F01.%20Eraser.mp3",
        title: "Eraser"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ed%20Sheeran%20-%20(2017)%20-%20Divide%20(Deluxe%20Edition)%20-%20%5BReQ%5D%2F02.%20Castle%20On%20The%20Hill.mp3",
        title: "Castle On The Hill"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ed%20Sheeran%20-%20(2017)%20-%20Divide%20(Deluxe%20Edition)%20-%20%5BReQ%5D%2F03.%20Dive.mp3",
        title: "Dive"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ed%20Sheeran%20-%20(2017)%20-%20Divide%20(Deluxe%20Edition)%20-%20%5BReQ%5D%2F04.%20Shape%20Of%20You.mp3",
        title: "Shape Of You"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ed%20Sheeran%20-%20(2017)%20-%20Divide%20(Deluxe%20Edition)%20-%20%5BReQ%5D%2F05.%20Perfect.mp3",
        title: "Perfect"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ed%20Sheeran%20-%20(2017)%20-%20Divide%20(Deluxe%20Edition)%20-%20%5BReQ%5D%2F06.%20Galway%20Girl.mp3",
        title: "Galway Girl"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ed%20Sheeran%20-%20(2017)%20-%20Divide%20(Deluxe%20Edition)%20-%20%5BReQ%5D%2F07.%20Happier.mp3",
        title: "Happier"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ed%20Sheeran%20-%20(2017)%20-%20Divide%20(Deluxe%20Edition)%20-%20%5BReQ%5D%2F08.%20New%20Man.mp3",
        title: "New Man"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ed%20Sheeran%20-%20(2017)%20-%20Divide%20(Deluxe%20Edition)%20-%20%5BReQ%5D%2F09.%20Hearts%20Don%27t%20Break%20Around%20Here.mp3",
        title: "Hearts Don't Break Around Here"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ed%20Sheeran%20-%20(2017)%20-%20Divide%20(Deluxe%20Edition)%20-%20%5BReQ%5D%2F10.%20What%20Do%20I%20Know.mp3",
        title: "What Do I Know"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ed%20Sheeran%20-%20(2017)%20-%20Divide%20(Deluxe%20Edition)%20-%20%5BReQ%5D%2F11.%20How%20Would%20You%20Feel%20(Paean).mp3",
        title: "How Would You Feel (Paean)"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ed%20Sheeran%20-%20(2017)%20-%20Divide%20(Deluxe%20Edition)%20-%20%5BReQ%5D%2F12.%20Supermarket%20Flowers.mp3",
        title: "Supermarket Flowers"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ed%20Sheeran%20-%20(2017)%20-%20Divide%20(Deluxe%20Edition)%20-%20%5BReQ%5D%2F13.%20Barcelona.mp3",
        title: "Barcelona"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ed%20Sheeran%20-%20(2017)%20-%20Divide%20(Deluxe%20Edition)%20-%20%5BReQ%5D%2F14.%20Bibia%20Be%20Ye%20Ye.mp3",
        title: "Bibia Be Ye Ye"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ed%20Sheeran%20-%20(2017)%20-%20Divide%20(Deluxe%20Edition)%20-%20%5BReQ%5D%2F15.%20Nancy%20Mulligan.mp3",
        title: "Nancy Mulligan"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Ed%20Sheeran%20-%20(2017)%20-%20Divide%20(Deluxe%20Edition)%20-%20%5BReQ%5D%2F16.%20Save%20Myself.mp3",
        title: "Save Myself"
      }
    ]
  },
  {
    artist: 'Keane',
    title: 'Strangeland',
    tracks: [
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-1%20-%20You%20Are%20Young.mp3",
        title: "You Are Young"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-2%20-%20Silenced%20by%20the%20Night.mp3",
        title: "Day Will Come"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-3%20-%20Disconnected.mp3",
        title: "In Your Own Time"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-4%20-%20Watch%20How%20You%20Go.mp3",
        title: "Sea Fog"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-5%20-%20Sovereign%20Light%20Cafe.mp3",
        title: "Silenced by the Night"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-6%20-%20On%20the%20Road.mp3",
        title: "Disconnected"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-7%20-%20The%20Starting%20Line.mp3",
        title: "Watch How You Go"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-8%20-%20Black%20Rain.mp3",
        title: "Sovereign Light Cafe"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-9%20-%20Neon%20River.mp3",
        title: "On the Road"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-10%20-%20Day%20Will%20Come.mp3",
        title: "The Starting Line"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-11%20-%20In%20Your%20Own%20Time.mp3",
        title: "Black Rain"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Keane%20-%20Strangeland%20%5B2012%2CCD%2CCherrytree%20Records%2CB0016739-02%5D%20-%20V0%2FKeane%20-%20Strangeland%20-%201-12%20-%20Sea%20Fog.mp3",
        title: "Neon River"
      }
    ]
  },
  {
    artist: 'MKTO',
    title: 'MKTO',
    tracks: [
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/MKTO%2F01%20Thank%20You.mp3",
        title: "Thank You"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/MKTO%2F02%20Classic.mp3",
        title: "Classic"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/MKTO%2F03%20God%20Only%20Knows.mp3",
        title: "God Only Knows"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/MKTO%2F04%20American%20Dream.mp3",
        title: "American Dream"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/MKTO%2F05%20Could%20Be%20Me%20(feat.%20Ne-Yo).mp3",
        title: "Could Be Me (feat. Ne-Yo)"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/MKTO%2F06%20Forever%20Until%20Tomorrow.mp3",
        title: "Forever Until Tomorrow"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/MKTO%2F07%20Wasted.mp3",
        title: "Wasted"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/MKTO%2F08%20Heartbreak%20Holiday.mp3",
        title: "Heartbreak Holiday"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/MKTO%2F09%20Nowhere.mp3",
        title: "Nowhere"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/MKTO%2F10%20No%20More%20Second%20Chances%20(feat.%20Jessica%20Ashley).mp3",
        title: "No More Second Chances (feat. Jessica Ashley)"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/MKTO%2F11%20Goodbye%20Song.mp3",
        title: "Goodbye Song"
      }
    ]
  },
  {
    artist: 'Of Monsters And Men',
    title: 'Beneath The Skin (Deluxe)',
    tracks: [
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Of%20Monsters%20And%20Men%20-%20Beneath%20The%20Skin%20(Deluxe)%20(2015)%2F01.Crystals.mp3",
        title: "Crystals"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Of%20Monsters%20And%20Men%20-%20Beneath%20The%20Skin%20(Deluxe)%20(2015)%2F02.Human.mp3",
        title: "Human"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Of%20Monsters%20And%20Men%20-%20Beneath%20The%20Skin%20(Deluxe)%20(2015)%2F03.Hunger.mp3",
        title: "Hunger"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Of%20Monsters%20And%20Men%20-%20Beneath%20The%20Skin%20(Deluxe)%20(2015)%2F04.Wolves%20Without%20Teeth.mp3",
        title: "Wolves Without Teeth"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Of%20Monsters%20And%20Men%20-%20Beneath%20The%20Skin%20(Deluxe)%20(2015)%2F05.Empire.mp3",
        title: "Empire"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Of%20Monsters%20And%20Men%20-%20Beneath%20The%20Skin%20(Deluxe)%20(2015)%2F06.Slow%20Life.mp3",
        title: "Slow Life"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Of%20Monsters%20And%20Men%20-%20Beneath%20The%20Skin%20(Deluxe)%20(2015)%2F07.Organs.mp3",
        title: "Organs"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Of%20Monsters%20And%20Men%20-%20Beneath%20The%20Skin%20(Deluxe)%20(2015)%2F08.Black%20Water.mp3",
        title: "Black Water"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Of%20Monsters%20And%20Men%20-%20Beneath%20The%20Skin%20(Deluxe)%20(2015)%2F09.Thousand%20Eyes.mp3",
        title: "Thousand Eyes"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Of%20Monsters%20And%20Men%20-%20Beneath%20The%20Skin%20(Deluxe)%20(2015)%2F10.I%20Of%20The%20Storm.mp3",
        title: "I Of The Storm"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Of%20Monsters%20And%20Men%20-%20Beneath%20The%20Skin%20(Deluxe)%20(2015)%2F11.We%20Sink.mp3",
        title: "We Sink"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Of%20Monsters%20And%20Men%20-%20Beneath%20The%20Skin%20(Deluxe)%20(2015)%2F12.Backyard.mp3",
        title: "Backyard"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Of%20Monsters%20And%20Men%20-%20Beneath%20The%20Skin%20(Deluxe)%20(2015)%2F13.Winter%20Sound.mp3",
        title: "Winter Sound"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Of%20Monsters%20And%20Men%20-%20Beneath%20The%20Skin%20(Deluxe)%20(2015)%2F14.Black%20Water%20(Chris%20Taylor%20Of%20Grizzly%20Bear%20Remix).mp3",
        title: "Black Water (Chris Taylor Of Grizzly Bear Remix)"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Of%20Monsters%20And%20Men%20-%20Beneath%20The%20Skin%20(Deluxe)%20(2015)%2F15.I%20Of%20The%20Storm%20(Alex%20Somers%20Remix).mp3",
        title: "I Of The Storm (Alex Somers Remix)"
      }
    ]
  },
  {
    artist: 'Rebelution',
    title: 'Live At Red Rocks (2016)',
    tracks: [
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Rebelution%20-%20Live%20At%20Red%20Rocks%20(2016)%20%5B320%5D%2F01.%20intro.mp3",
        title: "intro"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Rebelution%20-%20Live%20At%20Red%20Rocks%20(2016)%20%5B320%5D%2F02.%20De-Stress.mp3",
        title: "De-Stress"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Rebelution%20-%20Live%20At%20Red%20Rocks%20(2016)%20%5B320%5D%2F03.%20Safe%20And%20Sound.mp3",
        title: "Safe And Sound"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Rebelution%20-%20Live%20At%20Red%20Rocks%20(2016)%20%5B320%5D%2F04.%20Reggae%20Roots%20Music.mp3",
        title: "Reggae Roots Music"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Rebelution%20-%20Live%20At%20Red%20Rocks%20(2016)%20%5B320%5D%2F05.%20More%20Love.mp3",
        title: "More Love"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Rebelution%20-%20Live%20At%20Red%20Rocks%20(2016)%20%5B320%5D%2F06.%20Bump.mp3",
        title: "Bump"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Rebelution%20-%20Live%20At%20Red%20Rocks%20(2016)%20%5B320%5D%2F07.%20Attention%20Span.mp3",
        title: "Attention Span"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Rebelution%20-%20Live%20At%20Red%20Rocks%20(2016)%20%5B320%5D%2F08.%20Good%20Vibes.mp3",
        title: "Good Vibes"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Rebelution%20-%20Live%20At%20Red%20Rocks%20(2016)%20%5B320%5D%2F09.%20Green%20To%20Blacl.mp3",
        title: "Green To Blacl"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Rebelution%20-%20Live%20At%20Red%20Rocks%20(2016)%20%5B320%5D%2F10.%20Lazy%20Afternoon.mp3",
        title: "Lazy Afternoon"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Rebelution%20-%20Live%20At%20Red%20Rocks%20(2016)%20%5B320%5D%2F11.%20Count%20Me%20In.mp3",
        title: "Count Me In"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Rebelution%20-%20Live%20At%20Red%20Rocks%20(2016)%20%5B320%5D%2F12.%20Fade%20Away.mp3",
        title: "Fade Away"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Rebelution%20-%20Live%20At%20Red%20Rocks%20(2016)%20%5B320%5D%2F13.%20More%20Than%20Ever.mp3",
        title: "More Than Ever"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Rebelution%20-%20Live%20At%20Red%20Rocks%20(2016)%20%5B320%5D%2F14.%20Comfort%20Zone.mp3",
        title: "Comfort Zone"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Rebelution%20-%20Live%20At%20Red%20Rocks%20(2016)%20%5B320%5D%2F15.%20So%20High.mp3",
        title: "So High"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Rebelution%20-%20Live%20At%20Red%20Rocks%20(2016)%20%5B320%5D%2F16.%20Lost%20In%20Dreams.mp3",
        title: "Lost In Dreams"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Rebelution%20-%20Live%20At%20Red%20Rocks%20(2016)%20%5B320%5D%2F17.%20Suffering.mp3",
        title: "Suffering"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Rebelution%20-%20Live%20At%20Red%20Rocks%20(2016)%20%5B320%5D%2F18.%20Day%20By%20Day.mp3",
        title: "Day By Day"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Rebelution%20-%20Live%20At%20Red%20Rocks%20(2016)%20%5B320%5D%2F19.%20Bright%20Side%20Of%20Life.mp3",
        title: "Bright Side Of Life"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Rebelution%20-%20Live%20At%20Red%20Rocks%20(2016)%20%5B320%5D%2F20.%20Feeling%20Alright.mp3",
        title: "Feeling Alright"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Rebelution%20-%20Live%20At%20Red%20Rocks%20(2016)%20%5B320%5D%2F21.%20Sky%20Is%20The%20Limit.mp3",
        title: "Sky Is The Limit"
      }
    ]
  },
  {
    artist: 'Shakira',
    title: 'Shakira.',
    tracks: [
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Shakira%20-%20Shakira%202014-Felined81-IPT%2F01.%20Dare%20(La%20La%20La).mp3",
        title: "Dare (La La La)"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Shakira%20-%20Shakira%202014-Felined81-IPT%2F01.%20Nunca%20me%20acuerdo%20de%20olvidarte.mp3",
        title: "Nunca me acuerdo de olvidarte"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Shakira%20-%20Shakira%202014-Felined81-IPT%2F02.%20Can%27t%20Remember%20to%20Forget%20You%20(feat.%20Rihanna).mp3",
        title: "Can't Remember to Forget You (feat. Rihanna)"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Shakira%20-%20Shakira%202014-Felined81-IPT%2F03.%20Empire.mp3",
        title: "Empire"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Shakira%20-%20Shakira%202014-Felined81-IPT%2F05.%20Cut%20Me%20Deep%20(feat.%20MAGIC!).mp3",
        title: "Cut Me Deep (feat. MAGIC!)"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Shakira%20-%20Shakira%202014-Felined81-IPT%2F06.%20Spotlight.mp3",
        title: "Spotlight"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Shakira%20-%20Shakira%202014-Felined81-IPT%2F07.%20Broken%20Record.mp3",
        title: "Broken Record"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Shakira%20-%20Shakira%202014-Felined81-IPT%2F08.%20Medicine%20(feat.%20Blake%20Shelton).mp3",
        title: "Medicine (feat. Blake Shelton)"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Shakira%20-%20Shakira%202014-Felined81-IPT%2F09.%2023.mp3",
        title: "23"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Shakira%20-%20Shakira%202014-Felined81-IPT%2F10.%20The%20One%20Thing.mp3",
        title: "The One Thing"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Shakira%20-%20Shakira%202014-Felined81-IPT%2F12.%20Loca%20por%20ti.mp3",
        title: "Loca por ti"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Shakira%20-%20Shakira%202014-Felined81-IPT%2F14.%20Chasing%20Shadows.mp3",
        title: "Chasing Shadows"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Shakira%20-%20Shakira%202014-Felined81-IPT%2F15.%20That%20Way.mp3",
        title: "That Way"
      }
    ]
  },
  {
    artist: 'Tom Waits',
    title: 'Rain Dogs',
    tracks: [
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Tom%20Waits%20-%20Rain%20Dogs%20-%20%5B1985%5D%20-%20%5B320%5D%2F01%20-%20Singapore%20-%20Tom%20Waits.mp3",
        title: "Singapore"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Tom%20Waits%20-%20Rain%20Dogs%20-%20%5B1985%5D%20-%20%5B320%5D%2F02%20-%20Clap%20Hands%20-%20Tom%20Waits.mp3",
        title: "Clap Hands"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Tom%20Waits%20-%20Rain%20Dogs%20-%20%5B1985%5D%20-%20%5B320%5D%2F03%20-%20Cemetery%20Polka%20-%20Tom%20Waits.mp3",
        title: "Cemetery Polka"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Tom%20Waits%20-%20Rain%20Dogs%20-%20%5B1985%5D%20-%20%5B320%5D%2F04%20-%20Jockey%20Full%20Of%20Bourbon%20-%20Tom%20Waits.mp3",
        title: "Jockey Full Of Bourbon"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Tom%20Waits%20-%20Rain%20Dogs%20-%20%5B1985%5D%20-%20%5B320%5D%2F05%20-%20Tango%20Till%20They%27re%20Sore%20-%20Tom%20Waits.mp3",
        title: "Tango Till They're Sore"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Tom%20Waits%20-%20Rain%20Dogs%20-%20%5B1985%5D%20-%20%5B320%5D%2F06%20-%20Big%20Black%20Mariah%20-%20Tom%20Waits.mp3",
        title: "Big Black Mariah"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Tom%20Waits%20-%20Rain%20Dogs%20-%20%5B1985%5D%20-%20%5B320%5D%2F07%20-%20Diamonds%20And%20Gold%20-%20Tom%20Waits.mp3",
        title: "Diamonds And Gold"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Tom%20Waits%20-%20Rain%20Dogs%20-%20%5B1985%5D%20-%20%5B320%5D%2F08%20-%20Hang%20Down%20Your%20Head%20-%20Tom%20Waits.mp3",
        title: "Hang Down Your Head"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Tom%20Waits%20-%20Rain%20Dogs%20-%20%5B1985%5D%20-%20%5B320%5D%2F09%20-%20Time%20-%20Tom%20Waits.mp3",
        title: "Time"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Tom%20Waits%20-%20Rain%20Dogs%20-%20%5B1985%5D%20-%20%5B320%5D%2F10%20-%20Rain%20Dogs%20-%20Tom%20Waits.mp3",
        title: "Rain Dogs"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Tom%20Waits%20-%20Rain%20Dogs%20-%20%5B1985%5D%20-%20%5B320%5D%2F11%20-%20Midtown%20(Instrumental)%20-%20Tom%20Waits.mp3",
        title: "Midtown (Instrumental)"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Tom%20Waits%20-%20Rain%20Dogs%20-%20%5B1985%5D%20-%20%5B320%5D%2F12%20-%209th%20%26%20Hennepin%20-%20Tom%20Waits.mp3",
        title: "9th & Hennepin"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Tom%20Waits%20-%20Rain%20Dogs%20-%20%5B1985%5D%20-%20%5B320%5D%2F13%20-%20Gun%20Street%20Girl%20-%20Tom%20Waits.mp3",
        title: "Gun Street Girl"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Tom%20Waits%20-%20Rain%20Dogs%20-%20%5B1985%5D%20-%20%5B320%5D%2F14%20-%20Union%20Square%20-%20Tom%20Waits.mp3",
        title: "Union Square"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Tom%20Waits%20-%20Rain%20Dogs%20-%20%5B1985%5D%20-%20%5B320%5D%2F15%20-%20Blind%20Love%20-%20Tom%20Waits.mp3",
        title: "Blind Love"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Tom%20Waits%20-%20Rain%20Dogs%20-%20%5B1985%5D%20-%20%5B320%5D%2F16%20-%20Walking%20Spanish%20-%20Tom%20Waits.mp3",
        title: "Walking Spanish"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Tom%20Waits%20-%20Rain%20Dogs%20-%20%5B1985%5D%20-%20%5B320%5D%2F17%20-%20Downtown%20Train%20-%20Tom%20Waits.mp3",
        title: "Downtown Train"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Tom%20Waits%20-%20Rain%20Dogs%20-%20%5B1985%5D%20-%20%5B320%5D%2F18%20-%20Bride%20Of%20Rain%20Dogs%20(Instrumental)%20-%20Tom%20Waits.mp3",
        title: "Bride Of Rain Dogs (Instrumental)"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Tom%20Waits%20-%20Rain%20Dogs%20-%20%5B1985%5D%20-%20%5B320%5D%2F19%20-%20Anywhere%20I%20Lay%20My%20Head%20-%20Tom%20Waits.mp3",
        title: "Anywhere I Lay My Head"
      }
    ]
  },
  {
    artist: 'Aventura',
    title: 'We Broke The Rules',
    tracks: [
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Aventura-We_Broke_The_Rules-SP-2004-SSR%2F01-aventura-obsesion-ssr.mp3",
        title: "Obsesion"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Aventura-We_Broke_The_Rules-SP-2004-SSR%2F02-aventura-i_believe_yo_creo-ssr.mp3",
        title: "I Believe - Yo Creo"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Aventura-We_Broke_The_Rules-SP-2004-SSR%2F03-aventura-todavia_me_amas-ssr.mp3",
        title: "Todavia Me Amas"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Aventura-We_Broke_The_Rules-SP-2004-SSR%2F04-aventura-perdi_el_control-ssr.mp3",
        title: "Perdi El Control"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Aventura-We_Broke_The_Rules-SP-2004-SSR%2F05-aventura-amor_de_madre-ssr.mp3",
        title: "Amor De Madre"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Aventura-We_Broke_The_Rules-SP-2004-SSR%2F06-aventura-gone-ssr.mp3",
        title: "Gone"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Aventura-We_Broke_The_Rules-SP-2004-SSR%2F07-aventura-mi_puerto_rico-ssr.mp3",
        title: "Mi Puerto Rico"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Aventura-We_Broke_The_Rules-SP-2004-SSR%2F08-aventura-ensesame_a_olvidar-ssr.mp3",
        title: "Ensename A Olvidar"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Aventura-We_Broke_The_Rules-SP-2004-SSR%2F09-aventura-9_15_nueve_y_quince-ssr.mp3",
        title: "Nueve Y Quince - 9:15"
      },
      {
        url: "https://s3-us-west-1.amazonaws.com/prelude-prd/music/Aventura-We_Broke_The_Rules-SP-2004-SSR%2F10-aventura-obsesion_(remix_english)-ssr.mp3",
        title: "Obsesion (English Remix)"
      }
    ]
  }
]

albums.each do |seed_album|
  artist = Artist.create(name: seed_album[:artist])
  album = Album.create(artist_id: artist[:id], title: seed_album[:title])
  seed_album[:tracks].each_with_index do |song, idx|
    Song.create(
      title: song[:title],
      track_no: idx + 1,
      album_id: album.id,
      artist_id: artist.id,
      song_url: song[:url]
    )
  end
end

guest = User.create(
  username: 'guest',
  password: 'password',
  first_name: 'John',
  last_name: 'Doe'
)
guest_playlist = Playlist.create(
  name: 'favorites',
  user: guest,
  description: 'all the best tracks'
)

guest_playlist2 = Playlist.create(
  name: 'morning workout',
  user: guest,
  description: 'these will pump you up!!!'
)

song_count = Song.count

40.times do
  PlaylistMember.create(playlist: guest_playlist, song_id: rand(song_count))
end

15.times do
  PlaylistMember.create(playlist: guest_playlist2, song_id: rand(song_count))
end

jane_the_main = User.create(
  username: 'jane_the_main',
  password: 'password',
  first_name: 'Jane',
  last_name: 'Roe'
)
jane_playlist = Playlist.create(
  name: 'relaxing songs',
  user: jane_the_main,
  description: 'all the smoothest tunes'
)

jane_playlist2 = Playlist.create(
  name: 'morning commute',
  user: jane_the_main,
  description: 'spice up your boring ride'
)

song_count = Song.count

40.times do
  PlaylistMember.create(playlist: jane_playlist, song_id: rand(song_count))
end

15.times do
  PlaylistMember.create(playlist: jane_playlist2, song_id: rand(song_count))
end
