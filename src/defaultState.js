import { fromJS } from 'immutable';

export default fromJS({
    users: {
      '1': {
        username: 'marymeeker',
        real_name: 'Mary Meeker',
        verified: true
      },
      '2': {
        username: 'ConanOBrien',
        real_name: 'Conan O\' Brien',
        verified: true
      },
      '3': {
        username: 'baratunde',
        real_name: 'Baratunde',
        verified: false
      },
      '4': {
        username: 'me',
        real_name: 'me me',
        verified: false,
        currentUser: true
      }
    },
    posts: [
      {
        id: 2374237842,
        user: 1,
        message: 'Spotify has grown to more than 60 million monthly active users, 15 million of whom are paying subscribers.',
        ts: 1337774582
      },
      {
        id: 2374272076,
        user: 2,
        message: 'If I were in prison, I wouldn\'t ruin my spoon trying to tunnel out, because going without morning yogurt is its own prison.',
        ts: 1337968739
      },
      {
        id: 4545435344,
        user: 3,
        message: 'Something beautiful for you from Cornwall. https://media.better.com/microblog/cornwall.jpg',
        ts: 1461607139
      },
      {
        id: 4629293242,
        user: 2,
        reply_to: 4545435344,
        message: 'Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.',
        ts: 1478942943
      }
    ],
    messageEntry: {
      value: undefined,
      characterCount: 140
    } 
});