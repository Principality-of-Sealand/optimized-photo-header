const fs = require('fs');

const restaurantData = {
  nouns: 'rings knife camp box shade cakes scene soda flame maid cave stick profit duck pet zoo mine mint bikes volcano shirt stream cow things sugar glass tramp iron cause mass join bomb station lettuce prose push north grandmother yard look tin soap partner payment pail distribution air kiss stitch selection mice talk boot request system crime twist weight flag lock pickle teeth writer wind temper pets chicken jail chalk hat meal church ship horn base quicksand calculator expert volleyball quarter spy ticket bridge snakes canvas drop worm rod stone summer hope discovery visitor argument love donkey produce crow women bedroom anger middle copper office chess rhythm fireman division increase dinosaurs actor hot noise interest beginner governor meat letters ghost idea judge time lake destruction wilderness haircut stranger dinner quiet card star connection color kettle believe screw control van quill force wave invention thumb books country use bike jar harmony tax orange girls friend dock swing addition frogs hospital string scarf rail mailbox spiders wren train school fairies reading cemetery ink celery machine pencil fish plane nut sock day fire education basin religion jellyfish dogs oranges regret digestion nerve advertisement cap thought flavor hydrant root market peace whip cats name flower finger bucket boundary toothbrush throat dad car spark picture event hook minute apparatus toad yarn afternoon porter flight cars horse business hands food lamp voyage wealth guitar decision throne arithmetic brother plot pump fog wire pear view tooth grip fowl wound street army smash driving cub song wax show weather carriage thread credit cat shape grain birthday friends development line can stage minister blade end sack baby crayon record thrill person desire wood existence zipper paper mark sponge shelf mountain sign advice industry week scarecrow grandfather tent library pin mom floor suggestion rake receipt protest club need vacation babies bee turkey sidewalk cobweb action head window kittens flock trade letter treatment step pies account belief coil door order holiday twig sail grade magic eye flesh stew way channel low dime memory crook pocket spring mother trip tub rifle coal seat degree cactus badge skirt plastic cellar seashore beef group heat steel sense mist neck bait drain arm pest jewel level knowledge play balance earthquake verse feeling cows point blood servant sneeze marble circle direction power riddle frame approval stem rabbit poison sort kitty corn shake cough bird substance turn number berry dirt sheep bath pollution bag money texture slip pig lip rat rest respect question ducks sound scissors mouth move observation room wash chance sea coach cast self vase branch crack uncle winter sticks humor act frog wool appliance houses rub animal yoke pen boy nest clover hall plough society page behavior test lunchroom distance touch sister roll secretary playground rainstorm pie lumber wing alarm discussion smell scent rule growth competition battle crowd government stop plants condition dolls fruit son error bead mind friction elbow tree caption cake engine bulb match suit art plant current thing plate sheet fork finger edge seed stove effect cable cart reward health giants insurance'.split(' '),
  adjectives: 'ludicrous abusive dapper hysterical seemly macabre possessive telling thirsty psychedelic functional unsuitable verdant deranged trite bashful flawless zonked sophisticated lame majestic periodic quaint flimsy billowy wholesale cautious uncovered frightened envious great rude near colorful reminiscent narrow lying fair ill boiling grubby unbecoming thundering full brash crabby sleepy irate voiceless thoughtless steadfast annoyed dear alcoholic well-to-do distinct onerous classy acid ratty simple third tightfisted bright chemical thick absorbed zealous gaping obeisant arrogant used unnatural learned ignorant salty flippant skillful horrible nifty pricey shy festive wonderful spurious frequent foamy secretive delicious special thin handsome instinctive satisfying likeable tame next greedy puny possible mixed vulgar whimsical hapless hushed mountainous past nervous unsightly befitting kind redundant nosy absorbing blushing tacit glib silent abiding electric oval uttermost noiseless scarce nostalgic labored white hollow tense inquisitive rainy guiltless erect delightful adorable bumpy luxuriant sordid mushy bored giddy miscreant equal breezy lean curved comfortable solid daily ruddy puffy plausible torpid malicious mean ten bitter chief one disgusted godly delicate cagey heavy black-and-white tasteless imaginary typical tenuous fixed intelligent knowing parallel amusing proud jealous unadvised bizarre tearful physical wry spooky apathetic curly available staking rare whole keen limping troubled odd kindhearted grateful disillusioned private eatable known threatening three strong husky tense oceanic charming fantastic second historical boundless heavenly internal absurd smoggy tan marvelous excellent fine hissing wanting exuberant infamous fallacious old venomous recondite kaput heady direful hurt quirky axiomatic taboo grieving nine paltry ugly wicked married friendly cute vivacious defiant able fumbling dull insidious numberless lopsided valuable rightful deeply murky gullible scary cloistered orange drab spotted adamant dead wrong rhetorical changeable naive energetic humdrum damaging elfin cooperative holistic gorgeous easy best anxious eager smiling wide cold enchanted acoustic famous obsolete teeny-tiny cool abaft panoramic shaky perfect selective reflective abashed mighty noisy gainful aboriginal picayune abnormal confused level elegant volatile doubtful well-off legal fretful ad hoc protective cultured modern careless lively damaged mature aquatic combative parched male fascinated cute gusty phobic omniscient pleasant true economic melodic thoughtful tested weak substantial complex nonstop womanly thirsty righteous untidy hard plucky lively sable aggressive alike fertile sudden habitual obese gentle important natural half overrated silent invincible puzzled high-pitched serious extra-small irritating calm abrupt waiting big abstracted loose terrific truthful homely snotty voracious teeny mellow many deadpan upset tired marked left unarmed squealing berserk hurried jumbled complete smart fierce fuzzy watery aback stupendous unaccountable nondescript repulsive five chunky moaning cluttered second-hand silky hallowed feeble sweet delirious pathetic rustic alleged forgetful familiar deafening alive jolly opposite new brave capricious future elite unused stimulating symptomatic accidental wrathful organic spotless ragged obscene purple neat probable sad astonishing elated broken puzzling noxious unusual burly unkempt offbeat early divergent tasteful clammy wakeful tranquil plastic dusty dramatic exultant materialistic ultra icy happy callous sweltering cheap material obedient lowly little shrill responsible quiet striped homeless hateful wistful earthy chilly aware itchy bent incompetent sick previous innate unwieldy silly resonant precious living unique woebegone even safe aspiring ambiguous jaded alluring superficial magnificent straight maniacal observant remarkable slimy poised cloudy momentous warlike fragile'.split(' '),
  address: {
    streets: ['Ave', 'St', 'Ct', 'Pl', 'Blvd', 'Sq'],
    city: 'Tampa Tarpon Springs Titusville Venice West Palm Beach White Springs Winter Haven Winter Park Georgia Albany Americus Andersonville Atlanta Augusta Bainbridge Blairsville Brunswick Calhoun Carrollton Columbus Dahlonega Dalton East Point Fitzgerald Fort Valley La Grange Macon Marietta Milledgeville Plains Rome Savannah Toccoa Valdosta Warm Springs Warner Robins Washington Waycross Hawaii Hanalei Hilo Honaunau Honolulu Kahului Kaneohe Kapaa Kawaihae Lahaina Laie Wahiawa Wailuku Waimea Idaho Blackfoot Boise Bonners Ferry Caldwell Coeur d’Alene Idaho City Idaho Falls Kellogg Lewiston Moscow Nampa Pocatello Priest River Rexburg Sun Valley Twin Falls Illinois Alton Arlington Heights Arthur Belleville Belvidere Bloomington Brookfield Cahokia Cairo Calumet City Canton Carbondale Carlinville Carthage Centralia Champaign Charleston Chester Chicago Chicago Heights Cicero Collinsville Danville DeKalb Des Plaines Dixon East Moline East Saint Louis Effingham Elgin Elmhurst Evanston Freeport Galena Galesburg Glen Ellyn Glenview Granite City Harrisburg Herrin Highland Park Joliet Kankakee Kaskaskia Kewanee La Salle Lake Forest Libertyville Lincoln Lisle Lombard Macomb Mattoon Moline Monmouth Mount Vernon Mundelein Naperville Nauvoo Normal North Chicago Oak Park Oregon Ottawa Palatine Park Forest Park Ridge Pekin Peoria Petersburg Pontiac Quincy Rantoul River Forest Rock Island Rockford Salem Shawneetown Skokie South Holland Springfield Streator Summit Urbana Vandalia Virden Waukegan Wheaton Wilmette Winnetka Wood River Zion Indiana Anderson Bedford Connersville Corydon Crawfordsville East Chicago Elkhart Elwood Evansville Fort Wayne French Lick Gary Geneva Goshen Greenfield Hammond Hobart Huntington Indianapolis Jeffersonville Kokomo Lafayette Madison Michigan City Mishawaka Muncie Nappanee Nashville New Albany New Harmony Peru Plymouth Santa Claus Shelbyville South Bend Terre Haute Valparaiso Vincennes Wabash West Lafayette Iowa Amana Colonies Ames Boone Burlington Cedar Falls Cedar Rapids Charles City Cherokee Clinton Council Bluffs Davenport Des Moines Dubuque Estherville Fort Dodge Grinnell Indianola Iowa City Keokuk Mason City Mount Pleasant Muscatine Newton Oskaloosa Ottumwa Sioux City Waterloo Webster City West Des Moines Kansas Amsterdam Babylon Batavia Beacon Binghamton Bronx Brooklyn Buffalo Chautauqua Cheektowaga Cohoes Martinsburg Morgantown Moundsville New Martinsville Parkersburg Philippi Point Pleasant Romney Shepherdstown South Charleston Summersville Weirton Welch Wellsburg Weston Wheeling White Sulphur Springs Williamson Wisconsin Appleton Baraboo Beloit Eau Claire Fond du Lac Green Bay Janesville Kenosha La Crosse Lake Geneva Manitowoc Marinette Menasha Milwaukee Neenah New Glarus Oconto Oshkosh Peshtigo Portage Prairie du Chien Racine Rhinelander Ripon Sheboygan Spring Green Stevens Point Sturgeon Bay Superior Waukesha Wausau Wauwatosa West Allis West Bend Wisconsin Dells Wyoming Casper Cheyenne Cody Gillette Lander Laramie Newcastle Powell Rawlins Riverton Rock Springs Sheridan Ten Sleep Thermopolis Worland'.split(' '),
    state: ['CA','NY','CT','WI','ND','SD','AL','LA','HI','AK','AR','WI','OH','FL','NC','SC']
  },
  url: 'omniture.com bloglovin.com wikimedia.org webeden.co.uk hp.com bloomberg.com virginia.edu skype.com illinois.edu webnode.com army.mil pinterest.com springer.com youtube.com vistaprint.com indiatimes.com ted.com zimbio.com cbsnews.com usatoday.com google.es com.com diigo.com de.vu telegraph.co.uk cnet.com engadget.com senate.gov cornell.edu mail.ru google.com.br nature.com slate.com ftc.gov soundcloud.com weibo.com amazon.com patch.com plala.or.jp discuz.net wired.com jiathis.com timesonline.co.uk hao123.com nytimes.com ask.com github.io theglobeandmail.com deviantart.com unblog.fr unesco.org drupal.org geocities.com jugem.jp desdev.cn dailymail.co.uk wunderground.com is.gd sina.com.cn home.pl clickbank.net walmart.com nymag.com usa.gov yelp.com geocities.jp arizona.edu upenn.edu privacy.gov.au w3.org washingtonpost.com issuu.com storify.com smh.com.au harvard.edu mozilla.org state.tx.us live.com tumblr.com dyndns.org twitpic.com wordpress.org chron.com addthis.com usnews.com ox.ac.uk example.com miibeian.gov.cn posterous.com networkadvertising.org npr.org sphinn.com wp.com yahoo.co.jp 163.com jimdo.com hexun.com state.gov europa.eu macromedia.com'.split(' '),
  categories: 'Afghan African Senegalese South African American Arabian Argentine Armenian Asian Fusion Australian Austrian Bangladeshi Barbeque Basque Belgian Brasseries Brazilian Breakfast & Brunch British Buffets Burgers Burmese Cafes Themed Cafes Cafeteria Cajun/Creole Cambodian Caribbean Dominican Haitian Puerto Rican Trinidadian Catalan Cheesesteaks Chicken Shop Chicken Wings Chinese Cantonese Dim Sum Hainan Shanghainese Szechuan Comfort Food Creperies Cuban Czech Delis Diners Dinner Theater Ethiopian Fast Food Filipino Fish & Chips Fondue Food Court Food Stands French Mauritius Reunion Game Meat Gastropubs German Gluten-Free Greek Guamanian Halal Hawaiian Himalayan/Nepalese Honduran Hong Kong Style Cafe Hot-Dogs Hot-Pot Hungarian Iberian Indian Indonesian Irish Italian Calabrian Sardinian Sicilian Tuscan Japanese Conveyor Belt Sushi Izakaya Japanese Curry Ramen Teppanyaki Kebab Korean Kosher Laotian Latin American Colombian Salvadoran Venezuelan Live/Raw Food Malaysian Mediterranean Falafel Mexican Tacos Middle Eastern Egyptian Lebanese Modern European Mongolian Moroccan New Mexican Cuisine Nicaraguan Noodles Pakistani Pan Asia Persian/Iranian Peruvian Pizza Polish Polynesian Pop-Up Restaurants Portuguese Poutineries Russian Salad Sandwiches Scandinavian Scottish Seafood Singaporean Slovakian Soul-Food Soup Southern Spanish Sri Lankan Steakhouses Supper Clubs Sushi Bars Syrian Taiwanese Tapas Bars Tapas/Small Plates Tex-Mex Thai Turkish Ukrainian Uzbek Vegan Vegetarian Vietnamese Waffles Wraps'.split(' '),
};

