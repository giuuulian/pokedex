
// Fonction pour générer un nombre aléatoire en fonction de la longueur de la liste des images
  function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }
let points=0
// Liste des chemins d'accès des images  
const images_ombre = [
    'ombre pokemon/ombre_1.png','ombre pokemon/ombre_2.png','ombre pokemon/ombre_3.png',
    'ombre pokemon/ombre_4.png','ombre pokemon/ombre_5.png','ombre pokemon/ombre_6.png',
    'ombre pokemon/ombre_7.png','ombre pokemon/ombre_8.png','ombre pokemon/ombre_9.png',
    'ombre pokemon/ombre_10.png','ombre pokemon/ombre_11.png','ombre pokemon/ombre_12.png',
    'ombre pokemon/ombre_13.png','ombre pokemon/ombre_14.png','ombre pokemon/ombre_15.png',
    'ombre pokemon/ombre_16.png','ombre pokemon/ombre_17.png','ombre pokemon/ombre_18.png',
    'ombre pokemon/ombre_19.png','ombre pokemon/ombre_20.png','ombre pokemon/ombre_21.png',
    'ombre pokemon/ombre_22.png','ombre pokemon/ombre_23.png','ombre pokemon/ombre_24.png',
    'ombre pokemon/ombre_25.png','ombre pokemon/ombre_26.png','ombre pokemon/ombre_27.png',
    'ombre pokemon/ombre_28.png','ombre pokemon/ombre_29.png','ombre pokemon/ombre_30.png',
    'ombre pokemon/ombre_31.png','ombre pokemon/ombre_32.png','ombre pokemon/ombre_33.png',
    'ombre pokemon/ombre_34.png','ombre pokemon/ombre_35.png','ombre pokemon/ombre_36.png',
    'ombre pokemon/ombre_37.png','ombre pokemon/ombre_38.png','ombre pokemon/ombre_39.png',
    'ombre pokemon/ombre_40.png','ombre pokemon/ombre_41.png','ombre pokemon/ombre_42.png',
    'ombre pokemon/ombre_43.png','ombre pokemon/ombre_44.png','ombre pokemon/ombre_45.png',
    'ombre pokemon/ombre_46.png','ombre pokemon/ombre_47.png','ombre pokemon/ombre_48.png',
    'ombre pokemon/ombre_49.png','ombre pokemon/ombre_50.png','ombre pokemon/ombre_51.png',
    'ombre pokemon/ombre_52.png','ombre pokemon/ombre_53.png','ombre pokemon/ombre_54.png',
    'ombre pokemon/ombre_55.png','ombre pokemon/ombre_56.png','ombre pokemon/ombre_57.png',
    'ombre pokemon/ombre_58.png','ombre pokemon/ombre_59.png','ombre pokemon/ombre_60.png',
    'ombre pokemon/ombre_61.png','ombre pokemon/ombre_62.png','ombre pokemon/ombre_63.png',
    'ombre pokemon/ombre_64.png','ombre pokemon/ombre_65.png','ombre pokemon/ombre_66.png',
    'ombre pokemon/ombre_67.png','ombre pokemon/ombre_68.png','ombre pokemon/ombre_69.png',
    'ombre pokemon/ombre_70.png','ombre pokemon/ombre_71.png','ombre pokemon/ombre_72.png',
    'ombre pokemon/ombre_73.png','ombre pokemon/ombre_74.png','ombre pokemon/ombre_75.png',
    'ombre pokemon/ombre_76.png','ombre pokemon/ombre_77.png','ombre pokemon/ombre_78.png',
    'ombre pokemon/ombre_79.png','ombre pokemon/ombre_80.png','ombre pokemon/ombre_81.png',
    'ombre pokemon/ombre_82.png','ombre pokemon/ombre_83.png','ombre pokemon/ombre_84.png',
    'ombre pokemon/ombre_85.png','ombre pokemon/ombre_86.png','ombre pokemon/ombre_87.png',
    'ombre pokemon/ombre_88.png','ombre pokemon/ombre_89.png','ombre pokemon/ombre_90.png',
    'ombre pokemon/ombre_91.png','ombre pokemon/ombre_92.png','ombre pokemon/ombre_93.png',
    'ombre pokemon/ombre_94.png','ombre pokemon/ombre_95.png','ombre pokemon/ombre_96.png',
    'ombre pokemon/ombre_97.png','ombre pokemon/ombre_98.png','ombre pokemon/ombre_99.png',
    'ombre pokemon/ombre_100.png','ombre pokemon/ombre_101.png','ombre pokemon/ombre_102.png',
    'ombre pokemon/ombre_103.png','ombre pokemon/ombre_104.png','ombre pokemon/ombre_105.png',
    'ombre pokemon/ombre_106.png','ombre pokemon/ombre_107.png','ombre pokemon/ombre_108.png',
    'ombre pokemon/ombre_109.png','ombre pokemon/ombre_110.png','ombre pokemon/ombre_111.png',
    'ombre pokemon/ombre_112.png','ombre pokemon/ombre_113.png','ombre pokemon/ombre_114.png',
    'ombre pokemon/ombre_115.png','ombre pokemon/ombre_116.png','ombre pokemon/ombre_117.png',
    'ombre pokemon/ombre_118.png','ombre pokemon/ombre_119.png','ombre pokemon/ombre_120.png',
    'ombre pokemon/ombre_121.png','ombre pokemon/ombre_122.png','ombre pokemon/ombre_123.png',
    'ombre pokemon/ombre_124.png','ombre pokemon/ombre_125.png','ombre pokemon/ombre_126.png',
    'ombre pokemon/ombre_127.png','ombre pokemon/ombre_128.png','ombre pokemon/ombre_129.png',
    'ombre pokemon/ombre_130.png','ombre pokemon/ombre_131.png','ombre pokemon/ombre_132.png',
    'ombre pokemon/ombre_133.png','ombre pokemon/ombre_134.png','ombre pokemon/ombre_135.png',
    'ombre pokemon/ombre_136.png','ombre pokemon/ombre_137.png','ombre pokemon/ombre_138.png',
    'ombre pokemon/ombre_139.png','ombre pokemon/ombre_140.png','ombre pokemon/ombre_141.png',
    'ombre pokemon/ombre_142.png','ombre pokemon/ombre_143.png','ombre pokemon/ombre_144.png',
    'ombre pokemon/ombre_145.png','ombre pokemon/ombre_146.png','ombre pokemon/ombre_147.png',
    'ombre pokemon/ombre_148.png','ombre pokemon/ombre_149.png','ombre pokemon/ombre_150.png',
    'ombre pokemon/ombre_151.png',
    
    
  ];

  const images=[
    'pokemon_pic/image_1.png','pokemon_pic/image_2.png','pokemon_pic/image_3.png',
    'pokemon_pic/image_4.png','pokemon_pic/image_5.png','pokemon_pic/image_6.png',
    'pokemon_pic/image_7.png','pokemon_pic/image_8.png','pokemon_pic/image_9.png',
    'pokemon_pic/image_10.png','pokemon_pic/image_11.png','pokemon_pic/image_12.png',
    'pokemon_pic/image_13.png','pokemon_pic/image_14.png','pokemon_pic/image_15.png',
    'pokemon_pic/image_16.png','pokemon_pic/image_17.png','pokemon_pic/image_18.png',
    'pokemon_pic/image_19.png','pokemon_pic/image_20.png','pokemon_pic/image_21.png',
    'pokemon_pic/image_22.png','pokemon_pic/image_23.png','pokemon_pic/image_24.png',
    'pokemon_pic/image_25.png','pokemon_pic/image_26.png','pokemon_pic/image_27.png',
    'pokemon_pic/image_28.png','pokemon_pic/image_29.png','pokemon_pic/image_30.png',
    'pokemon_pic/image_31.png','pokemon_pic/image_32.png','pokemon_pic/image_33.png',
    'pokemon_pic/image_34.png','pokemon_pic/image_35.png','pokemon_pic/image_36.png',
    'pokemon_pic/image_37.png','pokemon_pic/image_38.png','pokemon_pic/image_39.png',
    'pokemon_pic/image_40.png','pokemon_pic/image_41.png','pokemon_pic/image_42.png',
    'pokemon_pic/image_43.png','pokemon_pic/image_44.png','pokemon_pic/image_45.png',
    'pokemon_pic/image_46.png','pokemon_pic/image_47.png','pokemon_pic/image_48.png',
    'pokemon_pic/image_49.png','pokemon_pic/image_50.png','pokemon_pic/image_51.png',
    'pokemon_pic/image_52.png','pokemon_pic/image_53.png','pokemon_pic/image_54.png',
    'pokemon_pic/image_55.png','pokemon_pic/image_56.png','pokemon_pic/image_57.png',
    'pokemon_pic/image_58.png','pokemon_pic/image_59.png','pokemon_pic/image_60.png',
    'pokemon_pic/image_61.png','pokemon_pic/image_62.png','pokemon_pic/image_63.png',
    'pokemon_pic/image_64.png','pokemon_pic/image_65.png','pokemon_pic/image_66.png',
    'pokemon_pic/image_67.png','pokemon_pic/image_68.png','pokemon_pic/image_69.png',
    'pokemon_pic/image_70.png','pokemon_pic/image_71.png','pokemon_pic/image_72.png',
    'pokemon_pic/image_73.png','pokemon_pic/image_74.png','pokemon_pic/image_75.png',
    'pokemon_pic/image_76.png','pokemon_pic/image_77.png','pokemon_pic/image_78.png',
    'pokemon_pic/image_79.png','pokemon_pic/image_80.png','pokemon_pic/image_81.png',
    'pokemon_pic/image_82.png','pokemon_pic/image_83.png','pokemon_pic/image_84.png',
    'pokemon_pic/image_85.png','pokemon_pic/image_86.png','pokemon_pic/image_87.png',
    'pokemon_pic/image_88.png','pokemon_pic/image_89.png','pokemon_pic/image_90.png',
    'pokemon_pic/image_91.png','pokemon_pic/image_92.png','pokemon_pic/image_93.png',
    'pokemon_pic/image_94.png','pokemon_pic/image_95.png','pokemon_pic/image_96.png',
    'pokemon_pic/image_97.png','pokemon_pic/image_98.png','pokemon_pic/image_99.png',
    'pokemon_pic/image_100.png','pokemon_pic/image_101.png','pokemon_pic/image_102.png',
    'pokemon_pic/image_103.png','pokemon_pic/image_104.png','pokemon_pic/image_105.png',
    'pokemon_pic/image_106.png','pokemon_pic/image_107.png','pokemon_pic/image_108.png',
    'pokemon_pic/image_109.png','pokemon_pic/image_110.png','pokemon_pic/image_111.png',
    'pokemon_pic/image_112.png','pokemon_pic/image_113.png','pokemon_pic/image_114.png',
    'pokemon_pic/image_115.png','pokemon_pic/image_116.png','pokemon_pic/image_117.png',
    'pokemon_pic/image_118.png','pokemon_pic/image_119.png','pokemon_pic/image_120.png',
    'pokemon_pic/image_121.png','pokemon_pic/image_122.png','pokemon_pic/image_123.png',
    'pokemon_pic/image_124.png','pokemon_pic/image_125.png','pokemon_pic/image_126.png',
    'pokemon_pic/image_127.png','pokemon_pic/image_128.png','pokemon_pic/image_129.png',
    'pokemon_pic/image_130.png','pokemon_pic/image_131.png','pokemon_pic/image_132.png',
    'pokemon_pic/image_133.png','pokemon_pic/image_134.png','pokemon_pic/image_135.png',
    'pokemon_pic/image_136.png','pokemon_pic/image_137.png','pokemon_pic/image_138.png',
    'pokemon_pic/image_139.png','pokemon_pic/image_140.png','pokemon_pic/image_141.png',
    'pokemon_pic/image_142.png','pokemon_pic/image_143.png','pokemon_pic/image_144.png',
    'pokemon_pic/image_145.png','pokemon_pic/image_146.png','pokemon_pic/image_147.png',
    'pokemon_pic/image_148.png','pokemon_pic/image_149.png','pokemon_pic/image_150.png',
    'pokemon_pic/image_151.png',
  ]
  
  const nompoke=[
    'bulbizarre','herbizarre','florizarre',
    'salamèche','reptincel','dracaufeu',
    'carapuce','carabaffe','tortank',
    'chenipan','chrysacier','papilusion',
    'aspicot','coconfort','dardargnan',
    'roucool','roucoups','roucarnage',
    'rattata','rattatac',
    'piafabec','rapasdepic',
    'abo','arbok',
    'pikachu','raichu',
    'sabelette','sablaireau',
    'nidoran','nidorina','nidoqueen',
    'nidoran','nidorino','nidoking',
    'mélofée','melodelfe',
    'goupix','feunard',
    'rondoudou','grodoudou',
    'nosferapti','nosferalto',
    'mystherbe','ortide','rafflesia',
    'paras','parasect',
    'mimitoss','aéromite',
    'taupiqueur','triopikeur',
    'miaouss','persian',
    'psykokwak','akwakwak',
    'férosinge','colossinge',
    'caninos','arcanin',
    'ptitard','têtarte','tartard',
    'abra','kadabra','alakazam',
    'machoc','machopeur','mackogneur',
    'chétiflor','boustiflor','empiflor',
    'tentacool','tentacruel',
    'racaillou','gravalanch','grolem',
    'ponyta','galopa',
    'ramoloss','flagadoss',
    'magnéti','magnéton',
    'canarticho',
    'doduo','dodrio',
    'otaria','lamantine',
    'tadmorv','grotadmorv',
    'kokiyas','crustabri',
    'fantominus','spectrum','ectoplasma',
    'onix',
    'soporifik','hypnomade',
    'krabby','krabboss',
    'voltorbe','électrode',
    'noeunoeuf','noadkoko',
    'osselait','ossatueur',
    'kicklee','tygnon',
    'excelangue',
    'smogo','smogogo',
    'rhinocorne','rhinoféros',
    'leveinard',
    'saquedeneu',
    'kangourex',
    'hypotrempe','hypocéan',
    'poissirène','poissoroy',
    'stari','staross',
    'm.mime',
    'insécateur',
    'lippoutou',
    'élektek',
    'magmar',
    'scarabrute',
    'tauros',
    'magicarpe','léviator',
    'lokhlass',
    'métamorph',
    'évoli','aquali','voltali','pyroli',
    'porygon',
    'amonita','amonistar',
    'kabuto','kabutops',
    'ptéra',
    'ronflex',
    'artikodin','électhor','sulfura',
    'minidraco','draco','dracolosse',
    'mewtwo','mew'


  ]
  
  // Fonction pour générer une image aléatoire et demander à l'utilisateur de deviner
function generateRandomPokemon() {
  const randomIndex = getRandomIndex(images.length);
  const randomImagePath = images_ombre[randomIndex];
  const randomPokemonName = nompoke[randomIndex];

  const randomImage = document.getElementById('random-image');
  randomImage.src = randomImagePath;

  const userInput = document.getElementById('input');
  const valider = document.getElementById('valider');

  valider.addEventListener('click', function() {
    const inputValue = userInput.value.toLowerCase();
    

      if (inputValue === randomPokemonName.toLowerCase()) {
        randomImage.src = images[randomIndex];
        userInput.disabled = true; // Désactiver l'input après avoir trouvé la bonne réponse
        points+=1
        setTimeout(function() {
          userInput.value = ''; // Réinitialiser la valeur de l'input
          userInput.disabled = false; // Réactiver l'input
          generateRandomPokemon(); // Appel de la fonction pour une nouvelle image aléatoire après 2 secondes
        }, 2000);
        
      
    }

  });
 
  updateScore();
  console.log(randomPokemonName);
  
}


function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = points;
}
// Appel initial pour générer la première image et démarrer le jeu


generateRandomPokemon();


