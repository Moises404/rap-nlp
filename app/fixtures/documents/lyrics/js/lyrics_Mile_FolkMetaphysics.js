console.log("Wordbank!");

var wordbank = {
  "name": "lyrics_milo_folk_meta_physics",
  "list": [
    "folk meta physics",
    "Verse One",
    "I should not sit on this couch and watch Netflix",
    "I should take pouty mouth pics for my press kit",
    "I should defy the rules of logic",
    "I should invent some quirky new merchandise product",
    "I just want to rap good and not sell bread sticks",
    "I will not become a martyr for the deadbeats",
    "I will shave my beard off by the end of this week",
    "I will go out and learn to socialize and figure out why all my ex girlfriends hate me",
    "Im going to put this big brain to good use",
    "Im going to write rap songs to find objective truths",
    "Im going to be better than my father",
    "Im going to upload well edited pictures to Flickr",
    "Im going to eat a lot more Fig Newtons and sign petitions by womens rights movements",
    "Hook",
    "I dont make promises I cant keep",
    "Which is why I wont make promises ever",
    "And when I write letters to those ex girlfriends",
    "Thats going to be the header",
    "I dont make promises I cant keep",
    "Which is why I wont make promises ever",
    "And when I write letters to those ex girlfriends",
    "Thats going to be the header",
    "Verse Two",
    "I wish Id met you on Legends of the Hidden Temple",
    "I wish Hegel wasnt so incomprehensible",
    "I wish I was more like the Ubermensch",
    "I wish my fears didnt have such a putrid stench",
    "I think my muscles should be bigger",
    "I dont know much about Being and Nothingness",
    "But I might just be a being of nothingness",
    "I heard theres going to be a rap parade",
    "Bridge",
    "Come on try a little",
    "Nothing is forever",
    "Its got to be something better than in the middle",
    "Me and Cinderella put it all together",
    "We can drive it home",
    "Verse Three",
    "We were driving and I yelled Padiddle",
    "You started crying so I cried a little",
    "Im almost positive if I made better mix CDs",
    "I would bother less with relationship complexities",
    "You know sometimes I stutter",
    "Sometimes I forget to put on cocoa butter",
    "Sometimes I wish I was better at song writing",
    "Sometimes I feel like the master of thong wiring",
    "In the future I will neuter my ambitions",
    "I will give in to anxieties",
    "I will observe superstitions",
    "I will be Indiana Jones in small claims court",
    "I will regret in high school that I never played sports",
    "In the future I will be passive aggressive",
    "In the future I will vote for the wrong guy",
    "In the future I will be swayed by a strong bribe",
    "And a very firm handshake and I will invite dinner guests over for ham steak",
    "I will be gone before the rise of the oceans",
    "I will become a squiggle in the string of quotients",
    "Outro",
    "We can drive it with weak contrivance",
    "We can drive it with weak contrivance",
    "We can drive it with weak contrivance",
    "We can drive it with weak contrivance"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "lyrics_milo_folk_meta_physics",
  "title": "Lyrics Milo Folk Meta Physics",
  "documentId": "lyrics_milo_folk_meta_physics",
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