const pics = ['https://source.unsplash.com/collection/622216/600x480', 'https://source.unsplash.com/collection/1275949/600x480', 'https://source.unsplash.com/collection/345703/600x480'];


//==== RANDOM FUNCTION GIVES YOU A NUMBER ====
const randomizer = (min, max) => {
  return Math.floor((Math.random() * (max - min) + min));
};

// ==== ADD RESTAURANT ====
const addRestaurant = () => {
  let restaurant = 
    [('The ') + ((restaurantData.adjectives[randomizer(1,500)] + ' ') + (restaurantData.nouns[randomizer(1,500)])),
    ((randomizer(1,10000)) + ' ' + restaurantData.nouns[randomizer(1,500)] + ' ' + restaurantData.address.streets[randomizer(1, 7)] + ' ' + restaurantData.address.city[randomizer(1,400)] + ', ' + restaurantData.address.state[randomizer(1,16)] + ', ' + randomizer(1,10000)),
    ('(' + randomizer(100,999) + ')' + ' - ' + randomizer(100,999) + ' - ' + randomizer(100,999)),
    restaurantData.url[randomizer(1,100)],
    'https://bit.ly/2yHGtza',
    restaurantData.categories[randomizer(1,185)]
    ];
  return restaurant.join('\t')
};
//====================

