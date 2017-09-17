import React from 'react';

const bookTitleA = ["The Methods of", "The Tactics of", "In Battle Against", "The Strategy of", "The Bolstering of", "Debunking", "The Mundane Benefits of", "Understanding", "Demystifying", "An Encyclopedia of", "The Treatise of", "Scholarly Evidence of", "The Saga of", "Poetry of", "Famous Artwork of", "Cartography of", "Mathematics of", "The Formulae of", "Alchemical Insights into", "The Nonmagical Guide to", "The Falsehoods Behind", "The Truth Within", "The Problem of", "The Debacle of", "The Question of"];

const bookTitleB = ["Dissecting", "Engaging with", "the Master's", "the Enemy's", "Our Allies'", "the Historical", "the Mysterious", "Completely Nonmagical", "Exploring", "Landmarks of", "the Ecology of",
"the Flora and Fauna of", "Fundamental", "Observing and Recording", "the Patterns of", "Cyclical", "Infinite",
"Civilized", "Monstrous", "Simply", "Highly-Debated", "Unproven", "Misunderstood", "Irrelevant", "Metaphorical"];

const bookTitleC = ["Necessary", "War-Mongering", "Orchestrated", "Unjust", "Synchronous", "Intertwined", "Measurable", "Concrete", "Uncounted", "Insignificant", "Legitimate", "Conspiratorial", "Invalid", "Songs and", "Reported", "Condensed", "Summarized", "Calculated", "Violent", "Timeless", "Artistic", "Pragmatic", "Immoral", "Ethically-Sound", "Literal"];

const bookTitleD = ["Relations", "Politics", "Heredity and Dynasty", "World Order", "Military", "Great Wars", "Botanical Gardens", "Martyrs and Sacrifice", "Historical Figures", "Famous Authors", "Infamous Artisans", "Guild Leaders", "Technologies", "Metallurgy", "Industrialized Smithcraft", "Cultural Fallacies", "Heavenly Bodies", "Astronomical Significance", "Nonmagical Academies", "Intersectionalism", "Folklore and Stories", "Emotional Intelligence", "Sex and Gender", "Work and Play", "War and Peace"];

export const NonMagicBook = () => {
  let randomTitleA = bookTitleA[Math.floor(Math.random() * bookTitleA.length)];
  let randomTitleB = bookTitleB[Math.floor(Math.random() * bookTitleB.length)];
  let randomTitleC = bookTitleC[Math.floor(Math.random() * bookTitleC.length)];
  let randomTitleD = bookTitleD[Math.floor(Math.random() * bookTitleD.length)];

 return (<div>{randomTitleA} {randomTitleB} {randomTitleC} {randomTitleD}</div>)
 }
