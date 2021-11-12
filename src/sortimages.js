import { sortMedia } from './src/getData.js';

export const sortimages = async (buttonValue) => {
  let mediasorted = await sortMedia();

  switch (buttonValue) {
    case 'Date':
      mediasorted.forEach((x) => {
        let date = x.date.split('-');
        let date1 = date.join(' ');
        let date2 = new Date(date1);
        x.date = date2;
      });
      mediasorted.sort((a, b) => {
        return b.date - a.date;
      });

      break;
    case 'Popularité':
      mediasorted.sort((a, b) => {
        return b.likes - a.likes;
      });
      break;
    case 'Titre':
      mediasorted.sort(function (a, b) {
        return a.title.localeCompare(b.title);
      });
      break;
    default:
      mediasorted.sort((a, b) => {
        return b.likes - a.likes;
      });
  }
  return mediasorted;
};
