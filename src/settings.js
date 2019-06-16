
const endpointFake = '//www.mocky.io/v2/5b15c4923100004a006f3c07';
// const endpointHot = '//us-central1-autocred-session.cloudfunctions.net/blznaweb/';
const endpointHot = '//localhost:8080/';

//const skusHotShopping = true;

// skusHotShopping = [57138, 38273, 3019, 24410, 5479, 37211];

// DOC: Set isHotAccess = false for original test requirements
const isHotAccess = true;

const endpoint = isHotAccess ? endpointHot : endpointFake;

export {
  isHotAccess,
  endpoint,
};
