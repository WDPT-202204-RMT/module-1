// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map((movie) => movie.director);
  /*const uniqueDirectors = directors.filter((item, pos, self) => {
    return self.indexOf(item) == pos;
  }); bonus part */
  //return uniqueDirectors;
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) return 0;
  const scoreSum = movies.reduce((acc, value) => acc + (value.score || 0), 0);
  return parseFloat((scoreSum / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));
  if (dramaMovies.length === 0) return 0; // if we use out previous function scoresAverage, we do not need this line
  // return scoresAverage(dramaMovies) simple solution: we already a function that does what we need; let's use it
  const scoreSum = dramaMovies.reduce(
    (acc, value) => acc + (value.score || 0),
    0
  );
  return parseFloat((scoreSum / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const filteredMovies = [...movies];
  filteredMovies.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return filteredMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let orderedMovies = [...movies];
  orderedMovies.sort((a, b) => a.title.localeCompare(b.title));

  //Extracts the first 20 titles from the ordered list
  let sortedTitles = orderedMovies.map((el) => el.title);
  return sortedTitles.splice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return movies.map((movie) => {
    let formattedDuration = 0; // start at 0
    let splitHoursMinutes = movie.duration.split(' ', 2);
    if (splitHoursMinutes.length === 2) {
      // do we have hours and minutes ?
      if (splitHoursMinutes[0].includes('h')) {
        const hours = splitHoursMinutes[0].split('h')[0]; // get the numeric value for hours
        formattedDuration += 60 * parseInt(hours);
      }
      if (splitHoursMinutes[1].includes('min')) {
        const minutes = splitHoursMinutes[1].split('min')[0]; // get the numeric value for minutes in 2nd element of array
        formattedDuration += parseInt(minutes);
      }
    } else {
      if (splitHoursMinutes[0].includes('h')) {
        const hours = splitHoursMinutes[0].split('h')[0];
        formattedDuration += 60 * parseInt(hours);
      }
    }
    return { ...movie, duration: formattedDuration };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length === 0) return null;
  let yearScore = [];

  movies.forEach((movie) => {
    if (!yearScore.find((year) => year.year === movie.year)) {
      yearScore.push({
        year: movie.year,
        movies: 1,
        score: movie.score
      });
    } else {
      const index = yearScore.findIndex((year) => year.year === movie.year);
      yearScore[index]['movies'] += 1;
      yearScore[index]['score'] += movie.score;
    }
  });
  yearScore.sort((a, b) => {
    let averageA = parseFloat(a.score) / parseFloat(a.movies);
    let averageB = parseFloat(b.score) / parseFloat(b.movies);
    if (averageA === averageB) {
      return parseFloat(a.year) - parseFloat(b.year);
    }
    return averageB - averageA;
  });
  let yearAverage = (
    parseFloat(yearScore[0].score) / parseFloat(yearScore[0].movies)
  ).toFixed(2);
  return `The best year was ${
    yearScore[0].year
  } with an average score of ${parseFloat(yearAverage)}`;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
