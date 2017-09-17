import React from 'react';

const bookTitleA = ["The Patronage of", "The Legacy of", "The Divine Domain of", "The Pantheon of", "The Divine Family of", "The Fall of", "The Demigods of", "The Divine Servants of", "The Prophet of", "The Prayers of", "The Hymns of", "The Sacred Text of", "The Divine Wisdom of", "The Deification of", "The Worship of", "The Cults of", "The Temples of", "The Madness of", "The Historical Religion of", "The New Age of", "The Legacy of", "The Damnation of", "The Divine Realm of", "The Hells of", "The Abyss of"];

const bookTitleB = ["the Lady of", "the Lord of", "the Liege of", "the God of", "the Goddess of", "the Deity of", "the Patron of", "the Matron of", "the Father of", "the Mother of", "the Twins of", "the Daughter of", "the Son of", "the Child of", "the Spirit of", "the Virtue of", "the Vices of", "the Commandments of", "the Sage of", "the Disciples of", "the Sovereign of", "the Betrayer of", "the Martyr of", "the Destroyer of", "the Conquerer of"];

const bookTitleC = ["the Blessed", "the Golden", "the Radiant", "the Black", "the Bloodied", "the Beautiful", "the Invisible", "the Hideous", "the Hidden", "the Everlasting", "the Cursed", "the Eternal", "the Infinite", "the Transient", "the Liminal", "the Untouchable", "the Pristine", "the Royal", "the Adored", "the Abhorred", "the Compassionate", "the Infernal", "the Unimaginable", "the Unending", "the Azure"];

const bookTitleD = ["Wild Garden", "Original Civilization", "First People", "Night Sky", "Dawning Sun", "Primordial Tree", "Ocean Womb", "Timeless Paradise", "Afterlife", "High Mountains", "Green Valleys", "Fertile Plains", "Rushing Rivers", "Screaming Storms", "Midday Sun", "Evergreen Trees", "Far Isle", "Safe Haven", "Labyrinthine Caves", "Floating Cities", "Marble Mansion", "Crystal Castle", "Titan's Tomb", "Flagship of War", "Library"];

export const ReligiousBook = () => {
  let randomTitleA = bookTitleA[Math.floor(Math.random() * bookTitleA.length)];
  let randomTitleB = bookTitleB[Math.floor(Math.random() * bookTitleB.length)];
  let randomTitleC = bookTitleC[Math.floor(Math.random() * bookTitleC.length)];
  let randomTitleD = bookTitleD[Math.floor(Math.random() * bookTitleD.length)];

 return (<div>{randomTitleA} {randomTitleB} {randomTitleC} {randomTitleD}</div>)
 }
