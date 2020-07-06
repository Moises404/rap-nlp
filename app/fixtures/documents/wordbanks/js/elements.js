console.log("Wordbank!");

var wordbank = {
  "name": "elements",
  "list": [
    "Actinium Ac",
    "Aluminum Americium Am",
    "Antimony Sb",
    "Argon Ar",
    "Barium Ba",
    "Berkelium Bk",
    "Beryllium Be",
    "Bismuth Bi",
    "Bohrium Bh",
    "Boron B",
    "Bromine Br",
    "Cadmium Cd",
    "Calcium Ca",
    "Californium Cf",
    "Carbon C",
    "Cerium Ce",
    "Cesium Cs",
    "Chlorine Cl",
    "Chromine Cr",
    "Cobalt Co",
    "Copper Cu",
    "Curium Cm",
    "Darmstadtium Ds",
    "Dubnium Db",
    "Dysprosium Dy",
    "Einsteinium Es",
    "Erbium Er",
    "Europium Eu",
    "Fermuim Fm",
    "Fluorine F",
    "Francium Fr",
    "Gadolinium Gd",
    "Gallium Ga",
    "Germanium Ge",
    "Gold Au",
    "Hafnium Hf",
    "Hassium Hs",
    "Helium He",
    "Holmium Ho",
    "Hydrogen H",
    "Indium In",
    "Iodine I",
    "Iridium Ir",
    "Iron Fe",
    "Krypton Kr",
    "Lanthanum La",
    "Lawrencium Lr",
    "Lead Pb",
    "Lithium Li",
    "Lutetium Lu",
    "Magnesium Mg",
    "Manganese Mn",
    "Meitnerium Mt",
    "Mendelevium ",
    "Mercury Hg",
    "Molybdenum Mo",
    "Neodymium Nd",
    "Neon Ne",
    "Neptunium Np",
    "Nickel Ni",
    "Niobium Nb",
    "Nitrogen N",
    "Nobellium No",
    "Osmium Os",
    "Oxygen O",
    "Palladium Pd",
    "Phosphorus P",
    "Platinum Pt",
    "Plutonium Pu",
    "Polonium Po",
    "Potassium K",
    "Praseodymium Pr",
    "Promethium Pm",
    "Protactinium Pa",
    "Radium Ra",
    "Radon Rn",
    "Rhenium Re",
    "Rhodium Rh",
    "Rubidium Rh",
    "Ruthenium Ru",
    "Rutherfordium Rf",
    "Samarium Sm",
    "Scandium Sc",
    "Seaborgium Sg",
    "Selenium Se",
    "Silicon Si",
    "Silver Ag",
    "Sodium Na",
    "Strontium Sr",
    "Sulfur S",
    "Tantalum Ta",
    "Technetium Tc",
    "Tellurium Te",
    "Terbium Tb",
    "Thallium Tl",
    "Thorium Th",
    "Thulium Tm",
    "Tin Sn",
    "Titanium Ti",
    "Tungsten W",
    "Ununbium Uub",
    "Ununhexium Uuh",
    "Ununoctium Uuo",
    "Ununpentium Uup",
    "Ununquadium Uuq",
    "Ununseptium Uus",
    "Ununtrium Uut",
    "Ununium Uuu",
    "Uranium U",
    "Vanadium V",
    "Xenon Xe",
    "Ytterbium Yb",
    "Yttrium Y",
    "Zinc Zn",
    "Zirconium Zr"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "elements_wordbank",
  "title": "Elements Wordbank 2017",
  "documentId": "elements_wordbank",
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
