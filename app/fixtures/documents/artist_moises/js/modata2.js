console.log("Wordbank!");

var wordbank = {
  "name": "modata2",
  "list": [
    "pepper ghost writer",
    "life before birth",
    "Cypher on Skype",
    "Powerful Practice",
    "Savahsana",
    "Three Dimensional modeling",
    "Three Dimensional printing",
    "Three Dimensional",
    "Three Em corporation",
    "Twenty Four hour",
    "four real",
    "Look at me on the mic",
    "trying to say something deep",
    "A poetic write",
    "A prophetic type",
    "All formulaic hype",
    "Words are my medium",
    "Trying to fill them with meaning",
    "In relations more statistical",
    "Than emotional feelings",
    "Moses spread the word",
    "Laid the code and the tablet",
    "Subscribed the users to the fablet",
    "Made them believe in the chapel",
    "more than a feeling",
    "One journey one world",
    "all state syncin in",
    "Nobel prize novel rise",
    "Id make a painting so fly",
    "the nobel price medicine",
    "bring artistic adrenalin",
    "innovate the science",
    "change the view on things",
    "break the biases",
    "cheers to the singularity",
    "when that times come Id be dead",
    "or in immortal clarity",
    "Id kill all mosquitoes",
    "If it wasnt for the kickback",
    "on the ecosystem",
    "In slumberland like Nemo",
    "coding formulas with rhythm",
    "until i solve the function",
    "That Im dealing with",
    "Sent from my iPhone",
    "Artist as Engine",
    "Astro City",
    "Betrayal",
    "Mechanics",
    "The Dark Age",
    "Reinventing Comics",
    "The ancient book of",
    "myth and war",
    "sex and science",
    "Code and vars",
    "metropolitan",
    "Psychic essense",
    "Red pill subculture",
    "Nurture couture",
    "Kill bill Cypher rappor",
    "From Hell oracle",
    "Toxic masculinity",
    "Military plasticity",
    "Promethean eve",
    "Tonic pedastilism",
    "Scifi rhythm",
    "Not in the realm",
    "Of the believable",
    "A variable",
    "in the biblical",
    "Mo Data bliss",
    "XP fix Linux",
    "Apple Website Wix",
    "The Manhattan project",
    "The story of time",
    "Rhyming database",
    "Ex military and Im into scifi",
    "Medium Bleak",
    "How are you here",
    "Logicomix",
    "The eternal",
    "Consuming or fucking",
    "Not out of the realm of bilieveble",
    "Not part of my world view",
    "People hurt people",
    "People aid people",
    "To an insane degree",
    "Altruistic",
    "Cypher party",
    "Algorithmic Pop song",
    "Pedestalism",
    "In funk we flex",
    "In flux we trust",
    "Chase",
    "Screen Gems",
    "Columbia Pictures",
    "Mobil Corporation",
    "A F I",
    "American Film Institute",
    "Bicentennial",
    "Edgewood",
    "Xerox",
    "Crafton Graphic",
    "Relational Aesthetics",
    "Meme",
    "Memetic",
    "Back to back to the future",
    "Machine learning Kendrick",
    "Interactive Data Corporation",
    "Trade and Investment Firms",
    "White House",
    "Anonymouse",
    "New York University",
    "United Arab Emirates",
    "N Y U",
    "I T P",
    "Interactive",
    "Oddysey",
    "Realty Hotels",
    "National Park Service",
    "Desert Ranch",
    "Desert Beach",
    "Heavy Rain",
    "National Aquarium",
    "Schizo",
    "Trust Company",
    "Controlling Instruments",
    "Counting Recording",
    "Consuming",
    "Not to mention the consumption",
    "Tension",
    "Halcyon Digest I digress",
    "Under stress before the red pill",
    "Blessed the trill pill",
    "Anxious but with a fire and will",
    "Spiritual",
    "Identity",
    "the Untethered Soul",
    "the journey Beyond the self",
    "Big Magic",
    "Creative Living Beyond Fear",
    "The Universe in a Single Atom",
    "Kundalini",
    "The Alchemist",
    "Waking Up",
    "Spirituality Without Religion",
    "The Urban Monk",
    "Eastern Wisdom and Modern Hacks",
    "Emotionally Immature",
    "Powerful Prayers in the War Room",
    "The Power of Now",
    "Knowing Ourselves",
    "Art of Wonder",
    "Who you are meant to be",
    "Dancing the dream",
    "true telepathy",
    "effective energy",
    "energy healing",
    "infinite awareness",
    "the immortal within"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "modata2",
  "title": "modata2",
  "documentId": "modata2",
  "phrases": []
};

for (i = 0; i < wordbank.list.length; i++) {

  allPhrases.phrases.push(
    {
      "phrase": "",
      "phraseToParse": wordbank.list[i],
      "imgData": {
        "url": ""
      },
      "metaData": {}
    });
}

// console.log(allPhraseIds);
console.log(JSON.stringify(allPhrases, 0, 2));
