import { fromJS } from 'immutable';

export default fromJS({
  search: {
    value: '',
    searching: false
  },
  favorites: {
    data: [],
    pagination: {
      total_count: 0,
      count: 25,
      offset: 0
    }
  },
  results: {
    data: [
      {
        type: 'gif',
        id: 'cLcxtL1z8t8oo',
        slug: 'jump-training-rope-cLcxtL1z8t8oo',
        url: 'https://giphy.com/gifs/jump-training-rope-cLcxtL1z8t8oo',
        bitly_gif_url: 'https://gph.is/1TEeoGs',
        bitly_url: 'https://gph.is/1TEeoGs',
        embed_url: 'https://giphy.com/embed/cLcxtL1z8t8oo',
        username: '',
        source:
          'https://www.reddit.com/r/gifs/comments/4itv7w/dogs_rope_jump_training_in_asia/',
        rating: 'g',
        content_url: '',
        source_tld: 'www.reddit.com',
        source_post_url:
          'https://www.reddit.com/r/gifs/comments/4itv7w/dogs_rope_jump_training_in_asia/',
        is_sticker: 0,
        import_datetime: '2016-05-11 07:50:20',
        trending_datetime: '2016-10-18 00:15:00',
        images: {
          fixed_height_still: {
            url:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/200_s.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '170',
            height: '200'
          },
          original_still: {
            url:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/giphy_s.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '300',
            height: '352'
          },
          fixed_width: {
            url:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/200w.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '200',
            height: '235',
            size: '1554148',
            mp4:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/200w.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '151733',
            webp:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/200w.webp?cid=4647a4e05b339b514f734c5973ec192f',
            webp_size: '823420'
          },
          fixed_height_small_still: {
            url:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/100_s.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '85',
            height: '100'
          },
          fixed_height_downsampled: {
            url:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/200_d.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '170',
            height: '200',
            size: '117154',
            webp:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/200_d.webp?cid=4647a4e05b339b514f734c5973ec192f',
            webp_size: '63056'
          },
          preview: {
            width: '126',
            height: '150',
            mp4:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/giphy-preview.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '41000'
          },
          fixed_height_small: {
            url:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/100.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '85',
            height: '100',
            size: '335804',
            mp4:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/100.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '48305',
            webp:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/100.webp?cid=4647a4e05b339b514f734c5973ec192f',
            webp_size: '209354'
          },
          downsized_still: {
            url:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/giphy-downsized_s.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '213',
            height: '250',
            size: '30808'
          },
          downsized: {
            url:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/giphy-downsized.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '213',
            height: '250',
            size: '1769958'
          },
          downsized_large: {
            url:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/giphy.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '300',
            height: '352',
            size: '3579189'
          },
          fixed_width_small_still: {
            url:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/100w_s.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '100',
            height: '117'
          },
          preview_webp: {
            url:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/giphy-preview.webp?cid=4647a4e05b339b514f734c5973ec192f',
            width: '109',
            height: '128',
            size: '49834'
          },
          fixed_width_still: {
            url:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/200w_s.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '200',
            height: '235'
          },
          fixed_width_small: {
            url:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/100w.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '100',
            height: '117',
            size: '446481',
            mp4:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/100w.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '47014',
            webp:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/100w.webp?cid=4647a4e05b339b514f734c5973ec192f',
            webp_size: '267566'
          },
          downsized_small: {
            width: '213',
            height: '250',
            mp4:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/giphy-downsized-small.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '184401'
          },
          fixed_width_downsampled: {
            url:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/200w_d.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '200',
            height: '235',
            size: '162941',
            webp:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/200w_d.webp?cid=4647a4e05b339b514f734c5973ec192f',
            webp_size: '84874'
          },
          downsized_medium: {
            url:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/giphy.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '300',
            height: '352',
            size: '3579189'
          },
          original: {
            url:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/giphy.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '300',
            height: '352',
            size: '3579189',
            frames: '58',
            mp4:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/giphy.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '555071',
            webp:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/giphy.webp?cid=4647a4e05b339b514f734c5973ec192f',
            webp_size: '1704506'
          },
          fixed_height: {
            url:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/200.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '170',
            height: '200',
            size: '1113531',
            mp4:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/200.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '122051',
            webp:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/200.webp?cid=4647a4e05b339b514f734c5973ec192f',
            webp_size: '611676'
          },
          looping: {
            mp4:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/giphy-loop.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '2262141'
          },
          original_mp4: {
            width: '480',
            height: '562',
            mp4:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/giphy.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '555071'
          },
          preview_gif: {
            url:
              'https://media2.giphy.com/media/cLcxtL1z8t8oo/giphy-preview.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '82',
            height: '96',
            size: '49290'
          },
          '480w_still': {
            url:
              'https://media4.giphy.com/media/cLcxtL1z8t8oo/480w_s.jpg?cid=4647a4e05b339b514f734c5973ec192f',
            width: '480',
            height: '563'
          }
        },
        title: 'dogs jumprope GIF',
        _score: 2500072.8
      },
      {
        type: 'gif',
        id: 'mokQK7oyiR8Sk',
        slug: 'mokQK7oyiR8Sk',
        url: 'https://giphy.com/gifs/mokQK7oyiR8Sk',
        bitly_gif_url: 'https://gph.is/29jbBXC',
        bitly_url: 'https://gph.is/29jbBXC',
        embed_url: 'https://giphy.com/embed/mokQK7oyiR8Sk',
        username: '',
        source: 'https://imgur.com/gallery/7LKQLPM',
        rating: 'g',
        content_url: '',
        source_tld: 'imgur.com',
        source_post_url: 'https://imgur.com/gallery/7LKQLPM',
        is_sticker: 0,
        import_datetime: '2016-07-02 07:38:44',
        trending_datetime: '2018-04-09 17:00:01',
        images: {
          fixed_height_still: {
            url:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/200_s.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '258',
            height: '200'
          },
          original_still: {
            url:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/giphy_s.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '355',
            height: '275'
          },
          fixed_width: {
            url:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/200w.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '200',
            height: '155',
            size: '704798',
            mp4:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/200w.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '69116',
            webp:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/200w.webp?cid=4647a4e05b339b514f734c5973ec192f',
            webp_size: '422452'
          },
          fixed_height_small_still: {
            url:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/100_s.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '129',
            height: '100'
          },
          fixed_height_downsampled: {
            url:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/200_d.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '258',
            height: '200',
            size: '173459',
            webp:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/200_d.webp?cid=4647a4e05b339b514f734c5973ec192f',
            webp_size: '94696'
          },
          preview: {
            width: '150',
            height: '116',
            mp4:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/giphy-preview.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '42532'
          },
          fixed_height_small: {
            url:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/100.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '129',
            height: '100',
            size: '338102',
            mp4:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/100.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '39711',
            webp:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/100.webp?cid=4647a4e05b339b514f734c5973ec192f',
            webp_size: '212226'
          },
          downsized_still: {
            url:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/giphy-downsized_s.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '250',
            height: '193',
            size: '27727'
          },
          downsized: {
            url:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/giphy-downsized.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '250',
            height: '193',
            size: '1063863'
          },
          downsized_large: {
            url:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/giphy.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '355',
            height: '275',
            size: '2085429'
          },
          fixed_width_small_still: {
            url:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/100w_s.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '100',
            height: '77'
          },
          preview_webp: {
            url:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/giphy-preview.webp?cid=4647a4e05b339b514f734c5973ec192f',
            width: '125',
            height: '97',
            size: '49968'
          },
          fixed_width_still: {
            url:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/200w_s.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '200',
            height: '155'
          },
          fixed_width_small: {
            url:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/100w.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '100',
            height: '77',
            size: '210795',
            mp4:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/100w.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '27563',
            webp:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/100w.webp?cid=4647a4e05b339b514f734c5973ec192f',
            webp_size: '136860'
          },
          downsized_small: {
            width: '354',
            height: '274',
            mp4:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/giphy-downsized-small.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '176901'
          },
          fixed_width_downsampled: {
            url:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/200w_d.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '200',
            height: '155',
            size: '108211',
            webp:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/200w_d.webp?cid=4647a4e05b339b514f734c5973ec192f',
            webp_size: '62652'
          },
          downsized_medium: {
            url:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/giphy.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '355',
            height: '275',
            size: '2085429'
          },
          original: {
            url:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/giphy.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '355',
            height: '275',
            size: '2085429',
            frames: '40',
            mp4:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/giphy.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '252714',
            webp:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/giphy.webp?cid=4647a4e05b339b514f734c5973ec192f',
            webp_size: '1133930'
          },
          fixed_height: {
            url:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/200.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '258',
            height: '200',
            size: '1139780',
            mp4:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/200.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '98866',
            webp:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/200.webp?cid=4647a4e05b339b514f734c5973ec192f',
            webp_size: '636636'
          },
          looping: {
            mp4:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/giphy-loop.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '1962027'
          },
          original_mp4: {
            width: '480',
            height: '370',
            mp4:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/giphy.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '252714'
          },
          preview_gif: {
            url:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/giphy-preview.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '93',
            height: '72',
            size: '49364'
          },
          '480w_still': {
            url:
              'https://media1.giphy.com/media/mokQK7oyiR8Sk/480w_s.jpg?cid=4647a4e05b339b514f734c5973ec192f',
            width: '480',
            height: '372'
          }
        },
        title: 'dogs GIF',
        _score: 2300063
      },
      {
        type: 'gif',
        id: 'JfDNFU1qOZna',
        slug: 'cheezburger-JfDNFU1qOZna',
        url: 'https://giphy.com/gifs/cheezburger-JfDNFU1qOZna',
        bitly_gif_url: 'https://gph.is/1kGeSLt',
        bitly_url: 'https://gph.is/1kGeSLt',
        embed_url: 'https://giphy.com/embed/JfDNFU1qOZna',
        username: 'cheezburger',
        source: 'https://cheezburger.com/7952007680',
        rating: 'g',
        content_url: '',
        source_tld: 'cheezburger.com',
        source_post_url: 'https://cheezburger.com/7952007680',
        is_sticker: 0,
        import_datetime: '2013-12-13 15:48:41',
        trending_datetime: '2018-06-23 12:45:01',
        user: {
          avatar_url:
            'https://media.giphy.com/avatars/cheezburger/zygsw6sWuOPu.jpg',
          banner_url:
            'https://media.giphy.com/avatars/cheezburger/XkuejOhoGLE6.jpg',
          profile_url: 'https://giphy.com/cheezburger/',
          username: 'cheezburger',
          display_name: 'Cheezburger',
          guid: 'Y2hhZCtjaGVlemJ1cmdlckBjaGVlemJ1cmdlci5jb20'
        },
        images: {
          fixed_height_still: {
            url:
              'https://media2.giphy.com/media/JfDNFU1qOZna/200_s.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '187',
            height: '200'
          },
          original_still: {
            url:
              'https://media2.giphy.com/media/JfDNFU1qOZna/giphy_s.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '250',
            height: '267'
          },
          fixed_width: {
            url:
              'https://media2.giphy.com/media/JfDNFU1qOZna/200w.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '200',
            height: '214',
            size: '570262',
            mp4:
              'https://media2.giphy.com/media/JfDNFU1qOZna/200w.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '48753',
            webp:
              'https://media2.giphy.com/media/JfDNFU1qOZna/200w.webp?cid=4647a4e05b339b514f734c5973ec192f',
            webp_size: '273928'
          },
          fixed_height_small_still: {
            url:
              'https://media2.giphy.com/media/JfDNFU1qOZna/100_s.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '94',
            height: '100'
          },
          fixed_height_downsampled: {
            url:
              'https://media2.giphy.com/media/JfDNFU1qOZna/200_d.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '187',
            height: '200',
            size: '114501',
            webp:
              'https://media2.giphy.com/media/JfDNFU1qOZna/200_d.webp?cid=4647a4e05b339b514f734c5973ec192f',
            webp_size: '55470'
          },
          preview: {
            width: '198',
            height: '212',
            mp4:
              'https://media2.giphy.com/media/JfDNFU1qOZna/giphy-preview.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '45530'
          },
          fixed_height_small: {
            url:
              'https://media2.giphy.com/media/JfDNFU1qOZna/100.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '94',
            height: '100',
            size: '141568',
            mp4:
              'https://media2.giphy.com/media/JfDNFU1qOZna/100.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '16863',
            webp:
              'https://media2.giphy.com/media/JfDNFU1qOZna/100.webp?cid=4647a4e05b339b514f734c5973ec192f',
            webp_size: '84284'
          },
          downsized_still: {
            url:
              'https://media2.giphy.com/media/JfDNFU1qOZna/giphy-downsized_s.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '250',
            height: '267',
            size: '32082'
          },
          downsized: {
            url:
              'https://media2.giphy.com/media/JfDNFU1qOZna/giphy-downsized.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '250',
            height: '267',
            size: '838275'
          },
          downsized_large: {
            url:
              'https://media2.giphy.com/media/JfDNFU1qOZna/giphy.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '250',
            height: '267',
            size: '838275'
          },
          fixed_width_small_still: {
            url:
              'https://media2.giphy.com/media/JfDNFU1qOZna/100w_s.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '100',
            height: '107'
          },
          preview_webp: {
            url:
              'https://media2.giphy.com/media/JfDNFU1qOZna/giphy-preview.webp?cid=4647a4e05b339b514f734c5973ec192f',
            width: '126',
            height: '135',
            size: '48826'
          },
          fixed_width_still: {
            url:
              'https://media2.giphy.com/media/JfDNFU1qOZna/200w_s.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '200',
            height: '214'
          },
          fixed_width_small: {
            url:
              'https://media2.giphy.com/media/JfDNFU1qOZna/100w.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '100',
            height: '107',
            size: '163778',
            mp4:
              'https://media2.giphy.com/media/JfDNFU1qOZna/100w.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '18891',
            webp:
              'https://media2.giphy.com/media/JfDNFU1qOZna/100w.webp?cid=4647a4e05b339b514f734c5973ec192f',
            webp_size: '96796'
          },
          downsized_small: {
            width: '250',
            height: '266',
            mp4:
              'https://media2.giphy.com/media/JfDNFU1qOZna/giphy-downsized-small.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '114462'
          },
          fixed_width_downsampled: {
            url:
              'https://media2.giphy.com/media/JfDNFU1qOZna/200w_d.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '200',
            height: '214',
            size: '129650',
            webp:
              'https://media2.giphy.com/media/JfDNFU1qOZna/200w_d.webp?cid=4647a4e05b339b514f734c5973ec192f',
            webp_size: '60744'
          },
          downsized_medium: {
            url:
              'https://media2.giphy.com/media/JfDNFU1qOZna/giphy.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '250',
            height: '267',
            size: '838275'
          },
          original: {
            url:
              'https://media2.giphy.com/media/JfDNFU1qOZna/giphy.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '250',
            height: '267',
            size: '838275',
            frames: '27',
            mp4:
              'https://media2.giphy.com/media/JfDNFU1qOZna/giphy.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '256704',
            webp:
              'https://media2.giphy.com/media/JfDNFU1qOZna/giphy.webp?cid=4647a4e05b339b514f734c5973ec192f',
            webp_size: '419402'
          },
          fixed_height: {
            url:
              'https://media2.giphy.com/media/JfDNFU1qOZna/200.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '187',
            height: '200',
            size: '503545',
            mp4:
              'https://media2.giphy.com/media/JfDNFU1qOZna/200.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '43401',
            webp:
              'https://media2.giphy.com/media/JfDNFU1qOZna/200.webp?cid=4647a4e05b339b514f734c5973ec192f',
            webp_size: '247776'
          },
          looping: {
            mp4:
              'https://media2.giphy.com/media/JfDNFU1qOZna/giphy-loop.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '1478330'
          },
          original_mp4: {
            width: '480',
            height: '512',
            mp4:
              'https://media2.giphy.com/media/JfDNFU1qOZna/giphy.mp4?cid=4647a4e05b339b514f734c5973ec192f',
            mp4_size: '256704'
          },
          preview_gif: {
            url:
              'https://media2.giphy.com/media/JfDNFU1qOZna/giphy-preview.gif?cid=4647a4e05b339b514f734c5973ec192f',
            width: '90',
            height: '96',
            size: '49943'
          },
          '480w_still': {
            url:
              'https://media3.giphy.com/media/JfDNFU1qOZna/480w_s.jpg?cid=4647a4e05b339b514f734c5973ec192f',
            width: '480',
            height: '513'
          }
        },
        title: 'taken aback dogs GIF by Cheezburger',
        _score: 2300038.2
      }
    ],
    pagination: {
      total_count: 135348,
      count: 25,
      offset: 0
    },
    meta: {
      status: 200,
      msg: 'OK',
      response_id: '5b339b514f734c5973ec192f'
    }
  }
});
