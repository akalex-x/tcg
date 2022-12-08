/**
 * decodeHtmlEntities
 */

export function decodeHtmlEntities(text) {
  if (typeof text !== 'string') {
    throw new Error(`Failed to decode HTML entity: invalid type ${typeof text}`);
  }

  let decoded = text;

  const entities = {
    '&amp;': '\u0026',
    '&quot;': '\u0022',
    '&#039;': '\u0027',
  };

  return decoded.replace(/&amp;|&quot;|&#039;/g, (char) => entities[char]);
}

/**
 * removeLastTrailingSlash
 */

export function removeLastTrailingSlash(url) {
  if (typeof url !== 'string') return url;
  return url.replace(/\/$/, '');
}

export function removeExtraSpaces(text) {
  if (typeof text !== 'string') return;
  return text.replace(/\s+/g, ' ').trim();
}

export function SplitWords(string){

  const words = string.split(' ');
  const spanWords = [];
  
  words.map( (word,i) => {
    if (word.trim().length) {

      let wordClasses = '';

      if(word.indexOf('&#9679;') >= 0 ){
          wordClasses += ' dotSymbol';
      }

      let span = '<span class="curtain"><span class="word '+wordClasses+'">\xA0' + word;
      span += '</span></span>'

      spanWords.push(span)

    }
  })

  return spanWords.join(' ')
}


export function checkIfPostsAreNeeded(acf,layout){

  const type = acf.__typename
  const layouts = acf.flexiblecontent

  const requestedLayout = type + layout

  const layoutNames = layouts.map( (layout) => {
    return layout.__typename
  });

  let needed = false

  if( layoutNames.indexOf(requestedLayout) > -1 ){
    needed = true
  }

  return needed
  
}

export function formatDate(date){

  // console.log(date)

  const year = date.getFullYear();
  let month = date.getMonth()+1;
  let day = date.getDate();

  if (day < 10) {
      day = '0' + day;
  }

  if (month < 10) {
      month = '0' + month;
  }

  const formattedDate = month + '/' + day + '/' + year.toString().slice(-2);

  return formattedDate

}

export function replaceCharacters(content){

  let replace = content.replace('&#038;', '&').replace('&amp;', '&')

  return replace

}