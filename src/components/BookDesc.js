import React from 'react';

  const authorNoun = ["cleric", "wizard", "mage", "mystic", "noble", "heretic", "prophet", "commoner", "erudite", "criminal", "smuggler", "professor", "artist", "musician", "paladin", "priest", "sorcerer", "wizard", "druid", "friend of the fey", "traitor", "political refugee", "spy", "charlatan", "monk", "paladin", "knight", "seamstress", "artisan", "crafter", "warlock", "cultist", "bard", "performer", "philosopher", "nihilist", "scholar"];

  const authorAdj = ["a mad", "a famous", "an infamous", "a crazed", "an unknown", "a psychic", "a well-read", "an uneducated", "a traveling", "a wandering", "an old", "a young", "a prodigious", "a disreputable", "a widely-disliked", "a well-loved", "an insane", "an intuitive", "a historic", "a long-dead", "a still-living"];

  const bookLang = ["Common", "Elvish", "Draconic", "Dwarvish", "Sylvan", "Celestial", "Primordial", "an unknown script", "a dialect you don't recognize", "Abyssal", "Infernal", "Goblin", "Orcish", "Giant", "Halfling", "Gnomish", "Undercommon"];

  const bookCondition = ["in pristine condition", "falling apart", "badly damaged by water", "badly damaged by fire", "partially charred", "mostly unreadable", "missing several pages", "missing an entire chapter", "in perfect condition", "in readable condition", "in surprisingly good condition", "in need of some repair", "barely legible", "somewhat damaged by gouges across the cover", "missing a cover", "water-logged", "full of unidentifiable dust", "still stained with the smells of oils and incense", "rich with that old-book smell", "full of scribbled notes and diagrams in the margins", "full of handwritten arguments", "falling apart"];

  const contentsAdj = ["quirky", "confusing", "enigmatic", "mysterious", "unintelligeble", "disorganized", "highly-detailed", "academic-level", "painfully thorough", "stream-of-consciousness", "unedited", "handwritten"];

  const bookQuirk = ["On some of the pages, you can see indentations of writing from letters that were penned on top of the open book.", "It gives off a faint magical aura.", "Every time you open it, you catch a fleeting smell of sulfur.", "Every time you open it, you hear a distant tinkling of chimes.", "When you open it, you feel as though it is reading you while you read it.", "You hear a cackling shriek as you turn the pages, but no one is nearby.", "You can't stop petting the spine and the pages - the texture just feels so good!", "You have the urge to memorize every word it contains.", "You feel driven to make a new, whole, pristine copy.", "You can't help but want to read it from beginning to the very, very end.", "Some of the pages smell like roses, and others like swamp water.", "You notice small insects tend to gather around the book and whoever holds it.", "You feel inexplicably lucky with this book in your hands.", "This book makes you question your life choices.", "You feel deeply connected to this author, and you wonder what became of them.", "You are inspired to write your own book! It would probably be better than this mishmash, at least.", "You have consecutive nightmares while you possess this book.", "You dream of your ancestors while you possess this book."];

  const bookTimePeriod = ["in the Age of Arcana", "during the last great war", "before the last great war", "after the last great war", "in the Age of Technocracy", "during the reign of a mad king", "during the international Age of Peace", "during a series of border skirmishes", "during the uprising of the dragons", "during the subjugation of the dragons", "before the Age of Arcana", "after the Age of Arcana", "only a few years past", "a hundred years ago", "several hundred years ago", "a thousand years ago", "an eon ago", "earlier this year"];

  const bookLooks = ["worn", "cold to the touch", "warm to the touch", "hide-bound", "threadbare", "ink-stained", "rough to the touch", "bound in coarse burlap", "covered in arcane sigils", "covered in ancient runes", "decorated with a sinister hand-drawn image", "heavier than it looks", "far lighter than it should be", "textured like rough stone", "decorated with a colorful cover", "fraying at the spine", "ragged at the edges of most of the pages"];

export const BookDesc = () => {
  let randomAuthorNoun = authorNoun[Math.floor(Math.random() * authorNoun.length)];
  let randomAuthorAdj = authorAdj[Math.floor(Math.random() * authorAdj.length)];
  let randomBookLang = bookLang[Math.floor(Math.random() * bookLang.length)];
  let randomBookCondition = bookCondition[Math.floor(Math.random() * bookCondition.length)];
  let randomContentsAdj = contentsAdj[Math.floor(Math.random() * contentsAdj.length)];
  let randomBookQuirk = bookQuirk[Math.floor(Math.random() * bookQuirk.length)];
  let randomBookTimePeriod = bookTimePeriod[Math.floor(Math.random() * bookTimePeriod.length)];
  let randomBookLooks = bookLooks[Math.floor(Math.random() * bookLooks.length)];

  return (<div>
        This {randomContentsAdj} book was written in {randomBookLang} by {randomAuthorAdj} {randomAuthorNoun} {randomBookTimePeriod}. It is {randomBookLooks} and {randomBookCondition}. {randomBookQuirk}
      </div>);
};
