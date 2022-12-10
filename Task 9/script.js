/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor (title, director, budget, id) {
      this.id = id,
      this.title = title,
      this.director = director,
      this.budget = budget
    }
    wasExpensive() {
     return this.budget >= 1000000000
    }
  }
  
  const homeAlone = new Movie('Home Alone', 'Chris Columbus', 1299999999, '1.');
  const marginCall = new Movie('Margin Call', 'J.C. Chandor', 42069741, '2.');
  
  console.log(homeAlone.id, 'This film was expensive:', homeAlone.wasExpensive());
  console.log(marginCall.id, 'This film was expensive:', marginCall.wasExpensive());