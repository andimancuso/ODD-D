import React from 'react';

const bookTitleA = ["A Voyage Through", "The Origin of", "Arcane Principles of", "The Philosophy of", "Dialogue Concerning the", "On the Revolutions of", "Examinations of", "The Special Theory of", "Revelations of", "The First of", "The Book Of", "Essays in", "The Practice of", "Gems from", "The Lesser Key of", "The Heart of", "Laws of", "Magic Without", "Rituals of", "Six Songs for", "In Search of", "Wisdom of", "The Magical Science of", "The Introduction of", "In Defense of", "Dismantling", "Disproving", "Arguments Against", "Arguments For", "Meditations on", "Reflections on", "The Essential Guide to", "On the Mysteries of", "Divine Word on", "Prophecies of", "The Healing Properties of", "A World Without", "Arcane Insights into", "The Science Behind", "Ancient Beliefs About"];

const bookTitleB = ["Natural", "Transmutative", "Quick", "Divining the", "Pure", "Radiant", "Interior", "Alchemical", "the Parallels in", "the Ten", "Explosive", "Summoning", "Destroying", "the Creation of", "the Master's", "Elminster's", "Detecting and Collating", "the Acolyte's", "Inverse", "the Inertia of", "the Laws of", "the Truths of", "Unnatural", "Symbolic", "Instantaneous", "the Destruction of", "the Design of", "Invoking", "Apparating", "Embodying", "the Paradox of", "the Impossibility of", "the Fractal Nature of", "the Thirteen", "the Seven", "the Golden", "the Platinum", "the Seeker's", "the Blasphemer's", "Impure"];

const bookTitleC = ["Class IV", "Aetheric", "Elemental", "Phantom", "Alpha", "Amorphous", "Bound", "Components and", "Novel", "Uncategorized", "Iterative", "Familiars and", "Easy", "Astral", "Nonlinear", "Complex", "Ancient", "Nonlocal", "Rope Tricks and", "Underwater", "Data Regarding", "Historical", "Fractal", "Geometric", "Four-Dimensional", "Unseen", "Lesser", "Undefined", "Rituals and", "Magical Components and", "Spell Scrolls and", "Gods and", "Beasts and", "Levitating", "Transformed", "Cursed", "Blessed", "Continental", "Unfortunate", "Artificial"];

const bookTitleD = ["World Systems", "Heavenly Spheres", "Unknowing", "Enchantments", "Force", "Castles", "Knowledge", "Spirits and Souls", "Reality", "Rings", "Lightning", "Crystal Orbs", "Functional Spellcraft", "Golems and Animated Objects", "Dragons and their Eggs", "Ley Lines", "Teleportation", "Unseen Servants", "Magic Missiles", "Empty Places", "Multiverse", "Hidden Lands", "Archfey and Lesser Fey", "Divine Boons", "Magical Music", "Devils and Demons", "Tombs", "Temples", "Treasure Hoards", "Minstrels", "Sentient Objects", "Obscurity", "Holy Symbols", "Items of Inheritance", "Creatures and Constructs", "Symbols and Sigils", "Ensorceled Persons", "Old Ways", "Unknowable Monstrosities", "Divination and Oracles"];

export const MagicBook = () => {
  let randomTitleA = bookTitleA[Math.floor(Math.random() * bookTitleA.length)];
  let randomTitleB = bookTitleB[Math.floor(Math.random() * bookTitleB.length)];
  let randomTitleC = bookTitleC[Math.floor(Math.random() * bookTitleC.length)];
  let randomTitleD = bookTitleD[Math.floor(Math.random() * bookTitleD.length)];

 return (<div>{randomTitleA} {randomTitleB} {randomTitleC} {randomTitleD}</div>)
 }
