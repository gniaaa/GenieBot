const hasProfanity = (string) => {
  const regex = /(f+u*ck+|bi+a*tch+|du+mb+|cu+nt+|pu+ss+y+|da+m+n+|ni+gga+|ni+gger+)/i;
  return regex.test(string);
}

const isGreeting = (string) => {
  const regex = /^(he+l+o+|yo+|mo+rni+ng+|afterno+n|hi+|he+y+|ho+wdy+|salutation|gree+ti+ngs+|goo+d+\s?mo+rni+ng+|goo+d+\s?afternoo+n)\b/i;
  return regex.test(string);
}

const isGoodbye = (string) => {
  const regex = /\b(goo+d\s?bye+|bye+|(c|see+)\s?(u+|you+|ya+)|bi+bi+)\b/i;
  return regex.test(string);
}

const isWeatherQuery = (string) => {
  const regex = /\b(what is the weather|wh*at\'*s* [the ]*weather|tell [me the ]*weather)\b/i;
  return regex.test(string);
}

module.exports = {
  hasProfanity,
  isGreeting,
  isGoodbye,
  isWeatherQuery,
}