// ==== ADD PHOTO ====
const addPhoto = () => {
  return pics[randomizer(0,3)] + '\t' + (`${randomizer(1,13)}/${randomizer(1,31)}/${randomizer(2011, 2019)}`);
};
//===== ADD RESTAURANT PHOTO RELATION ========
//===== ! in real life implementation photo id would be unique ! =====

const addRestPhoto = () => {
  return `${randomizer(9900000, 10000001)}\t${randomizer(1,1001)}\t${randomizer(1, 1001)}`
}
//===== ADD USER =====
const addUser = () => {
  return `Cole Michaels\thttps://source.unsplash.com/collection/622216/150x150`;
}
//===== ADD MANY =====

const addBunch = (limit, fileName, category, callback) => {
  let time = new Date()
  const stream = fs.createWriteStream(`./db/sql/data/${fileName}.csv`, {flags:'a'});
  
  let write = () => {
    let drained = true;
    do {
      limit--;
      if (limit === 0) {
        stream.write(category() + '\n', callback);
        console.log('we wrote all to db in ' + (new Date().getTime() - time.getTime()) + ' ms.');
        stream.end()
      } else {
        drained = stream.write(category() + '\n');
      }
    } while (limit > 0 && drained) {
      limit > 0 && stream.once('drain', write);
    }
  }  
  write();
}

//========== CALL FUNCTION TO GENERATE n NUMBER OF ENTRIES TO SCV FILE ===========

// restaurants
// addBunch(10000000, 'restaurants', addRestaurant, (err) => {
//   if(err) console.log(err);
//   console.log('done running population function')
// });

// photos
// addBunch(10000000, 'photos', addPhoto, (err) => {
//   if(err) console.log(err);
//   console.log('done running population function')
// });

//restaurant_photos
// addBunch(10000000, 'relations', addRestPhoto, (err) => {
//   if(err) console.log(err);
//   console.log('done running population function')
// });

//users
// addBunch(10000000, 'users', addUser, (err) => {
//   if(err) console.log(err);
//   console.log('done running population function')
// });
//================================================================================


module.exports = {
  addRestaurant: addRestaurant,
  randomizer: randomizer,
  addBunch: addBunch
};