const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation
  })
};


Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport
  })
};


// Cinema.prototype.findByGenre = function(genre){
//   return this.film.filter((film) => {
//     return film.genre === genre;
//   })
// }

// Cinema.prototype.findByTitle = function(title){
//   return this.films.find((film) => {
//     return film.title === title
//   })
// };

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
};


// Cinema.prototype.areAllFilmsOfMinLength = function (length) {
//   return this.films.every((film) => {
//     return film.length >= length;
//   });
// };

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0)
};

// Cinema.prototype.totalRunningTime = function () {
//   return this.films.reduce((total, film) => {
//     return total += film.length;
//   }, 0);
// };


Traveller.prototype.getUniqueModesOfTransport = function(key, value) {
  results = [];
  return this.journeys.filter((journey) => {
    // results.push
    return (journey[key] === value);
  })
  // return results.index[2]
};


// Cinema.prototype.filmsByProperty = function(key, value){
//   return this.films.filter((film) => {
//       return film[key] === value
//   })
// }

// Cinema.prototype.filmsByProperty = function (key, value) {
//   return this.films.filter((film) => {
//     return film[key] === value;
//   });
// };

module.exports = Traveller;
