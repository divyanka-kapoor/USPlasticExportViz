/* Visualization for US Waste Export */

// Themes begin
am4core.useTheme(am4themes_dark);
// am4core.useTheme(am4themes_frozen);
am4core.useTheme(am4themes_animated);
// Themes end

var waste = {
    "EUROPE": [
        ["Austria",233,0,0,16217,13340,164878,0,0,7505,9801,4224,24307,6676,0,952,1339,6209,0],
        ["Belgium",2112059,1816033,1368022,1098944,1537163,949633,479138,272765,1069563,1008559,618829,329892,1255723,1211440,1262923,2818613,1485857],
        ["Bulgaria",0,0,0,0,0,59505,13127,0,0,0,0,0,0,14593,0,0,26690],
        ["Croatia",0,0,0,19870,9497,29040,0,0,0,0,0,0,0,0,0,5443,0],
        ["Cyprus",0,2524,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        ["Czech Republic",0,0,0,2858,6230,3197,3029,0,0,1680,0,0,0,24464,113637,163259,97974],
        ["Denmark",2704,0,4240,0,3526,0,21223,28769,408,2928,24617,12327,9036,7983,123900,2976,6581],
        ["Estonia",0,0,0,0,0,13217,0,0,0,0,0,0,0,0,0,0,0],
        ["Finland",82878,11945,0,21606,0,9707,7243,0,0,0,20144,0,0,0,0,0,0],
        ["France",109833,142759,64199,77477,231028,154043,62663,63551,9440,18706,16528,49600,123613,11934,57925,144204,140881],
        ["Georgia",0,211,0,14161,0,0,0,0,0,20113,0,0,0,57920,0,200458,0],
        ["Germany",235402,1599588,1207872,984021,862810,1146351,194317,112977,564539,247846,295265,154294,106910,614960,941707,3326672,837240],
        ["Greece",0,0,0,59084,36201,28334,0,0,0,0,0,40814,70958,234564,235256,159157,447200],
        ["Hungary",0,0,0,0,4086,0,0,18715,0,0,51782,66736,0,16600,0,0,0],
        ["Iceland",0,0,0,0,0,38700,0,0,18144,0,0,0,0,0,0,0,0],
        ["Ireland",172522,1996,41114,5156,731361,40138,40436,220,218308,10488,34875,39477,29693,44309,6983,12144,15349],
        ["Italy",2201045,1445743,1957303,3135510,4235093,3609225,820350,131224,444863,456794,458027,568750,924539,140887,6569,423165,208765],
        ["Latvia",0,0,0,0,0,0,0,15900,0,0,0,0,0,0,15331,100842,48545],
        ["Lithuania",0,0,0,0,0,4953,0,0,80696,0,0,0,0,0,0,0,0],
        ["Malta",0,0,0,0,683,0,0,0,0,0,0,0,0,0,0,0,0],
        ["Netherlands Antilles",12193,18664,150,16687,0,0,90,25898,15673,0,0,0,0,0,0,0,0],
        ["Norway",0,5300,26776,360,3538,2861,0,0,0,0,0,0,0,0,0,0,0],
        ["Poland",2,0,0,0,0,2208,492,0,0,0,0,0,0,0,14933,30153,0],
        ["Portugal",63423,68014,20802,0,0,181231,0,0,0,0,0,0,21138,19051,19000,730973,50082],
        ["Romania",0,4920,0,0,0,0,0,0,0,0,0,0,0,20179,10500,38460,0],
        ["Serbia and Montenegro",0,0,0,20000,0,0,0,0,0,0,0,0,0,0,0,0,0],
        ["Slovakia",0,0,9796,17820,0,0,0,0,0,0,76685,0,0,2167,0,0,0],
        ["Slovenia",0,0,82545,0,0,18799,21599,2818100,76642,262794,0,131026,95255,19051,25312,386619,0],
        ["Spain",78479,48752,577332,930984,4685141,688118,196678,57046,84911,20493,373849,624526,1066553,2796687,8533621,5257172,2679860],
        ["Sweden",113030,139124,93419,97858,209450,150888,156428,190235,220079,137429,67209,35197,80786,124216,64013,30321,21518],
        ["Switzerland",455227,101341,266338,54107,277929,6207245,425280,26478,161809,40634,0,28461,0,0,281,0,688],
        ["Turkey",176507,131230,27933,517003,289673,1125349,498649,285104,823877,566241,748797,1381434,1969669,6640792,14670486,23307743,16242705],
        ["Ukraine",0,0,71513,39285,442633,90608,0,4,17174,0,0,0,0,0,0,78940,69473],
        ["United Kingdom",543985,640203,525454,177464,867511,1067238,176257,51014,309153,288747,252351,216119,106374,249364,324644,481404,300474],
        ["Vatican City",0,0,0,0,0,0,0,0,0,0,0,0,0,37946,0,0,0],
      ],
    "AFRICA": [
      ["Algeria",0,0,0,0,0,35624,0,0,0,0,0,0,8000,0,0,16329,0],
      ["Angola",0,0,0,0,0,4007,0,0,0,0,36654,0,0,0,0,0,23400],
      ["Benin",0,0,0,22952,0,0,0,0,0,0,0,0,0,0,0,0,0],
      ["Cabo Verde",0,0,0,0,0,0,0,0,0,7000,0,0,0,0,0,0,0],
      ["Cameroon",0,0,40954,0,0,0,0,0,0,50508,17500,18330,9625,0,0,0,0],
      ["Central African Republic",0,0,0,0,0,0,0,0,1722,0,0,0,0,0,0,0,0],
      ["Cote d'Ivoire",0,0,17466,0,0,0,0,15876,0,0,0,0,0,0,0,0,0],
      ["Djibouti",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,206330],
      ["Egypt",0,0,47730,234285,139040,237815,265282,35876,563224,72526,146002,27935,20936,0,126867,0,286262],
      ["Ethiopia",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,367978,46441],
      ["Gabon",20784,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      ["Ghana",0,0,28866,43609,1889,0,18120,0,0,0,0,0,8376,0,98722,654488,593237],
      ["Kenya",0,8357,0,33605,0,0,0,0,0,0,0,0,0,0,0,57153,117805],
      ["Liberia",0,0,130389,77111,24440,0,0,0,0,0,0,0,0,0,0,0,0],
      ["Mali",0,0,116959,0,0,0,0,0,0,0,0,0,18600,0,0,0,0],
      ["Mauritania",0,0,0,0,0,0,0,0,0,0,0,0,0,0,21262,14500,0],
      ["Mauritius",0,0,0,0,0,0,0,0,0,0,0,0,706,0,0,0,0],
      ["Morocco",0,0,0,14515,190025,18697,165812,4813,0,0,0,0,0,19,65548,136977,908584],
      ["Mozambique",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,86316],
      ["Namibia",0,0,0,0,0,6804,0,0,0,0,0,0,34636,0,0,0,0],
      ["Nigeria",130850,192559,30103,121247,44241,203915,308182,0,645952,41334,917305,592733,899859,798721,1531508,1289749,1289173],
      ["Senegal",0,0,0,0,696,0,0,0,0,0,0,0,0,0,0,0,6081155],
      ["Sierra Leone",0,0,0,0,2549,0,0,0,0,0,0,0,0,0,0,0,0],
      ["South Africa",20412,24616,0,36401,247139,85835,40013,38613,26773,2409,0,0,12990,0,0,231073,127206],
      ["St Helena",0,0,0,61817,0,0,75824,0,0,0,0,0,0,0,0,0,0],
      ["Tanzania",20457,0,0,0,0,0,0,39910,0,0,0,0,0,0,273935,333363,144406],
      ["Tunisia",20099,0,12739,0,0,0,0,0,0,0,0,15739,0,0,0,124483,0],
      ["Uganda",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1572],
    ],
    "SOUTH AMERICA": [
      ["Argentina",22894,87510,38497,105211,200,50000,34607,1554615,1430110,10300,247500,20665,0,4820,5000,20000,20000],
      ["Bolivia",19331,0,31526,162689,54459,85400,20539,0,79151,0,0,60445,18157,36826,80739,20031,100391],
      ["Brazil",394502,460533,644470,1694084,837137,1737902,1671141,911595,786750,488770,416476,220869,260667,64605,182593,830751,875568],
      ["Chile",603339,185258,216803,7621,38451,180828,611549,255957,396431,104007,375332,184659,229582,194599,459649,685804,60000],
      ["Colombia",753516,492018,402070,1807886,2503513,901700,170269,334111,192786,272496,135497,397668,75153,2846783,3128084,1377443,513371],
      ["Ecuador",188653,307920,313031,574817,408365,365920,392743,2707750,2560256,3566607,1172184,391937,151730,233869,3752666,6884366,4040185],
      ["Guyana",92635,5243,0,1043,0,2495,295,0,0,4911,41481,253701,157831,32121,0,0,0],
      ["Paraguay",0,321,0,0,39086,329791,37748,145651,1281,0,0,0,0,0,0,40000,180000],
      ["Peru",206249,180297,160484,225577,438740,645991,163443,1191510,2423098,126105,1207022,2597,20412,349176,319539,551591,152372],
      ["Suriname",0,0,0,0,432,0,1224,0,0,0,39960,0,0,3057,0,0,0],
      ["Uruguay",419688,111383,211794,0,79111,63268,23773,0,42709,23212,54104,214239,77631,20000,60000,100000,0],
      ["Venezuela",809271,748134,59176,55859,178519,8078,48182,37298,219774,307359,17447,82902,49424,3064,0,88296,210631],
    ],
    "NORTH AMERICA": [
      ["Anguilla",0,0,0,1306,25401,0,0,0,0,0,0,0,0,0,0,0,0],
      ["Antigua",47455,1295,1664,0,1023,1250,308,0,0,751,2998,0,0,0,0,516,0],
      ["Aruba",62929,73573,478,22702,0,4942,8418,0,1262,238,2544,0,1920,1133,0,0,0],
      ["Bahamas",63304,397789,420297,527091,697220,575657,73368,26860,8166,33012,14810,12066,0,0,9181,45550,9072],
      ["Barbados",9603,0,1451,6136,12230,12234,25895,35708,2262,3545,0,4397,8827,2349,0,0,0],
      ["Belize",238,12338,120,0,0,0,0,0,0,0,4909,888,0,618,0,0,0],
      ["Bermuda",43485,48784,29029,32704,13337,20574,25343,13498,5550,1762,8969,13001,17294,4601,11416,6698,8913],
      ["British Virgin Islands",0,0,0,0,8281,0,455,12786,0,0,3071,404,2911,0,371,647,0],
      ["Canada",163739,74716,67745,628508,180843,225727,169622,96261,111466,37748,146085,36435,19374,102937,0,0,0],
      ["Cayman Island",2766,0,16910,37213,94579,32401,16992,11130,24575,11856,9077,50735,230329,70194,110832,36011,9027],
      ["Costa Rica",8631,275837,326301,312671,146098,78029,291431,220868,306075,151273,935942,820078,678206,385765,286421,1026661,695400],
      ["Curacao",0,0,0,0,0,0,0,0,0,0,0,0,1188,0,0,0,0],
      ["Dominica",1144,0,272,100,0,454,1251,0,0,0,183707,76357,0,0,0,0,176],
      ["Dominican Rep.",2560387,4566191,3465184,2754004,3945152,4457042,2560436,1854827,1703000,3491781,2534679,2159409,2721754,1781801,1258377,1060038,236704],
      ["El Salvador",1436177,1643186,2352967,3035471,3389318,3467835,4005003,3680568,1295134,1905118,2154033,4636684,6613938,5417634,5659077,6083055,3864522],
      ["Grenada",0,0,18144,1683,0,0,1888,0,605,0,0,0,0,0,0,0,0],
      ["Guadeloupe",0,567,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      ["Guatemala",980203,1254018,1542253,1929560,3516865,2804738,2110821,2322222,2650580,2346115,2149758,2528049,3136708,2933197,2396164,2665813,1456622],
      ["Haiti",1920,35505,14443,11321,14419,29770,44762,17019,256,0,3000,22000,44344,145,9072,0,0],
      ["Honduras",140262,136865,142547,105003,290076,289533,426413,529332,429268,878401,834407,1383618,883344,710355,747138,2144176,941281],
      ["Jamaica",108510,169732,76920,66278,128803,51295,92902,26221,32506,7465,36326,4885,37221,21313,23430,16172,17510],
      ["Mexico",360476,97154,552705,242860,755499,1130382,1424537,546240,484472,829788,492805,531221,677429,560155,471272,537607,478887],
      ["Montserrat",0,0,0,0,0,0,0,0,0,0,987,0,0,0,0,0,0],
      ["Netherlands",512027,247643,327709,407567,10493417,893257,197146,462215,604191,323364,206708,493910,297882,350265,1573832,1812413,171590],
      ["Nicaragua",43202,38838,1577,60984,125392,6346,100235,17254,31310,150220,181203,58376,102171,83600,59591,281441,43601],
      ["Panama",1316995,1282793,962474,562977,1496480,945020,1005954,81638,70123,5791,143553,82382,62286,23753,24743,18784,0],
      ["Sint Maarten",0,0,0,0,0,0,0,0,0,907,0,1000,9124,0,3103,5572,1957],
      ["St Kitts and Nevis",136,0,898,2179,7718,0,0,0,0,0,0,0,0,4491,0,0,0],
      ["St Lucia",0,0,0,19592,954,93,3657,18730,1234,0,242,0,0,1500,10888,34900,1587],
      ["St Vincent and the Grenadines",0,0,0,2547,0,0,907,1697,1000,0,0,0,860,0,0,11993,9752],
      ["Trinidad and Tobago",40091,9404,28181,77969,108693,112693,65581,8957,17804,66774,2168,20312,21919,2737,1973,186,18720],
      ["Turks and Caicos Islands",6550,6480,196158,117943,120,3456,181,0,6598,0,900,0,3758,4659,4909,3753,5058],
    ],
    "ASIA": [
        ["Afghanistan",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20000,0],
        ["Bahrain",6666,0,7828,15819,14792,413013,15720,10742,34171,66884,18494,13318,12842,5346,3661,626,336],
        ["Bangladesh",175725,56638,212044,994352,365377,603589,925300,2010776,885964,1314004,1998100,1610294,997607,1370344,2326908,3946818,2613665],
        ["British Indian Ocean Territories",0,0,0,0,0,0,0,0,0,0,0,0,0,0,20203,0,0],
        ["Burma",0,0,0,0,0,0,0,0,0,0,0,0,0,41241,852421,188310,106353],
        ["Cambodia",0,20,0,0,0,0,0,18000,0,0,0,18553,0,0,0,1463486,0],
        ["China",190173476,237897583,257649340,365341410,552196624,629200971,913108275,946419060,1186948672,1206907348,1029450121,1099233392,863672444,784288637,559278001,47881263,5506086],
        ["Christmas Island",0,0,0,0,0,0,36328,0,38706,0,0,0,0,0,22934,0,0],
        ["Hong Kong",262930671,220708517,311177571,446649645,536298624,654425419,826857020,742102254,620748162,501722478,451854050,572131144,613745954,660497032,375734754,119300939,41672766],
        ["India",27188375,27433253,34420441,35234453,56258681,99352590,111776595,105118514,73454772,86699024,105549916,87841126,93494389,92427312,122462674,135093834,78363174],
        ["Indonesia",147550,0,123761,23421,2532465,6841438,12030488,40940701,20715716,23331670,64399405,81691923,48020543,34377983,29031505,26635537,19286339],
        ["Iraq",0,0,0,0,0,0,0,0,0,873,22525,0,0,0,349,1141,6803],
        ["Israel",72225,37822,88447,119671,105779,284571,190238,101572,68386,62208,155923,242088,0,81929,321041,983137,37770],
        ["Japan",282649,169568,185930,227775,139322,1169544,2513271,1696686,924114,733178,446862,347015,433124,270433,1131438,616767,90781],
        ["Jordan",0,5439,0,0,0,4990,0,0,0,0,109388,51007,38788,8000,0,868,0],
        ["Korea",1215838,9038898,3210315,1575702,2855165,4956024,6762017,9063472,5654662,5288074,10026362,15141184,9876446,3744863,9318581,34951818,20666672],
        ["Kuwait",0,0,0,378,479,1029,0,0,32479,3188,9926,5411,0,4395,0,2968,0],
        ["Laos",0,0,0,0,0,0,0,47226,38550,0,0,0,0,0,0,288987,728202],
        ["Lebanon",0,0,0,0,18316,57565,36237,20430,60000,0,97186,338448,231646,3024,0,82960,22810],
        ["Macau",0,0,19205,0,21305,0,0,0,13977,0,167962,0,4318,0,0,0,0],
        ["Malaysia",45830,11209467,3232369,5023414,7051630,11651984,8998973,14818373,15550649,23252589,51222846,31727089,34878231,38854994,121665841,206411885,23184005],
        ["Maldives",0,0,0,0,0,0,0,0,0,0,0,71055,0,0,0,0,0],
        ["Mongolia",0,0,21434,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        ["Nepal",0,0,0,0,0,0,0,0,0,0,0,0,0,18398,0,0,0],
        ["Oman",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,193697,640358],
        ["Pakistan",213715,179338,297764,256016,35861,642268,1036767,533194,1116317,763984,669628,399638,677997,1643253,2778647,4276072,3491812],
        ["Philippines",131988,801473,2520559,679922,505102,118584,209950,303180,88851,99812,1564784,569423,927427,1475278,3573224,6283970,4997163],
        ["Qatar",0,0,0,0,0,703,0,5672,2042,68,0,0,0,0,0,0,0],
        ["Saudi Arabia",1852,6313,2000,41930,32436,5002,2421,3610,19050,34245,31712,0,201869,37020,34708,1568640,459479],
        ["Singapore",89483,160267,251938,478962,195967,967307,356332,117832,145300,206654,2070267,860013,2440172,3082956,5003347,1351006,449072],
        ["Sri Lanka",0,0,481,0,0,0,0,0,0,0,19651,8600,0,20000,0,32987,60774],
        ["Taiwan",14020378,14841232,7546027,6966174,9660105,18553441,13658314,10347292,16329682,16479469,26754492,29500210,51199505,30541109,33893899,51024585,19476701],
        ["Thailand",430421,131343,5931,143963,201064,843483,399342,4017513,3223762,1000619,3741075,14288937,5885966,6549861,32840352,106734726,12667072],
        ["UAE",176136,482138,462107,372803,5037995,1801997,55864,78205,1147738,70108,555616,310462,299583,47683,1771042,1005301,245881],
        ["Vietnam",277155,11079932,29630689,1638948,11716563,11371920,11597144,16255955,35055087,13602682,23087122,36240371,45065109,66360706,136229177,73868818,11273468],
        ["Yemen",0,0,0,0,0,18568,0,0,0,0,52227,224753,8000,7000,56021,14215,0],
        ["Russia",0,42941,170767,0,0,81633,7297,6600,0,0,0,1300,0,0,0,516589,1741099],
    ],
    "OCEANIA": [
        ["Australia",95612,173909,198462,62837,187967,413126,287682,295111,210607,31466,13391,24978,815571,1999632,2032691,1131092,88102],
        ["Cook Islands",0,0,0,18000,0,0,0,0,0,0,0,0,0,0,0,0,0],
        ["Fiji",0,0,0,0,0,0,0,0,2937,0,69500,0,0,0,0,0,0],
        ["French Polynesia",0,0,4113,0,0,3133,7160,1347,1062,1081,1623,0,0,0,0,0,0],
        ["Kiribati",0,20138,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        ["Micronesia",0,0,0,27,0,0,0,0,0,1200,0,0,0,0,0,0,0],
        ["New Caledonia",17690,0,0,0,41394,0,0,0,0,0,0,0,0,0,0,0,0],
        ["New Zealand",66706,26139,10535,45436,38653,25258,430125,135541,77788,98668,15883,52701,39343,13533,8506,12426,2215],
        ["Papua New Guinea",0,0,0,0,0,0,0,0,0,0,0,200000,0,0,0,0,0],
        ["Samoa",0,0,0,0,0,3865,19635,27852,32081,24077,20051,19987,21128,28340,11617,0,0],
        ["Tokelau",0,0,0,0,24449,0,0,0,0,0,0,0,0,0,0,0,0],
        ["Heard Islands",0,0,0,0,0,0,0,0,0,0,0,0,0,57000,0,0,0],
    ],
}

var usTotalWaste = {
  2003 :  "515 M",
  2004 :  "553 M",
  2005 :  "670 M",
  2006 :  "889 M",
  2007 :  "1.23 B",
  2008 :  "1.47 B",
  2009 :  "1.93 B",
  2010 :  "1.91 B",
  2011 :  "2.00 B",
  2012 :  "1.90 B",
  2013 :  "1.79 B",
  2014 :  "1.99 B",
  2015 :  "1.79 B",
  2016 :  "1.75 B",
  2017 :  "1.48 B",
  2018 :  "893 M",
  2019 :  "294 M",
}


var startYear = 2003;
var endYear = 2019;
var currentYear = 2011;
var colorSet = new am4core.ColorSet();

var chart = am4core.create("chartdiv", am4charts.RadarChart);
chart.numberFormatter.numberFormat = " #.0a kg";
chart.numberFormatter.bigNumberPrefixes = [
  { "number": 1e+3, "suffix": "K" },
  { "number": 1e+6, "suffix": "M" },
  { "number": 1e+9, "suffix": "B" }
];
// chart.numberFormatter.fill = am4core.color("#A95166");
chart.hiddenState.properties.opacity = 0;

chart.startAngle = 270 - 180;
chart.endAngle = 270 + 180;

// chart.padding(5, 5, 5, 5)
chart.radius = am4core.percent(75);
chart.innerRadius = am4core.percent(25);


var labelTotalWaste = am4core.create("yeardiv",am4core.Label);
labelTotalWaste.fontSize = 40;
labelTotalWaste.isMeasured = false;
labelTotalWaste.padding(0, 0, 0, 50);
labelTotalWaste.dx = 466;
labelTotalWaste.dy = -129;
// labelTotalWaste.marginBottom = 15;

labelTotalWaste.text = "\n" + String(currentYear) + " : " ;


var labelTotalWaste1 = am4core.create("wastevaldiv",am4core.Label);
labelTotalWaste1.fontSize = 65;
labelTotalWaste1.isMeasured = false;
labelTotalWaste1.padding(0, 0, 0, 90);
labelTotalWaste1.dx = 80;
labelTotalWaste1.dy = -150;

labelTotalWaste1.text = usTotalWaste[2011];

// year label goes in the middle
var yearLabel = chart.radarContainer.createChild(am4core.Label);
yearLabel.horizontalCenter = "middle";
yearLabel.verticalCenter = "middle";
// yearLabel.fill = am4core.color("#A95166");
// yearLabel.fill = am4core.color("#ffea05");
yearLabel.fill = am4core.color("#d8d8d8");
yearLabel.fontSize = 65;
yearLabel.fontWeight = "normal";
yearLabel.text = String(currentYear);


// zoomout button
// var zoomOutButton = chart.zoomOutButton;
// zoomOutButton.dx = 0;
// zoomOutButton.dy = 0;
// zoomOutButton.marginBottom = 15;
// zoomOutButton.parent = chart.rightAxesContainer;

// scrollbar
chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.parent = chart.rightAxesContainer;
chart.scrollbarX.orientation = "vertical";
// chart.scrollbarX.align = "left";
chart.scrollbarX.exportable = false;
chart.scrollbarX.background.fill = am4core.color("#d8d8d8");

// vertical orientation for zoom out button and scrollbar to be positioned properly
chart.rightAxesContainer.layout = "vertical";
chart.rightAxesContainer.padding(120, 0, 120, -100);


var yearSliderContainer = am4core.create("slidervaldiv", am4core.Container);
// var legendContainer = am4core.create("legenddiv", am4core.Container);
// year slider
// var yearSliderContainer = chart.createChild(am4core.Container);
// yearSliderContainer.labelOffset = -300;
yearSliderContainer.layout = "vertical";
yearSliderContainer.padding(0, 0, 0, 170);
yearSliderContainer.overflow = "visible";
yearSliderContainer.width = am4core.percent(28);
yearSliderContainer.align = "left";
yearSliderContainer.dx = -580;
yearSliderContainer.dy = -550;

// category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";
categoryAxis.tooltip.maxWidth = 200;
categoryAxis.tooltip.label.wrap = true;
categoryAxis.tooltip.label.textAlign = "middle";


var categoryAxisRenderer = categoryAxis.renderer;
var categoryAxisLabel = categoryAxisRenderer.labels.template;
categoryAxisLabel.location = 0.5;
categoryAxisLabel.radius = 34;
categoryAxisLabel.relativeRotation = 90;
categoryAxisLabel.tooltipPosition = "pointer";
// categoryAxis.mouseEnabled = true;


categoryAxisRenderer.fontSize = 20;
categoryAxisRenderer.minGridDistance = 10;
categoryAxisRenderer.grid.template.radius = -25;
categoryAxisRenderer.grid.template.strokeOpacity = 0.05;
categoryAxisRenderer.grid.template.interactionsEnabled = false;

categoryAxisRenderer.ticks.template.disabled = true;
categoryAxisRenderer.axisFills.template.disabled = true;
categoryAxisRenderer.line.disabled = true;

categoryAxisRenderer.tooltipLocation = 0.5;
categoryAxis.tooltip.defaultState.properties.opacity = 0;


// value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 100;
valueAxis.max = 12000000;
valueAxis.baseValue = 0;
valueAxis.strictMinMax = true;
valueAxis.tooltip.defaultState.properties.opacity = 0;
valueAxis.tooltip.animationDuration = 0;
valueAxis.cursorTooltipEnabled = true;
valueAxis.zIndex = 10;
valueAxis.dx = -25;
// valueAxis.logarithmic = true;

var valueAxisRenderer = valueAxis.renderer;
valueAxisRenderer.axisFills.template.disabled = true;
valueAxisRenderer.ticks.template.disabled = true;
valueAxisRenderer.minGridDistance = 20;
valueAxisRenderer.grid.template.strokeOpacity = 0.05;

// series
var series = chart.series.push(new am4charts.RadarColumnSeries());
series.columns.template.width = am4core.percent(85);
series.columns.template.strokeOpacity = 0;
series.dataFields.valueY = "value" + currentYear;
series.dataFields.categoryX = "country";
series.tooltipText = "{categoryX}:{valueY.value}";
series.fill = am4core.color("#A95166");
series.align = "right";

// zoomOutButton.parent = chart.rightAxesContainer;
// series.fill = am4core.color("#ffea05");

// this makes columns to be of a different color depending on value
// series.heatRules.push({ target: series.columns.template, property: "fill", minValue: 0, maxValue: 12792736, min: am4core.color("#673AB7"), max: am4core.color("#BF0E41"), dataField: "valueY" });
   // series.adapter.add({target: series.columns.template, property: "fill"})
// // var heatLegend = container.createChild(am4charts.HeatLegend);
//
// var heatLegend = chart.leftAxesContainer.createChild(am4charts.HeatLegend);
//
// heatLegend.valign = "middle";
// heatLegend.orientation = "vertical";
// heatLegend.height = am4core.percent(70);
// heatLegend.width = am4core.percent(10);
//
// heatLegend.series = series;
// heatLegend.valueAxis.renderer.labels.template.fontSize = 9;

// cursor
var cursor = new am4charts.RadarCursor();
chart.cursor = cursor;
cursor.behavior = "zoomX";

cursor.xAxis = categoryAxis;
cursor.innerRadius = am4core.percent(40);
cursor.lineY.disabled = true;

cursor.lineX.fillOpacity = 0.2;
cursor.lineX.fill = am4core.color("#000000");
cursor.lineX.strokeOpacity = 0;
cursor.fullWidthLineX = true;




var yearSlider = yearSliderContainer.createChild(am4core.Slider);
yearSlider.events.on("rangechanged", function () {
    updateRadarData(startYear + Math.round(yearSlider.start * (endYear - startYear)));
    // updateLabelValue(startYear + Math.round(yearSlider.start * (endYear - startYear)));
})
yearSlider.orientation = "horizontal";
yearSlider.start = 0.5;
yearSlider.exportable = false;
yearSlider.background.fill = am4core.color("#d8d8d8");
// yearSlider.background = am4core.color("white");

// yearSlider.addListener("drag", function(event) {
//   var b = document.getElementById("year");
//   console.log(event);
//   // b.innerHTML = event.item.yearSlider + ": <b>" + event.item.values.value + "</b>";
//   // b.style.display = "block";
// });

var label = yearSlider.createChild(am4core.Label);
label.text = "Year : ";
label.fontSize = 20;
label.dx = -55;
label.dy = -5;
label.isMeasured = false;

var scaleRangeSlider = yearSliderContainer.createChild(am4core.Slider);
scaleRangeSlider.orientation = "horizontal";
scaleRangeSlider.start = 0.35;
scaleRangeSlider.exportable = false;
scaleRangeSlider.background.fill = am4core.color("#d8d8d8");
scaleRangeSlider.events.on("rangechanged", function () {
    var start = scaleRangeSlider.start;
    valueAxis.max = 1200000 * Math.pow(10,start*3);
})


var label = scaleRangeSlider.createChild(am4core.Label);
label.text = "Change Scale : ";
label.fontSize = 20;
label.dx = -150;
label.dy = -5;
label.isMeasured = false;

chart.data = generateRadarData();

function generateRadarData() {
  var data = [];
  var i = 0;
  for (var continent in waste) {
      var continentData = waste[continent];

      continentData.forEach(function (country) {
          var rawDataItem = { "country": country[0] }

          for (var y = 1; y < country.length; y++) {
              rawDataItem["value" + (startYear + y - 1)] = country[y];
          }

          data.push(rawDataItem);
          // console.log(rawDataItem);
      });

      createRange(continent, continentData, i);
      i++;

  }
  return data;
}


function updateRadarData(year) {
    if (currentYear != year) {
        currentYear = year;
        yearLabel.text = String(currentYear);
        series.dataFields.valueY = "value" + currentYear;
        labelTotalWaste.text = "\n" + String(currentYear) + " : " ;
        labelTotalWaste1.text = usTotalWaste[currentYear];
        // console.log((series.dataFields.valueY));
        chart.invalidateRawData();
    }
}


// function updateLabelValue(year) {
//   if (currentYear != year) {
//       currentYear = year;
//       yearLabel.text = String(currentYear);
//       labelTotalWaste.text = usTotalWaste.currentYear;
//       console.log(year);
// //       // series.dataFields.valueY = "value" + currentYear;
//       // chart.invalidateRawData();
//   }
// }

function createRange(name, continentData, index) {

    var axisRange = categoryAxis.axisRanges.create();
    axisRange.axisFill.interactionsEnabled = true;
    axisRange.text = name;
    // first country
    axisRange.category = continentData[0][0];
    // last country
    axisRange.endCategory = continentData[continentData.length - 1][0];

    // every 4th color for a bigger contrast
    axisRange.axisFill.fill = chart.colors.list;
    axisRange.axisFill.fill = colorSet.getIndex(index * 6);
    axisRange.grid.disabled = true;
    axisRange.label.interactionsEnabled = false;
    axisRange.label.bent = true;


    var axisFill = axisRange.axisFill;
    axisFill.innerRadius = -0.001; // almost the same as 100%, we set it in pixels as later we animate this property to some pixel value
    axisFill.radius = -30; // negative radius means it is calculated from max radius
    axisFill.disabled = false; // as regular fills are disabled, we need to enable this one
    axisFill.fillOpacity = 1;
    axisFill.togglable = true;

    axisFill.showSystemTooltip = true;
    axisFill.readerTitle = "click to zoom";
    axisFill.cursorOverStyle = am4core.MouseCursorStyle.pointer;

    axisFill.events.on("hit", function (event) {
        var dataItem = event.target.dataItem;
        if (!event.target.isActive) {
            categoryAxis.zoom({ start: 0, end: 1 });
        }
        else {
            categoryAxis.zoomToCategories(dataItem.category, dataItem.endCategory);
        }
    })

    // hover state
    var hoverState = axisFill.states.create("hover");
    hoverState.properties.innerRadius = -10;
    hoverState.properties.radius = -25;

    var axisLabel = axisRange.label;
    axisLabel.location = 0.5;
    axisLabel.fill = am4core.color("black");
    axisLabel.fontSize = 20;
    axisLabel.fontWeight = "bold";
    axisLabel.verticalCenter = "center";
    axisLabel.radius = 4;
    axisLabel.relativeRotation = 0;
    axisLabel.bent = true;
}



var slider = yearSliderContainer.createChild(am4core.Slider);
slider.start = 1;
slider.exportable = false;
slider.background.fill = am4core.color("#d8d8d8");
slider.events.on("rangechanged", function () {
    var start = slider.start;

    chart.startAngle = 270 - start * 179 - 1;
    chart.endAngle = 270 + start * 179 + 1;

    valueAxis.renderer.axisAngle = chart.startAngle;
})

var label = slider.createChild(am4core.Label);
label.text = "Change Style : ";
label.fontSize = 20;
label.dx = -145;
label.isMeasured = false;
label.dy = -5;

// function am4themes_YankTheme(target) {
//   if (target instanceof am4charts.Axis) {
//     target.background.fill = am4core.color("#DCCCA3");
//   }
// }

/* Apply it */
// am4core.useTheme(am4themes_myTheme);
