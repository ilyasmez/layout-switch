export function shuffle(array) {
  let currentIndex = array.length, tmp, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    tmp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tmp;
  }
  return array;
}

export function getType(item){
  if(item.type)
    return item.type;
  if(item.url.indexOf('youtube.com')>=0)
    return 'video';
  if(item.url.indexOf('twitter.com')>=0)
    return 'tweet';
  return 'article';
}

export function getImage(item){
  return item.urlToImage || `/images/${getType(item)}-placeholder.jpg`;
}
