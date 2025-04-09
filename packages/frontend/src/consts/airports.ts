/**
 * Original data from https://github.com/ip2location/ip2location-iata-icao/blob/master/iata-icao.csv
 * Converted from CSV to JSON, removed entires without ICAO code and used ICAO code as object key
 */

export const airportCodeToDetails: Record<string, {airport: string, latitude: number, longitude: number}> = {
  "OMAL": {
    "airport": "Al Ain International Airport",
    "latitude": 24.2617,
    "longitude": 55.6092
  },
  "OMAA": {
    "airport": "Abu Dhabi International Airport",
    "latitude": 24.433,
    "longitude": 54.6511
  },
  "OMAD": {
    "airport": "Al Bateen Executive Airport",
    "latitude": 24.4283,
    "longitude": 54.4581
  },
  "OMAM": {
    "airport": "Al Dhafra Air Base",
    "latitude": 24.2482,
    "longitude": 54.5477
  },
  "OMBY": {
    "airport": "Sir Bani Yas Airport",
    "latitude": 24.2836,
    "longitude": 52.5803
  },
  "OMDL": {
    "airport": "Dalma Airport",
    "latitude": 24.51,
    "longitude": 52.3352
  },
  "OMFJ": {
    "airport": "Fujairah International Airport",
    "latitude": 25.1122,
    "longitude": 56.324
  },
  "OMSJ": {
    "airport": "Sharjah International Airport",
    "latitude": 25.3286,
    "longitude": 55.5172
  },
  "OMDW": {
    "airport": "Al Maktoum International Airport",
    "latitude": 24.8964,
    "longitude": 55.1614
  },
  "OMDB": {
    "airport": "Dubai International Airport",
    "latitude": 25.2528,
    "longitude": 55.3644
  },
  "OMDM": {
    "airport": "Al Minhad Air Base",
    "latitude": 25.0268,
    "longitude": 55.3662
  },
  "OMRK": {
    "airport": "Ras Al Khaimah International Airport",
    "latitude": 25.6135,
    "longitude": 55.9388
  },
  "OADZ": {
    "airport": "Darwaz Airport",
    "latitude": 38.4611,
    "longitude": 70.8825
  },
  "OAFZ": {
    "airport": "Fayzabad Airport",
    "latitude": 37.1211,
    "longitude": 70.5181
  },
  "OARZ": {
    "airport": "Razer Airport",
    "latitude": 37.752,
    "longitude": -89.0154
  },
  "OAHN": {
    "airport": "Khwahan Airport",
    "latitude": 37.883,
    "longitude": 70.217
  },
  "OASN": {
    "airport": "Sheghnan Airport",
    "latitude": 37.567,
    "longitude": 71.5
  },
  "OAQN": {
    "airport": "Qala i Naw Airport",
    "latitude": 34.985,
    "longitude": 63.1178
  },
  "OAMS": {
    "airport": "Mazar-e Sharif International Airport",
    "latitude": 36.7069,
    "longitude": 67.2097
  },
  "OABN": {
    "airport": "Bamyan Airport",
    "latitude": 34.817,
    "longitude": 67.817
  },
  "OAFR": {
    "airport": "Farah Airport",
    "latitude": 32.367,
    "longitude": 62.183
  },
  "OAMN": {
    "airport": "Maymana Airport",
    "latitude": 35.9308,
    "longitude": 64.7609
  },
  "OAGN": {
    "airport": "Ghazni Airport",
    "latitude": 33.5312,
    "longitude": 68.4129
  },
  "OADS": {
    "airport": "Sardeh Band Airport",
    "latitude": 33.3207,
    "longitude": 68.6365
  },
  "OACC": {
    "airport": "Chaghcharan Airport",
    "latitude": 34.5265,
    "longitude": 65.271
  },
  "OABT": {
    "airport": "Bost Airport",
    "latitude": 31.5597,
    "longitude": 64.365
  },
  "OADY": {
    "airport": "Dwyer Airport",
    "latitude": 31,
    "longitude": 64
  },
  "OAZI": {
    "airport": "Camp Bastion Air Base",
    "latitude": 31.8638,
    "longitude": 64.2246
  },
  "OAHR": {
    "airport": "Herat International Airport",
    "latitude": 34.21,
    "longitude": 62.2283
  },
  "OASD": {
    "airport": "Shindand Air Base",
    "latitude": 33.3913,
    "longitude": 62.261
  },
  "OAZJ": {
    "airport": "Zaranj Airport",
    "latitude": 30.9722,
    "longitude": 61.8658
  },
  "OAGZ": {
    "airport": "Gardez Airport",
    "latitude": 33.6315,
    "longitude": 69.2394
  },
  "OAKB": {
    "airport": "Kabul International Airport",
    "latitude": 34.5658,
    "longitude": 69.2131
  },
  "OAKN": {
    "airport": "Kandahar International Airport",
    "latitude": 31.5058,
    "longitude": 65.8478
  },
  "OATN": {
    "airport": "Tarinkot Airport",
    "latitude": 32.6042,
    "longitude": 65.8658
  },
  "OARG": {
    "airport": "Uruzgan Airport",
    "latitude": 32.903,
    "longitude": 66.6309
  },
  "OAKS": {
    "airport": "Khost Airfield",
    "latitude": 33.3334,
    "longitude": 69.952
  },
  "OASL": {
    "airport": "Forward Operating Base Salerno",
    "latitude": 33.3638,
    "longitude": 69.9561
  },
  "OAUZ": {
    "airport": "Kunduz Airport",
    "latitude": 36.6651,
    "longitude": 68.9108
  },
  "OASH": {
    "airport": "Forward Operating Base Shank",
    "latitude": 33.9225,
    "longitude": 69.0772
  },
  "OAJL": {
    "airport": "Jalalabad Airport",
    "latitude": 34.3998,
    "longitude": 70.4986
  },
  "OASA": {
    "airport": "Sharana Airstrip / Forward Operating Base Sharana",
    "latitude": 33.1258,
    "longitude": 68.8385
  },
  "OAOG": {
    "airport": "Urgun Airport",
    "latitude": 32.9318,
    "longitude": 69.1563
  },
  "OAIX": {
    "airport": "Bagram Airfield",
    "latitude": 34.9461,
    "longitude": 69.265
  },
  "OATQ": {
    "airport": "Taloqan Airport",
    "latitude": 36.7707,
    "longitude": 69.532
  },
  "TAPH": {
    "airport": "Barbuda Codrington Airport",
    "latitude": 17.6358,
    "longitude": -61.8286
  },
  "TAPA": {
    "airport": "V. C. Bird International Airport",
    "latitude": 17.1367,
    "longitude": -61.7927
  },
  "TQPF": {
    "airport": "Clayton J. Lloyd International Airport",
    "latitude": 18.2048,
    "longitude": -63.0551
  },
  "UDYZ": {
    "airport": "Zvartnots International Airport",
    "latitude": 40.1473,
    "longitude": 44.3959
  },
  "UDSG": {
    "airport": "Gyumri Shirak Airport",
    "latitude": 40.7504,
    "longitude": 43.8593
  },
  "FNAM": {
    "airport": "Ambriz Airport",
    "latitude": -7.86222,
    "longitude": 13.1161
  },
  "FNBJ": {
    "airport": "Luanda Dr. Antonio Agostinho Neto Angola International Airport",
    "latitude": -9.0491,
    "longitude": 13.5
  },
  "FNBG": {
    "airport": "Benguela Airport (Gen. V. Deslandes Airport)",
    "latitude": -12.609,
    "longitude": 13.4037
  },
  "FNCT": {
    "airport": "Catumbela Airport",
    "latitude": -12.4792,
    "longitude": 13.4869
  },
  "FNLB": {
    "airport": "Lobito Airport",
    "latitude": -12.3757,
    "longitude": 13.561
  },
  "FNKU": {
    "airport": "Kuito Airport",
    "latitude": -12.4046,
    "longitude": 16.9474
  },
  "FNCA": {
    "airport": "Cabinda Airport",
    "latitude": -5.59699,
    "longitude": 12.1884
  },
  "FNGI": {
    "airport": "Ondjiva Pereira Airport",
    "latitude": -17.0435,
    "longitude": 15.6838
  },
  "FNXA": {
    "airport": "Xangongo Airport",
    "latitude": -16.7554,
    "longitude": 14.9653
  },
  "FNHU": {
    "airport": "Albano Machado Airport",
    "latitude": -12.8089,
    "longitude": 15.7605
  },
  "FNUB": {
    "airport": "Lubango Mukanka Airport",
    "latitude": -14.9247,
    "longitude": 13.575
  },
  "FNCV": {
    "airport": "Cuito Cuanavale Airport",
    "latitude": -15.1603,
    "longitude": 19.1561
  },
  "FNME": {
    "airport": "Menongue Airport",
    "latitude": -14.6576,
    "longitude": 17.7198
  },
  "FNWK": {
    "airport": "Waco Kungo Airport",
    "latitude": -11.4264,
    "longitude": 15.1014
  },
  "FNSU": {
    "airport": "Sumbe Airport",
    "latitude": -11.1679,
    "longitude": 13.8475
  },
  "FNPA": {
    "airport": "Porto Amboim Airport",
    "latitude": -10.722,
    "longitude": 13.7655
  },
  "FNLU": {
    "airport": "Quatro de Fevereiro Airport",
    "latitude": -8.85837,
    "longitude": 13.2312
  },
  "FNCF": {
    "airport": "Cafunfo Airport",
    "latitude": -8.78361,
    "longitude": 17.9897
  },
  "FNDU": {
    "airport": "Dundo Airport",
    "latitude": -7.40089,
    "longitude": 20.8185
  },
  "FNLK": {
    "airport": "Lucapa Airport",
    "latitude": -8.44573,
    "longitude": 20.7321
  },
  "FNLZ": {
    "airport": "Cuango-Luzamba Airport",
    "latitude": -9.11596,
    "longitude": 18.0493
  },
  "FNZG": {
    "airport": "Nzagi Airport",
    "latitude": -7.71694,
    "longitude": 21.3582
  },
  "FNCH": {
    "airport": "Chitato Airport",
    "latitude": -7.35889,
    "longitude": 20.8047
  },
  "FNSA": {
    "airport": "Henrique de Carvalho Airport",
    "latitude": -9.68907,
    "longitude": 20.4319
  },
  "FNCP": {
    "airport": "Kapanda Airport",
    "latitude": -9.76937,
    "longitude": 15.4553
  },
  "FNMA": {
    "airport": "Malanje Airport",
    "latitude": -9.52509,
    "longitude": 16.3124
  },
  "FNCZ": {
    "airport": "Cazombo Airport",
    "latitude": -11.8931,
    "longitude": 22.9164
  },
  "FNUE": {
    "airport": "Luena Airport",
    "latitude": -11.7681,
    "longitude": 19.8977
  },
  "FNUA": {
    "airport": "Luau Airport",
    "latitude": -10.7158,
    "longitude": 22.2311
  },
  "FNMO": {
    "airport": "Namibe Airport (Yuri Gagarin Airport)",
    "latitude": -15.2612,
    "longitude": 12.1468
  },
  "FNNG": {
    "airport": "Negage Airport",
    "latitude": -7.75451,
    "longitude": 15.2877
  },
  "FNUG": {
    "airport": "Uige Airport",
    "latitude": -7.60307,
    "longitude": 15.0278
  },
  "FNZE": {
    "airport": "N'zeto Airport",
    "latitude": -7.25944,
    "longitude": 12.8631
  },
  "FNBC": {
    "airport": "Mbanza Congo Airport",
    "latitude": -6.2699,
    "longitude": 14.247
  },
  "FNSO": {
    "airport": "Soyo Airport",
    "latitude": -6.14109,
    "longitude": 12.3718
  },
  "SCRM": {
    "airport": "Teniente R. Marsh Airport",
    "latitude": -62.1908,
    "longitude": -58.9867
  },
  "SABE": {
    "airport": "Aeroparque Internacional Jorge Newbery",
    "latitude": -34.5589,
    "longitude": -58.4164
  },
  "SAZB": {
    "airport": "Comandante Espora Airport",
    "latitude": -38.725,
    "longitude": -62.1693
  },
  "SAZC": {
    "airport": "Brigadier Hector Eduardo Ruiz Airport",
    "latitude": -37.4461,
    "longitude": -61.8893
  },
  "SADP": {
    "airport": "El Palomar Airport",
    "latitude": -34.6099,
    "longitude": -58.6126
  },
  "SAEZ": {
    "airport": "Ministro Pistarini International Airport",
    "latitude": -34.8222,
    "longitude": -58.5358
  },
  "SAAJ": {
    "airport": "Junin Airport",
    "latitude": -34.5459,
    "longitude": -60.9306
  },
  "SADL": {
    "airport": "La Plata Airport",
    "latitude": -34.9722,
    "longitude": -57.8947
  },
  "SAZM": {
    "airport": "Astor Piazzolla International Airport",
    "latitude": -37.9342,
    "longitude": -57.5733
  },
  "SAZO": {
    "airport": "Necochea Airport",
    "latitude": -38.4831,
    "longitude": -58.8172
  },
  "SAZF": {
    "airport": "Olavarria Airport",
    "latitude": -36.89,
    "longitude": -60.2166
  },
  "SAZH": {
    "airport": "Tres Arroyos Airport",
    "latitude": -38.3869,
    "longitude": -60.3297
  },
  "SAZP": {
    "airport": "Comodoro Pedro Zanni Airport",
    "latitude": -35.8446,
    "longitude": -61.8576
  },
  "SAZL": {
    "airport": "Santa Teresita Airport",
    "latitude": -36.5423,
    "longitude": -56.7218
  },
  "SAZT": {
    "airport": "Tandil Airport",
    "latitude": -37.2374,
    "longitude": -59.2279
  },
  "SAZV": {
    "airport": "Villa Gesell Airport",
    "latitude": -37.2354,
    "longitude": -57.0292
  },
  "SANC": {
    "airport": "Coronel Felipe Varela International Airport",
    "latitude": -28.5956,
    "longitude": -65.7517
  },
  "SARS": {
    "airport": "Presidencia Roque Saenz Pena Airport",
    "latitude": -26.7536,
    "longitude": -60.4922
  },
  "SARE": {
    "airport": "Resistencia International Airport",
    "latitude": -27.45,
    "longitude": -59.0561
  },
  "SAVR": {
    "airport": "Alto Rio Senguer Airport",
    "latitude": -45.0136,
    "longitude": -70.8122
  },
  "SAVC": {
    "airport": "General Enrique Mosconi International Airport",
    "latitude": -45.7853,
    "longitude": -67.4655
  },
  "SAVD": {
    "airport": "El Maiten Airport",
    "latitude": -42.0292,
    "longitude": -71.1725
  },
  "SAVE": {
    "airport": "Esquel Airport",
    "latitude": -42.908,
    "longitude": -71.1395
  },
  "SAWS": {
    "airport": "Jose de San Martin Airport",
    "latitude": -44.0486,
    "longitude": -70.4589
  },
  "SAVM": {
    "airport": "Lago Musters Airport",
    "latitude": -45.5824,
    "longitude": -68.9998
  },
  "SAVY": {
    "airport": "El Tehuelche Airport",
    "latitude": -42.7592,
    "longitude": -65.1027
  },
  "SAVT": {
    "airport": "Almirante Marcos A. Zar Airport",
    "latitude": -43.2105,
    "longitude": -65.2703
  },
  "SAWM": {
    "airport": "Rio Mayo Airport",
    "latitude": -45.7039,
    "longitude": -70.2456
  },
  "SACO": {
    "airport": "Ingeniero Aeronautico Ambrosio L.V. Taravella International Airport (Pajas Blancas)",
    "latitude": -31.3236,
    "longitude": -64.208
  },
  "SACC": {
    "airport": "La Cumbre Airport",
    "latitude": -31.0058,
    "longitude": -64.5319
  },
  "SAOC": {
    "airport": "Las Higueras Airport",
    "latitude": -33.0851,
    "longitude": -64.2613
  },
  "SAOD": {
    "airport": "Villa Dolores Airport",
    "latitude": -31.9452,
    "longitude": -65.1463
  },
  "SARL": {
    "airport": "Paso de los Libres Airport",
    "latitude": -29.6894,
    "longitude": -57.1521
  },
  "SARC": {
    "airport": "Doctor Fernando Piragine Niveyro International Airport",
    "latitude": -27.4455,
    "longitude": -58.7619
  },
  "SARM": {
    "airport": "Monte Caseros Airport",
    "latitude": -30.2719,
    "longitude": -57.6402
  },
  "SATM": {
    "airport": "Mercedes Airport",
    "latitude": -29.2214,
    "longitude": -58.0878
  },
  "SATG": {
    "airport": "Goya Airport",
    "latitude": -29.1058,
    "longitude": -59.2189
  },
  "SATU": {
    "airport": "Curuzu Cuatia Airport",
    "latitude": -29.7706,
    "longitude": -57.9789
  },
  "SAAC": {
    "airport": "Comodoro Pierrestegui Airport",
    "latitude": -31.2969,
    "longitude": -57.9966
  },
  "SAAG": {
    "airport": "Gualeguaychu Airport",
    "latitude": -33.0103,
    "longitude": -58.6131
  },
  "SAAP": {
    "airport": "General Justo Jose de Urquiza Airport",
    "latitude": -31.7948,
    "longitude": -60.4804
  },
  "SATC": {
    "airport": "Clorinda Airport",
    "latitude": -25.3036,
    "longitude": -57.7344
  },
  "SARF": {
    "airport": "Formosa International Airport (El Pucu Airport)",
    "latitude": -26.2127,
    "longitude": -58.2281
  },
  "SATK": {
    "airport": "Alferez Armando Rodriguez Airport",
    "latitude": -24.7214,
    "longitude": -60.5488
  },
  "SASJ": {
    "airport": "Gobernador Horacio Guzman International Airport",
    "latitude": -24.3928,
    "longitude": -65.0978
  },
  "SAZG": {
    "airport": "General Pico Airport",
    "latitude": -35.6962,
    "longitude": -63.7583
  },
  "SAZR": {
    "airport": "Santa Rosa Airport (Argentina)",
    "latitude": -36.5883,
    "longitude": -64.2757
  },
  "SANL": {
    "airport": "Capitan Vicente Almandos Almonacid Airport",
    "latitude": -29.3816,
    "longitude": -66.7958
  },
  "SAMR": {
    "airport": "San Rafael Airport (Argentina)",
    "latitude": -34.5883,
    "longitude": -68.4039
  },
  "SAMM": {
    "airport": "Comodoro D. Ricardo Salomon Airport",
    "latitude": -35.4936,
    "longitude": -69.5743
  },
  "SAME": {
    "airport": "Gov. Francisco Gabrielli International Airport (El Plumerillo)",
    "latitude": -32.8317,
    "longitude": -68.7929
  },
  "SATD": {
    "airport": "Eldorado Airport",
    "latitude": -26.3975,
    "longitude": -54.5747
  },
  "SARI": {
    "airport": "Cataratas del Iguazu International Airport",
    "latitude": -25.7373,
    "longitude": -54.4734
  },
  "SARP": {
    "airport": "Libertador General Jose de San Martin Airport",
    "latitude": -27.3858,
    "longitude": -55.9707
  },
  "SAHZ": {
    "airport": "Zapala Airport",
    "latitude": -38.9755,
    "longitude": -70.1136
  },
  "SAZY": {
    "airport": "Aviador Carlos Campos Airport",
    "latitude": -40.0754,
    "longitude": -71.1373
  },
  "SAZW": {
    "airport": "Cutral Co Airport",
    "latitude": -38.9397,
    "longitude": -69.2646
  },
  "SAHC": {
    "airport": "Chos Malal Airport",
    "latitude": -37.4447,
    "longitude": -70.2225
  },
  "SAZN": {
    "airport": "Presidente Peron International Air",
    "latitude": -38.949,
    "longitude": -68.1557
  },
  "SAHS": {
    "airport": "Rincon de los Sauces Airport",
    "latitude": -37.3906,
    "longitude": -68.9042
  },
  "SAZS": {
    "airport": "San Carlos de Bariloche Airport",
    "latitude": -41.1512,
    "longitude": -71.1575
  },
  "SAVB": {
    "airport": "El Bolson Airport",
    "latitude": -41.9432,
    "longitude": -71.5323
  },
  "SAHR": {
    "airport": "Dr. Arturo Umberto Illia Airport",
    "latitude": -39.0007,
    "longitude": -67.6205
  },
  "SAVJ": {
    "airport": "Ingeniero Jacobacci Airport (Capitan FAA H. R. Borden Airport)",
    "latitude": -41.3209,
    "longitude": -69.5749
  },
  "SAVQ": {
    "airport": "Maquinchao Airport",
    "latitude": -41.2431,
    "longitude": -68.7078
  },
  "SAVN": {
    "airport": "Antoine de Saint Exupery Airport",
    "latitude": -40.7512,
    "longitude": -65.0343
  },
  "SAVS": {
    "airport": "Sierra Grande Airport",
    "latitude": -41.5917,
    "longitude": -65.3394
  },
  "SAVV": {
    "airport": "Gobernador Edgardo Castello Airport",
    "latitude": -40.8692,
    "longitude": -63.0004
  },
  "SASO": {
    "airport": "Oran Air",
    "latitude": -23.1528,
    "longitude": -64.3292
  },
  "SASA": {
    "airport": "Martin Miguel de Guemes International Airport",
    "latitude": -24.856,
    "longitude": -65.4862
  },
  "SAST": {
    "airport": "Tartagal Airport",
    "latitude": -22.6196,
    "longitude": -63.7937
  },
  "SANU": {
    "airport": "Domingo Faustino Sarmiento Airport",
    "latitude": -31.5715,
    "longitude": -68.4182
  },
  "SAOU": {
    "airport": "Brigadier Mayor Cesar Raul Ojeda Airport",
    "latitude": -33.2732,
    "longitude": -66.3564
  },
  "SAOS": {
    "airport": "Valle del Conlara Airport",
    "latitude": -32.3847,
    "longitude": -65.1865
  },
  "SAOR": {
    "airport": "Villa Reynolds Airport",
    "latitude": -33.7299,
    "longitude": -65.3874
  },
  "SAWA": {
    "airport": "Comandante Armando Tola International Airport",
    "latitude": -50.2803,
    "longitude": -72.0531
  },
  "SAWR": {
    "airport": "Gobernador Gregores Airport",
    "latitude": -48.7831,
    "longitude": -70.15
  },
  "SAVH": {
    "airport": "Las Heras Airport",
    "latitude": -46.5383,
    "longitude": -68.9653
  },
  "SAWP": {
    "airport": "Perito Moreno Airport",
    "latitude": -46.5379,
    "longitude": -70.9787
  },
  "SAWD": {
    "airport": "Puerto Deseado Airport",
    "latitude": -47.7353,
    "longitude": -65.9041
  },
  "SAWG": {
    "airport": "Piloto Civil Norberto Fernandez International Airport",
    "latitude": -51.6089,
    "longitude": -69.3126
  },
  "SAWT": {
    "airport": "Rio Turbio Airport",
    "latitude": -51.605,
    "longitude": -72.2203
  },
  "SAWU": {
    "airport": "Santa Cruz Airport (Argentina)",
    "latitude": -50.0165,
    "longitude": -68.5792
  },
  "SAWJ": {
    "airport": "Capitan Jose Daniel Vazquez Airport",
    "latitude": -49.3068,
    "longitude": -67.8026
  },
  "SANW": {
    "airport": "Ceres Airport",
    "latitude": -29.8723,
    "longitude": -61.9279
  },
  "SAFS": {
    "airport": "Sunchales Airport",
    "latitude": -30.9575,
    "longitude": -61.5283
  },
  "SAFR": {
    "airport": "Rafaela Airport",
    "latitude": -31.2825,
    "longitude": -61.5017
  },
  "SATR": {
    "airport": "Reconquista Airport",
    "latitude": -29.2103,
    "longitude": -59.68
  },
  "SAAR": {
    "airport": "Rosario - Islas Malvinas International Airport",
    "latitude": -32.9036,
    "longitude": -60.785
  },
  "SAAV": {
    "airport": "Sauce Viejo Airport",
    "latitude": -31.7117,
    "longitude": -60.8117
  },
  "SANR": {
    "airport": "Termas de Rio Hondo Airport",
    "latitude": -27.4966,
    "longitude": -64.936
  },
  "SANE": {
    "airport": "Vicecomodoro Angel de la Paz Aragones Airport",
    "latitude": -27.7656,
    "longitude": -64.31
  },
  "SAWE": {
    "airport": "Hermes Quijada International Airport",
    "latitude": -53.7777,
    "longitude": -67.7494
  },
  "SAWH": {
    "airport": "Ushuaia - Malvinas Argentinas International Airport",
    "latitude": -54.8433,
    "longitude": -68.2958
  },
  "SANT": {
    "airport": "Teniente General Benjamin Matienzo International Airport",
    "latitude": -26.8409,
    "longitude": -65.1049
  },
  "NSAS": {
    "airport": "Ofu Airport",
    "latitude": -14.1844,
    "longitude": -169.67
  },
  "NSTU": {
    "airport": "Pago Pago International Airport",
    "latitude": -14.331,
    "longitude": -170.71
  },
  "LOWK": {
    "airport": "Klagenfurt Airport",
    "latitude": 46.6425,
    "longitude": 14.3377
  },
  "LOWW": {
    "airport": "Vienna International Airport",
    "latitude": 48.1103,
    "longitude": 16.5697
  },
  "LOWL": {
    "airport": "Linz Airport (Blue Danube Airport)",
    "latitude": 48.2332,
    "longitude": 14.1875
  },
  "LOWS": {
    "airport": "Salzburg Airport",
    "latitude": 47.7933,
    "longitude": 13.0043
  },
  "LOWG": {
    "airport": "Graz Airport",
    "latitude": 46.9911,
    "longitude": 15.4396
  },
  "LOWI": {
    "airport": "Innsbruck Airport (Kranebitten Airport)",
    "latitude": 47.2602,
    "longitude": 11.344
  },
  "LOIH": {
    "airport": "Hohenems-Dornbirn Airport",
    "latitude": 47.385,
    "longitude": 9.7
  },
  "YSCB": {
    "airport": "Canberra Airport",
    "latitude": -35.3069,
    "longitude": 149.195
  },
  "YMAY": {
    "airport": "Albury Airport",
    "latitude": -36.0678,
    "longitude": 146.958
  },
  "YARM": {
    "airport": "Armidale Airport",
    "latitude": -30.5281,
    "longitude": 151.617
  },
  "YLMQ": {
    "airport": "Lake Macquarie Airport (Belmont Airport)",
    "latitude": -33.0667,
    "longitude": 151.648
  },
  "YBHI": {
    "airport": "Broken Hill Airport",
    "latitude": -32.0014,
    "longitude": 141.472
  },
  "YBTH": {
    "airport": "Bathurst Airport",
    "latitude": -33.4094,
    "longitude": 149.652
  },
  "YBNA": {
    "airport": "Ballina Byron Gateway Airport",
    "latitude": -28.8339,
    "longitude": 153.562
  },
  "YBKE": {
    "airport": "Bourke Airport",
    "latitude": -30.0392,
    "longitude": 145.952
  },
  "YBRW": {
    "airport": "Brewarrina Airport",
    "latitude": -29.9739,
    "longitude": 146.817
  },
  "YSBK": {
    "airport": "Bankstown Airport",
    "latitude": -33.9244,
    "longitude": 150.988
  },
  "YBRN": {
    "airport": "Balranald Airport",
    "latitude": -34.6236,
    "longitude": 143.578
  },
  "YCBA": {
    "airport": "Cobar Airport",
    "latitude": -31.5383,
    "longitude": 145.794
  },
  "YCDO": {
    "airport": "Condobolin Airport",
    "latitude": -33.0644,
    "longitude": 147.209
  },
  "YSCN": {
    "airport": "Camden Airport",
    "latitude": -34.0403,
    "longitude": 150.687
  },
  "YCNK": {
    "airport": "Cessnock Airport",
    "latitude": -32.7875,
    "longitude": 151.342
  },
  "YCFS": {
    "airport": "Coffs Harbour Airport",
    "latitude": -30.3206,
    "longitude": 153.116
  },
  "YCAH": {
    "airport": "Coolah Airport",
    "latitude": -31.7733,
    "longitude": 149.61
  },
  "YCTM": {
    "airport": "Cootamundra Airport",
    "latitude": -34.6239,
    "longitude": 148.028
  },
  "YCNM": {
    "airport": "Coonamble Airport",
    "latitude": -30.9833,
    "longitude": 148.376
  },
  "YCBB": {
    "airport": "Coonabarabran Airport",
    "latitude": -31.3325,
    "longitude": 149.267
  },
  "YCBR": {
    "airport": "Collarenebri Airport",
    "latitude": -29.5217,
    "longitude": 148.582
  },
  "YCAS": {
    "airport": "Casino Airport",
    "latitude": -28.8828,
    "longitude": 153.067
  },
  "YCUA": {
    "airport": "Cudal Airport",
    "latitude": -33.2783,
    "longitude": 148.763
  },
  "YCWR": {
    "airport": "Cowra Airport",
    "latitude": -33.8447,
    "longitude": 148.649
  },
  "YCOR": {
    "airport": "Corowa Airport",
    "latitude": -35.9947,
    "longitude": 146.357
  },
  "YSDU": {
    "airport": "Dubbo City Regional Airport",
    "latitude": -32.2167,
    "longitude": 148.575
  },
  "YMDG": {
    "airport": "Mudgee Airport",
    "latitude": -32.5625,
    "longitude": 149.611
  },
  "YDLQ": {
    "airport": "Deniliquin Airport",
    "latitude": -35.5594,
    "longitude": 144.946
  },
  "YEVD": {
    "airport": "Evans Head Memorial Aerodrome",
    "latitude": -29.0933,
    "longitude": 153.42
  },
  "YFIL": {
    "airport": "Finley Airport",
    "latitude": -35.6667,
    "longitude": 145.55
  },
  "YFST": {
    "airport": "Forster (Wallis Island) Airport",
    "latitude": -32.2042,
    "longitude": 152.479
  },
  "YFBS": {
    "airport": "Forbes Airport",
    "latitude": -33.3636,
    "longitude": 147.935
  },
  "YGTH": {
    "airport": "Griffith Airport",
    "latitude": -34.2508,
    "longitude": 146.067
  },
  "YGFN": {
    "airport": "Clarence Valley Regional Airport",
    "latitude": -29.7594,
    "longitude": 153.03
  },
  "YGLI": {
    "airport": "Glen Innes Airport",
    "latitude": -29.675,
    "longitude": 151.689
  },
  "YSMB": {
    "airport": "Somersby Airfield",
    "latitude": -33.3678,
    "longitude": 151.3
  },
  "YGDH": {
    "airport": "Gunnedah Airport",
    "latitude": -30.9611,
    "longitude": 150.251
  },
  "YGLB": {
    "airport": "Goulburn Airport",
    "latitude": -34.8103,
    "longitude": 149.726
  },
  "YHAY": {
    "airport": "Hay Airport",
    "latitude": -34.5314,
    "longitude": 144.83
  },
  "YIVL": {
    "airport": "Inverell Airport",
    "latitude": -29.8883,
    "longitude": 151.144
  },
  "YKMP": {
    "airport": "Kempsey Airport",
    "latitude": -31.0744,
    "longitude": 152.77
  },
  "YLHI": {
    "airport": "Lord Howe Island Airport",
    "latitude": -31.5383,
    "longitude": 159.077
  },
  "YLRD": {
    "airport": "Lightning Ridge Airport",
    "latitude": -29.4567,
    "longitude": 147.984
  },
  "YLIS": {
    "airport": "Lismore Airport",
    "latitude": -28.8303,
    "longitude": 153.26
  },
  "YMER": {
    "airport": "Merimbula Airport",
    "latitude": -36.9086,
    "longitude": 149.901
  },
  "YMOR": {
    "airport": "Moree Airport",
    "latitude": -29.4989,
    "longitude": 149.845
  },
  "YMND": {
    "airport": "Maitland Airport",
    "latitude": -32.7013,
    "longitude": 151.493
  },
  "YMRY": {
    "airport": "Moruya Airport",
    "latitude": -35.8978,
    "longitude": 150.144
  },
  "YNBR": {
    "airport": "Narrabri Airport",
    "latitude": -30.3192,
    "longitude": 149.827
  },
  "YNHS": {
    "airport": "Nambucca Heads Airport",
    "latitude": -30.65,
    "longitude": 153
  },
  "YYNG": {
    "airport": "Young Airport",
    "latitude": -34.2556,
    "longitude": 148.248
  },
  "YSNW": {
    "airport": "NAS Nowra",
    "latitude": -34.9489,
    "longitude": 150.537
  },
  "YNAR": {
    "airport": "Narrandera Airport",
    "latitude": -34.7022,
    "longitude": 146.512
  },
  "YSCO": {
    "airport": "Scone Airport",
    "latitude": -32.0372,
    "longitude": 150.832
  },
  "YWLM": {
    "airport": "Newcastle Airport / RAAF Base Williamtown",
    "latitude": -32.795,
    "longitude": 151.834
  },
  "YNYN": {
    "airport": "Nyngan Airport",
    "latitude": -31.5511,
    "longitude": 147.203
  },
  "YORG": {
    "airport": "Orange Airport",
    "latitude": -33.3817,
    "longitude": 149.133
  },
  "YCOM": {
    "airport": "Cooma-Snowy Mountains Airport",
    "latitude": -36.3006,
    "longitude": 148.974
  },
  "YPKS": {
    "airport": "Parkes Airport",
    "latitude": -33.1314,
    "longitude": 148.239
  },
  "YPMQ": {
    "airport": "Port Macquarie Airport",
    "latitude": -31.4358,
    "longitude": 152.863
  },
  "YSGT": {
    "airport": "Singleton Airport",
    "latitude": -32.6008,
    "longitude": 151.193
  },
  "YSSY": {
    "airport": "Sydney Airport (Kingsford Smith Airport)",
    "latitude": -33.9461,
    "longitude": 151.177
  },
  "YTOC": {
    "airport": "Tocumwal Airport",
    "latitude": -35.8117,
    "longitude": 145.608
  },
  "YTEM": {
    "airport": "Temora Airport",
    "latitude": -34.4214,
    "longitude": 147.512
  },
  "YSTW": {
    "airport": "Tamworth Regional Airport",
    "latitude": -31.0839,
    "longitude": 150.847
  },
  "YTRE": {
    "airport": "Taree Airport",
    "latitude": -31.8886,
    "longitude": 152.514
  },
  "YTMU": {
    "airport": "Tumut Airport",
    "latitude": -35.2628,
    "longitude": 148.241
  },
  "YTIB": {
    "airport": "Tibooburra Airport",
    "latitude": -29.4511,
    "longitude": 142.058
  },
  "YQDI": {
    "airport": "Quirindi Airport",
    "latitude": -31.4906,
    "longitude": 150.514
  },
  "YWWA": {
    "airport": "Wee Waa Airport",
    "latitude": -30.2583,
    "longitude": 149.408
  },
  "YSWG": {
    "airport": "Wagga Wagga Airport",
    "latitude": -35.1653,
    "longitude": 147.466
  },
  "YWLG": {
    "airport": "Walgett Airport",
    "latitude": -30.0328,
    "longitude": 148.126
  },
  "YWCA": {
    "airport": "Wilcannia Airport",
    "latitude": -31.5264,
    "longitude": 143.375
  },
  "YWCH": {
    "airport": "Walcha Airport",
    "latitude": -31,
    "longitude": 151.567
  },
  "YWOL": {
    "airport": "Illawarra Regional Airport",
    "latitude": -34.5611,
    "longitude": 150.789
  },
  "YWWL": {
    "airport": "West Wyalong Airport",
    "latitude": -33.9372,
    "longitude": 147.191
  },
  "YSRI": {
    "airport": "RAAF Base Richmond",
    "latitude": -33.6006,
    "longitude": 150.781
  },
  "YBAS": {
    "airport": "Alice Springs Airport",
    "latitude": -23.8067,
    "longitude": 133.902
  },
  "YAUV": {
    "airport": "Auvergne Airport",
    "latitude": -15.7,
    "longitude": 130
  },
  "YALX": {
    "airport": "Alexandria Homestead Airport",
    "latitude": -19.0602,
    "longitude": 136.71
  },
  "YAYE": {
    "airport": "Ayers Rock Airport",
    "latitude": -25.1861,
    "longitude": 130.976
  },
  "YBRL": {
    "airport": "Borroloola Airport",
    "latitude": -16.0753,
    "longitude": 136.302
  },
  "YBTI": {
    "airport": "Bathurst Island Airport",
    "latitude": -11.7692,
    "longitude": 130.62
  },
  "YCOO": {
    "airport": "Cooinda Airport",
    "latitude": -12.9033,
    "longitude": 132.532
  },
  "YCFD": {
    "airport": "Camfield Airport",
    "latitude": -17.0217,
    "longitude": 131.327
  },
  "YCKI": {
    "airport": "Croker Island Airport",
    "latitude": -11.165,
    "longitude": 132.483
  },
  "YDVR": {
    "airport": "Docker River Airport",
    "latitude": -24.86,
    "longitude": 129.07
  },
  "YDLV": {
    "airport": "Delissaville Airport",
    "latitude": -12.55,
    "longitude": 130.685
  },
  "YPDN": {
    "airport": "Darwin International Airport",
    "latitude": -12.4147,
    "longitude": 130.877
  },
  "YELD": {
    "airport": "Elcho Island Airport",
    "latitude": -12.0194,
    "longitude": 135.571
  },
  "YFNE": {
    "airport": "Finke Airport",
    "latitude": -25.5947,
    "longitude": 134.583
  },
  "YGBI": {
    "airport": "South Goulburn Island Airport",
    "latitude": -11.65,
    "longitude": 133.382
  },
  "YPGV": {
    "airport": "Gove Airport",
    "latitude": -12.2694,
    "longitude": 136.818
  },
  "YGPT": {
    "airport": "Garden Point Airport",
    "latitude": -11.4025,
    "longitude": 130.422
  },
  "YGTE": {
    "airport": "Groote Eylandt Airport",
    "latitude": -13.975,
    "longitude": 136.46
  },
  "YTGT": {
    "airport": "The Granites Airport",
    "latitude": -26.9483,
    "longitude": 133.607
  },
  "YHMB": {
    "airport": "Hermannsburg Airport",
    "latitude": -23.93,
    "longitude": 132.805
  },
  "YHOO": {
    "airport": "Hooker Creek Airport",
    "latitude": -18.3367,
    "longitude": 130.638
  },
  "YHBY": {
    "airport": "Henbury Airport",
    "latitude": -24.584,
    "longitude": 133.236
  },
  "YHBR": {
    "airport": "Humbert River Airport",
    "latitude": -16.4897,
    "longitude": 130.63
  },
  "YINW": {
    "airport": "Inverway Airport",
    "latitude": -17.8411,
    "longitude": 129.643
  },
  "YJAB": {
    "airport": "Jabiru Airport",
    "latitude": -12.6583,
    "longitude": 132.893
  },
  "YKCA": {
    "airport": "Kings Canyon Airport",
    "latitude": -24.26,
    "longitude": 131.49
  },
  "YKCS": {
    "airport": "Kings Creek Station Airport",
    "latitude": -24.4233,
    "longitude": 131.835
  },
  "YKKG": {
    "airport": "Kalkgurung Airport",
    "latitude": -17.4319,
    "longitude": 130.808
  },
  "YPTN": {
    "airport": "RAAF Base Tindal",
    "latitude": -14.5211,
    "longitude": 132.378
  },
  "YLEV": {
    "airport": "Lake Evella Airport",
    "latitude": -12.4989,
    "longitude": 135.806
  },
  "YLKN": {
    "airport": "Lake Nash Airport",
    "latitude": -20.9807,
    "longitude": 137.918
  },
  "YMHU": {
    "airport": "McArthur River Mine Airport",
    "latitude": -16.4425,
    "longitude": 136.084
  },
  "YMCR": {
    "airport": "Manners Creek Airport",
    "latitude": -22.1,
    "longitude": 137.983
  },
  "YMGB": {
    "airport": "Milingimbi Airport",
    "latitude": -12.0944,
    "longitude": 134.894
  },
  "YMVG": {
    "airport": "Mount Cavenagh Airport",
    "latitude": -25.9667,
    "longitude": 133.2
  },
  "YMGD": {
    "airport": "Maningrida Airport",
    "latitude": -12.0561,
    "longitude": 134.234
  },
  "YMDS": {
    "airport": "MacDonald Downs Airport",
    "latitude": -22.444,
    "longitude": 135.199
  },
  "YMQA": {
    "airport": "Marqua Airport",
    "latitude": -22.8058,
    "longitude": 137.251
  },
  "YMNS": {
    "airport": "Mount Swan Airport",
    "latitude": -22.6247,
    "longitude": 135.035
  },
  "YMSF": {
    "airport": "Mount Sandford Station Airport",
    "latitude": -16.9783,
    "longitude": 130.555
  },
  "YMUP": {
    "airport": "Mulga Park Airport",
    "latitude": -25.86,
    "longitude": 131.65
  },
  "YNUM": {
    "airport": "Numbulwar Airport",
    "latitude": -14.2717,
    "longitude": 135.717
  },
  "YKPT": {
    "airport": "Port Keats Airfield",
    "latitude": -14.25,
    "longitude": 129.529
  },
  "YRNG": {
    "airport": "Ramingining Airport",
    "latitude": -12.3564,
    "longitude": 134.898
  },
  "YRKD": {
    "airport": "Rockhampton Downs Airport",
    "latitude": -18.9533,
    "longitude": 135.201
  },
  "YRRB": {
    "airport": "Roper Bar Airport",
    "latitude": -14.7348,
    "longitude": 134.525
  },
  "YNGU": {
    "airport": "Ngukurr Airport",
    "latitude": -14.7228,
    "longitude": 134.747
  },
  "YSMP": {
    "airport": "Smith Point Airport",
    "latitude": -11.15,
    "longitude": 132.15
  },
  "YSNB": {
    "airport": "Snake Bay Airport",
    "latitude": -11.4228,
    "longitude": 130.654
  },
  "YTBR": {
    "airport": "Timber Creek Airport",
    "latitude": -15.62,
    "longitude": 130.445
  },
  "YTNK": {
    "airport": "Tennant Creek Airport",
    "latitude": -19.6344,
    "longitude": 134.183
  },
  "YTMY": {
    "airport": "Tobermorey Airport",
    "latitude": -22.2558,
    "longitude": 137.953
  },
  "YVRD": {
    "airport": "Victoria River Downs Airport",
    "latitude": -16.4021,
    "longitude": 131.005
  },
  "YWAV": {
    "airport": "Wave Hill Airport",
    "latitude": -17.3933,
    "longitude": 131.118
  },
  "YWOR": {
    "airport": "Wollogorang Airport",
    "latitude": -17.2199,
    "longitude": 137.935
  },
  "YWTL": {
    "airport": "Waterloo Airport",
    "latitude": -16.63,
    "longitude": 129.32
  },
  "YYND": {
    "airport": "Yuendumu Airport",
    "latitude": -22.2542,
    "longitude": 131.782
  },
  "YARY": {
    "airport": "Arrabury Airport",
    "latitude": -26.693,
    "longitude": 141.048
  },
  "YABI": {
    "airport": "Abingdon Airport",
    "latitude": -17.6167,
    "longitude": 143.167
  },
  "YAPH": {
    "airport": "Alpha Airport",
    "latitude": -23.6461,
    "longitude": 146.584
  },
  "YNPE": {
    "airport": "Northern Peninsula Airport",
    "latitude": -10.9508,
    "longitude": 142.459
  },
  "YAGD": {
    "airport": "Augustus Downs Airport",
    "latitude": -18.515,
    "longitude": 139.878
  },
  "YAUR": {
    "airport": "Aurukun Airport",
    "latitude": -13.3541,
    "longitude": 141.721
  },
  "YAMC": {
    "airport": "Aramac Airport",
    "latitude": -22.9667,
    "longitude": 145.242
  },
  "YAYR": {
    "airport": "Ayr Airport",
    "latitude": -19.5844,
    "longitude": 147.329
  },
  "YLLE": {
    "airport": "Ballera Airport",
    "latitude": -27.4056,
    "longitude": 141.809
  },
  "YBAR": {
    "airport": "Barcaldine Airport",
    "latitude": -23.5653,
    "longitude": 145.307
  },
  "YBUD": {
    "airport": "Bundaberg Airport",
    "latitude": -24.9039,
    "longitude": 152.319
  },
  "YBAU": {
    "airport": "Badu Island Airport",
    "latitude": -10.15,
    "longitude": 142.173
  },
  "YBIE": {
    "airport": "Bedourie Airport",
    "latitude": -24.3461,
    "longitude": 139.46
  },
  "YBAW": {
    "airport": "Barkly Downs Airport",
    "latitude": -20.4958,
    "longitude": 138.475
  },
  "YBCK": {
    "airport": "Blackall Airport",
    "latitude": -24.4278,
    "longitude": 145.429
  },
  "YBLL": {
    "airport": "Bollon Airport",
    "latitude": -28.0583,
    "longitude": 147.483
  },
  "YBTR": {
    "airport": "Blackwater Airport",
    "latitude": -23.6031,
    "longitude": 148.807
  },
  "YBPI": {
    "airport": "Brampton Island Airport",
    "latitude": -20.8033,
    "longitude": 149.27
  },
  "YBBN": {
    "airport": "Brisbane Airport",
    "latitude": -27.3842,
    "longitude": 153.117
  },
  "YBOU": {
    "airport": "Boulia Airport",
    "latitude": -22.9133,
    "longitude": 139.9
  },
  "YBEO": {
    "airport": "Betoota Airport",
    "latitude": -25.6417,
    "longitude": 140.783
  },
  "YBKT": {
    "airport": "Burketown Airport",
    "latitude": -17.7486,
    "longitude": 139.534
  },
  "YBDV": {
    "airport": "Birdsville Airport",
    "latitude": -25.8975,
    "longitude": 139.348
  },
  "YCCA": {
    "airport": "Chinchilla Airport",
    "latitude": -26.775,
    "longitude": 150.617
  },
  "YCRY": {
    "airport": "Croydon Airport",
    "latitude": -18.225,
    "longitude": 142.258
  },
  "YCMU": {
    "airport": "Cunnamulla Airport",
    "latitude": -28.03,
    "longitude": 145.622
  },
  "YCMW": {
    "airport": "Camooweal Airport",
    "latitude": -19.9117,
    "longitude": 138.125
  },
  "YCMT": {
    "airport": "Clermont Airport",
    "latitude": -22.7731,
    "longitude": 147.621
  },
  "YCCT": {
    "airport": "Coconut Island Airport",
    "latitude": -10.05,
    "longitude": 143.07
  },
  "YCCY": {
    "airport": "Cloncurry Airport",
    "latitude": -20.6686,
    "longitude": 140.504
  },
  "YBCS": {
    "airport": "Cairns Airport",
    "latitude": -16.8858,
    "longitude": 145.755
  },
  "YBCV": {
    "airport": "Charleville Airport",
    "latitude": -26.4133,
    "longitude": 146.262
  },
  "YCKN": {
    "airport": "Cooktown Airport",
    "latitude": -15.4447,
    "longitude": 145.184
  },
  "YCDR": {
    "airport": "Caloundra Airport",
    "latitude": -26.8,
    "longitude": 153.1
  },
  "YCOE": {
    "airport": "Coen Airport",
    "latitude": -13.7611,
    "longitude": 143.113
  },
  "YCHT": {
    "airport": "Charters Towers Airport",
    "latitude": -20.0431,
    "longitude": 146.273
  },
  "YUNY": {
    "airport": "Cluny Airport",
    "latitude": -24.5167,
    "longitude": 139.617
  },
  "YDAY": {
    "airport": "Dalby Airport",
    "latitude": -27.1553,
    "longitude": 151.267
  },
  "YDLT": {
    "airport": "Delta Downs Airport",
    "latitude": -16.9917,
    "longitude": 141.317
  },
  "YDRH": {
    "airport": "Durham Downs Airport",
    "latitude": -27.075,
    "longitude": 141.9
  },
  "YDKI": {
    "airport": "Dunk Island Airport",
    "latitude": -17.9417,
    "longitude": 146.14
  },
  "YDMG": {
    "airport": "Doomadgee Airport",
    "latitude": -17.9403,
    "longitude": 138.822
  },
  "YDBR": {
    "airport": "Dunbar Airport",
    "latitude": -16.05,
    "longitude": 142.4
  },
  "YDOR": {
    "airport": "Dorunda Airport",
    "latitude": -16.5537,
    "longitude": 141.824
  },
  "YDBI": {
    "airport": "Dirranbandi Airport",
    "latitude": -28.5917,
    "longitude": 148.217
  },
  "YDRI": {
    "airport": "Durrie Airport",
    "latitude": -25.685,
    "longitude": 140.228
  },
  "YDPD": {
    "airport": "Davenport Downs Airport",
    "latitude": -24.15,
    "longitude": 141.108
  },
  "YDIX": {
    "airport": "Dixie Airport",
    "latitude": -15.1175,
    "longitude": 143.316
  },
  "YDYS": {
    "airport": "Dysart Airport",
    "latitude": -22.6222,
    "longitude": 148.364
  },
  "YPMP": {
    "airport": "Edward River Airport",
    "latitude": -14.8965,
    "longitude": 141.609
  },
  "YEML": {
    "airport": "Emerald Airport",
    "latitude": -23.5675,
    "longitude": 148.179
  },
  "YESE": {
    "airport": "Elrose Airport",
    "latitude": -20.9764,
    "longitude": 141.007
  },
  "YGAY": {
    "airport": "Gayndah Airport",
    "latitude": -25.6144,
    "longitude": 151.619
  },
  "YGAM": {
    "airport": "Gamboola Airport",
    "latitude": -16.55,
    "longitude": 143.667
  },
  "YGDS": {
    "airport": "Gregory Downs Airport",
    "latitude": -18.625,
    "longitude": 139.233
  },
  "YBOI": {
    "airport": "Boigu Island Airport",
    "latitude": -9.23278,
    "longitude": 142.218
  },
  "YGKL": {
    "airport": "Great Keppel Island Airport",
    "latitude": -23.1833,
    "longitude": 150.942
  },
  "YGLE": {
    "airport": "Glengyle Airport",
    "latitude": -24.8083,
    "longitude": 139.6
  },
  "YGLO": {
    "airport": "Glenormiston Airport",
    "latitude": -22.8883,
    "longitude": 138.825
  },
  "YGLA": {
    "airport": "Gladstone Airport",
    "latitude": -23.8697,
    "longitude": 151.223
  },
  "YGDI": {
    "airport": "Goondiwindi Airport",
    "latitude": -28.5214,
    "longitude": 150.32
  },
  "YGON": {
    "airport": "Mount Gordon Airport",
    "latitude": -19.7726,
    "longitude": 139.404
  },
  "YGTN": {
    "airport": "Georgetown Airport",
    "latitude": -18.305,
    "longitude": 143.53
  },
  "YGNV": {
    "airport": "Greenvale Airport",
    "latitude": -18.9966,
    "longitude": 145.014
  },
  "YGYM": {
    "airport": "Gympie Airport",
    "latitude": -26.2828,
    "longitude": 152.702
  },
  "YHTL": {
    "airport": "Heathlands Airport",
    "latitude": -11.7369,
    "longitude": 142.577
  },
  "YHUG": {
    "airport": "Hughenden Airport",
    "latitude": -20.815,
    "longitude": 144.225
  },
  "YHID": {
    "airport": "Horn Island Airport",
    "latitude": -10.5864,
    "longitude": 142.29
  },
  "YHHY": {
    "airport": "Highbury Airport",
    "latitude": -16.4244,
    "longitude": 143.146
  },
  "YHDY": {
    "airport": "Headingly Airport",
    "latitude": -21.3333,
    "longitude": 138.283
  },
  "YBHM": {
    "airport": "Great Barrier Reef Airport",
    "latitude": -20.3581,
    "longitude": 148.952
  },
  "YHBA": {
    "airport": "Hervey Bay Airport",
    "latitude": -25.3189,
    "longitude": 152.88
  },
  "YIFY": {
    "airport": "Iffley Airport",
    "latitude": -18.9,
    "longitude": 141.217
  },
  "YIFL": {
    "airport": "Innisfail Airport",
    "latitude": -17.5594,
    "longitude": 146.012
  },
  "YIGM": {
    "airport": "Ingham Airport",
    "latitude": -18.6606,
    "longitude": 146.152
  },
  "YIKM": {
    "airport": "Inkerman Airport",
    "latitude": -16.275,
    "longitude": 141.442
  },
  "YINJ": {
    "airport": "Injune Airport",
    "latitude": -25.851,
    "longitude": 148.55
  },
  "YLHR": {
    "airport": "Lockhart River Airport",
    "latitude": -12.7869,
    "longitude": 143.305
  },
  "YBMA": {
    "airport": "Mount Isa Airport",
    "latitude": -20.6639,
    "longitude": 139.489
  },
  "YISF": {
    "airport": "Isisford Airport",
    "latitude": -24.2583,
    "longitude": 144.425
  },
  "YJLC": {
    "airport": "Julia Creek Airport",
    "latitude": -20.6683,
    "longitude": 141.723
  },
  "YJDA": {
    "airport": "Jundah Airport",
    "latitude": -24.8417,
    "longitude": 143.058
  },
  "YCSV": {
    "airport": "Collinsville Airport",
    "latitude": -20.5967,
    "longitude": 147.86
  },
  "YKRY": {
    "airport": "Kingaroy Airport",
    "latitude": -26.5808,
    "longitude": 151.841
  },
  "YKLB": {
    "airport": "Koolburra Airport",
    "latitude": -15.3189,
    "longitude": 143.955
  },
  "YKML": {
    "airport": "Kamileroi Airport",
    "latitude": -19.375,
    "longitude": 140.057
  },
  "YKLA": {
    "airport": "Koolatah Airport",
    "latitude": -15.8886,
    "longitude": 142.439
  },
  "YKPR": {
    "airport": "Kalpowar Airport",
    "latitude": -14.89,
    "longitude": 144.22
  },
  "YKMB": {
    "airport": "Karumba Airport",
    "latitude": -17.4567,
    "longitude": 140.83
  },
  "YSPV": {
    "airport": "Springvale Airport",
    "latitude": -23.55,
    "longitude": 140.7
  },
  "YKUB": {
    "airport": "Kubin Airport",
    "latitude": -10.225,
    "longitude": 142.218
  },
  "YKOW": {
    "airport": "Kowanyama Airport",
    "latitude": -15.4856,
    "longitude": 141.751
  },
  "YLIN": {
    "airport": "Lindeman Island Airport",
    "latitude": -20.4536,
    "longitude": 149.04
  },
  "YLFD": {
    "airport": "Lakefield Airport",
    "latitude": -14.9207,
    "longitude": 144.203
  },
  "YLND": {
    "airport": "Lakeland Downs Airport",
    "latitude": -15.8333,
    "longitude": 144.85
  },
  "YCGO": {
    "airport": "Chillagoe Airport",
    "latitude": -17.1428,
    "longitude": 144.529
  },
  "YLOR": {
    "airport": "Lorraine Airport",
    "latitude": -18.9933,
    "longitude": 139.907
  },
  "YLRE": {
    "airport": "Longreach Airport",
    "latitude": -23.4342,
    "longitude": 144.28
  },
  "YLHS": {
    "airport": "Lyndhurst Airport",
    "latitude": -19.1958,
    "longitude": 144.371
  },
  "YLOV": {
    "airport": "Lotus Vale Station Airport",
    "latitude": -17.0483,
    "longitude": 141.376
  },
  "YLRS": {
    "airport": "New Laura Airport",
    "latitude": -15.1833,
    "longitude": 144.367
  },
  "YLRA": {
    "airport": "Laura Airport",
    "latitude": -15.55,
    "longitude": 144.45
  },
  "YLAH": {
    "airport": "Lawn Hill Airport",
    "latitude": -18.5683,
    "longitude": 138.635
  },
  "YLZI": {
    "airport": "Lizard Island Airport",
    "latitude": -14.6733,
    "longitude": 145.455
  },
  "YMYB": {
    "airport": "Maryborough Airport",
    "latitude": -25.5133,
    "longitude": 152.715
  },
  "YBSU": {
    "airport": "Sunshine Coast Airport",
    "latitude": -26.6033,
    "longitude": 153.091
  },
  "YMOT": {
    "airport": "Moreton Airport",
    "latitude": -12.4442,
    "longitude": 142.638
  },
  "YBMK": {
    "airport": "Mackay Airport",
    "latitude": -21.1717,
    "longitude": 149.18
  },
  "YMEU": {
    "airport": "Merluna Airport",
    "latitude": -13.0649,
    "longitude": 142.454
  },
  "YMMU": {
    "airport": "Middlemount Airport",
    "latitude": -22.8025,
    "longitude": 148.705
  },
  "YMTO": {
    "airport": "Monto Airport",
    "latitude": -24.8858,
    "longitude": 151.1
  },
  "YMRB": {
    "airport": "Moranbah Airport",
    "latitude": -22.0578,
    "longitude": 148.077
  },
  "YMBA": {
    "airport": "Mareeba Airfield",
    "latitude": -17.0692,
    "longitude": 145.419
  },
  "YMIT": {
    "airport": "Mitchell Airport",
    "latitude": -26.4833,
    "longitude": 147.937
  },
  "YMGV": {
    "airport": "Musgrave Airport",
    "latitude": -14.7757,
    "longitude": 143.505
  },
  "YMIR": {
    "airport": "Miranda Downs Airport",
    "latitude": -17.3289,
    "longitude": 141.886
  },
  "YMWX": {
    "airport": "Marion Downs Airport",
    "latitude": -23.3637,
    "longitude": 139.65
  },
  "YMAE": {
    "airport": "Murray Island Airport",
    "latitude": -9.91667,
    "longitude": 144.055
  },
  "YDNI": {
    "airport": "Darnley Island Airport",
    "latitude": -9.58333,
    "longitude": 143.767
  },
  "YNAP": {
    "airport": "Nappa Merrie Airport",
    "latitude": -27.5583,
    "longitude": 141.133
  },
  "YNSH": {
    "airport": "Noosa Airport",
    "latitude": -26.4233,
    "longitude": 153.063
  },
  "YNTN": {
    "airport": "Normanton Airport",
    "latitude": -17.6841,
    "longitude": 141.07
  },
  "YORC": {
    "airport": "Orchid Beach Airport",
    "latitude": -24.9594,
    "longitude": 153.315
  },
  "YYKI": {
    "airport": "Yorke Island Airport",
    "latitude": -9.7528,
    "longitude": 143.406
  },
  "YBOK": {
    "airport": "Oakey Army Aviation Centre",
    "latitude": -27.4114,
    "longitude": 151.735
  },
  "YMTI": {
    "airport": "Mornington Island Airport",
    "latitude": -16.6625,
    "longitude": 139.178
  },
  "YMNK": {
    "airport": "Monkira Airport",
    "latitude": -24.8167,
    "longitude": 140.533
  },
  "YBCG": {
    "airport": "Gold Coast Airport (Coolangatta Airport)",
    "latitude": -28.1644,
    "longitude": 153.505
  },
  "YMOO": {
    "airport": "Mooraberree Airport",
    "latitude": -25.25,
    "longitude": 140.983
  },
  "YOEN": {
    "airport": "Oenpelli Airport",
    "latitude": -12.325,
    "longitude": 133.006
  },
  "YOSB": {
    "airport": "Osborne Mine Airport",
    "latitude": -22.0817,
    "longitude": 140.555
  },
  "YMNY": {
    "airport": "Morney Airport",
    "latitude": -25.3583,
    "longitude": 141.433
  },
  "YTMO": {
    "airport": "The Monument Airport",
    "latitude": -21.8111,
    "longitude": 139.924
  },
  "YPAM": {
    "airport": "Palm Island Airport",
    "latitude": -18.7553,
    "longitude": 146.581
  },
  "YBPN": {
    "airport": "Whitsunday Coast Airport",
    "latitude": -20.495,
    "longitude": 148.552
  },
  "YRMD": {
    "airport": "Richmond Airport",
    "latitude": -20.7019,
    "longitude": 143.115
  },
  "YROM": {
    "airport": "Roma Airport",
    "latitude": -26.545,
    "longitude": 148.775
  },
  "YROB": {
    "airport": "Robinhood Airport",
    "latitude": -18.845,
    "longitude": 143.71
  },
  "YBRK": {
    "airport": "Rockhampton Airport",
    "latitude": -23.3819,
    "longitude": 150.475
  },
  "YRSB": {
    "airport": "Roseberth Airport",
    "latitude": -25.8333,
    "longitude": 139.65
  },
  "YRTP": {
    "airport": "Rutland Plains Airport",
    "latitude": -15.6433,
    "longitude": 141.843
  },
  "YSII": {
    "airport": "Saibai Island Airport",
    "latitude": -9.37833,
    "longitude": 142.625
  },
  "YSPK": {
    "airport": "Spring Creek Airport",
    "latitude": -18.6333,
    "longitude": 144.567
  },
  "YSGE": {
    "airport": "St George Airport",
    "latitude": -28.0497,
    "longitude": 148.595
  },
  "YSPT": {
    "airport": "Southport Airport",
    "latitude": -27.9221,
    "longitude": 153.372
  },
  "YSPE": {
    "airport": "Stanthorpe Airport",
    "latitude": -28.6203,
    "longitude": 151.991
  },
  "YSTI": {
    "airport": "Stephens Island Airport",
    "latitude": -9.51,
    "longitude": 143.55
  },
  "YSMR": {
    "airport": "Strathmore Airport",
    "latitude": -17.85,
    "longitude": 142.567
  },
  "YWBS": {
    "airport": "Warraber Island Airport",
    "latitude": -10.2083,
    "longitude": 142.825
  },
  "YTGA": {
    "airport": "Tangalooma Airport",
    "latitude": -27.13,
    "longitude": 153.363
  },
  "YTDR": {
    "airport": "Theodore Airport",
    "latitude": -24.9933,
    "longitude": 150.093
  },
  "YTNG": {
    "airport": "Thangool Airport",
    "latitude": -24.4939,
    "longitude": 150.576
  },
  "YTEE": {
    "airport": "Trepell Airport",
    "latitude": -21.835,
    "longitude": 140.888
  },
  "YBTL": {
    "airport": "Townsville Airport",
    "latitude": -19.2525,
    "longitude": 146.765
  },
  "YTWB": {
    "airport": "Toowoomba City Aerodrome",
    "latitude": -27.5428,
    "longitude": 151.916
  },
  "YTHY": {
    "airport": "Thylungra Airport",
    "latitude": -26.0833,
    "longitude": 143.467
  },
  "YMAA": {
    "airport": "Mabuiag Island Airport",
    "latitude": -9.95,
    "longitude": 142.183
  },
  "YUDA": {
    "airport": "Undara Airport",
    "latitude": -18.2,
    "longitude": 144.6
  },
  "YQLP": {
    "airport": "Quilpie Airport",
    "latitude": -26.6122,
    "longitude": 144.253
  },
  "YMTB": {
    "airport": "Muttaburra Airport",
    "latitude": -22.5833,
    "longitude": 144.533
  },
  "YVRS": {
    "airport": "Vanrook Airport",
    "latitude": -16.9633,
    "longitude": 141.95
  },
  "YWCK": {
    "airport": "Warwick Airport",
    "latitude": -28.1494,
    "longitude": 151.943
  },
  "YWND": {
    "airport": "Wondai Airport",
    "latitude": -26.2833,
    "longitude": 151.858
  },
  "YBWP": {
    "airport": "Weipa Airport",
    "latitude": -12.6786,
    "longitude": 141.925
  },
  "YWTN": {
    "airport": "Winton Airport",
    "latitude": -22.3636,
    "longitude": 143.086
  },
  "YMLS": {
    "airport": "Miles Airport",
    "latitude": -26.8083,
    "longitude": 150.175
  },
  "YWDH": {
    "airport": "Windorah Airport",
    "latitude": -25.4131,
    "longitude": 142.667
  },
  "YWDL": {
    "airport": "Wondoola Airport",
    "latitude": -18.575,
    "longitude": 140.892
  },
  "YWMP": {
    "airport": "Wrotham Park Airport",
    "latitude": -16.6583,
    "longitude": 144.002
  },
  "YSHR": {
    "airport": "Whitsunday Airport",
    "latitude": -20.2761,
    "longitude": 148.755
  },
  "YBWW": {
    "airport": "Toowoomba Wellcamp Airport",
    "latitude": -27.5583,
    "longitude": 151.793
  },
  "YYMI": {
    "airport": "Yam Island Airport",
    "latitude": -9.90111,
    "longitude": 142.776
  },
  "YTGM": {
    "airport": "Thargomindah Airport",
    "latitude": -27.9864,
    "longitude": 143.811
  },
  "YTAM": {
    "airport": "Taroom Airport",
    "latitude": -25.8017,
    "longitude": 149.9
  },
  "YTAA": {
    "airport": "Tara Airport",
    "latitude": -27.1567,
    "longitude": 150.477
  },
  "YBWN": {
    "airport": "Bowen Airport",
    "latitude": -20.0183,
    "longitude": 148.215
  },
  "YSGW": {
    "airport": "South Galway Airport",
    "latitude": -25.6833,
    "longitude": 142.108
  },
  "YPAD": {
    "airport": "Adelaide Airport",
    "latitude": -34.945,
    "longitude": 138.531
  },
  "YAMK": {
    "airport": "Andamooka Airport",
    "latitude": -30.4383,
    "longitude": 137.137
  },
  "YAMT": {
    "airport": "Amata Airport",
    "latitude": -26.1083,
    "longitude": 131.207
  },
  "YCWL": {
    "airport": "Cowell Airport",
    "latitude": -33.6667,
    "longitude": 136.892
  },
  "YCDU": {
    "airport": "Ceduna Airport",
    "latitude": -32.1306,
    "longitude": 133.71
  },
  "YCBP": {
    "airport": "Coober Pedy Airport",
    "latitude": -29.04,
    "longitude": 134.721
  },
  "YCEE": {
    "airport": "Cleve Airport",
    "latitude": -33.7097,
    "longitude": 136.505
  },
  "YCWI": {
    "airport": "Cowarie Airport",
    "latitude": -27.7117,
    "longitude": 138.328
  },
  "YDLK": {
    "airport": "Dulkaninna Airport",
    "latitude": -29.0133,
    "longitude": 138.481
  },
  "YERN": {
    "airport": "Pukatja Airport (Ernabella Airport)",
    "latitude": -26.2633,
    "longitude": 132.182
  },
  "YEDA": {
    "airport": "Etadunna Airport",
    "latitude": -28.7408,
    "longitude": 138.589
  },
  "YMGN": {
    "airport": "Mount Gunson Airport",
    "latitude": -31.4597,
    "longitude": 137.174
  },
  "YHAW": {
    "airport": "Wilpena Pound Airport",
    "latitude": -31.8559,
    "longitude": 138.468
  },
  "YIDK": {
    "airport": "Indulkana Airport",
    "latitude": -26.9667,
    "longitude": 133.325
  },
  "YINN": {
    "airport": "Innamincka Airport",
    "latitude": -27.7,
    "longitude": 140.733
  },
  "YKBY": {
    "airport": "Streaky Bay Airport",
    "latitude": -32.8358,
    "longitude": 134.293
  },
  "YKSC": {
    "airport": "Kingscote Airport",
    "latitude": -35.7139,
    "longitude": 137.521
  },
  "YYTA": {
    "airport": "Yalata Airport",
    "latitude": -31.4706,
    "longitude": 131.825
  },
  "YBLC": {
    "airport": "Balcanoona Airport",
    "latitude": -30.535,
    "longitude": 139.337
  },
  "YLEC": {
    "airport": "Leigh Creek Airport",
    "latitude": -30.5983,
    "longitude": 138.426
  },
  "YLOK": {
    "airport": "Lock Airport",
    "latitude": -33.5442,
    "longitude": 135.693
  },
  "YMTG": {
    "airport": "Mount Gambier Airport",
    "latitude": -37.7456,
    "longitude": 140.785
  },
  "YMPA": {
    "airport": "Minnipa Airport",
    "latitude": -32.8433,
    "longitude": 135.145
  },
  "YMCT": {
    "airport": "Millicent Airport",
    "latitude": -37.5836,
    "longitude": 140.366
  },
  "YMUG": {
    "airport": "Mungeranie Airport",
    "latitude": -28.0092,
    "longitude": 138.657
  },
  "YOOM": {
    "airport": "Moomba Airport",
    "latitude": -28.0994,
    "longitude": 140.197
  },
  "YALA": {
    "airport": "Marla Airport",
    "latitude": -27.3333,
    "longitude": 133.627
  },
  "YMUK": {
    "airport": "Mulka Airport",
    "latitude": -28.3478,
    "longitude": 138.65
  },
  "YMWT": {
    "airport": "Moolawatana Airport",
    "latitude": -29.9069,
    "longitude": 139.765
  },
  "YNRC": {
    "airport": "Naracoorte Airport",
    "latitude": -36.9853,
    "longitude": 140.725
  },
  "YNUB": {
    "airport": "Nullabor Motel Airport",
    "latitude": -31.4417,
    "longitude": 130.902
  },
  "YOOD": {
    "airport": "Oodnadatta Airport",
    "latitude": -27.5617,
    "longitude": 135.447
  },
  "YCOD": {
    "airport": "Cordillo Downs Airport",
    "latitude": -26.7453,
    "longitude": 140.638
  },
  "YOLD": {
    "airport": "Olympic Dam Airport",
    "latitude": -30.485,
    "longitude": 136.877
  },
  "YYOR": {
    "airport": "Yorketown Airport",
    "latitude": -35,
    "longitude": 137.617
  },
  "YPDI": {
    "airport": "Pandie Pandie Airport",
    "latitude": -26.1167,
    "longitude": 139.4
  },
  "YPSH": {
    "airport": "Penneshaw Airport",
    "latitude": -35.7558,
    "longitude": 137.963
  },
  "YPLC": {
    "airport": "Port Lincoln Airport",
    "latitude": -34.6053,
    "longitude": 135.88
  },
  "YPIR": {
    "airport": "Port Pirie Airport",
    "latitude": -33.2389,
    "longitude": 137.995
  },
  "YPAG": {
    "airport": "Port Augusta Airport",
    "latitude": -32.5069,
    "longitude": 137.717
  },
  "YPMH": {
    "airport": "Prominent Hill Airport",
    "latitude": -29.716,
    "longitude": 135.524
  },
  "YREN": {
    "airport": "Renmark Airport",
    "latitude": -34.1964,
    "longitude": 140.674
  },
  "YMRE": {
    "airport": "Marree Airport",
    "latitude": -29.6633,
    "longitude": 138.065
  },
  "YMYT": {
    "airport": "Merty Merty Airport",
    "latitude": -28.5833,
    "longitude": 140.317
  },
  "YPWR": {
    "airport": "RAAF Woomera Airfield",
    "latitude": -31.1442,
    "longitude": 136.817
  },
  "YWUD": {
    "airport": "Wudinna Airport",
    "latitude": -33.0433,
    "longitude": 135.447
  },
  "YWHA": {
    "airport": "Whyalla Airport",
    "latitude": -33.0589,
    "longitude": 137.514
  },
  "YMIN": {
    "airport": "Minlaton Airport",
    "latitude": -34.75,
    "longitude": 137.533
  },
  "YWYY": {
    "airport": "Burnie Airport",
    "latitude": -40.9989,
    "longitude": 145.731
  },
  "YDPO": {
    "airport": "Devonport Airport",
    "latitude": -41.1697,
    "longitude": 146.43
  },
  "YFLI": {
    "airport": "Flinders Island Airport",
    "latitude": -40.0917,
    "longitude": 147.993
  },
  "YGTO": {
    "airport": "George Town Aerodrome",
    "latitude": -41.08,
    "longitude": 146.84
  },
  "YMHB": {
    "airport": "Hobart International Airport",
    "latitude": -42.8361,
    "longitude": 147.51
  },
  "YSTH": {
    "airport": "St Helens Airport",
    "latitude": -41.3367,
    "longitude": 148.282
  },
  "YKII": {
    "airport": "King Island Airport",
    "latitude": -39.8775,
    "longitude": 143.878
  },
  "YMLT": {
    "airport": "Launceston Airport",
    "latitude": -41.5453,
    "longitude": 147.214
  },
  "YSMI": {
    "airport": "Smithton Airport",
    "latitude": -40.835,
    "longitude": 145.084
  },
  "YSRN": {
    "airport": "Strahan Airport",
    "latitude": -42.155,
    "longitude": 145.292
  },
  "YQNS": {
    "airport": "Queenstown Airport",
    "latitude": -42.075,
    "longitude": 145.532
  },
  "YARA": {
    "airport": "Ararat Airport",
    "latitude": -37.3094,
    "longitude": 142.989
  },
  "YMAV": {
    "airport": "Avalon Airport",
    "latitude": -38.0394,
    "longitude": 144.469
  },
  "YBLA": {
    "airport": "Benalla Airport",
    "latitude": -36.5519,
    "longitude": 146.007
  },
  "YBNS": {
    "airport": "Bairnsdale Airport",
    "latitude": -37.8875,
    "longitude": 147.568
  },
  "YBDG": {
    "airport": "Bendigo Airport",
    "latitude": -36.7394,
    "longitude": 144.33
  },
  "YCRG": {
    "airport": "Corryong Airport",
    "latitude": -36.1828,
    "longitude": 147.888
  },
  "YECH": {
    "airport": "Echuca Airport",
    "latitude": -36.1572,
    "longitude": 144.762
  },
  "YGLG": {
    "airport": "Geelong Airport",
    "latitude": -38.225,
    "longitude": 144.333
  },
  "YHML": {
    "airport": "Hamilton Airport",
    "latitude": -37.6489,
    "longitude": 142.065
  },
  "YHSM": {
    "airport": "Horsham Airport",
    "latitude": -36.6697,
    "longitude": 142.173
  },
  "YHPN": {
    "airport": "Hopetoun Airport",
    "latitude": -35.7153,
    "longitude": 142.36
  },
  "YKER": {
    "airport": "Kerang Airport",
    "latitude": -35.7514,
    "longitude": 143.939
  },
  "YPOK": {
    "airport": "Porepunkah Airfield",
    "latitude": -36.7187,
    "longitude": 146.89
  },
  "YMMB": {
    "airport": "Moorabbin Airport",
    "latitude": -37.9758,
    "longitude": 145.102
  },
  "YMEN": {
    "airport": "Essendon Airport",
    "latitude": -37.7281,
    "longitude": 144.902
  },
  "YMML": {
    "airport": "Melbourne Airport",
    "latitude": -37.6733,
    "longitude": 144.843
  },
  "YHOT": {
    "airport": "Mount Hotham Airport",
    "latitude": -37.0475,
    "longitude": 147.334
  },
  "YMIA": {
    "airport": "Mildura Airport",
    "latitude": -34.2292,
    "longitude": 142.086
  },
  "YOUY": {
    "airport": "Ouyen Airport",
    "latitude": -35.089,
    "longitude": 142.354
  },
  "YPOD": {
    "airport": "Portland Airport",
    "latitude": -38.3181,
    "longitude": 141.471
  },
  "YROI": {
    "airport": "Robinvale Airport",
    "latitude": -34.65,
    "longitude": 142.783
  },
  "YORB": {
    "airport": "Orbost Airport",
    "latitude": -37.79,
    "longitude": 148.61
  },
  "YSHT": {
    "airport": "Shepparton Airport",
    "latitude": -36.4289,
    "longitude": 145.393
  },
  "YSWL": {
    "airport": "Stawell Airport",
    "latitude": -37.0717,
    "longitude": 142.741
  },
  "YSWH": {
    "airport": "Swan Hill Airport",
    "latitude": -35.3758,
    "longitude": 143.533
  },
  "YWSL": {
    "airport": "West Sale Airport",
    "latitude": -38.0908,
    "longitude": 146.965
  },
  "YLTV": {
    "airport": "Latrobe Regional Airport",
    "latitude": -38.2072,
    "longitude": 146.47
  },
  "YWGT": {
    "airport": "Wangaratta Airport",
    "latitude": -36.4158,
    "longitude": 146.307
  },
  "YWKB": {
    "airport": "Warracknabeal Airport",
    "latitude": -36.3211,
    "longitude": 142.419
  },
  "YWBL": {
    "airport": "Warrnambool Airport",
    "latitude": -38.2953,
    "longitude": 142.447
  },
  "YOLA": {
    "airport": "Colac Airport",
    "latitude": -38.2867,
    "longitude": 143.68
  },
  "YMCO": {
    "airport": "Mallacoota Airport",
    "latitude": -37.5983,
    "longitude": 149.72
  },
  "YABA": {
    "airport": "Albany Airport",
    "latitude": -34.9433,
    "longitude": 117.809
  },
  "YBDF": {
    "airport": "Bedford Downs Airport",
    "latitude": -17.2867,
    "longitude": 127.463
  },
  "YBRM": {
    "airport": "Broome International Airport",
    "latitude": -17.9447,
    "longitude": 122.232
  },
  "YBLN": {
    "airport": "Busselton Regional Airport",
    "latitude": -33.6884,
    "longitude": 115.402
  },
  "YBGO": {
    "airport": "Balgo Hill Airport",
    "latitude": -20.1483,
    "longitude": 127.973
  },
  "YBUN": {
    "airport": "Bunbury Airport",
    "latitude": -33.3783,
    "longitude": 115.677
  },
  "YBYS": {
    "airport": "Beverley Springs Airport",
    "latitude": -16.7333,
    "longitude": 125.433
  },
  "YBWX": {
    "airport": "Barrow Island Airport",
    "latitude": -20.8644,
    "longitude": 115.406
  },
  "YBEB": {
    "airport": "Bellburn Airstrip",
    "latitude": -17.545,
    "longitude": 128.305
  },
  "YBRY": {
    "airport": "Barimunya Airport",
    "latitude": -22.6739,
    "longitude": 119.166
  },
  "YCAG": {
    "airport": "Caiguna Airport",
    "latitude": -32.265,
    "longitude": 125.493
  },
  "YCOI": {
    "airport": "Collie Airport",
    "latitude": -33.3667,
    "longitude": 116.217
  },
  "YCWA": {
    "airport": "Coondewanna Airport",
    "latitude": -22.9667,
    "longitude": 118.813
  },
  "YCHK": {
    "airport": "Christmas Creek Mine Airport",
    "latitude": -22.3543,
    "longitude": 119.643
  },
  "YCWY": {
    "airport": "Coolawanyah Station Airport",
    "latitude": -21.7946,
    "longitude": 117.755
  },
  "YCUE": {
    "airport": "Cue Airport",
    "latitude": -27.4467,
    "longitude": 117.918
  },
  "YCAR": {
    "airport": "Carnarvon Airport",
    "latitude": -24.8802,
    "longitude": 113.672
  },
  "YCIN": {
    "airport": "RAAF Base Curtin",
    "latitude": -17.5814,
    "longitude": 123.828
  },
  "YDGA": {
    "airport": "Dalgaranga Airport",
    "latitude": -27.8303,
    "longitude": 117.316
  },
  "YDRA": {
    "airport": "Dongara Airport",
    "latitude": -29.2981,
    "longitude": 114.927
  },
  "YDBY": {
    "airport": "Derby Airport",
    "latitude": -17.37,
    "longitude": 123.661
  },
  "YDRD": {
    "airport": "Drysdale River Airport",
    "latitude": -15.7136,
    "longitude": 126.381
  },
  "YEEB": {
    "airport": "Eneabba Airport",
    "latitude": -29.8325,
    "longitude": 115.246
  },
  "YESP": {
    "airport": "Esperance Airport",
    "latitude": -33.6844,
    "longitude": 121.823
  },
  "YECL": {
    "airport": "Eucla Airport",
    "latitude": -31.7,
    "longitude": 128.883
  },
  "YEXM": {
    "airport": "Exmouth Airport",
    "latitude": -22.0333,
    "longitude": 114.1
  },
  "YFTZ": {
    "airport": "Fitzroy Crossing Airport",
    "latitude": -18.1819,
    "longitude": 125.559
  },
  "YFRT": {
    "airport": "Forrest Airport",
    "latitude": -30.8381,
    "longitude": 128.115
  },
  "YFLO": {
    "airport": "Flora Valley Airport",
    "latitude": -18.2833,
    "longitude": 128.417
  },
  "YFRV": {
    "airport": "Forrest River Airport",
    "latitude": -15.1647,
    "longitude": 127.84
  },
  "YGIB": {
    "airport": "Gibb River Airport",
    "latitude": -16.4233,
    "longitude": 126.445
  },
  "YGIA": {
    "airport": "Ginbata Airport",
    "latitude": -22.5812,
    "longitude": 120.036
  },
  "YGDN": {
    "airport": "Gordon Downs Airport",
    "latitude": -18.6781,
    "longitude": 128.592
  },
  "YGEL": {
    "airport": "Geraldton Airport",
    "latitude": -28.7961,
    "longitude": 114.707
  },
  "YGSC": {
    "airport": "Gascoyne Junction Airport",
    "latitude": -25.0546,
    "longitude": 115.203
  },
  "YARG": {
    "airport": "Argyle Airport",
    "latitude": -16.6369,
    "longitude": 128.451
  },
  "YHLC": {
    "airport": "Halls Creek Airport",
    "latitude": -18.2339,
    "longitude": 127.67
  },
  "YHIL": {
    "airport": "Hillside Airport",
    "latitude": -21.7244,
    "longitude": 119.392
  },
  "YPJT": {
    "airport": "Jandakot Airport",
    "latitude": -32.0975,
    "longitude": 115.881
  },
  "YJNB": {
    "airport": "Jurien Bay Airport",
    "latitude": -30.3016,
    "longitude": 115.056
  },
  "YKBR": {
    "airport": "Kalbarri Airport",
    "latitude": -27.6928,
    "longitude": 114.259
  },
  "YKBL": {
    "airport": "Kambalda Airport",
    "latitude": -31.1907,
    "longitude": 121.598
  },
  "YFDF": {
    "airport": "Fortescue Dave Forrest Airport",
    "latitude": -22.2908,
    "longitude": 119.437
  },
  "YPKG": {
    "airport": "Kalgoorlie-Boulder Airport",
    "latitude": -30.7894,
    "longitude": 121.462
  },
  "YKNG": {
    "airport": "Katanning Airport",
    "latitude": -33.7167,
    "longitude": 117.633
  },
  "YPKU": {
    "airport": "East Kimberley Regional Airport",
    "latitude": -15.7781,
    "longitude": 128.708
  },
  "YKAR": {
    "airport": "Karara Airport",
    "latitude": -29.2167,
    "longitude": 116.687
  },
  "YPKA": {
    "airport": "Karratha Airport",
    "latitude": -20.7122,
    "longitude": 116.773
  },
  "YYLR": {
    "airport": "Yeelirrie Airport",
    "latitude": -27.2771,
    "longitude": 120.096
  },
  "YPLM": {
    "airport": "RAAF Learmonth (Learmonth Airport)",
    "latitude": -22.2356,
    "longitude": 114.089
  },
  "YLST": {
    "airport": "Leinster Airport",
    "latitude": -27.8433,
    "longitude": 120.703
  },
  "YLEO": {
    "airport": "Leonora Airport",
    "latitude": -28.8781,
    "longitude": 121.315
  },
  "YLTN": {
    "airport": "Laverton Airport",
    "latitude": -28.6136,
    "longitude": 122.424
  },
  "YMBL": {
    "airport": "Marble Bar Airport",
    "latitude": -21.1633,
    "longitude": 119.833
  },
  "YMGR": {
    "airport": "Margaret River Station Airport",
    "latitude": -18.6217,
    "longitude": 126.883
  },
  "YMHO": {
    "airport": "Mount House Airport",
    "latitude": -17.055,
    "longitude": 125.71
  },
  "YMIP": {
    "airport": "Mitchell Plateau Airport",
    "latitude": -14.7914,
    "longitude": 125.824
  },
  "YSHK": {
    "airport": "Shark Bay Airport",
    "latitude": -25.8939,
    "longitude": 113.577
  },
  "YMJM": {
    "airport": "Manjimup Airport",
    "latitude": -34.2653,
    "longitude": 116.14
  },
  "YMEK": {
    "airport": "Meekatharra Airport",
    "latitude": -26.6117,
    "longitude": 118.548
  },
  "YMOG": {
    "airport": "Mount Magnet Airport",
    "latitude": -28.1161,
    "longitude": 117.842
  },
  "YMDI": {
    "airport": "Mandora Station Airport",
    "latitude": -19.7383,
    "longitude": 120.838
  },
  "YMGT": {
    "airport": "Margaret River Airport",
    "latitude": -33.9306,
    "longitude": 115.1
  },
  "YMUC": {
    "airport": "Muccan Station Airport",
    "latitude": -20.6589,
    "longitude": 120.067
  },
  "YMRW": {
    "airport": "Morawa Airport",
    "latitude": -29.2017,
    "longitude": 116.022
  },
  "YMWA": {
    "airport": "Mullewa Airport",
    "latitude": -28.475,
    "longitude": 115.517
  },
  "YMYR": {
    "airport": "Myroodah Airport",
    "latitude": -18.1247,
    "longitude": 124.272
  },
  "YSAN": {
    "airport": "Sandstone Airport",
    "latitude": -27.98,
    "longitude": 119.297
  },
  "YCNF": {
    "airport": "Nifty Airport",
    "latitude": -21.6717,
    "longitude": 121.587
  },
  "YNUL": {
    "airport": "Nullagine Airport",
    "latitude": -21.9133,
    "longitude": 120.198
  },
  "YNRG": {
    "airport": "Narrogin Airport",
    "latitude": -32.93,
    "longitude": 117.08
  },
  "YNSM": {
    "airport": "Norseman Airport",
    "latitude": -32.21,
    "longitude": 121.755
  },
  "YBGD": {
    "airport": "Boolgeeda Airport",
    "latitude": -22.54,
    "longitude": 117.275
  },
  "YORV": {
    "airport": "Ord River Airport",
    "latitude": -17.3408,
    "longitude": 128.912
  },
  "YOLW": {
    "airport": "Onslow Airport",
    "latitude": -21.6683,
    "longitude": 115.113
  },
  "YPBO": {
    "airport": "Paraburdoo Airport",
    "latitude": -23.1711,
    "longitude": 117.745
  },
  "YPPH": {
    "airport": "Perth Airport",
    "latitude": -31.9403,
    "longitude": 115.967
  },
  "YPPD": {
    "airport": "Port Hedland International Airport",
    "latitude": -20.3778,
    "longitude": 118.626
  },
  "YPDO": {
    "airport": "Pardoo Airport",
    "latitude": -20.1175,
    "longitude": 119.59
  },
  "YROE": {
    "airport": "Roebourne Airport",
    "latitude": -20.7617,
    "longitude": 117.157
  },
  "YRYH": {
    "airport": "Roy Hill Station Airport",
    "latitude": -22.6258,
    "longitude": 119.959
  },
  "YRTI": {
    "airport": "Rottnest Island Airport",
    "latitude": -32.0067,
    "longitude": 115.54
  },
  "YNRV": {
    "airport": "Ravensthorpe Airport",
    "latitude": -33.7972,
    "longitude": 120.208
  },
  "YSEN": {
    "airport": "Serpentine Airfield",
    "latitude": -32.394167,
    "longitude": 115.872222
  },
  "YSHG": {
    "airport": "Shay Gap Airport",
    "latitude": -20.4247,
    "longitude": 120.141
  },
  "YSOL": {
    "airport": "Solomon Airport",
    "latitude": -22.2554,
    "longitude": 117.763
  },
  "YSCR": {
    "airport": "Southern Cross Airport",
    "latitude": -31.24,
    "longitude": 119.36
  },
  "YTAB": {
    "airport": "Tableland Homestead Airport",
    "latitude": -17.2833,
    "longitude": 126.9
  },
  "YTHD": {
    "airport": "Theda Station Airport",
    "latitude": -14.7881,
    "longitude": 126.496
  },
  "YTEF": {
    "airport": "Telfer Airport",
    "latitude": -21.715,
    "longitude": 122.229
  },
  "YTKY": {
    "airport": "Turkey Creek Airport",
    "latitude": -17.0408,
    "longitude": 128.206
  },
  "YTMP": {
    "airport": "Tom Price Airport",
    "latitude": -22.746,
    "longitude": 117.869
  },
  "YTST": {
    "airport": "Truscott-Mungalalu Airport",
    "latitude": -14.0897,
    "longitude": 126.381
  },
  "YKAL": {
    "airport": "Kalumburu Airport",
    "latitude": -14.2883,
    "longitude": 126.632
  },
  "YUSL": {
    "airport": "Useless Loop Airport",
    "latitude": -26.1667,
    "longitude": 113.4
  },
  "YWIT": {
    "airport": "Wittenoom Airport",
    "latitude": -22.2183,
    "longitude": 118.348
  },
  "YWAL": {
    "airport": "Wallal Airport",
    "latitude": -19.7736,
    "longitude": 120.649
  },
  "YANG": {
    "airport": "West Angelas Airport",
    "latitude": -23.1356,
    "longitude": 118.707
  },
  "YMNE": {
    "airport": "Mount Keith Airport",
    "latitude": -27.2864,
    "longitude": 120.555
  },
  "YWDG": {
    "airport": "Windarling Airport",
    "latitude": -30.0317,
    "longitude": 119.39
  },
  "YWWG": {
    "airport": "Warrawagine Airport",
    "latitude": -20.8442,
    "longitude": 120.702
  },
  "YMMI": {
    "airport": "Murrin Murrin Airport",
    "latitude": -28.7053,
    "longitude": 121.891
  },
  "YWLU": {
    "airport": "Wiluna Airport",
    "latitude": -26.6292,
    "longitude": 120.221
  },
  "YWWI": {
    "airport": "Woodie Woodie Airport",
    "latitude": -21.6628,
    "longitude": 121.234
  },
  "YWYM": {
    "airport": "Wyndham Airport",
    "latitude": -15.5114,
    "longitude": 128.153
  },
  "YYAL": {
    "airport": "Yalgoo Airport",
    "latitude": -28.3553,
    "longitude": 116.684
  },
  "YNWN": {
    "airport": "Newman Airport",
    "latitude": -23.4178,
    "longitude": 119.803
  },
  "TNCA": {
    "airport": "Queen Beatrix International Airport",
    "latitude": 12.5014,
    "longitude": -70.0152
  },
  "UBBB": {
    "airport": "Heydar Aliyev International Airport",
    "latitude": 40.4675,
    "longitude": 50.0467
  },
  "UBBF": {
    "airport": "Fuzuli Airport",
    "latitude": 39.5955,
    "longitude": 47.1973
  },
  "UBBG": {
    "airport": "Ganja International Airport (formerly KVD)",
    "latitude": 40.7377,
    "longitude": 46.3176
  },
  "UBBL": {
    "airport": "Lankaran International Airport",
    "latitude": 38.7464,
    "longitude": 48.818
  },
  "UBBN": {
    "airport": "Nakhchivan International Airport",
    "latitude": 39.1888,
    "longitude": 45.4584
  },
  "UBBQ": {
    "airport": "Qabala International Airport",
    "latitude": 40.8267,
    "longitude": 47.7125
  },
  "UBEE": {
    "airport": "Yevlakh Airport",
    "latitude": 40.6319,
    "longitude": 47.1419
  },
  "UBBY": {
    "airport": "Zaqatala International Airport",
    "latitude": 41.5622,
    "longitude": 46.6672
  },
  "LQMO": {
    "airport": "Mostar Airport",
    "latitude": 43.2829,
    "longitude": 17.8459
  },
  "LQSA": {
    "airport": "Sarajevo International Airport",
    "latitude": 43.8246,
    "longitude": 18.3315
  },
  "LQTZ": {
    "airport": "Tuzla International Airport",
    "latitude": 44.4587,
    "longitude": 18.7248
  },
  "LQBK": {
    "airport": "Banja Luka International Airport",
    "latitude": 44.9414,
    "longitude": 17.2975
  },
  "TBPB": {
    "airport": "Grantley Adams International Airport",
    "latitude": 13.0746,
    "longitude": -59.4925
  },
  "VGBR": {
    "airport": "Barisal Airport",
    "latitude": 22.801,
    "longitude": 90.3012
  },
  "VGEG": {
    "airport": "Shah Amanat International Airport",
    "latitude": 22.2496,
    "longitude": 91.8133
  },
  "VGCM": {
    "airport": "Comilla Airport",
    "latitude": 23.4372,
    "longitude": 91.1897
  },
  "VGCB": {
    "airport": "Cox's Bazar Airport",
    "latitude": 21.4522,
    "longitude": 91.9639
  },
  "VGHS": {
    "airport": "Hazrat Shahjalal International Airport",
    "latitude": 23.8433,
    "longitude": 90.3978
  },
  "VGJR": {
    "airport": "Jessore Airport",
    "latitude": 23.1838,
    "longitude": 89.1608
  },
  "VGIS": {
    "airport": "Ishwardi Airport",
    "latitude": 24.1525,
    "longitude": 89.0494
  },
  "VGRJ": {
    "airport": "Shah Makhdum Airport",
    "latitude": 24.4372,
    "longitude": 88.6165
  },
  "VGSD": {
    "airport": "Saidpur Airport",
    "latitude": 25.7592,
    "longitude": 88.9089
  },
  "VGSG": {
    "airport": "Thakurgaon Airport",
    "latitude": 26.0164,
    "longitude": 88.4036
  },
  "VGSH": {
    "airport": "Shamshernagar Airport",
    "latitude": 24.417,
    "longitude": 91.883
  },
  "VGSY": {
    "airport": "Osmani International Airport",
    "latitude": 24.9632,
    "longitude": 91.8668
  },
  "EBAW": {
    "airport": "Antwerp International Airport",
    "latitude": 51.1894,
    "longitude": 4.46028
  },
  "EBZR": {
    "airport": "Oostmalle Airfield",
    "latitude": 51.2647,
    "longitude": 4.75333
  },
  "EBBR": {
    "airport": "Brussels Airport (Zaventem Airport)",
    "latitude": 50.9014,
    "longitude": 4.48444
  },
  "EBCI": {
    "airport": "Brussels South Charleroi Airport",
    "latitude": 50.4592,
    "longitude": 4.45382
  },
  "EBLG": {
    "airport": "Liege Airport",
    "latitude": 50.6374,
    "longitude": 5.44322
  },
  "EBKT": {
    "airport": "Kortrijk-Wevelgem International Airport",
    "latitude": 50.8172,
    "longitude": 3.20472
  },
  "EBOS": {
    "airport": "Ostend-Bruges International Airport",
    "latitude": 51.1989,
    "longitude": 2.86222
  },
  "DFOU": {
    "airport": "Diebougou Airport",
    "latitude": 10.95,
    "longitude": -3.25
  },
  "DFET": {
    "airport": "Tenkodogo Airport",
    "latitude": 11.8,
    "longitude": -0.367
  },
  "DFEZ": {
    "airport": "Zabre Airport",
    "latitude": 11.167,
    "longitude": -0.617
  },
  "DFOB": {
    "airport": "Banfora Airport",
    "latitude": 10.683,
    "longitude": -4.717
  },
  "DFEB": {
    "airport": "Bogande Airport",
    "latitude": 12.983,
    "longitude": -0.167
  },
  "DFEF": {
    "airport": "Fada N'gourma Airport",
    "latitude": 12.033,
    "longitude": 0.35
  },
  "DFOO": {
    "airport": "Bobo Dioulasso Airport",
    "latitude": 11.1601,
    "longitude": -4.33097
  },
  "DFFD": {
    "airport": "Ouagadougou Airport",
    "latitude": 12.3532,
    "longitude": -1.51242
  },
  "DFEP": {
    "airport": "Pama Airport",
    "latitude": 11.25,
    "longitude": 0.7
  },
  "DFON": {
    "airport": "Nouna Airport",
    "latitude": 12.75,
    "longitude": -3.867
  },
  "DFOD": {
    "airport": "Dedougou Airport",
    "latitude": 12.459,
    "longitude": -3.49
  },
  "DFCP": {
    "airport": "Po Airport",
    "latitude": 11.15,
    "longitude": -1.15
  },
  "DFEA": {
    "airport": "Boulsa Airport",
    "latitude": 12.65,
    "longitude": -0.567
  },
  "DFEM": {
    "airport": "Tambao Airport",
    "latitude": 14.8,
    "longitude": 0.05
  },
  "DFEG": {
    "airport": "Gorom Gorom Airport",
    "latitude": 14.45,
    "longitude": -0.233
  },
  "DFOG": {
    "airport": "Gaoua Airport (Amilcar Cabral Airport)",
    "latitude": 10.3841,
    "longitude": -3.16345
  },
  "DFCA": {
    "airport": "Kaya Airport",
    "latitude": 13.067,
    "longitude": -1.1
  },
  "DFEE": {
    "airport": "Dori Airport",
    "latitude": 14.033,
    "longitude": -0.033
  },
  "DFCL": {
    "airport": "Leo Airport",
    "latitude": 11.1,
    "longitude": -2.1
  },
  "DFOY": {
    "airport": "Aribinda Airport",
    "latitude": 14.217,
    "longitude": -0.883
  },
  "DFCJ": {
    "airport": "Djibo Airport",
    "latitude": 14.1,
    "longitude": -1.633
  },
  "DFOT": {
    "airport": "Tougan Airport",
    "latitude": 13.067,
    "longitude": -3.067
  },
  "DFER": {
    "airport": "Arly Airport",
    "latitude": 11.597,
    "longitude": 1.483
  },
  "DFED": {
    "airport": "Diapaga Airport",
    "latitude": 12.0603,
    "longitude": 1.78463
  },
  "DFEL": {
    "airport": "Kantchari Airport",
    "latitude": 12.467,
    "longitude": 1.5
  },
  "DFES": {
    "airport": "Sebba Airport",
    "latitude": 13.45,
    "longitude": 0.517
  },
  "DFCC": {
    "airport": "Ouahigouya Airport",
    "latitude": 13.567,
    "longitude": -2.417
  },
  "LBBG": {
    "airport": "Burgas Airport",
    "latitude": 42.5696,
    "longitude": 27.5152
  },
  "LBHS": {
    "airport": "Haskovo Malevo Airport",
    "latitude": 41.8718,
    "longitude": 25.6048
  },
  "LBPD": {
    "airport": "Plovdiv Airport",
    "latitude": 42.0678,
    "longitude": 24.8508
  },
  "LBRS": {
    "airport": "Ruse Airport",
    "latitude": 43.6948,
    "longitude": 26.0567
  },
  "LBSS": {
    "airport": "Silistra Airfield",
    "latitude": 44.0552,
    "longitude": 27.1788
  },
  "LBSF": {
    "airport": "Sofia Airport",
    "latitude": 42.6967,
    "longitude": 23.4114
  },
  "LBSZ": {
    "airport": "Stara Zagora Airport",
    "latitude": 42.3767,
    "longitude": 25.655
  },
  "LBTG": {
    "airport": "Targovishte Airport (Buhovtsi Airfield)",
    "latitude": 43.3066,
    "longitude": 26.7009
  },
  "LBWN": {
    "airport": "Varna Airport",
    "latitude": 43.2321,
    "longitude": 27.8251
  },
  "LBGO": {
    "airport": "Gorna Oryahovitsa Airport",
    "latitude": 43.1514,
    "longitude": 25.7129
  },
  "OBBI": {
    "airport": "Bahrain International Airport",
    "latitude": 26.2708,
    "longitude": 50.6336
  },
  "HBBA": {
    "airport": "Bujumbura International Airport",
    "latitude": -3.32402,
    "longitude": 29.3185
  },
  "HBBE": {
    "airport": "Gitega Airport",
    "latitude": -3.41721,
    "longitude": 29.9113
  },
  "HBBO": {
    "airport": "Kirundo Airport",
    "latitude": -2.54477,
    "longitude": 30.0946
  },
  "DBBK": {
    "airport": "Kandi Airport",
    "latitude": 11.1448,
    "longitude": 2.94038
  },
  "DBBN": {
    "airport": "Boundetingou Airport",
    "latitude": 10.377,
    "longitude": 1.36051
  },
  "DBBP": {
    "airport": "Parakou Airport",
    "latitude": 9.35769,
    "longitude": 2.60968
  },
  "DBBS": {
    "airport": "Save Airport",
    "latitude": 8.01817,
    "longitude": 2.46458
  },
  "DBBD": {
    "airport": "Djougou Airport",
    "latitude": 9.69208,
    "longitude": 1.63778
  },
  "DBBB": {
    "airport": "Cadjehoun Airport",
    "latitude": 6.35723,
    "longitude": 2.38435
  },
  "TFFJ": {
    "airport": "Gustaf III Airport",
    "latitude": 17.9044,
    "longitude": -62.8436
  },
  "TXKF": {
    "airport": "L.F. Wade International Airport",
    "latitude": 32.364,
    "longitude": -64.6787
  },
  "WBSB": {
    "airport": "Brunei International Airport",
    "latitude": 4.9442,
    "longitude": 114.928
  },
  "SLAG": {
    "airport": "Monteagudo Airport",
    "latitude": -19.827,
    "longitude": -63.961
  },
  "SLSU": {
    "airport": "Juana Azurduy de Padilla International Airport",
    "latitude": -19.2468,
    "longitude": -65.1496
  },
  "SLSB": {
    "airport": "Capitan German Quiroga Guardia Airport",
    "latitude": -14.8592,
    "longitude": -66.7375
  },
  "SLCB": {
    "airport": "Jorge Wilstermann International Airport",
    "latitude": -17.4211,
    "longitude": -66.1771
  },
  "SLHI": {
    "airport": "Chimore Airport",
    "latitude": -16.9889,
    "longitude": -65.1417
  },
  "SLHJ": {
    "airport": "Huacaraje Airport",
    "latitude": -13.55,
    "longitude": -63.7479
  },
  "SLBU": {
    "airport": "Baures Airport",
    "latitude": -13.5833,
    "longitude": -63.5833
  },
  "SLGY": {
    "airport": "Guayaramerin Airport",
    "latitude": -10.8206,
    "longitude": -65.3456
  },
  "SLMG": {
    "airport": "Magdalena Airport",
    "latitude": -13.2607,
    "longitude": -64.0608
  },
  "SLRQ": {
    "airport": "Rurrenabaque Airport",
    "latitude": -14.4279,
    "longitude": -67.4968
  },
  "SLRY": {
    "airport": "Reyes Airport",
    "latitude": -14.3044,
    "longitude": -67.3534
  },
  "SLRI": {
    "airport": "Riberalta Airport",
    "latitude": -11,
    "longitude": -66
  },
  "SLSA": {
    "airport": "Santa Ana del Yacuma Airport",
    "latitude": -13.7622,
    "longitude": -65.4352
  },
  "SLJO": {
    "airport": "San Joaquin Airport",
    "latitude": -13.0528,
    "longitude": -64.6617
  },
  "SLSM": {
    "airport": "San Ignacio de Moxos Airport",
    "latitude": -14.9658,
    "longitude": -65.6338
  },
  "SLSR": {
    "airport": "Santa Rosa Airport (Bolivia)",
    "latitude": -14.0662,
    "longitude": -66.7868
  },
  "SLRA": {
    "airport": "San Ramon Airport",
    "latitude": -13.2639,
    "longitude": -64.6039
  },
  "SLTR": {
    "airport": "Teniente Jorge Henrich Arauz Airport",
    "latitude": -14.8187,
    "longitude": -64.918
  },
  "SLAP": {
    "airport": "Apolo Airport",
    "latitude": -14.7356,
    "longitude": -68.4119
  },
  "SLLP": {
    "airport": "El Alto International Airport",
    "latitude": -16.5133,
    "longitude": -68.1923
  },
  "SLOR": {
    "airport": "Juan Mendoza Airport",
    "latitude": -17.9626,
    "longitude": -67.0762
  },
  "SLCO": {
    "airport": "Captain Anibal Arab Airport",
    "latitude": -11.0404,
    "longitude": -68.783
  },
  "SLPR": {
    "airport": "Puerto Rico Airport",
    "latitude": -11.1077,
    "longitude": -67.5512
  },
  "SLPO": {
    "airport": "Captain Nicolas Rojas Airport",
    "latitude": -19.5433,
    "longitude": -65.7237
  },
  "SLUY": {
    "airport": "Uyuni Airport (Joya Andina Airport)",
    "latitude": -20.4463,
    "longitude": -66.8484
  },
  "SLAS": {
    "airport": "Ascencion de Guarayos Airport",
    "latitude": -15.9303,
    "longitude": -63.1567
  },
  "SLCA": {
    "airport": "Camiri Airport",
    "latitude": -20.0064,
    "longitude": -63.5278
  },
  "SLCP": {
    "airport": "Concepcion Airport",
    "latitude": -16.1383,
    "longitude": -62.0286
  },
  "SLTI": {
    "airport": "San Matias Airport",
    "latitude": -16.3392,
    "longitude": -58.4019
  },
  "SLPS": {
    "airport": "Puerto Suarez International Airport",
    "latitude": -18.9753,
    "longitude": -57.8206
  },
  "SLRB": {
    "airport": "Robore Airport",
    "latitude": -18.3292,
    "longitude": -59.765
  },
  "SLJE": {
    "airport": "San Jose de Chiquitos Airport",
    "latitude": -17.8308,
    "longitude": -60.7431
  },
  "SLJV": {
    "airport": "San Javier Airport (Bolivia)",
    "latitude": -16.2708,
    "longitude": -62.4703
  },
  "SLSI": {
    "airport": "Capitan Av. Juan Cochamanidis Air",
    "latitude": -16.3836,
    "longitude": -60.9628
  },
  "SLET": {
    "airport": "El Trompillo Airport",
    "latitude": -17.8116,
    "longitude": -63.1715
  },
  "SLVG": {
    "airport": "Cap. Av. Vidal Villagomez Toledo Airport",
    "latitude": -18.4825,
    "longitude": -64.0994
  },
  "SLVR": {
    "airport": "Viru Viru International Airport",
    "latitude": -17.6448,
    "longitude": -63.1354
  },
  "SLBJ": {
    "airport": "Bermejo Airport",
    "latitude": -22.7733,
    "longitude": -64.3129
  },
  "SLYA": {
    "airport": "Yacuiba Airport",
    "latitude": -21.9609,
    "longitude": -63.6517
  },
  "SLTJ": {
    "airport": "Capitan Oriel Lea Plaza Airport",
    "latitude": -21.5557,
    "longitude": -64.7013
  },
  "SLVM": {
    "airport": "Lieutenant Colonel Rafael Pabon Airport",
    "latitude": -21.2552,
    "longitude": -63.4056
  },
  "TNCB": {
    "airport": "Flamingo International Airport",
    "latitude": 12.131,
    "longitude": -68.2685
  },
  "TNCS": {
    "airport": "Juancho E. Yrausquin Airport",
    "latitude": 17.645,
    "longitude": -63.22
  },
  "TNCE": {
    "airport": "F. D. Roosevelt Airport",
    "latitude": 17.4965,
    "longitude": -62.9794
  },
  "SBCZ": {
    "airport": "Cruzeiro do Sul International Airport",
    "latitude": -7.59991,
    "longitude": -72.7695
  },
  "SNOU": {
    "airport": "Feijo Airport",
    "latitude": -8.14083,
    "longitude": -70.3472
  },
  "SBRB": {
    "airport": "Placido de Castro International Airport",
    "latitude": -9.86889,
    "longitude": -67.8981
  },
  "SBTK": {
    "airport": "Jose Galera dos Santos Airport",
    "latitude": -8.15526,
    "longitude": -70.7833
  },
  "SWSN": {
    "airport": "Sena Madureira Airport",
    "latitude": -9.116,
    "longitude": -68.6108
  },
  "SNAL": {
    "airport": "Arapiraca Airport",
    "latitude": -9.77536,
    "longitude": -36.6292
  },
  "SBMO": {
    "airport": "Zumbi dos Palmares International Airport",
    "latitude": -9.51081,
    "longitude": -35.7917
  },
  "SBMQ": {
    "airport": "Alberto Alcolumbre International Airport",
    "latitude": 0.050664,
    "longitude": -51.0722
  },
  "SBOI": {
    "airport": "Oiapoque Airport",
    "latitude": 3.85549,
    "longitude": -51.7969
  },
  "SWBC": {
    "airport": "Barcelos Airport",
    "latitude": -0.981292,
    "longitude": -62.9196
  },
  "SWNK": {
    "airport": "Novo Campo Airport",
    "latitude": -8.83456,
    "longitude": -67.3124
  },
  "SWCA": {
    "airport": "Carauari Airport",
    "latitude": -4.87152,
    "longitude": -66.8975
  },
  "SWKO": {
    "airport": "Coari Airport",
    "latitude": -4.13406,
    "longitude": -63.1326
  },
  "SWEI": {
    "airport": "Eirunepe Airport (Amaury Feitosa Tomaz Airport)",
    "latitude": -6.63953,
    "longitude": -69.8798
  },
  "SWOB": {
    "airport": "Fonte Boa Airport",
    "latitude": -2.53261,
    "longitude": -66.0832
  },
  "SWHT": {
    "airport": "Francisco Correa da Cruz Airport",
    "latitude": -7.53212,
    "longitude": -63.0721
  },
  "SWII": {
    "airport": "Ipiranga Airport",
    "latitude": -2.93907,
    "longitude": -69.694
  },
  "SWTP": {
    "airport": "Tapuruquara Airport",
    "latitude": -0.3786,
    "longitude": -64.9923
  },
  "SBIC": {
    "airport": "Itacoatiara Airport",
    "latitude": -3.12726,
    "longitude": -58.4812
  },
  "SWLB": {
    "airport": "Labrea Airport",
    "latitude": -7.27897,
    "longitude": -64.7695
  },
  "SBEG": {
    "airport": "Eduardo Gomes International Airport",
    "latitude": -3.03861,
    "longitude": -60.0497
  },
  "SWMW": {
    "airport": "Maues Airport",
    "latitude": -3.37217,
    "longitude": -57.7248
  },
  "SBMY": {
    "airport": "Manicore Airport",
    "latitude": -5.81138,
    "longitude": -61.2783
  },
  "SWNA": {
    "airport": "Novo Aripuana Airport",
    "latitude": -5.11803,
    "longitude": -60.3649
  },
  "SDCG": {
    "airport": "Senadora Eunice Michiles Airport",
    "latitude": -3.46793,
    "longitude": -68.9204
  },
  "SWPI": {
    "airport": "Julio Belem",
    "latitude": -2.67302,
    "longitude": -56.7772
  },
  "SBMN": {
    "airport": "Manaus Air Force Base",
    "latitude": -3.14604,
    "longitude": -59.9863
  },
  "SWBR": {
    "airport": "Borba Airport",
    "latitude": -4.40634,
    "longitude": -59.6024
  },
  "SBUA": {
    "airport": "Sao Gabriel da Cachoeira Airport",
    "latitude": -0.14835,
    "longitude": -66.9855
  },
  "SBTT": {
    "airport": "Tabatinga International Airport",
    "latitude": -4.25567,
    "longitude": -69.9358
  },
  "SBTF": {
    "airport": "Tefe Airport",
    "latitude": -3.38294,
    "longitude": -64.7241
  },
  "SNBU": {
    "airport": "Socrates Mariani Bittencourt Airport",
    "latitude": -14.2554,
    "longitude": -41.8175
  },
  "SBPS": {
    "airport": "Porto Seguro Airport",
    "latitude": -16.4386,
    "longitude": -39.0809
  },
  "SNBX": {
    "airport": "Barra Airport (Brazil)",
    "latitude": -11.0808,
    "longitude": -43.1475
  },
  "SNBR": {
    "airport": "Barreiras Airport",
    "latitude": -12.0789,
    "longitude": -45.009
  },
  "SNBL": {
    "airport": "Belmonte Airport",
    "latitude": -15.8717,
    "longitude": -38.8719
  },
  "SNED": {
    "airport": "Canavieiras Airport",
    "latitude": -15.667,
    "longitude": -38.9547
  },
  "SBCV": {
    "airport": "Caravelas Airport",
    "latitude": -17.6523,
    "longitude": -39.2531
  },
  "SNJD": {
    "airport": "Feira de Santana Airport (Gov. Joao Durval Carneiro Airport)",
    "latitude": -12.2003,
    "longitude": -38.9068
  },
  "SNGI": {
    "airport": "Guanambi Airport",
    "latitude": -14.2082,
    "longitude": -42.7461
  },
  "SBIL": {
    "airport": "Ilheus Jorge Amado Airport",
    "latitude": -14.816,
    "longitude": -39.0332
  },
  "SNIU": {
    "airport": "Ipiau Airport",
    "latitude": -14.1339,
    "longitude": -39.7339
  },
  "SNIC": {
    "airport": "Irece Airport",
    "latitude": -11.3399,
    "longitude": -41.847
  },
  "SNZW": {
    "airport": "Itubera Airport",
    "latitude": -13.7322,
    "longitude": -39.1417
  },
  "SNHA": {
    "airport": "Itabuna Airport",
    "latitude": -14.8105,
    "longitude": -39.2904
  },
  "SNJB": {
    "airport": "Jacobina Airport",
    "latitude": -11.1632,
    "longitude": -40.5531
  },
  "SNJK": {
    "airport": "Jequie Airport",
    "latitude": -13.8777,
    "longitude": -40.0716
  },
  "SBLP": {
    "airport": "Bom Jesus da Lapa Airport",
    "latitude": -13.2621,
    "longitude": -43.4081
  },
  "SBLE": {
    "airport": "Coronel Horacio de Mattos Airport",
    "latitude": -12.4823,
    "longitude": -41.277
  },
  "SNMU": {
    "airport": "Mucuri Airport",
    "latitude": -18.0489,
    "longitude": -39.8642
  },
  "SBUF": {
    "airport": "Paulo Afonso Airport",
    "latitude": -9.40088,
    "longitude": -38.2506
  },
  "SNRD": {
    "airport": "Prado Airport",
    "latitude": -17.2967,
    "longitude": -39.2712
  },
  "SBSV": {
    "airport": "Deputado Luis Eduardo Magalhaes International Airport",
    "latitude": -12.9086,
    "longitude": -38.3225
  },
  "SNTF": {
    "airport": "Teixeira de Freitas Airport (9 de maio Airport)",
    "latitude": -17.5245,
    "longitude": -39.6685
  },
  "SBTC": {
    "airport": "Una-Comandatuba Airport",
    "latitude": -15.3552,
    "longitude": -38.999
  },
  "SNVB": {
    "airport": "Valenca Airport",
    "latitude": -13.2965,
    "longitude": -38.9924
  },
  "SBQV": {
    "airport": "Pedro Otacilio Figueiredo Airport",
    "latitude": -14.8628,
    "longitude": -40.8631
  },
  "SBAC": {
    "airport": "Aracati Airport",
    "latitude": -4.56861,
    "longitude": -37.8047
  },
  "SNWC": {
    "airport": "Camocim Airport",
    "latitude": -2.89618,
    "longitude": -40.858
  },
  "SBFZ": {
    "airport": "Pinto Martins - Fortaleza International Airport",
    "latitude": -3.77628,
    "longitude": -38.5326
  },
  "SBJU": {
    "airport": "Juazeiro do Norte Airport",
    "latitude": -7.21896,
    "longitude": -39.2701
  },
  "SBJE": {
    "airport": "Comte. Ariston Pessoa Regional Airport",
    "latitude": -2.90667,
    "longitude": -40.3581
  },
  "SBBR": {
    "airport": "Brasilia International Airport (Presidente J. Kubitschek Int'l Airport)",
    "latitude": -15.8692,
    "longitude": -47.9208
  },
  "SNKI": {
    "airport": "Cachoeiro de Itapemirim Airport (Raimundo de Andrade Airport)",
    "latitude": -20.8343,
    "longitude": -41.1856
  },
  "SNGA": {
    "airport": "Guarapari Airport",
    "latitude": -20.6465,
    "longitude": -40.4919
  },
  "SNMX": {
    "airport": "Sao Mateus Airport",
    "latitude": -18.7213,
    "longitude": -39.8337
  },
  "SBVT": {
    "airport": "Eurico de Aguiar Salles Airport",
    "latitude": -20.2581,
    "longitude": -40.2864
  },
  "SWNS": {
    "airport": "Anapolis Airport",
    "latitude": -16.3623,
    "longitude": -48.9271
  },
  "SWEC": {
    "airport": "Aragarcas Airport",
    "latitude": -15.8994,
    "longitude": -52.2411
  },
  "SBCN": {
    "airport": "Caldas Novas Airport",
    "latitude": -17.7253,
    "longitude": -48.6075
  },
  "SBGO": {
    "airport": "Santa Genoveva Airport",
    "latitude": -16.632,
    "longitude": -49.2207
  },
  "SBIT": {
    "airport": "Itumbiara Airport",
    "latitude": -18.4447,
    "longitude": -49.2134
  },
  "SWJW": {
    "airport": "Jatai Airport",
    "latitude": -17.8299,
    "longitude": -51.773
  },
  "SBMC": {
    "airport": "Minacu Airport",
    "latitude": -13.5491,
    "longitude": -48.1953
  },
  "SWNQ": {
    "airport": "Niquelandia Air",
    "latitude": -14.4349,
    "longitude": -48.4915
  },
  "SWLC": {
    "airport": "General Leite de Castro Airport",
    "latitude": -17.8347,
    "longitude": -50.9561
  },
  "SWUA": {
    "airport": "Sao Miguel do Araguaia Airport",
    "latitude": -13.3313,
    "longitude": -50.1976
  },
  "SWKT": {
    "airport": "Catalao Airport",
    "latitude": -18.2168,
    "longitude": -47.8997
  },
  "SNAI": {
    "airport": "Alto Parnaiba Airport",
    "latitude": -9.08361,
    "longitude": -45.9506
  },
  "SNBC": {
    "airport": "Barra do Corda Airport",
    "latitude": -5.5025,
    "longitude": -45.2158
  },
  "SBRR": {
    "airport": "Barreirinhas Airport",
    "latitude": -2.75663,
    "longitude": -42.8057
  },
  "SNBS": {
    "airport": "Balsas Airport",
    "latitude": -7.52603,
    "longitude": -46.0533
  },
  "SBCI": {
    "airport": "Carolina Airport",
    "latitude": -7.32044,
    "longitude": -47.4587
  },
  "SNCP": {
    "airport": "Planalto Serrano Correia Regional Airport",
    "latitude": -27.6286,
    "longitude": -50.3508
  },
  "SNGM": {
    "airport": "Guimaraes Airport",
    "latitude": -2.10944,
    "longitude": -44.6511
  },
  "SBIZ": {
    "airport": "Imperatriz Airport (Prefeito Renato Moreira Airport)",
    "latitude": -5.53129,
    "longitude": -47.46
  },
  "SNYE": {
    "airport": "Pinheiro Airport",
    "latitude": -2.48361,
    "longitude": -45.0672
  },
  "SBSL": {
    "airport": "Marechal Cunha Machado International Airport",
    "latitude": -2.58536,
    "longitude": -44.2341
  },
  "SBDB": {
    "airport": "Bonito Airport",
    "latitude": -21.2473,
    "longitude": -56.4525
  },
  "SBCG": {
    "airport": "Campo Grande International Airport",
    "latitude": -20.4687,
    "longitude": -54.6725
  },
  "SBCR": {
    "airport": "Corumba International Airport",
    "latitude": -19.0119,
    "longitude": -57.6714
  },
  "SSCL": {
    "airport": "Cassilandia Airport",
    "latitude": -19.1464,
    "longitude": -51.6853
  },
  "SSDO": {
    "airport": "Dourados Airport (Francisco de Matos Pereira Airport)",
    "latitude": -22.2019,
    "longitude": -54.9266
  },
  "SSPN": {
    "airport": "Paranaiba Airport",
    "latitude": -19.6512,
    "longitude": -51.1994
  },
  "SBPP": {
    "airport": "Ponta Pora International Airport",
    "latitude": -22.5496,
    "longitude": -55.7026
  },
  "SBTG": {
    "airport": "Plinio Alarcom Airport",
    "latitude": -20.7542,
    "longitude": -51.6842
  },
  "SBAT": {
    "airport": "Alta Floresta Airport",
    "latitude": -9.86639,
    "longitude": -56.105
  },
  "SSOU": {
    "airport": "Aripuana Airport",
    "latitude": -10.1883,
    "longitude": -59.4573
  },
  "SWTU": {
    "airport": "Fazenda Tucunare Airport",
    "latitude": -13.4655,
    "longitude": -58.8669
  },
  "SBBW": {
    "airport": "Barra do Garcas Airport",
    "latitude": -15.8613,
    "longitude": -52.3889
  },
  "SWKC": {
    "airport": "Caceres Airport",
    "latitude": -16.0436,
    "longitude": -57.6299
  },
  "SBCY": {
    "airport": "Marechal Rondon International Airport",
    "latitude": -15.6529,
    "longitude": -56.1167
  },
  "SWEK": {
    "airport": "Canarana Airport",
    "latitude": -13.5744,
    "longitude": -52.2706
  },
  "SWDM": {
    "airport": "Diamantino Airport",
    "latitude": -14.3769,
    "longitude": -56.4004
  },
  "SWHP": {
    "airport": "Agua Boa Airport",
    "latitude": -14.0194,
    "longitude": -52.1522
  },
  "SWJN": {
    "airport": "Juina Airport",
    "latitude": -11.4194,
    "longitude": -58.7017
  },
  "SWJU": {
    "airport": "Juruena Airport",
    "latitude": -10.3058,
    "longitude": -58.4894
  },
  "SIZX": {
    "airport": "Mauro Luiz Frizon Airport",
    "latitude": -11.2966,
    "longitude": -57.5495
  },
  "SILC": {
    "airport": "Bom Futuro Municipal Airport",
    "latitude": -13.0379,
    "longitude": -55.9502
  },
  "SWXM": {
    "airport": "Orlando Villas-Boas Regional Airport",
    "latitude": -10.1703,
    "longitude": -54.9528
  },
  "SWVB": {
    "airport": "Mato Grosso Airport",
    "latitude": -14.9942,
    "longitude": -59.9458
  },
  "SWXV": {
    "airport": "Nova Xavantina Airport",
    "latitude": -14.6983,
    "longitude": -52.3464
  },
  "SWSI": {
    "airport": "Presidente Joao Figueiredo Airport",
    "latitude": -11.885,
    "longitude": -55.5861
  },
  "SWPG": {
    "airport": "Aeroporto de Porto dos Gauchos Airport",
    "latitude": -11.5404,
    "longitude": -57.3782
  },
  "SWPQ": {
    "airport": "Fazenda Piraguassu Airport",
    "latitude": -10.8611,
    "longitude": -51.685
  },
  "SWRD": {
    "airport": "Maestro Marinho Franco Airport",
    "latitude": -16.586,
    "longitude": -54.7248
  },
  "SWST": {
    "airport": "Santa Terezinha Airport",
    "latitude": -10.4647,
    "longitude": -50.5186
  },
  "SWFX": {
    "airport": "Sao Felix do Araguaia",
    "latitude": -11.6324,
    "longitude": -50.6896
  },
  "SWTS": {
    "airport": "Tangara da Serra Airport",
    "latitude": -14.662,
    "longitude": -57.4435
  },
  "SWVC": {
    "airport": "Vila Rica Municipal Airport",
    "latitude": -9.97944,
    "longitude": -51.1422
  },
  "SBAX": {
    "airport": "Araxa Airport",
    "latitude": -19.5632,
    "longitude": -46.9604
  },
  "SNAR": {
    "airport": "Almenara Airport",
    "latitude": -16.1839,
    "longitude": -40.6672
  },
  "SBCF": {
    "airport": "Tancredo Neves International Airport",
    "latitude": -19.6336,
    "longitude": -43.9686
  },
  "SNDV": {
    "airport": "Divinopolis Airport (Brigadeiro Cabral Airport)",
    "latitude": -20.1807,
    "longitude": -44.8709
  },
  "SNDT": {
    "airport": "Diamantina Airport",
    "latitude": -18.232,
    "longitude": -43.6504
  },
  "SBGV": {
    "airport": "Coronel Altino Machado de Oliveira Airport",
    "latitude": -18.8952,
    "longitude": -41.9822
  },
  "SBIP": {
    "airport": "Vale do Aco Regional Airport",
    "latitude": -19.4707,
    "longitude": -42.4876
  },
  "SBZM": {
    "airport": "Presidente Itamar Franco Airport (Zona da Mata Regional Airport)",
    "latitude": -21.5131,
    "longitude": -43.1731
  },
  "SBJF": {
    "airport": "Francisco Alvares de Assis Airport",
    "latitude": -21.7915,
    "longitude": -43.3868
  },
  "SNJR": {
    "airport": "Prefeito Octavio de Almeida Neves Airport",
    "latitude": -21.085,
    "longitude": -44.2247
  },
  "SNJN": {
    "airport": "Januaria Airport",
    "latitude": -15.4738,
    "longitude": -44.3855
  },
  "SNDN": {
    "airport": "Leopoldina Airport",
    "latitude": -21.4661,
    "longitude": -42.727
  },
  "SBMK": {
    "airport": "Montes Claros/Mario Ribeiro Airport",
    "latitude": -16.7069,
    "longitude": -43.8189
  },
  "SNNU": {
    "airport": "Nanuque Airport",
    "latitude": -17.8233,
    "longitude": -40.3299
  },
  "SNPX": {
    "airport": "Pirapora Airport",
    "latitude": -17.3169,
    "longitude": -44.8603
  },
  "SNPD": {
    "airport": "Pedro Pereira dos Santos Airport",
    "latitude": -18.6728,
    "longitude": -46.4912
  },
  "SBPC": {
    "airport": "Pocos de Caldas Airport",
    "latitude": -21.843,
    "longitude": -46.5679
  },
  "SNZA": {
    "airport": "Pouso Alegre Airport",
    "latitude": -22.2892,
    "longitude": -45.9191
  },
  "SNOS": {
    "airport": "Municipal José Figueiredo Airport",
    "latitude": -20.7322,
    "longitude": -46.6618
  },
  "SNLO": {
    "airport": "Sao Lourenco Airport",
    "latitude": -22.0909,
    "longitude": -45.0445
  },
  "SNTO": {
    "airport": "Teofilo Otoni Airport (Juscelino Kubitscheck Airport)",
    "latitude": -17.8923,
    "longitude": -41.5136
  },
  "SBUR": {
    "airport": "Mario de Almeida Franco Airport",
    "latitude": -19.7647,
    "longitude": -47.9661
  },
  "SBUL": {
    "airport": "Ten. Cel. Av. Cesar Bombonato Airport",
    "latitude": -18.8836,
    "longitude": -48.2253
  },
  "SBVG": {
    "airport": "Major Brigadeiro Trompowsky Airport",
    "latitude": -21.5901,
    "longitude": -45.4733
  },
  "SBHT": {
    "airport": "Altamira Airport",
    "latitude": -3.25391,
    "longitude": -52.254
  },
  "SBBE": {
    "airport": "Val de Cans International Airport",
    "latitude": -1.37925,
    "longitude": -48.4763
  },
  "SNVS": {
    "airport": "Breves Airport",
    "latitude": -1.63653,
    "longitude": -50.4436
  },
  "SBAA": {
    "airport": "Conceicao do Araguaia Airport",
    "latitude": -8.34835,
    "longitude": -49.3015
  },
  "SBCJ": {
    "airport": "Carajas Airport",
    "latitude": -6.11528,
    "longitude": -50.0014
  },
  "SNKE": {
    "airport": "Santana do Araguaia Airport",
    "latitude": -9.31997,
    "longitude": -50.3285
  },
  "SNYA": {
    "airport": "Almeirim Airport",
    "latitude": -1.47917,
    "longitude": -52.5781
  },
  "SBIH": {
    "airport": "Itaituba Airport",
    "latitude": -4.24234,
    "longitude": -56.0007
  },
  "SBEK": {
    "airport": "Jacareacanga Airport",
    "latitude": -6.23316,
    "longitude": -57.7769
  },
  "SBMA": {
    "airport": "Joao Correa da Rocha Airport",
    "latitude": -5.36859,
    "longitude": -49.138
  },
  "SBMD": {
    "airport": "Serra do Areao Airport",
    "latitude": -0.889839,
    "longitude": -52.6022
  },
  "SNMA": {
    "airport": "Monte Alegre Airport",
    "latitude": -1.9958,
    "longitude": -54.0742
  },
  "SJNP": {
    "airport": "Novo Progresso Airport",
    "latitude": -7.12583,
    "longitude": -55.4008
  },
  "SNTI": {
    "airport": "Obidos Airport",
    "latitude": -1.86717,
    "longitude": -55.5144
  },
  "SDOW": {
    "airport": "Ourilandia do Norte Airport",
    "latitude": -6.7631,
    "longitude": -51.0499
  },
  "SNOX": {
    "airport": "Oriximina Airport",
    "latitude": -1.71408,
    "longitude": -55.8362
  },
  "SNMZ": {
    "airport": "Porto de Moz Airport",
    "latitude": -1.74145,
    "longitude": -52.2361
  },
  "SNDC": {
    "airport": "Redencao Airport",
    "latitude": -8.03329,
    "longitude": -49.9799
  },
  "SNSW": {
    "airport": "Soure Airport",
    "latitude": -0.699431,
    "longitude": -48.521
  },
  "SBSN": {
    "airport": "Santarem-Maestro Wilson Fonseca Airport",
    "latitude": -2.42472,
    "longitude": -54.7858
  },
  "SNFX": {
    "airport": "Sao Felix do Xingu Airport",
    "latitude": -6.6413,
    "longitude": -51.9523
  },
  "SBTB": {
    "airport": "Porto Trombetas Airport",
    "latitude": -1.4896,
    "longitude": -56.3968
  },
  "SBKG": {
    "airport": "Campina Grande Airport (Presidente Joao Suassuna Airport)",
    "latitude": -7.26992,
    "longitude": -35.8964
  },
  "SBJP": {
    "airport": "Presidente Castro Pinto International Airport",
    "latitude": -7.14583,
    "longitude": -34.9486
  },
  "SSYA": {
    "airport": "Avelino Vieira Airport",
    "latitude": -24.1039,
    "longitude": -49.7891
  },
  "SSAP": {
    "airport": "Apucarana Airport",
    "latitude": -23.6095,
    "longitude": -51.3845
  },
  "SSOG": {
    "airport": "Arapongas Airport",
    "latitude": -23.3529,
    "longitude": -51.4917
  },
  "SBBI": {
    "airport": "Bacacheri Airport",
    "latitude": -25.4051,
    "longitude": -49.232
  },
  "SBCA": {
    "airport": "Cascavel Airport (Adalberto Mendes da Silva Airport)",
    "latitude": -25.0003,
    "longitude": -53.5008
  },
  "SSKM": {
    "airport": "Campo Mourao Airport",
    "latitude": -24.0092,
    "longitude": -52.3568
  },
  "SSCP": {
    "airport": "Cornelio Procopio Airport",
    "latitude": -23.1525,
    "longitude": -50.6025
  },
  "SBCT": {
    "airport": "Afonso Pena International Airport",
    "latitude": -25.5285,
    "longitude": -49.1758
  },
  "SSFB": {
    "airport": "Francisco Beltrao Airport (Paulo Abdala Airport)",
    "latitude": -26.0592,
    "longitude": -53.0635
  },
  "SSCT": {
    "airport": "Gastao Mesquita Airport",
    "latitude": -23.6914,
    "longitude": -52.6422
  },
  "SSGY": {
    "airport": "Guaira Airport",
    "latitude": -24.0797,
    "longitude": -54.1881
  },
  "SBGU": {
    "airport": "Tancredo Thomas de Faria Airport",
    "latitude": -25.3875,
    "longitude": -51.5202
  },
  "SBFI": {
    "airport": "Foz do Iguacu International Airport",
    "latitude": -25.6003,
    "longitude": -54.485
  },
  "SBLO": {
    "airport": "Londrina-Governador Jose Richa Airport",
    "latitude": -23.3336,
    "longitude": -51.1301
  },
  "SBMG": {
    "airport": "Silvio Name Junior Regional Airport",
    "latitude": -23.4761,
    "longitude": -52.0162
  },
  "SSZW": {
    "airport": "Comte. Antonio Amilton Beraldo Airport",
    "latitude": -25.1847,
    "longitude": -50.1441
  },
  "SSPG": {
    "airport": "Santos Dumont Airport",
    "latitude": -25.5401,
    "longitude": -48.5312
  },
  "SSPB": {
    "airport": "Juvenal Loureiro Cardoso Airport",
    "latitude": -26.2172,
    "longitude": -52.6945
  },
  "SSPI": {
    "airport": "Edu Chaves Airport",
    "latitude": -23.0899,
    "longitude": -52.4885
  },
  "SBTL": {
    "airport": "Telemaco Borba Airport",
    "latitude": -24.3178,
    "longitude": -50.6516
  },
  "SBTD": {
    "airport": "Luiz dal Canalle Filho Airport",
    "latitude": -24.6863,
    "longitude": -53.6975
  },
  "SBTU": {
    "airport": "Tucurui Airport",
    "latitude": -3.78601,
    "longitude": -49.7203
  },
  "SSUM": {
    "airport": "Orlando de Carvalho Airport",
    "latitude": -23.7987,
    "longitude": -53.3138
  },
  "SNRU": {
    "airport": "Caruaru Airport (Oscar Laranjeiras Airport)",
    "latitude": -8.28239,
    "longitude": -36.0135
  },
  "SBFN": {
    "airport": "Fernando de Noronha Airport (Gov. Carlos Wilson Airport)",
    "latitude": -3.85493,
    "longitude": -32.4233
  },
  "SBPL": {
    "airport": "Senador Nilo Coelho Airport",
    "latitude": -9.36241,
    "longitude": -40.5691
  },
  "SNGN": {
    "airport": "Garanhuns Airport",
    "latitude": -8.8381,
    "longitude": -36.4696
  },
  "SBRF": {
    "airport": "Recife/Guararapes-Gilberto Freyre International Airport",
    "latitude": -8.12649,
    "longitude": -34.9236
  },
  "SNHS": {
    "airport": "Serra Talhada Santa Magalhaes Regional Airport",
    "latitude": -8.0619,
    "longitude": -38.324
  },
  "SNQG": {
    "airport": "Cangapara Airport",
    "latitude": -6.84639,
    "longitude": -43.0773
  },
  "SNGD": {
    "airport": "Guadalupe Airport",
    "latitude": -6.78222,
    "longitude": -43.5822
  },
  "SNPC": {
    "airport": "Picos Airport",
    "latitude": -7.06206,
    "longitude": -41.5237
  },
  "SBPB": {
    "airport": "Parnaiba-Prefeito Dr. Joao Silva Filho International Airport",
    "latitude": -2.89375,
    "longitude": -41.732
  },
  "SBTE": {
    "airport": "Teresina-Senador Petronio Portel Airport",
    "latitude": -5.05994,
    "longitude": -42.8235
  },
  "SBMS": {
    "airport": "Gov. Dix-Sept Rosado Airport",
    "latitude": -5.20192,
    "longitude": -37.3643
  },
  "SBNT": {
    "airport": "Sao Goncalo do Amarante-Governador Aluizio Alves International Airport",
    "latitude": -5.76806,
    "longitude": -35.3761
  },
  "SSLT": {
    "airport": "Alegrete Airport",
    "latitude": -29.8127,
    "longitude": -55.8934
  },
  "SBBG": {
    "airport": "Comandante Gustavo Kraemer Airport",
    "latitude": -31.3905,
    "longitude": -54.1122
  },
  "SSCN": {
    "airport": "Canela Airport",
    "latitude": -29.3706,
    "longitude": -50.8322
  },
  "SSSC": {
    "airport": "Santa Cruz do Sul Airport",
    "latitude": -29.6841,
    "longitude": -52.4122
  },
  "SSVP": {
    "airport": "Santa Vitoria do Palmar Airport",
    "latitude": -33.5022,
    "longitude": -53.3442
  },
  "SBCX": {
    "airport": "Caxias do Sul Airport (Hugo Cantergiani Regional Airport)",
    "latitude": -29.1971,
    "longitude": -51.1875
  },
  "SSER": {
    "airport": "Erechim Airport",
    "latitude": -27.6619,
    "longitude": -52.2683
  },
  "SBNM": {
    "airport": "Sepe Tiaraju Airport",
    "latitude": -28.2817,
    "longitude": -54.1691
  },
  "SSHZ": {
    "airport": "Horizontina Airport",
    "latitude": -27.6383,
    "longitude": -54.3391
  },
  "SSIJ": {
    "airport": "Joao Batista Bos Filho Airport",
    "latitude": -28.3687,
    "longitude": -53.8466
  },
  "SSIQ": {
    "airport": "Itaqui Airport",
    "latitude": -29.1731,
    "longitude": -56.5367
  },
  "SNLB": {
    "airport": "Livramento do Brumado Airport",
    "latitude": -13.6506,
    "longitude": -41.8339
  },
  "SBPK": {
    "airport": "Joao Simoes Lopes Neto International Airport",
    "latitude": -31.7184,
    "longitude": -52.3277
  },
  "SBPF": {
    "airport": "Lauro Kurtz Airport",
    "latitude": -28.244,
    "longitude": -52.3266
  },
  "SBPA": {
    "airport": "Salgado Filho International Airport",
    "latitude": -29.9944,
    "longitude": -51.1714
  },
  "SBSM": {
    "airport": "Santa Maria Airport (Rio Grande do Sul)",
    "latitude": -29.7114,
    "longitude": -53.6882
  },
  "SBRG": {
    "airport": "Rio Grande Regional Airport",
    "latitude": -32.0817,
    "longitude": -52.1633
  },
  "SSRU": {
    "airport": "Sao Lourenco do Sul Airport",
    "latitude": -31.3833,
    "longitude": -52.0328
  },
  "SSZR": {
    "airport": "Santa Rosa Airport (Brazil)",
    "latitude": -27.9067,
    "longitude": -54.5204
  },
  "SBTR": {
    "airport": "Torres Airport",
    "latitude": -29.4149,
    "longitude": -49.81
  },
  "SBUG": {
    "airport": "Rubem Berta International Airport",
    "latitude": -29.7822,
    "longitude": -57.0382
  },
  "SBBZ": {
    "airport": "Umberto Modiano Airport",
    "latitude": -22.7709,
    "longitude": -41.9631
  },
  "SBCP": {
    "airport": "Bartolomeu Lysandro Airport",
    "latitude": -21.6983,
    "longitude": -41.3017
  },
  "SBCB": {
    "airport": "Cabo Frio International Airport",
    "latitude": -22.9217,
    "longitude": -42.0743
  },
  "SBGL": {
    "airport": "Galeao-Antonio Carlos Jobim International Airport",
    "latitude": -22.81,
    "longitude": -43.2506
  },
  "SDUN": {
    "airport": "Itaperuna Airport",
    "latitude": -21.2193,
    "longitude": -41.8759
  },
  "SBME": {
    "airport": "Benedito Lacerda Airport",
    "latitude": -22.343,
    "longitude": -41.766
  },
  "SDRS": {
    "airport": "Resende Airport",
    "latitude": -22.4785,
    "longitude": -44.4803
  },
  "SBJR": {
    "airport": "Jacarepagua Airport",
    "latitude": -22.9878,
    "longitude": -43.3702
  },
  "SBRJ": {
    "airport": "Rio de Janeiro Santos Dumont Airport",
    "latitude": -22.9103,
    "longitude": -43.1655
  },
  "SBVH": {
    "airport": "Vilhena Airport (Brigadeiro Camarao Airport)",
    "latitude": -12.6944,
    "longitude": -60.0983
  },
  "SWCQ": {
    "airport": "Costa Marques Airport",
    "latitude": -12.4211,
    "longitude": -64.2516
  },
  "SBGM": {
    "airport": "Guajara-Mirim Airport",
    "latitude": -10.7864,
    "longitude": -65.2848
  },
  "SWJI": {
    "airport": "Jose Coleto Airport",
    "latitude": -10.8708,
    "longitude": -61.8465
  },
  "SSKW": {
    "airport": "Capital do Cafe Airport",
    "latitude": -11.496,
    "longitude": -61.4508
  },
  "SWPM": {
    "airport": "Pimenta Bueno Airport",
    "latitude": -11.6416,
    "longitude": -61.1791
  },
  "SBPV": {
    "airport": "Governador Jorge Teixeira de Oliveira International Airport",
    "latitude": -8.70929,
    "longitude": -63.9023
  },
  "SBBV": {
    "airport": "Boa Vista International Airport",
    "latitude": 2.84139,
    "longitude": -60.6922
  },
  "SSBL": {
    "airport": "Blumenau Airport",
    "latitude": -26.8306,
    "longitude": -49.0903
  },
  "SSCK": {
    "airport": "Concordia Airport",
    "latitude": -27.1806,
    "longitude": -52.0527
  },
  "SBCM": {
    "airport": "Diomicio Freitas Airport",
    "latitude": -28.7244,
    "longitude": -49.4214
  },
  "SBCD": {
    "airport": "Cacador Airport",
    "latitude": -26.7884,
    "longitude": -50.9398
  },
  "SBFL": {
    "airport": "Hercilio Luz International Airport",
    "latitude": -27.6703,
    "longitude": -48.5525
  },
  "SSJA": {
    "airport": "Santa Terezinha Municipal Airport",
    "latitude": -27.1714,
    "longitude": -51.5533
  },
  "SBJA": {
    "airport": "Humberto Ghizzo Bortoluzzi Regional Airport",
    "latitude": -28.6753,
    "longitude": -49.0596
  },
  "SBJV": {
    "airport": "Joinville-Lauro Carneiro de Loyola Airport",
    "latitude": -26.2245,
    "longitude": -48.7974
  },
  "SBLJ": {
    "airport": "Antonio Correia Pinto de Macedo Airport",
    "latitude": -27.7821,
    "longitude": -50.2815
  },
  "SSLN": {
    "airport": "Helmuth Baungartem Airport",
    "latitude": -27.16,
    "longitude": -49.5425
  },
  "SBNF": {
    "airport": "Navegantes-Ministro Victor Konder International Airport",
    "latitude": -26.88,
    "longitude": -48.6514
  },
  "SSOE": {
    "airport": "Helio Wasum Airport",
    "latitude": -26.7816,
    "longitude": -53.5035
  },
  "SSUV": {
    "airport": "Uniao da Vitoria Airport",
    "latitude": -26.2317,
    "longitude": -51.0689
  },
  "SSVI": {
    "airport": "Angelo Ponzoni Municipal Airport",
    "latitude": -26.9997,
    "longitude": -51.1419
  },
  "SBCH": {
    "airport": "Serafin Enoss Bertaso Airport",
    "latitude": -27.1342,
    "longitude": -52.6566
  },
  "SBAS": {
    "airport": "Assis Airport",
    "latitude": -22.64,
    "longitude": -50.4531
  },
  "SBAQ": {
    "airport": "Araraquara Airport",
    "latitude": -21.812,
    "longitude": -48.133
  },
  "SBAU": {
    "airport": "Aracatuba Airport",
    "latitude": -21.1413,
    "longitude": -50.4247
  },
  "SBBT": {
    "airport": "Chafei Amsei Airport",
    "latitude": -20.5845,
    "longitude": -48.5941
  },
  "SBBU": {
    "airport": "Bauru Airport",
    "latitude": -22.3436,
    "longitude": -49.0539
  },
  "SBBP": {
    "airport": "Arthur Siqueira-Braganca Paulista State Airport",
    "latitude": -22.9792,
    "longitude": -46.5375
  },
  "SBSP": {
    "airport": "Sao Paulo Congonhas Airport",
    "latitude": -23.6282,
    "longitude": -46.6572
  },
  "SDAM": {
    "airport": "Campo dos Amarais Airport",
    "latitude": -22.8592,
    "longitude": -47.1081
  },
  "SIMK": {
    "airport": "Franca Airport (Ten. Lund Presotto-Franca State Airport)",
    "latitude": -20.5922,
    "longitude": -47.3829
  },
  "SBGW": {
    "airport": "Guaratingueta Airport",
    "latitude": -22.7916,
    "longitude": -45.2048
  },
  "SBGR": {
    "airport": "Guarulhos International Airport",
    "latitude": -23.4322,
    "longitude": -46.4692
  },
  "SDJL": {
    "airport": "Jales Airport",
    "latitude": -20.293,
    "longitude": -50.5464
  },
  "SBAE": {
    "airport": "Moussa Nakhl Tobias-Bauru/Arealva State Airport",
    "latitude": -22.1669,
    "longitude": -49.0503
  },
  "SBLN": {
    "airport": "Lins Airport",
    "latitude": -21.664,
    "longitude": -49.7305
  },
  "SBML": {
    "airport": "Frank Miloye Milenkowichi-Marilia State Airport",
    "latitude": -22.1969,
    "longitude": -49.9264
  },
  "SDOU": {
    "airport": "Jornalista Benedito Pimentel-Ourinhos State Airport",
    "latitude": -22.9665,
    "longitude": -49.9133
  },
  "SBDN": {
    "airport": "Presidente Prudente Airport",
    "latitude": -22.1751,
    "longitude": -51.4246
  },
  "SDSC": {
    "airport": "Mario Pereira Lopes Airport",
    "latitude": -21.8754,
    "longitude": -47.9037
  },
  "SBRP": {
    "airport": "Leite Lopes Airport",
    "latitude": -21.1364,
    "longitude": -47.7767
  },
  "SBSJ": {
    "airport": "Professor Urbano Ernesto Stumpf International Airport",
    "latitude": -23.2292,
    "longitude": -45.8615
  },
  "SBSR": {
    "airport": "Prof. Eribelto Manoel Reino State Airport",
    "latitude": -20.8166,
    "longitude": -49.4065
  },
  "SDCO": {
    "airport": "Sorocaba Airport",
    "latitude": -23.478,
    "longitude": -47.49
  },
  "SBST": {
    "airport": "Santos Air Force Base",
    "latitude": -23.9281,
    "longitude": -46.2997
  },
  "SDUB": {
    "airport": "Ubatuba Airport",
    "latitude": -23.4411,
    "longitude": -45.0756
  },
  "SBUP": {
    "airport": "Castilho Airport (Urubupunga Airport)",
    "latitude": -20.7771,
    "longitude": -51.5648
  },
  "SBKP": {
    "airport": "Viracopos-Campinas International Airport",
    "latitude": -23.0081,
    "longitude": -47.1344
  },
  "SDVG": {
    "airport": "Votuporanga Airport (Domingos Pignatari Airport)",
    "latitude": -20.4632,
    "longitude": -50.0045
  },
  "SBAR": {
    "airport": "Santa Maria Airport (Sergipe)",
    "latitude": -10.984,
    "longitude": -37.0703
  },
  "SWRA": {
    "airport": "Arraias Airport",
    "latitude": -13.0252,
    "longitude": -46.8841
  },
  "SWGN": {
    "airport": "Araguaina Airport",
    "latitude": -7.22787,
    "longitude": -48.2405
  },
  "SWDN": {
    "airport": "Dianopolis Airport",
    "latitude": -11.5954,
    "longitude": -46.8467
  },
  "SWGI": {
    "airport": "Gurupi Airport",
    "latitude": -11.7396,
    "longitude": -49.1322
  },
  "SWIY": {
    "airport": "Santa Isabel do Morro Airport",
    "latitude": -11.5723,
    "longitude": -50.6662
  },
  "SBPJ": {
    "airport": "Palmas-Brigadeiro Lysias Rodrigues Airport",
    "latitude": -10.2915,
    "longitude": -48.357
  },
  "SBPN": {
    "airport": "Porto Nacional Airport",
    "latitude": -10.7194,
    "longitude": -48.3997
  },
  "MYAP": {
    "airport": "Spring Point Airport",
    "latitude": 22.4418,
    "longitude": -73.9709
  },
  "MYBG": {
    "airport": "Great Harbour Cay Airport",
    "latitude": 25.7383,
    "longitude": -77.8401
  },
  "MYBS": {
    "airport": "South Bimini Airport",
    "latitude": 25.6999,
    "longitude": -79.2647
  },
  "MYCB": {
    "airport": "New Bight Airport",
    "latitude": 24.3153,
    "longitude": -75.4523
  },
  "MYAF": {
    "airport": "Andros Town International Airport",
    "latitude": 24.6979,
    "longitude": -77.7956
  },
  "MYBC": {
    "airport": "Chub Cay International Airport",
    "latitude": 25.4171,
    "longitude": -77.8809
  },
  "MYAB": {
    "airport": "Clarence A. Bain Airport",
    "latitude": 24.2877,
    "longitude": -77.6846
  },
  "MYAN": {
    "airport": "San Andros Airport",
    "latitude": 25.0538,
    "longitude": -78.049
  },
  "MYCC": {
    "airport": "Cat Cay Airport",
    "latitude": 25.5546,
    "longitude": -79.2752
  },
  "MYAW": {
    "airport": "Walker's Cay Airport",
    "latitude": 27.2667,
    "longitude": -78.3997
  },
  "MYGF": {
    "airport": "Grand Bahama International Airport",
    "latitude": 26.5587,
    "longitude": -78.6956
  },
  "MYEF": {
    "airport": "Exuma International Airport",
    "latitude": 23.5626,
    "longitude": -75.878
  },
  "MYEN": {
    "airport": "Norman's Cay Airport",
    "latitude": 24.5943,
    "longitude": -76.8202
  },
  "MYES": {
    "airport": "Staniel Cay Airport",
    "latitude": 24.1691,
    "longitude": -76.4391
  },
  "MYEH": {
    "airport": "North Eleuthera Airport",
    "latitude": 25.4749,
    "longitude": -76.6835
  },
  "MYAM": {
    "airport": "Marsh Harbour Airport",
    "latitude": 26.5114,
    "longitude": -77.0835
  },
  "MYAT": {
    "airport": "Treasure Cay Airport",
    "latitude": 26.7453,
    "longitude": -77.3913
  },
  "MYIG": {
    "airport": "Inagua Airport (Matthew Town Airport)",
    "latitude": 20.975,
    "longitude": -73.6669
  },
  "MYCI": {
    "airport": "Colonel Hill Airport (Crooked Island Airport)",
    "latitude": 22.7456,
    "longitude": -74.1824
  },
  "MYRD": {
    "airport": "Duncan Town Airport",
    "latitude": 22.1818,
    "longitude": -75.7295
  },
  "MYLD": {
    "airport": "Deadman's Cay Airport",
    "latitude": 23.179,
    "longitude": -75.0936
  },
  "MYCP": {
    "airport": "Pitts Town Airport",
    "latitude": 22.8297,
    "longitude": -74.3461
  },
  "MYLS": {
    "airport": "Stella Maris Airport",
    "latitude": 23.5823,
    "longitude": -75.2686
  },
  "MYMM": {
    "airport": "Mayaguana Airport (Abraham's Bay Airport)",
    "latitude": 22.3795,
    "longitude": -73.0135
  },
  "MYNN": {
    "airport": "Lynden Pindling International Airport",
    "latitude": 25.039,
    "longitude": -77.4662
  },
  "MYRP": {
    "airport": "Port Nelson Airport",
    "latitude": 23.6844,
    "longitude": -74.8362
  },
  "MYSM": {
    "airport": "San Salvador Airport (Cockburn Town Airport)",
    "latitude": 24.0633,
    "longitude": -74.524
  },
  "MYAK": {
    "airport": "South Andros Airport",
    "latitude": 24.1589,
    "longitude": -77.5897
  },
  "MYCA": {
    "airport": "Arthur's Town Airport",
    "latitude": 24.6294,
    "longitude": -75.6738
  },
  "MYEM": {
    "airport": "Governor's Harbour Airport",
    "latitude": 25.2847,
    "longitude": -76.331
  },
  "MYER": {
    "airport": "Rock Sound International Airport",
    "latitude": 24.8951,
    "longitude": -76.1769
  },
  "MYGW": {
    "airport": "West End Airport",
    "latitude": 26.6853,
    "longitude": -78.975
  },
  "VQBT": {
    "airport": "Bathpalathang Airport",
    "latitude": 27.5622,
    "longitude": 90.7471
  },
  "VQPR": {
    "airport": "Paro International Airport",
    "latitude": 27.4032,
    "longitude": 89.4246
  },
  "VQGP": {
    "airport": "Gelephu Airport",
    "latitude": 26.8846,
    "longitude": 90.4641
  },
  "VQTY": {
    "airport": "Yongphulla Airport (Yonphula Airport)",
    "latitude": 27.2564,
    "longitude": 91.5145
  },
  "FBOR": {
    "airport": "Orapa Airport",
    "latitude": -21.2667,
    "longitude": 25.3167
  },
  "FBSP": {
    "airport": "Selebi-Phikwe Airport",
    "latitude": -22.0583,
    "longitude": 27.8288
  },
  "FBSN": {
    "airport": "Sua Pan Airport",
    "latitude": -20.5534,
    "longitude": 26.1158
  },
  "FBTL": {
    "airport": "Tuli Lodge Airport",
    "latitude": -22.1892,
    "longitude": 29.1269
  },
  "FBKE": {
    "airport": "Kasane Airport",
    "latitude": -17.8329,
    "longitude": 25.1624
  },
  "FBGZ": {
    "airport": "Ghanzi Airport",
    "latitude": -21.6925,
    "longitude": 21.6581
  },
  "FBTS": {
    "airport": "Tshabong Airport",
    "latitude": -26.0333,
    "longitude": 22.4
  },
  "FBFT": {
    "airport": "Francistown Airport",
    "latitude": -21.1596,
    "longitude": 27.4745
  },
  "FBKR": {
    "airport": "Khwai River Airport",
    "latitude": -19.15,
    "longitude": 23.783
  },
  "FBMN": {
    "airport": "Maun Airport",
    "latitude": -19.9726,
    "longitude": 23.4311
  },
  "FBSV": {
    "airport": "Savuti Airport",
    "latitude": -18.5206,
    "longitude": 24.0767
  },
  "FBSW": {
    "airport": "Shakawe Airport",
    "latitude": -18.3739,
    "longitude": 21.8326
  },
  "FBSK": {
    "airport": "Sir Seretse Khama International Airport",
    "latitude": -24.5552,
    "longitude": 25.9182
  },
  "FBLO": {
    "airport": "Lobatse Airport",
    "latitude": -25.1981,
    "longitude": 25.7139
  },
  "FBJW": {
    "airport": "Jwaneng Airport",
    "latitude": -24.6023,
    "longitude": 24.691
  },
  "UMBB": {
    "airport": "Brest Airport",
    "latitude": 52.1083,
    "longitude": 23.8981
  },
  "UMGG": {
    "airport": "Gomel Airport",
    "latitude": 52.527,
    "longitude": 31.0167
  },
  "UMMG": {
    "airport": "Grodno Airport",
    "latitude": 53.602,
    "longitude": 24.0538
  },
  "UMOO": {
    "airport": "Mogilev Airport",
    "latitude": 53.9549,
    "longitude": 30.0951
  },
  "UMMM": {
    "airport": "Minsk-1 Airport",
    "latitude": 53.8645,
    "longitude": 27.5397
  },
  "UMMS": {
    "airport": "Minsk National Airport",
    "latitude": 53.8825,
    "longitude": 28.0307
  },
  "UMII": {
    "airport": "Vitebsk Vostochny Airport",
    "latitude": 55.1265,
    "longitude": 30.3496
  },
  "MZBZ": {
    "airport": "Philip S. W. Goldson International Airport",
    "latitude": 17.5391,
    "longitude": -88.3082
  },
  "MZPL": {
    "airport": "Placencia Airport",
    "latitude": 16.537,
    "longitude": -88.3615
  },
  "CYNR": {
    "airport": "Fort MacKay/Horizon Airport",
    "latitude": 57.3817,
    "longitude": -111.701
  },
  "CZPC": {
    "airport": "Pincher Creek Airport",
    "latitude": 49.5206,
    "longitude": -113.997
  },
  "CYBA": {
    "airport": "Banff Airport",
    "latitude": 51.2073,
    "longitude": -115.542
  },
  "CYBF": {
    "airport": "Bonnyville Airport",
    "latitude": 54.3042,
    "longitude": -110.744
  },
  "CYCT": {
    "airport": "Coronation Airport",
    "latitude": 52.075,
    "longitude": -111.445
  },
  "CYEG": {
    "airport": "Edmonton International Airport",
    "latitude": 53.31,
    "longitude": -113.579
  },
  "CYET": {
    "airport": "Edson Airport",
    "latitude": 53.5789,
    "longitude": -116.465
  },
  "CYJA": {
    "airport": "Jasper Airport",
    "latitude": 52.9967,
    "longitude": -118.059
  },
  "CYLB": {
    "airport": "Lac La Biche Airport",
    "latitude": 54.7703,
    "longitude": -112.032
  },
  "CYLL": {
    "airport": "Lloydminster Airport",
    "latitude": 53.3092,
    "longitude": -110.073
  },
  "CYMM": {
    "airport": "Fort McMurray International Airport",
    "latitude": 56.6533,
    "longitude": -111.222
  },
  "CYOD": {
    "airport": "CFB Cold Lake (R.W. McNair Airport)",
    "latitude": 54.405,
    "longitude": -110.279
  },
  "CYOJ": {
    "airport": "High Level Airport",
    "latitude": 58.6214,
    "longitude": -117.165
  },
  "CYOP": {
    "airport": "Rainbow Lake Airport",
    "latitude": 58.4914,
    "longitude": -119.408
  },
  "CYPE": {
    "airport": "Peace River Airport",
    "latitude": 56.2269,
    "longitude": -117.447
  },
  "CYPY": {
    "airport": "Fort Chipewyan Airport",
    "latitude": 58.7672,
    "longitude": -111.117
  },
  "CYQF": {
    "airport": "Red Deer Regional Airport",
    "latitude": 52.1822,
    "longitude": -113.894
  },
  "CYQL": {
    "airport": "Lethbridge Airport",
    "latitude": 49.6303,
    "longitude": -112.8
  },
  "CYQU": {
    "airport": "Grande Prairie Airport",
    "latitude": 55.1797,
    "longitude": -118.885
  },
  "CYRM": {
    "airport": "Rocky Mountain House Airport",
    "latitude": 52.4297,
    "longitude": -114.904
  },
  "CYSD": {
    "airport": "CFB Suffield",
    "latitude": 50.2667,
    "longitude": -111.183
  },
  "CYVG": {
    "airport": "Vermilion Airport",
    "latitude": 53.3558,
    "longitude": -110.824
  },
  "CYXH": {
    "airport": "Medicine Hat Airport",
    "latitude": 50.0189,
    "longitude": -110.721
  },
  "CYYC": {
    "airport": "Calgary International Airport",
    "latitude": 51.1139,
    "longitude": -114.02
  },
  "CYYM": {
    "airport": "Cowley Airport",
    "latitude": 49.6364,
    "longitude": -114.094
  },
  "CYZH": {
    "airport": "Slave Lake Airport",
    "latitude": 55.2931,
    "longitude": -114.777
  },
  "CYZU": {
    "airport": "Whitecourt Airport",
    "latitude": 54.1439,
    "longitude": -115.787
  },
  "CZHP": {
    "airport": "High Prairie Airport",
    "latitude": 55.3936,
    "longitude": -116.475
  },
  "CYHC": {
    "airport": "Vancouver Harbour Flight Centre (Coal Harbour Seaplane Base)",
    "latitude": 49.2944,
    "longitude": -123.111
  },
  "CYBD": {
    "airport": "Bella Coola Airport",
    "latitude": 52.3875,
    "longitude": -126.596
  },
  "CYAL": {
    "airport": "Alert Bay Airport",
    "latitude": 50.5822,
    "longitude": -126.916
  },
  "CYAZ": {
    "airport": "Tofino/Long Beach Airport",
    "latitude": 49.0798,
    "longitude": -125.776
  },
  "CYBH": {
    "airport": "Bull Harbour Waterdrome",
    "latitude": 50.9179,
    "longitude": -127.937
  },
  "CYBL": {
    "airport": "Campbell River Airport",
    "latitude": 49.9508,
    "longitude": -125.271
  },
  "CYCD": {
    "airport": "Nanaimo Airport",
    "latitude": 49.055,
    "longitude": -123.87
  },
  "CYCG": {
    "airport": "West Kootenay Regional Airport (Castlegar Airport)",
    "latitude": 49.2964,
    "longitude": -117.632
  },
  "CYCQ": {
    "airport": "Chetwynd Airport",
    "latitude": 55.6872,
    "longitude": -121.627
  },
  "CYCW": {
    "airport": "Chilliwack Airport",
    "latitude": 49.1528,
    "longitude": -121.939
  },
  "CYCZ": {
    "airport": "Fairmont Hot Springs Airport",
    "latitude": 50.3303,
    "longitude": -115.873
  },
  "CYDL": {
    "airport": "Dease Lake Airport",
    "latitude": 58.4222,
    "longitude": -130.032
  },
  "CYDQ": {
    "airport": "Dawson Creek Airport",
    "latitude": 55.7423,
    "longitude": -120.183
  },
  "CZBB": {
    "airport": "Boundary Bay Airport",
    "latitude": 49.0742,
    "longitude": -123.012
  },
  "CYGB": {
    "airport": "Texada/Gillies Bay Airport",
    "latitude": 49.6942,
    "longitude": -124.518
  },
  "CYHE": {
    "airport": "Hope Aerodrome",
    "latitude": 49.3683,
    "longitude": -121.498
  },
  "CYKA": {
    "airport": "Kamloops Airport",
    "latitude": 50.7022,
    "longitude": -120.444
  },
  "CYLW": {
    "airport": "Kelowna International Airport",
    "latitude": 49.9561,
    "longitude": -119.378
  },
  "CYNJ": {
    "airport": "Langley Regional Airport",
    "latitude": 49.1008,
    "longitude": -122.631
  },
  "CYNH": {
    "airport": "Hudson's Hope Airport",
    "latitude": 56.0356,
    "longitude": -121.976
  },
  "CYPR": {
    "airport": "Prince Rupert Airport",
    "latitude": 54.2861,
    "longitude": -130.445
  },
  "CYPW": {
    "airport": "Powell River Airport",
    "latitude": 49.8342,
    "longitude": -124.5
  },
  "CYPZ": {
    "airport": "Burns Lake Airport",
    "latitude": 54.3764,
    "longitude": -125.951
  },
  "CYQQ": {
    "airport": "CFB Comox",
    "latitude": 49.7108,
    "longitude": -124.887
  },
  "CYQZ": {
    "airport": "Quesnel Airport",
    "latitude": 53.0261,
    "longitude": -122.51
  },
  "CYRV": {
    "airport": "Revelstoke Airport",
    "latitude": 50.9667,
    "longitude": -118.183
  },
  "CYSE": {
    "airport": "Squamish Airport",
    "latitude": 49.7817,
    "longitude": -123.162
  },
  "CZAM": {
    "airport": "Salmon Arm Airport",
    "latitude": 50.6828,
    "longitude": -119.229
  },
  "CYVK": {
    "airport": "Vernon Regional Airport",
    "latitude": 50.2481,
    "longitude": -119.331
  },
  "CYVR": {
    "airport": "Vancouver International Airport",
    "latitude": 49.1939,
    "longitude": -123.184
  },
  "CYWH": {
    "airport": "Victoria Harbour Water Airport",
    "latitude": 48.425,
    "longitude": -123.389
  },
  "CYWL": {
    "airport": "Williams Lake Airport",
    "latitude": 52.1831,
    "longitude": -122.054
  },
  "CYXC": {
    "airport": "Cranbrook/Canadian Rockies International Airport",
    "latitude": 49.6108,
    "longitude": -115.782
  },
  "CYXJ": {
    "airport": "Fort St. John Airport (North Peace Airport)",
    "latitude": 56.2381,
    "longitude": -120.74
  },
  "CYXS": {
    "airport": "Prince George Airport",
    "latitude": 53.8894,
    "longitude": -122.679
  },
  "CYXT": {
    "airport": "Northwest Regional Airport",
    "latitude": 54.4685,
    "longitude": -128.576
  },
  "CYXX": {
    "airport": "Abbotsford International Airport",
    "latitude": 49.0253,
    "longitude": -122.361
  },
  "CYYD": {
    "airport": "Smithers Airport",
    "latitude": 54.8247,
    "longitude": -127.183
  },
  "CYYE": {
    "airport": "Northern Rockies Regional Airport",
    "latitude": 58.8364,
    "longitude": -122.597
  },
  "CYYF": {
    "airport": "Penticton Regional Airport",
    "latitude": 49.4631,
    "longitude": -119.602
  },
  "CYYJ": {
    "airport": "Victoria International Airport",
    "latitude": 48.6469,
    "longitude": -123.426
  },
  "CYZP": {
    "airport": "Sandspit Airport",
    "latitude": 53.2543,
    "longitude": -131.814
  },
  "CYZT": {
    "airport": "Port Hardy Airport",
    "latitude": 50.6806,
    "longitude": -127.367
  },
  "CBBC": {
    "airport": "Bella Bella (Campbell Island) Airport",
    "latitude": 52.185,
    "longitude": -128.157
  },
  "CZGF": {
    "airport": "Grand Forks Airport",
    "latitude": 49.0156,
    "longitude": -118.431
  },
  "CZML": {
    "airport": "South Cariboo Regional Airport",
    "latitude": 51.7361,
    "longitude": -121.333
  },
  "CZMT": {
    "airport": "Masset Airport",
    "latitude": 54.0275,
    "longitude": -132.125
  },
  "CZST": {
    "airport": "Stewart Aerodrome",
    "latitude": 55.9354,
    "longitude": -129.982
  },
  "CZSW": {
    "airport": "Prince Rupert/Seal Cove Water Airport",
    "latitude": 54.3333,
    "longitude": -130.283
  },
  "CZBD": {
    "airport": "Ilford Airport",
    "latitude": 56.0614,
    "longitude": -95.6139
  },
  "CZEE": {
    "airport": "Kelsey Airport",
    "latitude": 56.0375,
    "longitude": -96.5097
  },
  "CZMN": {
    "airport": "Pikwitonei Airport",
    "latitude": 55.5889,
    "longitude": -97.1642
  },
  "CZWH": {
    "airport": "Lac Brochet Airport",
    "latitude": 58.6175,
    "longitude": -101.469
  },
  "CZFG": {
    "airport": "Pukatawagan Airport",
    "latitude": 55.7492,
    "longitude": -101.266
  },
  "CZNG": {
    "airport": "Poplar River Airport",
    "latitude": 52.9965,
    "longitude": -97.2742
  },
  "CZSN": {
    "airport": "South Indian Lake Airport",
    "latitude": 56.7928,
    "longitude": -98.9072
  },
  "CYBQ": {
    "airport": "Tadoule Lake Airport",
    "latitude": 58.7061,
    "longitude": -98.5122
  },
  "CYBR": {
    "airport": "Brandon Municipal Airport (McGill Field)",
    "latitude": 49.91,
    "longitude": -99.9519
  },
  "CYBT": {
    "airport": "Brochet Airport",
    "latitude": 57.8894,
    "longitude": -101.679
  },
  "CYBV": {
    "airport": "Berens River Airport",
    "latitude": 52.3589,
    "longitude": -97.0183
  },
  "CYCR": {
    "airport": "Cross Lake (Charlie Sinclair Memorial) Airport",
    "latitude": 54.6106,
    "longitude": -97.7608
  },
  "CYDN": {
    "airport": "Lt. Col W.G. (Billy) Barker VC Airport",
    "latitude": 51.1008,
    "longitude": -100.052
  },
  "CZTA": {
    "airport": "Bloodvein River Airport",
    "latitude": 51.7846,
    "longitude": -96.6923
  },
  "CYFO": {
    "airport": "Flin Flon Airport",
    "latitude": 54.6781,
    "longitude": -101.682
  },
  "CYGM": {
    "airport": "Gimli Industrial Park Airport",
    "latitude": 50.6281,
    "longitude": -97.0433
  },
  "CYGO": {
    "airport": "Gods Lake Narrows Airport",
    "latitude": 54.5589,
    "longitude": -94.4914
  },
  "CYGX": {
    "airport": "Gillam Airport",
    "latitude": 56.3575,
    "longitude": -94.7106
  },
  "CYIV": {
    "airport": "Island Lake Airport (Garden Hill Airport)",
    "latitude": 53.8572,
    "longitude": -94.6536
  },
  "CYLR": {
    "airport": "Leaf Rapids Airport",
    "latitude": 56.5133,
    "longitude": -99.9853
  },
  "CYNE": {
    "airport": "Norway House Airport",
    "latitude": 53.9583,
    "longitude": -97.8442
  },
  "CYOH": {
    "airport": "Oxford House Airport",
    "latitude": 54.9333,
    "longitude": -95.2789
  },
  "CYPG": {
    "airport": "Portage la Prairie/Southport Airport",
    "latitude": 49.9031,
    "longitude": -98.2738
  },
  "CYQD": {
    "airport": "The Pas Airport",
    "latitude": 53.9714,
    "longitude": -101.091
  },
  "CYRS": {
    "airport": "Red Sucker Lake Airport",
    "latitude": 54.1672,
    "longitude": -93.5572
  },
  "CYST": {
    "airport": "St. Theresa Point Airport",
    "latitude": 53.8456,
    "longitude": -94.8519
  },
  "CZLQ": {
    "airport": "Thicket Portage Airport",
    "latitude": 55.3189,
    "longitude": -97.7078
  },
  "CYTH": {
    "airport": "Thompson Airport",
    "latitude": 55.8011,
    "longitude": -97.8642
  },
  "CYWG": {
    "airport": "Winnipeg James Armstrong Richardson International Airport",
    "latitude": 49.91,
    "longitude": -97.2399
  },
  "CYYI": {
    "airport": "Rivers Airport",
    "latitude": 50.0101,
    "longitude": -100.314
  },
  "CYYL": {
    "airport": "Lynn Lake Airport",
    "latitude": 56.8639,
    "longitude": -101.076
  },
  "CYYQ": {
    "airport": "Churchill Airport",
    "latitude": 58.7392,
    "longitude": -94.065
  },
  "CZAC": {
    "airport": "York Landing Airport",
    "latitude": 56.0894,
    "longitude": -96.0892
  },
  "CZGI": {
    "airport": "Gods River Airport",
    "latitude": 54.8397,
    "longitude": -94.0786
  },
  "CZGR": {
    "airport": "Little Grand Rapids Airport",
    "latitude": 52.0456,
    "longitude": -95.4658
  },
  "CZJG": {
    "airport": "Jenpeg Airport",
    "latitude": 54.5189,
    "longitude": -98.0461
  },
  "CZJN": {
    "airport": "Swan River Airport",
    "latitude": 52.1206,
    "longitude": -101.236
  },
  "CZTM": {
    "airport": "Shamattawa Airport",
    "latitude": 55.8656,
    "longitude": -92.0814
  },
  "CYCH": {
    "airport": "Miramichi Airport",
    "latitude": 47.0078,
    "longitude": -65.4492
  },
  "CYCL": {
    "airport": "Charlo Airport",
    "latitude": 47.9908,
    "longitude": -66.3303
  },
  "CYFC": {
    "airport": "Fredericton International Airport",
    "latitude": 45.8689,
    "longitude": -66.5372
  },
  "CYQM": {
    "airport": "Greater Moncton International Airport",
    "latitude": 46.1122,
    "longitude": -64.6786
  },
  "CYSJ": {
    "airport": "Saint John Airport",
    "latitude": 45.3161,
    "longitude": -65.8903
  },
  "CYSL": {
    "airport": "Saint-Leonard Aerodrome",
    "latitude": 47.1575,
    "longitude": -67.8347
  },
  "CZBF": {
    "airport": "Bathurst Airport (New Brunswick)",
    "latitude": 47.6297,
    "longitude": -65.7389
  },
  "CYAY": {
    "airport": "St. Anthony Airport",
    "latitude": 51.3919,
    "longitude": -56.0831
  },
  "CYDF": {
    "airport": "Deer Lake Regional Airport",
    "latitude": 49.2108,
    "longitude": -57.3914
  },
  "CYDP": {
    "airport": "Nain Airport",
    "latitude": 56.5492,
    "longitude": -61.6803
  },
  "CYHO": {
    "airport": "Hopedale Airport",
    "latitude": 55.4483,
    "longitude": -60.2286
  },
  "CYJT": {
    "airport": "Stephenville International Airport",
    "latitude": 48.5442,
    "longitude": -58.55
  },
  "CYMH": {
    "airport": "Mary's Harbour Airport",
    "latitude": 52.3028,
    "longitude": -55.8472
  },
  "CYFT": {
    "airport": "Makkovik Airport",
    "latitude": 55.0769,
    "longitude": -59.1864
  },
  "CYQX": {
    "airport": "Gander International Airport / CFB Gander",
    "latitude": 48.9369,
    "longitude": -54.5681
  },
  "CYCA": {
    "airport": "Cartwright Airport",
    "latitude": 53.6828,
    "longitude": -57.0419
  },
  "CYWK": {
    "airport": "Wabush Airport",
    "latitude": 52.9219,
    "longitude": -66.8644
  },
  "CYYR": {
    "airport": "CFB Goose Bay",
    "latitude": 53.3192,
    "longitude": -60.4258
  },
  "CYYT": {
    "airport": "St. John's International Airport",
    "latitude": 47.6186,
    "longitude": -52.7519
  },
  "CZUM": {
    "airport": "Churchill Falls Airport",
    "latitude": 53.5619,
    "longitude": -64.1064
  },
  "CYKD": {
    "airport": "Aklavik/Freddie Carmichael Airport",
    "latitude": 68.2233,
    "longitude": -135.006
  },
  "CYVL": {
    "airport": "Colville Lake/Tommy Kochon Aerodrome",
    "latitude": 67.02,
    "longitude": -126.126
  },
  "CYEV": {
    "airport": "Inuvik (Mike Zubko) Airport",
    "latitude": 68.3042,
    "longitude": -133.483
  },
  "CYWE": {
    "airport": "Wekweeti Airport",
    "latitude": 64.1908,
    "longitude": -114.077
  },
  "CYFR": {
    "airport": "Fort Resolution Airport",
    "latitude": 61.1808,
    "longitude": -113.69
  },
  "CYFS": {
    "airport": "Fort Simpson Airport",
    "latitude": 61.7602,
    "longitude": -121.237
  },
  "CYGH": {
    "airport": "Fort Good Hope Airport",
    "latitude": 66.2408,
    "longitude": -128.651
  },
  "CYHI": {
    "airport": "Ulukhaktok/Holman Airport",
    "latitude": 70.7628,
    "longitude": -117.806
  },
  "CYHY": {
    "airport": "Hay River/Merlyn Carter Airport",
    "latitude": 60.8397,
    "longitude": -115.783
  },
  "CYJF": {
    "airport": "Fort Liard Airport",
    "latitude": 60.2358,
    "longitude": -123.469
  },
  "CYMD": {
    "airport": "Mould Bay Airport",
    "latitude": 76.2392,
    "longitude": -119.322
  },
  "CYOA": {
    "airport": "Ekati Airport",
    "latitude": 64.6989,
    "longitude": -110.615
  },
  "CYPC": {
    "airport": "Nora Aliqatchialuk Ruben Airport",
    "latitude": 69.3608,
    "longitude": -124.075
  },
  "CYRA": {
    "airport": "Gameti/Rae Lakes Airport",
    "latitude": 64.1161,
    "longitude": -117.31
  },
  "CYLK": {
    "airport": "Lutselk'e Airport",
    "latitude": 62.4183,
    "longitude": -110.682
  },
  "CYSM": {
    "airport": "Fort Smith Airport",
    "latitude": 60.0203,
    "longitude": -111.962
  },
  "CYSY": {
    "airport": "Sachs Harbour (David Nasogaluak Jr. Saaryuaq) Airport",
    "latitude": 71.9939,
    "longitude": -125.243
  },
  "CYUB": {
    "airport": "Tuktoyaktuk/James Gruben Airport",
    "latitude": 69.4333,
    "longitude": -133.026
  },
  "CYVQ": {
    "airport": "Norman Wells Airport",
    "latitude": 65.2816,
    "longitude": -126.798
  },
  "CYWJ": {
    "airport": "Deline Airport",
    "latitude": 65.2111,
    "longitude": -123.436
  },
  "CYWY": {
    "airport": "Wrigley Airport",
    "latitude": 63.2094,
    "longitude": -123.437
  },
  "CYZF": {
    "airport": "Yellowknife Airport",
    "latitude": 62.4628,
    "longitude": -114.44
  },
  "CZFM": {
    "airport": "Fort McPherson Airport",
    "latitude": 67.4075,
    "longitude": -134.861
  },
  "CZFN": {
    "airport": "Tulita Airport",
    "latitude": 64.9097,
    "longitude": -125.573
  },
  "CYID": {
    "airport": "Digby/Annapolis Regional Airport",
    "latitude": 44.5458,
    "longitude": -65.7854
  },
  "CYHZ": {
    "airport": "Halifax Stanfield International Airport",
    "latitude": 44.8808,
    "longitude": -63.5086
  },
  "CYPD": {
    "airport": "Port Hawkesbury Airport",
    "latitude": 45.6567,
    "longitude": -61.3681
  },
  "CYQI": {
    "airport": "Yarmouth Airport",
    "latitude": 43.8269,
    "longitude": -66.0881
  },
  "CYQY": {
    "airport": "Sydney/J.A. Douglas McCurdy Airport",
    "latitude": 46.1614,
    "longitude": -60.0478
  },
  "CYZX": {
    "airport": "CFB Greenwood",
    "latitude": 44.9844,
    "longitude": -64.9169
  },
  "CYAB": {
    "airport": "Arctic Bay Airport",
    "latitude": 73.0058,
    "longitude": -85.0425
  },
  "CYBB": {
    "airport": "Kugaaruk Airport",
    "latitude": 68.5344,
    "longitude": -89.8081
  },
  "CYBK": {
    "airport": "Baker Lake Airport",
    "latitude": 64.2989,
    "longitude": -96.0778
  },
  "CYCB": {
    "airport": "Cambridge Bay Airport",
    "latitude": 69.1081,
    "longitude": -105.138
  },
  "CYCO": {
    "airport": "Kugluktuk Airport",
    "latitude": 67.8167,
    "longitude": -115.144
  },
  "CYCS": {
    "airport": "Chesterfield Inlet Airport",
    "latitude": 63.3469,
    "longitude": -90.7311
  },
  "CYCY": {
    "airport": "Clyde River Airport",
    "latitude": 70.4861,
    "longitude": -68.5167
  },
  "CYEK": {
    "airport": "Arviat Airport",
    "latitude": 61.0942,
    "longitude": -94.0708
  },
  "CYEU": {
    "airport": "Eureka Aerodrome",
    "latitude": 79.9947,
    "longitude": -85.8142
  },
  "CYFB": {
    "airport": "Iqaluit Airport",
    "latitude": 63.7564,
    "longitude": -68.5558
  },
  "CYGT": {
    "airport": "Igloolik Airport",
    "latitude": 69.3647,
    "longitude": -81.8161
  },
  "CYGZ": {
    "airport": "Grise Fiord Airport",
    "latitude": 76.4261,
    "longitude": -82.9092
  },
  "CYHK": {
    "airport": "Gjoa Haven Airport",
    "latitude": 68.6356,
    "longitude": -95.8497
  },
  "CYIO": {
    "airport": "Pond Inlet Airport",
    "latitude": 72.6833,
    "longitude": -77.9667
  },
  "CYLC": {
    "airport": "Kimmirut Airport",
    "latitude": 62.85,
    "longitude": -69.8833
  },
  "CYLT": {
    "airport": "Alert Airport",
    "latitude": 82.5178,
    "longitude": -62.2806
  },
  "CYRB": {
    "airport": "Resolute Bay Airport",
    "latitude": 74.7169,
    "longitude": -94.9694
  },
  "CYRT": {
    "airport": "Rankin Inlet Airport",
    "latitude": 62.8114,
    "longitude": -92.1158
  },
  "CYSK": {
    "airport": "Sanikiluaq Airport",
    "latitude": 56.5378,
    "longitude": -79.2467
  },
  "CYTE": {
    "airport": "Cape Dorset Airport",
    "latitude": 64.23,
    "longitude": -76.5267
  },
  "CYUT": {
    "airport": "Repulse Bay Airport",
    "latitude": 66.5214,
    "longitude": -86.2247
  },
  "CYUX": {
    "airport": "Hall Beach Airport",
    "latitude": 68.7761,
    "longitude": -81.2425
  },
  "CYVM": {
    "airport": "Qikiqtarjuaq Airport",
    "latitude": 67.5458,
    "longitude": -64.0314
  },
  "CYVN": {
    "airport": "Cape Dyer Airport",
    "latitude": 66.593,
    "longitude": -61.5776
  },
  "CYXN": {
    "airport": "Whale Cove Airport",
    "latitude": 62.24,
    "longitude": -92.5981
  },
  "CYXP": {
    "airport": "Pangnirtung Airport",
    "latitude": 66.145,
    "longitude": -65.7136
  },
  "CYYH": {
    "airport": "Taloyoak Airport",
    "latitude": 69.5467,
    "longitude": -93.5767
  },
  "CYZS": {
    "airport": "Coral Harbour Airport",
    "latitude": 64.1933,
    "longitude": -83.3594
  },
  "CZMD": {
    "airport": "Muskrat Dam Airport",
    "latitude": 53.4414,
    "longitude": -91.7628
  },
  "CYCK": {
    "airport": "Chatham-Kent Airport",
    "latitude": 42.3064,
    "longitude": -82.0819
  },
  "CYAQ": {
    "airport": "Kasabonika Airport",
    "latitude": 53.5247,
    "longitude": -88.6428
  },
  "CYAC": {
    "airport": "Cat Lake Airport",
    "latitude": 51.7272,
    "longitude": -91.8244
  },
  "CYAG": {
    "airport": "Fort Frances Municipal Airport",
    "latitude": 48.6542,
    "longitude": -93.4397
  },
  "CYAM": {
    "airport": "Sault Ste. Marie Airport",
    "latitude": 46.485,
    "longitude": -84.5094
  },
  "CYAT": {
    "airport": "Attawapiskat Airport",
    "latitude": 52.9275,
    "longitude": -82.4319
  },
  "CYCC": {
    "airport": "Cornwall Regional Airport",
    "latitude": 45.0928,
    "longitude": -74.5633
  },
  "CYCE": {
    "airport": "Centralia/James T. Field Memorial Aerodrome",
    "latitude": 43.2856,
    "longitude": -81.5083
  },
  "CYSN": {
    "airport": "St. Catharines/Niagara District Airport",
    "latitude": 43.1917,
    "longitude": -79.1717
  },
  "CYCN": {
    "airport": "Cochrane Aerodrome",
    "latitude": 49.1056,
    "longitude": -81.0136
  },
  "CYEL": {
    "airport": "Elliot Lake Municipal Airport",
    "latitude": 46.3514,
    "longitude": -82.5614
  },
  "CYEM": {
    "airport": "Manitowaning/Manitoulin East Municipal Airport",
    "latitude": 45.8428,
    "longitude": -81.8581
  },
  "CYER": {
    "airport": "Fort Severn Airport",
    "latitude": 56.0189,
    "longitude": -87.6761
  },
  "CYFA": {
    "airport": "Fort Albany Airport",
    "latitude": 52.2014,
    "longitude": -81.6969
  },
  "CYFH": {
    "airport": "Fort Hope Airport",
    "latitude": 51.5619,
    "longitude": -87.9078
  },
  "CYGK": {
    "airport": "Kingston/Norman Rogers Airport",
    "latitude": 44.2253,
    "longitude": -76.5969
  },
  "CYGQ": {
    "airport": "Geraldton (Greenstone Regional) Airport",
    "latitude": 49.7783,
    "longitude": -86.9394
  },
  "CYHD": {
    "airport": "Dryden Regional Airport",
    "latitude": 49.8317,
    "longitude": -92.7442
  },
  "CYHF": {
    "airport": "Hearst Municipal Airport",
    "latitude": 49.7142,
    "longitude": -83.6861
  },
  "CYHM": {
    "airport": "John C. Munro Hamilton International Airport",
    "latitude": 43.1736,
    "longitude": -79.935
  },
  "CYHN": {
    "airport": "Hornepayne Municipal Airport",
    "latitude": 49.1931,
    "longitude": -84.7589
  },
  "CYHP": {
    "airport": "Poplar Hill Airport",
    "latitude": 52.1133,
    "longitude": -94.2556
  },
  "CYIB": {
    "airport": "Atikokan Municipal Airport",
    "latitude": 48.7739,
    "longitude": -91.6386
  },
  "CYKM": {
    "airport": "Kincardine Municipal Airport",
    "latitude": 44.2014,
    "longitude": -81.6067
  },
  "CYKF": {
    "airport": "Region of Waterloo International Airport",
    "latitude": 43.4558,
    "longitude": -80.3858
  },
  "CYKX": {
    "airport": "Kirkland Lake Airport",
    "latitude": 48.2103,
    "longitude": -79.9814
  },
  "CYLD": {
    "airport": "Chapleau Airport",
    "latitude": 47.82,
    "longitude": -83.3467
  },
  "CYLH": {
    "airport": "Lansdowne House Airport",
    "latitude": 52.1956,
    "longitude": -87.9342
  },
  "CYLS": {
    "airport": "Lake Simcoe Regional Airport",
    "latitude": 44.4853,
    "longitude": -79.5556
  },
  "CYMG": {
    "airport": "Manitouwadge Airport",
    "latitude": 49.0839,
    "longitude": -85.8606
  },
  "CYMO": {
    "airport": "Moosonee Airport",
    "latitude": 51.2911,
    "longitude": -80.6078
  },
  "CYKP": {
    "airport": "Ogoki Post Airport",
    "latitude": 51.6586,
    "longitude": -85.9017
  },
  "CYOO": {
    "airport": "Oshawa Airport",
    "latitude": 43.9228,
    "longitude": -78.895
  },
  "CYOS": {
    "airport": "Billy Bishop Regional Airport",
    "latitude": 44.5903,
    "longitude": -80.8375
  },
  "CYOW": {
    "airport": "Ottawa Macdonald-Cartier International Airport",
    "latitude": 45.3225,
    "longitude": -75.6692
  },
  "CYPL": {
    "airport": "Pickle Lake Airport",
    "latitude": 51.4464,
    "longitude": -90.2142
  },
  "CYPM": {
    "airport": "Pikangikum Airport",
    "latitude": 51.8197,
    "longitude": -93.9733
  },
  "CYPO": {
    "airport": "Peawanuck Airport",
    "latitude": 54.9881,
    "longitude": -85.4433
  },
  "CYPQ": {
    "airport": "Peterborough Airport",
    "latitude": 44.23,
    "longitude": -78.3633
  },
  "CYQA": {
    "airport": "Muskoka Airport",
    "latitude": 44.9747,
    "longitude": -79.3033
  },
  "CYQG": {
    "airport": "Windsor International Airport",
    "latitude": 42.2756,
    "longitude": -82.9556
  },
  "CYQK": {
    "airport": "Kenora Airport",
    "latitude": 49.7883,
    "longitude": -94.3631
  },
  "CYQN": {
    "airport": "Nakina Airport",
    "latitude": 50.1828,
    "longitude": -86.6964
  },
  "CYQS": {
    "airport": "St. Thomas Municipal Airport",
    "latitude": 42.77,
    "longitude": -81.1108
  },
  "CYQT": {
    "airport": "Thunder Bay International Airport",
    "latitude": 48.3719,
    "longitude": -89.3239
  },
  "CYRL": {
    "airport": "Red Lake Airport",
    "latitude": 51.0669,
    "longitude": -93.7931
  },
  "CYRO": {
    "airport": "Ottawa/Rockcliffe Airport",
    "latitude": 45.4603,
    "longitude": -75.6461
  },
  "CYSB": {
    "airport": "Sudbury Airport",
    "latitude": 46.625,
    "longitude": -80.7989
  },
  "CYSH": {
    "airport": "Smiths Falls-Montague Airport",
    "latitude": 44.9458,
    "longitude": -75.9406
  },
  "CYSP": {
    "airport": "Marathon Aerodrome",
    "latitude": 48.7553,
    "longitude": -86.3444
  },
  "CYTA": {
    "airport": "Pembroke Airport",
    "latitude": 45.8644,
    "longitude": -77.2517
  },
  "CYTL": {
    "airport": "Big Trout Lake Airport",
    "latitude": 53.8178,
    "longitude": -89.8969
  },
  "CYTR": {
    "airport": "CFB Trenton",
    "latitude": 44.1189,
    "longitude": -77.5281
  },
  "CYTS": {
    "airport": "Timmins/Victor M. Power Airport",
    "latitude": 48.5697,
    "longitude": -81.3767
  },
  "CYTZ": {
    "airport": "Billy Bishop Toronto City Airport",
    "latitude": 43.6285,
    "longitude": -79.396
  },
  "CYVV": {
    "airport": "Wiarton Airport",
    "latitude": 44.7458,
    "longitude": -81.1072
  },
  "CYVZ": {
    "airport": "Deer Lake Airport",
    "latitude": 52.6558,
    "longitude": -94.0614
  },
  "CYWA": {
    "airport": "Petawawa Airport",
    "latitude": 45.9522,
    "longitude": -77.3192
  },
  "CYWP": {
    "airport": "Webequie Airport",
    "latitude": 52.9594,
    "longitude": -87.3749
  },
  "CYXL": {
    "airport": "Sioux Lookout Airport",
    "latitude": 50.1139,
    "longitude": -91.9053
  },
  "CYXR": {
    "airport": "Earlton (Timiskaming Regional) Airport",
    "latitude": 47.6974,
    "longitude": -79.8473
  },
  "CYXU": {
    "airport": "London International Airport",
    "latitude": 43.0356,
    "longitude": -81.1539
  },
  "CYXZ": {
    "airport": "Wawa Airport",
    "latitude": 47.9667,
    "longitude": -84.7867
  },
  "CYYB": {
    "airport": "North Bay/Jack Garland Airport",
    "latitude": 46.3636,
    "longitude": -79.4228
  },
  "CYYU": {
    "airport": "Kapuskasing Airport",
    "latitude": 49.4139,
    "longitude": -82.4675
  },
  "CYYW": {
    "airport": "Armstrong Airport",
    "latitude": 50.2903,
    "longitude": -88.9097
  },
  "CYYZ": {
    "airport": "Toronto Pearson International Airport",
    "latitude": 43.6797,
    "longitude": -79.6227
  },
  "CYZE": {
    "airport": "Gore Bay-Manitoulin Airport",
    "latitude": 45.8853,
    "longitude": -82.5678
  },
  "CYZR": {
    "airport": "Sarnia Chris Hadfield Airport",
    "latitude": 42.9994,
    "longitude": -82.3089
  },
  "CZKE": {
    "airport": "Kashechewan Airport",
    "latitude": 52.2825,
    "longitude": -81.6778
  },
  "CZPB": {
    "airport": "Sachigo Lake Airport",
    "latitude": 53.8911,
    "longitude": -92.1964
  },
  "CZRJ": {
    "airport": "Round Lake (Weagamow Lake) Airport",
    "latitude": 52.9436,
    "longitude": -91.3128
  },
  "CZSJ": {
    "airport": "Sandy Lake Airport",
    "latitude": 53.0642,
    "longitude": -93.3444
  },
  "CZUC": {
    "airport": "Ignace Municipal Airport",
    "latitude": 49.4297,
    "longitude": -91.7178
  },
  "CYSU": {
    "airport": "Summerside Airport",
    "latitude": 46.4406,
    "longitude": -63.8336
  },
  "CYYG": {
    "airport": "Charlottetown Airport",
    "latitude": 46.29,
    "longitude": -63.1211
  },
  "CYKO": {
    "airport": "Akulivik Airport",
    "latitude": 60.8186,
    "longitude": -78.1486
  },
  "CYLU": {
    "airport": "Kangiqsualujjuaq (Georges River) Airport",
    "latitude": 58.7114,
    "longitude": -65.9928
  },
  "CYAH": {
    "airport": "La Grande-4 Airport",
    "latitude": 53.7547,
    "longitude": -73.6753
  },
  "CYAD": {
    "airport": "La Grande-3 Airport",
    "latitude": 53.5717,
    "longitude": -76.1964
  },
  "CYBC": {
    "airport": "Baie-Comeau Airport",
    "latitude": 49.1325,
    "longitude": -68.2044
  },
  "CYBG": {
    "airport": "Canadian Forces Base Bagotville",
    "latitude": 48.3306,
    "longitude": -70.9964
  },
  "CYBX": {
    "airport": "Lourdes-de-Blanc-Sablon Airport",
    "latitude": 51.4436,
    "longitude": -57.1853
  },
  "CYDO": {
    "airport": "Dolbeau-Saint-Felicien Airport",
    "latitude": 48.7785,
    "longitude": -72.375
  },
  "CYEY": {
    "airport": "Amos/Magny Airport",
    "latitude": 48.5639,
    "longitude": -78.2497
  },
  "CYFE": {
    "airport": "Forestville Airport",
    "latitude": 48.7461,
    "longitude": -69.0972
  },
  "CYGL": {
    "airport": "La Grande Riviere Airport",
    "latitude": 53.6253,
    "longitude": -77.7042
  },
  "CYGP": {
    "airport": "Michel-Pouliot Gaspe Airport",
    "latitude": 48.7753,
    "longitude": -64.4786
  },
  "CYGR": {
    "airport": "Iles-de-la-Madeleine Airport",
    "latitude": 47.4247,
    "longitude": -61.7781
  },
  "CYGV": {
    "airport": "Havre Saint-Pierre Airport",
    "latitude": 50.2819,
    "longitude": -63.6114
  },
  "CYGW": {
    "airport": "Kuujjuarapik Airport",
    "latitude": 55.2819,
    "longitude": -77.7653
  },
  "CYHR": {
    "airport": "Chevery Airport",
    "latitude": 50.4689,
    "longitude": -59.6367
  },
  "CYHU": {
    "airport": "Montreal Saint-Hubert Longueuil Aiport",
    "latitude": 45.5142,
    "longitude": -73.4098
  },
  "CYIF": {
    "airport": "Saint-Augustin Airport",
    "latitude": 51.2117,
    "longitude": -58.6583
  },
  "CYIK": {
    "airport": "Ivujivik Airport",
    "latitude": 62.4173,
    "longitude": -77.9253
  },
  "CYJN": {
    "airport": "Saint-Jean Airport",
    "latitude": 45.2944,
    "longitude": -73.2811
  },
  "CYAS": {
    "airport": "Kangirsuk Airport",
    "latitude": 60.0272,
    "longitude": -69.9992
  },
  "CYKL": {
    "airport": "Schefferville Airport",
    "latitude": 54.8053,
    "longitude": -66.8053
  },
  "CYKQ": {
    "airport": "Waskaganish Airport",
    "latitude": 51.4733,
    "longitude": -78.7583
  },
  "CYLP": {
    "airport": "Mingan Airport",
    "latitude": 50.2869,
    "longitude": -64.1528
  },
  "CYLQ": {
    "airport": "La Tuque Airport",
    "latitude": 47.4097,
    "longitude": -72.7889
  },
  "CYME": {
    "airport": "Matane Airport",
    "latitude": 48.8569,
    "longitude": -67.4533
  },
  "CYML": {
    "airport": "Charlevoix Airport",
    "latitude": 47.5975,
    "longitude": -70.2239
  },
  "CYMT": {
    "airport": "Chibougamau/Chapais Airport",
    "latitude": 49.7719,
    "longitude": -74.5281
  },
  "CYMW": {
    "airport": "Maniwaki Airport",
    "latitude": 46.2728,
    "longitude": -75.9906
  },
  "CYMX": {
    "airport": "Montréal-Mirabel International Airport",
    "latitude": 45.6702,
    "longitude": -74.0324
  },
  "CYNA": {
    "airport": "Natashquan Airport",
    "latitude": 50.19,
    "longitude": -61.7892
  },
  "CYNC": {
    "airport": "Wemindji Airport",
    "latitude": 53.0106,
    "longitude": -78.8311
  },
  "CYND": {
    "airport": "Gatineau-Ottawa Executive Airport",
    "latitude": 45.5217,
    "longitude": -75.5636
  },
  "CYNM": {
    "airport": "Matagami Airport",
    "latitude": 49.7617,
    "longitude": -77.8028
  },
  "CYHH": {
    "airport": "Nemiscau Airport",
    "latitude": 51.6911,
    "longitude": -76.1356
  },
  "CYPH": {
    "airport": "Inukjuak Airport",
    "latitude": 58.4719,
    "longitude": -78.0769
  },
  "CYLA": {
    "airport": "Aupaluk Airport",
    "latitude": 59.2967,
    "longitude": -69.5997
  },
  "CYPN": {
    "airport": "Port-Menier Airport",
    "latitude": 49.8364,
    "longitude": -64.2886
  },
  "CYPX": {
    "airport": "Puvirnituq Airport",
    "latitude": 60.0506,
    "longitude": -77.2869
  },
  "CYQB": {
    "airport": "Quebec City Jean Lesage International Airport",
    "latitude": 46.7911,
    "longitude": -71.3933
  },
  "CYHA": {
    "airport": "Quaqtaq Airport",
    "latitude": 61.0464,
    "longitude": -69.6178
  },
  "CYRI": {
    "airport": "Riviere-du-Loup Airport",
    "latitude": 47.7644,
    "longitude": -69.5847
  },
  "CYRJ": {
    "airport": "Roberval Airport",
    "latitude": 48.52,
    "longitude": -72.2656
  },
  "CYRQ": {
    "airport": "Trois-Rivieres Airport",
    "latitude": 46.3528,
    "longitude": -72.6794
  },
  "CYSC": {
    "airport": "Sherbrooke Airport",
    "latitude": 45.4386,
    "longitude": -71.6914
  },
  "CYTF": {
    "airport": "Alma Airport",
    "latitude": 48.5089,
    "longitude": -71.6419
  },
  "CYFJ": {
    "airport": "Mont Tremblant International Airport",
    "latitude": 46.4094,
    "longitude": -74.78
  },
  "CYTQ": {
    "airport": "Tasiujaq Airport",
    "latitude": 58.6678,
    "longitude": -69.9558
  },
  "CYMU": {
    "airport": "Umiujaq Airport",
    "latitude": 56.5361,
    "longitude": -76.5183
  },
  "CYUL": {
    "airport": "Montréal-Pierre Elliott Trudeau International Airport",
    "latitude": 45.4657,
    "longitude": -73.7455
  },
  "CYUY": {
    "airport": "Rouyn-Noranda Airport",
    "latitude": 48.2061,
    "longitude": -78.8356
  },
  "CYVB": {
    "airport": "Bonaventure Airport",
    "latitude": 48.0711,
    "longitude": -65.4603
  },
  "CYVO": {
    "airport": "Val-d'Or Airport",
    "latitude": 48.0533,
    "longitude": -77.7828
  },
  "CYVP": {
    "airport": "Kuujjuaq Airport",
    "latitude": 58.0961,
    "longitude": -68.4269
  },
  "CYKG": {
    "airport": "Kangiqsujuaq (Wakeham Bay) Airport",
    "latitude": 61.5886,
    "longitude": -71.9294
  },
  "CYXK": {
    "airport": "Rimouski Airport",
    "latitude": 48.4781,
    "longitude": -68.4969
  },
  "CYYY": {
    "airport": "Mont-Joli Airport",
    "latitude": 48.6086,
    "longitude": -68.2081
  },
  "CYZG": {
    "airport": "Salluit Airport",
    "latitude": 62.1794,
    "longitude": -75.6672
  },
  "CYZV": {
    "airport": "Sept-Iles Airport",
    "latitude": 50.2233,
    "longitude": -66.2656
  },
  "CZBM": {
    "airport": "Roland-Desourdy Airport",
    "latitude": 45.2908,
    "longitude": -72.7414
  },
  "CZEM": {
    "airport": "Eastmain River Airport",
    "latitude": 52.2264,
    "longitude": -78.5225
  },
  "CYBE": {
    "airport": "Uranium City Airport",
    "latitude": 59.5614,
    "longitude": -108.481
  },
  "CYEN": {
    "airport": "Estevan Regional Aerodrome",
    "latitude": 49.2103,
    "longitude": -102.966
  },
  "CYHB": {
    "airport": "Hudson Bay Airport",
    "latitude": 52.8167,
    "longitude": -102.311
  },
  "CYKC": {
    "airport": "Collins Bay Airport",
    "latitude": 58.2361,
    "longitude": -103.678
  },
  "CYKJ": {
    "airport": "Key Lake Airport",
    "latitude": 57.2561,
    "longitude": -105.618
  },
  "CYKY": {
    "airport": "Kindersley Regional Airport",
    "latitude": 51.5175,
    "longitude": -109.181
  },
  "CYLJ": {
    "airport": "Meadow Lake Airport",
    "latitude": 54.1253,
    "longitude": -108.523
  },
  "CYMJ": {
    "airport": "CFB Moose Jaw (C.M. McEwen Airport)",
    "latitude": 50.3303,
    "longitude": -105.559
  },
  "CYNL": {
    "airport": "Points North Landing Airport",
    "latitude": 58.2767,
    "longitude": -104.082
  },
  "CYPA": {
    "airport": "Prince Albert (Glass Field) Airport",
    "latitude": 53.2142,
    "longitude": -105.673
  },
  "CYQR": {
    "airport": "Regina International Airport",
    "latitude": 50.4319,
    "longitude": -104.666
  },
  "CYQV": {
    "airport": "Yorkton Municipal Airport",
    "latitude": 51.2647,
    "longitude": -102.462
  },
  "CYQW": {
    "airport": "North Battleford Airport (Cameron McIntosh Airport)",
    "latitude": 52.7692,
    "longitude": -108.244
  },
  "CYSF": {
    "airport": "Stony Rapids Airport",
    "latitude": 59.2503,
    "longitude": -105.841
  },
  "CYVC": {
    "airport": "La Ronge (Barber Field) Airport",
    "latitude": 55.1514,
    "longitude": -105.262
  },
  "CYVT": {
    "airport": "Buffalo Narrows Airport",
    "latitude": 55.8419,
    "longitude": -108.418
  },
  "CYXE": {
    "airport": "Saskatoon John G. Diefenbaker International Airport",
    "latitude": 52.1708,
    "longitude": -106.7
  },
  "CYYN": {
    "airport": "Swift Current Airport",
    "latitude": 50.2919,
    "longitude": -107.691
  },
  "CZFD": {
    "airport": "Fond-du-Lac Airport",
    "latitude": 59.3344,
    "longitude": -107.182
  },
  "CZPO": {
    "airport": "Pinehouse Lake Airport",
    "latitude": 55.5281,
    "longitude": -106.582
  },
  "CZWL": {
    "airport": "Wollaston Lake Airport",
    "latitude": 58.1069,
    "longitude": -103.172
  },
  "CYDM": {
    "airport": "Ross River Airport",
    "latitude": 61.9706,
    "longitude": -132.423
  },
  "CYDA": {
    "airport": "Dawson City Airport",
    "latitude": 64.0431,
    "longitude": -139.128
  },
  "CYDB": {
    "airport": "Burwash Airport",
    "latitude": 61.3711,
    "longitude": -139.041
  },
  "CYHT": {
    "airport": "Haines Junction Airport",
    "latitude": 60.7892,
    "longitude": -137.546
  },
  "CYMA": {
    "airport": "Mayo Airport",
    "latitude": 63.6164,
    "longitude": -135.868
  },
  "CYOC": {
    "airport": "Old Crow Airport",
    "latitude": 67.5706,
    "longitude": -139.839
  },
  "CYQH": {
    "airport": "Watson Lake Airport",
    "latitude": 60.1164,
    "longitude": -128.822
  },
  "CYXQ": {
    "airport": "Beaver Creek Airport",
    "latitude": 62.4103,
    "longitude": -140.867
  },
  "CYXY": {
    "airport": "Erik Nielsen Whitehorse International Airport",
    "latitude": 60.7096,
    "longitude": -135.067
  },
  "CYZW": {
    "airport": "Teslin Airport",
    "latitude": 60.1728,
    "longitude": -132.743
  },
  "CZFA": {
    "airport": "Faro Airport (Yukon)",
    "latitude": 62.2075,
    "longitude": -133.376
  },
  "YPCC": {
    "airport": "Cocos (Keeling) Islands Airport",
    "latitude": -12.1886,
    "longitude": 96.8306
  },
  "FZKJ": {
    "airport": "Buta Zega Airport",
    "latitude": 2.81835,
    "longitude": 24.7937
  },
  "FZFD": {
    "airport": "Gbadolite Airport",
    "latitude": 4.25321,
    "longitude": 20.9753
  },
  "FZEN": {
    "airport": "Basankusu Airport",
    "latitude": 1.22472,
    "longitude": 19.7889
  },
  "FZEA": {
    "airport": "Mbandaka Airport",
    "latitude": 0.0226,
    "longitude": 18.2887
  },
  "FZQA": {
    "airport": "Lubumbashi International Airport",
    "latitude": -11.5913,
    "longitude": 27.5309
  },
  "FZSK": {
    "airport": "Kapanga Airport",
    "latitude": -8.35,
    "longitude": 22.583
  },
  "FZQG": {
    "airport": "Kasenga Airport",
    "latitude": -10.35,
    "longitude": 28.633
  },
  "FZTK": {
    "airport": "Kaniama Airport",
    "latitude": -7.583,
    "longitude": 24.15
  },
  "FZQC": {
    "airport": "Pweto Airport",
    "latitude": -8.467,
    "longitude": 28.883
  },
  "FZKA": {
    "airport": "Bunia Airport",
    "latitude": 1.56572,
    "longitude": 30.2208
  },
  "FZWC": {
    "airport": "Gandajika Airport",
    "latitude": -6.733,
    "longitude": 23.95
  },
  "FZWT": {
    "airport": "Tunta Airport",
    "latitude": -6.133,
    "longitude": 24.483
  },
  "FZVI": {
    "airport": "Lusambo Airport",
    "latitude": -4.96167,
    "longitude": 23.3783
  },
  "FZVA": {
    "airport": "Lodja Airport",
    "latitude": -3.417,
    "longitude": 23.45
  },
  "FZWA": {
    "airport": "Mbuji Mayi Airport",
    "latitude": -6.12124,
    "longitude": 23.569
  },
  "FZVR": {
    "airport": "Basongo Airport",
    "latitude": -4.3158,
    "longitude": 20.4149
  },
  "FZUA": {
    "airport": "Kananga Airport",
    "latitude": -5.90005,
    "longitude": 22.4692
  },
  "FZUG": {
    "airport": "Luiza Airport",
    "latitude": -7.183,
    "longitude": 22.4
  },
  "FZVM": {
    "airport": "Mweka Airport",
    "latitude": -4.85,
    "longitude": 21.55
  },
  "FZVS": {
    "airport": "Ilebo Airport",
    "latitude": -4.32992,
    "longitude": 20.5901
  },
  "FZUK": {
    "airport": "Tshikapa Airport",
    "latitude": -6.43833,
    "longitude": 20.7947
  },
  "FZAA": {
    "airport": "N'djili Airport",
    "latitude": -4.38575,
    "longitude": 15.4446
  },
  "FZAB": {
    "airport": "N'Dolo Airport",
    "latitude": -4.32666,
    "longitude": 15.3275
  },
  "FZAJ": {
    "airport": "Boma Airport",
    "latitude": -5.854,
    "longitude": 13.064
  },
  "FZAL": {
    "airport": "Luozi Airport",
    "latitude": -4.95,
    "longitude": 14.133
  },
  "FZAM": {
    "airport": "Matadi Tshimpi Airport",
    "latitude": -5.79961,
    "longitude": 13.4404
  },
  "FZAG": {
    "airport": "Muanda Airport (Moanda Airport)",
    "latitude": -5.93086,
    "longitude": 12.3518
  },
  "FZAR": {
    "airport": "Nkolo-Fuma Airport",
    "latitude": -5.421,
    "longitude": 14.8169
  },
  "FZQM": {
    "airport": "Kolwezi Airport",
    "latitude": -10.7659,
    "longitude": 25.5057
  },
  "FZBO": {
    "airport": "Bandundu Airport",
    "latitude": -3.31132,
    "longitude": 17.3817
  },
  "FZCB": {
    "airport": "Idiofa Airport",
    "latitude": -5,
    "longitude": 19.6
  },
  "FZBA": {
    "airport": "Inongo Airport",
    "latitude": -1.94722,
    "longitude": 18.2858
  },
  "FZOK": {
    "airport": "Kasongo Lunda Airport",
    "latitude": -4.533,
    "longitude": 26.617
  },
  "FZCA": {
    "airport": "Kikwit Airport",
    "latitude": -5.03577,
    "longitude": 18.7856
  },
  "FZBT": {
    "airport": "Basango Mboliasa Airport",
    "latitude": -1.435,
    "longitude": 19.024
  },
  "FZCE": {
    "airport": "Lusanga Airport",
    "latitude": -4.8,
    "longitude": 18.717
  },
  "FZCV": {
    "airport": "Masi-Manimba Airport",
    "latitude": -4.783,
    "longitude": 17.85
  },
  "FZBI": {
    "airport": "Nioki Airport",
    "latitude": -2.7175,
    "longitude": 17.6847
  },
  "FZOC": {
    "airport": "Kamisuku Airport",
    "latitude": -2.578,
    "longitude": 26.734
  },
  "FZOA": {
    "airport": "Kindu Airport",
    "latitude": -2.91918,
    "longitude": 25.9154
  },
  "FZOP": {
    "airport": "Punia Airport",
    "latitude": -1.367,
    "longitude": 26.333
  },
  "FZFU": {
    "airport": "Bumba Airport",
    "latitude": 2.18278,
    "longitude": 22.4817
  },
  "FZGA": {
    "airport": "Lisala Airport",
    "latitude": 2.17066,
    "longitude": 21.4969
  },
  "FZNP": {
    "airport": "Beni Airport",
    "latitude": 0.575,
    "longitude": 29.4739
  },
  "FZNA": {
    "airport": "Goma International Airport",
    "latitude": -1.67081,
    "longitude": 29.2385
  },
  "FZJH": {
    "airport": "Matari Airport",
    "latitude": 2.82761,
    "longitude": 27.5883
  },
  "FZFP": {
    "airport": "Kotakoli Air Base",
    "latitude": 4.15764,
    "longitude": 21.6509
  },
  "FZGV": {
    "airport": "Ikela Airport",
    "latitude": -1.04811,
    "longitude": 23.3725
  },
  "FZMA": {
    "airport": "Kavumu Airport",
    "latitude": -2.30898,
    "longitude": 28.8088
  },
  "FZFK": {
    "airport": "Gemena Airport",
    "latitude": 3.23537,
    "longitude": 19.7713
  },
  "FZFA": {
    "airport": "Libenge Airport",
    "latitude": 3.633,
    "longitude": 18.633
  },
  "FZRB": {
    "airport": "Moba Airport",
    "latitude": -7.067,
    "longitude": 29.783
  },
  "FZRF": {
    "airport": "Kalemie Airport",
    "latitude": -5.87556,
    "longitude": 29.25
  },
  "FZRM": {
    "airport": "Kabalo Airport",
    "latitude": -6.083,
    "longitude": 26.917
  },
  "FZRQ": {
    "airport": "Kongolo Airport",
    "latitude": -5.39444,
    "longitude": 26.99
  },
  "FZRA": {
    "airport": "Manono Airport",
    "latitude": -7.28889,
    "longitude": 27.3944
  },
  "FZIC": {
    "airport": "Bangoka International Airport",
    "latitude": 0.481639,
    "longitude": 25.338
  },
  "FZIR": {
    "airport": "Yangambi Airport",
    "latitude": 0.783,
    "longitude": 24.467
  },
  "FZGN": {
    "airport": "Boende Airport",
    "latitude": -0.217,
    "longitude": 20.85
  },
  "FEFN": {
    "airport": "N'Dele Airport",
    "latitude": 8.42721,
    "longitude": 20.6352
  },
  "FEFF": {
    "airport": "Bangui M'Poko International Airport",
    "latitude": 4.39848,
    "longitude": 18.5188
  },
  "FEFZ": {
    "airport": "Zemio Airport",
    "latitude": 5.05,
    "longitude": 25.15
  },
  "FEGE": {
    "airport": "M'Boki Airport",
    "latitude": 5.33301,
    "longitude": 25.9319
  },
  "FEFY": {
    "airport": "Yalinga Airport",
    "latitude": 6.52,
    "longitude": 23.26
  },
  "FEFR": {
    "airport": "Bria Airport",
    "latitude": 6.52778,
    "longitude": 21.9894
  },
  "FEFW": {
    "airport": "Ouadda Airport",
    "latitude": 8.01056,
    "longitude": 22.3986
  },
  "FEFT": {
    "airport": "Berberati Airport",
    "latitude": 4.22158,
    "longitude": 15.7864
  },
  "FEFC": {
    "airport": "Carnot Airport",
    "latitude": 4.937,
    "longitude": 15.894
  },
  "FEFG": {
    "airport": "Bangassou Airport",
    "latitude": 4.785,
    "longitude": 22.781
  },
  "FEGM": {
    "airport": "Bakouma Airport",
    "latitude": 5.694,
    "longitude": 22.801
  },
  "FEGR": {
    "airport": "Rafai Airport",
    "latitude": 4.98861,
    "longitude": 23.9278
  },
  "FEFO": {
    "airport": "Bouar Airport",
    "latitude": 5.958,
    "longitude": 15.637
  },
  "FEFM": {
    "airport": "Bambari Airport",
    "latitude": 5.84694,
    "longitude": 20.6475
  },
  "FEGU": {
    "airport": "Bouca Airport",
    "latitude": 6.517,
    "longitude": 18.267
  },
  "FEFS": {
    "airport": "Bossangoa Airport",
    "latitude": 6.492,
    "longitude": 17.429
  },
  "FEGF": {
    "airport": "Batangafo Airport",
    "latitude": 7.31411,
    "longitude": 18.3088
  },
  "FEGZ": {
    "airport": "Bozoum Airport",
    "latitude": 6.34417,
    "longitude": 16.3219
  },
  "FEFI": {
    "airport": "Birao Airport",
    "latitude": 10.2364,
    "longitude": 22.7169
  },
  "FEGO": {
    "airport": "Ouanda Djalle Airport",
    "latitude": 8.9,
    "longitude": 22.783
  },
  "FCBM": {
    "airport": "Mouyondzi Airport",
    "latitude": -4.01487,
    "longitude": 13.9661
  },
  "FCBY": {
    "airport": "Yokangassi Airport",
    "latitude": -4.22308,
    "longitude": 13.2863
  },
  "FCBZ": {
    "airport": "Zanaga Airport",
    "latitude": -2.85,
    "longitude": 13.817
  },
  "FCBB": {
    "airport": "Maya-Maya Airport",
    "latitude": -4.2517,
    "longitude": 15.253
  },
  "FCOB": {
    "airport": "Boundji Airport",
    "latitude": -1.033,
    "longitude": 15.383
  },
  "FCOO": {
    "airport": "Owando Airport",
    "latitude": -0.53135,
    "longitude": 15.9501
  },
  "FCOM": {
    "airport": "Makoua Airport",
    "latitude": -0.017,
    "longitude": 15.583
  },
  "FCOE": {
    "airport": "Ewo Airport",
    "latitude": -0.883,
    "longitude": 14.8
  },
  "FCOK": {
    "airport": "Kelle Airport",
    "latitude": -0.083,
    "longitude": 14.533
  },
  "FCBS": {
    "airport": "Sibiti Airport",
    "latitude": -3.683,
    "longitude": 13.35
  },
  "FCOT": {
    "airport": "Betou Airport",
    "latitude": 3.05,
    "longitude": 18.5
  },
  "FCOI": {
    "airport": "Impfondo Airport",
    "latitude": 1.617,
    "longitude": 18.067
  },
  "FCPL": {
    "airport": "Dolisie Airport",
    "latitude": -4.20635,
    "longitude": 12.6599
  },
  "FCPA": {
    "airport": "Makabana Airport",
    "latitude": -3.483,
    "longitude": 12.617
  },
  "FCMM": {
    "airport": "Mossendjo Airport",
    "latitude": -2.95,
    "longitude": 12.7
  },
  "FCBD": {
    "airport": "Djambala Airport",
    "latitude": -2.533,
    "longitude": 14.75
  },
  "FCOG": {
    "airport": "Gamboma Airport",
    "latitude": -1.8294,
    "longitude": 15.8852
  },
  "FCBL": {
    "airport": "Lague Airport",
    "latitude": -2.45,
    "longitude": 14.533
  },
  "FCPP": {
    "airport": "Pointe Noire Airport",
    "latitude": -4.81603,
    "longitude": 11.8866
  },
  "FCBK": {
    "airport": "Kindamba Airport",
    "latitude": -3.95,
    "longitude": 14.517
  },
  "FCOU": {
    "airport": "Ouesso Airport",
    "latitude": 1.61599,
    "longitude": 16.0379
  },
  "FCOS": {
    "airport": "Souanke Airport",
    "latitude": 2.067,
    "longitude": 14.133
  },
  "LFSB": {
    "airport": "Europort Mulhouse (Basel) Airport",
    "latitude": 47.5986,
    "longitude": 7.5291
  },
  "LSZB": {
    "airport": "Bern Airport",
    "latitude": 46.9141,
    "longitude": 7.49715
  },
  "LSPL": {
    "airport": "Langenthal Airport",
    "latitude": 47.1828,
    "longitude": 7.7408
  },
  "LSGE": {
    "airport": "Ecuvillens Airfield",
    "latitude": 46.7548,
    "longitude": 7.0762
  },
  "LSGG": {
    "airport": "Geneva Airport",
    "latitude": 46.2381,
    "longitude": 6.10895
  },
  "LSGL": {
    "airport": "Lausanne-Blécherette Airport",
    "latitude": 46.5452,
    "longitude": 6.6166
  },
  "LSGT": {
    "airport": "Gruyère Airport",
    "latitude": 46.5942,
    "longitude": 7.0944
  },
  "LSZS": {
    "airport": "Samedan Airport (Engadin Airport)",
    "latitude": 46.5341,
    "longitude": 9.88411
  },
  "LSZM": {
    "airport": "Mollis Airport",
    "latitude": 47.07835,
    "longitude": 9.06466
  },
  "LSMA": {
    "airport": "Alpnach",
    "latitude": 46.9386,
    "longitude": 8.2841
  },
  "LSPG": {
    "airport": "Kagiswil Airport",
    "latitude": 46.9082,
    "longitude": 8.2541
  },
  "LSME": {
    "airport": "Emmen Air Base",
    "latitude": 47.0924,
    "longitude": 8.30518
  },
  "LSZC": {
    "airport": "Buochs Airport",
    "latitude": 46.9744,
    "longitude": 8.39694
  },
  "LSTO": {
    "airport": "Môtiers Airport",
    "latitude": 46.9166,
    "longitude": 6.615
  },
  "LSGC": {
    "airport": "Les Eplatures Airport",
    "latitude": 47.083889,
    "longitude": 6.792778
  },
  "LSZR": {
    "airport": "St. Gallen-Altenrhein Airport",
    "latitude": 47.485,
    "longitude": 9.56077
  },
  "LSZX": {
    "airport": "Schanis Airport",
    "latitude": 47.1717,
    "longitude": 9.03944
  },
  "LSZA": {
    "airport": "Lugano Airport",
    "latitude": 46.0043,
    "longitude": 8.91058
  },
  "LSGS": {
    "airport": "Sion Airport",
    "latitude": 46.2196,
    "longitude": 7.32676
  },
  "LSTA": {
    "airport": "Raron Airport",
    "latitude": 46.30458333,
    "longitude": 7.818055556
  },
  "LSMP": {
    "airport": "Payerne Air Base",
    "latitude": 46.843333,
    "longitude": 6.915
  },
  "LSZH": {
    "airport": "Zurich Airport",
    "latitude": 47.4647,
    "longitude": 8.54917
  },
  "LSZG": {
    "airport": "Grenchen Airport",
    "latitude": 47.181389,
    "longitude": 7.416944
  },
  "DIAP": {
    "airport": "Port Bouet Airport (Felix Houphouet Boigny Int'l)",
    "latitude": 5.26139,
    "longitude": -3.92629
  },
  "DIOF": {
    "airport": "Ouango Fitini Airport",
    "latitude": 9.6,
    "longitude": -4.05
  },
  "DIGN": {
    "airport": "Nero-Mer Airport",
    "latitude": 4.64341,
    "longitude": -6.92396
  },
  "DISP": {
    "airport": "San Pedro Airport",
    "latitude": 4.74672,
    "longitude": -6.66082
  },
  "DITB": {
    "airport": "Tabou Airport",
    "latitude": 4.43781,
    "longitude": -7.36273
  },
  "DISS": {
    "airport": "Sassandra Airport",
    "latitude": 4.92833,
    "longitude": -6.13278
  },
  "DIAO": {
    "airport": "Aboisso Airport",
    "latitude": 5.46194,
    "longitude": -3.23472
  },
  "DIAU": {
    "airport": "Abengourou Airport",
    "latitude": 6.71556,
    "longitude": -3.47028
  },
  "DIOD": {
    "airport": "Odienne Airport",
    "latitude": 9.5,
    "longitude": -7.567
  },
  "DIDV": {
    "airport": "Divo Airport",
    "latitude": 6.90461,
    "longitude": -5.36236
  },
  "DIGA": {
    "airport": "Gagnoa Airport",
    "latitude": 6.133,
    "longitude": -5.95
  },
  "DIDK": {
    "airport": "Dimbokro Airport",
    "latitude": 6.65167,
    "longitude": -4.64056
  },
  "DIGL": {
    "airport": "Guiglo Airport",
    "latitude": 6.53471,
    "longitude": -7.52685
  },
  "DIMN": {
    "airport": "Man Airport",
    "latitude": 7.27207,
    "longitude": -7.58736
  },
  "DIDL": {
    "airport": "Daloa Airport",
    "latitude": 6.79281,
    "longitude": -6.47319
  },
  "DIBI": {
    "airport": "Boundiali Airport",
    "latitude": 9.533,
    "longitude": -6.467
  },
  "DIFK": {
    "airport": "Ferkessedougou Airport",
    "latitude": 9.6,
    "longitude": -5.18333
  },
  "DIKO": {
    "airport": "Korhogo Airport",
    "latitude": 9.38718,
    "longitude": -5.55666
  },
  "DIBK": {
    "airport": "Bouake Airport",
    "latitude": 7.7388,
    "longitude": -5.07367
  },
  "DISG": {
    "airport": "Seguela Airport",
    "latitude": 7.96833,
    "longitude": -6.71083
  },
  "DITM": {
    "airport": "Mahana Airport",
    "latitude": 8.2934,
    "longitude": -7.674
  },
  "DIYO": {
    "airport": "Yamoussoukro International Airport",
    "latitude": 6.90317,
    "longitude": -5.36558
  },
  "DIBU": {
    "airport": "Soko Airport",
    "latitude": 8.01722,
    "longitude": -2.76194
  },
  "DIBN": {
    "airport": "Tehini Airport",
    "latitude": 9.2775,
    "longitude": -3.02528
  },
  "NCAI": {
    "airport": "Aitutaki Airport",
    "latitude": -18.8309,
    "longitude": -159.764
  },
  "NCAT": {
    "airport": "Enua Airport",
    "latitude": -19.9678,
    "longitude": -158.119
  },
  "NCMG": {
    "airport": "Mangaia Airport",
    "latitude": -21.896,
    "longitude": -157.907
  },
  "NCMH": {
    "airport": "Manihiki Island Airport",
    "latitude": -10.3767,
    "longitude": -161.002
  },
  "NCMR": {
    "airport": "Mitiaro Airport (Nukuroa Airport)",
    "latitude": -19.8425,
    "longitude": -157.703
  },
  "NCMK": {
    "airport": "Mauke Airport",
    "latitude": -20.1361,
    "longitude": -157.345
  },
  "NCPY": {
    "airport": "Tongareva Airport",
    "latitude": -9.01437,
    "longitude": -158.032
  },
  "NCPK": {
    "airport": "Pukapuka Island Airfield",
    "latitude": -10.9145,
    "longitude": -165.839
  },
  "NCRG": {
    "airport": "Rarotonga International Airport",
    "latitude": -21.2027,
    "longitude": -159.806
  },
  "SCBA": {
    "airport": "Balmaceda Airport",
    "latitude": -45.9161,
    "longitude": -71.6895
  },
  "SCCC": {
    "airport": "Chile Chico Airfield",
    "latitude": -46.5833,
    "longitude": -71.6874
  },
  "SCCY": {
    "airport": "Teniente Vidal Airfield",
    "latitude": -45.5942,
    "longitude": -72.1061
  },
  "SCHR": {
    "airport": "Cochrane Airfield",
    "latitude": -47.2438,
    "longitude": -72.5884
  },
  "SCAS": {
    "airport": "Cabo Juan Roman Airfield",
    "latitude": -45.3992,
    "longitude": -72.6703
  },
  "SCFA": {
    "airport": "Cerro Moreno International Airport",
    "latitude": -23.4445,
    "longitude": -70.4451
  },
  "SCCF": {
    "airport": "El Loa Airport",
    "latitude": -22.4982,
    "longitude": -68.9036
  },
  "SCBE": {
    "airport": "Barriles Airport",
    "latitude": -22.1411,
    "longitude": -70.0629
  },
  "SCTT": {
    "airport": "Las Breas Airport",
    "latitude": -25.5643,
    "longitude": -70.3759
  },
  "SCAR": {
    "airport": "Chacalluta International Airport",
    "latitude": -18.3485,
    "longitude": -70.3387
  },
  "SCRA": {
    "airport": "Chanaral Airport",
    "latitude": -26.3325,
    "longitude": -70.6073
  },
  "SCAT": {
    "airport": "Desierto de Atacama Airport",
    "latitude": -27.2612,
    "longitude": -70.7792
  },
  "SCES": {
    "airport": "Ricardo Garcia Posada Airport",
    "latitude": -26.3111,
    "longitude": -69.7652
  },
  "SCLL": {
    "airport": "Vallenar Airport",
    "latitude": -28.5964,
    "longitude": -70.756
  },
  "SCIE": {
    "airport": "Carriel Sur International Airport",
    "latitude": -36.7727,
    "longitude": -73.0631
  },
  "SCGE": {
    "airport": "Maria Dolores Airport",
    "latitude": -37.4017,
    "longitude": -72.4254
  },
  "SCCH": {
    "airport": "General Bernardo O'Higgins Airport",
    "latitude": -36.5825,
    "longitude": -72.0314
  },
  "SCQB": {
    "airport": "Coquimbo Airport",
    "latitude": -30.1989,
    "longitude": -71.2469
  },
  "SCSE": {
    "airport": "La Florida Airport",
    "latitude": -29.9162,
    "longitude": -71.1995
  },
  "SCOV": {
    "airport": "El Tuqui Airport",
    "latitude": -30.5592,
    "longitude": -71.1756
  },
  "SCTC": {
    "airport": "Maquehue Airport",
    "latitude": -38.7668,
    "longitude": -72.6371
  },
  "SCQP": {
    "airport": "La Araucania Airport",
    "latitude": -38.9259,
    "longitude": -72.6515
  },
  "SCTO": {
    "airport": "Victoria Airport",
    "latitude": -38.2456,
    "longitude": -72.3486
  },
  "SCPC": {
    "airport": "Pucon Airport",
    "latitude": -39.2928,
    "longitude": -71.9159
  },
  "SCFT": {
    "airport": "Futaleufu Airfield",
    "latitude": -43.1892,
    "longitude": -71.8511
  },
  "SCFR": {
    "airport": "Frutillar Airport",
    "latitude": -41.117,
    "longitude": -73.05
  },
  "SCPQ": {
    "airport": "Mocopulli Airport",
    "latitude": -42.3404,
    "longitude": -73.7157
  },
  "SCTE": {
    "airport": "El Tepual Airport",
    "latitude": -41.4389,
    "longitude": -73.094
  },
  "SCPV": {
    "airport": "El Mirador Airport",
    "latitude": -41.3494,
    "longitude": -72.9467
  },
  "SCAP": {
    "airport": "Alto Palena Airfield",
    "latitude": -43.6119,
    "longitude": -71.8061
  },
  "SCST": {
    "airport": "Gamboa Airport",
    "latitude": -42.4903,
    "longitude": -73.7728
  },
  "SCTN": {
    "airport": "Chaiten Airfield",
    "latitude": -42.9328,
    "longitude": -72.6991
  },
  "SCJO": {
    "airport": "Canal Bajo Carlos Hott Siebert Airport",
    "latitude": -40.6112,
    "longitude": -73.061
  },
  "SCAC": {
    "airport": "Pupelde Airfield",
    "latitude": -41.9043,
    "longitude": -73.7966
  },
  "SCVD": {
    "airport": "Pichoy Airport",
    "latitude": -39.65,
    "longitude": -73.0861
  },
  "SCNT": {
    "airport": "Teniente Julio Gallardo Airport",
    "latitude": -51.6715,
    "longitude": -72.5284
  },
  "SCCI": {
    "airport": "Presidente Carlos Ibanez del Campo International Airport",
    "latitude": -53.0026,
    "longitude": -70.8546
  },
  "SCSB": {
    "airport": "Franco Bianco Airport",
    "latitude": -52.7367,
    "longitude": -69.3336
  },
  "SCFM": {
    "airport": "Capitan Fuentes Martinez Airport",
    "latitude": -53.2537,
    "longitude": -70.3192
  },
  "SCGZ": {
    "airport": "Guardiamarina Zanartu Airport",
    "latitude": -54.9311,
    "longitude": -67.6263
  },
  "SCTL": {
    "airport": "Panguilemo Airport",
    "latitude": -35.3778,
    "longitude": -71.6017
  },
  "SCEL": {
    "airport": "Arturo Merino Benítez International Airport",
    "latitude": -33.3928,
    "longitude": -70.7856
  },
  "SCKP": {
    "airport": "Coposa Airport",
    "latitude": -20.75,
    "longitude": -68.6833
  },
  "SCDA": {
    "airport": "Diego Aracena International Airport",
    "latitude": -20.5352,
    "longitude": -70.1813
  },
  "SCIP": {
    "airport": "Mataveri International Airport (Isla de Pascua Airport)",
    "latitude": -27.1648,
    "longitude": -109.422
  },
  "SCVM": {
    "airport": "Vina del Mar Airport",
    "latitude": -32.9496,
    "longitude": -71.4786
  },
  "SCAN": {
    "airport": "San Rafael Airport",
    "latitude": -32.8142,
    "longitude": -70.6467
  },
  "SCRD": {
    "airport": "Rodelillo Airfield",
    "latitude": -33.0681,
    "longitude": -71.5575
  },
  "FKKN": {
    "airport": "Ngaoundere Airport",
    "latitude": 7.35701,
    "longitude": 13.5592
  },
  "FKYS": {
    "airport": "Yaounde Nsimalen International Airport",
    "latitude": 3.72256,
    "longitude": 11.5533
  },
  "FKKY": {
    "airport": "Yaounde Airport",
    "latitude": 3.83604,
    "longitude": 11.5235
  },
  "FKKO": {
    "airport": "Bertoua Airport",
    "latitude": 4.54861,
    "longitude": 13.7261
  },
  "FKKI": {
    "airport": "Batouri Airport",
    "latitude": 4.475,
    "longitude": 14.3625
  },
  "FKKJ": {
    "airport": "Yagoua Airport",
    "latitude": 10.3561,
    "longitude": 15.2372
  },
  "FKKH": {
    "airport": "Kaele Airport",
    "latitude": 10.0925,
    "longitude": 14.4456
  },
  "FKKL": {
    "airport": "Salak Airport",
    "latitude": 10.4514,
    "longitude": 14.2574
  },
  "FKKD": {
    "airport": "Douala International Airport",
    "latitude": 4.00608,
    "longitude": 9.71948
  },
  "FKAN": {
    "airport": "Nkongsamba Airport",
    "latitude": 4.95,
    "longitude": 9.933
  },
  "FKKR": {
    "airport": "Garoua International Airport",
    "latitude": 9.33589,
    "longitude": 13.3701
  },
  "FKKG": {
    "airport": "Bali Airport",
    "latitude": 5.89528,
    "longitude": 10.0339
  },
  "FKKV": {
    "airport": "Bamenda Airport",
    "latitude": 6.03924,
    "longitude": 10.1226
  },
  "FKKU": {
    "airport": "Bafoussam Airport",
    "latitude": 5.53692,
    "longitude": 10.3546
  },
  "FKKS": {
    "airport": "Dschang Airport",
    "latitude": 5.45,
    "longitude": 10.067
  },
  "FKKM": {
    "airport": "Foumban Nkounja Airport",
    "latitude": 5.63692,
    "longitude": 10.7508
  },
  "FKKW": {
    "airport": "Ebolowa Airport",
    "latitude": 2.876,
    "longitude": 11.185
  },
  "FKKB": {
    "airport": "Kribi Airport",
    "latitude": 2.87389,
    "longitude": 9.97778
  },
  "FKKF": {
    "airport": "Mamfe Airport",
    "latitude": 5.70417,
    "longitude": 9.30639
  },
  "FKKC": {
    "airport": "Tiko Airport",
    "latitude": 4.08919,
    "longitude": 9.36053
  },
  "ZSAQ": {
    "airport": "Anqing Tianzhushan Airport",
    "latitude": 30.5822,
    "longitude": 117.05
  },
  "ZSBB": {
    "airport": "Bengbu Airport",
    "latitude": 32.8477,
    "longitude": 117.32
  },
  "ZSFY": {
    "airport": "Fuyang Xiguan Airport",
    "latitude": 32.8822,
    "longitude": 115.734
  },
  "ZSOF": {
    "airport": "Hefei Xinqiao International Airport",
    "latitude": 31.78,
    "longitude": 117.298
  },
  "ZSTX": {
    "airport": "Huangshan Tunxi International Airport",
    "latitude": 29.7333,
    "longitude": 118.256
  },
  "ZSWA": {
    "airport": "Wuhu Airport",
    "latitude": 31.3906,
    "longitude": 118.409
  },
  "ZBAA": {
    "airport": "Beijing Capital International Airport",
    "latitude": 40.0725,
    "longitude": 116.598
  },
  "ZBAD": {
    "airport": "Daxing International Airport",
    "latitude": 39.5101,
    "longitude": 116.4101
  },
  "ZUWL": {
    "airport": "Chongqing Xiannyushan Airport",
    "latitude": 29.4658,
    "longitude": 107.692
  },
  "ZUWS": {
    "airport": "Chongqing Wushan Airport",
    "latitude": 31.064,
    "longitude": 109.706
  },
  "ZUCK": {
    "airport": "Chongqing Jiangbei International Airport",
    "latitude": 29.7192,
    "longitude": 106.642
  },
  "ZUDZ": {
    "airport": "Dazu Air Base",
    "latitude": 29.6362,
    "longitude": 105.774
  },
  "ZUQJ": {
    "airport": "Qianjiang Wulingshan Airport",
    "latitude": 29.5133,
    "longitude": 108.831
  },
  "ZULP": {
    "airport": "Liangping Airport",
    "latitude": 30.6794,
    "longitude": 107.786
  },
  "ZUWX": {
    "airport": "Wanzhou Wuqiao Airport",
    "latitude": 30.8017,
    "longitude": 108.433
  },
  "ZSFZ": {
    "airport": "Fuzhou Changle International Airport",
    "latitude": 25.9351,
    "longitude": 119.663
  },
  "ZSQZ": {
    "airport": "Quanzhou Jinjiang International Airport",
    "latitude": 24.7964,
    "longitude": 118.59
  },
  "ZSLO": {
    "airport": "Longyan Guanzhishan Airport",
    "latitude": 25.6747,
    "longitude": 116.747
  },
  "ZSSM": {
    "airport": "Sanming Shaxian Airport",
    "latitude": 26.4263,
    "longitude": 117.834
  },
  "ZSWY": {
    "airport": "Wuyishan Airport",
    "latitude": 27.7019,
    "longitude": 118.001
  },
  "ZSAM": {
    "airport": "Xiamen Gaoqi International Airport",
    "latitude": 24.544,
    "longitude": 118.128
  },
  "ZLDH": {
    "airport": "Dunhuang Airport",
    "latitude": 40.1611,
    "longitude": 94.8092
  },
  "ZLXH": {
    "airport": "Gannan Xiahe Airport",
    "latitude": 34.8105,
    "longitude": 102.645
  },
  "ZLQY": {
    "airport": "Qingyang Airport",
    "latitude": 35.7997,
    "longitude": 107.603
  },
  "ZLJQ": {
    "airport": "Jiayuguan Airport",
    "latitude": 39.8569,
    "longitude": 98.3414
  },
  "ZLJC": {
    "airport": "Jinchang Jinchuan Airport",
    "latitude": 38.5422,
    "longitude": 102.348
  },
  "ZLLL": {
    "airport": "Lanzhou Zhongchuan International Airport",
    "latitude": 36.5152,
    "longitude": 103.62
  },
  "ZLLN": {
    "airport": "Longnan Chengzhou Airport",
    "latitude": 33.788,
    "longitude": 105.797
  },
  "ZLTS": {
    "airport": "Tianshui Maijishan Airport",
    "latitude": 34.5594,
    "longitude": 105.86
  },
  "ZLZY": {
    "airport": "Zhangye Ganzhou Airport",
    "latitude": 38.8019,
    "longitude": 100.675
  },
  "ZGGG": {
    "airport": "Guangzhou Baiyun International Airport",
    "latitude": 23.3924,
    "longitude": 113.299
  },
  "ZGFS": {
    "airport": "Foshan Shadi Airport",
    "latitude": 23.0833,
    "longitude": 113.07
  },
  "ZGHZ": {
    "airport": "Huizhou Pingtan Airport",
    "latitude": 23.05,
    "longitude": 114.6
  },
  "ZGMX": {
    "airport": "Meixian Airport",
    "latitude": 24.35,
    "longitude": 116.133
  },
  "ZGOW": {
    "airport": "Jieyang Chaoshan International Airport",
    "latitude": 23.552,
    "longitude": 116.503
  },
  "ZGSZ": {
    "airport": "Shenzhen Bao'an International Airport",
    "latitude": 22.6393,
    "longitude": 113.811
  },
  "ZGXN": {
    "airport": "Xingning Air Base",
    "latitude": 24.1492,
    "longitude": 115.758
  },
  "ZGZJ": {
    "airport": "Zhanjiang Airport",
    "latitude": 21.2144,
    "longitude": 110.358
  },
  "ZGSD": {
    "airport": "Zhuhai Jinwan Airport (Zhuhai Sanzao Airport)",
    "latitude": 22.0064,
    "longitude": 113.376
  },
  "ZGBS": {
    "airport": "Baise Bama Airport",
    "latitude": 23.7206,
    "longitude": 106.96
  },
  "ZGBH": {
    "airport": "Beihai Fucheng Airport",
    "latitude": 21.5394,
    "longitude": 109.294
  },
  "ZGHC": {
    "airport": "Hechi Jinchengjiang Airport",
    "latitude": 24.805,
    "longitude": 107.7
  },
  "ZGKL": {
    "airport": "Guilin Liangjiang International Airport",
    "latitude": 25.2181,
    "longitude": 110.039
  },
  "ZGZH": {
    "airport": "Liuzhou Bailian Airport",
    "latitude": 24.2075,
    "longitude": 109.391
  },
  "ZGNN": {
    "airport": "Nanning Wuxu International Airport",
    "latitude": 22.6083,
    "longitude": 108.172
  },
  "ZGWZ": {
    "airport": "Wuzhou Xijiang Airport",
    "latitude": 23.4567,
    "longitude": 111.248
  },
  "ZUYI": {
    "airport": "Xingyi Wanfenglin Airport",
    "latitude": 25.0864,
    "longitude": 104.959
  },
  "ZUAS": {
    "airport": "Anshun Huangguoshu Airport",
    "latitude": 26.2606,
    "longitude": 105.873
  },
  "ZUBJ": {
    "airport": "Bijie Feixiong Airport",
    "latitude": 27.2671,
    "longitude": 105.472
  },
  "ZUNP": {
    "airport": "Liping Airport",
    "latitude": 26.3222,
    "longitude": 109.15
  },
  "ZUGY": {
    "airport": "Guiyang Longdongbao International Airport",
    "latitude": 26.5385,
    "longitude": 106.801
  },
  "ZULB": {
    "airport": "Libo Airport (Qiannan Airport)",
    "latitude": 25.4525,
    "longitude": 107.962
  },
  "ZUPS": {
    "airport": "Liupanshui Yuezhao Airport",
    "latitude": 26.6094,
    "longitude": 104.979
  },
  "ZUTR": {
    "airport": "Tongren Fenghuang Airport",
    "latitude": 27.8833,
    "longitude": 109.309
  },
  "ZUMT": {
    "airport": "Zunyi Maotai Airport",
    "latitude": 27.8164,
    "longitude": 106.333
  },
  "ZUZY": {
    "airport": "Zunyi Xinzhou Airport",
    "latitude": 27.5895,
    "longitude": 107.001
  },
  "ZJHK": {
    "airport": "Haikou Meilan International Airport",
    "latitude": 19.9349,
    "longitude": 110.459
  },
  "ZJSY": {
    "airport": "Sanya Phoenix International Airport",
    "latitude": 18.3029,
    "longitude": 109.412
  },
  "ZBDH": {
    "airport": "Qinhuangdao Beidaihe Airport",
    "latitude": 39.6664,
    "longitude": 119.059
  },
  "ZBCD": {
    "airport": "Chengde Puning Airport",
    "latitude": 41.1225,
    "longitude": 118.074
  },
  "ZBHD": {
    "airport": "Handan Airport",
    "latitude": 36.5258,
    "longitude": 114.426
  },
  "ZBSJ": {
    "airport": "Shijiazhuang Zhengding International Airport",
    "latitude": 38.2807,
    "longitude": 114.697
  },
  "ZBTS": {
    "airport": "Tangshan Sannuhe Airport",
    "latitude": 39.7178,
    "longitude": 118.003
  },
  "ZBXT": {
    "airport": "Xingtai Dalian Airport",
    "latitude": 36.8831,
    "longitude": 114.429
  },
  "ZBZJ": {
    "airport": "Zhangjiakou Ningyuan Airport",
    "latitude": 40.7386,
    "longitude": 114.93
  },
  "ZYDQ": {
    "airport": "Daqing Sartu Airport",
    "latitude": 46.7464,
    "longitude": 125.141
  },
  "ZYFY": {
    "airport": "Fuyuan Dongji Airport",
    "latitude": 48.1995,
    "longitude": 134.366
  },
  "ZYHE": {
    "airport": "Heihe Airport",
    "latitude": 50.1716,
    "longitude": 127.309
  },
  "ZYHB": {
    "airport": "Harbin Taiping International Airport",
    "latitude": 45.6234,
    "longitude": 126.25
  },
  "ZYJD": {
    "airport": "Jiagedaqi Airport",
    "latitude": 50.3714,
    "longitude": 124.118
  },
  "ZYJM": {
    "airport": "Jiamusi Dongjiao Airport",
    "latitude": 46.8434,
    "longitude": 130.465
  },
  "ZYJS": {
    "airport": "Jiansanjiang Airport",
    "latitude": 47.11,
    "longitude": 132.66
  },
  "ZYJX": {
    "airport": "Jixi Xingkaihu Airport",
    "latitude": 45.293,
    "longitude": 131.193
  },
  "ZYLD": {
    "airport": "Yichun Lindu Airport",
    "latitude": 47.7521,
    "longitude": 129.019
  },
  "ZYMD": {
    "airport": "Mudanjiang Hailang Airport",
    "latitude": 44.5241,
    "longitude": 129.569
  },
  "ZYQQ": {
    "airport": "Qiqihar Sanjiazi Airport",
    "latitude": 47.2396,
    "longitude": 123.918
  },
  "ZYMH": {
    "airport": "Mohe Gulian Airport",
    "latitude": 52.9128,
    "longitude": 122.43
  },
  "ZYYL": {
    "airport": "Yilan Airport",
    "latitude": 46.317,
    "longitude": 129.567
  },
  "ZHXY": {
    "airport": "Xinyang Minggang Airport",
    "latitude": 32.5414,
    "longitude": 114.078
  },
  "ZHAY": {
    "airport": "Anyang Airport",
    "latitude": 36.1339,
    "longitude": 114.344
  },
  "ZHCC": {
    "airport": "Zhengzhou Xinzheng International Airport",
    "latitude": 34.5197,
    "longitude": 113.841
  },
  "ZHLY": {
    "airport": "Luoyang Beijiao Airport",
    "latitude": 34.7411,
    "longitude": 112.388
  },
  "ZHNY": {
    "airport": "Nanyang Jiangying Airport",
    "latitude": 32.9808,
    "longitude": 112.615
  },
  "ZHEC": {
    "airport": "Ezhou Huahu Airport",
    "latitude": 30.3429,
    "longitude": 115.03
  },
  "ZHES": {
    "airport": "Enshi Xujiaping Airport",
    "latitude": 30.3203,
    "longitude": 109.485
  },
  "ZHSN": {
    "airport": "Shennongjia Hongping Airport",
    "latitude": 31.626,
    "longitude": 110.34
  },
  "ZHGH": {
    "airport": "Laohekou Airport",
    "latitude": 32.3894,
    "longitude": 111.695
  },
  "ZHSS": {
    "airport": "Shashi Airport",
    "latitude": 30.3243,
    "longitude": 112.28
  },
  "ZHSY": {
    "airport": "Shiyan Wudangshan Airport",
    "latitude": 32.5917,
    "longitude": 110.908
  },
  "ZHHH": {
    "airport": "Wuhan Tianhe International Airport",
    "latitude": 30.7838,
    "longitude": 114.208
  },
  "ZHXF": {
    "airport": "Xiangyang Liuji Airport",
    "latitude": 32.1506,
    "longitude": 112.291
  },
  "ZHYC": {
    "airport": "Yichang Sanxia Airport",
    "latitude": 30.5565,
    "longitude": 111.48
  },
  "ZGCZ": {
    "airport": "Chenzhou Beihu Airport",
    "latitude": 25.7506,
    "longitude": 112.846
  },
  "ZGYY": {
    "airport": "Yueyang Sanhe Airport",
    "latitude": 29.314,
    "longitude": 113.278
  },
  "ZGCD": {
    "airport": "Changde Taohuayuan Airport",
    "latitude": 28.9189,
    "longitude": 111.64
  },
  "ZGHA": {
    "airport": "Changsha Huanghua International Airport",
    "latitude": 28.1892,
    "longitude": 113.22
  },
  "ZGDY": {
    "airport": "Zhangjiajie Hehua Airport",
    "latitude": 29.1028,
    "longitude": 110.443
  },
  "ZGCJ": {
    "airport": "Huaihua Zhijiang Airport",
    "latitude": 27.4411,
    "longitude": 109.7
  },
  "ZGHY": {
    "airport": "Hengyang Nanyue Airport",
    "latitude": 26.9053,
    "longitude": 112.628
  },
  "ZGLG": {
    "airport": "Yongzhou Lingling Airport",
    "latitude": 26.3387,
    "longitude": 111.61
  },
  "ZGSY": {
    "airport": "Shaoyang Wugang Airport",
    "latitude": 26.802,
    "longitude": 110.642
  },
  "ZSCG": {
    "airport": "Changzhou Benniu Airport",
    "latitude": 31.9197,
    "longitude": 119.779
  },
  "ZSSH": {
    "airport": "Huai'an Lianshui Airport",
    "latitude": 33.7908,
    "longitude": 119.125
  },
  "ZSLG": {
    "airport": "Lianyungang Baitabu Airport",
    "latitude": 34.5717,
    "longitude": 118.874
  },
  "ZSNJ": {
    "airport": "Nanjing Lukou International Airport",
    "latitude": 31.742,
    "longitude": 118.862
  },
  "ZSNT": {
    "airport": "Nantong Xingdong Airport",
    "latitude": 32.0708,
    "longitude": 120.976
  },
  "ZSRG": {
    "airport": "Rugao Air Base",
    "latitude": 32.2579,
    "longitude": 120.502
  },
  "ZSSZ": {
    "airport": "Suzhou Guangfu Airport",
    "latitude": 31.2631,
    "longitude": 120.401
  },
  "ZSWX": {
    "airport": "Sunan Shuofang International Airport",
    "latitude": 31.4944,
    "longitude": 120.429
  },
  "ZSXZ": {
    "airport": "Xuzhou Guanyin Airport",
    "latitude": 34.0591,
    "longitude": 117.555
  },
  "ZSYN": {
    "airport": "Yancheng Nanyang International Airport",
    "latitude": 33.4258,
    "longitude": 120.203
  },
  "ZSYA": {
    "airport": "Yangzhou Taizhou Airport",
    "latitude": 32.5602,
    "longitude": 119.717
  },
  "ZSJD": {
    "airport": "Jingdezhen Luojia Airport",
    "latitude": 29.3386,
    "longitude": 117.176
  },
  "ZSJA": {
    "airport": "Jinggangshan Airport",
    "latitude": 26.8569,
    "longitude": 114.737
  },
  "ZSJJ": {
    "airport": "Jiujiang Lushan Airport",
    "latitude": 29.4769,
    "longitude": 115.801
  },
  "ZSCN": {
    "airport": "Nanchang Changbei International Airport",
    "latitude": 28.865,
    "longitude": 115.9
  },
  "ZSGZ": {
    "airport": "Ganzhou Huangjin Airport",
    "latitude": 25.8533,
    "longitude": 114.779
  },
  "ZSSR": {
    "airport": "Shangrao Sanqingshan Airport",
    "latitude": 28.3797,
    "longitude": 117.964
  },
  "ZSYC": {
    "airport": "Yichun Mingyueshan Airport",
    "latitude": 27.8025,
    "longitude": 114.306
  },
  "ZYCC": {
    "airport": "Changchun Longjia International Airport",
    "latitude": 43.9962,
    "longitude": 125.685
  },
  "ZYBA": {
    "airport": "Baicheng Chang'an Airport",
    "latitude": 45.5053,
    "longitude": 123.02
  },
  "ZYJL": {
    "airport": "Jilin Ertaizi Airport",
    "latitude": 44.0022,
    "longitude": 126.396
  },
  "ZYBS": {
    "airport": "Changbaishan Airport",
    "latitude": 42.0669,
    "longitude": 127.602
  },
  "ZYTN": {
    "airport": "Tonghua Sanyuanpu Airport",
    "latitude": 42.2539,
    "longitude": 125.703
  },
  "ZYYJ": {
    "airport": "Yanji Chaoyangchuan Airport",
    "latitude": 42.8828,
    "longitude": 129.451
  },
  "ZYSQ": {
    "airport": "Songyuan Chaganhu Airport",
    "latitude": 44.9381,
    "longitude": 124.55
  },
  "ZYAS": {
    "airport": "Anshan Teng'ao Airport",
    "latitude": 41.1053,
    "longitude": 122.854
  },
  "ZYCY": {
    "airport": "Chaoyang Airport",
    "latitude": 41.5381,
    "longitude": 120.435
  },
  "ZYCH": {
    "airport": "Changhai Airport",
    "latitude": 39.2667,
    "longitude": 122.667
  },
  "ZYDD": {
    "airport": "Dandong Langtou Airport",
    "latitude": 40.0247,
    "longitude": 124.286
  },
  "ZYTL": {
    "airport": "Dalian Zhoushuizi International Airport",
    "latitude": 38.9657,
    "longitude": 121.539
  },
  "ZYJZ": {
    "airport": "Jinzhou Bay Airport",
    "latitude": 41.1014,
    "longitude": 121.062
  },
  "ZYTX": {
    "airport": "Shenyang Taoxian International Airport",
    "latitude": 41.6398,
    "longitude": 123.483
  },
  "ZYXC": {
    "airport": "Xingcheng Airport",
    "latitude": 40.5803,
    "longitude": 120.698
  },
  "ZYYK": {
    "airport": "Yingkou Lanqi Airport",
    "latitude": 40.5425,
    "longitude": 122.359
  },
  "ZBOW": {
    "airport": "Baotou Airport",
    "latitude": 40.56,
    "longitude": 109.997
  },
  "ZBCF": {
    "airport": "Chifeng Yulong Airport",
    "latitude": 42.235,
    "longitude": 118.908
  },
  "ZBDS": {
    "airport": "Ordos Ejin Horo Airport",
    "latitude": 39.49,
    "longitude": 109.861
  },
  "ZBER": {
    "airport": "Erenhot Saiwusu International Airport",
    "latitude": 43.4225,
    "longitude": 112.097
  },
  "ZBHH": {
    "airport": "Hohhot Baita International Airport",
    "latitude": 40.8514,
    "longitude": 111.824
  },
  "ZBLA": {
    "airport": "Hulunbuir Hailar Airport",
    "latitude": 49.205,
    "longitude": 119.825
  },
  "ZBUL": {
    "airport": "Ulanhot Airport",
    "latitude": 46.1953,
    "longitude": 122.008
  },
  "ZBHZ": {
    "airport": "Holingol Huolinhe Airport",
    "latitude": 45.4872,
    "longitude": 119.407
  },
  "ZBMZ": {
    "airport": "Manzhouli Xijiao Airport",
    "latitude": 49.5667,
    "longitude": 117.33
  },
  "ZBYZ": {
    "airport": "Bayannur Tianjitai Airport",
    "latitude": 40.926,
    "longitude": 107.743
  },
  "ZBTL": {
    "airport": "Tongliao Airport",
    "latitude": 43.5567,
    "longitude": 122.2
  },
  "ZBUH": {
    "airport": "Wuhai Airport",
    "latitude": 39.7934,
    "longitude": 106.799
  },
  "ZBXH": {
    "airport": "Xilinhot Airport",
    "latitude": 43.9156,
    "longitude": 115.964
  },
  "ZBES": {
    "airport": "Arxan Yi'ershi Airport",
    "latitude": 47.3106,
    "longitude": 119.912
  },
  "ZLGY": {
    "airport": "Guyuan Liupanshan Airport",
    "latitude": 36.0789,
    "longitude": 106.217
  },
  "ZLIC": {
    "airport": "Yinchuan Hedong International Airport",
    "latitude": 38.3228,
    "longitude": 106.393
  },
  "ZLZW": {
    "airport": "Zhongwei Shapotou Airport (Zhongwei Xiangshan Airport)",
    "latitude": 37.5731,
    "longitude": 105.154
  },
  "ZLHB": {
    "airport": "Haibei Qilian Airport",
    "latitude": 38.012,
    "longitude": 100.644
  },
  "ZLGL": {
    "airport": "Golog Maqin Airport",
    "latitude": 34.4181,
    "longitude": 100.301
  },
  "ZLGM": {
    "airport": "Golmud Airport",
    "latitude": 36.4006,
    "longitude": 94.7861
  },
  "ZLDL": {
    "airport": "Delingha Airport",
    "latitude": 37.1253,
    "longitude": 97.2687
  },
  "ZLXN": {
    "airport": "Xining Caojiabao Airport",
    "latitude": 36.5275,
    "longitude": 102.043
  },
  "ZLYS": {
    "airport": "Yushu Batang Airport",
    "latitude": 32.8364,
    "longitude": 97.0364
  },
  "ZLAK": {
    "airport": "Ankang Wulipu Airport",
    "latitude": 32.7081,
    "longitude": 108.931
  },
  "ZLYA": {
    "airport": "Yan'an Nanniwan (formerly Ershilipu) Airport",
    "latitude": 36.6369,
    "longitude": 109.554
  },
  "ZLHZ": {
    "airport": "Hanzhong Chenggu Airport",
    "latitude": 33.1341,
    "longitude": 107.206
  },
  "ZLSN": {
    "airport": "Xi'an Xiguan Airport",
    "latitude": 34.3767,
    "longitude": 109.12
  },
  "ZLYL": {
    "airport": "Yulin Yuyang Airport",
    "latitude": 38.3597,
    "longitude": 109.591
  },
  "ZLXY": {
    "airport": "Xi'an Xianyang International Airport",
    "latitude": 34.4471,
    "longitude": 108.752
  },
  "ZSHZ": {
    "airport": "Heze Mudan Airport",
    "latitude": 35.2133,
    "longitude": 115.737
  },
  "ZSDY": {
    "airport": "Dongying Shengli Airport",
    "latitude": 37.5086,
    "longitude": 118.788
  },
  "ZLJN": {
    "airport": "Jining Qufu Airport",
    "latitude": 35.2928,
    "longitude": 116.347
  },
  "ZSLY": {
    "airport": "Linyi Shubuling Airport",
    "latitude": 35.0461,
    "longitude": 118.412
  },
  "ZSQD": {
    "airport": "Qingdao Liuting International Airport",
    "latitude": 36.2661,
    "longitude": 120.374
  },
  "ZSJN": {
    "airport": "Jinan Yaoqiang International Airport",
    "latitude": 36.8572,
    "longitude": 117.216
  },
  "ZSWF": {
    "airport": "Weifang Airport",
    "latitude": 36.6467,
    "longitude": 119.119
  },
  "ZSWH": {
    "airport": "Weihai Dashuibo Airport",
    "latitude": 37.1871,
    "longitude": 122.229
  },
  "ZSYT": {
    "airport": "Yantai Penglai International Airport",
    "latitude": 37.6572,
    "longitude": 120.987
  },
  "ZSPD": {
    "airport": "Shanghai Pudong International Airport",
    "latitude": 31.1434,
    "longitude": 121.805
  },
  "ZSSS": {
    "airport": "Shanghai Hongqiao International Airport",
    "latitude": 31.1979,
    "longitude": 121.336
  },
  "ZBCZ": {
    "airport": "Changzhi Wangcun Airport",
    "latitude": 36.2475,
    "longitude": 113.126
  },
  "ZBDT": {
    "airport": "Datong Yungang Airport",
    "latitude": 40.0603,
    "longitude": 113.482
  },
  "ZBLL": {
    "airport": "Luliang Airport",
    "latitude": 37.6833,
    "longitude": 111.143
  },
  "ZBSG": {
    "airport": "Shuozhou Zirun Airport",
    "latitude": 39.273,
    "longitude": 112.6911
  },
  "ZBYN": {
    "airport": "Taiyuan Wusu International Airport",
    "latitude": 37.7469,
    "longitude": 112.628
  },
  "ZBXZ": {
    "airport": "Xinzhou Wutaishan Airport",
    "latitude": 38.5975,
    "longitude": 112.969
  },
  "ZBYC": {
    "airport": "Yuncheng Guangong Airport",
    "latitude": 35.1164,
    "longitude": 111.031
  },
  "ZUDA": {
    "airport": "Dazhou Jinya Airport",
    "latitude": 31.04,
    "longitude": 107.44
  },
  "ZUHY": {
    "airport": "Hongyuan Airport",
    "latitude": 32.5315,
    "longitude": 102.352
  },
  "ZUUU": {
    "airport": "Chengdu Shuangliu International Airport",
    "latitude": 30.5785,
    "longitude": 103.947
  },
  "ZUDX": {
    "airport": "Dazhou Heshi Airport",
    "latitude": 31.1302,
    "longitude": 107.429
  },
  "ZUDC": {
    "airport": "Daocheng Yading Airport",
    "latitude": 29.3231,
    "longitude": 100.053
  },
  "ZUGH": {
    "airport": "Guanghan Airport",
    "latitude": 30.9485,
    "longitude": 104.33
  },
  "ZUGU": {
    "airport": "Guangyuan Panlong Airport",
    "latitude": 32.3911,
    "longitude": 105.702
  },
  "ZUGZ": {
    "airport": "Garze Gesar Airport",
    "latitude": 31.7579,
    "longitude": 99.5525
  },
  "ZUJZ": {
    "airport": "Jiuzhai Huanglong Airport",
    "latitude": 32.8533,
    "longitude": 103.682
  },
  "ZUKD": {
    "airport": "Kangding Airport",
    "latitude": 30.1575,
    "longitude": 101.735
  },
  "ZULZ": {
    "airport": "Luzhou Yunlong Airport",
    "latitude": 29.03,
    "longitude": 105.47
  },
  "ZUMY": {
    "airport": "Mianyang Nanjiao Airport",
    "latitude": 31.4281,
    "longitude": 104.741
  },
  "ZUNC": {
    "airport": "Nanchong Gaoping Airport",
    "latitude": 30.7955,
    "longitude": 106.163
  },
  "ZUZH": {
    "airport": "Panzhihua Bao'anying Airport",
    "latitude": 26.54,
    "longitude": 101.799
  },
  "ZUTF": {
    "airport": "Chengdu Tianfu International Airport",
    "latitude": 30.319,
    "longitude": 104.445
  },
  "ZUXC": {
    "airport": "Xichang Qingshan Airport",
    "latitude": 27.9891,
    "longitude": 102.184
  },
  "ZUYB": {
    "airport": "Yibin Caiba Airport",
    "latitude": 28.8006,
    "longitude": 104.545
  },
  "ZBTJ": {
    "airport": "Tianjin Binhai International Airport",
    "latitude": 39.1244,
    "longitude": 117.346
  },
  "ZWAT": {
    "airport": "Altay Airport",
    "latitude": 47.7499,
    "longitude": 88.0858
  },
  "ZWAK": {
    "airport": "Aksu Airport",
    "latitude": 41.2625,
    "longitude": 80.2917
  },
  "ZWBL": {
    "airport": "Bole Alashankou Airport",
    "latitude": 44.895,
    "longitude": 82.3
  },
  "ZWFY": {
    "airport": "Fuyun Koktokay Airport",
    "latitude": 46.8042,
    "longitude": 89.512
  },
  "ZWHM": {
    "airport": "Hami Airport (Kumul Airport)",
    "latitude": 42.8414,
    "longitude": 93.6692
  },
  "ZWTN": {
    "airport": "Hotan Airport",
    "latitude": 37.0385,
    "longitude": 79.8649
  },
  "ZWCM": {
    "airport": "Qiemo Airport",
    "latitude": 38.2336,
    "longitude": 85.4656
  },
  "ZWKC": {
    "airport": "Kuqa Qiuci Airport",
    "latitude": 41.6779,
    "longitude": 82.8729
  },
  "ZWSH": {
    "airport": "Kashgar Airport (Kashi Airport)",
    "latitude": 39.5429,
    "longitude": 76.02
  },
  "ZWKN": {
    "airport": "Kanas Airport",
    "latitude": 48.2223,
    "longitude": 86.9959
  },
  "ZWKL": {
    "airport": "Korla Airport",
    "latitude": 41.6978,
    "longitude": 86.1289
  },
  "ZWKM": {
    "airport": "Karamay Airport",
    "latitude": 45.4665,
    "longitude": 84.9527
  },
  "ZWNL": {
    "airport": "Xinyuan Nalati Airport",
    "latitude": 43.4318,
    "longitude": 83.3786
  },
  "ZWRQ": {
    "airport": "Ruoqiang Loulan Airport",
    "latitude": 38.9747,
    "longitude": 88.0083
  },
  "ZWHZ": {
    "airport": "Shihezi Huayuan Airport",
    "latitude": 44.2421,
    "longitude": 85.8905
  },
  "ZWSS": {
    "airport": "Shanshan Airport",
    "latitude": 42.9117,
    "longitude": 90.2475
  },
  "ZWTC": {
    "airport": "Tacheng Airport",
    "latitude": 46.6725,
    "longitude": 83.3408
  },
  "ZWTL": {
    "airport": "Turpan Jiaohe Airport",
    "latitude": 43.0308,
    "longitude": 89.0987
  },
  "ZWWW": {
    "airport": "Urumqi Diwopu International Airport",
    "latitude": 43.9071,
    "longitude": 87.4742
  },
  "ZWYN": {
    "airport": "Yining Airport",
    "latitude": 43.9558,
    "longitude": 81.3303
  },
  "ZWYT": {
    "airport": "Yutian Wanfang Airport",
    "latitude": 36.812,
    "longitude": 81.7817
  },
  "ZUBD": {
    "airport": "Qamdo Bamda Airport",
    "latitude": 30.5536,
    "longitude": 97.1083
  },
  "ZULS": {
    "airport": "Lhasa Gonggar Airport",
    "latitude": 29.2978,
    "longitude": 90.9119
  },
  "ZUNZ": {
    "airport": "Nyingchi Mainling Airport",
    "latitude": 29.3033,
    "longitude": 94.3353
  },
  "ZUAL": {
    "airport": "Ngari Gunsa Airport",
    "latitude": 32.1,
    "longitude": 80.0531
  },
  "ZURK": {
    "airport": "Shigatse Peace Airport",
    "latitude": 29.3519,
    "longitude": 89.3114
  },
  "ZPBS": {
    "airport": "Baoshan Yunduan Airport",
    "latitude": 25.0533,
    "longitude": 99.1683
  },
  "ZPCW": {
    "airport": "Cangyuan Washan Airport",
    "latitude": 23.2739,
    "longitude": 99.3736
  },
  "ZPDQ": {
    "airport": "Diqing Shangri-La Airport",
    "latitude": 27.7936,
    "longitude": 99.6772
  },
  "ZPDL": {
    "airport": "Dali Airport",
    "latitude": 25.6494,
    "longitude": 100.319
  },
  "ZPJH": {
    "airport": "Xishuangbanna Gasa Airport",
    "latitude": 21.9739,
    "longitude": 100.76
  },
  "ZPJM": {
    "airport": "Lancang Jingmai Airport",
    "latitude": 22.4158,
    "longitude": 99.7864
  },
  "ZPPP": {
    "airport": "Kunming Changshui International Airport",
    "latitude": 25.1019,
    "longitude": 102.929
  },
  "ZPLJ": {
    "airport": "Lijiang Sanyi Airport",
    "latitude": 26.68,
    "longitude": 100.246
  },
  "ZPLC": {
    "airport": "Lincang Airport",
    "latitude": 23.7381,
    "longitude": 100.025
  },
  "ZPMS": {
    "airport": "Dehong Mangshi Airport",
    "latitude": 24.4011,
    "longitude": 98.5317
  },
  "ZPSM": {
    "airport": "Pu'er Simao Airport",
    "latitude": 22.7933,
    "longitude": 100.959
  },
  "ZUTC": {
    "airport": "Tengchong Tuofeng Airport",
    "latitude": 24.9381,
    "longitude": 98.4858
  },
  "ZPWS": {
    "airport": "Wenshan Puzhehei Airport",
    "latitude": 23.5583,
    "longitude": 104.326
  },
  "ZPYM": {
    "airport": "Yuanmou Air Base",
    "latitude": 25.7375,
    "longitude": 101.882
  },
  "ZPZT": {
    "airport": "Zhaotong Airport",
    "latitude": 27.3256,
    "longitude": 103.755
  },
  "ZSHC": {
    "airport": "Hangzhou Xiaoshan International Airport",
    "latitude": 30.2295,
    "longitude": 120.434
  },
  "ZSZS": {
    "airport": "Zhoushan Putuoshan Airport",
    "latitude": 29.9342,
    "longitude": 122.362
  },
  "ZSLQ": {
    "airport": "Taizhou Luqiao Airport",
    "latitude": 28.5622,
    "longitude": 121.429
  },
  "ZSJU": {
    "airport": "Quzhou Airport",
    "latitude": 28.9658,
    "longitude": 118.899
  },
  "ZSNB": {
    "airport": "Ningbo Lishe International Airport",
    "latitude": 29.8267,
    "longitude": 121.462
  },
  "ZSWZ": {
    "airport": "Wenzhou Longwan International Airport",
    "latitude": 27.9122,
    "longitude": 120.852
  },
  "ZSYW": {
    "airport": "Yiwu Airport",
    "latitude": 29.3447,
    "longitude": 120.032
  },
  "SKLT": {
    "airport": "Alfredo Vasquez Cobo International Airport",
    "latitude": -4.19355,
    "longitude": -69.9432
  },
  "SKLP": {
    "airport": "La Pedrera Airport",
    "latitude": -1.32861,
    "longitude": -69.5797
  },
  "SCSF": {
    "airport": "San Felipe Airport",
    "latitude": -32.7458,
    "longitude": -70.705
  },
  "SKRA": {
    "airport": "Tarapaca Airport",
    "latitude": -2.89472,
    "longitude": -69.7472
  },
  "SKAN": {
    "airport": "Andes Airport",
    "latitude": 5.69764,
    "longitude": -75.8804
  },
  "SKAM": {
    "airport": "Amalfi Airport (Colombia)",
    "latitude": 6.91667,
    "longitude": -75.0667
  },
  "SKLC": {
    "airport": "Antonio Roldan  Betancourt Airport",
    "latitude": 7.81196,
    "longitude": -76.7164
  },
  "SKCU": {
    "airport": "Juan H. White Airport",
    "latitude": 7.96847,
    "longitude": -75.1985
  },
  "SKEB": {
    "airport": "El Bagre Airport (El Tomin Airport)",
    "latitude": 7.59647,
    "longitude": -74.8089
  },
  "SKMD": {
    "airport": "Olaya Herrera Airport",
    "latitude": 6.22055,
    "longitude": -75.5906
  },
  "SKIG": {
    "airport": "Jaime Ortiz Betancur Airport",
    "latitude": 7.68038,
    "longitude": -76.6865
  },
  "SKRG": {
    "airport": "Jose Maria Cordova International Airport",
    "latitude": 6.16454,
    "longitude": -75.4231
  },
  "SKPN": {
    "airport": "Puerto Nare Airport",
    "latitude": 6.21002,
    "longitude": -74.5906
  },
  "SKNC": {
    "airport": "Antioquia Airport",
    "latitude": 8.45,
    "longitude": -76.7833
  },
  "SKOT": {
    "airport": "Otu Airport",
    "latitude": 7.01037,
    "longitude": -74.7155
  },
  "SKPR": {
    "airport": "Morela Airport (Puerto Berrio Airport",
    "latitude": 6.46034,
    "longitude": -74.4105
  },
  "SKTU": {
    "airport": "Gonzalo Mejia Airport",
    "latitude": 8.07453,
    "longitude": -76.7415
  },
  "SKUR": {
    "airport": "Urrao Airport",
    "latitude": 6.32883,
    "longitude": -76.1425
  },
  "SKAT": {
    "airport": "El Troncal Airport",
    "latitude": 7.02106,
    "longitude": -71.3889
  },
  "SKUC": {
    "airport": "Santiago Perez  Quiroz Airport",
    "latitude": 7.06888,
    "longitude": -70.7369
  },
  "SKCN": {
    "airport": "Cravo Norte Airport",
    "latitude": 6.31684,
    "longitude": -70.2107
  },
  "SKSA": {
    "airport": "Los Colonizadores Airport",
    "latitude": 6.95187,
    "longitude": -71.8572
  },
  "SKTM": {
    "airport": "Gabriel Vargas Santos Airport",
    "latitude": 6.45108,
    "longitude": -71.7603
  },
  "SKBQ": {
    "airport": "Ernesto Cortissoz International Airport",
    "latitude": 10.8896,
    "longitude": -74.7808
  },
  "SKCG": {
    "airport": "Rafael Nunez International Airport",
    "latitude": 10.4424,
    "longitude": -75.513
  },
  "SKMG": {
    "airport": "Baracoa Regional Airport",
    "latitude": 9.28474,
    "longitude": -74.8461
  },
  "SKMP": {
    "airport": "San Bernardo Airport",
    "latitude": 9.79911,
    "longitude": -74.786
  },
  "SKVL": {
    "airport": "Velasquez Airport",
    "latitude": 5.93904,
    "longitude": -74.457
  },
  "SKPA": {
    "airport": "Juan Jose Rondon",
    "latitude": 6.283,
    "longitude": -71.083
  },
  "SKSO": {
    "airport": "Alberto Lleras Camargo Airport",
    "latitude": 5.67732,
    "longitude": -72.9703
  },
  "SKTA": {
    "airport": "Tauramena Airport",
    "latitude": 5.01281,
    "longitude": -72.7424
  },
  "SKMZ": {
    "airport": "La Nubia Airport (Santaguida Airport)",
    "latitude": 5.0296,
    "longitude": -75.4647
  },
  "SKAC": {
    "airport": "Araracuara Airport",
    "latitude": -0.5833,
    "longitude": -72.4083
  },
  "SKYA": {
    "airport": "Yaguara Airport",
    "latitude": 1.54417,
    "longitude": -73.9333
  },
  "SKFL": {
    "airport": "Gustavo Artunduaga Paredes Airport",
    "latitude": 1.58919,
    "longitude": -75.5644
  },
  "SKSV": {
    "airport": "Eduardo Falla Solano Airport",
    "latitude": 2.15217,
    "longitude": -74.7663
  },
  "SKTQ": {
    "airport": "Captain Ernesto Esguerra Cubides Air Base",
    "latitude": 0.7459,
    "longitude": -75.234
  },
  "SKYP": {
    "airport": "El Alcaravan Airport",
    "latitude": 5.31911,
    "longitude": -72.384
  },
  "SKHC": {
    "airport": "Hato Corozal Airport",
    "latitude": 6.15,
    "longitude": -71.75
  },
  "SKOE": {
    "airport": "Orocue Airport",
    "latitude": 4.79222,
    "longitude": -71.3564
  },
  "SKPZ": {
    "airport": "Paz de Ariporo Airport",
    "latitude": 5.87615,
    "longitude": -71.8866
  },
  "SKTD": {
    "airport": "Trinidad Airport",
    "latitude": 5.43278,
    "longitude": -71.6625
  },
  "SKGP": {
    "airport": "Guapi Airport (Juan Casiano Airport)",
    "latitude": 2.57013,
    "longitude": -77.8986
  },
  "SKPP": {
    "airport": "Guillermo Leon Valencia Airport",
    "latitude": 2.4544,
    "longitude": -76.6093
  },
  "SKMB": {
    "airport": "Timbiqui Airport",
    "latitude": 2.767,
    "longitude": -77.667
  },
  "SKAG": {
    "airport": "Hacaritama Airport",
    "latitude": 8.24722,
    "longitude": -73.5819
  },
  "SKVP": {
    "airport": "Alfonso Lopez Pumarejo Airport",
    "latitude": 10.435,
    "longitude": -73.2495
  },
  "SKAD": {
    "airport": "Alcides Fernandez Airport",
    "latitude": 8.51667,
    "longitude": -77.3
  },
  "SKCP": {
    "airport": "Bahia Cupica Airport",
    "latitude": 6.55,
    "longitude": -77.3263
  },
  "SKBS": {
    "airport": "Jose Celestino Mutis Airport",
    "latitude": 6.20292,
    "longitude": -77.3947
  },
  "SKCD": {
    "airport": "Mandinga Airport",
    "latitude": 5.08333,
    "longitude": -76.7
  },
  "SKCA": {
    "airport": "Capurgana Airport",
    "latitude": 8.63333,
    "longitude": -77.35
  },
  "SKJU": {
    "airport": "Jurado Airport",
    "latitude": 6.51667,
    "longitude": -76.6
  },
  "SKNQ": {
    "airport": "Reyes Murillo Airport",
    "latitude": 5.6964,
    "longitude": -77.2806
  },
  "SKUI": {
    "airport": "El Carano Airport",
    "latitude": 5.69076,
    "longitude": -76.6412
  },
  "SKML": {
    "airport": "Montelibano Airport",
    "latitude": 7.97174,
    "longitude": -75.4325
  },
  "SKMR": {
    "airport": "Los Garzones Airport",
    "latitude": 8.82374,
    "longitude": -75.8258
  },
  "SKPQ": {
    "airport": "Captain German Olano Moreno Air Base",
    "latitude": 5.48361,
    "longitude": -74.6574
  },
  "SKBO": {
    "airport": "El Dorado International Airport",
    "latitude": 4.70159,
    "longitude": -74.1469
  },
  "SKBM": {
    "airport": "Barranco Minas Airport",
    "latitude": 3.48333,
    "longitude": -69.8
  },
  "SKPD": {
    "airport": "Obando Airport",
    "latitude": 3.85353,
    "longitude": -67.9062
  },
  "SKMF": {
    "airport": "Miraflores Airport",
    "latitude": 1.35,
    "longitude": -71.9444
  },
  "SKSJ": {
    "airport": "Jorge Enrique Gonzalez Torres Airport",
    "latitude": 2.57969,
    "longitude": -72.6394
  },
  "SKNV": {
    "airport": "Benito Salas Airport",
    "latitude": 2.95015,
    "longitude": -75.294
  },
  "SKPI": {
    "airport": "Contador Airport",
    "latitude": 1.85777,
    "longitude": -76.0857
  },
  "SKLM": {
    "airport": "Jorge Isaacs Airport (La Mina Airport)",
    "latitude": 11.2325,
    "longitude": -72.4901
  },
  "SKRH": {
    "airport": "Almirante Padilla Airport",
    "latitude": 11.5262,
    "longitude": -72.926
  },
  "SKBC": {
    "airport": "Las Flores Airport",
    "latitude": 9.04554,
    "longitude": -73.9749
  },
  "SKPL": {
    "airport": "Plato Airport",
    "latitude": 9.8,
    "longitude": -74.7833
  },
  "SKSM": {
    "airport": "Simon Bolivar International Airport",
    "latitude": 11.1196,
    "longitude": -74.2306
  },
  "SKAP": {
    "airport": "Captain Luis F. Gomez Nino Air Base",
    "latitude": 4.07607,
    "longitude": -73.5627
  },
  "SKCI": {
    "airport": "Carimagua Airport",
    "latitude": 4.56417,
    "longitude": -71.3364
  },
  "SVWX": {
    "airport": "El Recreo Airport",
    "latitude": 2,
    "longitude": -74.1333
  },
  "SKNA": {
    "airport": "La Macarena Airport",
    "latitude": 2.1736,
    "longitude": -73.7862
  },
  "SKUB": {
    "airport": "Uribe Airport",
    "latitude": 3.21667,
    "longitude": -74.4
  },
  "SKVV": {
    "airport": "La Vanguardia Airport",
    "latitude": 4.16787,
    "longitude": -73.6138
  },
  "SKEH": {
    "airport": "El Charco Airport",
    "latitude": 2.44944,
    "longitude": -78.0942
  },
  "SKIP": {
    "airport": "San Luis Airport",
    "latitude": 0.861925,
    "longitude": -77.6718
  },
  "SKPS": {
    "airport": "Antonio Narino Airport",
    "latitude": 1.39625,
    "longitude": -77.2915
  },
  "SKCO": {
    "airport": "La Florida Airport",
    "latitude": 1.81442,
    "longitude": -78.7492
  },
  "SKCC": {
    "airport": "Camilo Daza International Airport",
    "latitude": 7.92757,
    "longitude": -72.5115
  },
  "SKOC": {
    "airport": "Aguas Claras Airport",
    "latitude": 8.31506,
    "longitude": -73.3583
  },
  "SKTB": {
    "airport": "Tibu Airport",
    "latitude": 8.63152,
    "longitude": -72.7304
  },
  "SKLG": {
    "airport": "Caucaya Airport",
    "latitude": -0.182278,
    "longitude": -74.7708
  },
  "SKAS": {
    "airport": "Tres de Mayo Airport",
    "latitude": 0.505228,
    "longitude": -76.5008
  },
  "SKVG": {
    "airport": "Villa Garzon Airport",
    "latitude": 0.978767,
    "longitude": -76.6056
  },
  "SKAR": {
    "airport": "El Eden International Airport",
    "latitude": 4.45278,
    "longitude": -75.7664
  },
  "SKPE": {
    "airport": "Matecana International Airport",
    "latitude": 4.81267,
    "longitude": -75.7395
  },
  "SKSP": {
    "airport": "Gustavo Rojas Pinilla International Airport",
    "latitude": 12.5836,
    "longitude": -81.7112
  },
  "SKPV": {
    "airport": "El Embrujo Airport",
    "latitude": 13.3569,
    "longitude": -81.3583
  },
  "SKBG": {
    "airport": "Palonegro International Airport",
    "latitude": 7.1265,
    "longitude": -73.1848
  },
  "SKCM": {
    "airport": "Cimitarra Airport",
    "latitude": 6.367,
    "longitude": -73.967
  },
  "SKEJ": {
    "airport": "Yariguies Airport",
    "latitude": 7.02433,
    "longitude": -73.8068
  },
  "SKRU": {
    "airport": "Las Cruces Airport",
    "latitude": 7.38322,
    "longitude": -73.5054
  },
  "SKCV": {
    "airport": "Covenas Airport",
    "latitude": 9.40092,
    "longitude": -75.6913
  },
  "SKCZ": {
    "airport": "Las Brujas Airport",
    "latitude": 9.33274,
    "longitude": -75.2856
  },
  "SKTL": {
    "airport": "Golfo de Morrosquillo Airport",
    "latitude": 9.50945,
    "longitude": -75.5854
  },
  "SKHA": {
    "airport": "General Navas Pardo Airport",
    "latitude": 3.717,
    "longitude": -75.467
  },
  "SKGI": {
    "airport": "Santiago Vila Airport",
    "latitude": 4.27624,
    "longitude": -74.7967
  },
  "SKIB": {
    "airport": "Perales Airport",
    "latitude": 4.42161,
    "longitude": -75.1333
  },
  "SKQU": {
    "airport": "Mariquita Airport",
    "latitude": 5.21256,
    "longitude": -74.8836
  },
  "SKBU": {
    "airport": "Gerardo Tobar Lopez Airport",
    "latitude": 3.81963,
    "longitude": -76.9898
  },
  "SKCL": {
    "airport": "Alfonso Bonilla Aragon International Airport",
    "latitude": 3.54322,
    "longitude": -76.3816
  },
  "SKGO": {
    "airport": "Santa Ana Airport",
    "latitude": 4.75818,
    "longitude": -75.9557
  },
  "SKUL": {
    "airport": "Heriberto Gil Martinez",
    "latitude": 4.08836,
    "longitude": -76.2351
  },
  "SKCR": {
    "airport": "Caruru Airport",
    "latitude": 1.0136,
    "longitude": -71.2961
  },
  "SKMU": {
    "airport": "Fabio Alberto Leon Bentley Airport",
    "latitude": 1.25366,
    "longitude": -70.2339
  },
  "SKGA": {
    "airport": "Las Gaviotas Airport",
    "latitude": 4.54972,
    "longitude": -70.925
  },
  "SKIM": {
    "airport": "La Primavera Airport",
    "latitude": 3.73333,
    "longitude": -76.2167
  },
  "SKPC": {
    "airport": "German Olano Airport",
    "latitude": 6.18472,
    "longitude": -67.4932
  },
  "SKSL": {
    "airport": "Santa Rosalia Airport",
    "latitude": 5.1309,
    "longitude": -70.8682
  },
  "MRAN": {
    "airport": "La Fortuna Airport",
    "latitude": 10.478,
    "longitude": -84.6345
  },
  "MRLC": {
    "airport": "Los Chiles Airport",
    "latitude": 11.0353,
    "longitude": -84.7061
  },
  "MRRF": {
    "airport": "Rio Frio Airport",
    "latitude": 10.3274,
    "longitude": -83.8876
  },
  "MROC": {
    "airport": "Juan Santamaria International Airport",
    "latitude": 9.99386,
    "longitude": -84.2088
  },
  "MRUP": {
    "airport": "Upala Airport",
    "latitude": 10.8922,
    "longitude": -85.0162
  },
  "MRMJ": {
    "airport": "Canas Mojica Airport",
    "latitude": 10.4307,
    "longitude": -85.1746
  },
  "MRLB": {
    "airport": "Daniel Oduber Quiros International Airport",
    "latitude": 10.5933,
    "longitude": -85.5444
  },
  "MRNC": {
    "airport": "Nicoya Guanacaste Airport",
    "latitude": 10.1394,
    "longitude": -85.4458
  },
  "MRNS": {
    "airport": "Nosara Airport",
    "latitude": 9.97649,
    "longitude": -85.653
  },
  "MRIA": {
    "airport": "Punta Islita Airport",
    "latitude": 9.85611,
    "longitude": -85.3708
  },
  "MRCR": {
    "airport": "Carrillo Airport (Playa Samara/Carrillo Airport)",
    "latitude": 9.87051,
    "longitude": -85.4814
  },
  "MRTM": {
    "airport": "Tamarindo Airport",
    "latitude": 10.3135,
    "longitude": -85.8155
  },
  "MRBC": {
    "airport": "Barra del Colorado Airport",
    "latitude": 10.7687,
    "longitude": -83.5856
  },
  "MRGP": {
    "airport": "Guapiles Airport",
    "latitude": 10.2172,
    "longitude": -83.797
  },
  "MRLM": {
    "airport": "Limon International Airport",
    "latitude": 9.95796,
    "longitude": -83.022
  },
  "MRBT": {
    "airport": "Tortuguero Airport (Barra de Tortuguero Airport)",
    "latitude": 10.42,
    "longitude": -83.6095
  },
  "MRBA": {
    "airport": "Buenos Aires Airport",
    "latitude": 9.16395,
    "longitude": -83.3302
  },
  "MRDK": {
    "airport": "Drake Bay Airport",
    "latitude": 8.71889,
    "longitude": -83.6417
  },
  "MRGF": {
    "airport": "Golfito Airport",
    "latitude": 8.65401,
    "longitude": -83.1822
  },
  "MRCH": {
    "airport": "Chacarita Airport",
    "latitude": 9.98141,
    "longitude": -84.7727
  },
  "MRCC": {
    "airport": "Coto 47 Airport",
    "latitude": 8.60156,
    "longitude": -82.9686
  },
  "MRPJ": {
    "airport": "Puerto Jimenez Airport",
    "latitude": 8.53333,
    "longitude": -83.3
  },
  "MRPM": {
    "airport": "Palmar Sur Airport",
    "latitude": 8.95103,
    "longitude": -83.4686
  },
  "MRTR": {
    "airport": "Tambor Airport",
    "latitude": 9.73852,
    "longitude": -85.0138
  },
  "MRSV": {
    "airport": "San Vito de Java Airport",
    "latitude": 8.82611,
    "longitude": -82.9589
  },
  "MRQP": {
    "airport": "Quepos La Managua Airport",
    "latitude": 9.44316,
    "longitude": -84.1298
  },
  "MRSI": {
    "airport": "San Isidro de El General Airport",
    "latitude": 9.34861,
    "longitude": -83.7125
  },
  "MRPV": {
    "airport": "Tobias Bolanos International Airport",
    "latitude": 9.95705,
    "longitude": -84.1398
  },
  "MUPB": {
    "airport": "Playa Baracoa Airport",
    "latitude": 23.0328,
    "longitude": -82.5794
  },
  "MUCM": {
    "airport": "Ignacio Agramonte International Airport",
    "latitude": 21.4203,
    "longitude": -77.8475
  },
  "MUCA": {
    "airport": "Maximo Gomez  Airport",
    "latitude": 22.0271,
    "longitude": -78.7896
  },
  "MUCC": {
    "airport": "Jardines del Rey Airport",
    "latitude": 22.461,
    "longitude": -78.3284
  },
  "MUCF": {
    "airport": "Jaime Gonzalez Airport",
    "latitude": 22.15,
    "longitude": -80.4142
  },
  "MUBY": {
    "airport": "Carlos Manuel de Cespedes Airport",
    "latitude": 20.3964,
    "longitude": -76.6214
  },
  "MUMZ": {
    "airport": "Sierra Maestra Airport",
    "latitude": 20.2881,
    "longitude": -77.0892
  },
  "MUBA": {
    "airport": "Gustavo Rizo Airport",
    "latitude": 20.3653,
    "longitude": -74.5062
  },
  "MUGT": {
    "airport": "Mariana Grajales Airport",
    "latitude": 20.0853,
    "longitude": -75.1583
  },
  "MUGM": {
    "airport": "Guantanamo Bay Naval Base",
    "latitude": 19.9065,
    "longitude": -75.2071
  },
  "MUHG": {
    "airport": "Frank Pais Airport",
    "latitude": 20.7856,
    "longitude": -76.3151
  },
  "MUMO": {
    "airport": "Orestes Acosta Airport",
    "latitude": 20.6539,
    "longitude": -74.9222
  },
  "MUCL": {
    "airport": "Vilo Acuna Airport",
    "latitude": 21.6165,
    "longitude": -81.546
  },
  "MUNG": {
    "airport": "Rafael Cabrera Mustelier Airport",
    "latitude": 21.8347,
    "longitude": -82.7838
  },
  "MUSN": {
    "airport": "Siguanea Airport",
    "latitude": 21.6425,
    "longitude": -82.9551
  },
  "MUHA": {
    "airport": "Jose Marti International Airport",
    "latitude": 22.9892,
    "longitude": -82.4091
  },
  "MUVT": {
    "airport": "Hermanos Ameijeiras Airport",
    "latitude": 20.9876,
    "longitude": -76.9358
  },
  "MUVR": {
    "airport": "Juan Gualberto Gomez Airport",
    "latitude": 23.0344,
    "longitude": -81.4353
  },
  "MUKW": {
    "airport": "Kawama Airport",
    "latitude": 23.124,
    "longitude": -81.3016
  },
  "MULM": {
    "airport": "La Coloma Airport",
    "latitude": 22.3361,
    "longitude": -83.6419
  },
  "MUSJ": {
    "airport": "San Julian Air Base",
    "latitude": 22.0953,
    "longitude": -84.152
  },
  "MUTD": {
    "airport": "Alberto Delgado Airport",
    "latitude": 21.7883,
    "longitude": -79.9972
  },
  "MUSS": {
    "airport": "Sancti Spiritus Airport",
    "latitude": 21.9704,
    "longitude": -79.4427
  },
  "MUCU": {
    "airport": "Antonio Maceo International Airport",
    "latitude": 19.9698,
    "longitude": -75.8354
  },
  "MUBR": {
    "airport": "Las Brujas Airport",
    "latitude": 22.6213,
    "longitude": -79.1472
  },
  "MUSC": {
    "airport": "Abel Santamaria Airport",
    "latitude": 22.4922,
    "longitude": -79.9436
  },
  "GVBA": {
    "airport": "Aristides Pereira International Airport (Rabil Airport)",
    "latitude": 16.1365,
    "longitude": -22.8889
  },
  "GVBR": {
    "airport": "Esperadinha Airport",
    "latitude": 14.8643,
    "longitude": -24.746
  },
  "GVMA": {
    "airport": "Maio Airport",
    "latitude": 15.1559,
    "longitude": -23.2137
  },
  "GVNP": {
    "airport": "Nelson Mandela International Airport",
    "latitude": 14.9245,
    "longitude": -23.4935
  },
  "GVAN": {
    "airport": "Agostinho Neto Airport",
    "latitude": 17.2028,
    "longitude": -25.0906
  },
  "GVSN": {
    "airport": "Preguica Airport",
    "latitude": 16.5884,
    "longitude": -24.2847
  },
  "GVAC": {
    "airport": "Amilcar Cabral International Airport",
    "latitude": 16.7414,
    "longitude": -22.9494
  },
  "GVMT": {
    "airport": "Mosteiros Airport",
    "latitude": 15.045,
    "longitude": -24.3392
  },
  "GVSF": {
    "airport": "Sao Filipe Airport",
    "latitude": 14.885,
    "longitude": -24.48
  },
  "GVSV": {
    "airport": "Cesaria Evora Airport",
    "latitude": 16.8332,
    "longitude": -25.0553
  },
  "TNCC": {
    "airport": "Curacao International Airport (Hato Int'l Airport)",
    "latitude": 12.1889,
    "longitude": -68.9598
  },
  "YPXM": {
    "airport": "Christmas Island Airport",
    "latitude": -10.4506,
    "longitude": 105.69
  },
  "LCGK": {
    "airport": "Gecitkale Air Base",
    "latitude": 35.2359,
    "longitude": 33.7244
  },
  "LCLK": {
    "airport": "Larnaca International Airport",
    "latitude": 34.8751,
    "longitude": 33.6249
  },
  "LCEN": {
    "airport": "Ercan International Airport",
    "latitude": 35.1547,
    "longitude": 33.4961
  },
  "LCRA": {
    "airport": "RAF Akrotiri",
    "latitude": 34.5904,
    "longitude": 32.9879
  },
  "LCPH": {
    "airport": "Paphos International Airport",
    "latitude": 34.718,
    "longitude": 32.4857
  },
  "LKCS": {
    "airport": "Ceske Budejovice Airport (Plana Airport)",
    "latitude": 48.9464,
    "longitude": 14.4275
  },
  "LKTB": {
    "airport": "Brno-Turany Airport",
    "latitude": 49.1513,
    "longitude": 16.6944
  },
  "LKKV": {
    "airport": "Karlovy Vary Airport",
    "latitude": 50.203,
    "longitude": 12.915
  },
  "LKMR": {
    "airport": "Marianske Lazne Airport",
    "latitude": 49.9228,
    "longitude": 12.7247
  },
  "LKMT": {
    "airport": "Leos Janacek Airport",
    "latitude": 49.6963,
    "longitude": 18.1111
  },
  "LKZA": {
    "airport": "Zabreh Airport",
    "latitude": 49.9283,
    "longitude": 18.0783
  },
  "LKOL": {
    "airport": "Olomouc Airport (Neredin Airport)",
    "latitude": 49.5878,
    "longitude": 17.2108
  },
  "LKPO": {
    "airport": "Prerov Airport",
    "latitude": 49.4258,
    "longitude": 17.4047
  },
  "LKPD": {
    "airport": "Pardubice Airport",
    "latitude": 50.0134,
    "longitude": 15.7386
  },
  "LKPR": {
    "airport": "Vaclav Havel Airport Prague",
    "latitude": 50.1008,
    "longitude": 14.26
  },
  "LKVO": {
    "airport": "Vodochody Airport",
    "latitude": 50.2166,
    "longitude": 14.3958
  },
  "LKHO": {
    "airport": "Holesov Airport",
    "latitude": 49.3144,
    "longitude": 17.5689
  },
  "LKKU": {
    "airport": "Kunovice Airport",
    "latitude": 49.0294,
    "longitude": 17.4397
  },
  "EDNY": {
    "airport": "Friedrichshafen Airport (Bodensee Airport)",
    "latitude": 47.6713,
    "longitude": 9.51149
  },
  "EDSB": {
    "airport": "Karlsruhe/Baden-Baden Airport",
    "latitude": 48.7794,
    "longitude": 8.0805
  },
  "ETIE": {
    "airport": "Heidelberg Airport",
    "latitude": 49.3924,
    "longitude": 8.65193
  },
  "EDTL": {
    "airport": "Flughafen Lahr (Lahr Airport)",
    "latitude": 48.3693,
    "longitude": 7.82772
  },
  "EDFM": {
    "airport": "Mannheim City Airport",
    "latitude": 49.4731,
    "longitude": 8.51417
  },
  "EDDS": {
    "airport": "Stuttgart Airport",
    "latitude": 48.6899,
    "longitude": 9.22196
  },
  "EDMA": {
    "airport": "Augsburg Airport",
    "latitude": 48.4253,
    "longitude": 10.9317
  },
  "EDQD": {
    "airport": "Bindlacher Berg Airport",
    "latitude": 49.985,
    "longitude": 11.64
  },
  "ETSF": {
    "airport": "Furstenfeldbruck Air Base",
    "latitude": 48.2056,
    "longitude": 11.2669
  },
  "EDJA": {
    "airport": "Memmingen Airport",
    "latitude": 47.9888,
    "longitude": 10.2395
  },
  "EDQG": {
    "airport": "Giebelstadt Airport",
    "latitude": 49.6481,
    "longitude": 9.96639
  },
  "EDQM": {
    "airport": "Hof-Plauen Airport",
    "latitude": 50.2886,
    "longitude": 11.8564
  },
  "ETSI": {
    "airport": "Ingolstadt Manching Airport",
    "latitude": 48.7157,
    "longitude": 11.534
  },
  "ETIK": {
    "airport": "Illesheim Army Airfield",
    "latitude": 49.4739,
    "longitude": 10.3881
  },
  "ETIN": {
    "airport": "Kitzingen Airport",
    "latitude": 49.7431,
    "longitude": 10.2006
  },
  "EDDM": {
    "airport": "Munich Airport",
    "latitude": 48.3538,
    "longitude": 11.7861
  },
  "EDDN": {
    "airport": "Nuremberg Airport",
    "latitude": 49.4987,
    "longitude": 11.0781
  },
  "EDMO": {
    "airport": "Oberpfaffenhofen Airport",
    "latitude": 48.0814,
    "longitude": 11.2831
  },
  "EDMS": {
    "airport": "Straubing Wallmuhle Airport",
    "latitude": 48.9008,
    "longitude": 12.5167
  },
  "EDQE": {
    "airport": "Burg Feuerstein Airport",
    "latitude": 49.7942,
    "longitude": 11.1336
  },
  "EDDT": {
    "airport": "Berlin Tegel Airport",
    "latitude": 52.5597,
    "longitude": 13.2877
  },
  "EDDB": {
    "airport": "Berlin Brandenburg Airport",
    "latitude": 52.3514,
    "longitude": 13.4939
  },
  "EDCD": {
    "airport": "Cottbus-Drewitz Airport",
    "latitude": 51.8894,
    "longitude": 14.5319
  },
  "EDAY": {
    "airport": "Strausberg",
    "latitude": 52.5799,
    "longitude": 13.9156
  },
  "EDDW": {
    "airport": "Bremen Airport",
    "latitude": 53.0475,
    "longitude": 8.78667
  },
  "EDWB": {
    "airport": "Bremerhaven Airport",
    "latitude": 53.5069,
    "longitude": 8.57278
  },
  "EDDH": {
    "airport": "Hamburg Airport",
    "latitude": 53.6304,
    "longitude": 9.98823
  },
  "EDHI": {
    "airport": "Hamburg Finkenwerder Airport",
    "latitude": 53.5353,
    "longitude": 9.83556
  },
  "EDDF": {
    "airport": "Frankfurt Airport",
    "latitude": 50.0333,
    "longitude": 8.57056
  },
  "ETHF": {
    "airport": "Fritzlar Air Base",
    "latitude": 51.1146,
    "longitude": 9.286
  },
  "EDVK": {
    "airport": "Kassel Airport",
    "latitude": 51.4173,
    "longitude": 9.38497
  },
  "ETOU": {
    "airport": "Wiesbaden Army Airfield",
    "latitude": 50.0498,
    "longitude": 8.3254
  },
  "EDBH": {
    "airport": "Stralsund-Barth Airport",
    "latitude": 54.3383,
    "longitude": 12.7105
  },
  "EDBN": {
    "airport": "Neubrandenburg Airport",
    "latitude": 53.6022,
    "longitude": 13.306
  },
  "EDCG": {
    "airport": "Rugen Airport (Guttin Airfield)",
    "latitude": 54.3833,
    "longitude": 13.3256
  },
  "EDAH": {
    "airport": "Heringsdorf Airport",
    "latitude": 53.8787,
    "longitude": 14.1523
  },
  "EDCP": {
    "airport": "Peenemunde Airfield",
    "latitude": 54.1578,
    "longitude": 13.7744
  },
  "EDAX": {
    "airport": "Rechlin-Larz Airfield",
    "latitude": 53.3064,
    "longitude": 12.7522
  },
  "ETNL": {
    "airport": "Rostock-Laage Airport",
    "latitude": 53.9182,
    "longitude": 12.2783
  },
  "EDOP": {
    "airport": "Schwerin-Parchim International Airport",
    "latitude": 53.427,
    "longitude": 11.7834
  },
  "EDWG": {
    "airport": "Wangerooge Airport",
    "latitude": 53.7828,
    "longitude": 7.91389
  },
  "EDWR": {
    "airport": "Borkum Airfield",
    "latitude": 53.5964,
    "longitude": 6.70917
  },
  "EDWZ": {
    "airport": "Baltrum Airport",
    "latitude": 53.7247,
    "longitude": 7.37333
  },
  "EDVE": {
    "airport": "Braunschweig-Wolfsburg Airport",
    "latitude": 52.3192,
    "longitude": 10.5561
  },
  "EDWE": {
    "airport": "Emden Airport",
    "latitude": 53.3911,
    "longitude": 7.2275
  },
  "ETMN": {
    "airport": "Nordholz Naval Airbase",
    "latitude": 53.7677,
    "longitude": 8.6585
  },
  "EDDV": {
    "airport": "Hannover Airport",
    "latitude": 52.4611,
    "longitude": 9.68508
  },
  "EDWJ": {
    "airport": "Juist Airport",
    "latitude": 53.6811,
    "longitude": 7.05583
  },
  "EDWL": {
    "airport": "Langeoog Airport",
    "latitude": 53.7425,
    "longitude": 7.49778
  },
  "EDWS": {
    "airport": "Norddeich Airport",
    "latitude": 53.6331,
    "longitude": 7.19028
  },
  "EDWY": {
    "airport": "Norderney Airport",
    "latitude": 53.7069,
    "longitude": 7.23
  },
  "EDWU": {
    "airport": "Varrelbusch Airport",
    "latitude": 52.9083,
    "longitude": 8.04056
  },
  "EDWI": {
    "airport": "JadeWeserAirport",
    "latitude": 53.5022,
    "longitude": 8.05222
  },
  "EDWD": {
    "airport": "Lemwerder Airport",
    "latitude": 53.1447,
    "longitude": 8.62444
  },
  "EDKA": {
    "airport": "Merzbruck Airport",
    "latitude": 50.8231,
    "longitude": 6.18639
  },
  "EDLI": {
    "airport": "Bielefeld Airport",
    "latitude": 51.9647,
    "longitude": 8.54444
  },
  "EDDK": {
    "airport": "Cologne Bonn Airport",
    "latitude": 50.8659,
    "longitude": 7.14274
  },
  "EDLD": {
    "airport": "Dinslaken/Schwarze Heide",
    "latitude": 51.616,
    "longitude": 6.861167
  },
  "EDLW": {
    "airport": "Dortmund Airport",
    "latitude": 51.5183,
    "longitude": 7.61224
  },
  "EDDL": {
    "airport": "Dusseldorf Airport",
    "latitude": 51.2895,
    "longitude": 6.76678
  },
  "EDLE": {
    "airport": "Essen/Mulheim Airport",
    "latitude": 51.4023,
    "longitude": 6.93733
  },
  "EDDG": {
    "airport": "Munster Osnabruck International Airport",
    "latitude": 52.1346,
    "longitude": 7.68483
  },
  "ETNG": {
    "airport": "NATO Air Base Geilenkirchen",
    "latitude": 50.9608,
    "longitude": 6.04242
  },
  "ETUO": {
    "airport": "RAF Gutersloh",
    "latitude": 51.9228,
    "longitude": 8.30633
  },
  "EDLN": {
    "airport": "Dusseldorf Monchengladbach Airport",
    "latitude": 51.2303,
    "longitude": 6.50444
  },
  "EDLV": {
    "airport": "Weeze Airport (Niederrhein Airport)",
    "latitude": 51.6024,
    "longitude": 6.14217
  },
  "EDLP": {
    "airport": "Paderborn Lippstadt Airport",
    "latitude": 51.6141,
    "longitude": 8.61632
  },
  "EDGS": {
    "airport": "Siegerland Airport",
    "latitude": 50.7077,
    "longitude": 8.08297
  },
  "EDRB": {
    "airport": "Bitburg Airport",
    "latitude": 49.9453,
    "longitude": 6.565
  },
  "EDFH": {
    "airport": "Frankfurt-Hahn Airport",
    "latitude": 49.9487,
    "longitude": 7.26389
  },
  "ETAR": {
    "airport": "Ramstein Air Base",
    "latitude": 49.4369,
    "longitude": 7.60028
  },
  "ETAD": {
    "airport": "Spangdahlem Air Base",
    "latitude": 49.9727,
    "longitude": 6.6925
  },
  "EDRZ": {
    "airport": "Zweibrucken Airport",
    "latitude": 49.2094,
    "longitude": 7.40056
  },
  "EDDR": {
    "airport": "Saarbrucken Airport",
    "latitude": 49.2146,
    "longitude": 7.10951
  },
  "EDDC": {
    "airport": "Dresden Airport",
    "latitude": 51.1328,
    "longitude": 13.7672
  },
  "EDAU": {
    "airport": "Riesa-Gohlis Airfield",
    "latitude": 51.2936,
    "longitude": 13.3561
  },
  "EDDP": {
    "airport": "Leipzig/Halle Airport",
    "latitude": 51.4239,
    "longitude": 12.2364
  },
  "EDBC": {
    "airport": "Magdeburg-Cochstedt Airport",
    "latitude": 51.8564,
    "longitude": 11.4203
  },
  "EDCK": {
    "airport": "Kothen Airport",
    "latitude": 51.7211,
    "longitude": 11.9528
  },
  "EDAQ": {
    "airport": "Halle-Oppin Airport",
    "latitude": 51.5527,
    "longitude": 12.054
  },
  "EDHN": {
    "airport": "Neumunster Airport",
    "latitude": 54.0794,
    "longitude": 9.94139
  },
  "EDXF": {
    "airport": "Flensburg-Schaferhaus Airport",
    "latitude": 54.7733,
    "longitude": 9.37889
  },
  "EDXW": {
    "airport": "Sylt Airport (Westerland Airport)",
    "latitude": 54.9132,
    "longitude": 8.34047
  },
  "EDXB": {
    "airport": "Heide-Busum Airport",
    "latitude": 54.1533,
    "longitude": 8.90167
  },
  "EDXH": {
    "airport": "Helgoland Airport (Dune Airport)",
    "latitude": 54.1853,
    "longitude": 7.91583
  },
  "EDHB": {
    "airport": "Grube Airport",
    "latitude": 54.244434,
    "longitude": 11.02376
  },
  "EDHE": {
    "airport": "Uetersen Airfield",
    "latitude": 54.244434,
    "longitude": 11.02376
  },
  "EDHK": {
    "airport": "Kiel Airport",
    "latitude": 54.3794,
    "longitude": 10.1453
  },
  "EDHL": {
    "airport": "Lubeck Airport",
    "latitude": 53.8054,
    "longitude": 10.7192
  },
  "EDXY": {
    "airport": "Wyk auf Fohr Airport",
    "latitude": 54.6844,
    "longitude": 8.52833
  },
  "EDXO": {
    "airport": "Sankt Peter-Ording Airport",
    "latitude": 54.3089,
    "longitude": 8.68694
  },
  "EDXJ": {
    "airport": "Husum Schwesing Airport",
    "latitude": 54.51,
    "longitude": 9.13833
  },
  "ETNS": {
    "airport": "Schleswig Air Base",
    "latitude": 54.4593,
    "longitude": 9.51633
  },
  "EDAC": {
    "airport": "Leipzig-Altenburg Airport",
    "latitude": 50.9819,
    "longitude": 12.5064
  },
  "EDGE": {
    "airport": "Eisenach-Kindel Airport",
    "latitude": 50.9916,
    "longitude": 10.4797
  },
  "EDDE": {
    "airport": "Erfurt-Weimar Airport",
    "latitude": 50.9798,
    "longitude": 10.9581
  },
  "HDAS": {
    "airport": "Ali-Sabieh Airport",
    "latitude": 11.1469,
    "longitude": 42.72
  },
  "HDAM": {
    "airport": "Djibouti-Ambouli International Airport",
    "latitude": 11.5473,
    "longitude": 43.1595
  },
  "HDOB": {
    "airport": "Obock Airport",
    "latitude": 11.967,
    "longitude": 43.267
  },
  "HDMO": {
    "airport": "Moucha Airport",
    "latitude": 11.7167,
    "longitude": 43.2
  },
  "HDTJ": {
    "airport": "Tadjoura Airport",
    "latitude": 11.783,
    "longitude": 42.917
  },
  "EKCH": {
    "airport": "Copenhagen Airport",
    "latitude": 55.6179,
    "longitude": 12.656
  },
  "EKRN": {
    "airport": "Bornholm Airport",
    "latitude": 55.0633,
    "longitude": 14.7596
  },
  "EKAH": {
    "airport": "Aarhus Airport",
    "latitude": 56.3,
    "longitude": 10.619
  },
  "EKKA": {
    "airport": "Karup Airport",
    "latitude": 56.2975,
    "longitude": 9.12463
  },
  "EKSV": {
    "airport": "Skive Airport",
    "latitude": 56.5502,
    "longitude": 9.17298
  },
  "EKVJ": {
    "airport": "Stauning Vestjylland Airport",
    "latitude": 55.9901,
    "longitude": 8.35391
  },
  "EKYT": {
    "airport": "Aalborg Airport",
    "latitude": 57.0928,
    "longitude": 9.84924
  },
  "EKLS": {
    "airport": "Laesoe Airport",
    "latitude": 57.2772,
    "longitude": 11.0001
  },
  "EKSN": {
    "airport": "Sindal Airport",
    "latitude": 57.5035,
    "longitude": 10.2294
  },
  "EKTS": {
    "airport": "Thisted Airport",
    "latitude": 57.0688,
    "longitude": 8.70522
  },
  "EKMB": {
    "airport": "Lolland Falster Airport",
    "latitude": 54.6993,
    "longitude": 11.4401
  },
  "EKRK": {
    "airport": "Roskilde Airport",
    "latitude": 55.5856,
    "longitude": 12.1314
  },
  "EKBI": {
    "airport": "Billund Airport",
    "latitude": 55.7403,
    "longitude": 9.15178
  },
  "EKEB": {
    "airport": "Esbjerg Airport",
    "latitude": 55.5259,
    "longitude": 8.5534
  },
  "EKOD": {
    "airport": "Hans Christian Andersen Airport",
    "latitude": 55.4767,
    "longitude": 10.3309
  },
  "EKSB": {
    "airport": "Sonderborg Airport",
    "latitude": 54.9644,
    "longitude": 9.79173
  },
  "EKSP": {
    "airport": "Vojens Airport (Skrydstrup Airport)",
    "latitude": 55.221,
    "longitude": 9.26702
  },
  "TDPD": {
    "airport": "Douglas-Charles Airport",
    "latitude": 15.547,
    "longitude": -61.3
  },
  "TDCF": {
    "airport": "Canefield Airport",
    "latitude": 15.3367,
    "longitude": -61.3922
  },
  "MDBH": {
    "airport": "Maria Montez International Airport",
    "latitude": 18.2515,
    "longitude": -71.1204
  },
  "MDJB": {
    "airport": "La Isabela International Airport (Dr. Joaquin Balaguer Int'l)",
    "latitude": 18.5725,
    "longitude": -69.9856
  },
  "MDPC": {
    "airport": "Punta Cana International Airport",
    "latitude": 18.5674,
    "longitude": -68.3634
  },
  "MDCZ": {
    "airport": "Constanza Airport",
    "latitude": 18.9075,
    "longitude": -70.7219
  },
  "MDSD": {
    "airport": "Las Americas International Airport",
    "latitude": 18.4297,
    "longitude": -69.6689
  },
  "MDCR": {
    "airport": "Cabo Rojo Airport",
    "latitude": 17.929,
    "longitude": -71.6448
  },
  "MDPP": {
    "airport": "Gregorio Luperon International Airport",
    "latitude": 19.7579,
    "longitude": -70.57
  },
  "MDCY": {
    "airport": "Samana El Catey International Airport",
    "latitude": 19.267,
    "longitude": -69.742
  },
  "MDAB": {
    "airport": "Arroyo Barril Airport",
    "latitude": 19.3214,
    "longitude": -69.4959
  },
  "MDST": {
    "airport": "Cibao International Airport",
    "latitude": 19.4061,
    "longitude": -70.6047
  },
  "DAUA": {
    "airport": "Touat-Cheikh Sidi Mohamed Belkebir Airport",
    "latitude": 27.8376,
    "longitude": -0.186414
  },
  "DATM": {
    "airport": "Bordj Mokhtar Airport",
    "latitude": 21.375,
    "longitude": 0.923889
  },
  "DAUT": {
    "airport": "Timimoun Airport",
    "latitude": 29.2371,
    "longitude": 0.276033
  },
  "DAAG": {
    "airport": "Houari Boumediene Airport",
    "latitude": 36.691,
    "longitude": 3.21541
  },
  "DABB": {
    "airport": "Rabah Bitat Airport (Les Salines Airport)",
    "latitude": 36.8222,
    "longitude": 7.80917
  },
  "DABT": {
    "airport": "Mostepha Ben Boulaid Airport",
    "latitude": 35.7521,
    "longitude": 6.30859
  },
  "DAOR": {
    "airport": "Boudghene Ben Ali Lotfi Airport",
    "latitude": 31.6457,
    "longitude": -2.26986
  },
  "DAAE": {
    "airport": "Soummam - Abane Ramdane Airport",
    "latitude": 36.712,
    "longitude": 5.06992
  },
  "DAUB": {
    "airport": "Biskra Airport",
    "latitude": 34.7933,
    "longitude": 5.73823
  },
  "DAOI": {
    "airport": "Chlef International Airport",
    "latitude": 36.2127,
    "longitude": 1.33177
  },
  "DABC": {
    "airport": "Mohamed Boudiaf International Airport",
    "latitude": 36.276,
    "longitude": 6.62039
  },
  "DAAD": {
    "airport": "Bou Saada Airport",
    "latitude": 35.3325,
    "longitude": 4.20639
  },
  "DAOY": {
    "airport": "El Bayadh Airport",
    "latitude": 33.7217,
    "longitude": 1.0925
  },
  "DAUO": {
    "airport": "Guemar Airport",
    "latitude": 33.5114,
    "longitude": 6.77679
  },
  "DAUE": {
    "airport": "El Golea Airport",
    "latitude": 30.5713,
    "longitude": 2.85959
  },
  "DAUG": {
    "airport": "Noumerat - Moufdi Zakaria Airport",
    "latitude": 32.3841,
    "longitude": 3.79411
  },
  "DAAJ": {
    "airport": "Tiska Djanet Airport",
    "latitude": 24.2928,
    "longitude": 9.45244
  },
  "DAUZ": {
    "airport": "In Amenas Airport (Zarzaitine Airport)",
    "latitude": 28.0515,
    "longitude": 9.64291
  },
  "DAAP": {
    "airport": "Takhamalt Airport",
    "latitude": 26.7235,
    "longitude": 8.62265
  },
  "DAAV": {
    "airport": "Jijel Ferhat Abbas Airport",
    "latitude": 36.7951,
    "longitude": 5.87361
  },
  "DAFH": {
    "airport": "Hassi R'Mel Airport (Tilrempt Airport)",
    "latitude": 32.9304,
    "longitude": 3.31154
  },
  "DAUL": {
    "airport": "L'Mekrareg Airport (Laghouat Airport)",
    "latitude": 33.7644,
    "longitude": 2.92834
  },
  "DAOV": {
    "airport": "Ghriss Airport",
    "latitude": 35.2077,
    "longitude": 0.147142
  },
  "DAAY": {
    "airport": "Mecheria Airport",
    "latitude": 33.5359,
    "longitude": -0.242353
  },
  "DAOO": {
    "airport": "Oran Es Senia Airport",
    "latitude": 35.6239,
    "longitude": -0.621183
  },
  "DAOL": {
    "airport": "Oran Tafaraoui Airport",
    "latitude": 35.5424,
    "longitude": -0.532278
  },
  "DAUH": {
    "airport": "Oued Irara-Krim Belkacem Airport",
    "latitude": 31.673,
    "longitude": 6.14044
  },
  "DAUU": {
    "airport": "Ain Beida Airport",
    "latitude": 31.9172,
    "longitude": 5.41278
  },
  "DAUK": {
    "airport": "Sidi Mahdi Airport",
    "latitude": 33.0678,
    "longitude": 6.08867
  },
  "DAAS": {
    "airport": "Ain Arnat Airport",
    "latitude": 36.1781,
    "longitude": 5.32449
  },
  "DAOS": {
    "airport": "Sidi Bel Abbes Airport",
    "latitude": 35.1718,
    "longitude": -0.593275
  },
  "DABP": {
    "airport": "Skikda Airport",
    "latitude": 36.8641,
    "longitude": 6.9516
  },
  "DATG": {
    "airport": "In Guezzam Airport",
    "latitude": 19.567,
    "longitude": 5.75
  },
  "DAUI": {
    "airport": "In Salah Airport",
    "latitude": 27.251,
    "longitude": 2.51202
  },
  "DAAT": {
    "airport": "Aguenar -Hadj Bey Akhamok Airport",
    "latitude": 22.8115,
    "longitude": 5.45108
  },
  "DABS": {
    "airport": "Cheikh Larbi Tebessi Airport",
    "latitude": 35.4316,
    "longitude": 8.12072
  },
  "DAOB": {
    "airport": "Abdelhafid Boussouf Bou Chekif Airport",
    "latitude": 35.3411,
    "longitude": 1.46315
  },
  "DAOF": {
    "airport": "Tindouf Airport",
    "latitude": 27.7004,
    "longitude": -8.1671
  },
  "DAON": {
    "airport": "Zenata - Messali El Hadj Airport",
    "latitude": 35.0167,
    "longitude": -1.45
  },
  "SECU": {
    "airport": "Mariscal Lamar International Airport",
    "latitude": -2.88947,
    "longitude": -78.9844
  },
  "SETU": {
    "airport": "Teniente Coronel Luis a Mantilla International Airport",
    "latitude": 0.809506,
    "longitude": -77.7081
  },
  "SERO": {
    "airport": "Santa Rosa International Airport",
    "latitude": -3.44199,
    "longitude": -79.997
  },
  "SEMH": {
    "airport": "General Manuel Serrano Airport",
    "latitude": -3.2689,
    "longitude": -79.9616
  },
  "SETN": {
    "airport": "Carlos Concha Torres International Airport",
    "latitude": 0.978519,
    "longitude": -79.6266
  },
  "SEGS": {
    "airport": "Seymour Airport",
    "latitude": -0.453758,
    "longitude": -90.2659
  },
  "SEII": {
    "airport": "General Villamil Airport",
    "latitude": -0.942628,
    "longitude": -90.953
  },
  "SEST": {
    "airport": "San Cristobal Airport",
    "latitude": -0.910206,
    "longitude": -89.6174
  },
  "SEGU": {
    "airport": "Jose Joaquin de Olmedo International Airport",
    "latitude": -2.15742,
    "longitude": -79.8836
  },
  "SETM": {
    "airport": "Ciudad de Catamayo Airport",
    "latitude": -3.99589,
    "longitude": -79.3719
  },
  "SEMA": {
    "airport": "Jose Maria Velasco Ibarra Airport",
    "latitude": -4.37823,
    "longitude": -79.941
  },
  "SESV": {
    "airport": "Los Perales Airport",
    "latitude": -0.608111,
    "longitude": -80.4027
  },
  "SEJI": {
    "airport": "Jipijapa Airport",
    "latitude": -1,
    "longitude": -80.6667
  },
  "SEMT": {
    "airport": "Eloy Alfaro International Airport",
    "latitude": -0.946078,
    "longitude": -80.6788
  },
  "SEPV": {
    "airport": "Reales Tamarindos Airport",
    "latitude": -1.04165,
    "longitude": -80.4722
  },
  "SESC": {
    "airport": "Sucua Airport",
    "latitude": -2.483,
    "longitude": -78.167
  },
  "SETH": {
    "airport": "Taisha Airport",
    "latitude": -2.38167,
    "longitude": -77.5028
  },
  "SEMC": {
    "airport": "Edmundo Carvajal Airport",
    "latitude": -2.29917,
    "longitude": -78.1208
  },
  "SEJD": {
    "airport": "Jumandy Airport",
    "latitude": -1.05972,
    "longitude": -77.5833
  },
  "SECO": {
    "airport": "Francisco de Orellana Airport",
    "latitude": -0.462886,
    "longitude": -76.9868
  },
  "SETI": {
    "airport": "Tiputini Airport",
    "latitude": -0.776111,
    "longitude": -75.5264
  },
  "SESM": {
    "airport": "Rio Amazonas Airport",
    "latitude": -1.50524,
    "longitude": -78.0627
  },
  "SEQM": {
    "airport": "Mariscal Sucre International Airport",
    "latitude": -0.129167,
    "longitude": -78.3575
  },
  "SESA": {
    "airport": "General Ulpiano Paez Airport",
    "latitude": -2.20499,
    "longitude": -80.9889
  },
  "SENL": {
    "airport": "Lago Agrio Airport",
    "latitude": 0.093056,
    "longitude": -76.8675
  },
  "SEPT": {
    "airport": "Putumayo Airport",
    "latitude": 0.115949,
    "longitude": -75.8502
  },
  "SETR": {
    "airport": "Tarapoa Airport",
    "latitude": -0.122956,
    "longitude": -76.3378
  },
  "SEAM": {
    "airport": "Chachoan Airport",
    "latitude": -1.21207,
    "longitude": -78.5746
  },
  "EETN": {
    "airport": "Tallinn Airport (Lennart Meri Tallinn Airport)",
    "latitude": 59.4133,
    "longitude": 24.8328
  },
  "EEKA": {
    "airport": "Kardla Airport",
    "latitude": 58.9908,
    "longitude": 22.8307
  },
  "EEPU": {
    "airport": "Parnu Airport",
    "latitude": 58.419,
    "longitude": 24.4728
  },
  "EEKE": {
    "airport": "Kuressaare Airport",
    "latitude": 58.2299,
    "longitude": 22.5095
  },
  "EETU": {
    "airport": "Tartu Airport",
    "latitude": 58.3075,
    "longitude": 26.6904
  },
  "HEGN": {
    "airport": "Hurghada International Airport",
    "latitude": 27.1783,
    "longitude": 33.7994
  },
  "HEMA": {
    "airport": "Marsa Alam International Airport",
    "latitude": 25.5571,
    "longitude": 34.5837
  },
  "HEAX": {
    "airport": "El Nouzha Airport",
    "latitude": 31.1839,
    "longitude": 29.9489
  },
  "HEBA": {
    "airport": "Borg El Arab Airport",
    "latitude": 30.9177,
    "longitude": 29.6964
  },
  "HE25": {
    "airport": "El Minya Airport",
    "latitude": 28.1013,
    "longitude": 30.7303
  },
  "HECA": {
    "airport": "Cairo International Airport",
    "latitude": 30.1219,
    "longitude": 31.4056
  },
  "HELX": {
    "airport": "Luxor International Airport",
    "latitude": 25.671,
    "longitude": 32.7066
  },
  "HEDK": {
    "airport": "Dakhla Oasis Airport",
    "latitude": 25.4116,
    "longitude": 29.0031
  },
  "HEOW": {
    "airport": "Sharq Al-Owainat Airport",
    "latitude": 22.5857,
    "longitude": 28.7166
  },
  "HEKG": {
    "airport": "El Kharga Airport",
    "latitude": 25.4736,
    "longitude": 30.5907
  },
  "HEBL": {
    "airport": "Abu Simbel Airport",
    "latitude": 22.376,
    "longitude": 31.6117
  },
  "HESN": {
    "airport": "Aswan International Airport",
    "latitude": 23.9644,
    "longitude": 32.82
  },
  "HEAT": {
    "airport": "Assiut Airport",
    "latitude": 27.0465,
    "longitude": 31.012
  },
  "HEPS": {
    "airport": "Port Said Airport",
    "latitude": 31.2794,
    "longitude": 32.24
  },
  "HETR": {
    "airport": "El Tor Airport",
    "latitude": 28.209,
    "longitude": 33.6455
  },
  "HESC": {
    "airport": "St. Catherine International Airport",
    "latitude": 28.6853,
    "longitude": 34.0625
  },
  "HESH": {
    "airport": "Sharm el-Sheikh International Airport",
    "latitude": 27.9773,
    "longitude": 34.395
  },
  "HETB": {
    "airport": "Taba International Airport",
    "latitude": 29.5878,
    "longitude": 34.7781
  },
  "HEAL": {
    "airport": "Al Alamain International Airport",
    "latitude": 30.9245,
    "longitude": 28.4614
  },
  "HEMM": {
    "airport": "Marsa Matruh International Airport",
    "latitude": 31.3254,
    "longitude": 27.2217
  },
  "HEAR": {
    "airport": "El Arish International Airport",
    "latitude": 31.0733,
    "longitude": 33.8358
  },
  "HEMK": {
    "airport": "Sohag International Airport",
    "latitude": 26.3428,
    "longitude": 31.7428
  },
  "HHAS": {
    "airport": "Asmara International Airport",
    "latitude": 15.2919,
    "longitude": 38.9107
  },
  "HHSB": {
    "airport": "Assab International Airport",
    "latitude": 13.0718,
    "longitude": 42.645
  },
  "HHTS": {
    "airport": "Teseney Airport",
    "latitude": 15.1043,
    "longitude": 36.6817
  },
  "HHMS": {
    "airport": "Massawa International Airport",
    "latitude": 15.67,
    "longitude": 39.3701
  },
  "LEMG": {
    "airport": "Malaga Airport",
    "latitude": 36.6749,
    "longitude": -4.49911
  },
  "LEGR": {
    "airport": "Federico Garcia Lorca Airport (Granada Jaen Airport)",
    "latitude": 37.1887,
    "longitude": -3.77736
  },
  "LEAM": {
    "airport": "Almeria Airport",
    "latitude": 36.8439,
    "longitude": -2.3701
  },
  "LEBA": {
    "airport": "Cordoba Airport",
    "latitude": 37.842,
    "longitude": -4.84888
  },
  "LEMO": {
    "airport": "Moron Air Base",
    "latitude": 37.1749,
    "longitude": -5.61594
  },
  "LERT": {
    "airport": "Naval Station Rota",
    "latitude": 36.6452,
    "longitude": -6.34946
  },
  "LEZL": {
    "airport": "Seville Airport",
    "latitude": 37.418,
    "longitude": -5.89311
  },
  "LEJR": {
    "airport": "Jerez Airport (La Parra Airport)",
    "latitude": 36.7446,
    "longitude": -6.06011
  },
  "LEHC": {
    "airport": "Huesca-Pirineos Airport",
    "latitude": 42.0761,
    "longitude": -0.316667
  },
  "LETL": {
    "airport": "Teruel Airport",
    "latitude": 40.403,
    "longitude": -1.2183
  },
  "LEZG": {
    "airport": "Zaragoza Airport",
    "latitude": 41.6662,
    "longitude": -1.04155
  },
  "LEAS": {
    "airport": "Asturias Airport (Oviedo Airport)",
    "latitude": 43.5636,
    "longitude": -6.03462
  },
  "GCRR": {
    "airport": "Lanzarote Airport",
    "latitude": 28.9455,
    "longitude": -13.6052
  },
  "GCFV": {
    "airport": "Fuerteventura Airport",
    "latitude": 28.4527,
    "longitude": -13.8638
  },
  "GCGM": {
    "airport": "La Gomera Airport",
    "latitude": 28.0296,
    "longitude": -17.2146
  },
  "GCLP": {
    "airport": "Gran Canaria Airport",
    "latitude": 27.9319,
    "longitude": -15.3866
  },
  "GCLA": {
    "airport": "La Palma Airport",
    "latitude": 28.6265,
    "longitude": -17.7556
  },
  "GCXO": {
    "airport": "Tenerife North Airport",
    "latitude": 28.4847,
    "longitude": -16.3439
  },
  "GCTS": {
    "airport": "Tenerife South Airport",
    "latitude": 28.046,
    "longitude": -16.5728
  },
  "GCHI": {
    "airport": "El Hierro Airport",
    "latitude": 27.8148,
    "longitude": -17.8871
  },
  "LEXJ": {
    "airport": "Santander Airport",
    "latitude": 43.4271,
    "longitude": -3.82001
  },
  "LERL": {
    "airport": "Ciudad Real Central Airport",
    "latitude": 38.8564,
    "longitude": -3.97
  },
  "LELN": {
    "airport": "Leon Airport",
    "latitude": 42.589,
    "longitude": -5.65556
  },
  "LEBG": {
    "airport": "Burgos Airport",
    "latitude": 42.3576,
    "longitude": -3.62076
  },
  "LESA": {
    "airport": "Salamanca Airport",
    "latitude": 40.9521,
    "longitude": -5.50199
  },
  "LEVD": {
    "airport": "Valladolid Airport",
    "latitude": 41.7061,
    "longitude": -4.85194
  },
  "LEAB": {
    "airport": "Albacete Airport",
    "latitude": 38.9485,
    "longitude": -1.86352
  },
  "LEBL": {
    "airport": "Barcelona El Prat Airport",
    "latitude": 41.2971,
    "longitude": 2.07846
  },
  "LEGE": {
    "airport": "Girona-Costa Brava Airport",
    "latitude": 41.901,
    "longitude": 2.76055
  },
  "LEDA": {
    "airport": "Lleida-Alguaire Airport",
    "latitude": 41.7282,
    "longitude": 0.535023
  },
  "LESU": {
    "airport": "Andorra–La Seu d'Urgell Airport",
    "latitude": 42.3386,
    "longitude": 1.40917
  },
  "LERS": {
    "airport": "Reus Airport",
    "latitude": 41.1474,
    "longitude": 1.16717
  },
  "LEBZ": {
    "airport": "Badajoz Airport (Talavera la Real Air Base)",
    "latitude": 38.8913,
    "longitude": -6.82133
  },
  "LECO": {
    "airport": "A Coruna Airport",
    "latitude": 43.3021,
    "longitude": -8.37726
  },
  "LEST": {
    "airport": "Santiago de Compostela Airport",
    "latitude": 42.8963,
    "longitude": -8.41514
  },
  "LEVX": {
    "airport": "Vigo-Peinador Airport",
    "latitude": 42.2318,
    "longitude": -8.62677
  },
  "LEIB": {
    "airport": "Ibiza Airport",
    "latitude": 38.8729,
    "longitude": 1.37312
  },
  "LEMH": {
    "airport": "Menorca Airport (Mahon Airport)",
    "latitude": 39.8626,
    "longitude": 4.21865
  },
  "LEPA": {
    "airport": "Palma de Mallorca Airport",
    "latitude": 39.5517,
    "longitude": 2.73881
  },
  "LESL": {
    "airport": "San Luis Aerodrome",
    "latitude": 39.862222,
    "longitude": 4.258333
  },
  "LESB": {
    "airport": "Son Bonet Aerodrome",
    "latitude": 39.598889,
    "longitude": 2.702778
  },
  "LELO": {
    "airport": "Logrono-Agoncilo",
    "latitude": 42.461,
    "longitude": -2.32224
  },
  "LEMD": {
    "airport": "Adolfo Suarez Madrid-Barajas Airport",
    "latitude": 40.4719,
    "longitude": -3.56264
  },
  "LETO": {
    "airport": "Madrid-Torrejon Airport",
    "latitude": 40.4967,
    "longitude": -3.44587
  },
  "GEML": {
    "airport": "Melilla Airport",
    "latitude": 35.2798,
    "longitude": -2.95626
  },
  "LELC": {
    "airport": "Murcia-San Javier Airport",
    "latitude": 37.775,
    "longitude": -0.812389
  },
  "LEMI": {
    "airport": "Region de Murcia International Airport",
    "latitude": 37.803,
    "longitude": -1.125
  },
  "LEPP": {
    "airport": "Pamplona Airport",
    "latitude": 42.77,
    "longitude": -1.64633
  },
  "LEBB": {
    "airport": "Bilbao Airport",
    "latitude": 43.3011,
    "longitude": -2.91061
  },
  "LESO": {
    "airport": "San Sebastian Airport",
    "latitude": 43.3565,
    "longitude": -1.79061
  },
  "LEVT": {
    "airport": "Vitoria Airport",
    "latitude": 42.8828,
    "longitude": -2.72447
  },
  "LEAL": {
    "airport": "Alicante-Elche Airport",
    "latitude": 38.2822,
    "longitude": -0.558156
  },
  "LECH": {
    "airport": "Castellon-Costa Azahar Airport",
    "latitude": 40.2139,
    "longitude": 0.073333
  },
  "LEVC": {
    "airport": "Valencia Airport",
    "latitude": 39.4893,
    "longitude": -0.481625
  },
  "HAAB": {
    "airport": "Addis Ababa Bole International Airport",
    "latitude": 8.97778,
    "longitude": 38.7994
  },
  "HASM": {
    "airport": "Semera Airport",
    "latitude": 11.7875,
    "longitude": 40.9915
  },
  "HABD": {
    "airport": "Bahir Dar Airport",
    "latitude": 11.6081,
    "longitude": 37.3216
  },
  "HADM": {
    "airport": "Debre Marqos Airport",
    "latitude": 10.35,
    "longitude": 37.717
  },
  "HADT": {
    "airport": "Debre Tabor Airport",
    "latitude": 11.967,
    "longitude": 38
  },
  "HADC": {
    "airport": "Combolcha Airport",
    "latitude": 11.0825,
    "longitude": 39.7114
  },
  "HAMM": {
    "airport": "Genda Wuha Airport",
    "latitude": 12.933,
    "longitude": 36.167
  },
  "HAGN": {
    "airport": "Gondar Airport (Atse Tewodros Airport)",
    "latitude": 12.5199,
    "longitude": 37.434
  },
  "HALL": {
    "airport": "Lalibela Airport",
    "latitude": 11.975,
    "longitude": 38.98
  },
  "HAMA": {
    "airport": "Mekane Selam Airport",
    "latitude": 10.7254,
    "longitude": 38.7415
  },
  "HAPW": {
    "airport": "Beles Airport",
    "latitude": 11.3126,
    "longitude": 36.4164
  },
  "HASO": {
    "airport": "Asosa Airport",
    "latitude": 10.0185,
    "longitude": 34.5863
  },
  "HADR": {
    "airport": "Aba Tenna Dejazmach Yilma International Airport",
    "latitude": 9.6247,
    "longitude": 41.8542
  },
  "HAGM": {
    "airport": "Gambela Airport",
    "latitude": 8.12876,
    "longitude": 34.5631
  },
  "HABE": {
    "airport": "Beica Airport",
    "latitude": 9.38639,
    "longitude": 34.5219
  },
  "HADD": {
    "airport": "Dembidolo Airport",
    "latitude": 8.554,
    "longitude": 34.858
  },
  "HANG": {
    "airport": "Neghelle Airport",
    "latitude": 5.2897,
    "longitude": 39.7023
  },
  "HAFN": {
    "airport": "Fincha Airport",
    "latitude": 9.583,
    "longitude": 37.35
  },
  "HAGH": {
    "airport": "Ginir Airport",
    "latitude": 7.15,
    "longitude": 40.717
  },
  "HAGB": {
    "airport": "Robe Airport",
    "latitude": 7.11606,
    "longitude": 40.0463
  },
  "HAGR": {
    "airport": "Gore Airport",
    "latitude": 8.1614,
    "longitude": 35.5529
  },
  "HAJM": {
    "airport": "Aba Segud Airport",
    "latitude": 7.66609,
    "longitude": 36.8166
  },
  "HAML": {
    "airport": "Mena Airport",
    "latitude": 6.35,
    "longitude": 39.7167
  },
  "HAMN": {
    "airport": "Mendi Airport",
    "latitude": 9.767,
    "longitude": 35.1
  },
  "HANJ": {
    "airport": "Nejjo Airport",
    "latitude": 9.55,
    "longitude": 35.467
  },
  "HANK": {
    "airport": "Nekemte Airport",
    "latitude": 9.05,
    "longitude": 36.6
  },
  "HASK": {
    "airport": "Shakiso Airport",
    "latitude": 5.6923,
    "longitude": 38.9764
  },
  "HABB": {
    "airport": "Bedele Airport (Buno Bedele Airport)",
    "latitude": 8.456,
    "longitude": 36.352
  },
  "HAKD": {
    "airport": "Kabri Dar Airport",
    "latitude": 6.734,
    "longitude": 44.253
  },
  "HAGO": {
    "airport": "Gode Airport",
    "latitude": 5.93513,
    "longitude": 43.5786
  },
  "HASL": {
    "airport": "Shilavo Airport",
    "latitude": 6.08333,
    "longitude": 44.7667
  },
  "HAJJ": {
    "airport": "Wilwal International Airport",
    "latitude": 9.3325,
    "longitude": 42.9121
  },
  "HAKL": {
    "airport": "Kelafo Airport",
    "latitude": 5.657,
    "longitude": 44.35
  },
  "HAWR": {
    "airport": "Warder Airport",
    "latitude": 6.9724,
    "longitude": 45.3334
  },
  "HAAX": {
    "airport": "Axum Airport",
    "latitude": 14.1468,
    "longitude": 38.7728
  },
  "HAHU": {
    "airport": "Humera Airport",
    "latitude": 14.25,
    "longitude": 36.583
  },
  "HAMK": {
    "airport": "Alula Aba Nega Airport",
    "latitude": 13.4674,
    "longitude": 39.5335
  },
  "HAAM": {
    "airport": "Arba Minch Airport",
    "latitude": 6.03939,
    "longitude": 37.5905
  },
  "HALA": {
    "airport": "Awasa Airport",
    "latitude": 7.067,
    "longitude": 38.5
  },
  "HABC": {
    "airport": "Baco Airport (Jinka Airport)",
    "latitude": 5.78287,
    "longitude": 36.562
  },
  "HABU": {
    "airport": "Bulchi Airport",
    "latitude": 6.21667,
    "longitude": 36.6667
  },
  "HAMT": {
    "airport": "Mizan Teferi Airport",
    "latitude": 6.9571,
    "longitude": 35.5547
  },
  "HAMR": {
    "airport": "Mui Airport",
    "latitude": 5.8646,
    "longitude": 35.7485
  },
  "HASD": {
    "airport": "Soddu Airport",
    "latitude": 6.817,
    "longitude": 37.75
  },
  "HATP": {
    "airport": "Tippi Airport",
    "latitude": 7.2024,
    "longitude": 35.415
  },
  "HAMJ": {
    "airport": "Tum Airport",
    "latitude": 6.26,
    "longitude": 35.5184
  },
  "HAWC": {
    "airport": "Wacca Airport",
    "latitude": 7.167,
    "longitude": 37.167
  },
  "EFLP": {
    "airport": "Lappeenranta Airport",
    "latitude": 61.0446,
    "longitude": 28.1447
  },
  "EFKA": {
    "airport": "Kauhava Airfield",
    "latitude": 63.1271,
    "longitude": 23.0514
  },
  "EFKJ": {
    "airport": "Kauhajoki Airfield",
    "latitude": 62.4625,
    "longitude": 22.3931
  },
  "EFSI": {
    "airport": "Seinajoki Airport",
    "latitude": 62.6921,
    "longitude": 22.8323
  },
  "EFMI": {
    "airport": "Mikkeli Airport",
    "latitude": 61.6866,
    "longitude": 27.2018
  },
  "EFSA": {
    "airport": "Savonlinna Airport",
    "latitude": 61.9431,
    "longitude": 28.9451
  },
  "EFVR": {
    "airport": "Varkaus Airport",
    "latitude": 62.1711,
    "longitude": 27.8686
  },
  "EFKI": {
    "airport": "Kajaani Airport",
    "latitude": 64.2855,
    "longitude": 27.6924
  },
  "EFJY": {
    "airport": "Jyvaskyla Airport",
    "latitude": 62.3995,
    "longitude": 25.6783
  },
  "EFHA": {
    "airport": "Halli Airport",
    "latitude": 61.856,
    "longitude": 24.7867
  },
  "EFUT": {
    "airport": "Utti Airport",
    "latitude": 60.8964,
    "longitude": 26.9384
  },
  "EFET": {
    "airport": "Enontekio Airport",
    "latitude": 68.3626,
    "longitude": 23.4243
  },
  "EFIV": {
    "airport": "Ivalo Airport",
    "latitude": 68.6073,
    "longitude": 27.4053
  },
  "EFKE": {
    "airport": "Kemi-Tornio Airport",
    "latitude": 65.7787,
    "longitude": 24.5821
  },
  "EFKT": {
    "airport": "Kittila Airport",
    "latitude": 67.701,
    "longitude": 24.8468
  },
  "EFRO": {
    "airport": "Rovaniemi Airport",
    "latitude": 66.5648,
    "longitude": 25.8304
  },
  "EFSO": {
    "airport": "Sodankyla Airfield",
    "latitude": 67.395,
    "longitude": 26.6191
  },
  "EFTP": {
    "airport": "Tampere-Pirkkala Airport",
    "latitude": 61.4141,
    "longitude": 23.6044
  },
  "EFKK": {
    "airport": "Kokkola-Pietarsaari Airport",
    "latitude": 63.7212,
    "longitude": 23.1431
  },
  "EFVA": {
    "airport": "Vaasa Airport",
    "latitude": 63.0507,
    "longitude": 21.7622
  },
  "EFJO": {
    "airport": "Joensuu Airport",
    "latitude": 62.6629,
    "longitude": 29.6075
  },
  "EFIT": {
    "airport": "Kitee Airfield",
    "latitude": 62.1661,
    "longitude": 30.0736
  },
  "EFKS": {
    "airport": "Kuusamo Airport",
    "latitude": 65.9876,
    "longitude": 29.2394
  },
  "EFOU": {
    "airport": "Oulu Airport",
    "latitude": 64.9301,
    "longitude": 25.3546
  },
  "EFYL": {
    "airport": "Ylivieska Airfield",
    "latitude": 64.0547,
    "longitude": 24.7253
  },
  "EFKU": {
    "airport": "Kuopio Airport",
    "latitude": 63.0071,
    "longitude": 27.7978
  },
  "EFPO": {
    "airport": "Pori Airport",
    "latitude": 61.4617,
    "longitude": 21.8
  },
  "EFHK": {
    "airport": "Helsinki Airport (Helsinki-Vantaa Airport)",
    "latitude": 60.3172,
    "longitude": 24.9633
  },
  "EFHF": {
    "airport": "Helsinki-Malmi Airport",
    "latitude": 60.2546,
    "longitude": 25.0428
  },
  "EFHV": {
    "airport": "Hyvink- Airfield",
    "latitude": 60.6544,
    "longitude": 24.8811
  },
  "EFMA": {
    "airport": "Mariehamn Airport",
    "latitude": 60.1222,
    "longitude": 19.8982
  },
  "EFTU": {
    "airport": "Turku Airport",
    "latitude": 60.5141,
    "longitude": 22.2628
  },
  "NFNH": {
    "airport": "Laucala Airport",
    "latitude": -16.7481,
    "longitude": -179.667
  },
  "NFFN": {
    "airport": "Nadi International Airport",
    "latitude": -17.7554,
    "longitude": 177.443
  },
  "NFND": {
    "airport": "Pacific Harbour Airport",
    "latitude": -18.257,
    "longitude": 178.068
  },
  "NFNA": {
    "airport": "Nausori International Airport",
    "latitude": -18.0433,
    "longitude": 178.559
  },
  "NFCI": {
    "airport": "Cicia Airport",
    "latitude": -17.7433,
    "longitude": -179.342
  },
  "NFNW": {
    "airport": "Wakaya Airport",
    "latitude": -17.617,
    "longitude": 179.017
  },
  "NFKD": {
    "airport": "Vunisea Airport",
    "latitude": -19.0581,
    "longitude": 178.157
  },
  "NFNO": {
    "airport": "Koro Airport",
    "latitude": -17.3458,
    "longitude": 179.422
  },
  "NFNB": {
    "airport": "Levuka Airfield (Bureta Airport)",
    "latitude": -17.7111,
    "longitude": 178.759
  },
  "NFNK": {
    "airport": "Lakeba Airport",
    "latitude": -18.1992,
    "longitude": -178.817
  },
  "NFMO": {
    "airport": "Moala Airport",
    "latitude": -18.5667,
    "longitude": 179.951
  },
  "NFNG": {
    "airport": "Gau Airport",
    "latitude": -18.1156,
    "longitude": 179.34
  },
  "NFOL": {
    "airport": "Ono-i-Lau Airport",
    "latitude": -20.6589,
    "longitude": -178.741
  },
  "NFVB": {
    "airport": "Vanuabalavu Airport",
    "latitude": -17.269,
    "longitude": -178.976
  },
  "NFNU": {
    "airport": "Dama Airport",
    "latitude": -16.8598,
    "longitude": 178.623
  },
  "NFNL": {
    "airport": "Labasa Airport",
    "latitude": -16.4667,
    "longitude": 179.34
  },
  "NFFR": {
    "airport": "Rabi Airport",
    "latitude": -16.5337,
    "longitude": 179.976
  },
  "NFNR": {
    "airport": "Rotuma Airport",
    "latitude": -12.4825,
    "longitude": 177.071
  },
  "NFNS": {
    "airport": "Savusavu Airport",
    "latitude": -16.8028,
    "longitude": 179.341
  },
  "NFNM": {
    "airport": "Matei Airport",
    "latitude": -16.6906,
    "longitude": -179.877
  },
  "NFCS": {
    "airport": "Castaway Island Seaplane Base",
    "latitude": -17.7358,
    "longitude": 177.129
  },
  "NFMA": {
    "airport": "Mana Island Airport",
    "latitude": -17.6731,
    "longitude": 177.098
  },
  "NFFO": {
    "airport": "Malolo Lailai Airport",
    "latitude": -17.7779,
    "longitude": 177.197
  },
  "NFNV": {
    "airport": "Vatukoula Airport",
    "latitude": -17.5,
    "longitude": 177.842
  },
  "NFVL": {
    "airport": "Vatulele Airport",
    "latitude": -18.5125,
    "longitude": 177.639
  },
  "NFSW": {
    "airport": "Yasawa Island Airport",
    "latitude": -16.7589,
    "longitude": 177.545
  },
  "EKVG": {
    "airport": "Vagar Airport",
    "latitude": 62.0636,
    "longitude": -7.27722
  },
  "EGYP": {
    "airport": "RAF Mount Pleasant",
    "latitude": -51.8228,
    "longitude": -58.4472
  },
  "SFAL": {
    "airport": "Port Stanley Airport",
    "latitude": -51.6857,
    "longitude": -57.7776
  },
  "PTKK": {
    "airport": "Chuuk International Airport",
    "latitude": 7.46187,
    "longitude": 151.843
  },
  "PTSA": {
    "airport": "Kosrae International Airport",
    "latitude": 5.35698,
    "longitude": 162.958
  },
  "PTPN": {
    "airport": "Pohnpei International Airport",
    "latitude": 6.9851,
    "longitude": 158.209
  },
  "PTYA": {
    "airport": "Yap International Airport",
    "latitude": 9.49891,
    "longitude": 138.083
  },
  "LFHU": {
    "airport": "Alpe d'Huez Airport",
    "latitude": 45.0883,
    "longitude": 6.08472
  },
  "LFLW": {
    "airport": "Aurillac - Tronquieres Airport",
    "latitude": 44.8914,
    "longitude": 2.42194
  },
  "LFLC": {
    "airport": "Clermont-Ferrand Auvergne Airport",
    "latitude": 45.7867,
    "longitude": 3.16917
  },
  "LFLB": {
    "airport": "Chambery-Savoie Airport",
    "latitude": 45.6381,
    "longitude": 5.88023
  },
  "LFLJ": {
    "airport": "Courchevel Altiport",
    "latitude": 45.3967,
    "longitude": 6.63472
  },
  "LFMH": {
    "airport": "Saint-Etienne-Boutheon Airport",
    "latitude": 45.5406,
    "longitude": 4.29639
  },
  "LFLS": {
    "airport": "Grenoble-Isere Airport",
    "latitude": 45.3629,
    "longitude": 5.32937
  },
  "LFHP": {
    "airport": "Le Puy - Loudes Airport",
    "latitude": 45.0807,
    "longitude": 3.76289
  },
  "LFLY": {
    "airport": "Lyon-Bron Airport",
    "latitude": 45.7272,
    "longitude": 4.94427
  },
  "LFLL": {
    "airport": "Lyon-Saint-Exupery Airport",
    "latitude": 45.7256,
    "longitude": 5.08111
  },
  "LFBK": {
    "airport": "Montlucon - Gueret Airport",
    "latitude": 46.2226,
    "longitude": 2.36396
  },
  "LFKX": {
    "airport": "Meribel Altiport",
    "latitude": 45.407,
    "longitude": 6.57794
  },
  "LFHM": {
    "airport": "Megeve Altiport",
    "latitude": 45.8208,
    "longitude": 6.65222
  },
  "LFLP": {
    "airport": "Annecy - Haute-Savoie - Mont Blanc Airport",
    "latitude": 45.9308,
    "longitude": 6.10639
  },
  "LFHO": {
    "airport": "Aubenas Aerodrome (Arddecheche Meridionale Aerodrom)",
    "latitude": 44.5442,
    "longitude": 4.37219
  },
  "LFLO": {
    "airport": "Roanne Renaison Airport",
    "latitude": 46.0583,
    "longitude": 4.00139
  },
  "LFLU": {
    "airport": "Valence-Chabeuil Airport",
    "latitude": 44.9216,
    "longitude": 4.9699
  },
  "LFLV": {
    "airport": "Vichy - Charmeil Airport",
    "latitude": 46.1697,
    "longitude": 3.40374
  },
  "LFHS": {
    "airport": "Bourg – Ceyzériat Airport",
    "latitude": 46.2056,
    "longitude": 5.29167
  },
  "LFHY": {
    "airport": "Moulins – Montbeugny Airport",
    "latitude": 46.5344,
    "longitude": 3.42167
  },
  "LFLA": {
    "airport": "Auxerre - Branches Aerodrome",
    "latitude": 47.8502,
    "longitude": 3.49711
  },
  "LFSD": {
    "airport": "Dijon Air Base",
    "latitude": 47.2689,
    "longitude": 5.09
  },
  "LFGJ": {
    "airport": "Dole-Jura Airport",
    "latitude": 47.0427,
    "longitude": 5.43506
  },
  "LFQG": {
    "airport": "Nevers - Fourchambault Airport",
    "latitude": 47.0026,
    "longitude": 3.11333
  },
  "LFLN": {
    "airport": "Saint-Yan Airport (Charolais Bourgogne Sud Airport)",
    "latitude": 46.4125,
    "longitude": 4.01326
  },
  "LFRB": {
    "airport": "Brest Bretagne Airport",
    "latitude": 48.4479,
    "longitude": -4.41854
  },
  "LFRD": {
    "airport": "Dinard-Pleurtuit-Saint-Malo Airport",
    "latitude": 48.5877,
    "longitude": -2.07996
  },
  "LFRO": {
    "airport": "Lannion - Cote de Granit Airport",
    "latitude": 48.7544,
    "longitude": -3.47166
  },
  "LFRJ": {
    "airport": "Landivisiau Air Base",
    "latitude": 48.5303,
    "longitude": -4.15164
  },
  "LFRH": {
    "airport": "Lorient South Brittany Airport (Lann-Bihoue Airport)",
    "latitude": 47.7606,
    "longitude": -3.44
  },
  "LFRU": {
    "airport": "Morlaix - Ploujean Airport",
    "latitude": 48.6032,
    "longitude": -3.81578
  },
  "LFRN": {
    "airport": "Rennes-Saint-Jacques Airport",
    "latitude": 48.0695,
    "longitude": -1.73479
  },
  "LFRT": {
    "airport": "Saint-Brieuc - Armor Airport",
    "latitude": 48.5378,
    "longitude": -2.85444
  },
  "LFRQ": {
    "airport": "Quimper-Cornouaille Airport",
    "latitude": 47.975,
    "longitude": -4.16779
  },
  "LFRV": {
    "airport": "Meucon Airport",
    "latitude": 47.7233,
    "longitude": -2.71856
  },
  "LFLD": {
    "airport": "Bourges Airport",
    "latitude": 47.0581,
    "longitude": 2.37028
  },
  "LFLX": {
    "airport": "Chateauroux-Centre Marcel Dassault Airport",
    "latitude": 46.8603,
    "longitude": 1.72111
  },
  "LFOZ": {
    "airport": "Orleans - Saint-Denis-de-l'Hotel port",
    "latitude": 47.9878,
    "longitude": 1.76056
  },
  "LFOT": {
    "airport": "Tours Val de Loire Airport",
    "latitude": 47.4322,
    "longitude": 0.727606
  },
  "LFKJ": {
    "airport": "Ajaccio Napoleon Bonaparte Airport",
    "latitude": 41.9236,
    "longitude": 8.80292
  },
  "LFKB": {
    "airport": "Bastia - Poretta Airport",
    "latitude": 42.5527,
    "longitude": 9.48373
  },
  "LFKC": {
    "airport": "Calvi - Sainte-Catherine Airport",
    "latitude": 42.5244,
    "longitude": 8.79306
  },
  "LFKF": {
    "airport": "Figari-Sud Corse Airport",
    "latitude": 41.5006,
    "longitude": 9.09778
  },
  "LFKO": {
    "airport": "Propriano Airport",
    "latitude": 41.6606,
    "longitude": 8.88975
  },
  "LFKS": {
    "airport": "Solenzara Air Base",
    "latitude": 41.9244,
    "longitude": 9.406
  },
  "LFGA": {
    "airport": "Colmar - Houssen Airport",
    "latitude": 48.1099,
    "longitude": 7.35901
  },
  "LFSN": {
    "airport": "Nancy-Essey Airport",
    "latitude": 48.6921,
    "longitude": 6.23046
  },
  "LFSG": {
    "airport": "Epinal - Mirecourt Airport",
    "latitude": 48.325,
    "longitude": 6.06998
  },
  "LFJL": {
    "airport": "Metz-Nancy-Lorraine Airport",
    "latitude": 48.9821,
    "longitude": 6.25132
  },
  "LFSF": {
    "airport": "Metz-Frescaty Air Base",
    "latitude": 49.0717,
    "longitude": 6.13167
  },
  "LFSR": {
    "airport": "Reims - Champagne Airport",
    "latitude": 49.31,
    "longitude": 4.05
  },
  "LFST": {
    "airport": "Strasbourg Airport",
    "latitude": 48.5383,
    "longitude": 7.62823
  },
  "LFSZ": {
    "airport": "Vittel - Champ-de-Courses Airport",
    "latitude": 47.8168,
    "longitude": 6.38111
  },
  "LFOK": {
    "airport": "Chalons Vatry Airport",
    "latitude": 48.7806,
    "longitude": 4.1883
  },
  "LFQV": {
    "airport": "Charleville-Mézières Aerodrome",
    "latitude": 49.7827,
    "longitude": 4.64118
  },
  "LFOB": {
    "airport": "Beauvais–Tillé Airport",
    "latitude": 49.45444,
    "longitude": 2.11277
  },
  "LFAQ": {
    "airport": "Albert - Picardie Airport",
    "latitude": 49.9715,
    "longitude": 2.69766
  },
  "LFAC": {
    "airport": "Calais-Dunkerque Airport",
    "latitude": 50.9621,
    "longitude": 1.95476
  },
  "LFPC": {
    "airport": "Creil Air Base",
    "latitude": 49.2535,
    "longitude": 2.51914
  },
  "LFQT": {
    "airport": "Merville-Calonne Airport",
    "latitude": 50.6184,
    "longitude": 2.64224
  },
  "LFQQ": {
    "airport": "Lille Airport (Lille-Lesquin Airport)",
    "latitude": 50.5633,
    "longitude": 3.08689
  },
  "LFAT": {
    "airport": "Le Touquet - Cote d'Opale Airport",
    "latitude": 50.5174,
    "longitude": 1.62059
  },
  "LFPG": {
    "airport": "Paris Charles de Gaulle Airport",
    "latitude": 49.0097,
    "longitude": 2.54778
  },
  "LFPO": {
    "airport": "Aéroport de Paris-Orly",
    "latitude": 48.7231,
    "longitude": 2.35944
  },
  "LFPL": {
    "airport": "Aérodrome de Lognes - Émerainville",
    "latitude": 48.8219,
    "longitude": 2.6227
  },
  "LFPN": {
    "airport": "Toussus-le-Noble Airport",
    "latitude": 48.7519,
    "longitude": 2.10619
  },
  "LFPX": {
    "airport": "Aérodrome de Chavenay - Villepreux",
    "latitude": 48.8422,
    "longitude": 1.9803
  },
  "LFPF": {
    "airport": "Beynes Thiverval Airport",
    "latitude": 48.8436,
    "longitude": 1.9088
  },
  "LFPK": {
    "airport": "Coulommiers – Voisins Aerodrome",
    "latitude": 48.8375,
    "longitude": 3.014444
  },
  "LFRC": {
    "airport": "Cherbourg - Maupertus Airport",
    "latitude": 49.6501,
    "longitude": -1.47028
  },
  "LFRK": {
    "airport": "Caen - Carpiquet Airport",
    "latitude": 49.1733,
    "longitude": -0.45
  },
  "LFRG": {
    "airport": "Deauville - Saint-Gatien Airport",
    "latitude": 49.3653,
    "longitude": 0.154306
  },
  "LFAB": {
    "airport": "Dieppe - Saint-Aubin Airport",
    "latitude": 49.8825,
    "longitude": 1.08528
  },
  "LFOE": {
    "airport": "Evreux-Fauville Air Base",
    "latitude": 49.0287,
    "longitude": 1.21986
  },
  "LFRF": {
    "airport": "Granville-Mont-Saint-Michel Aerodrome (fr)",
    "latitude": 48.8831,
    "longitude": -1.56417
  },
  "LFOH": {
    "airport": "Le Havre - Octeville Airport",
    "latitude": 49.5339,
    "longitude": 0.088056
  },
  "LFOP": {
    "airport": "Rouen Airport",
    "latitude": 49.3842,
    "longitude": 1.1748
  },
  "LFBA": {
    "airport": "Agen La Garenne Airport",
    "latitude": 44.1747,
    "longitude": 0.590556
  },
  "LFBU": {
    "airport": "Angouleme - Cognac International Airport",
    "latitude": 45.7292,
    "longitude": 0.221456
  },
  "LFBZ": {
    "airport": "Biarritz Pays Basque Airport",
    "latitude": 43.4683,
    "longitude": -1.53111
  },
  "LFBD": {
    "airport": "Bordeaux-Merignac Airport",
    "latitude": 44.8283,
    "longitude": -0.715556
  },
  "LFSL": {
    "airport": "Brive-Souillac Airport",
    "latitude": 45.0397,
    "longitude": 1.48556
  },
  "LFBG": {
    "airport": "Cognac - Chateaubernard Air Base",
    "latitude": 45.6583,
    "longitude": -0.3175
  },
  "LFBE": {
    "airport": "Bergerac Dordogne Perigord Airport",
    "latitude": 44.8253,
    "longitude": 0.518611
  },
  "LFBL": {
    "airport": "Limoges - Bellegarde Airport",
    "latitude": 45.8628,
    "longitude": 1.17944
  },
  "LFBH": {
    "airport": "La Rochelle - Ile de Re Airport",
    "latitude": 46.1792,
    "longitude": -1.19528
  },
  "LFBN": {
    "airport": "Niort - Souche Airport",
    "latitude": 46.3135,
    "longitude": -0.394529
  },
  "LFBX": {
    "airport": "Perigueux Bassillac Airport",
    "latitude": 45.1981,
    "longitude": 0.815556
  },
  "LFBI": {
    "airport": "Poitiers-Biard Airport",
    "latitude": 46.5877,
    "longitude": 0.306666
  },
  "LFBP": {
    "airport": "Pau Pyrenees Airport",
    "latitude": 43.38,
    "longitude": -0.418611
  },
  "LFDN": {
    "airport": "Rochefort - Saint-Agnant Airport",
    "latitude": 45.8878,
    "longitude": -0.983056
  },
  "LFCY": {
    "airport": "Royan - Medis Aerodrome",
    "latitude": 45.6281,
    "longitude": -0.9725
  },
  "LFMU": {
    "airport": "Beziers Cap d'Agde Airport",
    "latitude": 43.3235,
    "longitude": 3.3539
  },
  "LFMK": {
    "airport": "Carcassonne Airport",
    "latitude": 43.216,
    "longitude": 2.30632
  },
  "LFCK": {
    "airport": "Castres-Mazamet Airport",
    "latitude": 43.5563,
    "longitude": 2.28918
  },
  "LFCQ": {
    "airport": "Aérodrome de Graulhet-Montdragon",
    "latitude": 43.7686111111,
    "longitude": 2.0077777778
  },
  "LFTW": {
    "airport": "Nimes-Ales-Camargue-Cevennes Airport (Garons Airport)",
    "latitude": 43.7574,
    "longitude": 4.41635
  },
  "LFCI": {
    "airport": "Le Sequestre Airport",
    "latitude": 43.9139,
    "longitude": 2.11306
  },
  "LFBT": {
    "airport": "Tarbes-Lourdes-Pyrenees Airport",
    "latitude": 43.1787,
    "longitude": -0.006439
  },
  "LFNB": {
    "airport": "Brenoux Airport",
    "latitude": 44.5021,
    "longitude": 3.53282
  },
  "LFMT": {
    "airport": "Montpellier-Mediterranee Airport (Frejorgues Airport)",
    "latitude": 43.5762,
    "longitude": 3.96301
  },
  "LFMP": {
    "airport": "Perpignan-Rivesaltes Airport",
    "latitude": 42.7404,
    "longitude": 2.87067
  },
  "LFCR": {
    "airport": "Rodez-Marcillac Airport",
    "latitude": 44.4079,
    "longitude": 2.48267
  },
  "LFBO": {
    "airport": "Toulouse-Blagnac Airport",
    "latitude": 43.6291,
    "longitude": 1.36382
  },
  "LFCC": {
    "airport": "Cahors - Lalbenque Airport",
    "latitude": 44.3514,
    "longitude": 1.47528
  },
  "LFDG": {
    "airport": "Gaillac Lisle Sur Tarn Airport",
    "latitude": 43.88298,
    "longitude": 1.87428
  },
  "LFJR": {
    "airport": "Angers - Loire Airport",
    "latitude": 47.5603,
    "longitude": -0.312222
  },
  "LFOU": {
    "airport": "Cholet Le Pontreau Airport",
    "latitude": 47.0821,
    "longitude": -0.877064
  },
  "LFRI": {
    "airport": "La Roche-sur-Yon Aerodrome",
    "latitude": 46.7019,
    "longitude": -1.37863
  },
  "LFEY": {
    "airport": "Ile d'Yeu Aerodrome",
    "latitude": 46.7186,
    "longitude": -2.39111
  },
  "LFRE": {
    "airport": "La Baule-Escoublac Airport",
    "latitude": 47.2894,
    "longitude": -2.34639
  },
  "LFRM": {
    "airport": "Le Mans Arnage Airport",
    "latitude": 47.9486,
    "longitude": 0.201667
  },
  "LFOO": {
    "airport": "Les Sables-d'Olonne - Talmont Airport",
    "latitude": 46.4769,
    "longitude": -1.72278
  },
  "LFOV": {
    "airport": "Laval Entrammes Airport",
    "latitude": 48.0314,
    "longitude": -0.742986
  },
  "LFRS": {
    "airport": "Nantes Atlantique Airport",
    "latitude": 47.1532,
    "longitude": -1.61073
  },
  "LFRZ": {
    "airport": "Saint-Nazaire Montoir Airport",
    "latitude": 47.3106,
    "longitude": -2.15667
  },
  "LFMV": {
    "airport": "Avignon - Provence Airport",
    "latitude": 43.9073,
    "longitude": 4.90183
  },
  "LFMR": {
    "airport": "Barcelonnette - Saint-Pons Airport",
    "latitude": 44.3872,
    "longitude": 6.60919
  },
  "LFMD": {
    "airport": "Cannes - Mandelieu Airport",
    "latitude": 43.542,
    "longitude": 6.95348
  },
  "LFMQ": {
    "airport": "Le Castellet Airport",
    "latitude": 43.2525,
    "longitude": 5.78519
  },
  "LFNA": {
    "airport": "Gap-Tallard Airport",
    "latitude": 44.455,
    "longitude": 6.03778
  },
  "LFTZ": {
    "airport": "La Mole - Saint-Tropez Airport",
    "latitude": 43.2054,
    "longitude": 6.482
  },
  "LFML": {
    "airport": "Marseille Provence Airport",
    "latitude": 43.4393,
    "longitude": 5.22142
  },
  "LFMN": {
    "airport": "Nice Cote d'Azur Airport",
    "latitude": 43.6584,
    "longitude": 7.21587
  },
  "LFMI": {
    "airport": "Istres-Le Tubé Air Base",
    "latitude": 43.5244,
    "longitude": 4.94167
  },
  "LFMA": {
    "airport": "Aix-en-Provence Aerodrome",
    "latitude": 43.5056,
    "longitude": 5.36778
  },
  "LFNC": {
    "airport": "Mont-Dauphin - Saint-Crepin Airport",
    "latitude": 44.7017,
    "longitude": 6.60028
  },
  "LFTH": {
    "airport": "Toulon-Hyeres Airport (Hyeres Le Palyvestre Airport)",
    "latitude": 43.0973,
    "longitude": 6.14603
  },
  "FOOL": {
    "airport": "Léon-Mba International Airport",
    "latitude": 0.458611,
    "longitude": 9.41222
  },
  "FOGA": {
    "airport": "Akieni Airport",
    "latitude": -1.13967,
    "longitude": 13.9036
  },
  "FOOD": {
    "airport": "Moanda Airport",
    "latitude": -1.533,
    "longitude": 13.267
  },
  "FOON": {
    "airport": "M'Vengue El Hadj Omar Bongo Ondimba International Airport",
    "latitude": -1.65616,
    "longitude": 13.438
  },
  "FOGQ": {
    "airport": "Okondja Airport",
    "latitude": -0.665214,
    "longitude": 13.6731
  },
  "FOGJ": {
    "airport": "Ndjole Ville Airport",
    "latitude": -0.183,
    "longitude": 10.75
  },
  "FOGR": {
    "airport": "Lambarene Airport",
    "latitude": -0.704389,
    "longitude": 10.2457
  },
  "FOGF": {
    "airport": "Fougamou Airport",
    "latitude": -1.283,
    "longitude": 10.617
  },
  "FOGE": {
    "airport": "Ndende Airport",
    "latitude": -2.4,
    "longitude": 11.367
  },
  "FOGG": {
    "airport": "Mbigou Airport",
    "latitude": -1.883,
    "longitude": 11.933
  },
  "FOGM": {
    "airport": "Mouila Airport",
    "latitude": -1.84514,
    "longitude": 11.0567
  },
  "FOGI": {
    "airport": "Moabi Airport",
    "latitude": -2.433,
    "longitude": 11
  },
  "FOOY": {
    "airport": "Mayumba Airport",
    "latitude": -3.45842,
    "longitude": 10.6741
  },
  "FOOT": {
    "airport": "Tchibanga Airport",
    "latitude": -2.85,
    "longitude": 11.017
  },
  "FOGB": {
    "airport": "Booue Airport",
    "latitude": -0.1075,
    "longitude": 11.9438
  },
  "FOOE": {
    "airport": "Mekambo Airport",
    "latitude": 1.017,
    "longitude": 13.933
  },
  "FOOK": {
    "airport": "Makokou Airport",
    "latitude": 0.579211,
    "longitude": 12.8909
  },
  "FOGK": {
    "airport": "Koulamoutou Airport",
    "latitude": -1.18461,
    "longitude": 12.4413
  },
  "FOOR": {
    "airport": "Lastourville Airport",
    "latitude": -0.826667,
    "longitude": 12.7486
  },
  "FOGW": {
    "airport": "Alowe Airport",
    "latitude": -0.545,
    "longitude": 9.444
  },
  "FOOI": {
    "airport": "Tchongorove Airport",
    "latitude": -1.9223,
    "longitude": 9.3092
  },
  "FOOH": {
    "airport": "Omboue Hospital Airport",
    "latitude": -1.57473,
    "longitude": 9.26269
  },
  "FOOG": {
    "airport": "Port-Gentil International Airport",
    "latitude": -0.711739,
    "longitude": 8.75438
  },
  "FOOB": {
    "airport": "Bitam Airport",
    "latitude": 2.07564,
    "longitude": 11.4932
  },
  "FOGV": {
    "airport": "Minvoul Airport",
    "latitude": 2.15,
    "longitude": 12.133
  },
  "FOOM": {
    "airport": "Mitzic Airport",
    "latitude": 0.783,
    "longitude": 11.55
  },
  "FOGO": {
    "airport": "Oyem Airport",
    "latitude": 1.54311,
    "longitude": 11.5814
  },
  "EGTB": {
    "airport": "Wycombe Air Park Airport",
    "latitude": 51.6117,
    "longitude": -0.808333
  },
  "EGHD": {
    "airport": "Plymouth City Airport",
    "latitude": 50.4228,
    "longitude": -4.10583
  },
  "EGHJ": {
    "airport": "Bembridge Airport",
    "latitude": 50.6781,
    "longitude": -1.10944
  },
  "EGLK": {
    "airport": "Blackbushe Airport",
    "latitude": 51.3239,
    "longitude": -0.8475
  },
  "EGXH": {
    "airport": "RAF Honington",
    "latitude": 52.3426,
    "longitude": 0.772939
  },
  "EGUB": {
    "airport": "RAF Benson",
    "latitude": 51.6164,
    "longitude": -1.09583
  },
  "EGBB": {
    "airport": "Birmingham Airport",
    "latitude": 52.4539,
    "longitude": -1.74803
  },
  "EGNH": {
    "airport": "Blackpool Airport",
    "latitude": 53.7717,
    "longitude": -3.02861
  },
  "EGHH": {
    "airport": "Bournemouth Airport",
    "latitude": 50.78,
    "longitude": -1.8425
  },
  "EGKB": {
    "airport": "London Biggin Hill Airport",
    "latitude": 51.3308,
    "longitude": 0.0325
  },
  "EGGD": {
    "airport": "Bristol Airport",
    "latitude": 51.3827,
    "longitude": -2.71909
  },
  "EGNL": {
    "airport": "Barrow/Walney Island Airport",
    "latitude": 54.1286,
    "longitude": -3.2675
  },
  "EGVN": {
    "airport": "RAF Brize Norton",
    "latitude": 51.75,
    "longitude": -1.58362
  },
  "EGNC": {
    "airport": "Carlisle Lake District Airport",
    "latitude": 54.9375,
    "longitude": -2.80917
  },
  "EGSC": {
    "airport": "Cambridge Airport",
    "latitude": 52.205,
    "longitude": 0.175
  },
  "EGBE": {
    "airport": "Coventry Airport",
    "latitude": 52.3697,
    "longitude": -1.47972
  },
  "EGCN": {
    "airport": "Robin Hood Airport Doncaster Sheffield",
    "latitude": 53.4805,
    "longitude": -1.01066
  },
  "EGNX": {
    "airport": "East Midlands Airport",
    "latitude": 52.8311,
    "longitude": -1.32806
  },
  "EGTE": {
    "airport": "Exeter International Airport",
    "latitude": 50.7344,
    "longitude": -3.41389
  },
  "EGLF": {
    "airport": "Farnborough Airport",
    "latitude": 51.2758,
    "longitude": -0.776333
  },
  "EGVA": {
    "airport": "RAF Fairford",
    "latitude": 51.6822,
    "longitude": -1.79003
  },
  "EGBP": {
    "airport": "Cotswold Airport",
    "latitude": 51.6681,
    "longitude": -2.05694
  },
  "EGBJ": {
    "airport": "Gloucestershire Airport",
    "latitude": 51.8942,
    "longitude": -2.16722
  },
  "EGXU": {
    "airport": "RAF Linton-on-Ouse",
    "latitude": 54.0489,
    "longitude": -1.25275
  },
  "EGNJ": {
    "airport": "Humberside Airport",
    "latitude": 53.5744,
    "longitude": -0.350833
  },
  "EGNS": {
    "airport": "Isle of Man Airport",
    "latitude": 54.0833,
    "longitude": -4.62333
  },
  "EGHE": {
    "airport": "St Mary's Airport",
    "latitude": 49.9133,
    "longitude": -6.29167
  },
  "EGYM": {
    "airport": "RAF Marham",
    "latitude": 52.6484,
    "longitude": 0.550692
  },
  "EGKR": {
    "airport": "Redhill Aerodrome",
    "latitude": 51.2136,
    "longitude": -0.138611
  },
  "EGNM": {
    "airport": "Leeds Bradford Airport",
    "latitude": 53.8659,
    "longitude": -1.66057
  },
  "EGLC": {
    "airport": "London City Airport",
    "latitude": 51.5053,
    "longitude": 0.055278
  },
  "EGHC": {
    "airport": "Land's End Airport",
    "latitude": 50.1028,
    "longitude": -5.67056
  },
  "EGKK": {
    "airport": "Gatwick Airport",
    "latitude": 51.1481,
    "longitude": -0.190278
  },
  "EG74": {
    "airport": "Bruntingthorpe Aerodrome (Leicester Harboro'/Harbour Airport)",
    "latitude": 52.4908,
    "longitude": -1.1312
  },
  "EGLL": {
    "airport": "Heathrow Airport",
    "latitude": 51.4775,
    "longitude": -0.461389
  },
  "EGUL": {
    "airport": "RAF Lakenheath",
    "latitude": 52.4093,
    "longitude": 0.561
  },
  "EGGP": {
    "airport": "Liverpool John Lennon Airport",
    "latitude": 53.3336,
    "longitude": -2.84972
  },
  "EGGW": {
    "airport": "London Luton Airport",
    "latitude": 51.8747,
    "longitude": -0.368333
  },
  "EGDL": {
    "airport": "RAF Lyneham",
    "latitude": 51.5051,
    "longitude": -1.99343
  },
  "EGMD": {
    "airport": "Lydd Airport (London Ashford Airport)",
    "latitude": 50.9561,
    "longitude": 0.939167
  },
  "EGCC": {
    "airport": "Manchester Airport",
    "latitude": 53.3537,
    "longitude": -2.27495
  },
  "EGUN": {
    "airport": "RAF Mildenhall",
    "latitude": 52.3619,
    "longitude": 0.486406
  },
  "EGNV": {
    "airport": "Teesside International Airport",
    "latitude": 54.5092,
    "longitude": -1.42941
  },
  "EGNT": {
    "airport": "Newcastle Airport",
    "latitude": 55.0375,
    "longitude": -1.69167
  },
  "EGWU": {
    "airport": "RAF Northolt",
    "latitude": 51.553,
    "longitude": -0.418167
  },
  "EGBN": {
    "airport": "Nottingham Airport",
    "latitude": 52.92,
    "longitude": -1.07917
  },
  "EGHQ": {
    "airport": "Cornwall Airport Newquay",
    "latitude": 50.4406,
    "longitude": -4.99541
  },
  "EGSH": {
    "airport": "Norwich International Airport",
    "latitude": 52.6758,
    "longitude": 1.28278
  },
  "EGVO": {
    "airport": "RAF Odiham",
    "latitude": 51.2341,
    "longitude": -0.942825
  },
  "EGBK": {
    "airport": "Sywell Aerodrome",
    "latitude": 52.3053,
    "longitude": -0.793056
  },
  "EGTK": {
    "airport": "Oxford Airport (London Oxford Airport)",
    "latitude": 51.8369,
    "longitude": -1.32
  },
  "EGXC": {
    "airport": "RAF Coningsby",
    "latitude": 53.093,
    "longitude": -0.166014
  },
  "EGSU": {
    "airport": "Duxford Aerodrome",
    "latitude": 52.0908,
    "longitude": 0.131944
  },
  "EGHL": {
    "airport": "Lasham Airfield",
    "latitude": 51.1872,
    "longitude": -1.03361
  },
  "EGHR": {
    "airport": "Chichester/Goodwood Airport",
    "latitude": 50.8594,
    "longitude": -0.759167
  },
  "EGUY": {
    "airport": "RAF Wyton",
    "latitude": 52.3572,
    "longitude": -0.107833
  },
  "EGTO": {
    "airport": "Rochester Airport",
    "latitude": 51.3519,
    "longitude": 0.503333
  },
  "EGMC": {
    "airport": "London Southend Airport",
    "latitude": 51.5703,
    "longitude": 0.693333
  },
  "EGHI": {
    "airport": "Southampton Airport",
    "latitude": 50.9503,
    "longitude": -1.3568
  },
  "EGXP": {
    "airport": "RAF Scampton",
    "latitude": 53.3078,
    "longitude": -0.550833
  },
  "EGSS": {
    "airport": "London Stansted Airport",
    "latitude": 51.885,
    "longitude": 0.235
  },
  "EGDJ": {
    "airport": "RAF Upavon",
    "latitude": 51.2862,
    "longitude": -1.78202
  },
  "EGXW": {
    "airport": "RAF Waddington",
    "latitude": 53.1662,
    "longitude": -0.523811
  },
  "EGDY": {
    "airport": "Royal Naval Air Station Yeovilton",
    "latitude": 51.0094,
    "longitude": -2.63882
  },
  "EGJB": {
    "airport": "Guernsey Airport",
    "latitude": 49.4347,
    "longitude": -2.60194
  },
  "EGJA": {
    "airport": "Alderney Airport",
    "latitude": 49.7067,
    "longitude": -2.21444
  },
  "EGMH": {
    "airport": "Manston Airport",
    "latitude": 51.3422,
    "longitude": 1.34611
  },
  "EGNO": {
    "airport": "Warton Aerodrome",
    "latitude": 53.745,
    "longitude": -2.88389
  },
  "EGAA": {
    "airport": "Belfast International Airport",
    "latitude": 54.6575,
    "longitude": -6.21583
  },
  "EGAC": {
    "airport": "George Best Belfast City Airport",
    "latitude": 54.6181,
    "longitude": -5.8725
  },
  "EGQB": {
    "airport": "Ballykelly Airfield (RAF Ballykelly)",
    "latitude": 55.0544,
    "longitude": -7.02
  },
  "EGAB": {
    "airport": "Enniskillen/St Angelo Airport",
    "latitude": 54.3989,
    "longitude": -7.65167
  },
  "EGAE": {
    "airport": "City of Derry Airport",
    "latitude": 55.0428,
    "longitude": -7.16111
  },
  "EGXJ": {
    "airport": "RAF Cottesmore",
    "latitude": 52.7294,
    "longitude": -0.651389
  },
  "EGPD": {
    "airport": "Aberdeen Airport",
    "latitude": 57.2019,
    "longitude": -2.19778
  },
  "EGQL": {
    "airport": "RAF Leuchars",
    "latitude": 56.3729,
    "longitude": -2.86844
  },
  "EGPL": {
    "airport": "Benbecula Airport",
    "latitude": 57.4811,
    "longitude": -7.36278
  },
  "EGPR": {
    "airport": "Barra Airport",
    "latitude": 57.0228,
    "longitude": -7.44306
  },
  "EGEC": {
    "airport": "Campbeltown Airport / RAF Machrihanish",
    "latitude": 55.4372,
    "longitude": -5.68639
  },
  "EGPN": {
    "airport": "Dundee Airport",
    "latitude": 56.4525,
    "longitude": -3.02583
  },
  "EGPH": {
    "airport": "Edinburgh Airport",
    "latitude": 55.95,
    "longitude": -3.3725
  },
  "EGED": {
    "airport": "Eday Airport",
    "latitude": 59.1906,
    "longitude": -2.77222
  },
  "EGEF": {
    "airport": "Fair Isle Airport",
    "latitude": 59.5358,
    "longitude": -1.62806
  },
  "EGQK": {
    "airport": "RAF Kinloss",
    "latitude": 57.6494,
    "longitude": -3.56064
  },
  "EGPF": {
    "airport": "Glasgow Airport",
    "latitude": 55.8719,
    "longitude": -4.43306
  },
  "EGPI": {
    "airport": "Islay Airport (Glenegedale Airport)",
    "latitude": 55.6819,
    "longitude": -6.25667
  },
  "EGPE": {
    "airport": "Inverness Airport",
    "latitude": 57.5425,
    "longitude": -4.0475
  },
  "EGPA": {
    "airport": "Kirkwall Airport",
    "latitude": 58.9578,
    "longitude": -2.905
  },
  "EGQS": {
    "airport": "RAF Lossiemouth",
    "latitude": 57.7052,
    "longitude": -3.33917
  },
  "EGPB": {
    "airport": "Sumburgh Airport",
    "latitude": 59.8814,
    "longitude": -1.29389
  },
  "EGET": {
    "airport": "Tingwall Airport",
    "latitude": 60.1919,
    "longitude": -1.24361
  },
  "EGES": {
    "airport": "Sanday Airport",
    "latitude": 59.2503,
    "longitude": -2.57667
  },
  "EGEN": {
    "airport": "North Ronaldsay Airport",
    "latitude": 59.3675,
    "longitude": -2.43444
  },
  "EGEO": {
    "airport": "Oban Airport (North Connel Airport)",
    "latitude": 56.4635,
    "longitude": -5.39967
  },
  "EGPK": {
    "airport": "Glasgow Prestwick Airport",
    "latitude": 55.5094,
    "longitude": -4.58667
  },
  "EGEP": {
    "airport": "Papa Westray Airport",
    "latitude": 59.3517,
    "longitude": -2.90028
  },
  "EGPT": {
    "airport": "Perth Airport (Scone Airport)",
    "latitude": 56.4392,
    "longitude": -3.37222
  },
  "EGEI": {
    "airport": "Broadford Airfield",
    "latitude": 57.2414,
    "longitude": -5.90966
  },
  "EGER": {
    "airport": "Stronsay Airport",
    "latitude": 59.1553,
    "longitude": -2.64139
  },
  "EGPO": {
    "airport": "Stornoway Airport",
    "latitude": 58.2156,
    "longitude": -6.33111
  },
  "EGPU": {
    "airport": "Tiree Airport",
    "latitude": 56.4992,
    "longitude": -6.86917
  },
  "EGPW": {
    "airport": "Baltasound Airport",
    "latitude": 60.7469,
    "longitude": -0.854722
  },
  "EGEH": {
    "airport": "Whalsay Airstrip",
    "latitude": 60.3775,
    "longitude": -0.925556
  },
  "EGPC": {
    "airport": "Wick Airport",
    "latitude": 58.4589,
    "longitude": -3.09306
  },
  "EGEW": {
    "airport": "Westray Airport",
    "latitude": 59.3503,
    "longitude": -2.95
  },
  "EGTG": {
    "airport": "Bristol Filton Airport",
    "latitude": 51.5194,
    "longitude": -2.59361
  },
  "EGNR": {
    "airport": "Hawarden Airport (Chester Airport)",
    "latitude": 53.1781,
    "longitude": -2.97778
  },
  "EGFF": {
    "airport": "Cardiff Airport",
    "latitude": 51.3967,
    "longitude": -3.34333
  },
  "EGFE": {
    "airport": "Haverfordwest Aerodrome",
    "latitude": 51.8331,
    "longitude": -4.96111
  },
  "EGFH": {
    "airport": "Swansea Airport",
    "latitude": 51.6053,
    "longitude": -4.06783
  },
  "EGOV": {
    "airport": "Anglesey Airport / RAF Valley",
    "latitude": 53.2481,
    "longitude": -4.53534
  },
  "EGKA": {
    "airport": "Brighton City Airport",
    "latitude": 50.8356,
    "longitude": -0.297222
  },
  "TGPY": {
    "airport": "Maurice Bishop International Airport",
    "latitude": 12.0042,
    "longitude": -61.7862
  },
  "UGSS": {
    "airport": "Sukhumi Babushara Airport (Dranda Airport)",
    "latitude": 42.8582,
    "longitude": 41.1281
  },
  "UGSB": {
    "airport": "Batumi International Airport (Alexander Kartveli Batumi Int'l Airport)",
    "latitude": 41.6103,
    "longitude": 41.5997
  },
  "UGKO": {
    "airport": "David the Builder Kutaisi International Airport",
    "latitude": 42.1767,
    "longitude": 42.4826
  },
  "UGTB": {
    "airport": "Tbilisi International Airport",
    "latitude": 41.6692,
    "longitude": 44.9547
  },
  "SOCA": {
    "airport": "Cayenne - Felix Eboue Airport",
    "latitude": 4.81981,
    "longitude": -52.3604
  },
  "SOGS": {
    "airport": "Grand-Santi Airport",
    "latitude": 4.28583,
    "longitude": -54.3731
  },
  "SOOM": {
    "airport": "Saint-Laurent-du-Maroni Airport",
    "latitude": 5.48306,
    "longitude": -54.0344
  },
  "SOOA": {
    "airport": "Maripasoula Airport",
    "latitude": 3.6575,
    "longitude": -54.0372
  },
  "SOOG": {
    "airport": "Saint-Georges-de-l'Oyapock Airport",
    "latitude": 3.8976,
    "longitude": -51.8041
  },
  "SOOR": {
    "airport": "Regina Airport",
    "latitude": 4.31472,
    "longitude": -52.1317
  },
  "SOOS": {
    "airport": "Saul Airport",
    "latitude": 3.61361,
    "longitude": -53.2042
  },
  "DGSI": {
    "airport": "Kumasi Airport",
    "latitude": 6.71456,
    "longitude": -1.59082
  },
  "DGSN": {
    "airport": "Sunyani Airport",
    "latitude": 7.36183,
    "longitude": -2.32876
  },
  "DGAA": {
    "airport": "Kotoka International Airport",
    "latitude": 5.60519,
    "longitude": -0.166786
  },
  "DGLE": {
    "airport": "Tamale Airport",
    "latitude": 9.55719,
    "longitude": -0.863214
  },
  "DGLW": {
    "airport": "Wa Airport",
    "latitude": 10.0795,
    "longitude": -2.5109
  },
  "DGTK": {
    "airport": "Takoradi Airport",
    "latitude": 4.89606,
    "longitude": -1.77476
  },
  "LXGB": {
    "airport": "Gibraltar International Airport (North Front Airport)",
    "latitude": 36.1512,
    "longitude": -5.34966
  },
  "BGJN": {
    "airport": "Ilulissat Airport",
    "latitude": 69.2432,
    "longitude": -51.0571
  },
  "BGUQ": {
    "airport": "Qaarsut Airport (Uummannaq/Qaarsut Airport)",
    "latitude": 70.7342,
    "longitude": -52.6962
  },
  "BGUK": {
    "airport": "Upernavik Airport",
    "latitude": 72.7902,
    "longitude": -56.1306
  },
  "BGQQ": {
    "airport": "Qaanaaq Airport",
    "latitude": 77.4886,
    "longitude": -69.3887
  },
  "BGTL": {
    "airport": "Pituffik Space Base",
    "latitude": 76.5312,
    "longitude": -68.7032
  },
  "BGUM": {
    "airport": "Uummannaq Heliport",
    "latitude": 70.6804,
    "longitude": -52.1116
  },
  "BGBW": {
    "airport": "Narsarsuaq Airport",
    "latitude": 61.1605,
    "longitude": -45.426
  },
  "BGCH": {
    "airport": "Qasigiannguit Heliport",
    "latitude": 68.8228,
    "longitude": -51.1734
  },
  "BGAA": {
    "airport": "Aasiaat Airport",
    "latitude": 68.7218,
    "longitude": -52.7847
  },
  "BGCO": {
    "airport": "Nerlerit Inaat Airport",
    "latitude": 70.7431,
    "longitude": -22.6505
  },
  "BGGH": {
    "airport": "Nuuk Airport",
    "latitude": 64.1909,
    "longitude": -51.6781
  },
  "BGPT": {
    "airport": "Paamiut Airport",
    "latitude": 62.0147,
    "longitude": -49.6709
  },
  "BGKK": {
    "airport": "Kulusuk Airport",
    "latitude": 65.5736,
    "longitude": -37.1236
  },
  "BGSS": {
    "airport": "Sisimiut Airport",
    "latitude": 66.9513,
    "longitude": -53.7293
  },
  "BGMQ": {
    "airport": "Maniitsoq Airport",
    "latitude": 65.4125,
    "longitude": -52.9394
  },
  "BGSF": {
    "airport": "Kangerlussuaq Airport",
    "latitude": 67.0122,
    "longitude": -50.7116
  },
  "GBYD": {
    "airport": "Banjul International Airport",
    "latitude": 13.338,
    "longitude": -16.6522
  },
  "GUOK": {
    "airport": "Boke Baralande Airport",
    "latitude": 10.9658,
    "longitude": -14.2811
  },
  "GUSB": {
    "airport": "Sambailo Airport",
    "latitude": 12.5727,
    "longitude": -13.3585
  },
  "GUCY": {
    "airport": "Ahmed Sékou Touré International Airport",
    "latitude": 9.57689,
    "longitude": -13.612
  },
  "GUFH": {
    "airport": "Faranah Airport",
    "latitude": 10.0355,
    "longitude": -10.7698
  },
  "GUFA": {
    "airport": "Fria Airport",
    "latitude": 10.3506,
    "longitude": -13.5692
  },
  "GUSI": {
    "airport": "Siguiri Airport",
    "latitude": 11.433,
    "longitude": -9.167
  },
  "GUXN": {
    "airport": "Kankan Airport (Diankana Airport)",
    "latitude": 10.4484,
    "longitude": -9.22876
  },
  "GUKU": {
    "airport": "Kissidougou Airport",
    "latitude": 9.16056,
    "longitude": -10.1244
  },
  "GULB": {
    "airport": "Tata Airport",
    "latitude": 11.3261,
    "longitude": -12.2868
  },
  "GUMA": {
    "airport": "Macenta Airport",
    "latitude": 8.48186,
    "longitude": -9.52507
  },
  "GUNZ": {
    "airport": "Nzerekore Airport",
    "latitude": 7.80602,
    "longitude": -8.7018
  },
  "TFFB": {
    "airport": "Baillif Airport",
    "latitude": 16.0133,
    "longitude": -61.7422
  },
  "TFFA": {
    "airport": "La Desirade Airport (Grande-Anse Airport)",
    "latitude": 16.2969,
    "longitude": -61.0844
  },
  "TFFM": {
    "airport": "Marie-Galante Airport (Les Bases)",
    "latitude": 15.8687,
    "longitude": -61.27
  },
  "TFFS": {
    "airport": "Les Saintes Airport",
    "latitude": 15.8644,
    "longitude": -61.5806
  },
  "TFFR": {
    "airport": "Pointe-a-Pitre International Airport (Le Raizet Airport)",
    "latitude": 16.2653,
    "longitude": -61.5318
  },
  "TFFC": {
    "airport": "Saint-Francois Airport",
    "latitude": 16.2578,
    "longitude": -61.2625
  },
  "FGAB": {
    "airport": "Annobon Air",
    "latitude": -1.41028,
    "longitude": 5.62194
  },
  "FGSL": {
    "airport": "Malabo International Airport (Saint Isabel Airport)",
    "latitude": 3.75527,
    "longitude": 8.70872
  },
  "FGBT": {
    "airport": "Bata Airport",
    "latitude": 1.90547,
    "longitude": 9.80568
  },
  "FGMY": {
    "airport": "President Obiang Nguema International Airport",
    "latitude": 1.68533,
    "longitude": 11.0244
  },
  "LGAL": {
    "airport": "Alexandroupoli Airport (Dimokritos Airport)",
    "latitude": 40.8559,
    "longitude": 25.9563
  },
  "LGKV": {
    "airport": "Kavala International Airport (Alexander the Great Airport)",
    "latitude": 40.9133,
    "longitude": 24.6192
  },
  "LGAV": {
    "airport": "Athens International Airport (Eleftherios Venizelos Airport)",
    "latitude": 37.9364,
    "longitude": 23.9445
  },
  "LGKC": {
    "airport": "Kithira Island National Airport",
    "latitude": 36.2743,
    "longitude": 23.017
  },
  "LGAG": {
    "airport": "Agrinion Airport",
    "latitude": 38.602,
    "longitude": 21.3512
  },
  "LGRX": {
    "airport": "Araxos Airport",
    "latitude": 38.1511,
    "longitude": 21.4256
  },
  "LGAD": {
    "airport": "Andravida Air Base",
    "latitude": 37.9207,
    "longitude": 21.2926
  },
  "LGKA": {
    "airport": "Kastoria National Airport (Aristotelis Airport)",
    "latitude": 40.4463,
    "longitude": 21.2822
  },
  "LGKZ": {
    "airport": "Kozani National Airport (Filippos Airport)",
    "latitude": 40.2861,
    "longitude": 21.8408
  },
  "LGKR": {
    "airport": "Corfu International Airport (Ioannis Kapodistrias Int'l Airport)",
    "latitude": 39.6019,
    "longitude": 19.9117
  },
  "LGKF": {
    "airport": "Kefalonia International Airport",
    "latitude": 38.1201,
    "longitude": 20.5005
  },
  "LGPZ": {
    "airport": "Aktion National Airport",
    "latitude": 38.9255,
    "longitude": 20.7653
  },
  "LGZA": {
    "airport": "Zakynthos International Airport (Dionysios SolomosAirport)",
    "latitude": 37.7509,
    "longitude": 20.8843
  },
  "LGIO": {
    "airport": "Ioannina National Airport",
    "latitude": 39.6964,
    "longitude": 20.8225
  },
  "LGTS": {
    "airport": "Thessaloniki Airport",
    "latitude": 40.5197,
    "longitude": 22.9709
  },
  "LGSA": {
    "airport": "Chania International Airport",
    "latitude": 35.5317,
    "longitude": 24.1497
  },
  "LGIR": {
    "airport": "Heraklion International Airport (Nikos Kazantzakis Airport)",
    "latitude": 35.3397,
    "longitude": 25.1803
  },
  "LGST": {
    "airport": "Sitia Public Airport",
    "latitude": 35.2161,
    "longitude": 26.1013
  },
  "LGKP": {
    "airport": "Karpathos Island National Airport",
    "latitude": 35.4214,
    "longitude": 27.146
  },
  "LGKY": {
    "airport": "Kalymnos Island National Airport",
    "latitude": 36.9633,
    "longitude": 26.9406
  },
  "LGMK": {
    "airport": "Mykonos Island National Airport",
    "latitude": 37.4351,
    "longitude": 25.3481
  },
  "LGNX": {
    "airport": "Naxos Island National Airport",
    "latitude": 37.0811,
    "longitude": 25.3681
  },
  "LGSO": {
    "airport": "Syros Island National Airport",
    "latitude": 37.4228,
    "longitude": 24.9509
  },
  "LGSR": {
    "airport": "Santorini (Thira) National Airport",
    "latitude": 36.3992,
    "longitude": 25.4793
  },
  "LGPL": {
    "airport": "Astypalaia Island National Airport",
    "latitude": 36.5799,
    "longitude": 26.3758
  },
  "LGKO": {
    "airport": "Kos Island International Airport",
    "latitude": 36.7933,
    "longitude": 27.0917
  },
  "LGKS": {
    "airport": "Kasos Island Public Airport",
    "latitude": 35.4214,
    "longitude": 26.91
  },
  "LGKJ": {
    "airport": "Kastellorizo Island Public Airport",
    "latitude": 36.1417,
    "longitude": 29.5764
  },
  "LGLE": {
    "airport": "Leros Municipal Airport",
    "latitude": 37.1849,
    "longitude": 26.8003
  },
  "LGML": {
    "airport": "Milos Island National Airport",
    "latitude": 36.6969,
    "longitude": 24.4769
  },
  "LGPA": {
    "airport": "Paros National Airport",
    "latitude": 37.0205,
    "longitude": 25.1132
  },
  "LGRP": {
    "airport": "Rhodes International Airport",
    "latitude": 36.4054,
    "longitude": 28.0862
  },
  "LGHL": {
    "airport": "Porto Cheli Airport",
    "latitude": 37.2988,
    "longitude": 23.149
  },
  "LGKL": {
    "airport": "Kalamata International Airport",
    "latitude": 37.0683,
    "longitude": 22.0255
  },
  "LGSP": {
    "airport": "Sparti Airport",
    "latitude": 36.9739,
    "longitude": 22.5263
  },
  "LGSY": {
    "airport": "Skyros Island National Airport",
    "latitude": 38.9676,
    "longitude": 24.4872
  },
  "LGSK": {
    "airport": "Skiathos Island National Airport",
    "latitude": 39.1771,
    "longitude": 23.5037
  },
  "LGLR": {
    "airport": "Larissa National Airport",
    "latitude": 39.6503,
    "longitude": 22.4655
  },
  "LGBL": {
    "airport": "Nea Anchialos National Airport",
    "latitude": 39.2196,
    "longitude": 22.7943
  },
  "LGIK": {
    "airport": "Ikaria Island National Airport",
    "latitude": 37.6827,
    "longitude": 26.3471
  },
  "LGHI": {
    "airport": "Chios Island National Airport",
    "latitude": 38.3432,
    "longitude": 26.1406
  },
  "LGLM": {
    "airport": "Lemnos International Airport",
    "latitude": 39.9171,
    "longitude": 25.2363
  },
  "LGMT": {
    "airport": "Mytilene International Airport",
    "latitude": 39.0567,
    "longitude": 26.5983
  },
  "LGSM": {
    "airport": "Samos International Airport",
    "latitude": 37.69,
    "longitude": 26.9117
  },
  "MGCB": {
    "airport": "Coban Airport",
    "latitude": 15.469,
    "longitude": -90.4067
  },
  "MGRB": {
    "airport": "Rubelsanto Airport",
    "latitude": 15.992,
    "longitude": -90.4453
  },
  "MGSJ": {
    "airport": "San Jose Airport",
    "latitude": 13.9362,
    "longitude": -90.8358
  },
  "MGGT": {
    "airport": "La Aurora International Airport",
    "latitude": 14.5817,
    "longitude": -90.5267
  },
  "MGHT": {
    "airport": "Huehuetenango Airport",
    "latitude": 15.3274,
    "longitude": -91.4624
  },
  "MGRD": {
    "airport": "Rio Dulce Airport (Las Vegas Airport)",
    "latitude": 15.6684,
    "longitude": -88.9618
  },
  "MGPB": {
    "airport": "Puerto Barrios Airport",
    "latitude": 15.7309,
    "longitude": -88.5838
  },
  "MGCR": {
    "airport": "Carmelita Airport",
    "latitude": 17.4612,
    "longitude": -90.0537
  },
  "MGTK": {
    "airport": "Mundo Maya International Airport",
    "latitude": 16.9138,
    "longitude": -89.8664
  },
  "MGPP": {
    "airport": "Poptun Airport",
    "latitude": 16.3258,
    "longitude": -89.4161
  },
  "MGQZ": {
    "airport": "Quetzaltenango Airport",
    "latitude": 14.8656,
    "longitude": -91.502
  },
  "MGCT": {
    "airport": "Coatepeque Airport",
    "latitude": 14.6942,
    "longitude": -91.8825
  },
  "MGQC": {
    "airport": "Quiche Airport",
    "latitude": 15.0122,
    "longitude": -91.1506
  },
  "MGPG": {
    "airport": "Playa Grande Airport",
    "latitude": 15.9975,
    "longitude": -90.7417
  },
  "MGRT": {
    "airport": "Retalhuleu Airport",
    "latitude": 14.521,
    "longitude": -91.6973
  },
  "PGUM": {
    "airport": "Antonio B. Won Pat International Airport (Guam Int'l)",
    "latitude": 13.4834,
    "longitude": 144.796
  },
  "PGUA": {
    "airport": "Andersen Air Force Base",
    "latitude": 13.584,
    "longitude": 144.93
  },
  "GGOV": {
    "airport": "Osvaldo Vieira International Airport",
    "latitude": 11.8948,
    "longitude": -15.6537
  },
  "GGBU": {
    "airport": "Bubaque Airport",
    "latitude": 11.2974,
    "longitude": -15.8381
  },
  "SYBR": {
    "airport": "Baramita Airport",
    "latitude": 7.37012,
    "longitude": -60.488
  },
  "SYMR": {
    "airport": "Matthews Ridge Airport",
    "latitude": 7.48811,
    "longitude": -60.1848
  },
  "SYMB": {
    "airport": "Mabaruma Airport",
    "latitude": 8.2,
    "longitude": -59.7833
  },
  "SYBT": {
    "airport": "Bartica Airport",
    "latitude": 6.35886,
    "longitude": -58.6552
  },
  "SYIB": {
    "airport": "Imbaimadai Airport",
    "latitude": 5.70811,
    "longitude": -60.2942
  },
  "SYKM": {
    "airport": "Kamarang Airport",
    "latitude": 5.86534,
    "longitude": -60.6142
  },
  "SYPR": {
    "airport": "Paruima Airport",
    "latitude": 5.81545,
    "longitude": -61.0554
  },
  "SYCJ": {
    "airport": "Cheddi Jagan International Airport",
    "latitude": 6.49855,
    "longitude": -58.2541
  },
  "SYGO": {
    "airport": "Eugene F. Correia International Airport",
    "latitude": 6.80628,
    "longitude": -58.1059
  },
  "SYKZ": {
    "airport": "Konawaruk Airport",
    "latitude": 5.2684,
    "longitude": -58.995
  },
  "SYSC": {
    "airport": "Sand Creek Airport",
    "latitude": 2.9913,
    "longitude": -59.51
  },
  "SYMK": {
    "airport": "Maikwak Airport",
    "latitude": 4.89817,
    "longitude": -59.817
  },
  "SYKA": {
    "airport": "Kaieteur International Airport",
    "latitude": 5.17275,
    "longitude": -59.4915
  },
  "SYKT": {
    "airport": "Kato Airport",
    "latitude": 4.64916,
    "longitude": -59.8322
  },
  "SYMD": {
    "airport": "Mahdia Airport",
    "latitude": 5.27749,
    "longitude": -59.1511
  },
  "SYMM": {
    "airport": "Monkey Mountain Airport",
    "latitude": 4.48333,
    "longitude": -59.6833
  },
  "SYOR": {
    "airport": "Orinduik Airport",
    "latitude": 4.72527,
    "longitude": -60.035
  },
  "SYAH": {
    "airport": "Aishalton Airport",
    "latitude": 2.48653,
    "longitude": -59.3134
  },
  "SYKS": {
    "airport": "Karasabai Airport",
    "latitude": 4.03333,
    "longitude": -59.5333
  },
  "SYKR": {
    "airport": "Karanambo Airport",
    "latitude": 3.75194,
    "longitude": -59.3097
  },
  "SYLT": {
    "airport": "Lethem Airport",
    "latitude": 3.37276,
    "longitude": -59.7894
  },
  "SYLP": {
    "airport": "Lumid Pau Airport",
    "latitude": 2.39393,
    "longitude": -59.441
  },
  "SYAN": {
    "airport": "Annai Airport",
    "latitude": 3.95944,
    "longitude": -59.1242
  },
  "VHST": {
    "airport": "Hong Kong Shun Tak Sheung Wan Heliport",
    "latitude": 22.2888,
    "longitude": 114.1524
  },
  "VHHH": {
    "airport": "Hong Kong International Airport (Chek Lap Kok Airport)",
    "latitude": 22.3089,
    "longitude": 113.915
  },
  "MHLC": {
    "airport": "Goloson International Airport",
    "latitude": 15.7425,
    "longitude": -86.853
  },
  "MHTE": {
    "airport": "Tela Airport",
    "latitude": 15.7759,
    "longitude": -87.4758
  },
  "MHIR": {
    "airport": "Iriona Airport",
    "latitude": 15.9392,
    "longitude": -85.1372
  },
  "MHTJ": {
    "airport": "Trujillo Airport (Capiro Airport)",
    "latitude": 15.9268,
    "longitude": -85.9382
  },
  "MHSC": {
    "airport": "Soto Cano Air Base",
    "latitude": 14.3824,
    "longitude": -87.6212
  },
  "MHRU": {
    "airport": "Copan Ruinas Airport",
    "latitude": 14.9149,
    "longitude": -89.0078
  },
  "MHSR": {
    "airport": "Santa Rosa de Copan Airport",
    "latitude": 14.7779,
    "longitude": -88.775
  },
  "MHLM": {
    "airport": "Ramon Villeda Morales International Airport",
    "latitude": 15.4526,
    "longitude": -87.9236
  },
  "MHTG": {
    "airport": "Toncontin International Airport",
    "latitude": 14.0609,
    "longitude": -87.2172
  },
  "MHAH": {
    "airport": "Ahuas Airport",
    "latitude": 15.4722,
    "longitude": -84.3522
  },
  "MHPC": {
    "airport": "Palacios Airport",
    "latitude": 15.955,
    "longitude": -84.9414
  },
  "MHPL": {
    "airport": "Puerto Lempira Airport",
    "latitude": 15.2622,
    "longitude": -83.7812
  },
  "MHLE": {
    "airport": "La Esperanza Airport",
    "latitude": 14.2911,
    "longitude": -88.175
  },
  "MHNJ": {
    "airport": "Guanaja Airport",
    "latitude": 16.4454,
    "longitude": -85.9066
  },
  "MHRO": {
    "airport": "Juan Manuel Galvez International Airport",
    "latitude": 16.3168,
    "longitude": -86.523
  },
  "MHUT": {
    "airport": "Utila Airport",
    "latitude": 16.1131,
    "longitude": -86.8803
  },
  "MHMA": {
    "airport": "Marcala Airport",
    "latitude": 14.1619,
    "longitude": -88.0344
  },
  "MHGS": {
    "airport": "Gracias Airport",
    "latitude": 14.5735,
    "longitude": -88.5958
  },
  "MHGE": {
    "airport": "El Aguacate Airport",
    "latitude": 14.917,
    "longitude": -85.9
  },
  "MHJU": {
    "airport": "Juticalpa Airport",
    "latitude": 14.6526,
    "longitude": -86.2203
  },
  "MHCS": {
    "airport": "Coyoles Airport",
    "latitude": 15.4456,
    "longitude": -86.6753
  },
  "MHEA": {
    "airport": "El Arrayan Airport",
    "latitude": 15.5056,
    "longitude": -86.5747
  },
  "MHYR": {
    "airport": "Yoro Airport",
    "latitude": 15.1275,
    "longitude": -87.135
  },
  "MHUL": {
    "airport": "Sulaco Airport",
    "latitude": 14.9072,
    "longitude": -87.2634
  },
  "LDDU": {
    "airport": "Dubrovnik Airport",
    "latitude": 42.5614,
    "longitude": 18.2682
  },
  "LDZA": {
    "airport": "Zagreb Airport",
    "latitude": 45.7429,
    "longitude": 16.0688
  },
  "LDPL": {
    "airport": "Pula Airport",
    "latitude": 44.8935,
    "longitude": 13.9222
  },
  "LDOS": {
    "airport": "Osijek Airport",
    "latitude": 45.4627,
    "longitude": 18.8102
  },
  "LDLO": {
    "airport": "Losinj Airport",
    "latitude": 44.5658,
    "longitude": 14.3931
  },
  "LDRI": {
    "airport": "Rijeka Airport",
    "latitude": 45.2169,
    "longitude": 14.5703
  },
  "LDSB": {
    "airport": "Bol Airport (Brac Airport)",
    "latitude": 43.2857,
    "longitude": 16.6797
  },
  "LDSP": {
    "airport": "Split Airport",
    "latitude": 43.5389,
    "longitude": 16.298
  },
  "LDZD": {
    "airport": "Zadar Airport",
    "latitude": 44.1083,
    "longitude": 15.3467
  },
  "MTJE": {
    "airport": "Jeremie Airport",
    "latitude": 18.6631,
    "longitude": -74.1703
  },
  "MTCH": {
    "airport": "Hugo Chavez International Airport",
    "latitude": 19.733,
    "longitude": -72.1947
  },
  "MTPX": {
    "airport": "Port-de-Paix Airport",
    "latitude": 19.9336,
    "longitude": -72.8486
  },
  "MTPP": {
    "airport": "Toussaint Louverture International Airport",
    "latitude": 18.58,
    "longitude": -72.2925
  },
  "MTCA": {
    "airport": "Antoine-Simon Airport",
    "latitude": 18.2711,
    "longitude": -73.7883
  },
  "MTJA": {
    "airport": "Jacmel Airport",
    "latitude": 18.2411,
    "longitude": -72.5185
  },
  "LHPP": {
    "airport": "Pecs-Pogany International Airport",
    "latitude": 45.9909,
    "longitude": 18.241
  },
  "LHBP": {
    "airport": "Budapest Ferenc Liszt International Airport",
    "latitude": 47.4298,
    "longitude": 19.2611
  },
  "LHMC": {
    "airport": "Miskolc Airport",
    "latitude": 48.1369,
    "longitude": 20.7914
  },
  "LHDC": {
    "airport": "Debrecen International Airport",
    "latitude": 47.4889,
    "longitude": 21.6153
  },
  "LHSM": {
    "airport": "Heviz-Balaton Airport",
    "latitude": 46.6864,
    "longitude": 17.1591
  },
  "WITT": {
    "airport": "Sultan Iskandar Muda International Airport",
    "latitude": 5.52287,
    "longitude": 95.4206
  },
  "WITM": {
    "airport": "Malikus Saleh Airport",
    "latitude": 5.22668,
    "longitude": 96.9503
  },
  "WITL": {
    "airport": "Lhok Sukon Airport",
    "latitude": 5.06951,
    "longitude": 97.2592
  },
  "WITC": {
    "airport": "Cut Nyak Dhien Airport",
    "latitude": 4.25,
    "longitude": 96.217
  },
  "WITN": {
    "airport": "Maimun Saleh Airport",
    "latitude": 5.87413,
    "longitude": 95.3397
  },
  "WADD": {
    "airport": "Ngurah Rai International Airport",
    "latitude": -8.74817,
    "longitude": 115.167
  },
  "WIII": {
    "airport": "Soekarno–Hatta International Airport",
    "latitude": -6.12556,
    "longitude": 106.656
  },
  "WIHP": {
    "airport": "Pondok Cabe Airport",
    "latitude": -6.33696,
    "longitude": 106.765
  },
  "WIIG": {
    "airport": "Panjang Island Airport",
    "latitude": -5.64444,
    "longitude": 106.562
  },
  "WIPL": {
    "airport": "Fatmawati Soekarno Airport",
    "latitude": -3.8637,
    "longitude": 102.339
  },
  "WIPI": {
    "airport": "Muara Bungo Airport",
    "latitude": -1.1278,
    "longitude": 102.135
  },
  "WIBJ": {
    "airport": "Japura Airport",
    "latitude": -0.352808,
    "longitude": 102.335
  },
  "WARW": {
    "airport": "Bawean Airport",
    "latitude": -5.72361,
    "longitude": 112.679
  },
  "WAMG": {
    "airport": "Jalaluddin Airport",
    "latitude": 0.637119,
    "longitude": 122.85
  },
  "WAMY": {
    "airport": "Pogogul Airport",
    "latitude": 1.1027,
    "longitude": 121.414
  },
  "WIHH": {
    "airport": "Halim Perdanakusuma International Airport",
    "latitude": -6.2655,
    "longitude": 106.8856
  },
  "WIPA": {
    "airport": "Sultan Thaha Airport",
    "latitude": -1.63802,
    "longitude": 103.644
  },
  "WIPH": {
    "airport": "Depati Parbo Airport",
    "latitude": -2.093,
    "longitude": 101.468
  },
  "WIPU": {
    "airport": "Muko-Muko Airport",
    "latitude": -2.54186,
    "longitude": 101.088
  },
  "WIBT": {
    "airport": "Sei Bati Airport",
    "latitude": 1.0527,
    "longitude": 103.393
  },
  "WICC": {
    "airport": "Husein Sastranegara International Airport",
    "latitude": -6.90063,
    "longitude": 107.576
  },
  "WICD": {
    "airport": "Penggung Airport (Cakrabuwana Airport)",
    "latitude": -6.75614,
    "longitude": 108.54
  },
  "WICN": {
    "airport": "Cijulang Nusawiru Airport",
    "latitude": -7.71989,
    "longitude": 108.489
  },
  "WICA": {
    "airport": "Kertajati International Airport",
    "latitude": -6.64892,
    "longitude": 108.167
  },
  "WICM": {
    "airport": "Tasikmalaya Airport",
    "latitude": -7.3466,
    "longitude": 108.246
  },
  "WARC": {
    "airport": "Ngloram Airport",
    "latitude": -7.19484,
    "longitude": 111.548
  },
  "WAHL": {
    "airport": "Tunggul Wulung Airport",
    "latitude": -7.64506,
    "longitude": 109.034
  },
  "WAHP": {
    "airport": "Wirasaba Airport",
    "latitude": -7.46167,
    "longitude": 109.417
  },
  "WARQ": {
    "airport": "Adisumarmo International Airport",
    "latitude": -7.51609,
    "longitude": 110.757
  },
  "WARS": {
    "airport": "Achmad Yani International Airport",
    "latitude": -6.97273,
    "longitude": 110.375
  },
  "WAHI": {
    "airport": "Yogyakarta International Airport",
    "latitude": -7.90534,
    "longitude": 110.057
  },
  "WADY": {
    "airport": "Blimbingsari Airport",
    "latitude": -8.31015,
    "longitude": 114.34
  },
  "WARE": {
    "airport": "Notohadinegoro Airport",
    "latitude": -8.23806,
    "longitude": 113.694
  },
  "WARA": {
    "airport": "Abdul Rachman Saleh Airport",
    "latitude": -7.92656,
    "longitude": 112.715
  },
  "WARR": {
    "airport": "Juanda International Airport",
    "latitude": -7.37983,
    "longitude": 112.787
  },
  "WART": {
    "airport": "Trunojoyo Airport",
    "latitude": -7.0242,
    "longitude": 113.89
  },
  "WIOK": {
    "airport": "Rahadi Osman Airport (Ketapang Airport)",
    "latitude": -1.81664,
    "longitude": 109.963
  },
  "WIOO": {
    "airport": "Supadio Airport",
    "latitude": -0.150711,
    "longitude": 109.404
  },
  "WIOP": {
    "airport": "Pangsuma Airport",
    "latitude": 0.835578,
    "longitude": 112.937
  },
  "WIOS": {
    "airport": "Sintang Airport (Susilo Airport)",
    "latitude": 0.063619,
    "longitude": 111.473
  },
  "WAOO": {
    "airport": "Syamsudin Noor Airport",
    "latitude": -3.44236,
    "longitude": 114.763
  },
  "WAOC": {
    "airport": "Batu Licin Airport",
    "latitude": -3.41241,
    "longitude": 115.995
  },
  "WRBK": {
    "airport": "Gusti Syamsir Alam Airport (Stagen Airport)",
    "latitude": -3.29472,
    "longitude": 116.165
  },
  "WAON": {
    "airport": "Warukin Airport",
    "latitude": -2.21656,
    "longitude": 115.436
  },
  "WIOG": {
    "airport": "Nanga Pinoh Airport",
    "latitude": -0.348869,
    "longitude": 111.748
  },
  "WAOI": {
    "airport": "Iskandar Airport",
    "latitude": -2.7052,
    "longitude": 111.673
  },
  "WAGG": {
    "airport": "Tjilik Riwut Airport",
    "latitude": -2.22513,
    "longitude": 113.943
  },
  "WAOS": {
    "airport": "H. Asan Airport",
    "latitude": -2.49919,
    "longitude": 112.975
  },
  "WAOW": {
    "airport": "Tumbang Samba Airport",
    "latitude": -1.4694,
    "longitude": 113.083
  },
  "WALS": {
    "airport": "APT Pranoto International Airport",
    "latitude": -0.374448,
    "longitude": 117.249
  },
  "WALK": {
    "airport": "Kalimarau Airport",
    "latitude": 2.1555,
    "longitude": 117.432
  },
  "WALL": {
    "airport": "Sultan Aji Muhammad Sulaiman Airport",
    "latitude": -1.26827,
    "longitude": 116.894
  },
  "WRLC": {
    "airport": "PT Badak Bontang Airport",
    "latitude": 0.119691,
    "longitude": 117.475
  },
  "WALJ": {
    "airport": "Datadawai Airport",
    "latitude": 0.8106,
    "longitude": 114.531
  },
  "WALE": {
    "airport": "West Kutai Airport",
    "latitude": -0.2064,
    "longitude": 115.76045
  },
  "WRLA": {
    "airport": "Sangkimah Airport",
    "latitude": 0.3847,
    "longitude": 117.543
  },
  "WRLH": {
    "airport": "Tanah Grogot Airport",
    "latitude": -1.91013,
    "longitude": 116.202
  },
  "WALT": {
    "airport": "Tanjung Santan Airport",
    "latitude": -0.092973,
    "longitude": 117.453
  },
  "WALV": {
    "airport": "Bunyu Airport",
    "latitude": 3.45572,
    "longitude": 117.867
  },
  "WRLB": {
    "airport": "Juvai Semaring Airport (Long Bawan Airport)",
    "latitude": 3.9028,
    "longitude": 115.692
  },
  "WALM": {
    "airport": "Malinau Robbert Atty Bessing Airport",
    "latitude": 3.5764,
    "longitude": 116.6182
  },
  "WRLP": {
    "airport": "Long Apung Airport",
    "latitude": 1.70449,
    "longitude": 114.97
  },
  "WRLF": {
    "airport": "Nunukan Airport",
    "latitude": 4.13333,
    "longitude": 117.667
  },
  "WAGD": {
    "airport": "Tanjung Harapan Airport",
    "latitude": 2.83583,
    "longitude": 117.374
  },
  "WITA": {
    "airport": "Teuku Cut Ali Airport",
    "latitude": 3.1707,
    "longitude": 97.2869
  },
  "WALR": {
    "airport": "Juwata International Airport",
    "latitude": 3.32667,
    "longitude": 117.569
  },
  "WIOM": {
    "airport": "Matak Airport (Tarempa Airport)",
    "latitude": 3.34812,
    "longitude": 106.258
  },
  "WIPK": {
    "airport": "Depati Amir Airport",
    "latitude": -2.1622,
    "longitude": 106.139
  },
  "WIKD": {
    "airport": "H.A.S. Hanandjoeddin Airport (Buluh Tumbang Airport)",
    "latitude": -2.74572,
    "longitude": 107.755
  },
  "WIDD": {
    "airport": "Hang Nadim Airport",
    "latitude": 1.12103,
    "longitude": 104.119
  },
  "WIDL": {
    "airport": "Letung Anambas Jemaja Island Airport",
    "latitude": 2.9621,
    "longitude": 105.7551
  },
  "WION": {
    "airport": "Ranai Airport",
    "latitude": 3.90871,
    "longitude": 108.388
  },
  "WIDN": {
    "airport": "Raja Haji Fisabilillah Airport",
    "latitude": 0.922683,
    "longitude": 104.532
  },
  "WIAG": {
    "airport": "Gunung Batin Airport",
    "latitude": -4.61114,
    "longitude": 105.232
  },
  "WILL": {
    "airport": "Radin Inten II Airport",
    "latitude": -5.24056,
    "longitude": 105.176
  },
  "WAMA": {
    "airport": "Gamarmalamo Airport",
    "latitude": 1.83833,
    "longitude": 127.786
  },
  "WAPH": {
    "airport": "Oesman Sadik Airport",
    "latitude": -0.635259,
    "longitude": 127.502
  },
  "WAPE": {
    "airport": "Mangole Airport",
    "latitude": -1.87579,
    "longitude": 125.83
  },
  "WAMR": {
    "airport": "Pitu Airport",
    "latitude": 2.04599,
    "longitude": 128.325
  },
  "WAPN": {
    "airport": "Sanana Airport",
    "latitude": -2.08051,
    "longitude": 125.967
  },
  "WAPT": {
    "airport": "Taliabu Airport",
    "latitude": -1.64263,
    "longitude": 124.559
  },
  "WAEE": {
    "airport": "Sultan Babullah Airport",
    "latitude": 0.831414,
    "longitude": 127.381
  },
  "WAPA": {
    "airport": "Amahai Airport",
    "latitude": -3.348,
    "longitude": 128.926
  },
  "WAPP": {
    "airport": "Pattimura Airport",
    "latitude": -3.71026,
    "longitude": 128.089
  },
  "WAPK": {
    "airport": "Benjina Airport (Nangasuri Airport)",
    "latitude": -6.0662,
    "longitude": 134.274
  },
  "WAPD": {
    "airport": "Dobo Airport",
    "latitude": -5.77222,
    "longitude": 134.212
  },
  "WAMJ": {
    "airport": "Gebe Airport",
    "latitude": -0.078889,
    "longitude": 129.458
  },
  "WAMK": {
    "airport": "Kao Airport",
    "latitude": 1.18528,
    "longitude": 127.896
  },
  "WAPF": {
    "airport": "Karel Sadsuitubun Airport",
    "latitude": -5.76028,
    "longitude": 132.759
  },
  "WAPR": {
    "airport": "Namlea Airport",
    "latitude": -3.23557,
    "longitude": 127.1
  },
  "WAPC": {
    "airport": "Bandanaira Airport",
    "latitude": -4.5214,
    "longitude": 129.905
  },
  "WAPG": {
    "airport": "Namrole Airport",
    "latitude": -3.8548,
    "longitude": 126.701
  },
  "WAPI": {
    "airport": "Saumlaki Airport (Olilit Airport)",
    "latitude": -7.98861,
    "longitude": 131.306
  },
  "WAPV": {
    "airport": "Wahai Airport",
    "latitude": -2.8114,
    "longitude": 129.484
  },
  "WADB": {
    "airport": "Sultan Muhammad Salahudin Airport (Bima Airport)",
    "latitude": -8.53965,
    "longitude": 118.687
  },
  "WADL": {
    "airport": "Lombok International Airport",
    "latitude": -8.75732,
    "longitude": 116.277
  },
  "WADU": {
    "airport": "Lunyuk Airport",
    "latitude": -8.9889,
    "longitude": 117.216
  },
  "WADS": {
    "airport": "Sultan Muhammad Kaharuddin III Airport (Brangbiji Airport)",
    "latitude": -8.48904,
    "longitude": 117.412
  },
  "WATA": {
    "airport": "A.A. Bere Tallo Airport",
    "latitude": -9.07305,
    "longitude": 124.905
  },
  "WATM": {
    "airport": "Alor Island Airport",
    "latitude": -8.13234,
    "longitude": 124.597
  },
  "WRKB": {
    "airport": "Bajawa Soa Airport",
    "latitude": -8.70743,
    "longitude": 121.057
  },
  "WATE": {
    "airport": "H. Hasan Aroeboesman Airport",
    "latitude": -8.84929,
    "longitude": 121.661
  },
  "WATT": {
    "airport": "El Tari Airport",
    "latitude": -10.1716,
    "longitude": 123.671
  },
  "WATO": {
    "airport": "Komodo Airport",
    "latitude": -8.48666,
    "longitude": 119.889
  },
  "WATL": {
    "airport": "Gewayantana Airport",
    "latitude": -8.27442,
    "longitude": 123.002
  },
  "WATW": {
    "airport": "Wonopito Airport",
    "latitude": -8.3629,
    "longitude": 123.438
  },
  "WATC": {
    "airport": "Frans Seda Airport (Wai Oti Airport)",
    "latitude": -8.64065,
    "longitude": 122.237
  },
  "WATG": {
    "airport": "Frans Sales Lega Airport",
    "latitude": -8.59701,
    "longitude": 120.477
  },
  "WATR": {
    "airport": "David Constantijn Saudale Airport",
    "latitude": -10.7673,
    "longitude": 123.075
  },
  "WATS": {
    "airport": "Tardamu Airport",
    "latitude": -10.4924,
    "longitude": 121.848
  },
  "WADT": {
    "airport": "Tambolaka Airport (Waikabubak Airport)",
    "latitude": -9.40972,
    "longitude": 119.244
  },
  "WADW": {
    "airport": "Mau Hau Airport (Umbu Mehang Kunda Airport)",
    "latitude": -9.66922,
    "longitude": 120.302
  },
  "WASG": {
    "airport": "Anggi Airport",
    "latitude": -1.3858,
    "longitude": 133.874
  },
  "WASO": {
    "airport": "Babo Airport",
    "latitude": -2.53224,
    "longitude": 133.439
  },
  "WASF": {
    "airport": "Fakfak Torea Airport",
    "latitude": -2.92019,
    "longitude": 132.267
  },
  "WASI": {
    "airport": "Inanwatan Airport",
    "latitude": -2.1281,
    "longitude": 132.161
  },
  "WASU": {
    "airport": "Kambuaya Airport",
    "latitude": -1.3169,
    "longitude": 132.286
  },
  "WASE": {
    "airport": "Kebar Airport",
    "latitude": -0.637101,
    "longitude": 133.128
  },
  "WASK": {
    "airport": "Kaimana Airport",
    "latitude": -3.64452,
    "longitude": 133.696
  },
  "WASR": {
    "airport": "Rendani Airport",
    "latitude": -0.891833,
    "longitude": 134.049
  },
  "WASB": {
    "airport": "Stenkol Airport",
    "latitude": -2.1033,
    "longitude": 133.516
  },
  "WASM": {
    "airport": "Merdey Airport (Jahabra Airport)",
    "latitude": -1.58333,
    "longitude": 133.333
  },
  "WASN": {
    "airport": "Marinda Airport",
    "latitude": -0.423056,
    "longitude": 130.773
  },
  "WASC": {
    "airport": "Abresso Airport",
    "latitude": -1.49677,
    "longitude": 134.175
  },
  "WASS": {
    "airport": "Dominique Edward Osok Airport",
    "latitude": -0.894,
    "longitude": 131.287
  },
  "WAST": {
    "airport": "Teminabuan Airport",
    "latitude": -1.44472,
    "longitude": 132.021
  },
  "WAJA": {
    "airport": "Arso Airport",
    "latitude": -2.93333,
    "longitude": 140.783
  },
  "WABB": {
    "airport": "Frans Kaisiepo Airport",
    "latitude": -1.19002,
    "longitude": 136.108
  },
  "WAJB": {
    "airport": "Bokondini Airport",
    "latitude": -3.6822,
    "longitude": 138.676
  },
  "WAKE": {
    "airport": "Bade Airport",
    "latitude": -7.1759,
    "longitude": 139.583
  },
  "WAJG": {
    "airport": "Batom Airport",
    "latitude": -4.16667,
    "longitude": 140.85
  },
  "WAJJ": {
    "airport": "Sentani Airport",
    "latitude": -2.57695,
    "longitude": 140.516
  },
  "WAJC": {
    "airport": "Dabra Airport",
    "latitude": -3.2705,
    "longitude": 138.613
  },
  "WAJN": {
    "airport": "Elelim Airport",
    "latitude": -3.7826,
    "longitude": 139.386
  },
  "WABT": {
    "airport": "Enarotali Airport",
    "latitude": -3.9259,
    "longitude": 136.377
  },
  "WABL": {
    "airport": "Illaga Airport",
    "latitude": -3.97648,
    "longitude": 137.622
  },
  "WABE": {
    "airport": "Ilu Airport",
    "latitude": -3.7051,
    "longitude": 138.2
  },
  "WABK": {
    "airport": "Karubaga Airport",
    "latitude": -3.684,
    "longitude": 138.479
  },
  "WAKM": {
    "airport": "Kamur Airport",
    "latitude": -6.1851,
    "longitude": 138.637
  },
  "WAKP": {
    "airport": "Kepi Airport",
    "latitude": -6.5418,
    "longitude": 139.332
  },
  "WABN": {
    "airport": "Kokonao Airport",
    "latitude": -4.71075,
    "longitude": 136.435
  },
  "WAJL": {
    "airport": "Lereh Airport",
    "latitude": -3.0795,
    "longitude": 139.952
  },
  "WAJM": {
    "airport": "Mulia Airport",
    "latitude": -3.7018,
    "longitude": 137.957
  },
  "WAKD": {
    "airport": "Mindiptana Airport",
    "latitude": -5.75,
    "longitude": 140.367
  },
  "WAKK": {
    "airport": "Mopah Airport",
    "latitude": -8.52029,
    "longitude": 140.418
  },
  "WABI": {
    "airport": "Nabire Airport",
    "latitude": -3.36818,
    "longitude": 135.496
  },
  "WABR": {
    "airport": "Obano Airport",
    "latitude": -3.9106,
    "longitude": 136.231
  },
  "WAJO": {
    "airport": "Gunung Bintang Airport",
    "latitude": -4.9071,
    "longitude": 140.628
  },
  "WAKO": {
    "airport": "Okaba Airport",
    "latitude": -8.0946,
    "longitude": 139.723
  },
  "WABD": {
    "airport": "Moanamani Airport",
    "latitude": -3.9834,
    "longitude": 136.083
  },
  "WAJE": {
    "airport": "Yuruf Airport",
    "latitude": -3.6333,
    "longitude": 140.958
  },
  "WAJS": {
    "airport": "Senggeh Airport",
    "latitude": -3.45,
    "longitude": 140.779
  },
  "WABP": {
    "airport": "Mozes Kilangin Airport",
    "latitude": -4.52828,
    "longitude": 136.887
  },
  "WAKT": {
    "airport": "Tanah Merah Airport",
    "latitude": -6.09922,
    "longitude": 140.298
  },
  "WAJU": {
    "airport": "Ubrub Airport",
    "latitude": -3.67565,
    "longitude": 140.884
  },
  "WABV": {
    "airport": "Bilogai Airport",
    "latitude": -3.73956,
    "longitude": 137.032
  },
  "WAJR": {
    "airport": "Waris Airport",
    "latitude": -3.235,
    "longitude": 140.994
  },
  "WABG": {
    "airport": "Waghete Airport",
    "latitude": -4.04423,
    "longitude": 136.278
  },
  "WAVV": {
    "airport": "Wamena Airport",
    "latitude": -4.10251,
    "longitude": 138.957
  },
  "WASW": {
    "airport": "Wasior Airport",
    "latitude": -2.721,
    "longitude": 134.506
  },
  "WAKQ": {
    "airport": "Senggo Airport",
    "latitude": -5.6908,
    "longitude": 139.35
  },
  "WABO": {
    "airport": "Serui Airport",
    "latitude": -1.87558,
    "longitude": 136.241
  },
  "WAJI": {
    "airport": "Sarmi Orai Airport",
    "latitude": -1.86955,
    "longitude": 138.75
  },
  "WIBD": {
    "airport": "Pinang Kampai Airport",
    "latitude": 1.60919,
    "longitude": 101.434
  },
  "WIBB": {
    "airport": "Sultan Syarif Kasim II International Airport",
    "latitude": 0.460786,
    "longitude": 101.445
  },
  "WIBS": {
    "airport": "Sei Pakning Airport",
    "latitude": 1.37,
    "longitude": 102.14
  },
  "WIDS": {
    "airport": "Dabo Singkep Airport",
    "latitude": -0.479189,
    "longitude": 104.579
  },
  "WIPB": {
    "airport": "Silampari Airport",
    "latitude": -3.28,
    "longitude": 102.917
  },
  "WAFJ": {
    "airport": "Tampa Padang Airport",
    "latitude": -2.58333,
    "longitude": 119.033
  },
  "WAWT": {
    "airport": "Pongtiku Airport",
    "latitude": -3.04474,
    "longitude": 119.822
  },
  "WAWM": {
    "airport": "Andi Jemma Airport",
    "latitude": -2.55803,
    "longitude": 120.324
  },
  "WAWS": {
    "airport": "Soroako Airport",
    "latitude": -2.5312,
    "longitude": 121.358
  },
  "WAAA": {
    "airport": "Sultan Hasanuddin International Airport",
    "latitude": -5.06163,
    "longitude": 119.554
  },
  "WAMW": {
    "airport": "Syukuran Aminuddin Amir Airport",
    "latitude": -1.03892,
    "longitude": 122.772
  },
  "WAFF": {
    "airport": "Mutiara Airport",
    "latitude": -0.918542,
    "longitude": 119.91
  },
  "WAMP": {
    "airport": "Kasiguncu Airport",
    "latitude": -1.41675,
    "longitude": 120.658
  },
  "WAMI": {
    "airport": "Sultan Bantilan Airport (Lalos Airport)",
    "latitude": 1.12343,
    "longitude": 120.794
  },
  "WAWB": {
    "airport": "Betoambari Airport",
    "latitude": -5.48688,
    "longitude": 122.569
  },
  "WAWW": {
    "airport": "Wolter Monginsidi Airport",
    "latitude": -4.08161,
    "longitude": 122.418
  },
  "WAWP": {
    "airport": "Kolaka Pomala Airport",
    "latitude": -4.18109,
    "longitude": 121.618
  },
  "WAWR": {
    "airport": "Sugimanuru Airport",
    "latitude": -4.76056,
    "longitude": 122.569
  },
  "WA44": {
    "airport": "Maranggo Airport",
    "latitude": -5.76457,
    "longitude": 123.917
  },
  "WIME": {
    "airport": "Aek Godang Airport",
    "latitude": 1.4001,
    "longitude": 99.4305
  },
  "WIMN": {
    "airport": "Silangit Airport",
    "latitude": 2.25973,
    "longitude": 98.9919
  },
  "WIMS": {
    "airport": "Ferdinand Lumban Tobing Airport",
    "latitude": 1.55594,
    "longitude": 98.8889
  },
  "WIMB": {
    "airport": "Binaka Airport",
    "latitude": 1.16638,
    "longitude": 97.7047
  },
  "WIMM": {
    "airport": "Kualanamu International Airport",
    "latitude": 3.64222,
    "longitude": 98.8853
  },
  "WAMM": {
    "airport": "Sam Ratulangi International Airport",
    "latitude": 1.54926,
    "longitude": 124.926
  },
  "WIMK": {
    "airport": "Soewondo Air Force Base",
    "latitude": 3.55917,
    "longitude": 98.6711
  },
  "WAMN": {
    "airport": "Melangguane Airport",
    "latitude": 4.00694,
    "longitude": 126.673
  },
  "WAMH": {
    "airport": "Naha Airport",
    "latitude": 3.68321,
    "longitude": 125.528
  },
  "WIMP": {
    "airport": "Sibisa Airport",
    "latitude": 2.66667,
    "longitude": 98.9333
  },
  "WIPT": {
    "airport": "Minangkabau International Airport",
    "latitude": -0.786917,
    "longitude": 100.281
  },
  "WIDE": {
    "airport": "Tuanku Tambusai Airport",
    "latitude": 0.845431,
    "longitude": 100.37
  },
  "WIBR": {
    "airport": "Rokot Airport",
    "latitude": -0.95,
    "longitude": 100.75
  },
  "WIPV": {
    "airport": "Keluang Airport",
    "latitude": -2.62353,
    "longitude": 103.955
  },
  "WIPQ": {
    "airport": "Pendopo Airport",
    "latitude": -3.28607,
    "longitude": 103.88
  },
  "WIPP": {
    "airport": "Sultan Mahmud Badaruddin II International Airport",
    "latitude": -2.89825,
    "longitude": 104.7
  },
  "WADA": {
    "airport": "Selaparang Airport",
    "latitude": -8.56056,
    "longitude": 116.094
  },
  "WASA": {
    "airport": "Ayawasi Airport",
    "latitude": -1.1593,
    "longitude": 132.463
  },
  "WIIJ": {
    "airport": "Adisucipto International Airport",
    "latitude": -7.78818,
    "longitude": 110.432
  },
  "EINN": {
    "airport": "Shannon Airport",
    "latitude": 52.702,
    "longitude": -8.92482
  },
  "EIBN": {
    "airport": "Bantry Aerodrome",
    "latitude": 51.6686,
    "longitude": -9.48417
  },
  "EICK": {
    "airport": "Cork Airport",
    "latitude": 51.8413,
    "longitude": -8.49111
  },
  "EIDL": {
    "airport": "Donegal Airport",
    "latitude": 55.0442,
    "longitude": -8.341
  },
  "EILT": {
    "airport": "Letterkenny Airfield",
    "latitude": 54.9513,
    "longitude": -7.67283
  },
  "EIDW": {
    "airport": "Dublin Airport",
    "latitude": 53.4213,
    "longitude": -6.27007
  },
  "EICM": {
    "airport": "Galway Airport",
    "latitude": 53.3002,
    "longitude": -8.94159
  },
  "EIMN": {
    "airport": "Inishmaan Aerodrome",
    "latitude": 53.093,
    "longitude": -9.56806
  },
  "EIIR": {
    "airport": "Inisheer Aerodrome",
    "latitude": 53.0647,
    "longitude": -9.5109
  },
  "EIIM": {
    "airport": "Inishmore Aerodrome (Kilronan Airport)",
    "latitude": 53.1067,
    "longitude": -9.65361
  },
  "EICA": {
    "airport": "Connemara Airport",
    "latitude": 53.2303,
    "longitude": -9.46778
  },
  "EIKY": {
    "airport": "Kerry Airport (Farranfore Airport)",
    "latitude": 52.1809,
    "longitude": -9.52378
  },
  "EIKK": {
    "airport": "Kilkenny Airport",
    "latitude": 52.6508,
    "longitude": -7.29611
  },
  "EIBT": {
    "airport": "Belmullet Aerodrome",
    "latitude": 54.2228,
    "longitude": -10.0308
  },
  "EIKN": {
    "airport": "Ireland West Airport Knock",
    "latitude": 53.9103,
    "longitude": -8.81849
  },
  "EISG": {
    "airport": "Sligo Airport",
    "latitude": 54.2802,
    "longitude": -8.59921
  },
  "EIWF": {
    "airport": "Waterford Airport",
    "latitude": 52.1872,
    "longitude": -7.08696
  },
  "LLBS": {
    "airport": "Beersheba Airport",
    "latitude": 31.287,
    "longitude": 34.723
  },
  "LLEY": {
    "airport": "Ein Yahav Airfield",
    "latitude": 30.6217,
    "longitude": 35.2033
  },
  "LLET": {
    "airport": "J. Hozman Airport",
    "latitude": 29.5613,
    "longitude": 34.9601
  },
  "LLER": {
    "airport": "Ramon Airport",
    "latitude": 29.7237,
    "longitude": 35.0114
  },
  "LLMR": {
    "airport": "Mitzpe Ramon Airport",
    "latitude": 30.7761,
    "longitude": 34.6667
  },
  "LLMZ": {
    "airport": "Bar Yehuda Airfield (Masada Airfield)",
    "latitude": 31.3282,
    "longitude": 35.3886
  },
  "LLOV": {
    "airport": "Ovda Airport",
    "latitude": 29.9403,
    "longitude": 34.9358
  },
  "LLNV": {
    "airport": "Nevatim Airbase",
    "latitude": 31.2083,
    "longitude": 35.0123
  },
  "LLYT": {
    "airport": "Yotvata Airfield",
    "latitude": 29.9011,
    "longitude": 35.0675
  },
  "LLKS": {
    "airport": "Kiryat Shmona Airport",
    "latitude": 33.2167,
    "longitude": 35.6
  },
  "LLIB": {
    "airport": "Rosh Pina Airport",
    "latitude": 32.981,
    "longitude": 35.5719
  },
  "LLHA": {
    "airport": "Haifa Airport (Uri Michaeli Airport)",
    "latitude": 32.8094,
    "longitude": 35.0431
  },
  "LLSD": {
    "airport": "Sde Dov Airport",
    "latitude": 32.1147,
    "longitude": 34.7822
  },
  "LLBG": {
    "airport": "Ben Gurion Airport",
    "latitude": 32.0114,
    "longitude": 34.8867
  },
  "OJJR": {
    "airport": "Atarot Airport (Jerusalem International Airport)",
    "latitude": 31.8647,
    "longitude": 35.2192
  },
  "VOCX": {
    "airport": "Car Nicobar Air Force Base",
    "latitude": 9.15251,
    "longitude": 92.8196
  },
  "VOPB": {
    "airport": "Veer Savarkar International Airport (Port Blair Airport)",
    "latitude": 11.6412,
    "longitude": 92.7297
  },
  "VIBY": {
    "airport": "Bareilly Airport",
    "latitude": 28.4221,
    "longitude": 79.4508
  },
  "VOCP": {
    "airport": "Kadapa Airport",
    "latitude": 14.51,
    "longitude": 78.7728
  },
  "VOKU": {
    "airport": "Kurnool Airport",
    "latitude": 15.7132,
    "longitude": 78.1612
  },
  "VOPN": {
    "airport": "Sri Sathya Sai Airport",
    "latitude": 14.1493,
    "longitude": 77.7911
  },
  "VORY": {
    "airport": "Rajahmundry Airport",
    "latitude": 17.1104,
    "longitude": 81.8182
  },
  "VOTP": {
    "airport": "Tirupati Airport",
    "latitude": 13.6325,
    "longitude": 79.5433
  },
  "VOBZ": {
    "airport": "Vijayawada Airport",
    "latitude": 16.5304,
    "longitude": 80.7968
  },
  "VEVZ": {
    "airport": "Visakhapatnam Airport",
    "latitude": 17.7212,
    "longitude": 83.2245
  },
  "VEPG": {
    "airport": "Pasighat Airport",
    "latitude": 28.0661,
    "longitude": 95.3356
  },
  "VEAN": {
    "airport": "Along Airport",
    "latitude": 28.1753,
    "longitude": 94.802
  },
  "VETJ": {
    "airport": "Tezu Airport",
    "latitude": 27.9412,
    "longitude": 96.1344
  },
  "VEZO": {
    "airport": "Zero Airport (Ziro Airport)",
    "latitude": 27.5883,
    "longitude": 93.8281
  },
  "VEDZ": {
    "airport": "Daporijo Airport",
    "latitude": 27.9855,
    "longitude": 94.2228
  },
  "VEMN": {
    "airport": "Dibrugarh Airport (Mohanbari Airport)",
    "latitude": 27.4839,
    "longitude": 95.0169
  },
  "VEGT": {
    "airport": "Lokpriya Gopinath Bordoloi International Airport",
    "latitude": 26.1061,
    "longitude": 91.5859
  },
  "VELR": {
    "airport": "Lilabari Airport",
    "latitude": 27.2955,
    "longitude": 94.0976
  },
  "VEKW": {
    "airport": "Khowai Airport",
    "latitude": 24.0619,
    "longitude": 91.6039
  },
  "VEKM": {
    "airport": "Kamalpur Airport",
    "latitude": 24.1317,
    "longitude": 91.8142
  },
  "VEKU": {
    "airport": "Silchar Airport (Kumbhirgram Air Force Base)",
    "latitude": 24.9129,
    "longitude": 92.9787
  },
  "VEJT": {
    "airport": "Jorhat Airport (Rowriah Airport)",
    "latitude": 26.7315,
    "longitude": 94.1755
  },
  "VERU": {
    "airport": "Rupsi Airport",
    "latitude": 26.1397,
    "longitude": 89.91
  },
  "VETZ": {
    "airport": "Tezpur Airport",
    "latitude": 26.7091,
    "longitude": 92.7847
  },
  "VEDH": {
    "airport": "Darbhanga Airport",
    "latitude": 26.1947,
    "longitude": 85.9175
  },
  "VEGY": {
    "airport": "Gaya Airport (Bodhgaya Airport)",
    "latitude": 24.7443,
    "longitude": 84.9512
  },
  "VEMZ": {
    "airport": "Muzaffarpur Airport",
    "latitude": 26.1191,
    "longitude": 85.3137
  },
  "VEPT": {
    "airport": "Lok Nayak Jayaprakash Airport",
    "latitude": 25.5913,
    "longitude": 85.088
  },
  "VICG": {
    "airport": "Chandigarh Airport",
    "latitude": 30.6735,
    "longitude": 76.7885
  },
  "VEBU": {
    "airport": "Bilaspur Airport",
    "latitude": 21.9884,
    "longitude": 82.111
  },
  "VARP": {
    "airport": "Swami Vivekananda Airport",
    "latitude": 21.1804,
    "longitude": 81.7388
  },
  "VADN": {
    "airport": "Daman Airport",
    "latitude": 20.4344,
    "longitude": 72.8432
  },
  "VIDP": {
    "airport": "Indira Gandhi International Airport",
    "latitude": 28.5665,
    "longitude": 77.1031
  },
  "VOGO": {
    "airport": "Goa International Airport (Dabolim Airport)",
    "latitude": 15.3808,
    "longitude": 73.8314
  },
  "VOGA": {
    "airport": "Manohar International Airport (Goa)",
    "latitude": 15.7312,
    "longitude": 73.8666
  },
  "VAAH": {
    "airport": "Sardar Vallabhbhai Patel International Airport",
    "latitude": 23.0772,
    "longitude": 72.6347
  },
  "VABO": {
    "airport": "Vadodara Airport (Civil Airport Harni)",
    "latitude": 22.3362,
    "longitude": 73.2263
  },
  "VABJ": {
    "airport": "Bhuj Airport / Bhuj Rudra Mata Air Force Base",
    "latitude": 23.2878,
    "longitude": 69.6702
  },
  "VABV": {
    "airport": "Bhavnagar Airport",
    "latitude": 21.7522,
    "longitude": 72.1852
  },
  "VAHS": {
    "airport": "Rajkot International Airport",
    "latitude": 22.3813,
    "longitude": 71.0319
  },
  "VAKS": {
    "airport": "Keshod Airport",
    "latitude": 21.3171,
    "longitude": 70.2704
  },
  "VAKE": {
    "airport": "Kandla Airport (Gandhidham Airport)",
    "latitude": 23.1127,
    "longitude": 70.1003
  },
  "VAJM": {
    "airport": "Jamnagar Airport (Govardhanpur Airport)",
    "latitude": 22.4655,
    "longitude": 70.0126
  },
  "VAPR": {
    "airport": "Porbandar Airport",
    "latitude": 21.6487,
    "longitude": 69.6572
  },
  "VARK": {
    "airport": "Rajkot Airport",
    "latitude": 22.3092,
    "longitude": 70.7795
  },
  "VASU": {
    "airport": "Surat Airport",
    "latitude": 21.1141,
    "longitude": 72.7418
  },
  "VIHR": {
    "airport": "Hisar Airport",
    "latitude": 29.1794,
    "longitude": 75.7553
  },
  "VIGG": {
    "airport": "Gaggal Airport",
    "latitude": 32.1651,
    "longitude": 76.2634
  },
  "VIBR": {
    "airport": "Bhuntar Airport (Kullu Manali Airport)",
    "latitude": 31.8767,
    "longitude": 77.1544
  },
  "VISM": {
    "airport": "Shimla Airport",
    "latitude": 31.0818,
    "longitude": 77.068
  },
  "VIJU": {
    "airport": "Jammu Airport (Satwari Airport)",
    "latitude": 32.6891,
    "longitude": 74.8374
  },
  "VILH": {
    "airport": "Kushok Bakula Rimpochee Airport",
    "latitude": 34.1359,
    "longitude": 77.5465
  },
  "VISR": {
    "airport": "Sheikh ul Alam International Airport",
    "latitude": 33.9871,
    "longitude": 74.7742
  },
  "VEDB": {
    "airport": "Dhanbad Airport",
    "latitude": 23.834,
    "longitude": 86.4253
  },
  "VEDO": {
    "airport": "Deoghar Airport",
    "latitude": 24.4433,
    "longitude": 86.7065
  },
  "VERC": {
    "airport": "Birsa Munda Airport",
    "latitude": 23.3143,
    "longitude": 85.3217
  },
  "VEJS": {
    "airport": "Sonari Airport",
    "latitude": 22.8132,
    "longitude": 86.1688
  },
  "VOBI": {
    "airport": "Bellary Airport",
    "latitude": 15.1628,
    "longitude": 76.8828
  },
  "VOBL": {
    "airport": "Kempegowda International Airport",
    "latitude": 13.1979,
    "longitude": 77.7063
  },
  "VAHB": {
    "airport": "Hubli Airport",
    "latitude": 15.3617,
    "longitude": 75.0849
  },
  "VOML": {
    "airport": "Mangalore Airport",
    "latitude": 12.9613,
    "longitude": 74.8901
  },
  "VABM": {
    "airport": "Belgaum Airport",
    "latitude": 15.8593,
    "longitude": 74.6183
  },
  "VOMY": {
    "airport": "Mysore Airport (Mandakalli Airport)",
    "latitude": 12.23,
    "longitude": 76.6558
  },
  "VOJV": {
    "airport": "Vidyanagar Airport (Jindal Airport)",
    "latitude": 15.175,
    "longitude": 76.6349
  },
  "VOCL": {
    "airport": "Calicut International Airport",
    "latitude": 11.1368,
    "longitude": 75.9553
  },
  "VOKN": {
    "airport": "Kannur International Airport",
    "latitude": 11.9186,
    "longitude": 75.5472
  },
  "VOCI": {
    "airport": "Cochin International Airport (Nedumbassery Airport)",
    "latitude": 10.152,
    "longitude": 76.4019
  },
  "VOTV": {
    "airport": "Trivandrum International Airport",
    "latitude": 8.48212,
    "longitude": 76.9201
  },
  "VOAT": {
    "airport": "Agatti Aerodrome",
    "latitude": 10.8237,
    "longitude": 72.176
  },
  "VABP": {
    "airport": "Raja Bhoj Airport",
    "latitude": 23.2875,
    "longitude": 77.3374
  },
  "VAGN": {
    "airport": "Guna Airport",
    "latitude": 24.6547,
    "longitude": 77.3473
  },
  "VIGR": {
    "airport": "Rajmata Vijaya Raje Scindia Airport (Gwalior Airport)",
    "latitude": 26.2933,
    "longitude": 78.2278
  },
  "VAKJ": {
    "airport": "Civil Aerodrome Khajuraho",
    "latitude": 24.8172,
    "longitude": 79.9186
  },
  "VAID": {
    "airport": "Devi Ahilyabai Holkar International Airport",
    "latitude": 22.7218,
    "longitude": 75.8011
  },
  "VAJB": {
    "airport": "Jabalpur Airport (Dumna Airport)",
    "latitude": 23.1778,
    "longitude": 80.052
  },
  "VIST": {
    "airport": "Satna Airport",
    "latitude": 24.5623,
    "longitude": 80.8549
  },
  "VAAK": {
    "airport": "Akola Airport",
    "latitude": 20.699,
    "longitude": 77.0586
  },
  "VABB": {
    "airport": "Chhatrapati Shivaji International Airport",
    "latitude": 19.0887,
    "longitude": 72.8679
  },
  "VAOZ": {
    "airport": "Nashik Airport",
    "latitude": 20.1191,
    "longitude": 73.9129
  },
  "VAAU": {
    "airport": "Aurangabad Airport (Chikkalthana Airport)",
    "latitude": 19.8627,
    "longitude": 75.3981
  },
  "VAJL": {
    "airport": "Jalgaon Airport",
    "latitude": 20.9614,
    "longitude": 75.6192
  },
  "VAKP": {
    "airport": "Kolhapur Airport",
    "latitude": 16.6647,
    "longitude": 74.2894
  },
  "VALT": {
    "airport": "Latur Airport",
    "latitude": 18.4115,
    "longitude": 76.4647
  },
  "VANP": {
    "airport": "Dr. Babasaheb Ambedkar International Airport",
    "latitude": 21.0922,
    "longitude": 79.0472
  },
  "VAND": {
    "airport": "Shri Guru Gobind Singh Ji Airport",
    "latitude": 19.1833,
    "longitude": 77.3167
  },
  "VAPO": {
    "airport": "Pune Airport",
    "latitude": 18.5821,
    "longitude": 73.9197
  },
  "VARG": {
    "airport": "Ratnagiri Airport",
    "latitude": 17.0136,
    "longitude": 73.3278
  },
  "VASL": {
    "airport": "Solapur Airport",
    "latitude": 17.628,
    "longitude": 75.9348
  },
  "VEIM": {
    "airport": "Imphal International Airport (Tulihal Airport)",
    "latitude": 24.76,
    "longitude": 93.8967
  },
  "VEBI": {
    "airport": "Shillong Airport (Barapani Airport)",
    "latitude": 25.7036,
    "longitude": 91.9787
  },
  "VELP": {
    "airport": "Lengpui Airport",
    "latitude": 23.8406,
    "longitude": 92.6197
  },
  "VEMR": {
    "airport": "Dimapur Airport",
    "latitude": 25.8839,
    "longitude": 93.7711
  },
  "VEBS": {
    "airport": "Biju Patnaik International Airport",
    "latitude": 20.2444,
    "longitude": 85.8178
  },
  "VEJH": {
    "airport": "Veer Surendra Sai Jharsuguda Airport",
    "latitude": 21.9159,
    "longitude": 84.0464
  },
  "VIJR": {
    "airport": "Jaisalmer Airport",
    "latitude": 26.8887,
    "longitude": 70.865
  },
  "VEJP": {
    "airport": "Jeypore Airport",
    "latitude": 18.88,
    "longitude": 82.552
  },
  "VERK": {
    "airport": "Rourkela Airport",
    "latitude": 22.2567,
    "longitude": 84.8146
  },
  "VEUK": {
    "airport": "Utkela Airport",
    "latitude": 20.0976,
    "longitude": 83.1829
  },
  "VOPC": {
    "airport": "Puducherry Airport",
    "latitude": 11.968,
    "longitude": 79.812
  },
  "VIAX": {
    "airport": "Adampur Airport",
    "latitude": 31.4331,
    "longitude": 75.7606
  },
  "VIAR": {
    "airport": "Sri Guru Ram Dass Jee International Airport",
    "latitude": 31.7096,
    "longitude": 74.7973
  },
  "VIBT": {
    "airport": "Bathinda Airport (Bhisiana Air Force Station)",
    "latitude": 30.2701,
    "longitude": 74.7558
  },
  "VIPK": {
    "airport": "Pathankot Airport",
    "latitude": 32.2336,
    "longitude": 75.6344
  },
  "VILD": {
    "airport": "Sahnewal Airport (Ludhiana Airport)",
    "latitude": 30.8547,
    "longitude": 75.9526
  },
  "VIBK": {
    "airport": "Nal Airport",
    "latitude": 28.0706,
    "longitude": 73.2072
  },
  "VIJP": {
    "airport": "Jaipur International Airport",
    "latitude": 26.8242,
    "longitude": 75.8122
  },
  "VIJO": {
    "airport": "Jodhpur Airport",
    "latitude": 26.2511,
    "longitude": 73.0489
  },
  "VIKG": {
    "airport": "Ajmer Kishangarh Airport",
    "latitude": 26.6015,
    "longitude": 74.8141
  },
  "VIKO": {
    "airport": "Kota Airport",
    "latitude": 25.1602,
    "longitude": 75.8456
  },
  "VAUD": {
    "airport": "Maharana Pratap Airport",
    "latitude": 24.6177,
    "longitude": 73.8961
  },
  "VOCB": {
    "airport": "Coimbatore International Airport",
    "latitude": 11.03,
    "longitude": 77.0434
  },
  "VOMD": {
    "airport": "Madurai Airport",
    "latitude": 9.83451,
    "longitude": 78.0934
  },
  "VOMM": {
    "airport": "Chennai International Airport",
    "latitude": 12.99,
    "longitude": 80.1693
  },
  "VONV": {
    "airport": "Neyveli Airport",
    "latitude": 11.613,
    "longitude": 79.5274
  },
  "VOSM": {
    "airport": "Salem Airport",
    "latitude": 11.7833,
    "longitude": 78.0656
  },
  "VOTK": {
    "airport": "Tuticorin Airport",
    "latitude": 8.72424,
    "longitude": 78.0258
  },
  "VOTJ": {
    "airport": "Thanjavur Air Force Station",
    "latitude": 10.7224,
    "longitude": 79.1016
  },
  "VOTR": {
    "airport": "Tiruchirappalli International Airport",
    "latitude": 10.7654,
    "longitude": 78.7097
  },
  "VOHY": {
    "airport": "Begumpet Airport",
    "latitude": 17.4531,
    "longitude": 78.4676
  },
  "VOHS": {
    "airport": "Rajiv Gandhi International Airport",
    "latitude": 17.2313,
    "longitude": 78.4299
  },
  "VORG": {
    "airport": "Ramagundam Airport (Basanth Nagar Airport)",
    "latitude": 18.701,
    "longitude": 79.3923
  },
  "VOWA": {
    "airport": "Warangal Airport",
    "latitude": 17.9144,
    "longitude": 79.6022
  },
  "VEAT": {
    "airport": "Agartala Airport (Singerbhil Airport)",
    "latitude": 23.887,
    "longitude": 91.2404
  },
  "VEKR": {
    "airport": "Kailashahar Airport",
    "latitude": 24.3082,
    "longitude": 92.0072
  },
  "VIAG": {
    "airport": "Agra Airport",
    "latitude": 27.1558,
    "longitude": 77.9609
  },
  "VEGK": {
    "airport": "Gorakhpur Airport",
    "latitude": 26.7397,
    "longitude": 83.4497
  },
  "VIDX": {
    "airport": "Ghaziabad Hindon Airport",
    "latitude": 28.705,
    "longitude": 77.342
  },
  "VIAL": {
    "airport": "Allahabad Airport (Bamrauli Air Force Base)",
    "latitude": 25.4401,
    "longitude": 81.7339
  },
  "VIKA": {
    "airport": "Kanpur Airport (Chakeri Air Force Station)",
    "latitude": 26.4043,
    "longitude": 80.4101
  },
  "VILK": {
    "airport": "Chaudhary Charan Singh International Airport",
    "latitude": 26.7606,
    "longitude": 80.8893
  },
  "VEBN": {
    "airport": "Lal Bahadur Shastri Airport",
    "latitude": 25.4524,
    "longitude": 82.8593
  },
  "VIDN": {
    "airport": "Jolly Grant Airport",
    "latitude": 30.1897,
    "longitude": 78.1803
  },
  "VIPT": {
    "airport": "Pantnagar Airport",
    "latitude": 29.0334,
    "longitude": 79.4737
  },
  "VECC": {
    "airport": "Netaji Subhas Chandra Bose International Airport",
    "latitude": 22.6547,
    "longitude": 88.4467
  },
  "VECO": {
    "airport": "Cooch Behar Airport",
    "latitude": 26.3305,
    "longitude": 89.4672
  },
  "VEBD": {
    "airport": "Bagdogra Airport",
    "latitude": 26.6812,
    "longitude": 88.3286
  },
  "VEMH": {
    "airport": "Malda Airport",
    "latitude": 25.033,
    "longitude": 88.133
  },
  "VEDG": {
    "airport": "Kazi Nazrul Islam Airport",
    "latitude": 23.6225,
    "longitude": 87.243
  },
  "VEBG": {
    "airport": "Balurghat Airport",
    "latitude": 25.2617,
    "longitude": 88.7956
  },
  "ORAA": {
    "airport": "Al Asad Airbase",
    "latitude": 33.7856,
    "longitude": 42.4412
  },
  "ORAT": {
    "airport": "Al-Taqaddum Air Base",
    "latitude": 33.3381,
    "longitude": 43.5971
  },
  "ORMM": {
    "airport": "Basra International Airport",
    "latitude": 30.5491,
    "longitude": 47.6621
  },
  "ORNI": {
    "airport": "Al Najaf International Airport",
    "latitude": 31.9899,
    "longitude": 44.4043
  },
  "ORER": {
    "airport": "Erbil International Airport",
    "latitude": 36.2376,
    "longitude": 43.9632
  },
  "ORSU": {
    "airport": "Sulaimaniyah International Airport",
    "latitude": 35.5617,
    "longitude": 45.3167
  },
  "ORBI": {
    "airport": "Baghdad International Airport",
    "latitude": 33.2625,
    "longitude": 44.2346
  },
  "ORBB": {
    "airport": "Bamarni Airport",
    "latitude": 37.0988,
    "longitude": 43.2666
  },
  "ORKK": {
    "airport": "Kirkuk Airport",
    "latitude": 35.4695,
    "longitude": 44.3489
  },
  "ORBM": {
    "airport": "Mosul International Airport",
    "latitude": 36.3058,
    "longitude": 43.1474
  },
  "OIIP": {
    "airport": "Payam International Airport",
    "latitude": 35.7761,
    "longitude": 50.8267
  },
  "OITL": {
    "airport": "Ardabil Airport",
    "latitude": 38.3257,
    "longitude": 48.4244
  },
  "OITP": {
    "airport": "Parsabad-Moghan Airport",
    "latitude": 39.6036,
    "longitude": 47.8815
  },
  "SVHG": {
    "airport": "Higuerote Airport",
    "latitude": 10.4625,
    "longitude": -66.0928
  },
  "OITU": {
    "airport": "Maku International Airport",
    "latitude": 39.33,
    "longitude": 44.43
  },
  "OITK": {
    "airport": "Khoy Airport",
    "latitude": 38.4275,
    "longitude": 44.9736
  },
  "OITR": {
    "airport": "Urmia Airport",
    "latitude": 37.6681,
    "longitude": 45.0687
  },
  "LATI": {
    "airport": "Tirana International Airport",
    "latitude": 41.4147,
    "longitude": 19.7206
  },
  "OITM": {
    "airport": "Sahand Airport",
    "latitude": 37.348,
    "longitude": 46.1279
  },
  "OITT": {
    "airport": "Tabriz International Airport",
    "latitude": 38.1339,
    "longitude": 46.235
  },
  "OIBB": {
    "airport": "Bushehr Airport",
    "latitude": 28.9448,
    "longitude": 50.8346
  },
  "OIBH": {
    "airport": "Bahregan Airport",
    "latitude": 29.84,
    "longitude": 50.2728
  },
  "OITH": {
    "airport": "Khaneh Airport (Piranshahr Airport)",
    "latitude": 36.7333,
    "longitude": 45.15
  },
  "OIBQ": {
    "airport": "Kharg Airport",
    "latitude": 29.2603,
    "longitude": 50.3239
  },
  "OIBJ": {
    "airport": "Jam Airport",
    "latitude": 27.8205,
    "longitude": 52.3522
  },
  "OIBP": {
    "airport": "Persian Gulf Airport",
    "latitude": 27.3796,
    "longitude": 52.7377
  },
  "OIFS": {
    "airport": "Shahrekord Airport",
    "latitude": 32.2972,
    "longitude": 50.8422
  },
  "OIFE": {
    "airport": "Hesa Air Base",
    "latitude": 32.9289,
    "longitude": 51.5611
  },
  "OIFM": {
    "airport": "Isfahan International Airport (Shahid Beheshti Int'l)",
    "latitude": 32.7508,
    "longitude": 51.8613
  },
  "OISF": {
    "airport": "Fasa Airport",
    "latitude": 28.8918,
    "longitude": 53.7233
  },
  "OISJ": {
    "airport": "Jahrom Airport",
    "latitude": 28.5867,
    "longitude": 53.5791
  },
  "OISR": {
    "airport": "Lamerd Airport",
    "latitude": 27.3727,
    "longitude": 53.1888
  },
  "OISL": {
    "airport": "Larestan International Airport",
    "latitude": 27.6747,
    "longitude": 54.3833
  },
  "OISS": {
    "airport": "Shiraz International Airport (Shahid Dastghaib Int'l)",
    "latitude": 29.5392,
    "longitude": 52.5898
  },
  "OIGG": {
    "airport": "Rasht Airport",
    "latitude": 37.3233,
    "longitude": 49.6178
  },
  "OING": {
    "airport": "Gorgan Airport",
    "latitude": 36.9094,
    "longitude": 54.4013
  },
  "OINE": {
    "airport": "Kalaleh Airport",
    "latitude": 37.3833,
    "longitude": 55.452
  },
  "OIHH": {
    "airport": "Hamadan Airport",
    "latitude": 34.8692,
    "longitude": 48.5525
  },
  "OIHS": {
    "airport": "Hamedan Air Base (Nogeh Airport)",
    "latitude": 35.2117,
    "longitude": 48.6533
  },
  "OIBA": {
    "airport": "Abu Musa Airport",
    "latitude": 25.8757,
    "longitude": 55.033
  },
  "OIBL": {
    "airport": "Bandar Lengeh Airport",
    "latitude": 26.532,
    "longitude": 54.8248
  },
  "OIKB": {
    "airport": "Bandar Abbas International Airport",
    "latitude": 27.2183,
    "longitude": 56.3778
  },
  "OIKQ": {
    "airport": "Dayrestan Airport (Qeshm International Airport)",
    "latitude": 26.7546,
    "longitude": 55.9024
  },
  "OIKP": {
    "airport": "Havadarya Airport",
    "latitude": 27.1583,
    "longitude": 56.1725
  },
  "OIZJ": {
    "airport": "Jask Airport",
    "latitude": 25.6523,
    "longitude": 57.7878
  },
  "OIBK": {
    "airport": "Kish International Airport",
    "latitude": 26.5262,
    "longitude": 53.9802
  },
  "OIBV": {
    "airport": "Lavan Airport",
    "latitude": 26.8103,
    "longitude": 53.3563
  },
  "OIBS": {
    "airport": "Sirri Island Airport",
    "latitude": 25.9089,
    "longitude": 54.5394
  },
  "OICI": {
    "airport": "Ilam Airport",
    "latitude": 33.5866,
    "longitude": 46.4048
  },
  "OIKM": {
    "airport": "Bam Airport",
    "latitude": 29.0842,
    "longitude": 58.45
  },
  "OIKJ": {
    "airport": "Jiroft Airport",
    "latitude": 28.7269,
    "longitude": 57.6703
  },
  "OIKK": {
    "airport": "Kerman Airport",
    "latitude": 30.2744,
    "longitude": 56.9511
  },
  "OIKR": {
    "airport": "Rafsanjan Airport",
    "latitude": 30.2977,
    "longitude": 56.0511
  },
  "OIKY": {
    "airport": "Sirjan Airport",
    "latitude": 29.5509,
    "longitude": 55.6727
  },
  "OICC": {
    "airport": "Shahid Ashrafi Esfahani Airport (Kermanshah Airport)",
    "latitude": 34.3459,
    "longitude": 47.1581
  },
  "OIMT": {
    "airport": "Tabas Airport",
    "latitude": 33.6678,
    "longitude": 56.8927
  },
  "OIMB": {
    "airport": "Birjand International Airport",
    "latitude": 32.8981,
    "longitude": 59.2661
  },
  "OIMS": {
    "airport": "Sabzevar Airport",
    "latitude": 36.1681,
    "longitude": 57.5952
  },
  "OIMC": {
    "airport": "Sarakhs Airport",
    "latitude": 36.5012,
    "longitude": 61.0649
  },
  "OIMM": {
    "airport": "Mashhad International Airport (Shahid Hashemi Nejad Airport)",
    "latitude": 36.2352,
    "longitude": 59.641
  },
  "OIMN": {
    "airport": "Bojnord Airport",
    "latitude": 37.493,
    "longitude": 57.3082
  },
  "OIAA": {
    "airport": "Abadan International Airport",
    "latitude": 30.3711,
    "longitude": 48.2283
  },
  "OIAG": {
    "airport": "Aghajari Airport",
    "latitude": 30.7444,
    "longitude": 49.6772
  },
  "OIAW": {
    "airport": "Ahvaz International Airport",
    "latitude": 31.3374,
    "longitude": 48.762
  },
  "OIAD": {
    "airport": "Dezful Airport",
    "latitude": 32.4344,
    "longitude": 48.3976
  },
  "OIAM": {
    "airport": "Mahshahr Airport",
    "latitude": 30.5562,
    "longitude": 49.1519
  },
  "OIAJ": {
    "airport": "Omidiyeh Air Base",
    "latitude": 30.8352,
    "longitude": 49.5349
  },
  "OIAH": {
    "airport": "Gachsaran Airport",
    "latitude": 30.3376,
    "longitude": 50.828
  },
  "OISY": {
    "airport": "Yasuj Airport",
    "latitude": 30.7005,
    "longitude": 51.5451
  },
  "OICS": {
    "airport": "Sanandaj Airport",
    "latitude": 35.2459,
    "longitude": 47.0092
  },
  "OICK": {
    "airport": "Khorramabad Airport",
    "latitude": 33.4354,
    "longitude": 48.2829
  },
  "OIHR": {
    "airport": "Arak Airport",
    "latitude": 34.1381,
    "longitude": 49.8473
  },
  "OINJ": {
    "airport": "Bishe Kola Air Base",
    "latitude": 36.6551,
    "longitude": 52.3496
  },
  "OINN": {
    "airport": "Noshahr Airport",
    "latitude": 36.6633,
    "longitude": 51.4647
  },
  "OINR": {
    "airport": "Ramsar International Airport",
    "latitude": 36.9099,
    "longitude": 50.6796
  },
  "OINZ": {
    "airport": "Dasht-e Naz Airport",
    "latitude": 36.6358,
    "longitude": 53.1936
  },
  "OIIK": {
    "airport": "Qazvin Airport",
    "latitude": 36.2401,
    "longitude": 50.0471
  },
  "OIMJ": {
    "airport": "Shahroud Airport",
    "latitude": 36.4253,
    "longitude": 55.1042
  },
  "OIIS": {
    "airport": "Semnan Municipal Airport",
    "latitude": 35.5911,
    "longitude": 53.4951
  },
  "OIZB": {
    "airport": "Zabol Airport",
    "latitude": 31.0983,
    "longitude": 61.5439
  },
  "FMNE": {
    "airport": "Ambilobe Airport",
    "latitude": -13.1884,
    "longitude": 48.988
  },
  "FMNH": {
    "airport": "Antsirabato Airport",
    "latitude": -14.9994,
    "longitude": 50.3202
  },
  "FMNA": {
    "airport": "Arrachart Airport",
    "latitude": -12.3494,
    "longitude": 49.2917
  },
  "OIZI": {
    "airport": "Iranshahr Airport",
    "latitude": 27.2361,
    "longitude": 60.72
  },
  "FMNJ": {
    "airport": "Ambanja Airport",
    "latitude": -13.4848,
    "longitude": 48.6327
  },
  "FMNN": {
    "airport": "Fascene Airport",
    "latitude": -13.3121,
    "longitude": 48.3148
  },
  "FMNS": {
    "airport": "Sambava Airport",
    "latitude": -14.2786,
    "longitude": 50.1747
  },
  "FMNV": {
    "airport": "Vohemar Airport",
    "latitude": -13.3758,
    "longitude": 50.0028
  },
  "OIZH": {
    "airport": "Zahedan Airport",
    "latitude": 29.4757,
    "longitude": 60.9062
  },
  "OIZC": {
    "airport": "Konarak Airport",
    "latitude": 25.4433,
    "longitude": 60.3821
  },
  "FMND": {
    "airport": "Andapa Airport",
    "latitude": -14.6517,
    "longitude": 49.6206
  },
  "OIIE": {
    "airport": "Imam Khomeini International Airport",
    "latitude": 35.4161,
    "longitude": 51.1522
  },
  "OIFK": {
    "airport": "Kashan Airport",
    "latitude": 33.8953,
    "longitude": 51.577
  },
  "OIII": {
    "airport": "Mehrabad International Airport",
    "latitude": 35.6892,
    "longitude": 51.3134
  },
  "OIYY": {
    "airport": "Shahid Sadooghi Airport",
    "latitude": 31.9049,
    "longitude": 54.2765
  },
  "OITZ": {
    "airport": "Zanjan Airport",
    "latitude": 36.7737,
    "longitude": 48.3594
  },
  "BIBF": {
    "airport": "Borgarfjorour Eystri Airport",
    "latitude": 65.5164,
    "longitude": -13.805
  },
  "BIDV": {
    "airport": "Djupivogur Airport",
    "latitude": 64.6442,
    "longitude": -14.2828
  },
  "BIHN": {
    "airport": "Hornafjorour Airport",
    "latitude": 64.2956,
    "longitude": -15.2272
  },
  "BIRK": {
    "airport": "Reykjavík Airport",
    "latitude": 64.13,
    "longitude": -21.9406
  },
  "BIAR": {
    "airport": "Akureyri Airport",
    "latitude": 65.66,
    "longitude": -18.0727
  },
  "BIBK": {
    "airport": "Bakkafjorour Airport",
    "latitude": 66.0219,
    "longitude": -14.8244
  },
  "BIBV": {
    "airport": "Breiodalsvik Airport",
    "latitude": 64.79,
    "longitude": -14.0228
  },
  "BIEG": {
    "airport": "Egilsstaoir Airport",
    "latitude": 65.2833,
    "longitude": -14.4014
  },
  "BIFF": {
    "airport": "Faskruosfjorour Airport",
    "latitude": 64.9317,
    "longitude": -14.0606
  },
  "BIGR": {
    "airport": "Grimsey Airport",
    "latitude": 66.5458,
    "longitude": -18.0173
  },
  "BIHU": {
    "airport": "Husavik Airport",
    "latitude": 65.9523,
    "longitude": -17.426
  },
  "BIRL": {
    "airport": "Myvatn Airport",
    "latitude": 65.6558,
    "longitude": -16.9181
  },
  "BINF": {
    "airport": "Norofjorour Airport",
    "latitude": 65.1319,
    "longitude": -13.7464
  },
  "BIOF": {
    "airport": "Olafsfjorour Airport",
    "latitude": 66.0833,
    "longitude": -18.6667
  },
  "BIKP": {
    "airport": "Kopasker Airport",
    "latitude": 66.3108,
    "longitude": -16.4667
  },
  "BIRG": {
    "airport": "Raufarhofn Airport",
    "latitude": 66.4064,
    "longitude": -15.9183
  },
  "BISI": {
    "airport": "Siglufjorour Airport",
    "latitude": 66.1333,
    "longitude": -18.9167
  },
  "BITN": {
    "airport": "Thorshofn Airport",
    "latitude": 66.2185,
    "longitude": -15.3356
  },
  "BIVO": {
    "airport": "Vopnafjorour Airport",
    "latitude": 65.7206,
    "longitude": -14.8506
  },
  "BIBD": {
    "airport": "Bildudalur Airport",
    "latitude": 65.6413,
    "longitude": -23.5462
  },
  "BIBL": {
    "airport": "Blonduos Airport",
    "latitude": 65.645,
    "longitude": -20.2875
  },
  "BIRF": {
    "airport": "Rif Airport",
    "latitude": 64.9114,
    "longitude": -23.8231
  },
  "BIPA": {
    "airport": "Patreksfjorour Airport",
    "latitude": 65.5558,
    "longitude": -23.965
  },
  "BIKR": {
    "airport": "Sauoarkrokur Airport",
    "latitude": 65.7317,
    "longitude": -19.5728
  },
  "BIFM": {
    "airport": "Fagurholsmyri Airport",
    "latitude": 63.8747,
    "longitude": -16.6411
  },
  "BIVM": {
    "airport": "Vestmannaeyjar Airport",
    "latitude": 63.4243,
    "longitude": -20.2789
  },
  "BIKF": {
    "airport": "Keflavík International Airport",
    "latitude": 63.985,
    "longitude": -22.6056
  },
  "BIGJ": {
    "airport": "Gjogur Airport",
    "latitude": 65.9953,
    "longitude": -21.3269
  },
  "BIHK": {
    "airport": "Holmavik Airport",
    "latitude": 65.7047,
    "longitude": -21.6964
  },
  "BIIS": {
    "airport": "Isafjorour Airport",
    "latitude": 66.0581,
    "longitude": -23.1353
  },
  "BIRE": {
    "airport": "Reykholar Airport",
    "latitude": 65.4526,
    "longitude": -22.2061
  },
  "BITE": {
    "airport": "Thingeyri Airport",
    "latitude": 65.8703,
    "longitude": -23.56
  },
  "BIGF": {
    "airport": "Grundarfjorour Airport",
    "latitude": 64.9914,
    "longitude": -23.2247
  },
  "BIST": {
    "airport": "Stykkisholmur Airport",
    "latitude": 65.0581,
    "longitude": -22.7942
  },
  "LIBP": {
    "airport": "Abruzzo Airport",
    "latitude": 42.4317,
    "longitude": 14.1811
  },
  "LIAP": {
    "airport": "L'Aquila-Preturo Airport",
    "latitude": 42.3799,
    "longitude": 13.3092
  },
  "LIBC": {
    "airport": "Crotone Airport (Sant'Anna Airport)",
    "latitude": 38.9972,
    "longitude": 17.0802
  },
  "LICR": {
    "airport": "Reggio di Calabria Airport",
    "latitude": 38.0712,
    "longitude": 15.6516
  },
  "LICA": {
    "airport": "Lamezia Terme International Airport",
    "latitude": 38.9054,
    "longitude": 16.2423
  },
  "LIRN": {
    "airport": "Naples International Airport",
    "latitude": 40.886,
    "longitude": 14.2908
  },
  "LIRI": {
    "airport": "Salerno Costa d'Amalfi Airport (Pontecagnano Airport)",
    "latitude": 40.6204,
    "longitude": 14.9113
  },
  "LIPE": {
    "airport": "Bologna Guglielmo Marconi Airport",
    "latitude": 44.5354,
    "longitude": 11.2887
  },
  "LIPK": {
    "airport": "Forli International Airport (Luigi Ridolfi Airport)",
    "latitude": 44.1948,
    "longitude": 12.0701
  },
  "LIMP": {
    "airport": "Giuseppe Verdi Parma International Airport",
    "latitude": 44.82122,
    "longitude": 10.2974
  },
  "LIDR": {
    "airport": "Ravenna Airport",
    "latitude": 44.3639,
    "longitude": 12.225
  },
  "LIPR": {
    "airport": "Federico Fellini International Airport",
    "latitude": 44.0203,
    "longitude": 12.6117
  },
  "LIPA": {
    "airport": "Aviano Air Base",
    "latitude": 46.0319,
    "longitude": 12.5965
  },
  "LIPQ": {
    "airport": "Trieste - Friuli Venezia Giulia Airport",
    "latitude": 45.8275,
    "longitude": 13.4722
  },
  "LIPD": {
    "airport": "Campoformido Airport",
    "latitude": 46.0322,
    "longitude": 13.1868
  },
  "LIRA": {
    "airport": "Rome-Ciampino International Airport",
    "latitude": 41.7991,
    "longitude": 12.5929
  },
  "LIRF": {
    "airport": "Rome–Fiumicino International Airport",
    "latitude": 41.8003,
    "longitude": 12.2389
  },
  "LIMG": {
    "airport": "Albenga Airport",
    "latitude": 44.0506,
    "longitude": 8.12743
  },
  "LIMJ": {
    "airport": "Genoa Cristoforo Colombo Airport",
    "latitude": 44.4133,
    "longitude": 8.8375
  },
  "LIME": {
    "airport": "Milan Bergamo Airport",
    "latitude": 45.66546,
    "longitude": 9.69948
  },
  "LIML": {
    "airport": "Milan-Linate Airport",
    "latitude": 45.4494,
    "longitude": 9.2783
  },
  "LIMC": {
    "airport": "Milan-Malpensa Airport",
    "latitude": 45.6306,
    "longitude": 8.72811
  },
  "LIPO": {
    "airport": "Brescia Airport (Gabriele D'Annunzio Airport)",
    "latitude": 45.4289,
    "longitude": 10.3306
  },
  "LILN": {
    "airport": "Varese-Venegono Airport",
    "latitude": 45.741389,
    "longitude": 8.886667
  },
  "LIPY": {
    "airport": "Ancona Falconara Airport",
    "latitude": 43.6163,
    "longitude": 13.3623
  },
  "LIMZ": {
    "airport": "Cuneo International Airport",
    "latitude": 44.547,
    "longitude": 7.62322
  },
  "LIMF": {
    "airport": "Turin Airport (Caselle Airport)",
    "latitude": 45.2008,
    "longitude": 7.64963
  },
  "LIBR": {
    "airport": "Brindisi - Salento Airport",
    "latitude": 40.6576,
    "longitude": 17.947
  },
  "LIBD": {
    "airport": "Bari Karol Wojtyla Airport",
    "latitude": 41.1389,
    "longitude": 16.7606
  },
  "LIBF": {
    "airport": "Foggia Gino Lisa Airport",
    "latitude": 41.4329,
    "longitude": 15.535
  },
  "LIBN": {
    "airport": "Galatina Air Base",
    "latitude": 40.2392,
    "longitude": 18.1333
  },
  "LIBG": {
    "airport": "Taranto-Grottaglie Airport",
    "latitude": 40.5175,
    "longitude": 17.4032
  },
  "LIEA": {
    "airport": "Alghero-Fertilia Airport",
    "latitude": 40.6321,
    "longitude": 8.29077
  },
  "LIEE": {
    "airport": "Cagliari Elmas Airport",
    "latitude": 39.2515,
    "longitude": 9.05428
  },
  "LIED": {
    "airport": "Decimomannu Air Base",
    "latitude": 39.3542,
    "longitude": 8.97248
  },
  "LIER": {
    "airport": "Oristano-Fenosu Airport",
    "latitude": 39.8953,
    "longitude": 8.64266
  },
  "LIEO": {
    "airport": "Olbia Costa Smeralda Airport",
    "latitude": 40.8987,
    "longitude": 9.51763
  },
  "LIET": {
    "airport": "Tortoli Airport (Arbatax Airport)",
    "latitude": 39.9188,
    "longitude": 9.68298
  },
  "LICB": {
    "airport": "Comiso Airport",
    "latitude": 36.9946,
    "longitude": 14.6072
  },
  "LICC": {
    "airport": "Catania-Fontanarossa Airport",
    "latitude": 37.4668,
    "longitude": 15.0664
  },
  "LICD": {
    "airport": "Lampedusa Airport",
    "latitude": 35.4979,
    "longitude": 12.6181
  },
  "LICZ": {
    "airport": "Naval Air Station Sigonella",
    "latitude": 37.4017,
    "longitude": 14.9224
  },
  "LICJ": {
    "airport": "Falcone-Borsellino Airport (Punta Raisi Airport)",
    "latitude": 38.176,
    "longitude": 13.091
  },
  "LICG": {
    "airport": "Pantelleria Airport",
    "latitude": 36.8165,
    "longitude": 11.9689
  },
  "LICT": {
    "airport": "Vincenzo Florio Airport",
    "latitude": 37.9114,
    "longitude": 12.488
  },
  "LIRJ": {
    "airport": "Marina di Campo Airport",
    "latitude": 42.7603,
    "longitude": 10.2394
  },
  "LIRQ": {
    "airport": "Florence Airport",
    "latitude": 43.81,
    "longitude": 11.2051
  },
  "LIRS": {
    "airport": "Grosseto Airport",
    "latitude": 42.7597,
    "longitude": 11.0719
  },
  "LIQL": {
    "airport": "Lucca-Tassignano Airport",
    "latitude": 43.8258,
    "longitude": 10.5779
  },
  "LIRP": {
    "airport": "Pisa International Airport (Galileo Galilei Airport)",
    "latitude": 43.6839,
    "longitude": 10.3927
  },
  "LIQS": {
    "airport": "Siena-Ampugnano Airport",
    "latitude": 43.2563,
    "longitude": 11.255
  },
  "LIPB": {
    "airport": "Bolzano Airport",
    "latitude": 46.4602,
    "longitude": 11.3264
  },
  "LIRZ": {
    "airport": "Perugia San Francesco d'Assisi - Umbria International Airport",
    "latitude": 43.0959,
    "longitude": 12.5132
  },
  "LIMW": {
    "airport": "Aosta Valley Airport",
    "latitude": 45.7385,
    "longitude": 7.36872
  },
  "LIDB": {
    "airport": "Belluno Airport",
    "latitude": 46.1665,
    "longitude": 12.2504
  },
  "LIPH": {
    "airport": "Treviso-Sant'Angelo Airport",
    "latitude": 45.6484,
    "longitude": 12.1944
  },
  "LIPZ": {
    "airport": "Venice Marco Polo Airport",
    "latitude": 45.5053,
    "longitude": 12.3519
  },
  "LIPT": {
    "airport": "Vicenza Airport",
    "latitude": 45.5734,
    "longitude": 11.5295
  },
  "LIPX": {
    "airport": "Verona Villafranca Airport",
    "latitude": 45.3957,
    "longitude": 10.8885
  },
  "EGJJ": {
    "airport": "Jersey Airport",
    "latitude": 49.2081,
    "longitude": -2.19528
  },
  "MKTP": {
    "airport": "Tinson Pen Aerodrome",
    "latitude": 17.9886,
    "longitude": -76.8238
  },
  "MKKJ": {
    "airport": "Ken Jones Aerodrome",
    "latitude": 18.1988,
    "longitude": -76.5345
  },
  "MKJP": {
    "airport": "Norman Manley International Airport",
    "latitude": 17.9357,
    "longitude": -76.7875
  },
  "MKJS": {
    "airport": "Sangster International Airport",
    "latitude": 18.5037,
    "longitude": -77.9134
  },
  "MKBS": {
    "airport": "Ian Fleming International Airport",
    "latitude": 18.4042,
    "longitude": -76.969
  },
  "MKNG": {
    "airport": "Negril Aerodrome",
    "latitude": 18.3428,
    "longitude": -78.3321
  },
  "OJAQ": {
    "airport": "King Hussein International Airport",
    "latitude": 29.6116,
    "longitude": 35.0181
  },
  "OJAM": {
    "airport": "Amman Civil Airport (Marka International Airport)",
    "latitude": 31.9727,
    "longitude": 35.9916
  },
  "OJMF": {
    "airport": "King Hussein Air Base",
    "latitude": 32.3564,
    "longitude": 36.2592
  },
  "OJMN": {
    "airport": "Ma'an Airport",
    "latitude": 30.1667,
    "longitude": 35.7833
  },
  "OJAI": {
    "airport": "Queen Alia International Airport",
    "latitude": 31.7226,
    "longitude": 35.9932
  },
  "RJGG": {
    "airport": "Chubu Centrair International Airport",
    "latitude": 34.8584,
    "longitude": 136.805
  },
  "RJNA": {
    "airport": "Nagoya Airfield (Komaki Airport)",
    "latitude": 35.255,
    "longitude": 136.924
  },
  "RJSK": {
    "airport": "Akita Airport",
    "latitude": 39.6156,
    "longitude": 140.219
  },
  "RJSR": {
    "airport": "Odate-Noshiro Airport",
    "latitude": 40.1919,
    "longitude": 140.371
  },
  "RJSA": {
    "airport": "Aomori Airport",
    "latitude": 40.7347,
    "longitude": 140.691
  },
  "RJSH": {
    "airport": "JMSDF Hachinohe Air Base",
    "latitude": 40.5564,
    "longitude": 141.466
  },
  "RJSM": {
    "airport": "Misawa Air Base",
    "latitude": 40.7032,
    "longitude": 141.368
  },
  "RJOM": {
    "airport": "Matsuyama Airport",
    "latitude": 33.8272,
    "longitude": 132.7
  },
  "RJNF": {
    "airport": "Fukui Airport",
    "latitude": 36.1428,
    "longitude": 136.224
  },
  "RJFF": {
    "airport": "Fukuoka Airport (Itazuke Air Base)",
    "latitude": 33.5859,
    "longitude": 130.451
  },
  "RJFR": {
    "airport": "Kitakyushu Airport",
    "latitude": 33.8459,
    "longitude": 131.035
  },
  "RJSF": {
    "airport": "Fukushima Airport",
    "latitude": 37.2274,
    "longitude": 140.431
  },
  "RJOA": {
    "airport": "Hiroshima Airport",
    "latitude": 34.4361,
    "longitude": 132.919
  },
  "RJBH": {
    "airport": "Hiroshima-Nishi Airport",
    "latitude": 34.3669,
    "longitude": 132.414
  },
  "RJEC": {
    "airport": "Asahikawa Airport",
    "latitude": 43.6708,
    "longitude": 142.447
  },
  "RJCC": {
    "airport": "New Chitose Airport",
    "latitude": 42.7876,
    "longitude": 141.6772
  },
  "RJCH": {
    "airport": "Hakodate Airport",
    "latitude": 41.77,
    "longitude": 140.822
  },
  "RJCK": {
    "airport": "Kushiro Airport",
    "latitude": 43.041,
    "longitude": 144.193
  },
  "RJEB": {
    "airport": "Monbetsu Airport",
    "latitude": 44.3039,
    "longitude": 143.404
  },
  "RJCM": {
    "airport": "Memanbetsu Airport",
    "latitude": 43.8806,
    "longitude": 144.164
  },
  "RJCB": {
    "airport": "Tokachi-Obihiro Airport",
    "latitude": 42.7333,
    "longitude": 143.217
  },
  "RJEO": {
    "airport": "Okushiri Airport",
    "latitude": 42.0717,
    "longitude": 139.433
  },
  "RJCO": {
    "airport": "Sapporo Okadama Airport",
    "latitude": 43.1157,
    "longitude": 141.38
  },
  "RJCR": {
    "airport": "Rebun Airport",
    "latitude": 45.455,
    "longitude": 141.039
  },
  "RJER": {
    "airport": "Rishiri Airport",
    "latitude": 45.242,
    "longitude": 141.186
  },
  "RJCN": {
    "airport": "Nakashibetsu Airport",
    "latitude": 43.5775,
    "longitude": 144.96
  },
  "RJCW": {
    "airport": "Wakkanai Airport",
    "latitude": 45.4042,
    "longitude": 141.801
  },
  "RJBT": {
    "airport": "Tajima Airport",
    "latitude": 35.5128,
    "longitude": 134.787
  },
  "RJAH": {
    "airport": "Ibaraki Airport",
    "latitude": 36.1811,
    "longitude": 140.415
  },
  "RJNK": {
    "airport": "Komatsu Airport (Kanazawa Airport)",
    "latitude": 36.3946,
    "longitude": 136.407
  },
  "RJNW": {
    "airport": "Noto Airport",
    "latitude": 37.2931,
    "longitude": 136.962
  },
  "RJSI": {
    "airport": "Hanamaki Airport",
    "latitude": 39.4286,
    "longitude": 141.135
  },
  "RJOT": {
    "airport": "Takamatsu Airport",
    "latitude": 34.2142,
    "longitude": 134.016
  },
  "RJKA": {
    "airport": "Amami Airport",
    "latitude": 28.4306,
    "longitude": 129.713
  },
  "RJKI": {
    "airport": "Kikai Airport (Kikaiga Shima Airport)",
    "latitude": 28.3213,
    "longitude": 129.928
  },
  "RJFK": {
    "airport": "Kagoshima Airport",
    "latitude": 31.8034,
    "longitude": 130.719
  },
  "RJFC": {
    "airport": "Yakushima Airport",
    "latitude": 30.3856,
    "longitude": 130.659
  },
  "RJKB": {
    "airport": "Okinoerabu Airport",
    "latitude": 27.4255,
    "longitude": 128.701
  },
  "RORY": {
    "airport": "Yoron Airport",
    "latitude": 27.044,
    "longitude": 128.402
  },
  "RJKN": {
    "airport": "Tokunoshima Airport",
    "latitude": 27.8364,
    "longitude": 128.881
  },
  "RJFG": {
    "airport": "New Tanegashima Airport",
    "latitude": 30.6051,
    "longitude": 130.991
  },
  "RJTA": {
    "airport": "Naval Air Facility Atsugi",
    "latitude": 35.4546,
    "longitude": 139.45
  },
  "RJBE": {
    "airport": "Kobe Airport",
    "latitude": 34.6354,
    "longitude": 135.2261
  },
  "RJOK": {
    "airport": "Kochi Ryoma Airport",
    "latitude": 33.5461,
    "longitude": 133.669
  },
  "RJDA": {
    "airport": "Amakusa Airfield",
    "latitude": 32.4825,
    "longitude": 130.159
  },
  "RJFT": {
    "airport": "Kumamoto Airport",
    "latitude": 32.8373,
    "longitude": 130.855
  },
  "RJSS": {
    "airport": "Sendai Airport",
    "latitude": 38.1397,
    "longitude": 140.917
  },
  "RJFM": {
    "airport": "Miyazaki Airport",
    "latitude": 31.8772,
    "longitude": 131.449
  },
  "RJAF": {
    "airport": "Matsumoto Airport",
    "latitude": 36.1668,
    "longitude": 137.923
  },
  "RJFE": {
    "airport": "Fukue Airport (Goto-Fukue Airport)",
    "latitude": 32.6663,
    "longitude": 128.833
  },
  "RJDB": {
    "airport": "Iki Airport",
    "latitude": 33.749,
    "longitude": 129.785
  },
  "RJFU": {
    "airport": "Nagasaki Airport",
    "latitude": 32.9169,
    "longitude": 129.914
  },
  "RJDU": {
    "airport": "Omura Airport",
    "latitude": 35.0833,
    "longitude": 140.1
  },
  "RJDT": {
    "airport": "Tsushima Airport",
    "latitude": 34.2849,
    "longitude": 129.331
  },
  "RJSN": {
    "airport": "Niigata Airport",
    "latitude": 37.9559,
    "longitude": 139.121
  },
  "RJSD": {
    "airport": "Sado Airport",
    "latitude": 38.0602,
    "longitude": 138.414
  },
  "RJFO": {
    "airport": "Oita Airport",
    "latitude": 33.4794,
    "longitude": 131.737
  },
  "RJOB": {
    "airport": "Okayama Airport",
    "latitude": 34.7569,
    "longitude": 133.855
  },
  "RORA": {
    "airport": "Aguni Airport",
    "latitude": 26.5925,
    "longitude": 127.241
  },
  "RODN": {
    "airport": "Kadena Air Base",
    "latitude": 26.3556,
    "longitude": 127.768
  },
  "RORH": {
    "airport": "Hateruma Airport",
    "latitude": 24.0589,
    "longitude": 123.806
  },
  "RORE": {
    "airport": "Iejima Airport",
    "latitude": 26.722,
    "longitude": 127.785
  },
  "ROIG": {
    "airport": "New Ishigaki Airport",
    "latitude": 24.3964,
    "longitude": 124.245
  },
  "ROKR": {
    "airport": "Kerama Airport",
    "latitude": 26.1683,
    "longitude": 127.293
  },
  "RORK": {
    "airport": "Kitadaito Airport",
    "latitude": 25.9447,
    "longitude": 131.327
  },
  "ROMD": {
    "airport": "Minami-Daito Airport",
    "latitude": 25.8465,
    "longitude": 131.263
  },
  "ROMY": {
    "airport": "Miyako Airport",
    "latitude": 24.7828,
    "longitude": 125.295
  },
  "ROYN": {
    "airport": "Yonaguni Airport",
    "latitude": 24.4669,
    "longitude": 122.978
  },
  "ROAH": {
    "airport": "Naha Airport",
    "latitude": 26.1958,
    "longitude": 127.646
  },
  "RORS": {
    "airport": "Shimojishima Airport",
    "latitude": 24.8267,
    "longitude": 125.145
  },
  "RORT": {
    "airport": "Tarama Airport",
    "latitude": 24.6539,
    "longitude": 124.675
  },
  "ROKJ": {
    "airport": "Kumejima Airport",
    "latitude": 26.3635,
    "longitude": 126.714
  },
  "RJBB": {
    "airport": "Kansai International Airport",
    "latitude": 34.4305,
    "longitude": 135.23
  },
  "RJOO": {
    "airport": "Osaka Itami International Airport",
    "latitude": 34.7868,
    "longitude": 135.4387
  },
  "RJFS": {
    "airport": "Saga Airport",
    "latitude": 33.1497,
    "longitude": 130.302
  },
  "RJOW": {
    "airport": "Iwami Airport (Hagi-Iwami Airport)",
    "latitude": 34.6764,
    "longitude": 131.79
  },
  "RJOC": {
    "airport": "Izumo Airport",
    "latitude": 35.4136,
    "longitude": 132.89
  },
  "RJNS": {
    "airport": "Shizuoka Airport (Mt. Fuji Shizuoka Airport)",
    "latitude": 34.796,
    "longitude": 138.188
  },
  "RJOS": {
    "airport": "Tokushima Airport",
    "latitude": 34.1328,
    "longitude": 134.607
  },
  "RJTH": {
    "airport": "Hachijojima Airport",
    "latitude": 33.115,
    "longitude": 139.786
  },
  "RJTT": {
    "airport": "Haneda Airport",
    "latitude": 35.5533,
    "longitude": 139.781
  },
  "RJAW": {
    "airport": "Iwo Jima Air Base",
    "latitude": 24.784,
    "longitude": 141.323
  },
  "RJAM": {
    "airport": "Minami Torishima Airport",
    "latitude": 24.2897,
    "longitude": 153.979
  },
  "RJTQ": {
    "airport": "Miyakejima Airport",
    "latitude": 34.0736,
    "longitude": 139.56
  },
  "RJAA": {
    "airport": "Narita International Airport",
    "latitude": 35.7653,
    "longitude": 140.386
  },
  "RJTO": {
    "airport": "Oshima Airport",
    "latitude": 34.782,
    "longitude": 139.36
  },
  "RJNO": {
    "airport": "Oki Airport",
    "latitude": 36.1811,
    "longitude": 133.325
  },
  "RJOR": {
    "airport": "Tottori Airport",
    "latitude": 35.5301,
    "longitude": 134.167
  },
  "RJOH": {
    "airport": "Miho-Yonago Airport",
    "latitude": 35.4922,
    "longitude": 133.236
  },
  "RJNT": {
    "airport": "Toyama Airport",
    "latitude": 36.6483,
    "longitude": 137.188
  },
  "RJBD": {
    "airport": "Nanki-Shirahama Airport",
    "latitude": 33.6622,
    "longitude": 135.364
  },
  "RJSC": {
    "airport": "Yamagata Airport (Junmachi Airport)",
    "latitude": 38.4119,
    "longitude": 140.371
  },
  "RJSY": {
    "airport": "Shonai Airport",
    "latitude": 38.8122,
    "longitude": 139.787
  },
  "RJOI": {
    "airport": "Marine Corps Air Station Iwakuni",
    "latitude": 34.1439,
    "longitude": 132.236
  },
  "RJDC": {
    "airport": "Yamaguchi Ube Airport",
    "latitude": 33.93,
    "longitude": 131.279
  },
  "HKJK": {
    "airport": "Jomo Kenyatta International Airport",
    "latitude": -1.31924,
    "longitude": 36.9278
  },
  "HKGA": {
    "airport": "Garissa Airport",
    "latitude": -0.463508,
    "longitude": 39.6483
  },
  "HKAM": {
    "airport": "Amboseli Airport",
    "latitude": -2.64505,
    "longitude": 37.2531
  },
  "HKKG": {
    "airport": "Kakamega Airport",
    "latitude": 0.271342,
    "longitude": 34.7873
  },
  "HKKR": {
    "airport": "Kericho Airport",
    "latitude": -0.3899,
    "longitude": 35.2421
  },
  "HKML": {
    "airport": "Malindi Airport",
    "latitude": -3.22931,
    "longitude": 40.1017
  },
  "HKKI": {
    "airport": "Kisumu International Airport",
    "latitude": -0.086139,
    "longitude": 34.7289
  },
  "HKUK": {
    "airport": "Ukunda Airport (Diani Airport)",
    "latitude": -4.29333,
    "longitude": 39.5711
  },
  "HKNY": {
    "airport": "Nanyuki Airport",
    "latitude": -0.062399,
    "longitude": 37.041
  },
  "HKLU": {
    "airport": "Manda Airport",
    "latitude": -2.25242,
    "longitude": 40.9131
  },
  "HKMA": {
    "airport": "Mandera Airport",
    "latitude": 3.933,
    "longitude": 41.85
  },
  "HKMY": {
    "airport": "Moyale Airport",
    "latitude": 3.46972,
    "longitude": 39.1014
  },
  "HKMB": {
    "airport": "Marsabit Airport",
    "latitude": 2.34425,
    "longitude": 38
  },
  "HKMK": {
    "airport": "Mulika Lodge Airport",
    "latitude": 0.165083,
    "longitude": 38.1951
  },
  "HKMO": {
    "airport": "Moi International Airport",
    "latitude": -4.03483,
    "longitude": 39.5942
  },
  "HKNW": {
    "airport": "Wilson Airport",
    "latitude": -1.32172,
    "longitude": 36.8148
  },
  "HKNK": {
    "airport": "Nakuru Airport",
    "latitude": -0.298067,
    "longitude": 36.1593
  },
  "HKKE": {
    "airport": "Keekorok Airport",
    "latitude": -1.583,
    "longitude": 35.25
  },
  "HKNI": {
    "airport": "Nyeri Airport",
    "latitude": -0.364414,
    "longitude": 36.9785
  },
  "HKSB": {
    "airport": "Samburu Airport (Buffalo Spring Airport)",
    "latitude": 0.530583,
    "longitude": 37.5342
  },
  "HKKL": {
    "airport": "Kilaguni Airport",
    "latitude": -2.91061,
    "longitude": 38.0652
  },
  "HKHO": {
    "airport": "Hola Airport",
    "latitude": -1.522,
    "longitude": 40.004
  },
  "HKES": {
    "airport": "Eliye Springs Airport",
    "latitude": 3.21667,
    "longitude": 35.9667
  },
  "HKFG": {
    "airport": "Kalokol Airport (Fergusons Gulf Airport)",
    "latitude": 3.49161,
    "longitude": 35.8368
  },
  "HKLK": {
    "airport": "Lokichogio Airport",
    "latitude": 4.20412,
    "longitude": 34.3482
  },
  "HKLO": {
    "airport": "Lodwar Airport",
    "latitude": 3.12197,
    "longitude": 35.6087
  },
  "HKLY": {
    "airport": "Loiyangalani Airport",
    "latitude": 2.75,
    "longitude": 36.717
  },
  "HKEL": {
    "airport": "Eldoret International Airport",
    "latitude": 0.404458,
    "longitude": 35.2389
  },
  "HKKT": {
    "airport": "Kitale Airport",
    "latitude": 0.971989,
    "longitude": 34.9586
  },
  "HKWJ": {
    "airport": "Wajir Airport",
    "latitude": 1.73324,
    "longitude": 40.0916
  },
  "UAFM": {
    "airport": "Manas International Airport",
    "latitude": 43.0613,
    "longitude": 74.4776
  },
  "UAFO": {
    "airport": "Osh Airport",
    "latitude": 40.609,
    "longitude": 72.7933
  },
  "UCFL": {
    "airport": "Issyk-Kul International Airport",
    "latitude": 42.5851,
    "longitude": 76.7064
  },
  "VDBG": {
    "airport": "Battambang Airport",
    "latitude": 13.0956,
    "longitude": 103.224
  },
  "VDKH": {
    "airport": "Kampong Chhnang Airport",
    "latitude": 12.2552,
    "longitude": 104.564
  },
  "VDKK": {
    "airport": "Koh Kong Airport",
    "latitude": 11.6134,
    "longitude": 102.997
  },
  "VDKT": {
    "airport": "Kratie Airport",
    "latitude": 12.488,
    "longitude": 106.055
  },
  "VDSV": {
    "airport": "Sihanoukville International Airport (Kaong Kang Airport)",
    "latitude": 10.5797,
    "longitude": 103.637
  },
  "VDMK": {
    "airport": "Mondulkiri Airport",
    "latitude": 12.4636,
    "longitude": 107.187
  },
  "VDPP": {
    "airport": "Phnom Penh International Airport",
    "latitude": 11.5466,
    "longitude": 104.844
  },
  "VDST": {
    "airport": "Steung Treng Airport",
    "latitude": 13.5319,
    "longitude": 106.015
  },
  "VDRK": {
    "airport": "Ratanakiri Airport",
    "latitude": 13.73,
    "longitude": 106.987
  },
  "VDSR": {
    "airport": "Siem Reap International Airport (Angkor Int'l)",
    "latitude": 13.4107,
    "longitude": 103.813
  },
  "VDSA": {
    "airport": "Siem Reap Angkor International Airport",
    "latitude": 13.3758,
    "longitude": 104.2197
  },
  "NGUK": {
    "airport": "Aranuka Airport",
    "latitude": 0.185278,
    "longitude": 173.637
  },
  "NGAB": {
    "airport": "Abaiang Atoll Airport",
    "latitude": 1.79861,
    "longitude": 173.041
  },
  "NGTB": {
    "airport": "Abemama Atoll Airport",
    "latitude": 0.490833,
    "longitude": 173.829
  },
  "NGTR": {
    "airport": "Arorae Island Airport",
    "latitude": -2.61611,
    "longitude": 176.803
  },
  "NGTU": {
    "airport": "Butaritari Atoll Airport",
    "latitude": 3.08583,
    "longitude": 172.811
  },
  "NGBR": {
    "airport": "Beru Island Airport",
    "latitude": -1.35472,
    "longitude": 176.007
  },
  "NGKT": {
    "airport": "Kuria Airport",
    "latitude": 0.218611,
    "longitude": 173.442
  },
  "NGMA": {
    "airport": "Maiana Airport",
    "latitude": 1.00361,
    "longitude": 173.031
  },
  "NGMN": {
    "airport": "Makin Airport",
    "latitude": 3.37444,
    "longitude": 172.992
  },
  "NGMK": {
    "airport": "Marakei Airport",
    "latitude": 2.05861,
    "longitude": 173.271
  },
  "NGNU": {
    "airport": "Nikunau Airport",
    "latitude": -1.31444,
    "longitude": 176.41
  },
  "NGTO": {
    "airport": "Nonouti Airport",
    "latitude": -0.639722,
    "longitude": 174.428
  },
  "NGON": {
    "airport": "Onotoa Airport",
    "latitude": -1.79611,
    "longitude": 175.526
  },
  "NGTE": {
    "airport": "Tabiteuea North Airport",
    "latitude": -1.22447,
    "longitude": 174.776
  },
  "NGTM": {
    "airport": "Tamana Airport",
    "latitude": -2.48583,
    "longitude": 175.97
  },
  "NGTA": {
    "airport": "Bonriki International Airport",
    "latitude": 1.38164,
    "longitude": 173.147
  },
  "NGTS": {
    "airport": "Tabiteuea South Airport",
    "latitude": -1.47444,
    "longitude": 175.064
  },
  "PCIS": {
    "airport": "Canton Island Airport",
    "latitude": -2.76812,
    "longitude": -171.71
  },
  "PLCH": {
    "airport": "Cassidy International Airport",
    "latitude": 1.98616,
    "longitude": -157.35
  },
  "FMCV": {
    "airport": "Ouani Airport",
    "latitude": -12.1317,
    "longitude": 44.4303
  },
  "FMCH": {
    "airport": "Prince Said Ibrahim International Airport",
    "latitude": -11.5337,
    "longitude": 43.2719
  },
  "FMCN": {
    "airport": "Iconi Airport",
    "latitude": -11.7125,
    "longitude": 43.2431
  },
  "FMCI": {
    "airport": "Moheli Bandar Es Eslam Airport",
    "latitude": -12.2981,
    "longitude": 43.7664
  },
  "TKPK": {
    "airport": "Robert L. Bradshaw International Airport",
    "latitude": 17.3112,
    "longitude": -62.7187
  },
  "TKPN": {
    "airport": "Vance W. Amory International Airport",
    "latitude": 17.2057,
    "longitude": -62.5899
  },
  "ZKHM": {
    "airport": "Orang Airport",
    "latitude": 41.4285,
    "longitude": 129.648
  },
  "ZKSD": {
    "airport": "Sondok Airport",
    "latitude": 39.7452,
    "longitude": 127.474
  },
  "ZKWS": {
    "airport": "Wonsan Kalma International Airport",
    "latitude": 39.1668,
    "longitude": 127.486
  },
  "ZKUJ": {
    "airport": "Uiju Airfield",
    "latitude": 40.1546,
    "longitude": 124.532
  },
  "ZKPY": {
    "airport": "Pyongyang Sunan International Airport",
    "latitude": 39.2241,
    "longitude": 125.67
  },
  "ZKSE": {
    "airport": "Samjiyon Airport",
    "latitude": 41.9071,
    "longitude": 128.41
  },
  "RKPK": {
    "airport": "Gimhae International Airport",
    "latitude": 35.1795,
    "longitude": 128.938
  },
  "RKTU": {
    "airport": "Cheongju International Airport",
    "latitude": 36.717,
    "longitude": 127.499
  },
  "RKTI": {
    "airport": "Jungwon Air Base",
    "latitude": 37.03,
    "longitude": 127.885
  },
  "RKTP": {
    "airport": "Seosan Air Base",
    "latitude": 36.704,
    "longitude": 126.486
  },
  "RKNN": {
    "airport": "Gangneung Air Base",
    "latitude": 37.7536,
    "longitude": 128.944
  },
  "RKNW": {
    "airport": "Wonju Airport",
    "latitude": 37.4412,
    "longitude": 127.964
  },
  "RKNY": {
    "airport": "Yangyang International Airport",
    "latitude": 38.0613,
    "longitude": 128.669
  },
  "RKJU": {
    "airport": "Jeonju Airport",
    "latitude": 35.8781,
    "longitude": 127.119
  },
  "RKJK": {
    "airport": "Gunsan Airport",
    "latitude": 35.9038,
    "longitude": 126.616
  },
  "RKJJ": {
    "airport": "Gwangju Airport",
    "latitude": 35.1232,
    "longitude": 126.805
  },
  "RKJB": {
    "airport": "Muan International Airport",
    "latitude": 34.9914,
    "longitude": 126.383
  },
  "RKJY": {
    "airport": "Yeosu/Suncheon Airport",
    "latitude": 34.8423,
    "longitude": 127.617
  },
  "RKSS": {
    "airport": "Seoul Gimpo International Airport",
    "latitude": 37.5655,
    "longitude": 126.8011
  },
  "RKSI": {
    "airport": "Incheon International Airport",
    "latitude": 37.4633,
    "longitude": 126.44
  },
  "RKSO": {
    "airport": "Osan Air Base",
    "latitude": 37.0906,
    "longitude": 127.03
  },
  "RKSW": {
    "airport": "Suwon Air Base",
    "latitude": 37.2394,
    "longitude": 127.007
  },
  "RKPE": {
    "airport": "Jinhae Airport",
    "latitude": 35.1402,
    "longitude": 128.696
  },
  "RKPS": {
    "airport": "Sacheon Airport",
    "latitude": 35.0886,
    "longitude": 128.072
  },
  "RKTH": {
    "airport": "Pohang Airport",
    "latitude": 35.988,
    "longitude": 129.42
  },
  "RKTN": {
    "airport": "Daegu International Airport",
    "latitude": 35.8969,
    "longitude": 128.655
  },
  "RKTL": {
    "airport": "Uljin Airport",
    "latitude": 36.7771,
    "longitude": 129.462
  },
  "RKPU": {
    "airport": "Ulsan Airport",
    "latitude": 35.5935,
    "longitude": 129.352
  },
  "RKTY": {
    "airport": "Yecheon Air Base",
    "latitude": 36.6304,
    "longitude": 128.35
  },
  "RKPC": {
    "airport": "Jeju International Airport",
    "latitude": 33.5113,
    "longitude": 126.493
  },
  "RKPD": {
    "airport": "Jeongseok Airport",
    "latitude": 33.3996,
    "longitude": 126.712
  },
  "OKAJ": {
    "airport": "Ahmad al-Jaber Air Base",
    "latitude": 28.9348,
    "longitude": 47.7919
  },
  "OKBK": {
    "airport": "Kuwait International Airport",
    "latitude": 29.2266,
    "longitude": 47.9689
  },
  "MWCB": {
    "airport": "Charles Kirkconnell International Airport",
    "latitude": 19.687,
    "longitude": -79.8828
  },
  "MWCR": {
    "airport": "Owen Roberts International Airport",
    "latitude": 19.2928,
    "longitude": -81.3577
  },
  "MWCL": {
    "airport": "Edward Bodden Airfield",
    "latitude": 19.6602,
    "longitude": -80.0888
  },
  "UAAL": {
    "airport": "Usharal Airport",
    "latitude": 46.1903,
    "longitude": 80.8314
  },
  "UAAA": {
    "airport": "Almaty International Airport",
    "latitude": 43.3521,
    "longitude": 77.0405
  },
  "UAAR": {
    "airport": "Boraldai Airport",
    "latitude": 43.3526,
    "longitude": 76.8837
  },
  "UACK": {
    "airport": "Kokshetau Airport",
    "latitude": 53.3291,
    "longitude": 69.5946
  },
  "UATT": {
    "airport": "Aktobe Airport",
    "latitude": 50.2458,
    "longitude": 57.2067
  },
  "UACC": {
    "airport": "Nursultan Nazarbayev International Airport",
    "latitude": 51.0222,
    "longitude": 71.4669
  },
  "UATG": {
    "airport": "Atyrau Airport",
    "latitude": 47.1219,
    "longitude": 51.8214
  },
  "UARR": {
    "airport": "Oral Ak Zhol Airport",
    "latitude": 51.1508,
    "longitude": 51.5431
  },
  "UAOL": {
    "airport": "Krayniy Airport",
    "latitude": 45.622,
    "longitude": 63.2108
  },
  "UATE": {
    "airport": "Aktau Airport",
    "latitude": 43.8601,
    "longitude": 51.092
  },
  "UAII": {
    "airport": "Shymkent International Airport",
    "latitude": 42.3642,
    "longitude": 69.4789
  },
  "UAIT": {
    "airport": "Hazret-Sultan Turkistan International Airport",
    "latitude": 43.3152,
    "longitude": 68.5471
  },
  "UASB": {
    "airport": "Ekibastuz Airport",
    "latitude": 51.591,
    "longitude": 75.215
  },
  "UASP": {
    "airport": "Pavlodar Airport",
    "latitude": 52.195,
    "longitude": 77.0739
  },
  "UAAH": {
    "airport": "Balkhash Airport",
    "latitude": 46.8933,
    "longitude": 75.005
  },
  "UAKD": {
    "airport": "Zhezkazgan Airport",
    "latitude": 47.7083,
    "longitude": 67.7333
  },
  "UAKK": {
    "airport": "Sary-Arka Airport",
    "latitude": 49.6708,
    "longitude": 73.3344
  },
  "UAUR": {
    "airport": "Arkalyk Airport",
    "latitude": 50.3186,
    "longitude": 66.9528
  },
  "UAUU": {
    "airport": "Kostanay Airport",
    "latitude": 53.2069,
    "longitude": 63.5503
  },
  "UAOO": {
    "airport": "Kyzylorda Airport",
    "latitude": 44.7069,
    "longitude": 65.5925
  },
  "UASS": {
    "airport": "Semey Airport",
    "latitude": 50.3513,
    "longitude": 80.2344
  },
  "UASK": {
    "airport": "Oskemen Airport (Ust-Kamenogorsk Airport)",
    "latitude": 50.0366,
    "longitude": 82.4942
  },
  "UACP": {
    "airport": "Petropavl Airport",
    "latitude": 54.7747,
    "longitude": 69.1839
  },
  "UADD": {
    "airport": "Taraz Airport (Jambyl Airport)",
    "latitude": 42.8536,
    "longitude": 71.3036
  },
  "VLAP": {
    "airport": "Attapeu International Airport",
    "latitude": 14.7931,
    "longitude": 107.045
  },
  "VLHS": {
    "airport": "Ban Huoeisay Airport",
    "latitude": 20.2573,
    "longitude": 100.437
  },
  "VLKG": {
    "airport": "Khong Island Airport",
    "latitude": 17.9881,
    "longitude": 102.563
  },
  "VLPS": {
    "airport": "Pakse International Airport",
    "latitude": 15.1321,
    "longitude": 105.781
  },
  "VLSN": {
    "airport": "Nathong Airport",
    "latitude": 20.4184,
    "longitude": 104.067
  },
  "VLTK": {
    "airport": "Thakhek Airport",
    "latitude": 17.4,
    "longitude": 104.8
  },
  "VLLN": {
    "airport": "Louang Namtha Airport",
    "latitude": 20.9606,
    "longitude": 101.402
  },
  "VLLB": {
    "airport": "Luang Prabang International Airport",
    "latitude": 19.8973,
    "longitude": 102.161
  },
  "VLOS": {
    "airport": "Oudomsay Airport",
    "latitude": 20.6827,
    "longitude": 101.994
  },
  "VLSV": {
    "airport": "Salavan Airport",
    "latitude": 15.7094,
    "longitude": 106.411
  },
  "VLSK": {
    "airport": "Savannakhet Airport",
    "latitude": 16.5566,
    "longitude": 104.76
  },
  "VLVT": {
    "airport": "Wattay International Airport",
    "latitude": 17.9883,
    "longitude": 102.563
  },
  "VLSB": {
    "airport": "Sayaboury Airport",
    "latitude": 19.2436,
    "longitude": 101.709
  },
  "VLXK": {
    "airport": "Xieng Khouang Airport",
    "latitude": 19.4402,
    "longitude": 103.169
  },
  "OLBA": {
    "airport": "Beirut-Rafic Hariri International Airport / Beirut Air Base",
    "latitude": 33.8209,
    "longitude": 35.4884
  },
  "OLKA": {
    "airport": "Rene Mouawad Air Base (Kleyate Airport)",
    "latitude": 34.5893,
    "longitude": 36.0113
  },
  "TFFG": {
    "airport": "L'Esperance Airport (Grand Case Airport)",
    "latitude": 18.0999,
    "longitude": -63.0472
  },
  "TLPC": {
    "airport": "George F. L. Charles Airport",
    "latitude": 14.0202,
    "longitude": -60.9929
  },
  "TLPL": {
    "airport": "Hewanorra International Airport",
    "latitude": 13.7332,
    "longitude": -60.9526
  },
  "VCCG": {
    "airport": "Ampara Airport",
    "latitude": 7.33776,
    "longitude": 81.6259
  },
  "VCCB": {
    "airport": "Batticaloa Airport",
    "latitude": 7.70576,
    "longitude": 81.6788
  },
  "VCCS": {
    "airport": "Sigiriya Airport",
    "latitude": 7.95667,
    "longitude": 80.7285
  },
  "VCCT": {
    "airport": "China Bay Airport",
    "latitude": 8.53851,
    "longitude": 81.1819
  },
  "VCCA": {
    "airport": "Anuradhapura Airport",
    "latitude": 8.30149,
    "longitude": 80.4279
  },
  "VCCH": {
    "airport": "Hingurakgoda Airport (Minneriya Airport)",
    "latitude": 8.04981,
    "longitude": 80.9814
  },
  "VCCJ": {
    "airport": "Jaffna Airport",
    "latitude": 9.79233,
    "longitude": 80.0701
  },
  "VCRI": {
    "airport": "Mattala Rajapaksa International Airport",
    "latitude": 6.28447,
    "longitude": 81.1241
  },
  "VCCK": {
    "airport": "Koggala Airport",
    "latitude": 5.99368,
    "longitude": 80.3203
  },
  "VCCW": {
    "airport": "Weerawila Airport",
    "latitude": 6.25449,
    "longitude": 81.2352
  },
  "VCBI": {
    "airport": "Bandaranaike International Airport",
    "latitude": 7.18076,
    "longitude": 79.8841
  },
  "VCCN": {
    "airport": "Katukurunda Airport",
    "latitude": 6.55212,
    "longitude": 79.9775
  },
  "VCCC": {
    "airport": "Ratmalana Airport",
    "latitude": 6.82199,
    "longitude": 79.8862
  },
  "GLBU": {
    "airport": "Buchanan Airport",
    "latitude": 5.90417,
    "longitude": -10.0583
  },
  "GLTN": {
    "airport": "Tchien Airport",
    "latitude": 6.04565,
    "longitude": -8.13872
  },
  "GLST": {
    "airport": "Sasstown Airport",
    "latitude": 4.66667,
    "longitude": -8.43333
  },
  "GLVA": {
    "airport": "Voinjama Airport (Tenebu Airport)",
    "latitude": 8.4,
    "longitude": -9.767
  },
  "GLRB": {
    "airport": "Roberts International Airport",
    "latitude": 6.23379,
    "longitude": -10.3623
  },
  "GLCP": {
    "airport": "Cape Palmas Airport",
    "latitude": 4.37902,
    "longitude": -7.69695
  },
  "GLMR": {
    "airport": "Spriggs Payne Airport",
    "latitude": 6.28906,
    "longitude": -10.7587
  },
  "GLNA": {
    "airport": "Nimba Airport",
    "latitude": 7.5,
    "longitude": -8.6
  },
  "GLGE": {
    "airport": "Greenville/Sinoe Airport (R.E. Murray Airport)",
    "latitude": 5.03431,
    "longitude": -9.0668
  },
  "FXLR": {
    "airport": "Leribe Airport",
    "latitude": -28.8556,
    "longitude": 28.0528
  },
  "FXPG": {
    "airport": "Pelaneng Airport",
    "latitude": -29.1206,
    "longitude": 28.5053
  },
  "FXSS": {
    "airport": "Seshutes Airport",
    "latitude": -29.2676,
    "longitude": 28.5523
  },
  "FXMF": {
    "airport": "Mafeteng Airport",
    "latitude": -29.8011,
    "longitude": 27.2436
  },
  "FXMM": {
    "airport": "Moshoeshoe I International Airport",
    "latitude": -29.4623,
    "longitude": 27.5525
  },
  "FXSM": {
    "airport": "Semonkong Airport",
    "latitude": -29.8386,
    "longitude": 28.06
  },
  "FXNK": {
    "airport": "Nkaus Airport",
    "latitude": -30.0217,
    "longitude": 28.1969
  },
  "FXMK": {
    "airport": "Mokhotlong Airport",
    "latitude": -29.2818,
    "longitude": 29.0728
  },
  "FXTK": {
    "airport": "Tlokoeng Airport",
    "latitude": -29.233,
    "longitude": 28.883
  },
  "FXLK": {
    "airport": "Lebakeng Airport",
    "latitude": -29.8908,
    "longitude": 28.6556
  },
  "FXSK": {
    "airport": "Sekake Airport",
    "latitude": -30.0389,
    "longitude": 28.3703
  },
  "FXQN": {
    "airport": "Qacha's Nek Airport",
    "latitude": -30.1117,
    "longitude": 28.6719
  },
  "FXQG": {
    "airport": "Quthing Airport",
    "latitude": -30.4075,
    "longitude": 27.6933
  },
  "FXLS": {
    "airport": "Lesobeng Airport",
    "latitude": -29.7829,
    "longitude": 28.3167
  },
  "FXMA": {
    "airport": "Matsaile Airport",
    "latitude": -29.8408,
    "longitude": 28.7764
  },
  "FXSH": {
    "airport": "Sehonghong Airport",
    "latitude": -29.7309,
    "longitude": 28.7689
  },
  "FXTA": {
    "airport": "Thaba Tseka Airport",
    "latitude": -29.5228,
    "longitude": 28.6158
  },
  "EYVI": {
    "airport": "Vilnius Airport",
    "latitude": 54.6341,
    "longitude": 25.2858
  },
  "EYKA": {
    "airport": "Kaunas International Airport",
    "latitude": 54.9639,
    "longitude": 24.0848
  },
  "EYPA": {
    "airport": "Palanga International Airport",
    "latitude": 55.9732,
    "longitude": 21.0939
  },
  "EYPP": {
    "airport": "Panevezys Air Base (Pajuostis Airport)",
    "latitude": 55.7294,
    "longitude": 24.4608
  },
  "EYSA": {
    "airport": "Siauliai International Airport",
    "latitude": 55.8939,
    "longitude": 23.395
  },
  "ELLX": {
    "airport": "Luxembourg Findel Airport",
    "latitude": 49.6233,
    "longitude": 6.20444
  },
  "EVDA": {
    "airport": "Daugavpils International Airport",
    "latitude": 55.9447,
    "longitude": 26.665
  },
  "EVRA": {
    "airport": "Riga International Airport",
    "latitude": 56.9236,
    "longitude": 23.9711
  },
  "EVLA": {
    "airport": "Liepaja International Airport",
    "latitude": 56.5175,
    "longitude": 21.0969
  },
  "EVVA": {
    "airport": "Ventspils International Airport",
    "latitude": 57.3578,
    "longitude": 21.5442
  },
  "HLGN": {
    "airport": "Tobruk Airport",
    "latitude": 31.861,
    "longitude": 23.907
  },
  "HLLQ": {
    "airport": "Al Abraq International Airport",
    "latitude": 32.7887,
    "longitude": 21.9643
  },
  "HLZN": {
    "airport": "Zintan Airport",
    "latitude": 31.7749,
    "longitude": 12.2501
  },
  "HLON": {
    "airport": "Hun Airport",
    "latitude": 29.1101,
    "longitude": 15.9656
  },
  "HLKF": {
    "airport": "Kufra Airport",
    "latitude": 24.1787,
    "longitude": 23.314
  },
  "HLMB": {
    "airport": "Marsa Brega Airport",
    "latitude": 30.3781,
    "longitude": 19.5764
  },
  "HLNR": {
    "airport": "Nafoora Airport",
    "latitude": 29.2132,
    "longitude": 21.5924
  },
  "HLLB": {
    "airport": "Benina International Airport",
    "latitude": 32.0968,
    "longitude": 20.2695
  },
  "HLGT": {
    "airport": "Ghat Airport",
    "latitude": 25.1456,
    "longitude": 10.1426
  },
  "HLMS": {
    "airport": "Misrata Airport",
    "latitude": 32.325,
    "longitude": 15.061
  },
  "HLTD": {
    "airport": "Ghadames Airport",
    "latitude": 30.1517,
    "longitude": 9.71531
  },
  "HLLS": {
    "airport": "Sabha Airport",
    "latitude": 26.987,
    "longitude": 14.4725
  },
  "HLGD": {
    "airport": "Gardabya Airport",
    "latitude": 31.0635,
    "longitude": 16.595
  },
  "HLLM": {
    "airport": "Mitiga International Airport",
    "latitude": 32.8941,
    "longitude": 13.276
  },
  "HLLT": {
    "airport": "Tripoli International Airport",
    "latitude": 32.6635,
    "longitude": 13.159
  },
  "HLZW": {
    "airport": "Zuwarah Airport",
    "latitude": 32.9523,
    "longitude": 12.0155
  },
  "HLUB": {
    "airport": "Ubari Airport",
    "latitude": 26.5675,
    "longitude": 12.8231
  },
  "GMMD": {
    "airport": "Beni Mellal Airport",
    "latitude": 32.4019,
    "longitude": -6.31591
  },
  "GMMC": {
    "airport": "Anfa Airport",
    "latitude": 33.5533,
    "longitude": -7.66139
  },
  "GMMN": {
    "airport": "Mohammed V International Airport",
    "latitude": 33.3675,
    "longitude": -7.58997
  },
  "GMMB": {
    "airport": "Ben Slimane Airport",
    "latitude": 33.6554,
    "longitude": -7.22145
  },
  "GMFK": {
    "airport": "Moulay Ali Cherif Airport",
    "latitude": 31.9475,
    "longitude": -4.39833
  },
  "GMAZ": {
    "airport": "Zagora Airport",
    "latitude": 30.3203,
    "longitude": -5.86667
  },
  "GMMZ": {
    "airport": "Ouarzazate Airport",
    "latitude": 30.9391,
    "longitude": -6.90943
  },
  "GMFF": {
    "airport": "Fes-Saiss Airport",
    "latitude": 33.9273,
    "longitude": -4.97796
  },
  "GMFM": {
    "airport": "Bassatine Air Base",
    "latitude": 33.8791,
    "longitude": -5.51512
  },
  "GMMF": {
    "airport": "Sidi Ifni Airport (Sania Ramel Airport)",
    "latitude": 29.3667,
    "longitude": -10.1878
  },
  "GMAT": {
    "airport": "Tan Tan Airport (Plage Blanche Airport)",
    "latitude": 28.4482,
    "longitude": -11.1613
  },
  "GMMW": {
    "airport": "Nador International Airport",
    "latitude": 34.9888,
    "longitude": -3.02821
  },
  "GMFO": {
    "airport": "Angads Airport",
    "latitude": 34.7872,
    "longitude": -1.92399
  },
  "GMFB": {
    "airport": "Bouarfa Airport",
    "latitude": 32.5143,
    "longitude": -1.98306
  },
  "GMML": {
    "airport": "Hassan I Airport",
    "latitude": 27.1517,
    "longitude": -13.2192
  },
  "GMMA": {
    "airport": "Smara Airport",
    "latitude": 26.7318,
    "longitude": -11.6847
  },
  "GMMH": {
    "airport": "Dakhla Airport",
    "latitude": 23.7183,
    "longitude": -15.932
  },
  "GMMX": {
    "airport": "Marrakesh Menara Airport",
    "latitude": 31.6069,
    "longitude": -8.0363
  },
  "GMMS": {
    "airport": "Safi Airport",
    "latitude": 32.2731,
    "longitude": -9.23694
  },
  "GMMY": {
    "airport": "Kenitra Air Base",
    "latitude": 34.2989,
    "longitude": -6.59588
  },
  "GMME": {
    "airport": "Rabat-Sale Airport",
    "latitude": 34.0515,
    "longitude": -6.75152
  },
  "GMAD": {
    "airport": "Agadir-Al Massira Airport",
    "latitude": 30.325,
    "longitude": -9.41307
  },
  "GMMI": {
    "airport": "Essaouira-Mogador Airport",
    "latitude": 31.3975,
    "longitude": -9.68167
  },
  "GMTA": {
    "airport": "Cherif Al Idrissi Airport",
    "latitude": 35.1771,
    "longitude": -3.83952
  },
  "GMTT": {
    "airport": "Tangier Ibn Battouta Airport",
    "latitude": 35.7269,
    "longitude": -5.91689
  },
  "LUBL": {
    "airport": "Balti International Airport",
    "latitude": 47.8431,
    "longitude": 27.7772
  },
  "LUKK": {
    "airport": "Chisinau International Airport",
    "latitude": 46.9277,
    "longitude": 28.931
  },
  "LYBR": {
    "airport": "Dolac Airport",
    "latitude": 42.839,
    "longitude": 19.862
  },
  "LYPG": {
    "airport": "Podgorica Airport",
    "latitude": 42.3594,
    "longitude": 19.2519
  },
  "LYTV": {
    "airport": "Tivat Airport",
    "latitude": 42.4047,
    "longitude": 18.7233
  },
  "FMME": {
    "airport": "Antsirabe Airport",
    "latitude": -19.8392,
    "longitude": 47.0637
  },
  "FMFE": {
    "airport": "Ambohibary Airport",
    "latitude": -18.9175,
    "longitude": 48.2182
  },
  "FMMI": {
    "airport": "Ivato International Airport",
    "latitude": -18.7969,
    "longitude": 47.4788
  },
  "FMSU": {
    "airport": "Vangaindrano Airport",
    "latitude": -23.3508,
    "longitude": 47.5817
  },
  "FMMX": {
    "airport": "Tsiroanomandidy Airport",
    "latitude": -18.7597,
    "longitude": 46.0541
  },
  "FMSI": {
    "airport": "Ihosy Airport",
    "latitude": -22.4047,
    "longitude": 46.1649
  },
  "FMSM": {
    "airport": "Mananjary Airport",
    "latitude": -21.2018,
    "longitude": 48.3583
  },
  "FMSG": {
    "airport": "Farafangana Airport",
    "latitude": -22.8053,
    "longitude": 47.8206
  },
  "FMSF": {
    "airport": "Fianarantsoa Airport",
    "latitude": -21.4416,
    "longitude": 47.1117
  },
  "FMSK": {
    "airport": "Manakara Airport",
    "latitude": -22.1197,
    "longitude": 48.0217
  },
  "FMNQ": {
    "airport": "Besalampy Airport",
    "latitude": -16.7445,
    "longitude": 44.4825
  },
  "FMNO": {
    "airport": "Soalala Airport",
    "latitude": -16.1017,
    "longitude": 45.3588
  },
  "FMNL": {
    "airport": "Analalava Airport",
    "latitude": -14.6297,
    "longitude": 47.7638
  },
  "FMNM": {
    "airport": "Amborovy Airport (Philibert Tsiranana Airport)",
    "latitude": -15.6668,
    "longitude": 46.3512
  },
  "FMMO": {
    "airport": "Maintirano Airport",
    "latitude": -18.05,
    "longitude": 44.033
  },
  "FMNT": {
    "airport": "Tsaratanana Airport",
    "latitude": -16.7511,
    "longitude": 47.619
  },
  "FMMR": {
    "airport": "Morafenobe Airport",
    "latitude": -17.8501,
    "longitude": 44.9205
  },
  "FMNW": {
    "airport": "Ambalabe Airport",
    "latitude": -14.8988,
    "longitude": 47.9939
  },
  "FMMG": {
    "airport": "Antsalova Airport",
    "latitude": -18.7013,
    "longitude": 44.6149
  },
  "FMNF": {
    "airport": "Befandriana Airport",
    "latitude": -15.2,
    "longitude": 48.483
  },
  "FMNX": {
    "airport": "Mandritsara Airport",
    "latitude": -15.833,
    "longitude": 48.8333
  },
  "FMNP": {
    "airport": "Mampikony Airport",
    "latitude": -16.0723,
    "longitude": 47.6442
  },
  "FMNG": {
    "airport": "Port Berge Airport",
    "latitude": -15.5843,
    "longitude": 47.6236
  },
  "FMMU": {
    "airport": "Tambohorano Airport",
    "latitude": -17.4761,
    "longitude": 43.9728
  },
  "FMMQ": {
    "airport": "Ilaka-Est Airport (Atsinanana Airport)",
    "latitude": -19.583,
    "longitude": 48.803
  },
  "FMMS": {
    "airport": "Sainte Marie Airport",
    "latitude": -17.0939,
    "longitude": 49.8158
  },
  "FMMT": {
    "airport": "Toamasina Airport",
    "latitude": -18.1095,
    "longitude": 49.3925
  },
  "FMMY": {
    "airport": "Vatomandry Airport",
    "latitude": -19.3833,
    "longitude": 48.95
  },
  "FMMH": {
    "airport": "Mahanoro Airport",
    "latitude": -19.833,
    "longitude": 48.8
  },
  "FMMZ": {
    "airport": "Ambatondrazaka Airport",
    "latitude": -17.7954,
    "longitude": 48.4426
  },
  "FMNR": {
    "airport": "Maroantsetra Airport",
    "latitude": -15.4367,
    "longitude": 49.6883
  },
  "FMNC": {
    "airport": "Mananara Nord Airport",
    "latitude": -16.1639,
    "longitude": 49.7738
  },
  "FMSY": {
    "airport": "Ampanihy Airport",
    "latitude": -24.6997,
    "longitude": 44.7342
  },
  "FMSV": {
    "airport": "Betioky Airport",
    "latitude": -23.733,
    "longitude": 44.389
  },
  "FMML": {
    "airport": "Belo sur Tsiribihina Airport",
    "latitude": -19.6867,
    "longitude": 44.5419
  },
  "FMSD": {
    "airport": "Tolanaro Airport (Marillac Airport)",
    "latitude": -25.0381,
    "longitude": 46.9561
  },
  "FMMK": {
    "airport": "Ankavandra Airport",
    "latitude": -18.805,
    "longitude": 45.2735
  },
  "FMSJ": {
    "airport": "Manja Airport",
    "latitude": -21.4261,
    "longitude": 44.3165
  },
  "FMMV": {
    "airport": "Morondava Airport",
    "latitude": -20.2847,
    "longitude": 44.3176
  },
  "FMSR": {
    "airport": "Morombe Airport",
    "latitude": -21.7539,
    "longitude": 43.3755
  },
  "FMSL": {
    "airport": "Bekily Airport",
    "latitude": -24.2357,
    "longitude": 45.3045
  },
  "FMSN": {
    "airport": "Samangoky Airport",
    "latitude": -21.7,
    "longitude": 43.733
  },
  "FMST": {
    "airport": "Toliara Airport",
    "latitude": -23.3834,
    "longitude": 43.7285
  },
  "FMSZ": {
    "airport": "Ankazoabo Airport",
    "latitude": -22.2964,
    "longitude": 44.5315
  },
  "FMSB": {
    "airport": "Antsoa Airport",
    "latitude": -21.607,
    "longitude": 45.136
  },
  "FMSC": {
    "airport": "Mandabe Airport",
    "latitude": -21.0463,
    "longitude": 44.9404
  },
  "FMMC": {
    "airport": "Malaimbandy Airport",
    "latitude": -20.3554,
    "longitude": 45.5434
  },
  "FMMN": {
    "airport": "Miandrivazo Airport",
    "latitude": -19.5628,
    "longitude": 45.4508
  },
  "PKMA": {
    "airport": "Enewetak Auxiliary Airfield",
    "latitude": 11.3407,
    "longitude": 162.328
  },
  "PKWA": {
    "airport": "Bucholz Army Airfield",
    "latitude": 8.72012,
    "longitude": 167.732
  },
  "PKMJ": {
    "airport": "Marshall Islands International Airport (Amata Kabua Int'l)",
    "latitude": 7.06476,
    "longitude": 171.272
  },
  "MLIP": {
    "airport": "Mili Airport",
    "latitude": 6.08333,
    "longitude": 171.733
  },
  "LWOH": {
    "airport": "Ohrid St. Paul the Apostle Airport",
    "latitude": 41.18,
    "longitude": 20.7423
  },
  "LWSK": {
    "airport": "Skopje Alexander the Great Airport",
    "latitude": 41.9616,
    "longitude": 21.6214
  },
  "GABS": {
    "airport": "Bamako-Senou International Airport",
    "latitude": 12.5335,
    "longitude": -7.94994
  },
  "GAGO": {
    "airport": "Gao International Airport (Korogoussou Airport)",
    "latitude": 16.2484,
    "longitude": -0.005456
  },
  "GAYE": {
    "airport": "Yelimane Airport",
    "latitude": 15.133,
    "longitude": -10.567
  },
  "GAKA": {
    "airport": "Kenieba Airport",
    "latitude": 12.833,
    "longitude": -11.25
  },
  "GAKY": {
    "airport": "Kayes Airport (Dag-Dag Airport)",
    "latitude": 14.4812,
    "longitude": -11.4044
  },
  "GANR": {
    "airport": "Nioro Airport",
    "latitude": 15.2381,
    "longitude": -9.57611
  },
  "GANK": {
    "airport": "Keibane Airport",
    "latitude": 15.217,
    "longitude": -7.267
  },
  "GAMB": {
    "airport": "Mopti Airport (Ambodedjo Airport)",
    "latitude": 14.5128,
    "longitude": -4.07956
  },
  "GASK": {
    "airport": "Sikasso Airport",
    "latitude": 11.333,
    "longitude": -5.7
  },
  "GAKO": {
    "airport": "Koutiala Airport",
    "latitude": 12.383,
    "longitude": -5.467
  },
  "GAGM": {
    "airport": "Goundam Airport",
    "latitude": 16.3614,
    "longitude": -3.59972
  },
  "GATB": {
    "airport": "Timbuktu Airport",
    "latitude": 16.7305,
    "longitude": -3.00758
  },
  "VYPN": {
    "airport": "Pathein Airport",
    "latitude": 16.8152,
    "longitude": 94.7799
  },
  "VBHD": {
    "airport": "Hinthada Airport",
    "latitude": 17.6333,
    "longitude": 95.4667
  },
  "VYAN": {
    "airport": "Ann Airport",
    "latitude": 19.7692,
    "longitude": 94.0261
  },
  "VYPY": {
    "airport": "Pyay Airport",
    "latitude": 18.8245,
    "longitude": 95.266
  },
  "VYBM": {
    "airport": "Bhamo Airport",
    "latitude": 24.269,
    "longitude": 97.2462
  },
  "VYMK": {
    "airport": "Myitkyina Airport",
    "latitude": 25.3836,
    "longitude": 97.3519
  },
  "VYPT": {
    "airport": "Putao Airport",
    "latitude": 27.3299,
    "longitude": 97.4263
  },
  "VYLK": {
    "airport": "Loikaw Airport",
    "latitude": 19.6915,
    "longitude": 97.2148
  },
  "VYPA": {
    "airport": "Hpa-An Airport",
    "latitude": 16.8937,
    "longitude": 97.6746
  },
  "VYPP": {
    "airport": "Papun Airport",
    "latitude": 18.0667,
    "longitude": 97.4498
  },
  "VYGG": {
    "airport": "Gangaw Airport",
    "latitude": 22.1747,
    "longitude": 94.1344
  },
  "VYKU": {
    "airport": "Kyauktu Airport",
    "latitude": 21.4,
    "longitude": 94.1333
  },
  "VYMW": {
    "airport": "Magway Airport",
    "latitude": 20.1656,
    "longitude": 94.9414
  },
  "VYPK": {
    "airport": "Pauk Airport",
    "latitude": 21.4492,
    "longitude": 94.4869
  },
  "VYPU": {
    "airport": "Pakokku Airport",
    "latitude": 21.4043,
    "longitude": 95.1113
  },
  "VYHN": {
    "airport": "Tilin Airport",
    "latitude": 21.7,
    "longitude": 94.1
  },
  "VYMD": {
    "airport": "Mandalay International Airport",
    "latitude": 21.7022,
    "longitude": 95.9779
  },
  "VYNT": {
    "airport": "Naypyidaw International Airport",
    "latitude": 19.6235,
    "longitude": 96.201
  },
  "VYBG": {
    "airport": "Nyaung U Airport",
    "latitude": 21.1788,
    "longitude": 94.9302
  },
  "VYCZ": {
    "airport": "Mandalay Chanmyathazi Airport",
    "latitude": 21.9405,
    "longitude": 96.0896
  },
  "VYMM": {
    "airport": "Mawlamyaing Airport",
    "latitude": 16.4447,
    "longitude": 97.6607
  },
  "VYYE": {
    "airport": "Ye Airport",
    "latitude": 15.3,
    "longitude": 97.867
  },
  "VYSW": {
    "airport": "Sittwe Airport",
    "latitude": 20.1327,
    "longitude": 92.8726
  },
  "VYGW": {
    "airport": "Gwa Airport",
    "latitude": 17.6,
    "longitude": 94.5833
  },
  "VYKP": {
    "airport": "Kyaukpyu Airport",
    "latitude": 19.4264,
    "longitude": 93.5348
  },
  "VYMN": {
    "airport": "Manaung Airport",
    "latitude": 18.8458,
    "longitude": 93.6889
  },
  "VYTD": {
    "airport": "Thandwe Airport",
    "latitude": 18.4607,
    "longitude": 94.3001
  },
  "VYHL": {
    "airport": "Homalin Airport",
    "latitude": 24.8996,
    "longitude": 94.914
  },
  "VYKI": {
    "airport": "Khamti Airport",
    "latitude": 25.9883,
    "longitude": 95.6744
  },
  "VYKL": {
    "airport": "Kalaymyo Airport (Kalemyo Airport)",
    "latitude": 23.1888,
    "longitude": 94.0511
  },
  "VYMY": {
    "airport": "Monywa Airport",
    "latitude": 22.2216,
    "longitude": 95.0935
  },
  "VYHH": {
    "airport": "Heho Airport",
    "latitude": 20.747,
    "longitude": 96.792
  },
  "VYKG": {
    "airport": "Kengtung Airport",
    "latitude": 21.3016,
    "longitude": 99.636
  },
  "VYLS": {
    "airport": "Lashio Airport",
    "latitude": 22.9779,
    "longitude": 97.7522
  },
  "VYMT": {
    "airport": "Mong Ton Airport",
    "latitude": 20.2967,
    "longitude": 98.8989
  },
  "VYMO": {
    "airport": "Momeik Airport",
    "latitude": 23.0925,
    "longitude": 96.6453
  },
  "VYMS": {
    "airport": "Monghsat Airport",
    "latitude": 20.5168,
    "longitude": 99.2568
  },
  "VYNS": {
    "airport": "Nansang Airport",
    "latitude": 20.8905,
    "longitude": 97.7359
  },
  "VYTL": {
    "airport": "Tachilek Airport",
    "latitude": 20.4838,
    "longitude": 99.9354
  },
  "VYKT": {
    "airport": "Kawthaung Airport",
    "latitude": 10.0493,
    "longitude": 98.538
  },
  "VYME": {
    "airport": "Myeik Airport",
    "latitude": 12.4398,
    "longitude": 98.6215
  },
  "VYDW": {
    "airport": "Dawei Airport",
    "latitude": 14.1039,
    "longitude": 98.2036
  },
  "VYBP": {
    "airport": "Bokpyin Airport",
    "latitude": 11.1494,
    "longitude": 98.7359
  },
  "VYYY": {
    "airport": "Yangon International Airport",
    "latitude": 16.9073,
    "longitude": 96.1332
  },
  "ZMTG": {
    "airport": "Tsetserleg Airport",
    "latitude": 47.4654,
    "longitude": 101.478
  },
  "ZMUL": {
    "airport": "Olgii Airport",
    "latitude": 48.9933,
    "longitude": 89.9225
  },
  "ZMBH": {
    "airport": "Bayankhongor Airport",
    "latitude": 46.1633,
    "longitude": 100.704
  },
  "ZMBN": {
    "airport": "Bulgan Airport",
    "latitude": 48.855,
    "longitude": 103.476
  },
  "ZMCD": {
    "airport": "Choibalsan Airport",
    "latitude": 48.1357,
    "longitude": 114.646
  },
  "ZMMG": {
    "airport": "Mandalgovi Airport",
    "latitude": 45.7381,
    "longitude": 106.269
  },
  "ZMTL": {
    "airport": "Tosontsengel Airport",
    "latitude": 48.7389,
    "longitude": 98.2941
  },
  "ZMAT": {
    "airport": "Altai Airport",
    "latitude": 46.3764,
    "longitude": 96.2211
  },
  "ZMDN": {
    "airport": "Donoi Airport",
    "latitude": 47.7093,
    "longitude": 96.5258
  },
  "ZMUH": {
    "airport": "Ondorkhaan Airport",
    "latitude": 47.3049,
    "longitude": 110.609
  },
  "ZMBS": {
    "airport": "Bulgan Airport",
    "latitude": 46.1006,
    "longitude": 91.5842
  },
  "ZMKD": {
    "airport": "Khovd Airport",
    "latitude": 47.9541,
    "longitude": 91.6282
  },
  "ZMHG": {
    "airport": "Khatgal Airport",
    "latitude": 50.436,
    "longitude": 100.14
  },
  "ZMMN": {
    "airport": "Moron Airport",
    "latitude": 49.6633,
    "longitude": 100.099
  },
  "ZMDZ": {
    "airport": "Dalanzadgad Airport",
    "latitude": 43.5917,
    "longitude": 104.43
  },
  "ZMAH": {
    "airport": "Arvaikheer Airport",
    "latitude": 46.2503,
    "longitude": 102.802
  },
  "ZMHU": {
    "airport": "Khujirt Airport",
    "latitude": 46.9258,
    "longitude": 102.773
  },
  "ZMHH": {
    "airport": "Kharkhorin Airport",
    "latitude": 47.2467,
    "longitude": 102.826
  },
  "ZMBR": {
    "airport": "Bulagtai Airport",
    "latitude": 43.7493,
    "longitude": 104.115
  },
  "ZMBU": {
    "airport": "Baruun-Urt Airport",
    "latitude": 46.6603,
    "longitude": 113.285
  },
  "ZMCK": {
    "airport": "Chinggis Khaan International Airport",
    "latitude": 47.6516,
    "longitude": 106.822
  },
  "ZMUB": {
    "airport": "Chinggis Khaan International Airport",
    "latitude": 47.8431,
    "longitude": 106.767
  },
  "ZMUG": {
    "airport": "Ulaangom Airport",
    "latitude": 50.0666,
    "longitude": 91.9383
  },
  "VMMC": {
    "airport": "Macau International Airport",
    "latitude": 22.1496,
    "longitude": 113.592
  },
  "PGRO": {
    "airport": "Rota International Airport",
    "latitude": 14.1743,
    "longitude": 145.243
  },
  "PGSN": {
    "airport": "Saipan International Airport (Francisco C. Ada Int'l)",
    "latitude": 15.119,
    "longitude": 145.729
  },
  "PGWT": {
    "airport": "Tinian International Airport (West Tinian Airport)",
    "latitude": 14.9992,
    "longitude": 145.619
  },
  "TFFF": {
    "airport": "Martinique Aime Cesaire International Airport",
    "latitude": 14.591,
    "longitude": -61.0032
  },
  "GQPA": {
    "airport": "Atar International Airport",
    "latitude": 20.5068,
    "longitude": -13.0432
  },
  "GQNF": {
    "airport": "Kiffa Airport",
    "latitude": 16.59,
    "longitude": -11.4062
  },
  "GQNE": {
    "airport": "Abbaye Airport",
    "latitude": 16.6333,
    "longitude": -14.2
  },
  "GQPP": {
    "airport": "Nouadhibou International Airport",
    "latitude": 20.9331,
    "longitude": -17.03
  },
  "GQNK": {
    "airport": "Kaedi Airport",
    "latitude": 16.1595,
    "longitude": -13.5076
  },
  "GQNS": {
    "airport": "Selibaby Airport",
    "latitude": 15.1797,
    "longitude": -12.2073
  },
  "GQNJ": {
    "airport": "Akjoujt Airport",
    "latitude": 19.733,
    "longitude": -14.3832
  },
  "GQNA": {
    "airport": "Aioun el Atrouss Airport",
    "latitude": 16.7113,
    "longitude": -9.63788
  },
  "GQNU": {
    "airport": "M'Bout Airport",
    "latitude": 16.0333,
    "longitude": -12.6
  },
  "GQNO": {
    "airport": "Nouakchott-Oumtounsy International Airport",
    "latitude": 18.31,
    "longitude": -15.9697
  },
  "GQNT": {
    "airport": "Tamchakett Airport",
    "latitude": 17.233,
    "longitude": -10.817
  },
  "GQNL": {
    "airport": "Letfotar Airport",
    "latitude": 17.75,
    "longitude": -12.5
  },
  "GQNC": {
    "airport": "Tichitt Airport",
    "latitude": 18.45,
    "longitude": -9.517
  },
  "GQND": {
    "airport": "Tidjikja Airport",
    "latitude": 18.5701,
    "longitude": -11.4235
  },
  "GQNI": {
    "airport": "Nema Airport",
    "latitude": 16.622,
    "longitude": -7.3166
  },
  "GQPF": {
    "airport": "Fderik Airport",
    "latitude": 22.667,
    "longitude": -12.733
  },
  "GQPZ": {
    "airport": "Tazadit Airport",
    "latitude": 22.7564,
    "longitude": -12.4836
  },
  "GQNH": {
    "airport": "Timbedra Airport",
    "latitude": 16.233,
    "longitude": -8.167
  },
  "GQNB": {
    "airport": "Boutilimit Airport",
    "latitude": 17.533,
    "longitude": -14.683
  },
  "TRPG": {
    "airport": "John A. Osborne Airport",
    "latitude": 16.7914,
    "longitude": -62.1933
  },
  "LMML": {
    "airport": "Malta International Airport (Luqa Airport)",
    "latitude": 35.8575,
    "longitude": 14.4775
  },
  "FIMP": {
    "airport": "Sir Seewoosagur Ramgoolam International Airport",
    "latitude": -20.4302,
    "longitude": 57.6836
  },
  "FIMR": {
    "airport": "Sir Gaetan Duval Airport",
    "latitude": -19.7577,
    "longitude": 63.361
  },
  "VRMD": {
    "airport": "Dharavandhoo Airport",
    "latitude": 5.1561,
    "longitude": 73.1302
  },
  "VRMV": {
    "airport": "Villa International Airport",
    "latitude": 3.47056,
    "longitude": 72.8358
  },
  "VRMU": {
    "airport": "Dhaalu Atoll Kudahuvadhoo Airport",
    "latitude": 2.6673,
    "longitude": 72.8929
  },
  "VRMT": {
    "airport": "Kaadedhdhoo Airport",
    "latitude": 0.488131,
    "longitude": 72.9969
  },
  "VRMF": {
    "airport": "Fuvahmulah Airport",
    "latitude": -0.309722,
    "longitude": 73.435
  },
  "VRMH": {
    "airport": "Hanimaadhoo International Airport",
    "latitude": 6.74423,
    "longitude": 73.1705
  },
  "VRMM": {
    "airport": "Velana International Airport",
    "latitude": 4.19183,
    "longitude": 73.5291
  },
  "VRMO": {
    "airport": "Kooddoo Airport",
    "latitude": 0.7324,
    "longitude": 73.4336
  },
  "VRMK": {
    "airport": "Kadhdhoo Airport",
    "latitude": 1.85917,
    "longitude": 73.5219
  },
  "VREI": {
    "airport": "Ifuru Airport",
    "latitude": 5.7083,
    "longitude": 73.025
  },
  "VRMG": {
    "airport": "Gan International Airport",
    "latitude": -0.693342,
    "longitude": 73.1556
  },
  "VRNT": {
    "airport": "Thimarafushi Airport",
    "latitude": 2.211,
    "longitude": 73.1533
  },
  "FWCL": {
    "airport": "Chileka International Airport",
    "latitude": -15.6791,
    "longitude": 34.974
  },
  "FWCD": {
    "airport": "Chelinda Airport",
    "latitude": -10.55,
    "longitude": 33.8
  },
  "FWKA": {
    "airport": "Karonga Airport",
    "latitude": -9.95357,
    "longitude": 33.893
  },
  "FWKG": {
    "airport": "Kasungu Airport",
    "latitude": -13.0146,
    "longitude": 33.4686
  },
  "FWLK": {
    "airport": "Likoma Airport",
    "latitude": -12.0758,
    "longitude": 34.7372
  },
  "FWKI": {
    "airport": "Lilongwe International Airport (Kamuzu Int'l)",
    "latitude": -13.7894,
    "longitude": 33.781
  },
  "FWCM": {
    "airport": "Club Makokola Airport",
    "latitude": -14.3069,
    "longitude": 35.1325
  },
  "FWMG": {
    "airport": "Mangochi Airport",
    "latitude": -14.483,
    "longitude": 35.267
  },
  "FWMY": {
    "airport": "Monkey Bay Airport",
    "latitude": -14.0836,
    "longitude": 34.9197
  },
  "FWUU": {
    "airport": "Mzuzu Airport",
    "latitude": -11.4447,
    "longitude": 34.0118
  },
  "FWDW": {
    "airport": "Dwanga Airport (Dwangwa Airport)",
    "latitude": -12.5183,
    "longitude": 34.1319
  },
  "FWSM": {
    "airport": "Salima Airport",
    "latitude": -13.7559,
    "longitude": 34.5842
  },
  "MMAS": {
    "airport": "Lic. Jesus Teran Peredo International Airport",
    "latitude": 21.7056,
    "longitude": -102.318
  },
  "MX86": {
    "airport": "Punta Abreojos Airstrip",
    "latitude": 26.7272,
    "longitude": -113.559
  },
  "MMGR": {
    "airport": "Guerrero Negro Airport",
    "latitude": 28.0261,
    "longitude": -114.024
  },
  "MMLP": {
    "airport": "Manuel Marquez de Leon International Airport",
    "latitude": 24.0727,
    "longitude": -110.362
  },
  "MMLT": {
    "airport": "Loreto International Airport",
    "latitude": 25.9892,
    "longitude": -111.348
  },
  "MMMG": {
    "airport": "Mulege Airstrip",
    "latitude": 26.9053,
    "longitude": -111.971
  },
  "MMPL": {
    "airport": "Punta Colorada Airstrip",
    "latitude": 23.575,
    "longitude": -109.536
  },
  "MMSD": {
    "airport": "Los Cabos International Airport",
    "latitude": 23.1518,
    "longitude": -109.721
  },
  "MMES": {
    "airport": "Ensenada Airport",
    "latitude": 31.7953,
    "longitude": -116.603
  },
  "MMML": {
    "airport": "General Rodolfo Sanchez Taboada International Airport",
    "latitude": 32.6306,
    "longitude": -115.242
  },
  "MMSF": {
    "airport": "San Felipe International Airport",
    "latitude": 30.9302,
    "longitude": -114.809
  },
  "MMTJ": {
    "airport": "Tijuana International Airport",
    "latitude": 32.5411,
    "longitude": -116.97
  },
  "MMCE": {
    "airport": "Ciudad del Carmen International Airport",
    "latitude": 18.6537,
    "longitude": -91.799
  },
  "MMCP": {
    "airport": "Ing. Alberto Acuna Ongay International Airport",
    "latitude": 19.8168,
    "longitude": -90.5003
  },
  "MMCO": {
    "airport": "Copalar Airport",
    "latitude": 16.1767,
    "longitude": -92.0506
  },
  "MMPQ": {
    "airport": "Palenque International Airport",
    "latitude": 17.5332,
    "longitude": -92.0155
  },
  "MMTP": {
    "airport": "Tapachula International Airport",
    "latitude": 14.7943,
    "longitude": -92.37
  },
  "MMTG": {
    "airport": "Angel Albino Corzo International Airport",
    "latitude": 16.5636,
    "longitude": -93.0225
  },
  "MMCS": {
    "airport": "Abraham Gonzalez International Airport",
    "latitude": 31.6361,
    "longitude": -106.429
  },
  "MMCU": {
    "airport": "General Roberto Fierro Villalobos International Airport",
    "latitude": 28.7029,
    "longitude": -105.965
  },
  "MMCG": {
    "airport": "Nuevo Casas Grandes Municipal Airport",
    "latitude": 30.3974,
    "longitude": -107.875
  },
  "MMCC": {
    "airport": "Ciudad Acuna International Airport",
    "latitude": 29.3329,
    "longitude": -101.099
  },
  "MMMV": {
    "airport": "Venustiano Carranza International Airport",
    "latitude": 26.9557,
    "longitude": -101.47
  },
  "MMPG": {
    "airport": "Piedras Negras International Airport",
    "latitude": 28.6274,
    "longitude": -100.535
  },
  "MMIO": {
    "airport": "Plan de Guadalupe International Airport",
    "latitude": 25.5495,
    "longitude": -100.929
  },
  "MMTC": {
    "airport": "Francisco Sarabia International Airport",
    "latitude": 25.5683,
    "longitude": -103.411
  },
  "MMIA": {
    "airport": "Licenciado Miguel de la Madrid Airport",
    "latitude": 19.277,
    "longitude": -103.577
  },
  "MMZO": {
    "airport": "Playa de Oro International Airport",
    "latitude": 19.1448,
    "longitude": -104.559
  },
  "MMDO": {
    "airport": "General Guadalupe Victoria International Airport",
    "latitude": 24.1242,
    "longitude": -104.528
  },
  "MMLO": {
    "airport": "Del Bajio International Airport (Guanajuato Int'l Airport)",
    "latitude": 20.9935,
    "longitude": -101.481
  },
  "MMCY": {
    "airport": "Captain Rogelio Castillo National Airport",
    "latitude": 20.546,
    "longitude": -100.887
  },
  "MMAA": {
    "airport": "General Juan N. Alvarez International Airport",
    "latitude": 16.7571,
    "longitude": -99.754
  },
  "MMZH": {
    "airport": "Ixtapa-Zihuatanejo International Airport",
    "latitude": 17.6016,
    "longitude": -101.461
  },
  "MMGL": {
    "airport": "Guadalajara International Airport (Miguel Hidalgo y Costilla Int'l)",
    "latitude": 20.5218,
    "longitude": -103.311
  },
  "MMPR": {
    "airport": "Licenciado Gustavo Diaz Ordaz International Airport",
    "latitude": 20.6801,
    "longitude": -105.254
  },
  "MMJC": {
    "airport": "Jorge Jimenez Cantu National Airport",
    "latitude": 19.5748,
    "longitude": -99.2888
  },
  "MMMX": {
    "airport": "Mexico City International Airport",
    "latitude": 19.4363,
    "longitude": -99.0721
  },
  "MMSM": {
    "airport": "Felipe Ángeles International Airport",
    "latitude": 19.7553,
    "longitude": -99.0164
  },
  "MMTO": {
    "airport": "Licenciado Adolfo Lopez Mateos International Airport",
    "latitude": 19.3371,
    "longitude": -99.566
  },
  "MMLC": {
    "airport": "Lazaro Cardenas Airport",
    "latitude": 18.0017,
    "longitude": -102.221
  },
  "MMMM": {
    "airport": "General Francisco J. Mujica International Airport",
    "latitude": 19.8499,
    "longitude": -101.025
  },
  "MMPN": {
    "airport": "Ignacio Lopez Rayon International Airport",
    "latitude": 19.3967,
    "longitude": -102.039
  },
  "MMZM": {
    "airport": "Zamora National Airport",
    "latitude": 20.045,
    "longitude": -102.276
  },
  "MMCB": {
    "airport": "General Mariano Matamoros Airport",
    "latitude": 18.8348,
    "longitude": -99.2613
  },
  "MMEP": {
    "airport": "Amado Nervo International Airport",
    "latitude": 21.4195,
    "longitude": -104.843
  },
  "MMMY": {
    "airport": "General Mariano Escobedo International Airport",
    "latitude": 25.7785,
    "longitude": -100.107
  },
  "MMAN": {
    "airport": "Del Norte International Airport",
    "latitude": 25.8656,
    "longitude": -100.237
  },
  "MMBT": {
    "airport": "Bahias de Huatulco International Airport",
    "latitude": 15.7753,
    "longitude": -96.2626
  },
  "MMIT": {
    "airport": "Ixtepec Airport",
    "latitude": 16.4493,
    "longitude": -95.0937
  },
  "MMOX": {
    "airport": "Xoxocotlan International Air",
    "latitude": 16.9999,
    "longitude": -96.7266
  },
  "MMPS": {
    "airport": "Puerto Escondido International Airport",
    "latitude": 15.8769,
    "longitude": -97.0891
  },
  "MMSZ": {
    "airport": "Salina Cruz Airport",
    "latitude": 16.2126,
    "longitude": -95.2016
  },
  "MMPB": {
    "airport": "Hermanos Serdan International Airport",
    "latitude": 19.1581,
    "longitude": -98.3714
  },
  "MMHC": {
    "airport": "Tehuacan Airport",
    "latitude": 18.4972,
    "longitude": -97.4199
  },
  "MMQT": {
    "airport": "Queretaro Intercontinental Airport",
    "latitude": 20.6173,
    "longitude": -100.186
  },
  "MMCM": {
    "airport": "Chetumal International Airport",
    "latitude": 18.5047,
    "longitude": -88.3268
  },
  "MMUN": {
    "airport": "Cancun International Airport",
    "latitude": 21.0365,
    "longitude": -86.8771
  },
  "MMCZ": {
    "airport": "Cozumel International Airport",
    "latitude": 20.5224,
    "longitude": -86.9256
  },
  "MMIM": {
    "airport": "Isla Mujeres Airport",
    "latitude": 21.245,
    "longitude": -86.74
  },
  "MMTL": {
    "airport": "Tulum Felipe Carrillo Puerto Airport",
    "latitude": 20.1661,
    "longitude": -87.6592
  },
  "MMTU": {
    "airport": "Tulum Airbase",
    "latitude": 20.2273,
    "longitude": -87.4382
  },
  "MMSP": {
    "airport": "Ponciano Arriaga International Airport",
    "latitude": 22.2543,
    "longitude": -100.931
  },
  "MMTN": {
    "airport": "Tamuin National Airport",
    "latitude": 22.0383,
    "longitude": -98.8065
  },
  "MMCL": {
    "airport": "Bachigualato Federal International Airport",
    "latitude": 24.7645,
    "longitude": -107.475
  },
  "MMLM": {
    "airport": "Valle del Fuerte Federal International Airport",
    "latitude": 25.6852,
    "longitude": -109.081
  },
  "MMMZ": {
    "airport": "General Rafael Buelna International Airport",
    "latitude": 23.1614,
    "longitude": -106.266
  },
  "MMCN": {
    "airport": "Ciudad Obregon International Airport",
    "latitude": 27.3926,
    "longitude": -109.833
  },
  "MMCA": {
    "airport": "Cananea National Airport",
    "latitude": 31.0662,
    "longitude": -110.098
  },
  "MMGM": {
    "airport": "General Jose Maria Yanez International Airport",
    "latitude": 27.969,
    "longitude": -110.925
  },
  "MMHO": {
    "airport": "General Ignacio Pesqueira Garcia International Airport",
    "latitude": 29.0959,
    "longitude": -111.048
  },
  "MMNG": {
    "airport": "Nogales International Airport",
    "latitude": 31.2261,
    "longitude": -110.976
  },
  "MMPE": {
    "airport": "Puerto Penasco International Airport",
    "latitude": 31.352,
    "longitude": -113.305
  },
  "MMVA": {
    "airport": "Carlos Rovirosa Perez International Airport",
    "latitude": 17.997,
    "longitude": -92.8174
  },
  "MMCV": {
    "airport": "General Pedro J. Mendez International Airport",
    "latitude": 23.7033,
    "longitude": -98.9565
  },
  "MMMA": {
    "airport": "General Servando Canales International Airport",
    "latitude": 25.7699,
    "longitude": -97.5253
  },
  "MMDM": {
    "airport": "Ciudad Mante National Airport",
    "latitude": 22.7432,
    "longitude": -99.0174
  },
  "MMNL": {
    "airport": "Quetzalcoatl International Airport",
    "latitude": 27.4439,
    "longitude": -99.5705
  },
  "MMRX": {
    "airport": "General Lucio Blanco International Airport",
    "latitude": 26.0089,
    "longitude": -98.2285
  },
  "MMTM": {
    "airport": "General Francisco Javier Mina International Airport",
    "latitude": 22.2964,
    "longitude": -97.8659
  },
  "MMJA": {
    "airport": "El Lencero Airport",
    "latitude": 19.4751,
    "longitude": -96.7975
  },
  "MMMT": {
    "airport": "Minatitlan/Coatzacoalcos International Airport",
    "latitude": 18.1034,
    "longitude": -94.5807
  },
  "MMPA": {
    "airport": "El Tajin National Airport",
    "latitude": 20.6027,
    "longitude": -97.4608
  },
  "MMVR": {
    "airport": "General Heriberto Jara International Airport",
    "latitude": 19.1459,
    "longitude": -96.1873
  },
  "MMCT": {
    "airport": "Chichen Itza International Airport",
    "latitude": 20.6413,
    "longitude": -88.4462
  },
  "MMMD": {
    "airport": "Manuel Crescencio Rejon International Airport",
    "latitude": 20.937,
    "longitude": -89.6577
  },
  "MMZC": {
    "airport": "General Leobardo C. Ruiz International Airport",
    "latitude": 22.8971,
    "longitude": -102.687
  },
  "WMKJ": {
    "airport": "Senai International Airport",
    "latitude": 1.64131,
    "longitude": 103.67
  },
  "WMAU": {
    "airport": "Mersing Airport",
    "latitude": 2.383,
    "longitude": 103.867
  },
  "WMKA": {
    "airport": "Sultan Abdul Halim Airport",
    "latitude": 6.18967,
    "longitude": 100.398
  },
  "WMKL": {
    "airport": "Langkawi International Airport",
    "latitude": 6.32973,
    "longitude": 99.7287
  },
  "WMKC": {
    "airport": "Sultan Ismail Petra Airport",
    "latitude": 6.16685,
    "longitude": 102.293
  },
  "WMKM": {
    "airport": "Malacca International Airport",
    "latitude": 2.26336,
    "longitude": 102.252
  },
  "WMKD": {
    "airport": "Sultan Haji Ahmad Shah Airport (RMAF Kuantan)",
    "latitude": 3.77539,
    "longitude": 103.209
  },
  "WMAN": {
    "airport": "Sungai Tiang Airport",
    "latitude": 4.33028,
    "longitude": 102.395
  },
  "WMBT": {
    "airport": "Tioman Airport",
    "latitude": 2.81818,
    "longitude": 104.16
  },
  "WMKI": {
    "airport": "Sultan Azlan Shah Airport",
    "latitude": 4.56797,
    "longitude": 101.092
  },
  "WMPA": {
    "airport": "Pangkor Airport",
    "latitude": 4.24472,
    "longitude": 100.553
  },
  "WMBA": {
    "airport": "Sitiawan Airport",
    "latitude": 4.2222,
    "longitude": 100.699
  },
  "WMBI": {
    "airport": "Taiping Airport",
    "latitude": 4.867,
    "longitude": 100.717
  },
  "WMKB": {
    "airport": "RMAF Butterworth",
    "latitude": 5.46592,
    "longitude": 100.391
  },
  "WMKP": {
    "airport": "Penang International Airport",
    "latitude": 5.29714,
    "longitude": 100.277
  },
  "WBKK": {
    "airport": "Kota Kinabalu International Airport",
    "latitude": 5.93721,
    "longitude": 116.051
  },
  "WBKN": {
    "airport": "Long Pasia Airport",
    "latitude": 4.4,
    "longitude": 115.717
  },
  "WBKG": {
    "airport": "Keningau Airport",
    "latitude": 5.35749,
    "longitude": 116.162
  },
  "WBKT": {
    "airport": "Kudat Airport",
    "latitude": 6.9225,
    "longitude": 116.836
  },
  "WBKL": {
    "airport": "Labuan Airport",
    "latitude": 5.30068,
    "longitude": 115.25
  },
  "WBKD": {
    "airport": "Lahad Datu Airport",
    "latitude": 5.03225,
    "longitude": 118.324
  },
  "WBKP": {
    "airport": "Pamol Airport",
    "latitude": 5.9993,
    "longitude": 117.4
  },
  "WBKR": {
    "airport": "Ranau Airport",
    "latitude": 5.95,
    "longitude": 116.667
  },
  "WBKS": {
    "airport": "Sandakan Airport",
    "latitude": 5.9009,
    "longitude": 118.059
  },
  "WBKA": {
    "airport": "Semporna Airport",
    "latitude": 4.45,
    "longitude": 118.583
  },
  "WBKO": {
    "airport": "Sepulot Airport",
    "latitude": 4.733,
    "longitude": 116.467
  },
  "WBKH": {
    "airport": "Sahabat Airport",
    "latitude": 5.08778,
    "longitude": 119.094
  },
  "WBKE": {
    "airport": "Telupid Airport",
    "latitude": 5.62861,
    "longitude": 117.126
  },
  "WBKM": {
    "airport": "Tommanggong Airport",
    "latitude": 5.40257,
    "longitude": 118.658
  },
  "WBKW": {
    "airport": "Tawau Airport",
    "latitude": 4.32016,
    "longitude": 118.128
  },
  "WBGZ": {
    "airport": "Bario Airport",
    "latitude": 3.73389,
    "longitude": 115.479
  },
  "WBGQ": {
    "airport": "Bakelalan Airport",
    "latitude": 3.974,
    "longitude": 115.618
  },
  "WBGC": {
    "airport": "Belaga Airport",
    "latitude": 2.65,
    "longitude": 113.767
  },
  "WBGN": {
    "airport": "Sematan Airport",
    "latitude": 1.81361,
    "longitude": 109.763
  },
  "WBGB": {
    "airport": "Bintulu Airport",
    "latitude": 3.12385,
    "longitude": 113.02
  },
  "WBGG": {
    "airport": "Kuching International Airport",
    "latitude": 1.4847,
    "longitude": 110.347
  },
  "WBGP": {
    "airport": "Kapit Airport",
    "latitude": 2.01052,
    "longitude": 112.931
  },
  "WBGF": {
    "airport": "Long Lellang Airport",
    "latitude": 3.421,
    "longitude": 115.154
  },
  "WBGL": {
    "airport": "Long Akah Airport",
    "latitude": 3.3,
    "longitude": 114.783
  },
  "WBGJ": {
    "airport": "Limbang Airport",
    "latitude": 4.8083,
    "longitude": 115.01
  },
  "WBGD": {
    "airport": "Long Semado Airport",
    "latitude": 4.217,
    "longitude": 115.6
  },
  "WBGU": {
    "airport": "Long Sukang Airport",
    "latitude": 4.55222,
    "longitude": 115.494
  },
  "WBGW": {
    "airport": "Lawas Airport",
    "latitude": 4.84917,
    "longitude": 115.408
  },
  "WBGK": {
    "airport": "Mukah Airport",
    "latitude": 2.90639,
    "longitude": 112.08
  },
  "WBGM": {
    "airport": "Marudi Airport",
    "latitude": 4.17898,
    "longitude": 114.329
  },
  "WBGR": {
    "airport": "Miri Airport",
    "latitude": 4.32201,
    "longitude": 113.987
  },
  "WBMU": {
    "airport": "Mulu Airport",
    "latitude": 4.04833,
    "longitude": 114.805
  },
  "WBGI": {
    "airport": "Long Seridan Airport",
    "latitude": 3.967,
    "longitude": 115.05
  },
  "WBGS": {
    "airport": "Sibu Airport",
    "latitude": 2.2616,
    "longitude": 111.985
  },
  "WBGY": {
    "airport": "Simanggang Airport",
    "latitude": 1.20872,
    "longitude": 111.453
  },
  "WBTM": {
    "airport": "Tanjung Manis Airport",
    "latitude": 2.17784,
    "longitude": 111.202
  },
  "WMKK": {
    "airport": "Kuala Lumpur International Airport",
    "latitude": 2.74558,
    "longitude": 101.71
  },
  "WMSA": {
    "airport": "Sultan Abdul Aziz Shah Airport",
    "latitude": 3.13058,
    "longitude": 101.549
  },
  "WMKE": {
    "airport": "Kerteh Airport",
    "latitude": 4.53722,
    "longitude": 103.427
  },
  "WMPR": {
    "airport": "Redang Airport",
    "latitude": 5.76528,
    "longitude": 103.007
  },
  "WMKN": {
    "airport": "Sultan Mahmud Airport",
    "latitude": 5.38264,
    "longitude": 103.103
  },
  "FQIB": {
    "airport": "Ibo Island Airport",
    "latitude": -12.3502,
    "longitude": 40.6023
  },
  "FQLU": {
    "airport": "Lumbo Airport",
    "latitude": -15.0331,
    "longitude": 40.6717
  },
  "FQMD": {
    "airport": "Mueda Airport",
    "latitude": -11.6729,
    "longitude": 39.5631
  },
  "FQMP": {
    "airport": "Mocimboa da Praia Air",
    "latitude": -11.3618,
    "longitude": 40.3549
  },
  "FQPB": {
    "airport": "Pemba Airport",
    "latitude": -12.9918,
    "longitude": 40.524
  },
  "FQXA": {
    "airport": "Xai-Xai Airport",
    "latitude": -25.0378,
    "longitude": 33.6274
  },
  "FQIN": {
    "airport": "Inhambane Airport",
    "latitude": -23.8764,
    "longitude": 35.4085
  },
  "FQVL": {
    "airport": "Vilankulo Airport",
    "latitude": -22.0184,
    "longitude": 35.3133
  },
  "FQCH": {
    "airport": "Chimoio Airport",
    "latitude": -19.1513,
    "longitude": 33.429
  },
  "FQIA": {
    "airport": "Inhaca Airport",
    "latitude": -25.9971,
    "longitude": 32.9294
  },
  "FQMA": {
    "airport": "Maputo International Airport",
    "latitude": -25.9208,
    "longitude": 32.5726
  },
  "FQPO": {
    "airport": "Ponta do Ouro Airport",
    "latitude": -26.8286,
    "longitude": 32.8377
  },
  "FQAG": {
    "airport": "Angoche Airport",
    "latitude": -16.1819,
    "longitude": 39.9452
  },
  "FQNP": {
    "airport": "Nampula Airport",
    "latitude": -15.1056,
    "longitude": 39.2818
  },
  "FQNC": {
    "airport": "Nacala Airport",
    "latitude": -14.4882,
    "longitude": 40.7122
  },
  "FQCB": {
    "airport": "Cuamba Airport",
    "latitude": -14.815,
    "longitude": 36.53
  },
  "FQLC": {
    "airport": "Lichinga Airport",
    "latitude": -13.274,
    "longitude": 35.2663
  },
  "FQBR": {
    "airport": "Beira Airport",
    "latitude": -19.7964,
    "longitude": 34.9076
  },
  "FQTT": {
    "airport": "Chingozi Airport",
    "latitude": -16.1048,
    "longitude": 33.6402
  },
  "FQQL": {
    "airport": "Quelimane Airport",
    "latitude": -17.8555,
    "longitude": 36.8691
  },
  "FYAR": {
    "airport": "Arandis Airport",
    "latitude": -22.4622,
    "longitude": 14.98
  },
  "FYME": {
    "airport": "Mount Etjo Airport",
    "latitude": -21.0233,
    "longitude": 16.4528
  },
  "FYSM": {
    "airport": "Swakopmund Airport",
    "latitude": -22.6619,
    "longitude": 14.5681
  },
  "FYWB": {
    "airport": "Walvis Bay Airport",
    "latitude": -22.9799,
    "longitude": 14.6453
  },
  "FYSS": {
    "airport": "Sesriem Airport",
    "latitude": -24.5128,
    "longitude": 15.7467
  },
  "FYAA": {
    "airport": "Ai-Ais Airport",
    "latitude": -27.995,
    "longitude": 17.5966
  },
  "FYKB": {
    "airport": "Karasburg Airport",
    "latitude": -28.0297,
    "longitude": 18.7385
  },
  "FYKT": {
    "airport": "Keetmanshoop Airport",
    "latitude": -26.5398,
    "longitude": 18.1114
  },
  "FYLZ": {
    "airport": "Luderitz Airport",
    "latitude": -26.6874,
    "longitude": 15.2429
  },
  "FYOG": {
    "airport": "Oranjemund Airport",
    "latitude": -28.5847,
    "longitude": 16.4467
  },
  "FYSA": {
    "airport": "Skorpion Mine Airport",
    "latitude": -27.8764,
    "longitude": 16.6478
  },
  "FYRU": {
    "airport": "Rundu Airport",
    "latitude": -17.9565,
    "longitude": 19.7194
  },
  "FYWE": {
    "airport": "Eros Airport",
    "latitude": -22.6122,
    "longitude": 17.0804
  },
  "FYMG": {
    "airport": "Midgard Airport",
    "latitude": -22.0106,
    "longitude": 17.37
  },
  "FYNG": {
    "airport": "Ongava Airstrip",
    "latitude": -22.1833,
    "longitude": 18.5333
  },
  "FYWH": {
    "airport": "Hosea Kutako International Airport",
    "latitude": -22.4799,
    "longitude": 17.4709
  },
  "FYOP": {
    "airport": "Opuwa Airport",
    "latitude": -18.0614,
    "longitude": 13.8505
  },
  "FYTE": {
    "airport": "Terrace Bay Airport",
    "latitude": -19.9713,
    "longitude": 13.0249
  },
  "FYGB": {
    "airport": "Gobabis Airport",
    "latitude": -22.5044,
    "longitude": 18.9731
  },
  "FYOS": {
    "airport": "Oshakati Airport",
    "latitude": -17.797,
    "longitude": 15.6993
  },
  "FYOA": {
    "airport": "Ondangwa Airport",
    "latitude": -17.8782,
    "longitude": 15.9526
  },
  "FYHI": {
    "airport": "Halali Airport",
    "latitude": -19.0285,
    "longitude": 16.4585
  },
  "FYNA": {
    "airport": "Namutoni Airport",
    "latitude": -18.8064,
    "longitude": 16.9272
  },
  "FYOO": {
    "airport": "Okaukuejo Airport",
    "latitude": -19.1492,
    "longitude": 15.9119
  },
  "FYMO": {
    "airport": "Mokuti Lodge Airport",
    "latitude": -18.8128,
    "longitude": 17.0594
  },
  "FYTM": {
    "airport": "Tsumeb Airport",
    "latitude": -19.2619,
    "longitude": 17.7325
  },
  "FYGF": {
    "airport": "Grootfontein Air Base",
    "latitude": -19.6022,
    "longitude": 18.1227
  },
  "FYOW": {
    "airport": "Otjiwarongo Airport",
    "latitude": -20.4347,
    "longitude": 16.6608
  },
  "FYLS": {
    "airport": "Lianshulu Airport",
    "latitude": -18.1167,
    "longitude": 23.3933
  },
  "FYKM": {
    "airport": "Katima Mulilo Airport (Mpacha Airport)",
    "latitude": -17.6344,
    "longitude": 24.1767
  },
  "FYOE": {
    "airport": "Omega Airport",
    "latitude": -18.0303,
    "longitude": 22.1897
  },
  "NWWC": {
    "airport": "Ile Art - Waala Airport",
    "latitude": -19.7206,
    "longitude": 163.661
  },
  "NWWD": {
    "airport": "Kone Airport",
    "latitude": -21.0543,
    "longitude": 164.837
  },
  "NWWK": {
    "airport": "Koumac Airport",
    "latitude": -20.5463,
    "longitude": 164.256
  },
  "NWWQ": {
    "airport": "Mueo/Nickel Airport",
    "latitude": -21.3164,
    "longitude": 164.999
  },
  "NWWP": {
    "airport": "Malabou Airport",
    "latitude": -20.2892,
    "longitude": 164.099
  },
  "NWWU": {
    "airport": "Touho Airport",
    "latitude": -20.79,
    "longitude": 165.259
  },
  "NWWM": {
    "airport": "Noumea Magenta Airport",
    "latitude": -22.2583,
    "longitude": 166.473
  },
  "NWWE": {
    "airport": "Ile des Pins Airport",
    "latitude": -22.5889,
    "longitude": 167.456
  },
  "NWWW": {
    "airport": "La Tontouta International Airport",
    "latitude": -22.0146,
    "longitude": 166.213
  },
  "NWWA": {
    "airport": "Tiga Airport",
    "latitude": -21.0961,
    "longitude": 167.804
  },
  "NWWL": {
    "airport": "Ouanaham Airport",
    "latitude": -20.7748,
    "longitude": 167.24
  },
  "NWWR": {
    "airport": "Mare Airport",
    "latitude": -21.4817,
    "longitude": 168.038
  },
  "NWWV": {
    "airport": "Ouvea Airport (Ouloup Airp",
    "latitude": -20.6406,
    "longitude": 166.573
  },
  "DRZA": {
    "airport": "Mano Dayak International Airport",
    "latitude": 16.966,
    "longitude": 8.00011
  },
  "DRZL": {
    "airport": "Arlit Airport",
    "latitude": 18.7904,
    "longitude": 7.36595
  },
  "DRRM": {
    "airport": "Maradi Airport",
    "latitude": 13.5025,
    "longitude": 7.12675
  },
  "DRRN": {
    "airport": "Diori Hamani International Airport",
    "latitude": 13.4815,
    "longitude": 2.18361
  },
  "DRRT": {
    "airport": "Tahoua Airport",
    "latitude": 14.8757,
    "longitude": 5.26536
  },
  "DRZR": {
    "airport": "Zinder Airport",
    "latitude": 13.779,
    "longitude": 8.98376
  },
  "YSNF": {
    "airport": "Norfolk Island Airport",
    "latitude": -29.0416,
    "longitude": 167.939
  },
  "DNAA": {
    "airport": "Nnamdi Azikiwe International Airport",
    "latitude": 9.00679,
    "longitude": 7.26317
  },
  "DNJO": {
    "airport": "Yakubu Gowon Airport",
    "latitude": 9.63983,
    "longitude": 8.86905
  },
  "DNYO": {
    "airport": "Yola Airport",
    "latitude": 9.25755,
    "longitude": 12.4304
  },
  "DNAI": {
    "airport": "Akwa Ibom International Airport",
    "latitude": 4.8725,
    "longitude": 8.093
  },
  "DNMK": {
    "airport": "Makurdi Airport",
    "latitude": 7.70388,
    "longitude": 8.61394
  },
  "DNMA": {
    "airport": "Maiduguri International Airport",
    "latitude": 11.8553,
    "longitude": 13.0809
  },
  "DNCA": {
    "airport": "Margaret Ekpo International Airport",
    "latitude": 4.97602,
    "longitude": 8.3472
  },
  "DNAS": {
    "airport": "Asaba International Airport",
    "latitude": 6.20417,
    "longitude": 6.66528
  },
  "DNSU": {
    "airport": "Warri Airport (Osubi Airport)",
    "latitude": 5.59611,
    "longitude": 5.81778
  },
  "DNBE": {
    "airport": "Benin Airport",
    "latitude": 6.31698,
    "longitude": 5.5995
  },
  "DNEN": {
    "airport": "Akanu Ibiam International Airport",
    "latitude": 6.47427,
    "longitude": 7.56196
  },
  "DNGO": {
    "airport": "Gombe Lawanti International Airport",
    "latitude": 10.2983,
    "longitude": 10.8964
  },
  "DNIM": {
    "airport": "Sam Mbakwe Airport",
    "latitude": 5.42706,
    "longitude": 7.20603
  },
  "DNKA": {
    "airport": "Kaduna Airport",
    "latitude": 10.696,
    "longitude": 7.32011
  },
  "DNZA": {
    "airport": "Zaria Airport",
    "latitude": 11.1302,
    "longitude": 7.68581
  },
  "DNKN": {
    "airport": "Mallam Aminu Kano International Airport",
    "latitude": 12.0476,
    "longitude": 8.52462
  },
  "DNIL": {
    "airport": "Ilorin International Airport",
    "latitude": 8.44021,
    "longitude": 4.49392
  },
  "DNMM": {
    "airport": "Murtala Muhammed International Airport",
    "latitude": 6.57737,
    "longitude": 3.32116
  },
  "DNMN": {
    "airport": "Minna Airport",
    "latitude": 9.65217,
    "longitude": 6.46226
  },
  "DNAK": {
    "airport": "Akure Airport",
    "latitude": 7.24674,
    "longitude": 5.30101
  },
  "DNIB": {
    "airport": "Ibadan Airport",
    "latitude": 7.36246,
    "longitude": 3.97833
  },
  "DNPO": {
    "airport": "Port Harcourt International Airport",
    "latitude": 5.01549,
    "longitude": 6.94959
  },
  "DNSO": {
    "airport": "Sadiq Abubakar III International Airport",
    "latitude": 12.9163,
    "longitude": 5.20719
  },
  "MNBZ": {
    "airport": "San Pedro Airport",
    "latitude": 14.0315,
    "longitude": -84.6243
  },
  "MNPC": {
    "airport": "Puerto Cabezas Airport",
    "latitude": 14.0472,
    "longitude": -83.3867
  },
  "MNRT": {
    "airport": "Rosita Airport",
    "latitude": 13.8897,
    "longitude": -84.4089
  },
  "MNSI": {
    "airport": "Siuna Airport",
    "latitude": 13.7272,
    "longitude": -84.7778
  },
  "MNWP": {
    "airport": "Waspam Airport",
    "latitude": 14.7392,
    "longitude": -83.9694
  },
  "MNBL": {
    "airport": "Bluefields Airport",
    "latitude": 11.991,
    "longitude": -83.7741
  },
  "MNNG": {
    "airport": "Nueva Guinea Airport",
    "latitude": 11.6667,
    "longitude": -84.45
  },
  "MNCI": {
    "airport": "Corn Island Airport",
    "latitude": 12.1629,
    "longitude": -83.0638
  },
  "MNMG": {
    "airport": "Augusto C. Sandino International Airport",
    "latitude": 12.1415,
    "longitude": -86.1682
  },
  "MNSC": {
    "airport": "San Carlos Airport",
    "latitude": 11.1334,
    "longitude": -84.77
  },
  "MNCE": {
    "airport": "Costa Esmeralda Airport",
    "latitude": 11.4275,
    "longitude": -86.0334
  },
  "EHGG": {
    "airport": "Groningen Airport Eelde",
    "latitude": 53.1197,
    "longitude": 6.57944
  },
  "EHLE": {
    "airport": "Lelystad Airport",
    "latitude": 52.4603,
    "longitude": 5.52722
  },
  "EHLW": {
    "airport": "Leeuwarden Air Base",
    "latitude": 53.2286,
    "longitude": 5.76056
  },
  "EHBK": {
    "airport": "Maastricht Aachen Airport",
    "latitude": 50.9117,
    "longitude": 5.77014
  },
  "EHEH": {
    "airport": "Eindhoven Airport",
    "latitude": 51.4501,
    "longitude": 5.37453
  },
  "EHGR": {
    "airport": "Gilze-Rijen Air Base",
    "latitude": 51.5674,
    "longitude": 4.93183
  },
  "EHVK": {
    "airport": "Volkel Air Base",
    "latitude": 51.6564,
    "longitude": 5.70861
  },
  "EHWO": {
    "airport": "Woensdrecht Air Base",
    "latitude": 51.4491,
    "longitude": 4.34203
  },
  "EHAM": {
    "airport": "Amsterdam Airport Schiphol",
    "latitude": 52.3086,
    "longitude": 4.76389
  },
  "EHKD": {
    "airport": "De Kooy Airfield",
    "latitude": 52.9234,
    "longitude": 4.78062
  },
  "EHSE": {
    "airport": "Breda International Airport",
    "latitude": 51.5549,
    "longitude": 4.5526
  },
  "EHTE": {
    "airport": "Teuge International Airport",
    "latitude": 52.242,
    "longitude": 6.0518
  },
  "EHTW": {
    "airport": "Enschede Airport Twente",
    "latitude": 52.2758,
    "longitude": 6.88917
  },
  "EHSB": {
    "airport": "Soesterberg Air Base",
    "latitude": 52.1273,
    "longitude": 5.27619
  },
  "EHRD": {
    "airport": "Rotterdam The Hague Airport",
    "latitude": 51.9569,
    "longitude": 4.43722
  },
  "ENGM": {
    "airport": "Oslo Airport",
    "latitude": 60.1939,
    "longitude": 11.1004
  },
  "ENKL": {
    "airport": "Gol Airport",
    "latitude": 60.7911,
    "longitude": 9.04867
  },
  "ENAT": {
    "airport": "Alta Airport",
    "latitude": 69.9761,
    "longitude": 23.3717
  },
  "ENBS": {
    "airport": "Batsfjord Airport",
    "latitude": 70.6005,
    "longitude": 29.6914
  },
  "ENBV": {
    "airport": "Berlevag Airport",
    "latitude": 70.8714,
    "longitude": 29.0342
  },
  "ENHK": {
    "airport": "Hasvik Airport",
    "latitude": 70.4867,
    "longitude": 22.1397
  },
  "ENHF": {
    "airport": "Hammerfest Airport",
    "latitude": 70.6797,
    "longitude": 23.6686
  },
  "ENHV": {
    "airport": "Honningsvag Airport",
    "latitude": 71.0097,
    "longitude": 25.9836
  },
  "ENKR": {
    "airport": "Kirkenes Airport",
    "latitude": 69.7258,
    "longitude": 29.8913
  },
  "ENNA": {
    "airport": "Lakselv Airport",
    "latitude": 70.0688,
    "longitude": 24.9735
  },
  "ENMH": {
    "airport": "Mehamn Airport",
    "latitude": 71.0297,
    "longitude": 27.8267
  },
  "ENSS": {
    "airport": "Varddo Air",
    "latitude": 70.3554,
    "longitude": 31.0449
  },
  "ENVD": {
    "airport": "Vadso Airport",
    "latitude": 70.0653,
    "longitude": 29.8447
  },
  "ENHA": {
    "airport": "Hamar Airport",
    "latitude": 60.8181,
    "longitude": 11.068
  },
  "ENBR": {
    "airport": "Bergen Airport",
    "latitude": 60.2934,
    "longitude": 5.21814
  },
  "ENSO": {
    "airport": "Stord Airport",
    "latitude": 59.7919,
    "longitude": 5.34085
  },
  "ENAL": {
    "airport": "Alesund Airport",
    "latitude": 62.5625,
    "longitude": 6.1197
  },
  "ENOV": {
    "airport": "Orsta-Volda Airport",
    "latitude": 62.18,
    "longitude": 6.0741
  },
  "ENKB": {
    "airport": "Kristiansund Airport",
    "latitude": 63.1118,
    "longitude": 7.82452
  },
  "ENML": {
    "airport": "Molde Airport",
    "latitude": 62.7447,
    "longitude": 7.2625
  },
  "ENVA": {
    "airport": "Trondheim Airport",
    "latitude": 63.4578,
    "longitude": 10.924
  },
  "ENAN": {
    "airport": "Andoya Airport",
    "latitude": 69.2925,
    "longitude": 16.1442
  },
  "ENBN": {
    "airport": "Bronnoysund Airport",
    "latitude": 65.4611,
    "longitude": 12.2175
  },
  "ENBO": {
    "airport": "Bodo Airport",
    "latitude": 67.2692,
    "longitude": 14.3653
  },
  "ENEV": {
    "airport": "Harstad/Narvik Airport",
    "latitude": 68.4913,
    "longitude": 16.6781
  },
  "ENLK": {
    "airport": "Leknes Airport",
    "latitude": 68.1525,
    "longitude": 13.6094
  },
  "ENMS": {
    "airport": "Mosjoen Airport",
    "latitude": 65.784,
    "longitude": 13.2149
  },
  "ENRA": {
    "airport": "Mo i Rana Airport",
    "latitude": 66.3639,
    "longitude": 14.3014
  },
  "ENNK": {
    "airport": "Narvik Airport",
    "latitude": 68.4369,
    "longitude": 17.3867
  },
  "ENRS": {
    "airport": "Rost Airport",
    "latitude": 67.5278,
    "longitude": 12.1033
  },
  "ENSK": {
    "airport": "Stokmarknes Airport",
    "latitude": 68.5788,
    "longitude": 15.0334
  },
  "ENST": {
    "airport": "Sandnessjoen Airport",
    "latitude": 65.9568,
    "longitude": 12.4689
  },
  "ENSH": {
    "airport": "Svolvaer Airport",
    "latitude": 68.2433,
    "longitude": 14.6692
  },
  "ENFG": {
    "airport": "Fagernes Airport",
    "latitude": 61.0156,
    "longitude": 9.28806
  },
  "ENRY": {
    "airport": "Moss Airport",
    "latitude": 59.3788,
    "longitude": 10.7854
  },
  "ENHD": {
    "airport": "Haugesund Airport",
    "latitude": 59.3453,
    "longitude": 5.20836
  },
  "ENZV": {
    "airport": "Stavanger Airport",
    "latitude": 58.8767,
    "longitude": 5.63778
  },
  "ENBL": {
    "airport": "Forde Airport",
    "latitude": 61.3911,
    "longitude": 5.75694
  },
  "ENFL": {
    "airport": "Floro Airport",
    "latitude": 61.5836,
    "longitude": 5.02472
  },
  "ENSD": {
    "airport": "Sandane Airport",
    "latitude": 61.83,
    "longitude": 6.10583
  },
  "ENSG": {
    "airport": "Sogndal Airport",
    "latitude": 61.1561,
    "longitude": 7.13778
  },
  "ENOL": {
    "airport": "Orland Airport",
    "latitude": 63.6989,
    "longitude": 9.604
  },
  "ENNM": {
    "airport": "Namsos Airport",
    "latitude": 64.4722,
    "longitude": 11.5786
  },
  "ENRO": {
    "airport": "Roros Airport",
    "latitude": 62.5784,
    "longitude": 11.3423
  },
  "ENRM": {
    "airport": "Rorvik Airport",
    "latitude": 64.8383,
    "longitude": 11.1461
  },
  "ENNO": {
    "airport": "Notodden Airport",
    "latitude": 59.5657,
    "longitude": 9.21222
  },
  "ENSN": {
    "airport": "Skien Airport",
    "latitude": 59.185,
    "longitude": 9.56694
  },
  "ENDU": {
    "airport": "Bardufoss Airport",
    "latitude": 69.0558,
    "longitude": 18.5404
  },
  "ENSR": {
    "airport": "Sorkjosen Airport",
    "latitude": 69.7868,
    "longitude": 20.9594
  },
  "ENTC": {
    "airport": "Tromse Airport",
    "latitude": 69.6833,
    "longitude": 18.9189
  },
  "ENCN": {
    "airport": "Kristiansand Airport",
    "latitude": 58.2042,
    "longitude": 8.08537
  },
  "ENTO": {
    "airport": "Sandefjord Airport",
    "latitude": 59.1867,
    "longitude": 10.2586
  },
  "VNKT": {
    "airport": "Tribhuvan International Airport",
    "latitude": 27.6966,
    "longitude": 85.3591
  },
  "VNLT": {
    "airport": "Langtang Airport",
    "latitude": 28.2,
    "longitude": 85.583
  },
  "VNBR": {
    "airport": "Bajura Airport",
    "latitude": 29.502,
    "longitude": 81.669
  },
  "VNNG": {
    "airport": "Nepalgunj Airport",
    "latitude": 28.1036,
    "longitude": 81.667
  },
  "VNSK": {
    "airport": "Surkhet Airport",
    "latitude": 28.586,
    "longitude": 81.636
  },
  "VNBL": {
    "airport": "Balewa Airport",
    "latitude": 28.2128,
    "longitude": 83.6663
  },
  "VNJS": {
    "airport": "Jomsom Airport",
    "latitude": 28.7804,
    "longitude": 83.723
  },
  "VNMA": {
    "airport": "Manang Airport",
    "latitude": 28.6414,
    "longitude": 84.0892
  },
  "VNPK": {
    "airport": "Pokhara Airport",
    "latitude": 28.2009,
    "longitude": 83.9821
  },
  "VNJP": {
    "airport": "Janakpur Airport",
    "latitude": 26.7088,
    "longitude": 85.9224
  },
  "VNRC": {
    "airport": "Ramechhap Airport",
    "latitude": 27.394,
    "longitude": 86.0614
  },
  "VNDP": {
    "airport": "Dolpa Airport",
    "latitude": 28.9857,
    "longitude": 82.8191
  },
  "VNST": {
    "airport": "Simikot Airport",
    "latitude": 29.9711,
    "longitude": 81.8189
  },
  "VNJL": {
    "airport": "Jumla Airport",
    "latitude": 29.2742,
    "longitude": 82.1933
  },
  "VNBJ": {
    "airport": "Bhojpur Airport",
    "latitude": 27.1474,
    "longitude": 87.0508
  },
  "VNVT": {
    "airport": "Biratnagar Airport",
    "latitude": 26.4815,
    "longitude": 87.264
  },
  "VNRB": {
    "airport": "Rajbiraj Airport",
    "latitude": 26.5101,
    "longitude": 86.7339
  },
  "VNTR": {
    "airport": "Tumlingtar Airport",
    "latitude": 27.315,
    "longitude": 87.1933
  },
  "VNBW": {
    "airport": "Gautam Buddha Airport",
    "latitude": 27.5057,
    "longitude": 83.4163
  },
  "VNDT": {
    "airport": "Silgadhi Airport",
    "latitude": 29.2631,
    "longitude": 80.936
  },
  "VNMN": {
    "airport": "Mahendranagar Airport",
    "latitude": 28.9632,
    "longitude": 80.1479
  },
  "VNCG": {
    "airport": "Bhadrapur Airport (Chandragadhi Airport)",
    "latitude": 26.5708,
    "longitude": 88.0796
  },
  "VNTJ": {
    "airport": "Taplejung Airport",
    "latitude": 27.3509,
    "longitude": 87.6953
  },
  "VNBP": {
    "airport": "Bharatpur Airport",
    "latitude": 27.6781,
    "longitude": 84.4294
  },
  "VNGK": {
    "airport": "Palungtar Airport",
    "latitude": 28.0385,
    "longitude": 84.4664
  },
  "VNMG": {
    "airport": "Meghauli Airport",
    "latitude": 27.5774,
    "longitude": 84.2288
  },
  "VNSI": {
    "airport": "Simara Airport",
    "latitude": 27.1595,
    "longitude": 84.9801
  },
  "VNDG": {
    "airport": "Tribhuvannagar Airport (Dang Airport)",
    "latitude": 28.1111,
    "longitude": 82.2942
  },
  "VNRP": {
    "airport": "Rolpa Airport",
    "latitude": 28.2673,
    "longitude": 82.7565
  },
  "VNRK": {
    "airport": "Chaurjahari Airport",
    "latitude": 28.627,
    "longitude": 82.195
  },
  "VNJI": {
    "airport": "Jiri Airport",
    "latitude": 27.6263,
    "longitude": 86.2306
  },
  "VNLD": {
    "airport": "Lamidanda Airport",
    "latitude": 27.2531,
    "longitude": 86.67
  },
  "VNLK": {
    "airport": "Tenzing-Hillary Airport",
    "latitude": 27.6869,
    "longitude": 86.7297
  },
  "VNPL": {
    "airport": "Phaplu Airport",
    "latitude": 27.5178,
    "longitude": 86.5845
  },
  "VNRT": {
    "airport": "Rumjatar Airport",
    "latitude": 27.3035,
    "longitude": 86.5504
  },
  "VNSB": {
    "airport": "Syangboche Airport",
    "latitude": 27.8112,
    "longitude": 86.7123
  },
  "VNBT": {
    "airport": "Baitadi Airport",
    "latitude": 29.4653,
    "longitude": 80.5492
  },
  "VNBG": {
    "airport": "Bajhang Airport",
    "latitude": 29.539,
    "longitude": 81.1854
  },
  "VNDL": {
    "airport": "Darchula Airport",
    "latitude": 29.6692,
    "longitude": 80.5484
  },
  "VNDH": {
    "airport": "Dhangadhi Airport",
    "latitude": 28.7533,
    "longitude": 80.5819
  },
  "VNSR": {
    "airport": "Sanfebagar Airport",
    "latitude": 29.2366,
    "longitude": 81.2153
  },
  "VNTP": {
    "airport": "Tikapur Airport",
    "latitude": 28.5219,
    "longitude": 81.123
  },
  "ANYN": {
    "airport": "Nauru International Airport",
    "latitude": -0.547458,
    "longitude": 166.919
  },
  "NIUE": {
    "airport": "Niue International Airport (Hanan Int'l)",
    "latitude": -19.079,
    "longitude": -169.926
  },
  "NZAA": {
    "airport": "Auckland Airport",
    "latitude": -37.0081,
    "longitude": 174.792
  },
  "NZAR": {
    "airport": "Ardmore Airport",
    "latitude": -37.0297,
    "longitude": 174.973
  },
  "NZCX": {
    "airport": "Coromandel Aerodrome",
    "latitude": -36.7917,
    "longitude": 175.509
  },
  "NZGB": {
    "airport": "Great Barrier Aerodrome",
    "latitude": -36.2414,
    "longitude": 175.472
  },
  "NZKE": {
    "airport": "Waiheke Island Aerodrome",
    "latitude": -36.8089,
    "longitude": 175.086
  },
  "NZRO": {
    "airport": "Rotorua Regional Airport",
    "latitude": -38.1092,
    "longitude": 176.317
  },
  "NZTG": {
    "airport": "Tauranga Airport",
    "latitude": -37.6719,
    "longitude": 176.196
  },
  "NZWK": {
    "airport": "Whakatane Airport",
    "latitude": -37.9206,
    "longitude": 176.914
  },
  "NZAS": {
    "airport": "Ashburton Aerodrome",
    "latitude": -43.9033,
    "longitude": 171.797
  },
  "NZCH": {
    "airport": "Christchurch International Airport",
    "latitude": -43.4894,
    "longitude": 172.532
  },
  "NZFF": {
    "airport": "Forest Field Aerodrome",
    "latitude": -43.3858,
    "longitude": 172.3605
  },
  "NZGT": {
    "airport": "Glentanner Aerodrome",
    "latitude": -43.9067,
    "longitude": 170.128
  },
  "NZKI": {
    "airport": "Kaikoura Aerodrome",
    "latitude": -42.425,
    "longitude": 173.605
  },
  "NZTU": {
    "airport": "Richard Pearse Airport",
    "latitude": -44.3028,
    "longitude": 171.225
  },
  "NZUK": {
    "airport": "Pukaki Airport",
    "latitude": -44.235,
    "longitude": 170.118
  },
  "NZCI": {
    "airport": "Chatham Islands / Tuuta Airport",
    "latitude": -43.81,
    "longitude": -176.457
  },
  "NZRT": {
    "airport": "Rangiora Airfield WMS",
    "latitude": -43.2892,
    "longitude": 172.5413
  },
  "NZGS": {
    "airport": "Gisborne Airport",
    "latitude": -38.6633,
    "longitude": 177.978
  },
  "NZNR": {
    "airport": "Hawke's Bay Airport",
    "latitude": -39.4658,
    "longitude": 176.87
  },
  "NZWO": {
    "airport": "Wairoa Aerodrome",
    "latitude": -39.0069,
    "longitude": 177.407
  },
  "NZOH": {
    "airport": "RNZAF Base Ohakea",
    "latitude": -40.206,
    "longitude": 175.388
  },
  "NZPM": {
    "airport": "Palmerston North Airport",
    "latitude": -40.3206,
    "longitude": 175.617
  },
  "NZWU": {
    "airport": "Whanganui Airport",
    "latitude": -39.9622,
    "longitude": 175.025
  },
  "NZWB": {
    "airport": "Woodbourne Airport",
    "latitude": -41.5183,
    "longitude": 173.87
  },
  "NZPN": {
    "airport": "Picton Aerodrome",
    "latitude": -41.3461,
    "longitude": 173.956
  },
  "NZNS": {
    "airport": "Nelson Airport",
    "latitude": -41.2983,
    "longitude": 173.221
  },
  "NZDA": {
    "airport": "Dargaville Aerodrome",
    "latitude": -35.9397,
    "longitude": 173.894
  },
  "NZKT": {
    "airport": "Kaitaia Airport",
    "latitude": -35.07,
    "longitude": 173.285
  },
  "NZKK": {
    "airport": "Kerikeri Airport (Bay of Islands Airport)",
    "latitude": -35.2628,
    "longitude": 173.912
  },
  "NZKO": {
    "airport": "Kaikohe Aerodrome",
    "latitude": -35.4511,
    "longitude": 173.817
  },
  "NZWR": {
    "airport": "Whangarei Airport",
    "latitude": -35.7683,
    "longitude": 174.365
  },
  "NZLX": {
    "airport": "Alexandra Aerodrome",
    "latitude": -45.2117,
    "longitude": 169.373
  },
  "NZDN": {
    "airport": "Dunedin International Airport",
    "latitude": -45.9281,
    "longitude": 170.198
  },
  "NZOU": {
    "airport": "Oamaru Airport",
    "latitude": -44.97,
    "longitude": 171.082
  },
  "NZWF": {
    "airport": "Wanaka Airport",
    "latitude": -44.7222,
    "longitude": 169.246
  },
  "NZQN": {
    "airport": "Queenstown Airport",
    "latitude": -45.0211,
    "longitude": 168.739
  },
  "NZNV": {
    "airport": "Invercargill Airport",
    "latitude": -46.4124,
    "longitude": 168.313
  },
  "NZMF": {
    "airport": "Milford Sound Airport",
    "latitude": -44.6733,
    "longitude": 167.923
  },
  "NZMC": {
    "airport": "Mount Cook Aerodrome",
    "latitude": -43.765,
    "longitude": 170.133
  },
  "NZRC": {
    "airport": "Ryan's Creek Aerodrome",
    "latitude": -46.8997,
    "longitude": 168.101
  },
  "NZMO": {
    "airport": "Te Anau Airport (Manapouri Airport)",
    "latitude": -45.5331,
    "longitude": 167.65
  },
  "NZNP": {
    "airport": "New Plymouth Airport",
    "latitude": -39.0086,
    "longitude": 174.179
  },
  "NZTK": {
    "airport": "Takaka Aerodrome",
    "latitude": -40.8133,
    "longitude": 172.775
  },
  "NZMK": {
    "airport": "Motueka Aerodrome",
    "latitude": -41.1233,
    "longitude": 172.989
  },
  "NZHN": {
    "airport": "Hamilton Airport",
    "latitude": -37.8667,
    "longitude": 175.332
  },
  "NZMA": {
    "airport": "Matamata Airport",
    "latitude": -37.7344,
    "longitude": 175.742
  },
  "NZRA": {
    "airport": "Raglan Aerodrome",
    "latitude": -37.8047,
    "longitude": 174.86
  },
  "NZTO": {
    "airport": "Tokoroa Aerodrome",
    "latitude": -38.2367,
    "longitude": 175.892
  },
  "NZTH": {
    "airport": "Thames Aerodrome",
    "latitude": -37.1567,
    "longitude": 175.55
  },
  "NZAP": {
    "airport": "Taupo Airport",
    "latitude": -38.7397,
    "longitude": 176.084
  },
  "NZWT": {
    "airport": "Whitianga Aerodrome",
    "latitude": -36.8317,
    "longitude": 175.679
  },
  "NZMS": {
    "airport": "Hood Aerodrome",
    "latitude": -40.9733,
    "longitude": 175.634
  },
  "NZPP": {
    "airport": "Kapiti Coast Airport",
    "latitude": -40.9047,
    "longitude": 174.989
  },
  "NZWN": {
    "airport": "Wellington International Airport",
    "latitude": -41.3272,
    "longitude": 174.805
  },
  "NZGM": {
    "airport": "Greymouth Airport",
    "latitude": -42.4617,
    "longitude": 171.19
  },
  "NZHK": {
    "airport": "Hokitika Airport",
    "latitude": -42.7136,
    "longitude": 170.985
  },
  "NZWS": {
    "airport": "Westport Airport",
    "latitude": -41.7381,
    "longitude": 171.581
  },
  "OOMS": {
    "airport": "Muscat International Airport",
    "latitude": 23.5933,
    "longitude": 58.2844
  },
  "OOGB": {
    "airport": "Qarn Alam Airport",
    "latitude": 21.383,
    "longitude": 57.05
  },
  "OOBR": {
    "airport": "Buraimi Airport",
    "latitude": 24.2411,
    "longitude": 55.7847
  },
  "OOFD": {
    "airport": "Fahud Airport",
    "latitude": 22.3548,
    "longitude": 56.4841
  },
  "OOLK": {
    "airport": "Lekhwair Airport",
    "latitude": 22.805,
    "longitude": 55.3734
  },
  "OOSH": {
    "airport": "Sohar Airport",
    "latitude": 24.386,
    "longitude": 56.6254
  },
  "AYNO": {
    "airport": "Nomane Airport",
    "latitude": -6.32183,
    "longitude": 145.071
  },
  "OOKB": {
    "airport": "Khasab Airport",
    "latitude": 26.171,
    "longitude": 56.2406
  },
  "OORQ": {
    "airport": "Al-Musannah Airport",
    "latitude": 23.6406,
    "longitude": 57.4875
  },
  "OOMA": {
    "airport": "Masirah Air Base",
    "latitude": 20.6754,
    "longitude": 58.8905
  },
  "OOSR": {
    "airport": "Sur Airport",
    "latitude": 22.533,
    "longitude": 59.483
  },
  "FZSB": {
    "airport": "Kamina Airport (Kamina Ville Airport)",
    "latitude": -8.64202,
    "longitude": 25.2529
  },
  "MDLR": {
    "airport": "La Romana International Airport (Casa de Campo International Airport)",
    "latitude": 18.4507,
    "longitude": -68.9118
  },
  "OOMX": {
    "airport": "Marmul Airport",
    "latitude": 18.136,
    "longitude": 55.1821
  },
  "OOSA": {
    "airport": "Salalah International Airport",
    "latitude": 17.0387,
    "longitude": 54.0913
  },
  "OOTH": {
    "airport": "RAFO Thumrait",
    "latitude": 17.666,
    "longitude": 54.0246
  },
  "MPBO": {
    "airport": "Bocas del Toro Isla Colon International Airport",
    "latitude": 9.34085,
    "longitude": -82.2508
  },
  "MPCH": {
    "airport": "Changuinola Capitan Manuel Nino International Airport",
    "latitude": 9.45896,
    "longitude": -82.5151
  },
  "MPDA": {
    "airport": "Enrique Malek International Airport",
    "latitude": 8.391,
    "longitude": -82.435
  },
  "MPSM": {
    "airport": "Scarlett Martinez International Airport",
    "latitude": 8.37588,
    "longitude": -80.1279
  },
  "MPEJ": {
    "airport": "Enrique Adolfo Jimenez Airport",
    "latitude": 9.35664,
    "longitude": -79.8674
  },
  "MPJE": {
    "airport": "Jaque Airport",
    "latitude": 7.51778,
    "longitude": -78.1572
  },
  "MPLP": {
    "airport": "Captain Ramon Xatruch Airport",
    "latitude": 8.40667,
    "longitude": -78.1417
  },
  "MPOA": {
    "airport": "Puerto Obaldia Airport",
    "latitude": 8.667,
    "longitude": -77.418
  },
  "MPCE": {
    "airport": "Chitre Alonso Valderrama Airport",
    "latitude": 7.98784,
    "longitude": -80.4097
  },
  "MPHO": {
    "airport": "Panama Pacifico International Airport",
    "latitude": 8.91479,
    "longitude": -79.5996
  },
  "MPWN": {
    "airport": "Wannukandi Airport",
    "latitude": 9.4496,
    "longitude": -78.9795
  },
  "MPMG": {
    "airport": "Albrook Marcos A. Gelabert International Airport",
    "latitude": 8.97334,
    "longitude": -79.5556
  },
  "MPTO": {
    "airport": "Tocumen International Airport",
    "latitude": 9.07136,
    "longitude": -79.3835
  },
  "MPVR": {
    "airport": "El Porvenir Airport",
    "latitude": 9.558,
    "longitude": -78.947
  },
  "MPSA": {
    "airport": "Ruben Cantu Airport",
    "latitude": 8.0856,
    "longitude": -80.9453
  },
  "SPPY": {
    "airport": "Chachapoyas Airport",
    "latitude": -6.20181,
    "longitude": -77.8561
  },
  "SPLN": {
    "airport": "San Nicolas Airport",
    "latitude": -6.39231,
    "longitude": -77.5012
  },
  "SPHZ": {
    "airport": "Comandante FAP German Arias Graziani Airport",
    "latitude": -9.34744,
    "longitude": -77.5984
  },
  "SPEO": {
    "airport": "Tnte. FAP Jaime Montreuil Morales Airport",
    "latitude": -9.14961,
    "longitude": -78.5238
  },
  "SPHY": {
    "airport": "Andahuaylas Airport",
    "latitude": -13.7064,
    "longitude": -73.3504
  },
  "SPQU": {
    "airport": "Rodriguez Ballon International Airport",
    "latitude": -16.3411,
    "longitude": -71.5831
  },
  "SPHO": {
    "airport": "Coronel FAP Alfredo Mendivil Duarte Airport",
    "latitude": -13.1548,
    "longitude": -74.2044
  },
  "SPAY": {
    "airport": "Tnte. Gral. Gerardo Perez Pinedo Airport",
    "latitude": -10.7292,
    "longitude": -73.7667
  },
  "SPJR": {
    "airport": "Mayor General FAP Armando Revoredo Iglesias Airport",
    "latitude": -7.13918,
    "longitude": -78.4894
  },
  "SPJE": {
    "airport": "Jaen Airport",
    "latitude": -5.59248,
    "longitude": -78.774
  },
  "SPNC": {
    "airport": "Alferez FAP David Figueroa Fernandini Airport",
    "latitude": -9.87881,
    "longitude": -76.2048
  },
  "SPIL": {
    "airport": "Quince Mil Airport",
    "latitude": -13.2333,
    "longitude": -70.7533
  },
  "SPIM": {
    "airport": "Jorge Chavez International Airport",
    "latitude": -12.0219,
    "longitude": -77.1143
  },
  "SPGM": {
    "airport": "Tingo Maria Airport",
    "latitude": -9.133,
    "longitude": -75.95
  },
  "SPZA": {
    "airport": "Maria Reiche Neuman Airport",
    "latitude": -14.854,
    "longitude": -74.9615
  },
  "SPSO": {
    "airport": "Capitan FAP Renan Elias Olivera Airport",
    "latitude": -13.7449,
    "longitude": -76.2203
  },
  "SPJN": {
    "airport": "San Juan de Marcona Airport",
    "latitude": -15.3525,
    "longitude": -75.1372
  },
  "SPJJ": {
    "airport": "Francisco Carle Airport",
    "latitude": -11.7831,
    "longitude": -75.4734
  },
  "SPMF": {
    "airport": "Manuel Prado Ugarteche Airport",
    "latitude": -11.3254,
    "longitude": -74.5356
  },
  "SPRU": {
    "airport": "FAP Captain Carlos Martinez de Pinillos International Airport",
    "latitude": -8.08141,
    "longitude": -79.1088
  },
  "SPHI": {
    "airport": "FAP Captain Jose Abelardo Quinones Gonzales International Airport",
    "latitude": -6.78748,
    "longitude": -79.8281
  },
  "SPMR": {
    "airport": "Santa Maria Airport",
    "latitude": -11.9833,
    "longitude": -77
  },
  "SPZO": {
    "airport": "Alejandro Velasco Astete International Airport",
    "latitude": -13.5357,
    "longitude": -71.9388
  },
  "SPQT": {
    "airport": "Coronel FAP Francisco Secada Vignetta International Airport",
    "latitude": -3.78474,
    "longitude": -73.3088
  },
  "SPDR": {
    "airport": "Trompeteros Airport",
    "latitude": -3.80601,
    "longitude": -75.0393
  },
  "SPMS": {
    "airport": "Moises Benzaquen Rengifo Airport",
    "latitude": -5.89377,
    "longitude": -76.1182
  },
  "SPBR": {
    "airport": "Iberia Airport",
    "latitude": -11.4116,
    "longitude": -69.4887
  },
  "SPTU": {
    "airport": "Padre Aldamiz International Airport",
    "latitude": -12.6136,
    "longitude": -69.2286
  },
  "SPSY": {
    "airport": "Shiringayoc Airport",
    "latitude": -11.898,
    "longitude": -69.0625
  },
  "SPLO": {
    "airport": "Ilo Airport",
    "latitude": -17.695,
    "longitude": -71.344
  },
  "SPUR": {
    "airport": "FAP Captain Guillermo Concha Iberico International Airport",
    "latitude": -5.20575,
    "longitude": -80.6164
  },
  "SPYL": {
    "airport": "Capitan FAP VIctor Montes Arias International Airport",
    "latitude": -4.57664,
    "longitude": -81.2541
  },
  "SPJL": {
    "airport": "Inca Manco Capac International Airport",
    "latitude": -15.4671,
    "longitude": -70.1582
  },
  "SPBL": {
    "airport": "Huallaga Airport",
    "latitude": -7.06056,
    "longitude": -76.5822
  },
  "SPJI": {
    "airport": "Juanjui Airport",
    "latitude": -7.1691,
    "longitude": -76.7286
  },
  "SPBB": {
    "airport": "Moyobamba Airport",
    "latitude": -6.01889,
    "longitude": -76.9883
  },
  "SPJA": {
    "airport": "Juan Simons Vela Airport",
    "latitude": -6.06786,
    "longitude": -77.16
  },
  "SPOA": {
    "airport": "Saposoa Airport",
    "latitude": -6.96003,
    "longitude": -76.7684
  },
  "SPST": {
    "airport": "Cad. FAP Guillermo del Castillo Paredes Airport",
    "latitude": -6.50874,
    "longitude": -76.3732
  },
  "SPTN": {
    "airport": "Coronel FAP Carlos Ciriani Santa Rosa International Airport",
    "latitude": -18.0533,
    "longitude": -70.2758
  },
  "SPME": {
    "airport": "Cap. FAP Pedro Canga Rodriguez Airport",
    "latitude": -3.55253,
    "longitude": -80.3814
  },
  "SPAR": {
    "airport": "Alerta Airport",
    "latitude": -11.683,
    "longitude": -69.333
  },
  "SPCL": {
    "airport": "FAP Captain David Abensur Rengifo International Airport",
    "latitude": -8.37794,
    "longitude": -74.5743
  },
  "NTAM": {
    "airport": "Rimatara Airport",
    "latitude": -22.6373,
    "longitude": -152.806
  },
  "NTAR": {
    "airport": "Rurutu Airport",
    "latitude": -22.4341,
    "longitude": -151.361
  },
  "NTAV": {
    "airport": "Raivavae Airport",
    "latitude": -23.8852,
    "longitude": -147.662
  },
  "NTAT": {
    "airport": "Tubuai - Mataura Airport",
    "latitude": -23.3654,
    "longitude": -149.524
  },
  "NTMN": {
    "airport": "Atuona Airport",
    "latitude": -9.76879,
    "longitude": -139.011
  },
  "NTMD": {
    "airport": "Nuku Hiva Airport",
    "latitude": -8.7956,
    "longitude": -140.229
  },
  "NTMU": {
    "airport": "Ua Huka Airport",
    "latitude": -8.93611,
    "longitude": -139.552
  },
  "NTMP": {
    "airport": "Ua Pou Airport",
    "latitude": -9.35167,
    "longitude": -140.078
  },
  "NTTB": {
    "airport": "Bora Bora Airport (Motu Mute Airport)",
    "latitude": -16.4444,
    "longitude": -151.751
  },
  "NTTH": {
    "airport": "Huahine - Fare Airport",
    "latitude": -16.6872,
    "longitude": -151.022
  },
  "NTTP": {
    "airport": "Maupiti Airport",
    "latitude": -16.4265,
    "longitude": -152.244
  },
  "NTAA": {
    "airport": "Fa'a'a International Airport",
    "latitude": -17.5537,
    "longitude": -149.607
  },
  "NTTR": {
    "airport": "Raiatea Airport (Uturoa Airport)",
    "latitude": -16.7229,
    "longitude": -151.466
  },
  "NTTE": {
    "airport": "Tetiaroa Airport",
    "latitude": -17.0133,
    "longitude": -149.587
  },
  "NTGA": {
    "airport": "Anaa Airport",
    "latitude": -17.3526,
    "longitude": -145.51
  },
  "NTHE": {
    "airport": "Ahe Airport",
    "latitude": -14.4281,
    "longitude": -146.257
  },
  "NTGD": {
    "airport": "Apataki Airport",
    "latitude": -15.5736,
    "longitude": -146.415
  },
  "NTGU": {
    "airport": "Arutua Airport",
    "latitude": -15.2483,
    "longitude": -146.617
  },
  "NTKF": {
    "airport": "Faaite Airport",
    "latitude": -16.6867,
    "longitude": -145.329
  },
  "NTGF": {
    "airport": "Fakarava Airport",
    "latitude": -16.0541,
    "longitude": -145.657
  },
  "NTGB": {
    "airport": "Fangatau Airport",
    "latitude": -15.8199,
    "longitude": -140.887
  },
  "NTKH": {
    "airport": "Fakahina Airport",
    "latitude": -15.9922,
    "longitude": -140.165
  },
  "NTGJ": {
    "airport": "Totegegie Airport (Gambier Island Airport)",
    "latitude": -23.0799,
    "longitude": -134.89
  },
  "NTGH": {
    "airport": "Hikueru Airport",
    "latitude": -17.5447,
    "longitude": -142.614
  },
  "NTTO": {
    "airport": "Hao Airport",
    "latitude": -18.0748,
    "longitude": -140.946
  },
  "NTKA": {
    "airport": "Kauehi Airport",
    "latitude": -15.7808,
    "longitude": -145.124
  },
  "NTGK": {
    "airport": "Kaukura Airport",
    "latitude": -15.6633,
    "longitude": -146.885
  },
  "NTKT": {
    "airport": "Katiu Airport",
    "latitude": -16.3394,
    "longitude": -144.403
  },
  "NTGM": {
    "airport": "Makemo Airport",
    "latitude": -16.5839,
    "longitude": -143.658
  },
  "NTGV": {
    "airport": "Mataiva Airport",
    "latitude": -14.8681,
    "longitude": -148.717
  },
  "NTGN": {
    "airport": "Napuka Airport",
    "latitude": -14.1768,
    "longitude": -141.267
  },
  "NTKN": {
    "airport": "Niau Airport",
    "latitude": -16.1191,
    "longitude": -146.368
  },
  "NTGW": {
    "airport": "Nukutavake Airport",
    "latitude": -19.285,
    "longitude": -138.772
  },
  "NTGP": {
    "airport": "Puka-Puka Airport",
    "latitude": -14.8095,
    "longitude": -138.813
  },
  "NTGQ": {
    "airport": "Pukarua Airport",
    "latitude": -18.2956,
    "longitude": -137.017
  },
  "NTGE": {
    "airport": "Reao Airport",
    "latitude": -18.4659,
    "longitude": -136.44
  },
  "NTTG": {
    "airport": "Rangiroa Airport",
    "latitude": -14.9543,
    "longitude": -147.661
  },
  "NTKK": {
    "airport": "Aratika-Nord Airport",
    "latitude": -15.4853,
    "longitude": -145.47
  },
  "NTKO": {
    "airport": "Raroia Airport",
    "latitude": -16.045,
    "longitude": -142.477
  },
  "NTGC": {
    "airport": "Tikehau Airport",
    "latitude": -15.1196,
    "longitude": -148.231
  },
  "NTKM": {
    "airport": "Takume Airport",
    "latitude": -15.8547,
    "longitude": -142.268
  },
  "NTGT": {
    "airport": "Takapoto Airport",
    "latitude": -14.7095,
    "longitude": -145.246
  },
  "NTGO": {
    "airport": "Tatakoto Airport",
    "latitude": -17.3553,
    "longitude": -138.445
  },
  "NTKR": {
    "airport": "Takaroa Airport",
    "latitude": -14.4558,
    "longitude": -145.025
  },
  "NTTX": {
    "airport": "Mururoa Airport",
    "latitude": -21.8586,
    "longitude": -138.82
  },
  "NTUV": {
    "airport": "Vahitahi Airport",
    "latitude": -18.78,
    "longitude": -138.853
  },
  "NTGI": {
    "airport": "Manihi Airport",
    "latitude": -14.4368,
    "longitude": -146.07
  },
  "NTGY": {
    "airport": "Tureia Airport",
    "latitude": -20.7897,
    "longitude": -138.57
  },
  "NTTM": {
    "airport": "Moorea Airport (Temae Airport)",
    "latitude": -17.49,
    "longitude": -149.762
  },
  "NTTU": {
    "airport": "Tupai Airport",
    "latitude": -16.2423,
    "longitude": -151.834
  },
  "AYBK": {
    "airport": "Buka Island Airport",
    "latitude": -5.42232,
    "longitude": 154.673
  },
  "AYIA": {
    "airport": "Nissan Island Airport",
    "latitude": -4.49972,
    "longitude": 154.226
  },
  "AYIQ": {
    "airport": "Aropa Airport",
    "latitude": -6.30542,
    "longitude": 155.728
  },
  "AYEF": {
    "airport": "Efogi Airport",
    "latitude": -9.15381,
    "longitude": 147.66
  },
  "AYER": {
    "airport": "Erume Airport",
    "latitude": -8.2538,
    "longitude": 146.975
  },
  "AYFA": {
    "airport": "Fane Airport",
    "latitude": -8.54928,
    "longitude": 147.086
  },
  "AYGF": {
    "airport": "Guari Airport",
    "latitude": -8.1286,
    "longitude": 146.872
  },
  "AYHH": {
    "airport": "Honinabi Airport",
    "latitude": -16.2457,
    "longitude": 142.177
  },
  "AYKH": {
    "airport": "Kamulai Airport",
    "latitude": -8.15069,
    "longitude": 146.834
  },
  "AYJO": {
    "airport": "Yongai Airport",
    "latitude": -8.5289,
    "longitude": 147.46
  },
  "AYKQ": {
    "airport": "Kagi Airport",
    "latitude": -9.13592,
    "longitude": 147.669
  },
  "AYRA": {
    "airport": "Kira Airport",
    "latitude": -8.06511,
    "longitude": 147.332
  },
  "AYEA": {
    "airport": "Kerau Airport",
    "latitude": -8.27161,
    "longitude": 147.072
  },
  "AYOP": {
    "airport": "Kosipe Airport",
    "latitude": -8.45072,
    "longitude": 147.209
  },
  "AYLS": {
    "airport": "Lese Airport",
    "latitude": -8.2799,
    "longitude": 146.277
  },
  "AYMP": {
    "airport": "Malalaua Airport",
    "latitude": -8.07139,
    "longitude": 146.155
  },
  "AYMA": {
    "airport": "Manari Airport",
    "latitude": -9.1908,
    "longitude": 147.622
  },
  "AYQQ": {
    "airport": "Ononge Airport",
    "latitude": -8.67436,
    "longitude": 147.262
  },
  "AYRK": {
    "airport": "Kairuku Airport",
    "latitude": -8.817,
    "longitude": 146.524
  },
  "AYQO": {
    "airport": "Sopu Airport",
    "latitude": -8.3038,
    "longitude": 147.166
  },
  "AYTY": {
    "airport": "Terapo Airport",
    "latitude": -8.16972,
    "longitude": 146.194
  },
  "AYTI": {
    "airport": "Tapini Airport",
    "latitude": -8.35667,
    "longitude": 146.989
  },
  "AYWT": {
    "airport": "Woitape Airport",
    "latitude": -8.54583,
    "longitude": 147.253
  },
  "AYCH": {
    "airport": "Chimbu Airport",
    "latitude": -6.02429,
    "longitude": 144.971
  },
  "AYRI": {
    "airport": "Karimui Airport",
    "latitude": -6.4921,
    "longitude": 144.823
  },
  "AYGL": {
    "airport": "Gonaili Airstrip",
    "latitude": -5.52772,
    "longitude": 151.573
  },
  "AYMV": {
    "airport": "Malekolon Airport",
    "latitude": -4.02343,
    "longitude": 153.657
  },
  "AYNI": {
    "airport": "Nuguria Airstrip",
    "latitude": -3.4075,
    "longitude": 154.738
  },
  "AYTK": {
    "airport": "Rabaul Airport (Tokua Airport)",
    "latitude": -4.34046,
    "longitude": 152.38
  },
  "AYSH": {
    "airport": "Sabah Airport",
    "latitude": -5.5765,
    "longitude": 155.049
  },
  "AYZI": {
    "airport": "Silur Airport",
    "latitude": -4.52989,
    "longitude": 153.054
  },
  "AYXO": {
    "airport": "Tol Airport",
    "latitude": -4.98083,
    "longitude": 152.01
  },
  "AYVO": {
    "airport": "Tonu Airport",
    "latitude": -6.6552,
    "longitude": 155.433
  },
  "AYUI": {
    "airport": "Buin Airport",
    "latitude": -6.72917,
    "longitude": 155.683
  },
  "AYWQ": {
    "airport": "Wakunai Airport",
    "latitude": -5.8603,
    "longitude": 155.222
  },
  "AYWK": {
    "airport": "Wewak Airport",
    "latitude": -3.58383,
    "longitude": 143.669
  },
  "AYAN": {
    "airport": "Andakombe Airport",
    "latitude": -7.13722,
    "longitude": 145.745
  },
  "AYAY": {
    "airport": "Aiyura Airport",
    "latitude": -6.33806,
    "longitude": 145.904
  },
  "AYDI": {
    "airport": "Bundi Airport",
    "latitude": -5.74222,
    "longitude": 145.227
  },
  "AYGA": {
    "airport": "Goroka Airport",
    "latitude": -6.08169,
    "longitude": 145.392
  },
  "AYOK": {
    "airport": "Komako Airport",
    "latitude": -7.3984,
    "longitude": 145.883
  },
  "AYLG": {
    "airport": "Keglsugl Airport",
    "latitude": -5.83278,
    "longitude": 145.097
  },
  "AYOL": {
    "airport": "Kol Airport",
    "latitude": -5.73117,
    "longitude": 144.846
  },
  "AYMW": {
    "airport": "Marawaka Airport",
    "latitude": -6.9736,
    "longitude": 145.885
  },
  "AYNY": {
    "airport": "Nambaiyufa Airport",
    "latitude": -6.2412,
    "longitude": 145.242
  },
  "AYTR": {
    "airport": "Tarabo Airport",
    "latitude": -6.46667,
    "longitude": 145.532
  },
  "AYUC": {
    "airport": "Umba Airport",
    "latitude": -7.0214,
    "longitude": 145.966
  },
  "AYWO": {
    "airport": "Wonenara Airport",
    "latitude": -6.79686,
    "longitude": 145.892
  },
  "AYWD": {
    "airport": "Wapenamanda Airport",
    "latitude": -5.6433,
    "longitude": 143.895
  },
  "AYAO": {
    "airport": "Aiome Airport",
    "latitude": -5.1457,
    "longitude": 144.731
  },
  "AYKM": {
    "airport": "Kerema Airport",
    "latitude": -7.96361,
    "longitude": 145.771
  },
  "AYKK": {
    "airport": "Kikori Airport",
    "latitude": -7.42438,
    "longitude": 144.25
  },
  "AYQA": {
    "airport": "Karawari Airport",
    "latitude": -4.59667,
    "longitude": 143.523
  },
  "AYSK": {
    "airport": "Sangapi Airport",
    "latitude": -5.12583,
    "longitude": 144.324
  },
  "AYSS": {
    "airport": "Sasereme Airport",
    "latitude": -7.6217,
    "longitude": 142.868
  },
  "AYBA": {
    "airport": "Baimuru Airport",
    "latitude": -7.49686,
    "longitude": 144.82
  },
  "AYWB": {
    "airport": "Wabo Airport",
    "latitude": -6.98944,
    "longitude": 145.075
  },
  "AYJS": {
    "airport": "Josephstaal Airport",
    "latitude": -4.74708,
    "longitude": 145.007
  },
  "AYKR": {
    "airport": "Karkar Airport",
    "latitude": -4.557,
    "longitude": 145.94
  },
  "AYMD": {
    "airport": "Madang Airport",
    "latitude": -5.20708,
    "longitude": 145.789
  },
  "AYNA": {
    "airport": "Nankina Airport",
    "latitude": -5.837,
    "longitude": 146.453
  },
  "AYSD": {
    "airport": "Saidor Airport",
    "latitude": -5.62714,
    "longitude": 146.463
  },
  "AYWH": {
    "airport": "Wanuma Airport",
    "latitude": -4.8961,
    "longitude": 145.321
  },
  "AYMO": {
    "airport": "Momote Airport",
    "latitude": -2.06189,
    "longitude": 147.424
  },
  "AYYM": {
    "airport": "Mal Island Airport",
    "latitude": -1.39444,
    "longitude": 144.171
  },
  "AYAG": {
    "airport": "Agaun Airport",
    "latitude": -9.93083,
    "longitude": 149.386
  },
  "AYGN": {
    "airport": "Gurney Airport",
    "latitude": -10.3115,
    "longitude": 150.334
  },
  "AYKA": {
    "airport": "Losuia Airport",
    "latitude": -8.50582,
    "longitude": 151.081
  },
  "AYMS": {
    "airport": "Misima Island Airport",
    "latitude": -10.6892,
    "longitude": 152.838
  },
  "AYAX": {
    "airport": "Aseki Airport",
    "latitude": -7.3508,
    "longitude": 146.194
  },
  "AYUM": {
    "airport": "Aumo Airport",
    "latitude": -5.73111,
    "longitude": 148.445
  },
  "AYBC": {
    "airport": "Bambu Airport",
    "latitude": -5.86361,
    "longitude": 146.492
  },
  "AYBG": {
    "airport": "Baindoung Airport",
    "latitude": -6.34722,
    "longitude": 146.942
  },
  "AYBP": {
    "airport": "Bapi Airport",
    "latitude": -7.74361,
    "longitude": 147.021
  },
  "AYBR": {
    "airport": "Biaru Airport",
    "latitude": -7.6693,
    "longitude": 146.759
  },
  "AYBU": {
    "airport": "Bulolo Airport",
    "latitude": -7.21629,
    "longitude": 146.65
  },
  "AYNS": {
    "airport": "Bunsil Airport",
    "latitude": -5.7243,
    "longitude": 147.867
  },
  "AYDE": {
    "airport": "Derim Airport",
    "latitude": -6.14472,
    "longitude": 147.107
  },
  "AYDN": {
    "airport": "Dinangat Airport",
    "latitude": -6.1546,
    "longitude": 146.677
  },
  "AYEN": {
    "airport": "Engati Airport",
    "latitude": -6.9179,
    "longitude": 146.105
  },
  "AYFI": {
    "airport": "Finschhafen Airport",
    "latitude": -6.62175,
    "longitude": 147.854
  },
  "AYGP": {
    "airport": "Gusap Airport",
    "latitude": -6.0532,
    "longitude": 145.959
  },
  "AYGI": {
    "airport": "Garaina Airport",
    "latitude": -7.87563,
    "longitude": 147.141
  },
  "AYGG": {
    "airport": "Garasa Airport",
    "latitude": -7.98071,
    "longitude": 147.213
  },
  "AYHE": {
    "airport": "Heiweni Airport",
    "latitude": -7.4223,
    "longitude": 146.428
  },
  "AYHU": {
    "airport": "Hawabango Airport",
    "latitude": -7.39299,
    "longitude": 146.003
  },
  "AYID": {
    "airport": "Indagen Airport",
    "latitude": -6.22663,
    "longitude": 147.244
  },
  "AYII": {
    "airport": "Imane Airport",
    "latitude": -6.7524,
    "longitude": 146.107
  },
  "AYKB": {
    "airport": "Kabwum Airport",
    "latitude": -6.15547,
    "longitude": 147.191
  },
  "AYNB": {
    "airport": "Kanabea Airport",
    "latitude": -7.53889,
    "longitude": 145.905
  },
  "AYOE": {
    "airport": "Konge Airport",
    "latitude": -6.2239,
    "longitude": 147.215
  },
  "AYKD": {
    "airport": "Kamina Airport",
    "latitude": -7.64925,
    "longitude": 145.957
  },
  "AYRO": {
    "airport": "Kakoro Airport",
    "latitude": -7.83467,
    "longitude": 146.533
  },
  "AYNM": {
    "airport": "Kasanombe Airport",
    "latitude": -6.3819,
    "longitude": 146.986
  },
  "AYYR": {
    "airport": "Yasuru Airport",
    "latitude": -6.6015,
    "longitude": 146.181
  },
  "AYYE": {
    "airport": "Yalumet Airport",
    "latitude": -6.09,
    "longitude": 147.012
  },
  "AYKT": {
    "airport": "Kaintiba Airport",
    "latitude": -7.50025,
    "longitude": 146.034
  },
  "AYLB": {
    "airport": "Lab Lab Airport",
    "latitude": -5.7204,
    "longitude": 148.057
  },
  "AYNZ": {
    "airport": "Lae Nadzab Airport",
    "latitude": -6.5698,
    "longitude": 146.726
  },
  "AYLT": {
    "airport": "Lengbati Airport",
    "latitude": -6.38461,
    "longitude": 147.369
  },
  "AYLN": {
    "airport": "Langimar Airport",
    "latitude": -7.22314,
    "longitude": 146.227
  },
  "AYLP": {
    "airport": "Leron Plains Airport",
    "latitude": -6.3917,
    "longitude": 146.343
  },
  "AYLX": {
    "airport": "Long Island Airport",
    "latitude": -5.3604,
    "longitude": 147.018
  },
  "AYLO": {
    "airport": "Lowai Airport",
    "latitude": -6.3344,
    "longitude": 146.646
  },
  "AYSX": {
    "airport": "Masa Airport",
    "latitude": -6.345,
    "longitude": 147.591
  },
  "AYMJ": {
    "airport": "Makini Airport",
    "latitude": -6.53222,
    "longitude": 147.651
  },
  "AYMI": {
    "airport": "Mindik Airport",
    "latitude": -6.47167,
    "longitude": 147.441
  },
  "AYMC": {
    "airport": "Menyamya Airport",
    "latitude": -7.21167,
    "longitude": 146.019
  },
  "AYMB": {
    "airport": "Morobe Airport",
    "latitude": -7.74,
    "longitude": 147.59
  },
  "AYOG": {
    "airport": "Ogeramnang Airport",
    "latitude": -6.46675,
    "longitude": 147.364
  },
  "AYOM": {
    "airport": "Omora Airport",
    "latitude": -7.82778,
    "longitude": 147.081
  },
  "AYPD": {
    "airport": "Pindiu Airport",
    "latitude": -6.44514,
    "longitude": 147.516
  },
  "AYSP": {
    "airport": "Sapmanga Airport",
    "latitude": -6.07528,
    "longitude": 146.811
  },
  "AYXI": {
    "airport": "Sim Airport",
    "latitude": -7.75,
    "longitude": 146.927
  },
  "AYEW": {
    "airport": "Siwea Airport",
    "latitude": -6.28464,
    "longitude": 147.581
  },
  "AYSW": {
    "airport": "Satwag Airport",
    "latitude": -6.13956,
    "longitude": 147.279
  },
  "AYQS": {
    "airport": "Sialum Airport",
    "latitude": -6.0908,
    "longitude": 147.596
  },
  "AYTP": {
    "airport": "Teptep Airport",
    "latitude": -5.9553,
    "longitude": 146.559
  },
  "AYTZ": {
    "airport": "Tekadu Airport",
    "latitude": -7.6808,
    "longitude": 146.55
  },
  "AYTS": {
    "airport": "Tsewi Airport",
    "latitude": -7.0695,
    "longitude": 146.127
  },
  "AYTW": {
    "airport": "Tawa Airport",
    "latitude": -7.4463,
    "longitude": 146.107
  },
  "AYWS": {
    "airport": "Wasu Airport",
    "latitude": -5.96171,
    "longitude": 147.198
  },
  "AYWC": {
    "airport": "Wantoat Airport",
    "latitude": -6.1325,
    "longitude": 146.468
  },
  "AYWU": {
    "airport": "Wau Airport",
    "latitude": -7.34556,
    "longitude": 146.719
  },
  "AYXE": {
    "airport": "Yeva Airport",
    "latitude": -7.548,
    "longitude": 146.188
  },
  "AYZA": {
    "airport": "Zenag Airport",
    "latitude": -6.95222,
    "longitude": 146.616
  },
  "AYAF": {
    "airport": "Afore Airport",
    "latitude": -9.14222,
    "longitude": 148.391
  },
  "AYBD": {
    "airport": "Bodinumu Airport",
    "latitude": -9.10778,
    "longitude": 147.667
  },
  "AYDO": {
    "airport": "Doini Island Airport",
    "latitude": -10.7009,
    "longitude": 150.722
  },
  "AYDR": {
    "airport": "Dorobisoro Airstrip",
    "latitude": -9.46185,
    "longitude": 147.921
  },
  "AYEO": {
    "airport": "Emo Airport",
    "latitude": -9.1234,
    "longitude": 148.042
  },
  "AYEB": {
    "airport": "Embessa Airport",
    "latitude": -9.447,
    "longitude": 148.763
  },
  "AYGC": {
    "airport": "Gewoia Airport",
    "latitude": -9.2263,
    "longitude": 148.495
  },
  "AYGX": {
    "airport": "Gora Airport",
    "latitude": -9.0021,
    "longitude": 148.236
  },
  "AYNJ": {
    "airport": "Namudi Airport",
    "latitude": -9.47375,
    "longitude": 148.329
  },
  "AYNC": {
    "airport": "Nadunumu Airport",
    "latitude": -9.14356,
    "longitude": 147.684
  },
  "AYPQ": {
    "airport": "Pumani Airport",
    "latitude": -9.7469,
    "longitude": 149.477
  },
  "AYPY": {
    "airport": "Jacksons International Airport",
    "latitude": -9.44338,
    "longitude": 147.22
  },
  "AYYO": {
    "airport": "Oram Airport",
    "latitude": -9.63292,
    "longitude": 148.048
  },
  "AYRE": {
    "airport": "Rabaraba Airport",
    "latitude": -9.97111,
    "longitude": 149.832
  },
  "AYSF": {
    "airport": "Safia Airport",
    "latitude": -9.59306,
    "longitude": 148.636
  },
  "AYSG": {
    "airport": "Sila Airport",
    "latitude": -9.07356,
    "longitude": 148.389
  },
  "AYCS": {
    "airport": "China Strait Airstrip",
    "latitude": -10.5628,
    "longitude": 150.691
  },
  "AYTF": {
    "airport": "Tetebedi Airport",
    "latitude": -9.1586,
    "longitude": 148.069
  },
  "AYUE": {
    "airport": "Uroubi Airport",
    "latitude": -9.5162,
    "longitude": 148.559
  },
  "AYBZ": {
    "airport": "Biniguni Airport",
    "latitude": -9.6425,
    "longitude": 149.304
  },
  "AYNX": {
    "airport": "Namatanai Airport",
    "latitude": -3.6695,
    "longitude": 152.438
  },
  "AYEE": {
    "airport": "Emirau Airport",
    "latitude": -1.65395,
    "longitude": 149.976
  },
  "AYKV": {
    "airport": "Kavieng Airport",
    "latitude": -2.5794,
    "longitude": 150.808
  },
  "AYKY": {
    "airport": "Lihir Island Airport",
    "latitude": -3.04361,
    "longitude": 152.629
  },
  "AYMZ": {
    "airport": "Mabua Airstrip",
    "latitude": -2.81139,
    "longitude": 151.991
  },
  "AYSE": {
    "airport": "Simberi Airport",
    "latitude": -2.66222,
    "longitude": 151.998
  },
  "AYWG": {
    "airport": "Wanigela Airport",
    "latitude": -9.3375,
    "longitude": 149.156
  },
  "AYKO": {
    "airport": "Kokoda Airport",
    "latitude": -8.88468,
    "longitude": 147.731
  },
  "AYGR": {
    "airport": "Girua Airport",
    "latitude": -8.80454,
    "longitude": 148.309
  },
  "AYTU": {
    "airport": "Tufi Airport",
    "latitude": -9.07595,
    "longitude": 149.32
  },
  "AYPE": {
    "airport": "April River Airport",
    "latitude": -4.67667,
    "longitude": 142.54
  },
  "AYAT": {
    "airport": "Ambunti Airport",
    "latitude": -4.21567,
    "longitude": 142.823
  },
  "AYBF": {
    "airport": "Bamu Airport",
    "latitude": -7.8485,
    "longitude": 143.243
  },
  "AYEV": {
    "airport": "Erave Airport",
    "latitude": -6.60646,
    "longitude": 143.9
  },
  "AYHB": {
    "airport": "Habi Airport",
    "latitude": -6.32,
    "longitude": 142.489
  },
  "AYHO": {
    "airport": "Haivaro Airport",
    "latitude": -6.9406,
    "longitude": 143.059
  },
  "AYHF": {
    "airport": "Hayfields Airport",
    "latitude": -3.69838,
    "longitude": 143.058
  },
  "AYOQ": {
    "airport": "Komaio Airport",
    "latitude": -7.2714,
    "longitude": 143.595
  },
  "AYOW": {
    "airport": "Koroba Airport",
    "latitude": -5.6952,
    "longitude": 142.744
  },
  "AYNN": {
    "airport": "Kandep Airport",
    "latitude": -5.84061,
    "longitude": 143.507
  },
  "AYLI": {
    "airport": "Kibuli Airport",
    "latitude": -9.00653,
    "longitude": 142.698
  },
  "AYOO": {
    "airport": "Komo-Manda Airport",
    "latitude": -6.0682,
    "longitude": 142.86
  },
  "AYKG": {
    "airport": "Kopiago Airport",
    "latitude": -5.3883,
    "longitude": 142.498
  },
  "AYDL": {
    "airport": "Kondubol Airport",
    "latitude": -8.5336,
    "longitude": 142.505
  },
  "AYKU": {
    "airport": "Kuri Airport",
    "latitude": -7.13508,
    "longitude": 143.276
  },
  "AYKW": {
    "airport": "Kawito Airport",
    "latitude": -7.97701,
    "longitude": 142.824
  },
  "AYMN": {
    "airport": "Mendi Airport",
    "latitude": -6.14774,
    "longitude": 143.657
  },
  "AYPO": {
    "airport": "Mapoda Airport",
    "latitude": -7.979,
    "longitude": 143.169
  },
  "AYMQ": {
    "airport": "Malam Airport",
    "latitude": -8.70917,
    "longitude": 142.65
  },
  "AYRM": {
    "airport": "Maramuni Airport",
    "latitude": -5.13,
    "longitude": 143.483
  },
  "AYMR": {
    "airport": "Moro Airport",
    "latitude": -6.36333,
    "longitude": 143.238
  },
  "AYBM": {
    "airport": "Balimo Airport",
    "latitude": -8.05,
    "longitude": 142.933
  },
  "AYPB": {
    "airport": "Paiela Airport",
    "latitude": -5.3725,
    "longitude": 142.976
  },
  "AYPJ": {
    "airport": "Pimaga Airport",
    "latitude": -6.49917,
    "longitude": 143.51
  },
  "AYVM": {
    "airport": "Torembi Airport",
    "latitude": -4.0165,
    "longitude": 143.133
  },
  "AYTA": {
    "airport": "Tari Airport",
    "latitude": -5.845,
    "longitude": 142.948
  },
  "AYUR": {
    "airport": "Upiara Airport",
    "latitude": -8.5411,
    "longitude": 142.65
  },
  "AYWF": {
    "airport": "Wawoi Falls Airport",
    "latitude": -6.9523,
    "longitude": 142.656
  },
  "AYIW": {
    "airport": "Wasua Airport",
    "latitude": -8.2836,
    "longitude": 142.87
  },
  "AYBL": {
    "airport": "Bialla Airport",
    "latitude": -5.33056,
    "longitude": 151.008
  },
  "AYCG": {
    "airport": "Cape Gloucester Airport",
    "latitude": -5.45896,
    "longitude": 148.432
  },
  "AYGJ": {
    "airport": "Guasopa Airport",
    "latitude": -9.22592,
    "longitude": 152.944
  },
  "AYGT": {
    "airport": "Gasmata Airport",
    "latitude": -6.27111,
    "longitude": 150.331
  },
  "AYHK": {
    "airport": "Hoskins Airport",
    "latitude": -5.46217,
    "longitude": 150.405
  },
  "AYKC": {
    "airport": "Kandrian Airport",
    "latitude": -6.19217,
    "longitude": 149.548
  },
  "AYLL": {
    "airport": "Linga Linga Airport",
    "latitude": -5.53194,
    "longitude": 149.734
  },
  "AYSL": {
    "airport": "Sehulea Airport",
    "latitude": -9.96453,
    "longitude": 151.162
  },
  "AYSV": {
    "airport": "Sauren Airport",
    "latitude": -5.9701,
    "longitude": 148.854
  },
  "AYTG": {
    "airport": "Tagula Airport",
    "latitude": -11.3311,
    "longitude": 153.203
  },
  "AYVL": {
    "airport": "Talasea Airport",
    "latitude": -5.2726,
    "longitude": 150.009
  },
  "AYUZ": {
    "airport": "Uvol Airport",
    "latitude": -6.0178,
    "longitude": 150.956
  },
  "AYWJ": {
    "airport": "Wapolu Airport",
    "latitude": -9.3376,
    "longitude": 150.509
  },
  "AYIX": {
    "airport": "Witu Airport",
    "latitude": -4.68952,
    "longitude": 149.44
  },
  "AYVN": {
    "airport": "Vanimo Airport",
    "latitude": -2.6926,
    "longitude": 141.303
  },
  "AYND": {
    "airport": "Aua Island Airport",
    "latitude": -1.46056,
    "longitude": 143.065
  },
  "AYBO": {
    "airport": "Bomai Airport",
    "latitude": -6.37317,
    "longitude": 144.637
  },
  "AYCB": {
    "airport": "Chungrebu Airport",
    "latitude": -4.80662,
    "longitude": 144.715
  },
  "AYNE": {
    "airport": "Negarbo Airport",
    "latitude": -6.56778,
    "longitude": 144.703
  },
  "AYMH": {
    "airport": "Mount Hagen Airport",
    "latitude": -5.82679,
    "longitude": 144.296
  },
  "AYKJ": {
    "airport": "Kanainj Airport",
    "latitude": -5.2903,
    "longitude": 144.707
  },
  "AYAQ": {
    "airport": "Kompiam Airport",
    "latitude": -5.38167,
    "longitude": 143.925
  },
  "AYDK": {
    "airport": "Munduku Airport",
    "latitude": -4.6204,
    "longitude": 143.452
  },
  "AYPG": {
    "airport": "Pangia Airport",
    "latitude": -6.386,
    "longitude": 144.108
  },
  "AYSJ": {
    "airport": "Simbai Airport",
    "latitude": -5.27861,
    "longitude": 144.545
  },
  "AYTV": {
    "airport": "Timbunke Airport",
    "latitude": -4.19663,
    "longitude": 143.519
  },
  "AYYL": {
    "airport": "Tinboli Airport",
    "latitude": -4.0949,
    "longitude": 143.384
  },
  "AYAE": {
    "airport": "Mount Aue Airport",
    "latitude": -6.23417,
    "longitude": 144.665
  },
  "AYVW": {
    "airport": "Wuvulu Island Airport",
    "latitude": -1.73611,
    "longitude": 142.837
  },
  "AYYK": {
    "airport": "Yankisa Airport",
    "latitude": -5.10972,
    "longitude": 143.918
  },
  "AYAK": {
    "airport": "Aiambak Airport",
    "latitude": -7.34278,
    "longitude": 141.268
  },
  "AYGU": {
    "airport": "Anguganak Airport",
    "latitude": -3.5605,
    "longitude": 142.217
  },
  "AYAA": {
    "airport": "Ama Airport",
    "latitude": -4.10111,
    "longitude": 141.67
  },
  "AYAM": {
    "airport": "Amanab Airport",
    "latitude": -3.586,
    "longitude": 141.214
  },
  "AYAI": {
    "airport": "Aitape Airstrip",
    "latitude": -3.14361,
    "longitude": 142.347
  },
  "AYAW": {
    "airport": "Awaba Airport",
    "latitude": -8.00611,
    "longitude": 142.748
  },
  "AYET": {
    "airport": "Bosset Airport",
    "latitude": -7.23726,
    "longitude": 141.106
  },
  "AYBQ": {
    "airport": "Biangabip Airport",
    "latitude": -5.52639,
    "longitude": 141.745
  },
  "AYBH": {
    "airport": "Bensbach Airport",
    "latitude": -8.85806,
    "longitude": 141.259
  },
  "AYBI": {
    "airport": "Bewani Airport",
    "latitude": -3.02167,
    "longitude": 141.165
  },
  "AYDU": {
    "airport": "Daru Airport",
    "latitude": -9.08676,
    "longitude": 143.208
  },
  "AYDB": {
    "airport": "Debepare Airport",
    "latitude": -6.30861,
    "longitude": 141.906
  },
  "AYEL": {
    "airport": "Eliptamin Airport",
    "latitude": -5.0412,
    "longitude": 141.678
  },
  "AYFR": {
    "airport": "Frieda River Airport",
    "latitude": -4.61047,
    "longitude": 141.96
  },
  "AYFE": {
    "airport": "Feramin Airport",
    "latitude": -5.208,
    "longitude": 141.699
  },
  "AYFU": {
    "airport": "Fuma Airport",
    "latitude": -6.3933,
    "longitude": 142.441
  },
  "AYGS": {
    "airport": "Gasuke Airport",
    "latitude": -6.1028,
    "longitude": 141.739
  },
  "AYUP": {
    "airport": "Gulgubip Airport",
    "latitude": -5.2808,
    "longitude": 141.541
  },
  "AYML": {
    "airport": "Mougulu Airport",
    "latitude": -6.28086,
    "longitude": 142.421
  },
  "AYGV": {
    "airport": "Green River Airport",
    "latitude": -3.90224,
    "longitude": 141.171
  },
  "AYIO": {
    "airport": "Imonda Airport",
    "latitude": -3.328,
    "longitude": 141.157
  },
  "AYTO": {
    "airport": "Kamberatoro Airport",
    "latitude": -3.60056,
    "longitude": 141.052
  },
  "AYIM": {
    "airport": "Kungim Airport",
    "latitude": -5.671,
    "longitude": 141.03
  },
  "AYYP": {
    "airport": "Yapsiei Airport",
    "latitude": -4.62806,
    "longitude": 141.094
  },
  "AYUY": {
    "airport": "Kuyol Airport",
    "latitude": -5.37236,
    "longitude": 141.624
  },
  "AYLU": {
    "airport": "Lumi Airport",
    "latitude": -3.47684,
    "longitude": 142.041
  },
  "AYEH": {
    "airport": "Morehead Airport",
    "latitude": -8.71411,
    "longitude": 141.644
  },
  "AYIY": {
    "airport": "Miyanmin Airport",
    "latitude": -4.90306,
    "longitude": 141.621
  },
  "ATNR": {
    "airport": "Nomad River Airport",
    "latitude": -6.294,
    "longitude": 142.234
  },
  "AYOB": {
    "airport": "Obo Airport",
    "latitude": -7.59062,
    "longitude": 141.324
  },
  "AYOJ": {
    "airport": "Oksapmin Airport",
    "latitude": -5.2261,
    "longitude": 142.226
  },
  "AYOF": {
    "airport": "Okao Airport",
    "latitude": -5.55667,
    "longitude": 141.033
  },
  "AYOV": {
    "airport": "Olsobip Airport",
    "latitude": -5.38972,
    "longitude": 141.515
  },
  "AYZS": {
    "airport": "Ossima Airport",
    "latitude": -2.91556,
    "longitude": 141.297
  },
  "AYPC": {
    "airport": "Pangoa Airport",
    "latitude": -7.0226,
    "longitude": 141.561
  },
  "AYRG": {
    "airport": "Rumginae Airport",
    "latitude": -5.89722,
    "longitude": 141.272
  },
  "AYSO": {
    "airport": "Selbang Airport",
    "latitude": -5.315,
    "longitude": 141.752
  },
  "AYSA": {
    "airport": "Suabi Airport",
    "latitude": -6.10444,
    "longitude": 142.278
  },
  "AYZN": {
    "airport": "Sissano Airport",
    "latitude": -2.99944,
    "longitude": 142.044
  },
  "AYSU": {
    "airport": "Suki Airport",
    "latitude": -8.0466,
    "longitude": 141.722
  },
  "AYTB": {
    "airport": "Tabubil Airport",
    "latitude": -5.27861,
    "longitude": 141.226
  },
  "AYTH": {
    "airport": "Tifalmin Airport",
    "latitude": -5.1173,
    "longitude": 141.419
  },
  "AYTE": {
    "airport": "Telefomin Airport",
    "latitude": -5.12608,
    "longitude": 141.642
  },
  "AYTN": {
    "airport": "Tekin Airport",
    "latitude": -5.24367,
    "longitude": 142.165
  },
  "AYQL": {
    "airport": "Tumolbil Airport",
    "latitude": -4.7748,
    "longitude": 141.013
  },
  "AYTT": {
    "airport": "Tarakbits Airport",
    "latitude": -5.614,
    "longitude": 141.042
  },
  "AYNU": {
    "airport": "Nuku Airport",
    "latitude": -3.67665,
    "longitude": 142.484
  },
  "AYKI": {
    "airport": "Kiunga Airport",
    "latitude": -6.12571,
    "longitude": 141.282
  },
  "AYXW": {
    "airport": "Weam Airport",
    "latitude": -8.6184,
    "longitude": 141.138
  },
  "AYXP": {
    "airport": "Wipim Airport",
    "latitude": -8.78822,
    "longitude": 142.882
  },
  "AYED": {
    "airport": "Edwaki Airport",
    "latitude": -3.88399,
    "longitude": 141.792
  },
  "RPME": {
    "airport": "Bancasi Airport",
    "latitude": 8.9515,
    "longitude": 125.479
  },
  "RPVK": {
    "airport": "Kalibo International Airport",
    "latitude": 11.6794,
    "longitude": 122.376
  },
  "RPVE": {
    "airport": "Godofredo P. Ramos Airport (Caticlan Airport)",
    "latitude": 11.9245,
    "longitude": 121.954
  },
  "RPLK": {
    "airport": "Bicol International Airport",
    "latitude": 13.1115,
    "longitude": 123.6814
  },
  "RPLP": {
    "airport": "Legazpi International Airport",
    "latitude": 13.1575,
    "longitude": 123.735
  },
  "RPVS": {
    "airport": "Evelio Javier Airport (Antique Airport)",
    "latitude": 10.766,
    "longitude": 121.933
  },
  "RPUR": {
    "airport": "Dr. Juan C. Angara Airport",
    "latitude": 15.7293,
    "longitude": 121.5
  },
  "RPLB": {
    "airport": "Subic Bay International Airport",
    "latitude": 14.7944,
    "longitude": 120.271
  },
  "RPUO": {
    "airport": "Basco Airport",
    "latitude": 20.4513,
    "longitude": 121.98
  },
  "RPUB": {
    "airport": "Loakan Airport",
    "latitude": 16.3751,
    "longitude": 120.62
  },
  "RPVT": {
    "airport": "Tagbilaran Airport",
    "latitude": 9.66544,
    "longitude": 123.854
  },
  "RPLH": {
    "airport": "Cagayan North International Airport (Lal-lo Airport)",
    "latitude": 18.1811,
    "longitude": 121.745
  },
  "RPUT": {
    "airport": "Tuguegarao Airport",
    "latitude": 17.6434,
    "longitude": 121.733
  },
  "RPUD": {
    "airport": "Bagasbas Airport",
    "latitude": 14.1292,
    "longitude": 122.98
  },
  "RPUN": {
    "airport": "Naga Airport",
    "latitude": 13.5849,
    "longitude": 123.27
  },
  "RPMH": {
    "airport": "Camiguin Airport",
    "latitude": 9.25352,
    "longitude": 124.707
  },
  "RPVR": {
    "airport": "Roxas Airport",
    "latitude": 11.5977,
    "longitude": 122.752
  },
  "RPUV": {
    "airport": "Virac Airport",
    "latitude": 13.5764,
    "longitude": 124.206
  },
  "RPLS": {
    "airport": "Danilo Atienza Air Base",
    "latitude": 14.4954,
    "longitude": 120.904
  },
  "RPVM": {
    "airport": "Mactan-Cebu International Airport",
    "latitude": 10.3075,
    "longitude": 123.979
  },
  "RPMQ": {
    "airport": "Mati Airport (Imelda R. Marcos Airport)",
    "latitude": 6.94909,
    "longitude": 126.274
  },
  "RPMD": {
    "airport": "Francisco Bangoy International Airport",
    "latitude": 7.12552,
    "longitude": 125.646
  },
  "RPLI": {
    "airport": "Laoag International Airport",
    "latitude": 18.1781,
    "longitude": 120.532
  },
  "RPSG": {
    "airport": "Sicogon Airport",
    "latitude": 11.4595,
    "longitude": 123.251
  },
  "RPVI": {
    "airport": "Iloilo International Airport",
    "latitude": 10.833,
    "longitude": 122.493
  },
  "RPUY": {
    "airport": "Cauayan Airport",
    "latitude": 16.9299,
    "longitude": 121.753
  },
  "RPUS": {
    "airport": "San Fernando Airport",
    "latitude": 16.5956,
    "longitude": 120.303
  },
  "RPMI": {
    "airport": "Maria Cristina Airport (Iligan Airport)",
    "latitude": 8.13049,
    "longitude": 124.215
  },
  "RPVO": {
    "airport": "Ormoc Airport",
    "latitude": 11.058,
    "longitude": 124.565
  },
  "RPVA": {
    "airport": "Daniel Z. Romualdez Airport",
    "latitude": 11.228,
    "longitude": 125.028
  },
  "RPMC": {
    "airport": "Awang Airport",
    "latitude": 7.16524,
    "longitude": 124.21
  },
  "RPMM": {
    "airport": "Malabang Airport",
    "latitude": 7.61722,
    "longitude": 124.059
  },
  "RPUW": {
    "airport": "Marinduque Airport",
    "latitude": 13.361,
    "longitude": 121.826
  },
  "RPVJ": {
    "airport": "Moises R. Espinosa Airport (Masbate Airport)",
    "latitude": 12.3697,
    "longitude": 123.63
  },
  "RPLU": {
    "airport": "Lubang Airport",
    "latitude": 13.8554,
    "longitude": 120.105
  },
  "RPUM": {
    "airport": "Mamburao Airport",
    "latitude": 13.2081,
    "longitude": 120.605
  },
  "RPUH": {
    "airport": "San Jose Airport",
    "latitude": 12.3615,
    "longitude": 121.047
  },
  "RPMY": {
    "airport": "Laguindingan Airport",
    "latitude": 8.6122,
    "longitude": 124.456
  },
  "RPMO": {
    "airport": "Labo Airport",
    "latitude": 8.17851,
    "longitude": 123.842
  },
  "RPLL": {
    "airport": "Ninoy Aquino International Airport / Villamor Air Base",
    "latitude": 14.5086,
    "longitude": 121.02
  },
  "RPMA": {
    "airport": "Allah Valley Airport",
    "latitude": 6.36682,
    "longitude": 124.751
  },
  "RPVB": {
    "airport": "Bacolod-Silay International Airport",
    "latitude": 10.7764,
    "longitude": 123.015
  },
  "RPVD": {
    "airport": "Sibulan Airport (Dumaguete Airport)",
    "latitude": 9.33371,
    "longitude": 123.3
  },
  "RPVF": {
    "airport": "Catarman National Airport",
    "latitude": 12.5024,
    "longitude": 124.636
  },
  "RPLO": {
    "airport": "Cuyo Airport",
    "latitude": 10.8581,
    "longitude": 121.069
  },
  "RPEN": {
    "airport": "El Nido Airport",
    "latitude": 11.2024,
    "longitude": 119.416
  },
  "RPVP": {
    "airport": "Puerto Princesa International Airport",
    "latitude": 9.74212,
    "longitude": 118.759
  },
  "RPSD": {
    "airport": "Cesar Lim Rodriguez Airport",
    "latitude": 10.8187,
    "longitude": 119.508
  },
  "RPSV": {
    "airport": "San Vicente Airport",
    "latitude": 10.525,
    "longitude": 119.274
  },
  "RPVV": {
    "airport": "Francisco B. Reyes Airport",
    "latitude": 12.1215,
    "longitude": 120.1
  },
  "RPLC": {
    "airport": "Clark International Airport",
    "latitude": 15.186,
    "longitude": 120.56
  },
  "RPLE": {
    "airport": "Balesin Airport",
    "latitude": 14.4194,
    "longitude": 122.039
  },
  "RPVU": {
    "airport": "Tugdan Airport",
    "latitude": 12.311,
    "longitude": 122.085
  },
  "RPVC": {
    "airport": "Calbayog Airport",
    "latitude": 12.0727,
    "longitude": 124.545
  },
  "RPMR": {
    "airport": "General Santos International Airport (Tambler Airport)",
    "latitude": 6.058,
    "longitude": 125.096
  },
  "RPMJ": {
    "airport": "Jolo Airport",
    "latitude": 6.05367,
    "longitude": 121.011
  },
  "RPNS": {
    "airport": "Sayak Airport (Siargao Airport)",
    "latitude": 9.8591,
    "longitude": 126.014
  },
  "RPMS": {
    "airport": "Surigao Airport",
    "latitude": 9.75584,
    "longitude": 125.481
  },
  "RPMF": {
    "airport": "Bislig Airport",
    "latitude": 8.19595,
    "longitude": 126.322
  },
  "RPMW": {
    "airport": "Tandag Airport",
    "latitude": 9.07211,
    "longitude": 126.171
  },
  "RPMU": {
    "airport": "Cagayan de Sulu Airport",
    "latitude": 7.014,
    "longitude": 118.496
  },
  "RPMN": {
    "airport": "Sanga-Sanga Airport",
    "latitude": 5.04699,
    "longitude": 119.743
  },
  "RPMV": {
    "airport": "Ipil Airport",
    "latitude": 7.78556,
    "longitude": 122.602
  },
  "RPMG": {
    "airport": "Dipolog Airport",
    "latitude": 8.60198,
    "longitude": 123.342
  },
  "PRNO": {
    "airport": "Siocon Airport",
    "latitude": 7.71048,
    "longitude": 122.161
  },
  "RPMP": {
    "airport": "Pagadian Airport",
    "latitude": 7.83073,
    "longitude": 123.461
  },
  "RPMZ": {
    "airport": "Zamboanga International Airport",
    "latitude": 6.92242,
    "longitude": 122.06
  },
  "OPMF": {
    "airport": "Muzaffarabad Airport",
    "latitude": 34.339,
    "longitude": 73.5086
  },
  "OPRT": {
    "airport": "Rawalakot Airport",
    "latitude": 33.8497,
    "longitude": 73.7981
  },
  "OPMA": {
    "airport": "Mangla Airport",
    "latitude": 33.0501,
    "longitude": 73.6384
  },
  "OPDB": {
    "airport": "Dalbandin Airport",
    "latitude": 28.8783,
    "longitude": 64.3998
  },
  "OPGD": {
    "airport": "Gwadar International Airport",
    "latitude": 25.2333,
    "longitude": 62.3295
  },
  "OPJI": {
    "airport": "Jiwani Airport",
    "latitude": 25.0678,
    "longitude": 61.8054
  },
  "OPKH": {
    "airport": "Khuzdar Airport",
    "latitude": 27.7906,
    "longitude": 66.6473
  },
  "OPLL": {
    "airport": "Loralai Airport",
    "latitude": 30.3555,
    "longitude": 68.6135
  },
  "OPOR": {
    "airport": "Ormara Airport",
    "latitude": 25.2747,
    "longitude": 64.586
  },
  "OPPG": {
    "airport": "Panjgur Airport",
    "latitude": 26.9545,
    "longitude": 64.1325
  },
  "OPPI": {
    "airport": "Pasni Airport",
    "latitude": 25.2905,
    "longitude": 63.3451
  },
  "OPZB": {
    "airport": "Zhob Airport",
    "latitude": 31.3584,
    "longitude": 69.4636
  },
  "OPSB": {
    "airport": "Sibi Airport",
    "latitude": 29.5712,
    "longitude": 67.8479
  },
  "OPSU": {
    "airport": "Sui Airport",
    "latitude": 28.6451,
    "longitude": 69.1769
  },
  "OPTU": {
    "airport": "Turbat International Airport",
    "latitude": 25.9864,
    "longitude": 63.0302
  },
  "OPQT": {
    "airport": "Quetta International Airport",
    "latitude": 30.2514,
    "longitude": 66.9378
  },
  "OPCL": {
    "airport": "Chilas Airport",
    "latitude": 35.4267,
    "longitude": 74.0817
  },
  "OPGT": {
    "airport": "Gilgit Airport",
    "latitude": 35.9188,
    "longitude": 74.3336
  },
  "OPSD": {
    "airport": "Skardu Airport",
    "latitude": 35.3355,
    "longitude": 75.536
  },
  "OPIS": {
    "airport": "Islamabad International Airport",
    "latitude": 33.5607,
    "longitude": 72.8516
  },
  "OPBN": {
    "airport": "Bannu Airport",
    "latitude": 32.9729,
    "longitude": 70.5279
  },
  "OPCH": {
    "airport": "Chitral Airport",
    "latitude": 35.8866,
    "longitude": 71.8006
  },
  "OPDI": {
    "airport": "Dera Ismail Khan Airport",
    "latitude": 31.9094,
    "longitude": 70.8966
  },
  "OPKT": {
    "airport": "PAF Base Kohat",
    "latitude": 33.57,
    "longitude": 71.44
  },
  "OPPC": {
    "airport": "Parachinar Airport",
    "latitude": 33.9021,
    "longitude": 70.0716
  },
  "OPPS": {
    "airport": "Bacha Khan International Airport",
    "latitude": 33.9939,
    "longitude": 71.5146
  },
  "OPSS": {
    "airport": "Saidu Sharif Airport",
    "latitude": 34.8136,
    "longitude": 72.3528
  },
  "OPTA": {
    "airport": "Tarbela Dam Airport",
    "latitude": 33.9861,
    "longitude": 72.6114
  },
  "OPWN": {
    "airport": "Wana Airport",
    "latitude": 32.3047,
    "longitude": 69.5704
  },
  "OPBW": {
    "airport": "Bahawalpur Airport",
    "latitude": 29.3481,
    "longitude": 71.718
  },
  "OPDG": {
    "airport": "Dera Ghazi Khan International Airport",
    "latitude": 29.961,
    "longitude": 70.4859
  },
  "OPLA": {
    "airport": "Allama Iqbal International Airport",
    "latitude": 31.5216,
    "longitude": 74.4036
  },
  "OPFA": {
    "airport": "Faisalabad International Airport",
    "latitude": 31.365,
    "longitude": 72.9948
  },
  "OPMT": {
    "airport": "Multan International Airport",
    "latitude": 30.2032,
    "longitude": 71.4191
  },
  "OPMI": {
    "airport": "PAF Base M.M. Alam",
    "latitude": 32.5631,
    "longitude": 71.5707
  },
  "OPRK": {
    "airport": "Shaikh Zayed International Airport",
    "latitude": 28.3839,
    "longitude": 70.2796
  },
  "OPSR": {
    "airport": "PAF Base Mushaf",
    "latitude": 32.0486,
    "longitude": 72.665
  },
  "OPST": {
    "airport": "Sialkot International Airport",
    "latitude": 32.5356,
    "longitude": 74.3639
  },
  "OPTH": {
    "airport": "Talhar Airport",
    "latitude": 24.8415,
    "longitude": 68.8384
  },
  "OPDD": {
    "airport": "Dadu Airport",
    "latitude": 26.7408,
    "longitude": 67.6666
  },
  "OPKD": {
    "airport": "Hyderabad Airport",
    "latitude": 25.3181,
    "longitude": 68.3661
  },
  "OPJA": {
    "airport": "PAF Base Shahbaz",
    "latitude": 28.2842,
    "longitude": 68.4497
  },
  "OPKC": {
    "airport": "Jinnah International Airport",
    "latitude": 24.9065,
    "longitude": 67.1608
  },
  "OPMJ": {
    "airport": "Moenjodaro Airport",
    "latitude": 27.3352,
    "longitude": 68.1431
  },
  "OPMP": {
    "airport": "Sindhri Airport",
    "latitude": 25.6828,
    "longitude": 69.0728
  },
  "OPSW": {
    "airport": "Sawan Airport",
    "latitude": 26.9662,
    "longitude": 68.8781
  },
  "OPSK": {
    "airport": "Sukkur Airport",
    "latitude": 27.722,
    "longitude": 68.7917
  },
  "OPSN": {
    "airport": "Sehwan Sharif Airport",
    "latitude": 26.4731,
    "longitude": 67.7172
  },
  "OPNH": {
    "airport": "Nawabshah Airport",
    "latitude": 26.2194,
    "longitude": 68.3901
  },
  "EPWR": {
    "airport": "Copernicus Airport Wroclaw",
    "latitude": 51.1027,
    "longitude": 16.8858
  },
  "EPBY": {
    "airport": "Bydgoszcz Ignacy Jan Paderewski Airport",
    "latitude": 53.0968,
    "longitude": 17.9777
  },
  "EPLL": {
    "airport": "Lodz Wladyslaw Reymont Airport",
    "latitude": 51.7219,
    "longitude": 19.3981
  },
  "EPBP": {
    "airport": "Biala Podlaska Airport",
    "latitude": 52.0008,
    "longitude": 23.1325
  },
  "EPLB": {
    "airport": "Lublin Airport",
    "latitude": 51.2403,
    "longitude": 22.7136
  },
  "EPZG": {
    "airport": "Zielona Gora Airport",
    "latitude": 52.1385,
    "longitude": 15.7986
  },
  "EPKK": {
    "airport": "John Paul II International Airport Krakow-Balice",
    "latitude": 50.0777,
    "longitude": 19.7848
  },
  "EPRA": {
    "airport": "Radom Airport",
    "latitude": 51.3892,
    "longitude": 21.2133
  },
  "EPWA": {
    "airport": "Warsaw Chopin Airport",
    "latitude": 52.1657,
    "longitude": 20.9671
  },
  "EPMO": {
    "airport": "Warsaw Modlin Airport",
    "latitude": 52.4511,
    "longitude": 20.6518
  },
  "EPRZ": {
    "airport": "Rzeszow-Jasionka Airport",
    "latitude": 50.11,
    "longitude": 22.019
  },
  "EPGD": {
    "airport": "Gdansk Lech Walesa Airport",
    "latitude": 54.3776,
    "longitude": 18.4662
  },
  "EPRU": {
    "airport": "Czestochowa-Rudniki Airport",
    "latitude": 50.885,
    "longitude": 19.2047
  },
  "EPKT": {
    "airport": "Katowice International Airport",
    "latitude": 50.4743,
    "longitude": 19.08
  },
  "EPSY": {
    "airport": "Olsztyn-Mazury Regional Airport",
    "latitude": 53.4819,
    "longitude": 20.9377
  },
  "EPPO": {
    "airport": "Poznań–Ławica Henryk Wieniawski Airport",
    "latitude": 52.421,
    "longitude": 16.8263
  },
  "EPKZ": {
    "airport": "Koszalin-Zegrze Pomorskie Airport",
    "latitude": 54.0425,
    "longitude": 16.2656
  },
  "EPSC": {
    "airport": "Solidarity Szczecin-Goleniow Airport",
    "latitude": 53.5847,
    "longitude": 14.9022
  },
  "LFVP": {
    "airport": "Saint-Pierre Airport",
    "latitude": 46.7629,
    "longitude": -56.1731
  },
  "LFVM": {
    "airport": "Miquelon Airport",
    "latitude": 47.0955,
    "longitude": -56.3803
  },
  "TJSJ": {
    "airport": "Luis Munoz Marin International Airport",
    "latitude": 18.4394,
    "longitude": -66.0018
  },
  "TJPS": {
    "airport": "Mercedita Airport",
    "latitude": 18.0083,
    "longitude": -66.563
  },
  "TJIG": {
    "airport": "Fernando Luis Ribas Dominicci Airport",
    "latitude": 18.4568,
    "longitude": -66.0981
  },
  "LVGZ": {
    "airport": "Yasser Arafat International Airport",
    "latitude": 31.2464,
    "longitude": 34.2761
  },
  "LPBJ": {
    "airport": "Beja Airport",
    "latitude": 38.0789,
    "longitude": -7.9324
  },
  "LPBR": {
    "airport": "Braga Airport",
    "latitude": 41.5871,
    "longitude": -8.44514
  },
  "LPBG": {
    "airport": "Braganca Airport",
    "latitude": 41.8578,
    "longitude": -6.70713
  },
  "LPCO": {
    "airport": "Coimbra Airport",
    "latitude": 40.1576,
    "longitude": -8.46984
  },
  "LPFR": {
    "airport": "Faro Airport",
    "latitude": 37.0144,
    "longitude": -7.96591
  },
  "LPPM": {
    "airport": "Portimao Airport",
    "latitude": 37.1493,
    "longitude": -8.58396
  },
  "LPCS": {
    "airport": "Cascais Municipal Aerodrome",
    "latitude": 38.725,
    "longitude": -9.35523
  },
  "LPPT": {
    "airport": "Lisbon Portela Airport",
    "latitude": 38.7813,
    "longitude": -9.13592
  },
  "LPSI": {
    "airport": "Sines Airport",
    "latitude": 37.9417,
    "longitude": -8.8173
  },
  "LPPR": {
    "airport": "Francisco Sá Carneiro Airport",
    "latitude": 41.2356,
    "longitude": -8.67806
  },
  "LPMA": {
    "airport": "Madeira Airport",
    "latitude": 32.6979,
    "longitude": -16.7745
  },
  "LPPS": {
    "airport": "Porto Santo Airport",
    "latitude": 33.0734,
    "longitude": -16.35
  },
  "LPCR": {
    "airport": "Corvo Airport",
    "latitude": 39.6715,
    "longitude": -31.1136
  },
  "LPFL": {
    "airport": "Flores Airport",
    "latitude": 39.4553,
    "longitude": -31.1314
  },
  "LPGR": {
    "airport": "Graciosa Airport",
    "latitude": 39.0922,
    "longitude": -28.0298
  },
  "LPHR": {
    "airport": "Horta Airport",
    "latitude": 38.5199,
    "longitude": -28.7159
  },
  "LPPD": {
    "airport": "Joao Paulo II Airport",
    "latitude": 37.7412,
    "longitude": -25.6979
  },
  "LPPI": {
    "airport": "Pico Airport",
    "latitude": 38.5543,
    "longitude": -28.4413
  },
  "LPSJ": {
    "airport": "Sao Jorge Airport",
    "latitude": 38.6655,
    "longitude": -28.1758
  },
  "LPAZ": {
    "airport": "Santa Maria Airport",
    "latitude": 36.9714,
    "longitude": -25.1706
  },
  "LPLA": {
    "airport": "Lajes Field",
    "latitude": 38.7618,
    "longitude": -27.0908
  },
  "LPCH": {
    "airport": "Chaves Airport",
    "latitude": 41.7224,
    "longitude": -7.46306
  },
  "LPVR": {
    "airport": "Vila Real Airport",
    "latitude": 41.2743,
    "longitude": -7.72047
  },
  "LPVZ": {
    "airport": "Viseu Airport",
    "latitude": 40.7255,
    "longitude": -7.88899
  },
  "PTRO": {
    "airport": "Roman Tmetuchl International Airport",
    "latitude": 7.36731,
    "longitude": 134.544
  },
  "SGOL": {
    "airport": "Fuerte Olimpo Airport",
    "latitude": -21.0452,
    "longitude": -57.8825
  },
  "SGES": {
    "airport": "Guarani  International Airport",
    "latitude": -25.4545,
    "longitude": -54.8427
  },
  "SGPJ": {
    "airport": "Dr. Augusto Roberto Fuster International Airport",
    "latitude": -22.64,
    "longitude": -55.83
  },
  "SGME": {
    "airport": "Dr. Luis Maria Argana International Airport",
    "latitude": -22.05,
    "longitude": -60.62
  },
  "SGFI": {
    "airport": "Filadelfia Airport",
    "latitude": -22.3605,
    "longitude": -60.0536
  },
  "SGAS": {
    "airport": "Silvio Pettirossi International Airport",
    "latitude": -25.24,
    "longitude": -57.52
  },
  "SGBN": {
    "airport": "Bahia Negra Airport",
    "latitude": -20.2246,
    "longitude": -58.1792
  },
  "SGCO": {
    "airport": "Teniente Coronel Carmelo Peralta Airport",
    "latitude": -23.4424,
    "longitude": -57.4273
  },
  "SGEN": {
    "airport": "Teniente Amin Ayub Gonzalez Airport",
    "latitude": -27.2274,
    "longitude": -55.8375
  },
  "SGAY": {
    "airport": "Juan de Ayolas Airport",
    "latitude": -27.3706,
    "longitude": -56.8541
  },
  "SGPI": {
    "airport": "Carlos Miguel Jimenez Airport",
    "latitude": -26.8812,
    "longitude": -58.318
  },
  "OTBD": {
    "airport": "Doha International Airport",
    "latitude": 25.2611,
    "longitude": 51.5651
  },
  "OTHH": {
    "airport": "Hamad International Airport",
    "latitude": 25.2731,
    "longitude": 51.6081
  },
  "OTBH": {
    "airport": "Al Udeid Air Base",
    "latitude": 25.1173,
    "longitude": 51.315
  },
  "FMEE": {
    "airport": "Roland Garros Airport",
    "latitude": -20.8871,
    "longitude": 55.5103
  },
  "FMEP": {
    "airport": "Pierrefonds Airport",
    "latitude": -21.3209,
    "longitude": 55.425
  },
  "LRAR": {
    "airport": "Arad International Airport",
    "latitude": 46.1766,
    "longitude": 21.262
  },
  "LRBC": {
    "airport": "Bacau International Airport",
    "latitude": 46.5219,
    "longitude": 26.9103
  },
  "LROD": {
    "airport": "Oradea International Airport",
    "latitude": 47.0253,
    "longitude": 21.9025
  },
  "LRBV": {
    "airport": "Brasov Airport",
    "latitude": 45.6942,
    "longitude": 25.5172
  },
  "LRBS": {
    "airport": "Aurel Vlaicu International Airport",
    "latitude": 44.496,
    "longitude": 26.0814
  },
  "LRCS": {
    "airport": "Caransebes Airport",
    "latitude": 45.42,
    "longitude": 22.2533
  },
  "LRCL": {
    "airport": "Cluj-Napoca International Airport",
    "latitude": 46.7852,
    "longitude": 23.6862
  },
  "LRCK": {
    "airport": "Mihail Kogalniceanu International Airport",
    "latitude": 44.3622,
    "longitude": 28.4883
  },
  "LRCV": {
    "airport": "Craiova International Airport",
    "latitude": 44.3181,
    "longitude": 23.8886
  },
  "LRIA": {
    "airport": "Iasi International Airport",
    "latitude": 47.1785,
    "longitude": 27.6206
  },
  "LROP": {
    "airport": "Bucharest Henri Coandă International Airport",
    "latitude": 44.5711,
    "longitude": 26.085
  },
  "LRBM": {
    "airport": "Baia Mare Airport",
    "latitude": 47.6606,
    "longitude": 23.4673
  },
  "LRTM": {
    "airport": "Targu Mures International Airport",
    "latitude": 46.4677,
    "longitude": 24.4125
  },
  "LRSM": {
    "airport": "Satu Mare International Airport",
    "latitude": 47.7033,
    "longitude": 22.8857
  },
  "LRSB": {
    "airport": "Sibiu International Airport",
    "latitude": 45.7856,
    "longitude": 24.0913
  },
  "LRSV": {
    "airport": "Suceava International Airport (Stefan cel Mare Int'l)",
    "latitude": 47.6875,
    "longitude": 26.3541
  },
  "LRTR": {
    "airport": "Timisoara Traian Vuia International Airport",
    "latitude": 45.8099,
    "longitude": 21.3379
  },
  "LRTC": {
    "airport": "Tulcea Danube Delta Airport",
    "latitude": 45.0625,
    "longitude": 28.7143
  },
  "LYBE": {
    "airport": "Belgrade Nikola Tesla Airport",
    "latitude": 44.8184,
    "longitude": 20.3091
  },
  "LYBT": {
    "airport": "Batajnica Air Base",
    "latitude": 44.9353,
    "longitude": 20.2575
  },
  "LYNI": {
    "airport": "Nis Constantine the Great Airport",
    "latitude": 43.3373,
    "longitude": 21.8537
  },
  "LYKV": {
    "airport": "Morava Aerodrom",
    "latitude": 43.8274,
    "longitude": 20.5812
  },
  "LYUZ": {
    "airport": "Uzice-Ponikve Airport",
    "latitude": 43.898,
    "longitude": 19.6972
  },
  "UNBG": {
    "airport": "Gorno-Altaysk Airport",
    "latitude": 51.9667,
    "longitude": 85.8333
  },
  "UNBB": {
    "airport": "Barnaul Airport",
    "latitude": 53.3638,
    "longitude": 83.5385
  },
  "UHBB": {
    "airport": "Ignatyevo Airport",
    "latitude": 50.4254,
    "longitude": 127.412
  },
  "UHBI": {
    "airport": "Magdagachi Airport",
    "latitude": 53.4733,
    "longitude": 125.795
  },
  "UHBW": {
    "airport": "Tynda Airport",
    "latitude": 55.2842,
    "longitude": 124.779
  },
  "ULAA": {
    "airport": "Talagi Airport",
    "latitude": 64.6003,
    "longitude": 40.7167
  },
  "ULAS": {
    "airport": "Solovki Airport",
    "latitude": 65.03,
    "longitude": 35.7333
  },
  "ULKK": {
    "airport": "Kotlas Airport",
    "latitude": 61.2358,
    "longitude": 46.6975
  },
  "ULAL": {
    "airport": "Leshukonskoye Airport",
    "latitude": 64.896,
    "longitude": 45.723
  },
  "URWA": {
    "airport": "Narimanovo Airport",
    "latitude": 46.2833,
    "longitude": 48.0063
  },
  "UWUB": {
    "airport": "Beloretsk Airport",
    "latitude": 53.9381,
    "longitude": 58.34
  },
  "UWUF": {
    "airport": "Neftekamsk Airport",
    "latitude": 56.1069,
    "longitude": 54.3472
  },
  "UWUK": {
    "airport": "Oktyabrsky Airport",
    "latitude": 54.44,
    "longitude": 53.3883
  },
  "UWUU": {
    "airport": "Ufa International Airport",
    "latitude": 54.5575,
    "longitude": 55.8744
  },
  "UUOB": {
    "airport": "Belgorod International Airport",
    "latitude": 50.6438,
    "longitude": 36.5901
  },
  "UUBP": {
    "airport": "Bryansk International Airport",
    "latitude": 53.2142,
    "longitude": 34.1764
  },
  "UECT": {
    "airport": "Talakan Airport",
    "latitude": 59.8764,
    "longitude": 111.044
  },
  "UIUU": {
    "airport": "Baikal International Airport",
    "latitude": 51.8078,
    "longitude": 107.438
  },
  "URMG": {
    "airport": "Grozny Airport",
    "latitude": 43.3883,
    "longitude": 45.6986
  },
  "USCC": {
    "airport": "Chelyabinsk Airport",
    "latitude": 55.3058,
    "longitude": 61.5033
  },
  "USCM": {
    "airport": "Magnitogorsk International Airport",
    "latitude": 53.3931,
    "longitude": 58.7557
  },
  "UHMA": {
    "airport": "Ugolny Airport",
    "latitude": 64.7349,
    "longitude": 177.741
  },
  "UHMK": {
    "airport": "Keperveyem Airport",
    "latitude": 67.845,
    "longitude": 166.14
  },
  "UHMO": {
    "airport": "Markovo Airport",
    "latitude": 64.667,
    "longitude": 170.417
  },
  "UHMD": {
    "airport": "Provideniya Bay Airport",
    "latitude": 64.3781,
    "longitude": -173.243
  },
  "UHMP": {
    "airport": "Pevek Airport",
    "latitude": 69.7833,
    "longitude": 170.597
  },
  "UWKS": {
    "airport": "Cheboksary Airport",
    "latitude": 56.0903,
    "longitude": 47.3473
  },
  "URML": {
    "airport": "Uytash Airport",
    "latitude": 42.8168,
    "longitude": 47.6523
  },
  "URMS": {
    "airport": "Magas Airport (Sleptsovskaya Airport)",
    "latitude": 43.3223,
    "longitude": 45.0126
  },
  "UIBB": {
    "airport": "Bratsk Airport",
    "latitude": 56.3706,
    "longitude": 101.698
  },
  "UIKE": {
    "airport": "Erbogachen Airport",
    "latitude": 61.275,
    "longitude": 108.03
  },
  "UIII": {
    "airport": "International Airport Irkutsk",
    "latitude": 52.268,
    "longitude": 104.389
  },
  "UUBI": {
    "airport": "Ivanovo Yuzhny Airport",
    "latitude": 56.9394,
    "longitude": 40.9408
  },
  "UIKK": {
    "airport": "Kirensk Airport",
    "latitude": 57.773,
    "longitude": 108.064
  },
  "UIKB": {
    "airport": "Bodaybo Airport",
    "latitude": 57.8661,
    "longitude": 114.243
  },
  "UIBS": {
    "airport": "Ust-Ilimsk Airport",
    "latitude": 58.1361,
    "longitude": 102.565
  },
  "UITT": {
    "airport": "Ust-Kut Airport",
    "latitude": 56.8567,
    "longitude": 105.73
  },
  "URMN": {
    "airport": "Nalchik Airport",
    "latitude": 43.5129,
    "longitude": 43.6366
  },
  "UMKK": {
    "airport": "Khrabrovo Airport",
    "latitude": 54.89,
    "longitude": 20.5926
  },
  "URWI": {
    "airport": "Elista Airport",
    "latitude": 46.3739,
    "longitude": 44.3309
  },
  "UUBC": {
    "airport": "Grabtsevo Airport",
    "latitude": 54.55,
    "longitude": 36.3667
  },
  "UHPP": {
    "airport": "Petropavlovsk-Kamchatsky Airport (Yelizovo Airport)",
    "latitude": 53.1679,
    "longitude": 158.454
  },
  "ULPB": {
    "airport": "Petrozavodsk Airport (Besovets Airport)",
    "latitude": 61.8852,
    "longitude": 34.1547
  },
  "UNEE": {
    "airport": "Kemerovo International Airport",
    "latitude": 55.2701,
    "longitude": 86.1072
  },
  "UNWW": {
    "airport": "Spichenkovo Airport",
    "latitude": 53.8114,
    "longitude": 86.8772
  },
  "UHNB": {
    "airport": "Bogorodskoye Airport",
    "latitude": 52.38,
    "longitude": 140.448
  },
  "UHKM": {
    "airport": "Sovetskaya Gavan Airport",
    "latitude": 48.927,
    "longitude": 140.034
  },
  "UHHH": {
    "airport": "Khabarovsk Novy Airport",
    "latitude": 48.528,
    "longitude": 135.188
  },
  "UHKK": {
    "airport": "Komsomolsk-on-Amur Airport",
    "latitude": 50.409,
    "longitude": 136.934
  },
  "UHNN": {
    "airport": "Nikolayevsk-on-Amur Airport",
    "latitude": 53.155,
    "longitude": 140.65
  },
  "UHOO": {
    "airport": "Okhotsk Airport",
    "latitude": 59.4101,
    "longitude": 143.057
  },
  "UNAA": {
    "airport": "Abakan International Airport",
    "latitude": 53.74,
    "longitude": 91.385
  },
  "USHQ": {
    "airport": "Beloyarsk Airport",
    "latitude": 63.6869,
    "longitude": 66.6986
  },
  "USHH": {
    "airport": "Khanty-Mansiysk Airport",
    "latitude": 61.0285,
    "longitude": 69.0861
  },
  "USHI": {
    "airport": "Igrim Airport",
    "latitude": 63.1988,
    "longitude": 64.4393
  },
  "USRK": {
    "airport": "Kogalym International Airport",
    "latitude": 62.1904,
    "longitude": 74.5338
  },
  "USHK": {
    "airport": "Kondinskoye Airport",
    "latitude": 59.6551,
    "longitude": 67.43
  },
  "USRN": {
    "airport": "Nefteyugansk Airport",
    "latitude": 61.1083,
    "longitude": 72.65
  },
  "USNN": {
    "airport": "Nizhnevartovsk Airport",
    "latitude": 60.9493,
    "longitude": 76.4836
  },
  "USHN": {
    "airport": "Nyagan Airport",
    "latitude": 62.11,
    "longitude": 65.615
  },
  "USHS": {
    "airport": "Sovetsky Airport",
    "latitude": 61.3266,
    "longitude": 63.6019
  },
  "USNR": {
    "airport": "Raduzhny Airport",
    "latitude": 62.1586,
    "longitude": 77.3289
  },
  "USRR": {
    "airport": "Surgut International Airport",
    "latitude": 61.3437,
    "longitude": 73.4018
  },
  "USHU": {
    "airport": "Uray Airport",
    "latitude": 60.1033,
    "longitude": 64.8267
  },
  "USKK": {
    "airport": "Pobedilovo Airport",
    "latitude": 58.5033,
    "longitude": 49.3483
  },
  "UUYI": {
    "airport": "Inta Airport",
    "latitude": 66.0548,
    "longitude": 60.1103
  },
  "UUYP": {
    "airport": "Pechora Airport",
    "latitude": 65.1211,
    "longitude": 57.1308
  },
  "UUYY": {
    "airport": "Syktyvkar Airport",
    "latitude": 61.647,
    "longitude": 50.8451
  },
  "UUYH": {
    "airport": "Ukhta Airport",
    "latitude": 63.5669,
    "longitude": 53.8047
  },
  "UUYS": {
    "airport": "Usinsk Airport",
    "latitude": 66.0047,
    "longitude": 57.3672
  },
  "UUYX": {
    "airport": "Ust-Tsilma Airport",
    "latitude": 65.4373,
    "longitude": 52.2003
  },
  "UUYW": {
    "airport": "Vorkuta Airport",
    "latitude": 67.4886,
    "longitude": 63.9931
  },
  "UUBA": {
    "airport": "Kostroma Airport",
    "latitude": 57.7969,
    "longitude": 41.0194
  },
  "URKA": {
    "airport": "Anapa Airport",
    "latitude": 45.0021,
    "longitude": 37.3473
  },
  "URSS": {
    "airport": "Sochi International Airport",
    "latitude": 43.4499,
    "longitude": 39.9566
  },
  "URKG": {
    "airport": "Gelendzhik Airport",
    "latitude": 44.5821,
    "longitude": 38.0125
  },
  "URKK": {
    "airport": "Krasnodar International Airport (Pashkovsky Airport)",
    "latitude": 45.0347,
    "longitude": 39.1705
  },
  "UNKS": {
    "airport": "Achinsk Airport",
    "latitude": 56.2683,
    "longitude": 90.5708
  },
  "UODD": {
    "airport": "Dikson Airport",
    "latitude": 73.5178,
    "longitude": 80.3797
  },
  "UNII": {
    "airport": "Yeniseysk Airport",
    "latitude": 58.4742,
    "longitude": 92.1125
  },
  "UOHH": {
    "airport": "Khatanga Airport",
    "latitude": 71.9781,
    "longitude": 102.491
  },
  "UOII": {
    "airport": "Igarka Airport",
    "latitude": 67.4372,
    "longitude": 86.6219
  },
  "UNKL": {
    "airport": "Yemelyanovo International Airport",
    "latitude": 56.1729,
    "longitude": 92.4933
  },
  "UOOO": {
    "airport": "Alykel Airport",
    "latitude": 69.3111,
    "longitude": 87.3322
  },
  "UNIP": {
    "airport": "Podkamennaya Tunguska Airport",
    "latitude": 61.5897,
    "longitude": 89.994
  },
  "UOTT": {
    "airport": "Turukhansk Airport",
    "latitude": 65.7972,
    "longitude": 87.9353
  },
  "USUU": {
    "airport": "Kurgan Airport",
    "latitude": 55.4753,
    "longitude": 65.4156
  },
  "UUOK": {
    "airport": "Kursk Vostochny Airport",
    "latitude": 51.7506,
    "longitude": 36.2956
  },
  "ULSS": {
    "airport": "Rzhevka Airport",
    "latitude": 59.98,
    "longitude": 30.5883
  },
  "ULLI": {
    "airport": "Pulkovo Airport",
    "latitude": 59.8003,
    "longitude": 30.2625
  },
  "UUOL": {
    "airport": "Lipetsk Airport",
    "latitude": 52.7028,
    "longitude": 39.5378
  },
  "UHMM": {
    "airport": "Sokol Airport",
    "latitude": 59.911,
    "longitude": 150.72
  },
  "UHMW": {
    "airport": "Severo-Evensk Airport",
    "latitude": 29.1667,
    "longitude": 70.4333
  },
  "UWKJ": {
    "airport": "Yoshkar-Ola Airport",
    "latitude": 56.7006,
    "longitude": 47.9047
  },
  "UWPS": {
    "airport": "Saransk Airport",
    "latitude": 54.1251,
    "longitude": 45.2123
  },
  "UUBB": {
    "airport": "Bykovo Airport",
    "latitude": 55.6226,
    "longitude": 38.0661
  },
  "UUDD": {
    "airport": "Domodedovo Airport",
    "latitude": 55.4102,
    "longitude": 37.902
  },
  "UUEE": {
    "airport": "Sheremetyevo Alexander S. Pushkin International Airport",
    "latitude": 55.9728,
    "longitude": 37.4147
  },
  "UUMU": {
    "airport": "Chkalovsky Airport",
    "latitude": 55.8783,
    "longitude": 38.0617
  },
  "UUMO": {
    "airport": "Ostafyevo International Airport",
    "latitude": 55.5117,
    "longitude": 37.5072
  },
  "UUWW": {
    "airport": "Vnukovo International Airport",
    "latitude": 55.5979,
    "longitude": 37.2709
  },
  "UUBW": {
    "airport": "Ramenskoye Airport (Zhukovsky Airport)",
    "latitude": 55.5533,
    "longitude": 38.15
  },
  "ULMK": {
    "airport": "Kirovsk-Apatity Airport (Khibiny Airport)",
    "latitude": 67.4633,
    "longitude": 33.5883
  },
  "ULMM": {
    "airport": "Murmansk Airport",
    "latitude": 68.7817,
    "longitude": 32.7508
  },
  "ULDD": {
    "airport": "Amderma Airport",
    "latitude": 69.7633,
    "longitude": 61.5564
  },
  "ULAM": {
    "airport": "Naryan-Mar Airport",
    "latitude": 67.64,
    "longitude": 53.1219
  },
  "ULDW": {
    "airport": "Varandey Airport",
    "latitude": 68.8485,
    "longitude": 58.2014
  },
  "ULNN": {
    "airport": "Novgorod Airport",
    "latitude": 58.4933,
    "longitude": 31.2417
  },
  "UWGG": {
    "airport": "Nizhny Novgorod International Airport (Strigino Airport)",
    "latitude": 56.2301,
    "longitude": 43.784
  },
  "UNNT": {
    "airport": "Tolmachevo Airport",
    "latitude": 55.0126,
    "longitude": 82.6507
  },
  "UNOO": {
    "airport": "Omsk Tsentralny Airport",
    "latitude": 54.967,
    "longitude": 73.3105
  },
  "UWOR": {
    "airport": "Orsk Airport",
    "latitude": 51.0725,
    "longitude": 58.5956
  },
  "UWOO": {
    "airport": "Orenburg Tsentralny Airport",
    "latitude": 51.7958,
    "longitude": 55.4567
  },
  "UUOR": {
    "airport": "Oryol Yuzhny Airport",
    "latitude": 52.9347,
    "longitude": 36.0022
  },
  "UWPP": {
    "airport": "Penza Airport (Ternovka Airport)",
    "latitude": 53.1106,
    "longitude": 45.0211
  },
  "USPP": {
    "airport": "Perm International Airport (Bolshoye Savino Airport)",
    "latitude": 57.9145,
    "longitude": 56.0212
  },
  "UHTG": {
    "airport": "Amgu Airport",
    "latitude": 45.8413,
    "longitude": 137.674
  },
  "UHWP": {
    "airport": "Plastun Airport",
    "latitude": 44.815,
    "longitude": 136.292
  },
  "UHWW": {
    "airport": "Vladivostok International Airport",
    "latitude": 43.399,
    "longitude": 132.148
  },
  "ULOO": {
    "airport": "Pskov Airport",
    "latitude": 57.7839,
    "longitude": 28.3956
  },
  "ULOL": {
    "airport": "Velikiye Luki Airport",
    "latitude": 56.3811,
    "longitude": 30.6081
  },
  "URRR": {
    "airport": "Rostov-on-Don Airport",
    "latitude": 47.2583,
    "longitude": 39.8183
  },
  "URRP": {
    "airport": "Platov International Airport",
    "latitude": 47.4939,
    "longitude": 39.9247
  },
  "URRT": {
    "airport": "Taganrog Airport",
    "latitude": 47.1983,
    "longitude": 38.8492
  },
  "URRY": {
    "airport": "Volgodonsk Airport",
    "latitude": 47.6821,
    "longitude": 42.0728
  },
  "UUWR": {
    "airport": "Turlatovo Airport",
    "latitude": 54.5559,
    "longitude": 39.8552
  },
  "UEEA": {
    "airport": "Aldan Airport",
    "latitude": 58.6028,
    "longitude": 125.409
  },
  "UESG": {
    "airport": "Belaya Gora Airport",
    "latitude": 68.5566,
    "longitude": 146.232
  },
  "UESO": {
    "airport": "Chokurdakh Airport",
    "latitude": 70.6231,
    "longitude": 147.902
  },
  "UESS": {
    "airport": "Chersky Airport",
    "latitude": 68.7406,
    "longitude": 161.338
  },
  "UEMM": {
    "airport": "Magan Airport",
    "latitude": 62.1035,
    "longitude": 129.545
  },
  "UEST": {
    "airport": "Tiksi Airport",
    "latitude": 71.6977,
    "longitude": 128.903
  },
  "UEMH": {
    "airport": "Teply Klyuch Airport",
    "latitude": 62.789,
    "longitude": 136.855
  },
  "UERR": {
    "airport": "Mirny Airport",
    "latitude": 62.5347,
    "longitude": 114.039
  },
  "UEMA": {
    "airport": "Moma Airport",
    "latitude": 66.4509,
    "longitude": 143.262
  },
  "UELL": {
    "airport": "Chulman Neryungri Airport",
    "latitude": 56.9139,
    "longitude": 124.914
  },
  "UENN": {
    "airport": "Nyurba Airport",
    "latitude": 63.295,
    "longitude": 118.337
  },
  "UEMO": {
    "airport": "Olyokminsk Airport",
    "latitude": 60.3975,
    "longitude": 120.471
  },
  "UERO": {
    "airport": "Olenyok Airport",
    "latitude": 68.515,
    "longitude": 112.48
  },
  "UERP": {
    "airport": "Polyarny Airport",
    "latitude": 66.4004,
    "longitude": 112.03
  },
  "UESK": {
    "airport": "Srednekolymsk Airport",
    "latitude": 67.4805,
    "longitude": 153.736
  },
  "UEBS": {
    "airport": "Sakkyryr Airport",
    "latitude": 67.792,
    "longitude": 130.394
  },
  "UENS": {
    "airport": "Suntar Airport",
    "latitude": 62.185,
    "longitude": 117.635
  },
  "UERS": {
    "airport": "Saskylakh Airport",
    "latitude": 71.9279,
    "longitude": 114.08
  },
  "UEBT": {
    "airport": "Ust-Kuyga Airport",
    "latitude": 70.011,
    "longitude": 135.645
  },
  "UERL": {
    "airport": "Lensk Airport",
    "latitude": 60.7206,
    "longitude": 114.826
  },
  "UEMU": {
    "airport": "Ust-Maya Airport",
    "latitude": 60.357,
    "longitude": 134.435
  },
  "UEMT": {
    "airport": "Ust-Nera Airport",
    "latitude": 64.55,
    "longitude": 143.115
  },
  "UENI": {
    "airport": "Verkhnevilyuysk Airport",
    "latitude": 63.4581,
    "longitude": 120.269
  },
  "UENW": {
    "airport": "Vilyuysk Airport",
    "latitude": 63.7567,
    "longitude": 121.693
  },
  "UEEE": {
    "airport": "Yakutsk Airport",
    "latitude": 62.0933,
    "longitude": 129.771
  },
  "UEVV": {
    "airport": "Zhigansk Airport",
    "latitude": 66.7965,
    "longitude": 123.361
  },
  "UESU": {
    "airport": "Zyryanka Airport",
    "latitude": 65.7485,
    "longitude": 150.889
  },
  "UHSB": {
    "airport": "Burevestnik Airport",
    "latitude": 44.92,
    "longitude": 147.622
  },
  "UHSM": {
    "airport": "Yuzhno-Kurilsk Mendeleyevo Airport",
    "latitude": 43.9584,
    "longitude": 145.683
  },
  "UHSK": {
    "airport": "Shakhtyorsk Airport",
    "latitude": 49.1903,
    "longitude": 142.083
  },
  "UHSI": {
    "airport": "Iturup Airport",
    "latitude": 45.2564,
    "longitude": 147.955
  },
  "UHSN": {
    "airport": "Nogliki Airport",
    "latitude": 51.7801,
    "longitude": 143.139
  },
  "UHSH": {
    "airport": "Okha Airport (Novostroyka Airport)",
    "latitude": 53.52,
    "longitude": 142.89
  },
  "UHSS": {
    "airport": "Yuzhno-Sakhalinsk Airport (Khomutovo Airport)",
    "latitude": 46.8887,
    "longitude": 142.718
  },
  "UHSO": {
    "airport": "Zonalnoye Airport",
    "latitude": 50.6692,
    "longitude": 142.761
  },
  "UWWW": {
    "airport": "Kurumoch International Airport",
    "latitude": 53.5049,
    "longitude": 50.1643
  },
  "UWSB": {
    "airport": "Balakovo Airport",
    "latitude": 51.8583,
    "longitude": 47.7456
  },
  "UWSS": {
    "airport": "Saratov Tsentralny Airport",
    "latitude": 51.565,
    "longitude": 46.0467
  },
  "URMO": {
    "airport": "Beslan Airport",
    "latitude": 43.2051,
    "longitude": 44.6066
  },
  "UUBS": {
    "airport": "Smolensk South Airport",
    "latitude": 54.824,
    "longitude": 32.025
  },
  "URMM": {
    "airport": "Mineralnye Vody Airport",
    "latitude": 44.2251,
    "longitude": 43.0819
  },
  "URMT": {
    "airport": "Stavropol Shpakovskoye Airport",
    "latitude": 45.1092,
    "longitude": 42.1128
  },
  "USSS": {
    "airport": "Koltsovo International Airport",
    "latitude": 56.7431,
    "longitude": 60.8027
  },
  "UUOT": {
    "airport": "Tambov Donskoye Airport",
    "latitude": 52.8061,
    "longitude": 41.4828
  },
  "UWKD": {
    "airport": "Kazan International Airport",
    "latitude": 55.6062,
    "longitude": 49.2787
  },
  "UWKE": {
    "airport": "Begishevo Airport",
    "latitude": 55.5647,
    "longitude": 52.0925
  },
  "UWKB": {
    "airport": "Bugulma Airport",
    "latitude": 54.64,
    "longitude": 52.8017
  },
  "UNSS": {
    "airport": "Strezhevoy Airport",
    "latitude": 60.7094,
    "longitude": 77.66
  },
  "UNTT": {
    "airport": "Bogashevo Airport",
    "latitude": 56.3803,
    "longitude": 85.2083
  },
  "UUBT": {
    "airport": "Klokovo Airport",
    "latitude": 54.239,
    "longitude": 37.6
  },
  "UUEM": {
    "airport": "Migalovo Air Base",
    "latitude": 56.8247,
    "longitude": 35.7577
  },
  "USTR": {
    "airport": "Roshchino International Airport",
    "latitude": 57.1896,
    "longitude": 65.3243
  },
  "USTO": {
    "airport": "Tobolsk Airport",
    "latitude": 58.1358,
    "longitude": 68.2319
  },
  "UNKY": {
    "airport": "Kyzyl Airport",
    "latitude": 51.6694,
    "longitude": 94.4006
  },
  "USII": {
    "airport": "Izhevsk Airport",
    "latitude": 56.8281,
    "longitude": 53.4575
  },
  "UWLL": {
    "airport": "Ulyanovsk Baratayevka Airport",
    "latitude": 54.2683,
    "longitude": 48.2267
  },
  "UWLW": {
    "airport": "Ulyanovsk Vostochny Airport",
    "latitude": 54.401,
    "longitude": 48.8027
  },
  "ULWC": {
    "airport": "Cherepovets Airport",
    "latitude": 59.2736,
    "longitude": 38.0158
  },
  "ULWW": {
    "airport": "Vologda Airport",
    "latitude": 59.2825,
    "longitude": 39.9444
  },
  "URWW": {
    "airport": "Volgograd International Airport",
    "latitude": 48.7825,
    "longitude": 44.3455
  },
  "ULWU": {
    "airport": "Veliky Ustyug Airport",
    "latitude": 60.7883,
    "longitude": 46.26
  },
  "UUOO": {
    "airport": "Voronezh International Airport (Chertovitskoye Airport)",
    "latitude": 51.8142,
    "longitude": 39.2296
  },
  "USDB": {
    "airport": "Bovanenkovo Airport",
    "latitude": 70.3153,
    "longitude": 68.3336
  },
  "USDP": {
    "airport": "Krasnoselkup Airport",
    "latitude": 65.717,
    "longitude": 82.455
  },
  "USRO": {
    "airport": "Noyabrsk Airport",
    "latitude": 63.1833,
    "longitude": 75.27
  },
  "USMU": {
    "airport": "Novy Urengoy Airport",
    "latitude": 66.0694,
    "longitude": 76.5203
  },
  "USMM": {
    "airport": "Nadym Airport",
    "latitude": 65.4809,
    "longitude": 72.6989
  },
  "USDA": {
    "airport": "Sabetta International Airport",
    "latitude": 71.2192,
    "longitude": 72.0522
  },
  "USDD": {
    "airport": "Salekhard Airport",
    "latitude": 66.5908,
    "longitude": 66.611
  },
  "USDS": {
    "airport": "Tarko-Sale Airport",
    "latitude": 64.9308,
    "longitude": 77.8181
  },
  "USDU": {
    "airport": "Urengoy Airport",
    "latitude": 65.96,
    "longitude": 78.437
  },
  "USDK": {
    "airport": "Mys-Kamenny Airport",
    "latitude": 68.483,
    "longitude": 73.567
  },
  "UUDL": {
    "airport": "Tunoshna Airport",
    "latitude": 57.5607,
    "longitude": 40.1574
  },
  "UUBK": {
    "airport": "Staroselye Airport",
    "latitude": 58.1042,
    "longitude": 38.9294
  },
  "UIAA": {
    "airport": "Chita International Airport (Kadala Airport)",
    "latitude": 52.0263,
    "longitude": 113.306
  },
  "HRYU": {
    "airport": "Ruhengeri Airport",
    "latitude": -1.5,
    "longitude": 29.633
  },
  "HRYG": {
    "airport": "Gisenyi Airport",
    "latitude": -1.6772,
    "longitude": 29.2589
  },
  "HRZA": {
    "airport": "Kamembe Airport",
    "latitude": -2.46224,
    "longitude": 28.9079
  },
  "HRYI": {
    "airport": "Butare Airport",
    "latitude": -2.59583,
    "longitude": 29.7367
  },
  "HRYR": {
    "airport": "Kigali International Airport (Kanombe Airport)",
    "latitude": -1.96863,
    "longitude": 30.1395
  },
  "OEBA": {
    "airport": "Al-Baha Domestic Airport",
    "latitude": 20.2961,
    "longitude": 41.6343
  },
  "OERR": {
    "airport": "Arar Domestic Airport",
    "latitude": 30.9066,
    "longitude": 41.1382
  },
  "OERF": {
    "airport": "Rafha Domestic Airport",
    "latitude": 29.6264,
    "longitude": 43.4906
  },
  "OETR": {
    "airport": "Turaif Domestic Airport",
    "latitude": 31.6922,
    "longitude": 38.7315
  },
  "OESK": {
    "airport": "Al-Jawf Domestic Airport",
    "latitude": 29.7851,
    "longitude": 40.1
  },
  "OEGT": {
    "airport": "Gurayat Domestic Airport",
    "latitude": 31.4124,
    "longitude": 37.2789
  },
  "OEMA": {
    "airport": "Prince Mohammad bin Abdulaziz Airport",
    "latitude": 24.5534,
    "longitude": 39.7051
  },
  "OEAO": {
    "airport": "Prince Abdul Majeed bin Abdulaziz Domestic Airport",
    "latitude": 26.48,
    "longitude": 38.1289
  },
  "OEYN": {
    "airport": "Yanbu Airport (Yenbo Airport)",
    "latitude": 24.1442,
    "longitude": 38.0634
  },
  "OEGS": {
    "airport": "Prince Nayef bin Abdulaziz Regional Airport",
    "latitude": 26.3028,
    "longitude": 43.7744
  },
  "OEZL": {
    "airport": "Zilfi Airport",
    "latitude": 26.35,
    "longitude": 44.833
  },
  "OEPS": {
    "airport": "Prince Sultan Air Base",
    "latitude": 24.0627,
    "longitude": 47.5805
  },
  "OEDW": {
    "airport": "Dawadmi Domestic Airport (King Salman bin Abdul Aziz Domestic Airport)",
    "latitude": 24.4499,
    "longitude": 44.1212
  },
  "OERK": {
    "airport": "King Khalid International Airport",
    "latitude": 24.9576,
    "longitude": 46.6988
  },
  "OESL": {
    "airport": "Sulayel Airport",
    "latitude": 20.4647,
    "longitude": 45.6196
  },
  "OEWD": {
    "airport": "Wadi al-Dawasir Domestic Airport",
    "latitude": 20.5043,
    "longitude": 45.1996
  },
  "OEPA": {
    "airport": "Al Qaisumah/Hafr Al Batin Airport",
    "latitude": 28.3352,
    "longitude": 46.1251
  },
  "OEDR": {
    "airport": "King Abdulaziz Air Base",
    "latitude": 26.2654,
    "longitude": 50.152
  },
  "OEDF": {
    "airport": "King Fahd International Airport",
    "latitude": 26.4712,
    "longitude": 49.7979
  },
  "OEAH": {
    "airport": "Al-Ahsa International Airport",
    "latitude": 25.2853,
    "longitude": 49.4852
  },
  "OEKK": {
    "airport": "King Khaled Military City Airport",
    "latitude": 27.9009,
    "longitude": 45.5282
  },
  "OEAB": {
    "airport": "Abha Regional Airport",
    "latitude": 18.2404,
    "longitude": 42.6566
  },
  "OEBH": {
    "airport": "Bisha Domestic Airport",
    "latitude": 19.9844,
    "longitude": 42.6209
  },
  "OEKM": {
    "airport": "King Khalid Air Base",
    "latitude": 18.2973,
    "longitude": 42.8035
  },
  "OEHL": {
    "airport": "Ha'il Regional Airport",
    "latitude": 27.4379,
    "longitude": 41.6863
  },
  "OEGN": {
    "airport": "Jizan Regional Airport (King Abdullah bin Abdulaziz Airport)",
    "latitude": 16.9011,
    "longitude": 42.5858
  },
  "OEJN": {
    "airport": "King Abdulaziz International Airport",
    "latitude": 21.6796,
    "longitude": 39.1565
  },
  "OETF": {
    "airport": "Ta'if Regional Airport",
    "latitude": 21.483,
    "longitude": 40.5434
  },
  "OENG": {
    "airport": "Najran Domestic Airport",
    "latitude": 17.6114,
    "longitude": 44.4192
  },
  "OESH": {
    "airport": "Sharurah Domestic Airport",
    "latitude": 17.4669,
    "longitude": 47.1214
  },
  "OEWJ": {
    "airport": "Al Wajh Domestic Airport",
    "latitude": 26.1986,
    "longitude": 36.4764
  },
  "OENN": {
    "airport": "Neom Bay Airport",
    "latitude": 27.9276,
    "longitude": 35.2887
  },
  "OETB": {
    "airport": "Tabuk Regional Airport",
    "latitude": 28.3654,
    "longitude": 36.6189
  },
  "AGTI": {
    "airport": "Tulaghi Heliport",
    "latitude": -9.108,
    "longitude": 160.149
  },
  "AGGY": {
    "airport": "Yandina Airport",
    "latitude": -9.09282,
    "longitude": 159.218
  },
  "AGGC": {
    "airport": "Choiseul Bay Airport",
    "latitude": -6.71194,
    "longitude": 156.396
  },
  "AGKG": {
    "airport": "Kaghau Airport",
    "latitude": -7.3305,
    "longitude": 157.585
  },
  "AGGJ": {
    "airport": "Avu Avu Airport",
    "latitude": -9.86833,
    "longitude": 160.411
  },
  "AGGH": {
    "airport": "Honiara International Airport",
    "latitude": -9.428,
    "longitude": 160.055
  },
  "AGKW": {
    "airport": "Kwailabesi Airport",
    "latitude": -8.36051,
    "longitude": 160.775
  },
  "AGGI": {
    "airport": "Mbambanakira Airport",
    "latitude": -9.7475,
    "longitude": 159.839
  },
  "AGNA": {
    "airport": "Nana Airport",
    "latitude": -10.6758,
    "longitude": 162.205
  },
  "AGGP": {
    "airport": "Parasi Airport",
    "latitude": -9.64167,
    "longitude": 161.425
  },
  "AGGF": {
    "airport": "Fera Airport (Fera/Maringe Airport)",
    "latitude": -8.1075,
    "longitude": 159.577
  },
  "AGJO": {
    "airport": "Jajao Airport",
    "latitude": -11.4179,
    "longitude": -58.7082
  },
  "AGGV": {
    "airport": "Suavanao Airport",
    "latitude": -7.58556,
    "longitude": 158.731
  },
  "AGGK": {
    "airport": "Kirakira Airport (Ngorangora Airstrip)",
    "latitude": -10.4497,
    "longitude": 161.898
  },
  "AGGT": {
    "airport": "Santa Ana Airport",
    "latitude": -10.848,
    "longitude": 162.454
  },
  "AGAR": {
    "airport": "Ulawa Airport",
    "latitude": -9.86054,
    "longitude": 161.98
  },
  "AGAF": {
    "airport": "Afutara Airport",
    "latitude": -9.19139,
    "longitude": 160.949
  },
  "AGGA": {
    "airport": "Auki Gwaunaru'u Airport",
    "latitude": -8.70257,
    "longitude": 160.682
  },
  "AGAT": {
    "airport": "Uru Harbour Airport",
    "latitude": -8.87333,
    "longitude": 161.011
  },
  "AGGQ": {
    "airport": "Ontong Java Airport",
    "latitude": -5.515,
    "longitude": 159.528
  },
  "AGGB": {
    "airport": "Bellona/Anua Airport",
    "latitude": -11.3022,
    "longitude": 159.798
  },
  "AGGR": {
    "airport": "Rennell/Tingoa Airport",
    "latitude": -11.5339,
    "longitude": 160.063
  },
  "AGGU": {
    "airport": "Marau Airport",
    "latitude": -9.86167,
    "longitude": 160.825
  },
  "AGGL": {
    "airport": "Santa Cruz/Graciosa Bay/Luova Airport",
    "latitude": -10.7203,
    "longitude": 165.795
  },
  "AGGE": {
    "airport": "Balalae Airport",
    "latitude": -6.99075,
    "longitude": 155.887
  },
  "AGBT": {
    "airport": "Batuna Airport",
    "latitude": -8.56203,
    "longitude": 158.119
  },
  "AGGS": {
    "airport": "Seghe Airport",
    "latitude": -8.57889,
    "longitude": 157.876
  },
  "AGEV": {
    "airport": "Geva Airport",
    "latitude": -7.57583,
    "longitude": 156.597
  },
  "AGOK": {
    "airport": "Gatokae Aerodrome",
    "latitude": -8.73917,
    "longitude": 158.203
  },
  "AGGN": {
    "airport": "Nusatupe Airport",
    "latitude": -8.09778,
    "longitude": 156.864
  },
  "AGKU": {
    "airport": "Kukundu Airport",
    "latitude": -8.0262,
    "longitude": 156.948
  },
  "AGGO": {
    "airport": "Mono Airport",
    "latitude": -7.41694,
    "longitude": 155.565
  },
  "AGGM": {
    "airport": "Munda Airport",
    "latitude": -8.32797,
    "longitude": 157.263
  },
  "AGRM": {
    "airport": "Ramata Airport",
    "latitude": -8.16806,
    "longitude": 157.643
  },
  "AGRC": {
    "airport": "Ringgi Cove Airport",
    "latitude": -8.12639,
    "longitude": 157.143
  },
  "AGBA": {
    "airport": "Barakoma Airport",
    "latitude": -7.91278,
    "longitude": 156.706
  },
  "FSSB": {
    "airport": "Bird Island Airport",
    "latitude": -3.72472,
    "longitude": 55.2053
  },
  "FSSD": {
    "airport": "Denis Island Airport",
    "latitude": -3.80222,
    "longitude": 55.6669
  },
  "FSDR": {
    "airport": "Desroches Airport",
    "latitude": -5.6967,
    "longitude": 53.6558
  },
  "FSSF": {
    "airport": "Fregate Island Airport",
    "latitude": -4.583,
    "longitude": 55.95
  },
  "FSPP": {
    "airport": "Praslin Island Airport",
    "latitude": -4.31929,
    "longitude": 55.6914
  },
  "FSIA": {
    "airport": "Seychelles International Airport",
    "latitude": -4.67434,
    "longitude": 55.5218
  },
  "HSFA": {
    "airport": "Paloich Airport",
    "latitude": 10.5292,
    "longitude": 32.5006
  },
  "HSDZ": {
    "airport": "Damazin Airport",
    "latitude": 11.7859,
    "longitude": 34.3367
  },
  "HSWD": {
    "airport": "Wad Medani Airport",
    "latitude": 14.3836,
    "longitude": 33.5264
  },
  "HSKG": {
    "airport": "Khashm el Girba Airport",
    "latitude": 14.925,
    "longitude": 35.878
  },
  "HSGF": {
    "airport": "Azaza Airport",
    "latitude": 14.133,
    "longitude": 35.317
  },
  "HSKA": {
    "airport": "Kassala Airport",
    "latitude": 15.3875,
    "longitude": 36.3288
  },
  "HSNW": {
    "airport": "New Halfa Airport",
    "latitude": 15.3556,
    "longitude": 35.7278
  },
  "HSSK": {
    "airport": "Khartoum International Airport",
    "latitude": 15.5895,
    "longitude": 32.5532
  },
  "HSFS": {
    "airport": "El Fasher Airport",
    "latitude": 13.6149,
    "longitude": 25.3246
  },
  "HSDN": {
    "airport": "Dongola Airport",
    "latitude": 19.1539,
    "longitude": 30.4301
  },
  "HSDB": {
    "airport": "El Debba Airport",
    "latitude": 18.0146,
    "longitude": 30.9595
  },
  "HSMN": {
    "airport": "Merowe Airport",
    "latitude": 18.4433,
    "longitude": 31.8433
  },
  "HSSW": {
    "airport": "Wadi Halfa Airport",
    "latitude": 21.8027,
    "longitude": 31.5216
  },
  "HSPN": {
    "airport": "Port Sudan New International Airport",
    "latitude": 19.4336,
    "longitude": 37.2341
  },
  "HSAT": {
    "airport": "Atbara Airport",
    "latitude": 17.7103,
    "longitude": 34.057
  },
  "HSGG": {
    "airport": "Galegu Airport",
    "latitude": 12.533,
    "longitude": 35.067
  },
  "HSNN": {
    "airport": "Nyala Airport",
    "latitude": 12.0535,
    "longitude": 24.9562
  },
  "HSOB": {
    "airport": "El Obeid Airport",
    "latitude": 13.1532,
    "longitude": 30.2327
  },
  "HSLI": {
    "airport": "Kadugli Airport",
    "latitude": 11.138,
    "longitude": 29.7011
  },
  "HSNH": {
    "airport": "En Nahud Airport",
    "latitude": 12.667,
    "longitude": 28.333
  },
  "HSGN": {
    "airport": "Geneina Airport",
    "latitude": 13.4817,
    "longitude": 22.4672
  },
  "HSZA": {
    "airport": "Zalingei Airport",
    "latitude": 12.9437,
    "longitude": 23.5631
  },
  "HSKI": {
    "airport": "Rabak Airport",
    "latitude": 13.183,
    "longitude": 32.733
  },
  "ESDF": {
    "airport": "Ronneby Airport",
    "latitude": 56.2667,
    "longitude": 15.265
  },
  "ESSD": {
    "airport": "Dala Airport (Borlange Airport)",
    "latitude": 60.422,
    "longitude": 15.5152
  },
  "ESUE": {
    "airport": "Idre Airport",
    "latitude": 61.8697,
    "longitude": 12.6894
  },
  "ESKM": {
    "airport": "Mora-Siljan Airport",
    "latitude": 60.9579,
    "longitude": 14.5114
  },
  "ESSK": {
    "airport": "Gavle-Sandviken Airport",
    "latitude": 60.5933,
    "longitude": 16.9514
  },
  "ESNH": {
    "airport": "Hudiksvall Airport",
    "latitude": 61.7681,
    "longitude": 17.0807
  },
  "ESNY": {
    "airport": "Soderhamn Airport (Helsinge Airport)",
    "latitude": 61.2615,
    "longitude": 17.0991
  },
  "ESSV": {
    "airport": "Visby Airport",
    "latitude": 57.6628,
    "longitude": 18.3462
  },
  "ESMT": {
    "airport": "Halmstad Airport (Halmstad City Airport)",
    "latitude": 56.6911,
    "longitude": 12.8202
  },
  "ESND": {
    "airport": "Sveg Airport",
    "latitude": 62.0478,
    "longitude": 14.4229
  },
  "ESNZ": {
    "airport": "Are Ostersund Airport",
    "latitude": 63.1944,
    "longitude": 14.5003
  },
  "ESGJ": {
    "airport": "Jonkoping Airport",
    "latitude": 57.7576,
    "longitude": 14.0687
  },
  "ESSF": {
    "airport": "Hultsfred-Vimmerby Airport",
    "latitude": 57.5258,
    "longitude": 15.8233
  },
  "ESMQ": {
    "airport": "Kalmar Airport",
    "latitude": 56.6855,
    "longitude": 16.2876
  },
  "ESMO": {
    "airport": "Oskarshamn Airport",
    "latitude": 57.3505,
    "longitude": 16.498
  },
  "ESSW": {
    "airport": "Vastervik Airport",
    "latitude": 57.78,
    "longitude": 16.5236
  },
  "ESMX": {
    "airport": "Vaxjo Smaland Airport",
    "latitude": 56.9291,
    "longitude": 14.728
  },
  "ESNX": {
    "airport": "Arvidsjaur Airport",
    "latitude": 65.5903,
    "longitude": 19.2819
  },
  "ESNG": {
    "airport": "Gallivare Airport",
    "latitude": 67.1324,
    "longitude": 20.8146
  },
  "ESNQ": {
    "airport": "Kiruna Airport",
    "latitude": 67.822,
    "longitude": 20.3368
  },
  "ESPA": {
    "airport": "Lulea Airport (Kallax Airport)",
    "latitude": 65.5438,
    "longitude": 22.122
  },
  "ESUP": {
    "airport": "Pajala Airport",
    "latitude": 67.2456,
    "longitude": 23.0689
  },
  "ESKK": {
    "airport": "Karlskoga Airport",
    "latitude": 59.3459,
    "longitude": 14.4959
  },
  "ESOE": {
    "airport": "Orebro Airport",
    "latitude": 59.2237,
    "longitude": 15.038
  },
  "ESSL": {
    "airport": "Linkoping City Airport",
    "latitude": 58.4062,
    "longitude": 15.6805
  },
  "ESSP": {
    "airport": "Norrkoping Airport",
    "latitude": 58.5863,
    "longitude": 16.2506
  },
  "ESTA": {
    "airport": "Angelholm-Helsingborg Airport",
    "latitude": 56.2961,
    "longitude": 12.8471
  },
  "ESMK": {
    "airport": "Kristianstad Airport",
    "latitude": 55.9217,
    "longitude": 14.0855
  },
  "ESMS": {
    "airport": "Malmo Airport",
    "latitude": 55.5346,
    "longitude": 13.3704
  },
  "ESSU": {
    "airport": "Eskilstuna Airport",
    "latitude": 59.3511,
    "longitude": 16.7084
  },
  "ESKN": {
    "airport": "Stockholm Skavsta Airport",
    "latitude": 58.7886,
    "longitude": 16.9122
  },
  "ESSA": {
    "airport": "Stockholm Arlanda Airport",
    "latitude": 59.6519,
    "longitude": 17.9186
  },
  "ESSB": {
    "airport": "Stockholm Bromma Airport",
    "latitude": 59.3556,
    "longitude": 17.9436
  },
  "ESOH": {
    "airport": "Hagfors Airport",
    "latitude": 60.0201,
    "longitude": 13.5789
  },
  "ESOK": {
    "airport": "Karlstad Airport",
    "latitude": 59.4447,
    "longitude": 13.3374
  },
  "ESST": {
    "airport": "Torsby Airport",
    "latitude": 60.1576,
    "longitude": 12.9913
  },
  "ESUT": {
    "airport": "Hemavan Tarnaby Airport",
    "latitude": 65.8061,
    "longitude": 15.0828
  },
  "ESNL": {
    "airport": "Lycksele Airport",
    "latitude": 64.5483,
    "longitude": 18.7162
  },
  "ESNS": {
    "airport": "Skelleftea Airport",
    "latitude": 64.6248,
    "longitude": 21.0769
  },
  "ESUD": {
    "airport": "Storuman Airport",
    "latitude": 64.9609,
    "longitude": 17.6966
  },
  "ESNU": {
    "airport": "Umea Airport",
    "latitude": 63.7918,
    "longitude": 20.2828
  },
  "ESNV": {
    "airport": "Vilhelmina Airport",
    "latitude": 64.5791,
    "longitude": 16.8336
  },
  "ESNK": {
    "airport": "Hoga Kusten Airport (Kramfors-Solleftea Airport)",
    "latitude": 63.0486,
    "longitude": 17.7689
  },
  "ESNO": {
    "airport": "Ornskoldsvik Airport",
    "latitude": 63.4083,
    "longitude": 18.99
  },
  "ESNN": {
    "airport": "Sundsvall-Timra Airport (Midlanda Airport)",
    "latitude": 62.5281,
    "longitude": 17.4439
  },
  "ESOW": {
    "airport": "Stockholm Vasteras Airport",
    "latitude": 59.6018,
    "longitude": 16.6284
  },
  "ESGG": {
    "airport": "Goteborg Landvetter Airport",
    "latitude": 57.6628,
    "longitude": 12.2798
  },
  "ESGP": {
    "airport": "Goteborg City Airport",
    "latitude": 57.7747,
    "longitude": 11.8704
  },
  "ESGR": {
    "airport": "Skovde Airport",
    "latitude": 58.4564,
    "longitude": 13.9727
  },
  "ESGL": {
    "airport": "Lidkoping-Hovby Airport",
    "latitude": 58.4655,
    "longitude": 13.1744
  },
  "ESGT": {
    "airport": "Trollhattan-Vanersborg Airport",
    "latitude": 58.3181,
    "longitude": 12.345
  },
  "WSAP": {
    "airport": "Paya Lebar Air Base",
    "latitude": 1.36042,
    "longitude": 103.91
  },
  "WSSS": {
    "airport": "Singapore Changi Airport",
    "latitude": 1.35019,
    "longitude": 103.994
  },
  "WSAT": {
    "airport": "Tengah Air Base",
    "latitude": 1.38726,
    "longitude": 103.709
  },
  "WSSL": {
    "airport": "Seletar Airport",
    "latitude": 1.41695,
    "longitude": 103.868
  },
  "FHAW": {
    "airport": "RAF Ascension Island (Wideawake Field)",
    "latitude": -7.9696,
    "longitude": -14.3937
  },
  "FHSH": {
    "airport": "Saint Helena Airport",
    "latitude": -15.9577,
    "longitude": -5.64594
  },
  "LJLJ": {
    "airport": "Ljubljana Joze Pucnik Airport (Brnik Airport)",
    "latitude": 46.2237,
    "longitude": 14.4576
  },
  "LJMB": {
    "airport": "Maribor Edvard Rusjan Airport",
    "latitude": 46.4799,
    "longitude": 15.6861
  },
  "LJPZ": {
    "airport": "Portoroz Airport",
    "latitude": 45.4734,
    "longitude": 13.615
  },
  "ENSB": {
    "airport": "Svalbard Airport",
    "latitude": 78.2461,
    "longitude": 15.4656
  },
  "LZLU": {
    "airport": "Bolkovce Airport",
    "latitude": 48.3394,
    "longitude": 19.7358
  },
  "LZSL": {
    "airport": "Sliac Airport",
    "latitude": 48.6378,
    "longitude": 19.1341
  },
  "LZIB": {
    "airport": "M. R. Stefanik Airport",
    "latitude": 48.1702,
    "longitude": 17.2127
  },
  "LZKZ": {
    "airport": "Kosice International Airport",
    "latitude": 48.6631,
    "longitude": 21.2411
  },
  "LZPW": {
    "airport": "Presov Air Base",
    "latitude": 49.0297,
    "longitude": 21.3156
  },
  "LZTT": {
    "airport": "Poprad-Tatry Airport",
    "latitude": 49.0736,
    "longitude": 20.2411
  },
  "LZPP": {
    "airport": "Piestany Airport",
    "latitude": 48.6252,
    "longitude": 17.8284
  },
  "LZZI": {
    "airport": "Zilina Airport",
    "latitude": 49.2315,
    "longitude": 18.6135
  },
  "GFKE": {
    "airport": "Kenema Airport",
    "latitude": 7.89129,
    "longitude": -11.1766
  },
  "GFYE": {
    "airport": "Yengema Airport",
    "latitude": 8.61047,
    "longitude": -11.0454
  },
  "GFKB": {
    "airport": "Kabala Airport",
    "latitude": 9.63832,
    "longitude": -11.5156
  },
  "GFBN": {
    "airport": "Sherbro International Airport",
    "latitude": 7.53242,
    "longitude": -12.5189
  },
  "GFGK": {
    "airport": "Gbangbatok Airport",
    "latitude": 7.767,
    "longitude": -12.383
  },
  "GFBO": {
    "airport": "Bo Airport",
    "latitude": 7.9444,
    "longitude": -11.761
  },
  "GFLL": {
    "airport": "Lungi International Airport",
    "latitude": 8.61644,
    "longitude": -13.1955
  },
  "GFHA": {
    "airport": "Hastings Airport",
    "latitude": 8.39713,
    "longitude": -13.1291
  },
  "GOOY": {
    "airport": "Leopold Sedar Senghor International Airport",
    "latitude": 14.7397,
    "longitude": -17.4902
  },
  "GOOK": {
    "airport": "Kaolack Airport",
    "latitude": 14.1469,
    "longitude": -16.0513
  },
  "GOTK": {
    "airport": "Kedougou Airport",
    "latitude": 12.5723,
    "longitude": -12.2203
  },
  "GODK": {
    "airport": "Kolda North Airport",
    "latitude": 12.8985,
    "longitude": -14.9681
  },
  "GOSM": {
    "airport": "Ouro Sogui Airport",
    "latitude": 15.5936,
    "longitude": -13.3228
  },
  "GOSP": {
    "airport": "Podor Airport",
    "latitude": 16.683,
    "longitude": -14.967
  },
  "GOSR": {
    "airport": "Richard Toll Airport",
    "latitude": 16.433,
    "longitude": -15.65
  },
  "GOSS": {
    "airport": "Saint-Louis Airport",
    "latitude": 16.0508,
    "longitude": -16.4632
  },
  "GOTB": {
    "airport": "Bakel Airport",
    "latitude": 14.8473,
    "longitude": -12.4683
  },
  "GOTS": {
    "airport": "Simenti Airport",
    "latitude": 13.0468,
    "longitude": -13.2954
  },
  "GOTT": {
    "airport": "Tambacounda Airport",
    "latitude": 13.7368,
    "longitude": -13.6531
  },
  "GOBD": {
    "airport": "Blaise Diagne International Airport",
    "latitude": 14.67,
    "longitude": -17.0733
  },
  "GOGS": {
    "airport": "Cap Skirring Airport",
    "latitude": 12.3953,
    "longitude": -16.748
  },
  "GOGG": {
    "airport": "Ziguinchor Airport",
    "latitude": 12.5556,
    "longitude": -16.2818
  },
  "HCMM": {
    "airport": "Aden Adde International Airport",
    "latitude": 2.01444,
    "longitude": 45.3047
  },
  "HCMA": {
    "airport": "Alula Airport",
    "latitude": 11.9582,
    "longitude": 50.748
  },
  "HCMF": {
    "airport": "Bender Qassim International Airport",
    "latitude": 11.2753,
    "longitude": 49.1494
  },
  "HCMS": {
    "airport": "Iskushuban Airport",
    "latitude": 10.3,
    "longitude": 50.233
  },
  "HCMC": {
    "airport": "Candala Airport",
    "latitude": 11.494,
    "longitude": 49.9085
  },
  "HCMG": {
    "airport": "Qardho Airport",
    "latitude": 9.517,
    "longitude": 49.083
  },
  "HCMB": {
    "airport": "Baidoa Airport",
    "latitude": 3.10222,
    "longitude": 43.6286
  },
  "HCMD": {
    "airport": "Bardera Airport",
    "latitude": 2.33611,
    "longitude": 42.3078
  },
  "HCMJ": {
    "airport": "Lugh Ganane Airport",
    "latitude": 3.8124,
    "longitude": 42.5459
  },
  "HCMK": {
    "airport": "Kismayo Airport (Kisimayu Airport)",
    "latitude": -0.377353,
    "longitude": 42.4592
  },
  "HCMO": {
    "airport": "Obbia Airport",
    "latitude": 5.36667,
    "longitude": 48.5167
  },
  "HCMR": {
    "airport": "Abdullahi Yusuf International Airport",
    "latitude": 6.78083,
    "longitude": 47.4547
  },
  "HCME": {
    "airport": "Eyl Airport",
    "latitude": 8.104,
    "longitude": 49.82
  },
  "HCMU": {
    "airport": "Erigavo Airport",
    "latitude": 10.6421,
    "longitude": 47.388
  },
  "HCMV": {
    "airport": "Burao Airport",
    "latitude": 9.5275,
    "longitude": 45.5549
  },
  "HCMI": {
    "airport": "Berbera Airport",
    "latitude": 10.3892,
    "longitude": 44.9411
  },
  "HCMH": {
    "airport": "Hargeisa International Airport (Egal Int'l)",
    "latitude": 9.51321,
    "longitude": 44.0824
  },
  "SMCO": {
    "airport": "Totness Airstrip",
    "latitude": 5.86583,
    "longitude": -56.3275
  },
  "SMBN": {
    "airport": "Albina Airstrip",
    "latitude": 5.51272,
    "longitude": -54.0501
  },
  "SMMO": {
    "airport": "Moengo Airstrip",
    "latitude": 5.6076,
    "longitude": -54.4003
  },
  "SMWA": {
    "airport": "Wageningen Airstrip",
    "latitude": 5.84113,
    "longitude": -56.6733
  },
  "SMNI": {
    "airport": "Majoor Henry Fernandes Airport (Nieuw Nickerie Airport)",
    "latitude": 5.95556,
    "longitude": -57.0394
  },
  "SMJP": {
    "airport": "Johan Adolf Pengel International Airport",
    "latitude": 5.45283,
    "longitude": -55.1878
  },
  "SMZO": {
    "airport": "Zorg en Hoop Airport",
    "latitude": 5.81108,
    "longitude": -55.1907
  },
  "SMCA": {
    "airport": "Cayana Airstrip",
    "latitude": 3.89868,
    "longitude": -55.5779
  },
  "SMDA": {
    "airport": "Drietabbetje Airstrip",
    "latitude": 4.11136,
    "longitude": -54.6728
  },
  "SMTP": {
    "airport": "Tepoe Airstrip",
    "latitude": 3.15,
    "longitude": -55.717
  },
  "SMDO": {
    "airport": "Laduani Airstrip",
    "latitude": 4.37611,
    "longitude": -55.4071
  },
  "SMPA": {
    "airport": "Vincent Fayks Airport",
    "latitude": 3.34528,
    "longitude": -55.4425
  },
  "SMST": {
    "airport": "Stoelmans Eiland Airstrip",
    "latitude": 4.35,
    "longitude": -54.4167
  },
  "SMWS": {
    "airport": "Washabo Airport",
    "latitude": 5.21528,
    "longitude": -57.1853
  },
  "HJJJ": {
    "airport": "Juba International Airport",
    "latitude": 4.87201,
    "longitude": 31.6011
  },
  "HSMK": {
    "airport": "Rumbek Airport",
    "latitude": 6.825,
    "longitude": 29.669
  },
  "HSSM": {
    "airport": "Malakal Airport",
    "latitude": 9.55897,
    "longitude": 31.6522
  },
  "HSWW": {
    "airport": "Wau Airport",
    "latitude": 7.72583,
    "longitude": 27.975
  },
  "FPPR": {
    "airport": "Principe Airport",
    "latitude": 1.66294,
    "longitude": 7.41174
  },
  "FPST": {
    "airport": "Sao Tome International Airport",
    "latitude": 0.378175,
    "longitude": 6.71215
  },
  "MSSS": {
    "airport": "Ilopango International Airport",
    "latitude": 13.6959,
    "longitude": -89.1151
  },
  "MSLP": {
    "airport": "El Salvador International Airport Saint Óscar Arnulfo Romero y Galdámez",
    "latitude": 13.4408,
    "longitude": -89.0556
  },
  "TNCM": {
    "airport": "Princess Juliana International Airport",
    "latitude": 18.041,
    "longitude": -63.1089
  },
  "OSKL": {
    "airport": "Kamishly Airport",
    "latitude": 37.0206,
    "longitude": 41.1914
  },
  "OSLK": {
    "airport": "Bassel Al-Assad International Airport",
    "latitude": 35.4011,
    "longitude": 35.9487
  },
  "OSDZ": {
    "airport": "Deir ez-Zor Airport",
    "latitude": 35.2854,
    "longitude": 40.176
  },
  "OSDI": {
    "airport": "Damascus International Airport",
    "latitude": 33.4115,
    "longitude": 36.5156
  },
  "OSAP": {
    "airport": "Aleppo International Airport",
    "latitude": 36.1807,
    "longitude": 37.2244
  },
  "OSPR": {
    "airport": "Palmyra Airport",
    "latitude": 34.5574,
    "longitude": 38.3169
  },
  "FDMS": {
    "airport": "Matsapha Airport",
    "latitude": -26.529,
    "longitude": 31.3075
  },
  "FDSK": {
    "airport": "King Mswati III International Airport (Sikhuphe Int'l)",
    "latitude": 38.1421,
    "longitude": 128.598
  },
  "MBGT": {
    "airport": "JAGS McCartney International Airport (Grand Turk Int'l)",
    "latitude": 21.4445,
    "longitude": -71.1423
  },
  "MBMC": {
    "airport": "Middle Caicos Airport",
    "latitude": 21.826,
    "longitude": -71.8025
  },
  "MBNC": {
    "airport": "North Caicos Airport",
    "latitude": 21.9175,
    "longitude": -71.9396
  },
  "MBPI": {
    "airport": "Pine Cay Airport",
    "latitude": 21.8749,
    "longitude": -72.0923
  },
  "MBPV": {
    "airport": "Providenciales International Airport",
    "latitude": 21.7736,
    "longitude": -72.2659
  },
  "MBSY": {
    "airport": "Salt Cay Airport",
    "latitude": 21.333,
    "longitude": -71.2
  },
  "MBSC": {
    "airport": "South Caicos Airport",
    "latitude": 21.5157,
    "longitude": -71.5285
  },
  "FTTI": {
    "airport": "Ati Airport",
    "latitude": 13.2389,
    "longitude": 18.3133
  },
  "FTTY": {
    "airport": "Faya-Largeau Airport",
    "latitude": 17.9171,
    "longitude": 19.1111
  },
  "FTTS": {
    "airport": "Bousso Airport",
    "latitude": 10.483,
    "longitude": 16.717
  },
  "FTTM": {
    "airport": "Mongo Airport",
    "latitude": 12.167,
    "longitude": 18.675
  },
  "FTTK": {
    "airport": "Bokoro Airport",
    "latitude": 12.383,
    "longitude": 17.067
  },
  "FTTJ": {
    "airport": "N'Djamena International Airport",
    "latitude": 12.1337,
    "longitude": 15.034
  },
  "FTTU": {
    "airport": "Mao Airport",
    "latitude": 14.1456,
    "longitude": 15.3144
  },
  "FTTL": {
    "airport": "Bol-Berim Airport",
    "latitude": 13.4433,
    "longitude": 14.7394
  },
  "FTTD": {
    "airport": "Moundou Airport",
    "latitude": 8.62441,
    "longitude": 16.0714
  },
  "FTTP": {
    "airport": "Pala Airport",
    "latitude": 9.37806,
    "longitude": 14.925
  },
  "FTTB": {
    "airport": "Bongor Airport",
    "latitude": 10.2881,
    "longitude": 15.3811
  },
  "FTTA": {
    "airport": "Sarh Airport",
    "latitude": 9.14444,
    "longitude": 18.3744
  },
  "FTTC": {
    "airport": "Abeche Airport",
    "latitude": 13.847,
    "longitude": 20.8443
  },
  "FTTN": {
    "airport": "Am Timan Airport",
    "latitude": 11.034,
    "longitude": 20.274
  },
  "FTTH": {
    "airport": "Lai Airport",
    "latitude": 9.3979,
    "longitude": 16.3125
  },
  "DXNG": {
    "airport": "Niamtougou International Airport",
    "latitude": 9.76733,
    "longitude": 1.09125
  },
  "DXXX": {
    "airport": "Lome-Tokoin Airport (Gnassingbe Eyadema Int'l)",
    "latitude": 6.16561,
    "longitude": 1.25451
  },
  "VTUO": {
    "airport": "Buriram Airport",
    "latitude": 15.2295,
    "longitude": 103.253
  },
  "VTCC": {
    "airport": "Chiang Mai International Airport",
    "latitude": 18.7668,
    "longitude": 98.9626
  },
  "VTCT": {
    "airport": "Chiang Rai International Airport (Mae Fah Luang Int'l)",
    "latitude": 19.9523,
    "longitude": 99.8829
  },
  "VTBF": {
    "airport": "Pattaya Airpark",
    "latitude": 12.8325,
    "longitude": 100.949
  },
  "VTSE": {
    "airport": "Chumphon Airport",
    "latitude": 10.7112,
    "longitude": 99.3617
  },
  "VTUK": {
    "airport": "Khon Kaen Airport",
    "latitude": 16.4666,
    "longitude": 102.784
  },
  "VTSG": {
    "airport": "Krabi Airport",
    "latitude": 8.09912,
    "longitude": 98.9862
  },
  "VTBS": {
    "airport": "Suvarnabhumi Airport",
    "latitude": 13.6811,
    "longitude": 100.747
  },
  "VTBD": {
    "airport": "Don Mueang International Airport",
    "latitude": 13.9126,
    "longitude": 100.607
  },
  "VTCL": {
    "airport": "Lampang Airport",
    "latitude": 18.2709,
    "longitude": 99.5042
  },
  "VTUL": {
    "airport": "Loei Airport",
    "latitude": 17.4391,
    "longitude": 101.722
  },
  "VTBL": {
    "airport": "Khok Kathiam Air Force Base",
    "latitude": 14.9494,
    "longitude": 100.643
  },
  "VTCH": {
    "airport": "Mae Hong Son Airport",
    "latitude": 19.3013,
    "longitude": 97.9758
  },
  "VTBK": {
    "airport": "Kamphaeng Saen Airport",
    "latitude": 14.102,
    "longitude": 99.9172
  },
  "VTUW": {
    "airport": "Nakhon Phanom Airport",
    "latitude": 17.3838,
    "longitude": 104.643
  },
  "VTUQ": {
    "airport": "Nakhon Ratchasima Airport",
    "latitude": 14.9495,
    "longitude": 102.313
  },
  "VTPI": {
    "airport": "Takhli Royal Thai Air Force Base",
    "latitude": 15.2773,
    "longitude": 100.296
  },
  "VTSF": {
    "airport": "Nakhon Si Thammarat Airport",
    "latitude": 8.53962,
    "longitude": 99.9447
  },
  "VTCN": {
    "airport": "Nan Nakhon Airport",
    "latitude": 18.8079,
    "longitude": 100.783
  },
  "VTSC": {
    "airport": "Narathiwat Airport",
    "latitude": 6.51992,
    "longitude": 101.743
  },
  "VTSK": {
    "airport": "Pattani Airport",
    "latitude": 6.78546,
    "longitude": 101.154
  },
  "VTPB": {
    "airport": "Phetchabun Airport",
    "latitude": 16.676,
    "longitude": 101.195
  },
  "VTPP": {
    "airport": "Phitsanulok Airport",
    "latitude": 16.7829,
    "longitude": 100.279
  },
  "VTCP": {
    "airport": "Phrae Airport",
    "latitude": 18.1322,
    "longitude": 100.165
  },
  "VTSP": {
    "airport": "Phuket International Airport",
    "latitude": 8.1132,
    "longitude": 98.3169
  },
  "VTPH": {
    "airport": "Hua Hin Airport",
    "latitude": 12.6362,
    "longitude": 99.9515
  },
  "VTSR": {
    "airport": "Ranong Airport",
    "latitude": 9.77762,
    "longitude": 98.5855
  },
  "VTBU": {
    "airport": "U-Tapao International Airport",
    "latitude": 12.6799,
    "longitude": 101.005
  },
  "VTUV": {
    "airport": "Roi Et Airport",
    "latitude": 16.1168,
    "longitude": 103.774
  },
  "VTUI": {
    "airport": "Sakon Nakhon Airport",
    "latitude": 17.1951,
    "longitude": 104.119
  },
  "VTSS": {
    "airport": "Hat Yai International Airport",
    "latitude": 6.93321,
    "longitude": 100.393
  },
  "VTSH": {
    "airport": "Songkhla Airport",
    "latitude": 7.18656,
    "longitude": 100.608
  },
  "VTPO": {
    "airport": "Sukhothai Airport",
    "latitude": 17.238,
    "longitude": 99.8182
  },
  "VTSB": {
    "airport": "Surat Thani Airport",
    "latitude": 9.1326,
    "longitude": 99.1356
  },
  "VTSM": {
    "airport": "Samui Airport",
    "latitude": 9.54779,
    "longitude": 100.062
  },
  "VTUJ": {
    "airport": "Surin Airport",
    "latitude": 14.8683,
    "longitude": 103.498
  },
  "VTPM": {
    "airport": "Mae Sot Airport",
    "latitude": 16.6999,
    "longitude": 98.5451
  },
  "VTPT": {
    "airport": "Tak Airport",
    "latitude": 16.896,
    "longitude": 99.2533
  },
  "VTST": {
    "airport": "Trang Airport",
    "latitude": 7.50874,
    "longitude": 99.6166
  },
  "VTBO": {
    "airport": "Trat Airport",
    "latitude": 12.2746,
    "longitude": 102.319
  },
  "VTUU": {
    "airport": "Ubon Ratchathani Airport",
    "latitude": 15.2513,
    "longitude": 104.87
  },
  "VTUD": {
    "airport": "Udon Thani International Airport",
    "latitude": 17.3864,
    "longitude": 102.788
  },
  "VTPU": {
    "airport": "Uttaradit Airport",
    "latitude": 17.617,
    "longitude": 100.1
  },
  "UTDD": {
    "airport": "Dushanbe International Airport",
    "latitude": 38.5433,
    "longitude": 68.825
  },
  "UTDT": {
    "airport": "Bokhtar International Airport",
    "latitude": 37.8664,
    "longitude": 68.8647
  },
  "UTDK": {
    "airport": "Kulob Airport",
    "latitude": 37.9881,
    "longitude": 69.805
  },
  "UTDL": {
    "airport": "Khujand Airport",
    "latitude": 40.2154,
    "longitude": 69.6947
  },
  "WPAT": {
    "airport": "Atauro Airport",
    "latitude": -8.24313,
    "longitude": 125.606
  },
  "WPEC": {
    "airport": "Baucau Airport",
    "latitude": -8.48903,
    "longitude": 126.401
  },
  "WPDL": {
    "airport": "Presidente Nicolau Lobato International Airport",
    "latitude": -8.5464,
    "longitude": 125.526
  },
  "WPMN": {
    "airport": "Maliana Airport",
    "latitude": -8.97224,
    "longitude": 125.215
  },
  "WPOC": {
    "airport": "Oecusse Airport",
    "latitude": -9.19806,
    "longitude": 124.343
  },
  "WPDB": {
    "airport": "Suai Airport",
    "latitude": -9.30331,
    "longitude": 125.287
  },
  "WPVQ": {
    "airport": "Viqueque Airport",
    "latitude": -8.8838,
    "longitude": 126.373
  },
  "UTAK": {
    "airport": "Turkmenbashi International Airport",
    "latitude": 40.0633,
    "longitude": 53.0072
  },
  "UTAA": {
    "airport": "Ashgabat International Airport",
    "latitude": 37.9868,
    "longitude": 58.361
  },
  "UTAT": {
    "airport": "Dasoguz Airport",
    "latitude": 41.7611,
    "longitude": 59.8267
  },
  "UTAV": {
    "airport": "Turkmenabat Airport",
    "latitude": 39.0833,
    "longitude": 63.6133
  },
  "UTAE": {
    "airport": "Kerki International Airport",
    "latitude": 37.823,
    "longitude": 65.1399
  },
  "UTAM": {
    "airport": "Mary International Airport",
    "latitude": 37.6194,
    "longitude": 61.8967
  },
  "DTTG": {
    "airport": "Gabes - Matmata International Airport",
    "latitude": 33.8769,
    "longitude": 10.1033
  },
  "DTTF": {
    "airport": "Gafsa - Ksar International Airport",
    "latitude": 34.422,
    "longitude": 8.8225
  },
  "DTKA": {
    "airport": "Tabarka-Ain Draham Internation",
    "latitude": 36.98,
    "longitude": 8.87694
  },
  "DTTJ": {
    "airport": "Djerba-Zarzis International Airport",
    "latitude": 33.875,
    "longitude": 10.7755
  },
  "DTMB": {
    "airport": "Monastir Habib Bourguiba International Airport",
    "latitude": 35.7581,
    "longitude": 10.7547
  },
  "DTTX": {
    "airport": "Sfax-Thyna International Airport",
    "latitude": 34.718,
    "longitude": 10.691
  },
  "DTNH": {
    "airport": "Enfidha-Hammamet International Airport",
    "latitude": 36.0758,
    "longitude": 10.4386
  },
  "DTTR": {
    "airport": "El Borma Airport",
    "latitude": 31.7043,
    "longitude": 9.25462
  },
  "DTTZ": {
    "airport": "Tozeur-Nefta International Airport",
    "latitude": 33.9397,
    "longitude": 8.11056
  },
  "DTTA": {
    "airport": "Tunis–Carthage International Airport",
    "latitude": 36.8511,
    "longitude": 10.2272
  },
  "NFTL": {
    "airport": "Lifuka Island Airport (Salote Pilolevu Airport)",
    "latitude": -19.777,
    "longitude": -174.341
  },
  "NFTO": {
    "airport": "Niuafo'ou Airport",
    "latitude": -15.5708,
    "longitude": -175.633
  },
  "NFTP": {
    "airport": "Niuatoputapu Airport",
    "latitude": -15.9773,
    "longitude": -173.791
  },
  "NFTE": {
    "airport": "Eua Airport (Kaufana Airport)",
    "latitude": -21.3783,
    "longitude": -174.958
  },
  "NFTF": {
    "airport": "Fua'amotu International Airport",
    "latitude": -21.2412,
    "longitude": -175.15
  },
  "NFTV": {
    "airport": "Vava'u International Airport",
    "latitude": -18.5853,
    "longitude": -173.962
  },
  "LTAF": {
    "airport": "Adana Sakirpasa Airport",
    "latitude": 36.9822,
    "longitude": 35.2804
  },
  "LTAG": {
    "airport": "Incirlik Air Base",
    "latitude": 37.0021,
    "longitude": 35.4259
  },
  "LTCP": {
    "airport": "Adiyaman Airport",
    "latitude": 37.7314,
    "longitude": 38.4689
  },
  "LTAH": {
    "airport": "Afyon Airport",
    "latitude": 38.7264,
    "longitude": 30.6011
  },
  "LTCO": {
    "airport": "Agri Airport",
    "latitude": 39.6545,
    "longitude": 43.026
  },
  "LTAP": {
    "airport": "Amasya Merzifon Airport",
    "latitude": 40.8294,
    "longitude": 35.522
  },
  "LTAD": {
    "airport": "Etimesgut Air Base",
    "latitude": 39.9498,
    "longitude": 32.6886
  },
  "LTAC": {
    "airport": "Ankara Esenboğa Airport",
    "latitude": 40.1281,
    "longitude": 32.995
  },
  "LTAI": {
    "airport": "Antalya Airport",
    "latitude": 36.8987,
    "longitude": 30.8005
  },
  "LTFG": {
    "airport": "Gazipasa-Alanya Airport",
    "latitude": 36.2992,
    "longitude": 32.3006
  },
  "LTBD": {
    "airport": "Aydin Airport (Cildir Airport)",
    "latitude": 37.815,
    "longitude": 27.8953
  },
  "LTBG": {
    "airport": "Bandirma Airport",
    "latitude": 40.318,
    "longitude": 27.9777
  },
  "LTBF": {
    "airport": "Balikesir Airport (Merkez Airport)",
    "latitude": 39.6193,
    "longitude": 27.926
  },
  "LTFD": {
    "airport": "Balikesir Koca Seyit Airport",
    "latitude": 39.5546,
    "longitude": 27.0138
  },
  "LTCJ": {
    "airport": "Batman Airport",
    "latitude": 37.929,
    "longitude": 41.1166
  },
  "LTCU": {
    "airport": "Bingol Airport",
    "latitude": 38.8593,
    "longitude": 40.596
  },
  "LTBE": {
    "airport": "Bursa Airport",
    "latitude": 40.2333,
    "longitude": 29.0092
  },
  "LTBR": {
    "airport": "Yenisehir Airport",
    "latitude": 40.2552,
    "longitude": 29.5626
  },
  "LTBH": {
    "airport": "Canakkale Airport",
    "latitude": 40.1377,
    "longitude": 26.4268
  },
  "LTFK": {
    "airport": "Gokceada Airport",
    "latitude": 40.2045,
    "longitude": 25.8833
  },
  "LTAY": {
    "airport": "Denizli Cardak Airport",
    "latitude": 37.7856,
    "longitude": 29.7013
  },
  "LTCC": {
    "airport": "Diyarbakir Airport",
    "latitude": 37.8939,
    "longitude": 40.201
  },
  "LTCA": {
    "airport": "Elazig Airport",
    "latitude": 38.6069,
    "longitude": 39.2914
  },
  "LTCD": {
    "airport": "Erzincan Airport",
    "latitude": 39.7102,
    "longitude": 39.527
  },
  "LTCE": {
    "airport": "Erzurum Airport",
    "latitude": 39.9565,
    "longitude": 41.1702
  },
  "LTBY": {
    "airport": "Anadolu Airport",
    "latitude": 39.8099,
    "longitude": 30.5194
  },
  "LTBI": {
    "airport": "Eskisehir Airport",
    "latitude": 39.7841,
    "longitude": 30.5821
  },
  "LTAJ": {
    "airport": "Gaziantep Oguzeli International Airport",
    "latitude": 36.9472,
    "longitude": 37.4787
  },
  "LTCW": {
    "airport": "Hakkari Yuksekova Airport",
    "latitude": 37.5497,
    "longitude": 44.2381
  },
  "LTDA": {
    "airport": "Hatay Airport",
    "latitude": 36.3628,
    "longitude": 36.2822
  },
  "LTCT": {
    "airport": "Igdir Airport",
    "latitude": 39.9766,
    "longitude": 43.8766
  },
  "LTFC": {
    "airport": "Isparta Suleyman Demirel Airport",
    "latitude": 37.8554,
    "longitude": 30.3684
  },
  "LTBA": {
    "airport": "Istanbul Ataturk Airport",
    "latitude": 40.9769,
    "longitude": 28.8146
  },
  "LTFM": {
    "airport": "Istanbul Ataturk Airport",
    "latitude": 41.2753,
    "longitude": 28.7519
  },
  "LTFJ": {
    "airport": "Sabiha Gokcen International Airport",
    "latitude": 40.8986,
    "longitude": 29.3092
  },
  "LTBJ": {
    "airport": "Izmir Adnan Menderes Airport",
    "latitude": 38.2916,
    "longitude": 27.1487
  },
  "LTCN": {
    "airport": "Kahramanmaras Airport",
    "latitude": 37.5388,
    "longitude": 36.9535
  },
  "LTCF": {
    "airport": "Kars Harakani Airport",
    "latitude": 40.5622,
    "longitude": 43.115
  },
  "LTAL": {
    "airport": "Kastamonu Airport",
    "latitude": 41.3142,
    "longitude": 33.7958
  },
  "LTAU": {
    "airport": "Erkilet International Airport",
    "latitude": 38.7704,
    "longitude": 35.4954
  },
  "LTBQ": {
    "airport": "Cengiz Topel Naval Air Station",
    "latitude": 40.735,
    "longitude": 30.0833
  },
  "LTAN": {
    "airport": "Konya Airport",
    "latitude": 37.979,
    "longitude": 32.5619
  },
  "LTBZ": {
    "airport": "Zafer Airport",
    "latitude": 39.1131,
    "longitude": 30.1281
  },
  "LTAT": {
    "airport": "Malatya Erhac Airport",
    "latitude": 38.4353,
    "longitude": 38.091
  },
  "LTCR": {
    "airport": "Mardin Airport",
    "latitude": 37.2233,
    "longitude": 40.6317
  },
  "LTFE": {
    "airport": "Milas-Bodrum Airport",
    "latitude": 37.2506,
    "longitude": 27.6643
  },
  "LTBV": {
    "airport": "Bodrum-Imsik Airport",
    "latitude": 37.1401,
    "longitude": 27.6697
  },
  "LTBS": {
    "airport": "Dalaman Airport",
    "latitude": 36.7131,
    "longitude": 28.7925
  },
  "LTCK": {
    "airport": "Mus Airport",
    "latitude": 38.7478,
    "longitude": 41.6612
  },
  "LTAZ": {
    "airport": "Nevsehir Kapadokya Air",
    "latitude": 38.7719,
    "longitude": 34.5345
  },
  "LTCB": {
    "airport": "Ordu-Giresun Airport",
    "latitude": 40.966,
    "longitude": 38.081
  },
  "LTFO": {
    "airport": "Rize Artvin Airport",
    "latitude": 41.1692,
    "longitude": 40.8289
  },
  "LTFH": {
    "airport": "Samsun-Carsamba Airport",
    "latitude": 41.2545,
    "longitude": 36.5671
  },
  "LTCS": {
    "airport": "Sanliurfa GAP Airport",
    "latitude": 37.4457,
    "longitude": 38.8956
  },
  "LTCH": {
    "airport": "Sanliurfa Airport",
    "latitude": 37.0943,
    "longitude": 38.8471
  },
  "LTCL": {
    "airport": "Siirt Airport",
    "latitude": 37.9789,
    "longitude": 41.8404
  },
  "LTCM": {
    "airport": "Sinop Airport",
    "latitude": 42.0158,
    "longitude": 35.0664
  },
  "LTCV": {
    "airport": "Sirnak Airport",
    "latitude": 37.3647,
    "longitude": 42.0582
  },
  "LTAR": {
    "airport": "Sivas Airport",
    "latitude": 39.8138,
    "longitude": 36.9035
  },
  "LTBU": {
    "airport": "Tekirdag Corlu Airport",
    "latitude": 41.1382,
    "longitude": 27.9191
  },
  "LTAW": {
    "airport": "Tokat Airport",
    "latitude": 40.3074,
    "longitude": 36.3674
  },
  "LTCG": {
    "airport": "Trabzon Airport",
    "latitude": 40.9951,
    "longitude": 39.7897
  },
  "LTBO": {
    "airport": "Usak Airport",
    "latitude": 38.6815,
    "longitude": 29.4717
  },
  "LTCI": {
    "airport": "Van Ferit Melen Airport",
    "latitude": 38.4682,
    "longitude": 43.3323
  },
  "LTAS": {
    "airport": "Zonguldak Airport",
    "latitude": 41.5064,
    "longitude": 32.0886
  },
  "TTPP": {
    "airport": "Piarco International Airport",
    "latitude": 10.5954,
    "longitude": -61.3372
  },
  "TTCP": {
    "airport": "Arthur Napoleon Raymond Robinson International Airport",
    "latitude": 11.1497,
    "longitude": -60.8322
  },
  "NGFU": {
    "airport": "Funafuti International Airport",
    "latitude": -8.525,
    "longitude": 179.196
  },
  "RCKU": {
    "airport": "Chiayi Airport",
    "latitude": 23.4618,
    "longitude": 120.393
  },
  "RCPO": {
    "airport": "Hsinchu Air Base",
    "latitude": 24.818,
    "longitude": 120.939
  },
  "RCYU": {
    "airport": "Hualien Airport",
    "latitude": 24.0231,
    "longitude": 121.618
  },
  "RCLM": {
    "airport": "Dongsha Island Airport",
    "latitude": 20.7066,
    "longitude": 116.721
  },
  "RCKH": {
    "airport": "Kaohsiung International Airport",
    "latitude": 22.5771,
    "longitude": 120.35
  },
  "RCBS": {
    "airport": "Kinmen Airport (Shang Yi Airport)",
    "latitude": 24.4279,
    "longitude": 118.359
  },
  "RCFG": {
    "airport": "Matsu Nangan Airport",
    "latitude": 26.1598,
    "longitude": 119.958
  },
  "RCMT": {
    "airport": "Matsu Beigan Airport",
    "latitude": 26.2242,
    "longitude": 120.003
  },
  "RCCM": {
    "airport": "Qimei Airport",
    "latitude": 23.2131,
    "longitude": 119.418
  },
  "RCQC": {
    "airport": "Magong Airport",
    "latitude": 23.5687,
    "longitude": 119.628
  },
  "RCWA": {
    "airport": "Wang-an Airport",
    "latitude": 23.3674,
    "longitude": 119.503
  },
  "RCKW": {
    "airport": "Hengchun Airport",
    "latitude": 22.0411,
    "longitude": 120.73
  },
  "RCDC": {
    "airport": "Pingtung South Airport",
    "latitude": 22.7002,
    "longitude": 120.482
  },
  "RCMQ": {
    "airport": "Taichung Airport (Taichung Ching Chuan Kang Airport)",
    "latitude": 24.2647,
    "longitude": 120.621
  },
  "RCNN": {
    "airport": "Tainan Airport",
    "latitude": 22.9504,
    "longitude": 120.206
  },
  "RCSS": {
    "airport": "Taipei Songshan Airport",
    "latitude": 25.0694,
    "longitude": 121.552
  },
  "RCGI": {
    "airport": "Lyudao Airport (Green Island Airport)",
    "latitude": 22.6739,
    "longitude": 121.466
  },
  "RCLY": {
    "airport": "Lanyu Airport",
    "latitude": 22.027,
    "longitude": 121.535
  },
  "RCFN": {
    "airport": "Taitung Airport (Taitung Fongnian Airport)",
    "latitude": 22.755,
    "longitude": 121.102
  },
  "RCTP": {
    "airport": "Taiwan Taoyuan International Airport",
    "latitude": 25.0777,
    "longitude": 121.233
  },
  "HTAR": {
    "airport": "Arusha Airport",
    "latitude": -3.36779,
    "longitude": 36.6333
  },
  "HTLM": {
    "airport": "Lake Manyara Airport",
    "latitude": -3.37631,
    "longitude": 35.8183
  },
  "HTDA": {
    "airport": "Julius Nyerere International Airport",
    "latitude": -6.87811,
    "longitude": 39.2026
  },
  "HTDO": {
    "airport": "Dodoma Airport",
    "latitude": -6.17044,
    "longitude": 35.7526
  },
  "HTGE": {
    "airport": "Geita Airport",
    "latitude": -2.81367,
    "longitude": 32.1725
  },
  "HTIR": {
    "airport": "Iringa Airport (Nduli Airport)",
    "latitude": -7.66863,
    "longitude": 35.7521
  },
  "HTBU": {
    "airport": "Bukoba Airport",
    "latitude": -1.332,
    "longitude": 31.8212
  },
  "HTMP": {
    "airport": "Mpanda Airport",
    "latitude": -6.3559,
    "longitude": 31.0804
  },
  "HTKA": {
    "airport": "Kigoma Airport",
    "latitude": -4.8862,
    "longitude": 29.6709
  },
  "HTKJ": {
    "airport": "Kilimanjaro International Airport",
    "latitude": -3.42941,
    "longitude": 37.0745
  },
  "HTPE": {
    "airport": "Pemba Airport",
    "latitude": -5.25726,
    "longitude": 39.8114
  },
  "HTKI": {
    "airport": "Kilwa Masoko Airport",
    "latitude": -8.91123,
    "longitude": 39.5086
  },
  "HTLI": {
    "airport": "Lindi Airport (Kikwetu Airport)",
    "latitude": -9.85111,
    "longitude": 39.7578
  },
  "HTNA": {
    "airport": "Nachingwea Airport",
    "latitude": -10.3575,
    "longitude": 38.7792
  },
  "HTGR": {
    "airport": "Kirawira B Airstrip",
    "latitude": -2.16083,
    "longitude": 34.2256
  },
  "HTMU": {
    "airport": "Musoma Airport",
    "latitude": -1.503,
    "longitude": 33.8021
  },
  "HTMB": {
    "airport": "Mbeya Airport",
    "latitude": -8.91994,
    "longitude": 33.274
  },
  "HTZA": {
    "airport": "Abeid Amani Karume International Airport",
    "latitude": -6.22202,
    "longitude": 39.2249
  },
  "HTMT": {
    "airport": "Mtwara Airport",
    "latitude": -10.3391,
    "longitude": 40.1818
  },
  "HTMI": {
    "airport": "Masasi Airport",
    "latitude": -10.733,
    "longitude": 38.767
  },
  "HTMW": {
    "airport": "Mwanza Airport",
    "latitude": -2.44449,
    "longitude": 32.9327
  },
  "HTNJ": {
    "airport": "Njombe Airport",
    "latitude": -9.35,
    "longitude": 34.8
  },
  "HTMA": {
    "airport": "Mafia Airport",
    "latitude": -7.91748,
    "longitude": 39.6685
  },
  "HTSU": {
    "airport": "Sumbawanga Airport",
    "latitude": -7.94889,
    "longitude": 31.6103
  },
  "HTSO": {
    "airport": "Songea Airport",
    "latitude": -10.683,
    "longitude": 35.583
  },
  "HTMD": {
    "airport": "Mwadui Airport",
    "latitude": -3.52133,
    "longitude": 33.6155
  },
  "HTSY": {
    "airport": "Shinyanga Airport",
    "latitude": -3.6093,
    "longitude": 33.5035
  },
  "HTSN": {
    "airport": "Seronera Airstrip",
    "latitude": -2.45806,
    "longitude": 34.8225
  },
  "HTTB": {
    "airport": "Tabora Airport",
    "latitude": -5.07639,
    "longitude": 32.8333
  },
  "HTTG": {
    "airport": "Tanga Airport",
    "latitude": -5.09236,
    "longitude": 39.0712
  },
  "UKFK": {
    "airport": "Kerch Airport (Voykovo Airport)",
    "latitude": 45.3725,
    "longitude": 36.4014
  },
  "UKFF": {
    "airport": "Simferopol International Airport",
    "latitude": 45.0522,
    "longitude": 33.9751
  },
  "UKKE": {
    "airport": "Cherkasy International Airport",
    "latitude": 49.4156,
    "longitude": 31.9953
  },
  "UKKL": {
    "airport": "Chernihiv Airport",
    "latitude": 51.4033,
    "longitude": 31.16
  },
  "UKLN": {
    "airport": "Chernivtsi International Airport",
    "latitude": 48.2593,
    "longitude": 25.9808
  },
  "UKDD": {
    "airport": "Dnipropetrovsk International Airport",
    "latitude": 48.3572,
    "longitude": 35.1006
  },
  "UKDR": {
    "airport": "Kryvyi Rih International Airport",
    "latitude": 48.0433,
    "longitude": 33.21
  },
  "UKCC": {
    "airport": "Donetsk International Airport",
    "latitude": 48.0736,
    "longitude": 37.7397
  },
  "UKCK": {
    "airport": "Kramatorsk Airport",
    "latitude": 48.7056,
    "longitude": 37.6289
  },
  "UKCM": {
    "airport": "Mariupol International Airport",
    "latitude": 47.0761,
    "longitude": 37.4496
  },
  "UKLI": {
    "airport": "Ivano-Frankivsk International Airport",
    "latitude": 48.8842,
    "longitude": 24.6861
  },
  "UKHH": {
    "airport": "Kharkiv International Airport (Osnova Airport)",
    "latitude": 49.9248,
    "longitude": 36.29
  },
  "UKOH": {
    "airport": "Kherson International Airport",
    "latitude": 46.6758,
    "longitude": 32.5064
  },
  "UKLH": {
    "airport": "Khmelnytskyi Airport",
    "latitude": 49.3597,
    "longitude": 26.9334
  },
  "UKKG": {
    "airport": "Kirovohrad Airport",
    "latitude": 48.5428,
    "longitude": 32.285
  },
  "UKKK": {
    "airport": "Kyiv International Airport (Zhuliany)",
    "latitude": 50.4019,
    "longitude": 30.4519
  },
  "UKBB": {
    "airport": "Boryspil International Airport",
    "latitude": 50.345,
    "longitude": 30.8947
  },
  "UKCW": {
    "airport": "Luhansk International Airport",
    "latitude": 48.4174,
    "longitude": 39.3741
  },
  "UKLL": {
    "airport": "Lviv Danylo Halytskyi International Airport",
    "latitude": 49.8125,
    "longitude": 23.9561
  },
  "UKON": {
    "airport": "Mykolaiv International Airport",
    "latitude": 47.0579,
    "longitude": 31.9198
  },
  "UKOO": {
    "airport": "Odessa International Airport",
    "latitude": 46.4268,
    "longitude": 30.6765
  },
  "UKHP": {
    "airport": "Poltava Airport",
    "latitude": 49.5686,
    "longitude": 34.3972
  },
  "UKLR": {
    "airport": "Rivne International Airport",
    "latitude": 50.6071,
    "longitude": 26.1416
  },
  "UKFB": {
    "airport": "Sevastopol International Airport",
    "latitude": 44.689,
    "longitude": 33.571
  },
  "UKHS": {
    "airport": "Sumy Airport",
    "latitude": 50.8583,
    "longitude": 34.7625
  },
  "UKLT": {
    "airport": "Ternopil International Airport",
    "latitude": 49.5242,
    "longitude": 25.7001
  },
  "UKWW": {
    "airport": "Havryshivka Vinnytsia International Airport",
    "latitude": 49.2425,
    "longitude": 28.6138
  },
  "UKLC": {
    "airport": "Lutsk Airport",
    "latitude": 50.6784,
    "longitude": 25.4872
  },
  "UKLU": {
    "airport": "Uzhhorod International Airport",
    "latitude": 48.6343,
    "longitude": 22.2634
  },
  "UKDB": {
    "airport": "Berdiansk Airport",
    "latitude": 46.815,
    "longitude": 36.7581
  },
  "UKDE": {
    "airport": "Zaporizhia International Airport",
    "latitude": 47.867,
    "longitude": 35.3157
  },
  "UKKV": {
    "airport": "Zhytomyr Airport",
    "latitude": 50.2706,
    "longitude": 28.7386
  },
  "HUAR": {
    "airport": "Arua Airport",
    "latitude": 3.05,
    "longitude": 30.917
  },
  "HUGU": {
    "airport": "Gulu Airport",
    "latitude": 2.80556,
    "longitude": 32.2718
  },
  "HUJI": {
    "airport": "Jinja Airport",
    "latitude": 0.45,
    "longitude": 33.2
  },
  "HUKF": {
    "airport": "Kabalega Falls Airport",
    "latitude": 2.32872,
    "longitude": 31.4997
  },
  "HUEN": {
    "airport": "Entebbe International Airport",
    "latitude": 0.042386,
    "longitude": 32.4435
  },
  "HUKS": {
    "airport": "Kasese Airport",
    "latitude": 0.183,
    "longitude": 30.1
  },
  "HUMI": {
    "airport": "Masindi Airport",
    "latitude": 1.75806,
    "longitude": 31.7367
  },
  "HUMA": {
    "airport": "Mbarara Airport",
    "latitude": -0.555278,
    "longitude": 30.5994
  },
  "HUPA": {
    "airport": "Pakuba Airfield",
    "latitude": 2.32639,
    "longitude": 31.4978
  },
  "HUSO": {
    "airport": "Soroti Airport",
    "latitude": 1.72769,
    "longitude": 33.6228
  },
  "HUTO": {
    "airport": "Tororo Airport",
    "latitude": 0.683,
    "longitude": 34.167
  },
  "PWAK": {
    "airport": "Wake Island Airfield",
    "latitude": 19.2821,
    "longitude": 166.636
  },
  "KAIV": {
    "airport": "George Downer Airport",
    "latitude": 33.1065,
    "longitude": -88.1978
  },
  "KALX": {
    "airport": "Thomas C. Russell Field",
    "latitude": 32.9147,
    "longitude": -85.963
  },
  "KANB": {
    "airport": "Anniston Regional Airport",
    "latitude": 33.5882,
    "longitude": -85.8581
  },
  "KASN": {
    "airport": "Talladega Municipal Airport",
    "latitude": 33.5699,
    "longitude": -86.0509
  },
  "KAUO": {
    "airport": "Auburn University Regional Airport",
    "latitude": 32.6151,
    "longitude": -85.434
  },
  "KBFM": {
    "airport": "Mobile Downtown Airport",
    "latitude": 30.6268,
    "longitude": -88.0681
  },
  "KBHM": {
    "airport": "Birmingham-Shuttlesworth International Airport",
    "latitude": 33.5629,
    "longitude": -86.7535
  },
  "KDCU": {
    "airport": "Pryor Field Regional Airport",
    "latitude": 34.6527,
    "longitude": -86.9454
  },
  "KDHN": {
    "airport": "Dothan Regional Airport",
    "latitude": 31.3213,
    "longitude": -85.4496
  },
  "KEDN": {
    "airport": "Enterprise Municipal Airport",
    "latitude": 31.2997,
    "longitude": -85.8999
  },
  "KEUF": {
    "airport": "Weedon Field",
    "latitude": 31.9513,
    "longitude": -85.1289
  },
  "KGAD": {
    "airport": "Northeast Alabama Regional Airport",
    "latitude": 33.9726,
    "longitude": -86.089
  },
  "KJKA": {
    "airport": "Jack Edwards Airport",
    "latitude": 30.2905,
    "longitude": -87.6718
  },
  "KHAB": {
    "airport": "Marion County - Rankin Fite Airport",
    "latitude": 34.1176,
    "longitude": -87.9982
  },
  "KHSV": {
    "airport": "Huntsville International Airport (Carl T. Jones Field)",
    "latitude": 34.6372,
    "longitude": -86.7751
  },
  "KHUA": {
    "airport": "Redstone Army Airfield",
    "latitude": 34.6787,
    "longitude": -86.6848
  },
  "KMGM": {
    "airport": "Montgomery Regional Airport (Dannelly Field)",
    "latitude": 32.3006,
    "longitude": -86.394
  },
  "KMOB": {
    "airport": "Mobile Regional Airport",
    "latitude": 30.6912,
    "longitude": -88.2428
  },
  "KMSL": {
    "airport": "Northwest Alabama Regional Airport",
    "latitude": 34.7453,
    "longitude": -87.6102
  },
  "KMVC": {
    "airport": "Monroe County Airport",
    "latitude": 31.458,
    "longitude": -87.351
  },
  "KMXF": {
    "airport": "Maxwell Air Force Base",
    "latitude": 32.3829,
    "longitude": -86.3658
  },
  "KNBJ": {
    "airport": "NOLF Barin",
    "latitude": 30.3891,
    "longitude": -87.6353
  },
  "KOZR": {
    "airport": "Cairns Army Airfield",
    "latitude": 31.2757,
    "longitude": -85.7134
  },
  "KPLR": {
    "airport": "St. Clair County Airport",
    "latitude": 33.5588,
    "longitude": -86.2491
  },
  "KSEM": {
    "airport": "Craig Field",
    "latitude": 32.3439,
    "longitude": -86.9878
  },
  "KTCL": {
    "airport": "Tuscaloosa Regional Airport",
    "latitude": 33.2206,
    "longitude": -87.6114
  },
  "KTOI": {
    "airport": "Troy Municipal Airport",
    "latitude": 31.8604,
    "longitude": -86.0121
  },
  "PAFM": {
    "airport": "Ambler Airport",
    "latitude": 67.1063,
    "longitude": -157.857
  },
  "PADK": {
    "airport": "Adak Airport",
    "latitude": 51.878,
    "longitude": -176.646
  },
  "PADQ": {
    "airport": "Kodiak Airport",
    "latitude": 57.75,
    "longitude": -152.494
  },
  "KPHH": {
    "airport": "Robert F. Swinnie Airport",
    "latitude": 33.4517,
    "longitude": -79.5262
  },
  "PFAL": {
    "airport": "Allakaket Airport",
    "latitude": 66.5518,
    "longitude": -152.622
  },
  "PAGN": {
    "airport": "Angoon Seaplane Base",
    "latitude": 57.5036,
    "longitude": -134.585
  },
  "PAWI": {
    "airport": "Wainwright Airport",
    "latitude": 70.638,
    "longitude": -159.995
  },
  "PAAK": {
    "airport": "Atka Airport",
    "latitude": 52.2203,
    "longitude": -174.206
  },
  "PFAK": {
    "airport": "Akiak Airport",
    "latitude": 60.9029,
    "longitude": -161.231
  },
  "PAKH": {
    "airport": "Akhiok Airport",
    "latitude": 56.9387,
    "longitude": -154.183
  },
  "PAKN": {
    "airport": "King Salmon Airport",
    "latitude": 58.6768,
    "longitude": -156.649
  },
  "PAKP": {
    "airport": "Anaktuvuk Pass Airport",
    "latitude": 68.1336,
    "longitude": -151.743
  },
  "PANC": {
    "airport": "Ted Stevens Anchorage International Airport",
    "latitude": 61.1744,
    "longitude": -149.996
  },
  "PANI": {
    "airport": "Aniak Airport",
    "latitude": 61.5816,
    "longitude": -159.543
  },
  "PANT": {
    "airport": "Annette Island Airport",
    "latitude": 55.0424,
    "longitude": -131.572
  },
  "PANV": {
    "airport": "Anvik Airport",
    "latitude": 62.6467,
    "longitude": -160.191
  },
  "PARC": {
    "airport": "Arctic Village Airport",
    "latitude": 68.1147,
    "longitude": -145.579
  },
  "PATQ": {
    "airport": "Atqasuk Edward Burnell Sr. Memorial Airport",
    "latitude": 70.4673,
    "longitude": -157.436
  },
  "PAAT": {
    "airport": "Casco Cove Coast Guard Station",
    "latitude": 52.8284,
    "longitude": 173.18
  },
  "PABE": {
    "airport": "Bethel Airport",
    "latitude": 60.7798,
    "longitude": -161.838
  },
  "PAGQ": {
    "airport": "Big Lake Airport",
    "latitude": 61.5361,
    "longitude": -149.814
  },
  "PABI": {
    "airport": "Allen Army Airfield",
    "latitude": 63.9945,
    "longitude": -145.722
  },
  "PABL": {
    "airport": "Buckland Airport",
    "latitude": 65.9816,
    "longitude": -161.149
  },
  "PABM": {
    "airport": "Big Mountain Air Force Station",
    "latitude": 59.3612,
    "longitude": -155.259
  },
  "PABR": {
    "airport": "Wiley Post-Will Rogers Memorial Airport",
    "latitude": 71.2854,
    "longitude": -156.766
  },
  "PABA": {
    "airport": "Barter Island LRRS Airport",
    "latitude": 70.134,
    "longitude": -143.582
  },
  "PABT": {
    "airport": "Bettles Airport",
    "latitude": 66.9139,
    "longitude": -151.529
  },
  "PABG": {
    "airport": "Beluga Airport",
    "latitude": 61.1722,
    "longitude": -151.044
  },
  "PACD": {
    "airport": "Cold Bay Airport",
    "latitude": 55.2061,
    "longitude": -162.725
  },
  "PACV": {
    "airport": "Merle K. (Mudhole) Smith Airport",
    "latitude": 60.4918,
    "longitude": -145.478
  },
  "PACE": {
    "airport": "Central Airport",
    "latitude": 65.5738,
    "longitude": -144.783
  },
  "PACI": {
    "airport": "Chalkyitsik Airport",
    "latitude": 66.645,
    "longitude": -143.74
  },
  "PFCL": {
    "airport": "Clarks Point Airport",
    "latitude": 58.8337,
    "longitude": -158.529
  },
  "PACX": {
    "airport": "Coldfoot Airport",
    "latitude": 67.2522,
    "longitude": -150.204
  },
  "PACK": {
    "airport": "Chefornak Airport",
    "latitude": 60.1492,
    "longitude": -164.286
  },
  "PACY": {
    "airport": "Yakataga Airport",
    "latitude": 60.081,
    "longitude": -142.495
  },
  "PACZ": {
    "airport": "Cape Romanzof LRRS Airport",
    "latitude": 61.7803,
    "longitude": -166.039
  },
  "PADL": {
    "airport": "Dillingham Airport",
    "latitude": 59.0447,
    "longitude": -158.505
  },
  "PADE": {
    "airport": "Deering Airport",
    "latitude": 66.0696,
    "longitude": -162.766
  },
  "PADU": {
    "airport": "Unalaska Airport",
    "latitude": 53.9001,
    "longitude": -166.544
  },
  "PAEG": {
    "airport": "Eagle Airport",
    "latitude": 64.7764,
    "longitude": -141.151
  },
  "PAED": {
    "airport": "Elmendorf Air Force Base",
    "latitude": 61.251,
    "longitude": -149.807
  },
  "PAEE": {
    "airport": "Eek Airport",
    "latitude": 60.2137,
    "longitude": -162.044
  },
  "PAII": {
    "airport": "Egegik Airport",
    "latitude": 58.1855,
    "longitude": -157.375
  },
  "PAEH": {
    "airport": "Cape Newenham LRRS Airport",
    "latitude": 58.6464,
    "longitude": -162.063
  },
  "PAEI": {
    "airport": "Eielson Air Force Base",
    "latitude": 64.6657,
    "longitude": -147.102
  },
  "PFEL": {
    "airport": "Elim Airport",
    "latitude": 64.6147,
    "longitude": -162.272
  },
  "PAEL": {
    "airport": "Elfin Cove Seaplane Base",
    "latitude": 58.1952,
    "longitude": -136.347
  },
  "PAEM": {
    "airport": "Emmonak Airport",
    "latitude": 62.7861,
    "longitude": -164.491
  },
  "PAEN": {
    "airport": "Kenai Municipal Airport",
    "latitude": 60.5731,
    "longitude": -151.245
  },
  "PANN": {
    "airport": "Nenana Municipal Airport",
    "latitude": 64.5473,
    "longitude": -149.074
  },
  "PAFA": {
    "airport": "Fairbanks International Airport",
    "latitude": 64.8151,
    "longitude": -147.856
  },
  "PAFB": {
    "airport": "Ladd Army Airfield",
    "latitude": 64.8375,
    "longitude": -147.614
  },
  "PANR": {
    "airport": "Funter Bay Seaplane Base",
    "latitude": 58.2544,
    "longitude": -134.898
  },
  "PAFR": {
    "airport": "Bryant Army Airport",
    "latitude": 61.2664,
    "longitude": -149.653
  },
  "PAFW": {
    "airport": "Farewell Airport",
    "latitude": 62.5093,
    "longitude": -153.892
  },
  "PFYU": {
    "airport": "Fort Yukon Airport",
    "latitude": 66.5715,
    "longitude": -145.25
  },
  "PAGA": {
    "airport": "Edward G. Pitka Sr. Airport",
    "latitude": 64.7362,
    "longitude": -156.937
  },
  "PAGM": {
    "airport": "Gambell Airport",
    "latitude": 63.7668,
    "longitude": -171.733
  },
  "PAGB": {
    "airport": "Galbraith Lake Airport",
    "latitude": 68.4797,
    "longitude": -149.49
  },
  "PAGK": {
    "airport": "Gulkana Airport",
    "latitude": 62.1549,
    "longitude": -145.457
  },
  "PAGL": {
    "airport": "Golovin Airport",
    "latitude": 64.5505,
    "longitude": -163.007
  },
  "PAGZ": {
    "airport": "Granite Mountain Air Station",
    "latitude": 65.4021,
    "longitude": -161.281
  },
  "PAGS": {
    "airport": "Gustavus Airport",
    "latitude": 58.4253,
    "longitude": -135.707
  },
  "PAHC": {
    "airport": "Holy Cross Airport",
    "latitude": 62.1883,
    "longitude": -159.775
  },
  "PAOH": {
    "airport": "Hoonah Airport",
    "latitude": 58.0961,
    "longitude": -135.41
  },
  "PAHN": {
    "airport": "Haines Airport",
    "latitude": 59.2438,
    "longitude": -135.524
  },
  "PAHO": {
    "airport": "Homer Airport",
    "latitude": 59.6456,
    "longitude": -151.477
  },
  "PAHP": {
    "airport": "Hooper Bay Airport",
    "latitude": 61.5239,
    "longitude": -166.147
  },
  "PAHL": {
    "airport": "Huslia Airport",
    "latitude": 65.6979,
    "longitude": -156.351
  },
  "PAHU": {
    "airport": "Hughes Airport",
    "latitude": 66.0411,
    "longitude": -154.263
  },
  "PAHY": {
    "airport": "Hydaburg Seaplane Base",
    "latitude": 55.2063,
    "longitude": -132.828
  },
  "PAIK": {
    "airport": "Bob Baker Memorial Airport",
    "latitude": 66.976,
    "longitude": -160.437
  },
  "PAIG": {
    "airport": "Igiugig Airport",
    "latitude": 59.324,
    "longitude": -155.902
  },
  "PAKO": {
    "airport": "Nikolski Air Station",
    "latitude": 52.9416,
    "longitude": -168.849
  },
  "PAIL": {
    "airport": "Iliamna Airport",
    "latitude": 59.7544,
    "longitude": -154.911
  },
  "PACR": {
    "airport": "Circle City Airport",
    "latitude": 65.8305,
    "longitude": -144.076
  },
  "PAJN": {
    "airport": "Juneau International Airport",
    "latitude": 58.355,
    "longitude": -134.576
  },
  "PAFE": {
    "airport": "Kake Airport",
    "latitude": 56.973,
    "longitude": -133.946
  },
  "PAKV": {
    "airport": "Kaltag Airport",
    "latitude": 64.3191,
    "longitude": -158.741
  },
  "PAKD": {
    "airport": "Kodiak Municipal Airport",
    "latitude": 57.8059,
    "longitude": -152.374
  },
  "PAKF": {
    "airport": "False Pass Airport",
    "latitude": 54.8474,
    "longitude": -163.41
  },
  "PAJZ": {
    "airport": "Koliganek Airport",
    "latitude": 59.7266,
    "longitude": -157.259
  },
  "PAKK": {
    "airport": "Koyuk Alfred Adams Airport",
    "latitude": 64.9395,
    "longitude": -161.154
  },
  "PADY": {
    "airport": "Kongiganak Airport",
    "latitude": 59.9608,
    "longitude": -162.881
  },
  "PALG": {
    "airport": "Kalskag Airport",
    "latitude": 61.5363,
    "longitude": -160.341
  },
  "PALB": {
    "airport": "Larsen Bay Airport",
    "latitude": 57.5351,
    "longitude": -153.978
  },
  "PAKW": {
    "airport": "Klawock Airport",
    "latitude": 55.5792,
    "longitude": -133.076
  },
  "PAMB": {
    "airport": "Manokotak Airport",
    "latitude": 58.9902,
    "longitude": -159.05
  },
  "PANW": {
    "airport": "New Stuyahok Airport",
    "latitude": 59.4499,
    "longitude": -157.328
  },
  "PFKO": {
    "airport": "Kotlik Airport",
    "latitude": 63.0306,
    "longitude": -163.533
  },
  "PAPC": {
    "airport": "Port Clarence Coast Guard Station",
    "latitude": 65.2537,
    "longitude": -166.859
  },
  "PAKI": {
    "airport": "Kipnuk Airport",
    "latitude": 59.933,
    "longitude": -164.031
  },
  "PAPE": {
    "airport": "Perryville Airport",
    "latitude": 55.906,
    "longitude": -159.163
  },
  "PASM": {
    "airport": "St. Mary's Airport",
    "latitude": 62.0605,
    "longitude": -163.302
  },
  "PAKT": {
    "airport": "Ketchikan International Airport",
    "latitude": 55.3556,
    "longitude": -131.714
  },
  "PFKT": {
    "airport": "Brevig Mission Airport",
    "latitude": 65.3313,
    "longitude": -166.466
  },
  "PFKA": {
    "airport": "Kasigluk Airport",
    "latitude": 60.8744,
    "longitude": -162.524
  },
  "PAVC": {
    "airport": "King Cove Airport",
    "latitude": 55.1163,
    "longitude": -162.266
  },
  "PAVL": {
    "airport": "Kivalina Airport",
    "latitude": 67.7362,
    "longitude": -164.563
  },
  "PAGG": {
    "airport": "Kwigillingok Airport",
    "latitude": 59.8765,
    "longitude": -163.169
  },
  "PAQH": {
    "airport": "Quinhagak Airport",
    "latitude": 59.7551,
    "longitude": -161.845
  },
  "PFKW": {
    "airport": "Kwethluk Airport",
    "latitude": 60.7903,
    "longitude": -161.444
  },
  "PAKY": {
    "airport": "Karluk Airport",
    "latitude": 57.5671,
    "longitude": -154.45
  },
  "PFKU": {
    "airport": "Koyukuk Airport",
    "latitude": 64.8761,
    "longitude": -157.727
  },
  "PAKL": {
    "airport": "Kulik Lake Airport",
    "latitude": 58.9821,
    "longitude": -155.121
  },
  "PAMH": {
    "airport": "Lake Minchumina Airport",
    "latitude": 63.886,
    "longitude": -152.302
  },
  "PALN": {
    "airport": "Point Lonely Short Range Radar Site",
    "latitude": 70.9107,
    "longitude": -153.242
  },
  "PALU": {
    "airport": "Cape Lisburne LRRS Airport",
    "latitude": 68.8751,
    "longitude": -166.11
  },
  "PAMC": {
    "airport": "McGrath Airport",
    "latitude": 62.9529,
    "longitude": -155.606
  },
  "PAIN": {
    "airport": "McKinley National Park Airport",
    "latitude": 63.7326,
    "longitude": -148.911
  },
  "PAMD": {
    "airport": "Middleton Island Airport",
    "latitude": 59.4499,
    "longitude": -146.307
  },
  "PADM": {
    "airport": "Marshall Don Hunter Sr. Airport",
    "latitude": 61.8643,
    "longitude": -162.026
  },
  "PAML": {
    "airport": "Manley Hot Springs Airport",
    "latitude": 64.9976,
    "longitude": -150.644
  },
  "PAMO": {
    "airport": "Mountain Village Airport",
    "latitude": 62.0954,
    "longitude": -163.682
  },
  "PAMR": {
    "airport": "Merrill Field",
    "latitude": 61.2135,
    "longitude": -149.844
  },
  "PAMM": {
    "airport": "Metlakatla Seaplane Base",
    "latitude": 55.131,
    "longitude": -131.578
  },
  "PABK": {
    "airport": "Metro Field",
    "latitude": 64.8068,
    "longitude": -147.762
  },
  "PAMX": {
    "airport": "McCarthy Airport",
    "latitude": 61.4371,
    "longitude": -142.904
  },
  "PAMY": {
    "airport": "Mekoryuk Airport",
    "latitude": 60.3714,
    "longitude": -166.271
  },
  "PFCB": {
    "airport": "Chenega Bay Airport",
    "latitude": 60.0773,
    "longitude": -147.992
  },
  "PAFS": {
    "airport": "Nikolai Airport",
    "latitude": 63.0186,
    "longitude": -154.358
  },
  "PAOU": {
    "airport": "Nelson Lagoon Airport",
    "latitude": 56.0075,
    "longitude": -161.16
  },
  "PAGT": {
    "airport": "Nightmute Airport",
    "latitude": 60.471,
    "longitude": -164.701
  },
  "PANO": {
    "airport": "Nondalton Airport",
    "latitude": 59.9802,
    "longitude": -154.839
  },
  "PAQT": {
    "airport": "Nuiqsut Airport",
    "latitude": 70.21,
    "longitude": -151.006
  },
  "PANU": {
    "airport": "Nulato Airport",
    "latitude": 64.7293,
    "longitude": -158.074
  },
  "PAOB": {
    "airport": "Kobuk Airport",
    "latitude": 66.9123,
    "longitude": -156.897
  },
  "PAOM": {
    "airport": "Nome Airport",
    "latitude": 64.5122,
    "longitude": -165.445
  },
  "PAOO": {
    "airport": "Toksook Bay Airport",
    "latitude": 60.5414,
    "longitude": -165.087
  },
  "KORI": {
    "airport": "Port Lions Airport",
    "latitude": 57.8853,
    "longitude": -152.846
  },
  "PAOR": {
    "airport": "Northway Airport",
    "latitude": 62.9613,
    "longitude": -141.929
  },
  "PFNO": {
    "airport": "Robert (Bob) Curtis Memorial Airport",
    "latitude": 66.8179,
    "longitude": -161.019
  },
  "PAOT": {
    "airport": "Ralph Wien Memorial Airport",
    "latitude": 66.8847,
    "longitude": -162.599
  },
  "PAAQ": {
    "airport": "Palmer Municipal Airport",
    "latitude": 61.5949,
    "longitude": -149.089
  },
  "PAOC": {
    "airport": "Portage Creek Airport",
    "latitude": 58.9065,
    "longitude": -157.714
  },
  "PAPO": {
    "airport": "Point Hope Airport",
    "latitude": 68.3488,
    "longitude": -166.799
  },
  "PAPN": {
    "airport": "Pilot Point Airport",
    "latitude": 57.5804,
    "longitude": -157.572
  },
  "PPIZ": {
    "airport": "Point Lay LRRS Airport",
    "latitude": 69.7329,
    "longitude": -163.005
  },
  "PAPK": {
    "airport": "Napaskiak Airport",
    "latitude": 60.7029,
    "longitude": -161.778
  },
  "PAAL": {
    "airport": "Port Moller Airport",
    "latitude": 56.006,
    "longitude": -160.561
  },
  "PAPR": {
    "airport": "Prospect Creek Airport",
    "latitude": 66.8141,
    "longitude": -150.644
  },
  "PAPG": {
    "airport": "Petersburg James A. Johnson Airport",
    "latitude": 56.8017,
    "longitude": -132.945
  },
  "PALJ": {
    "airport": "Port Alsworth Airport",
    "latitude": 60.2017,
    "longitude": -154.326
  },
  "PAAP": {
    "airport": "Port Alexander Seaplane Base",
    "latitude": 56.2468,
    "longitude": -134.648
  },
  "PAPH": {
    "airport": "Port Heiden Airport",
    "latitude": 56.9591,
    "longitude": -158.633
  },
  "PAPM": {
    "airport": "Platinum Airport",
    "latitude": 59.0114,
    "longitude": -161.82
  },
  "PARY": {
    "airport": "Ruby Airport",
    "latitude": 64.7272,
    "longitude": -155.47
  },
  "PADG": {
    "airport": "Red Dog Airport",
    "latitude": 68.0321,
    "longitude": -162.899
  },
  "PARS": {
    "airport": "Russian Mission Airport",
    "latitude": 61.7789,
    "longitude": -161.319
  },
  "PASC": {
    "airport": "Deadhorse Airport",
    "latitude": 70.1947,
    "longitude": -148.465
  },
  "PACM": {
    "airport": "Scammon Bay Airport",
    "latitude": 61.8453,
    "longitude": -165.571
  },
  "PASD": {
    "airport": "Sand Point Airport",
    "latitude": 55.315,
    "longitude": -160.523
  },
  "PAGY": {
    "airport": "Skagway Airport",
    "latitude": 59.4601,
    "longitude": -135.316
  },
  "PAGH": {
    "airport": "Shungnak Airport",
    "latitude": 66.8881,
    "longitude": -157.162
  },
  "PASH": {
    "airport": "Shishmaref Airport",
    "latitude": 66.2496,
    "longitude": -166.089
  },
  "PAHX": {
    "airport": "Shageluk Airport",
    "latitude": 62.6923,
    "longitude": -159.569
  },
  "PASI": {
    "airport": "Sitka Rocky Gutierrez Airport",
    "latitude": 57.0471,
    "longitude": -135.362
  },
  "PFSH": {
    "airport": "Shaktoolik Airport",
    "latitude": 64.3711,
    "longitude": -161.224
  },
  "PASW": {
    "airport": "Skwentna Airport",
    "latitude": 61.9653,
    "longitude": -151.191
  },
  "PASL": {
    "airport": "Sleetmute Airport",
    "latitude": 61.7005,
    "longitude": -157.166
  },
  "PAMK": {
    "airport": "St. Michael Airport",
    "latitude": 63.4901,
    "longitude": -162.11
  },
  "PASP": {
    "airport": "Sheep Mountain Airport",
    "latitude": 61.812,
    "longitude": -147.507
  },
  "PASN": {
    "airport": "St. Paul Island Airport",
    "latitude": 57.1673,
    "longitude": -170.22
  },
  "PASO": {
    "airport": "Seldovia Airport",
    "latitude": 59.4424,
    "longitude": -151.704
  },
  "PAPB": {
    "airport": "St. George Airport",
    "latitude": 56.5783,
    "longitude": -169.662
  },
  "PASA": {
    "airport": "Savoonga Airport",
    "latitude": 63.6864,
    "longitude": -170.493
  },
  "PASV": {
    "airport": "Sparrevohn LRRS Airport",
    "latitude": 61.0974,
    "longitude": -155.574
  },
  "PAWD": {
    "airport": "Seward Airport",
    "latitude": 60.1269,
    "longitude": -149.419
  },
  "PASX": {
    "airport": "Soldotna Airport",
    "latitude": 60.4757,
    "longitude": -151.034
  },
  "PASY": {
    "airport": "Eareckson Air Station",
    "latitude": 52.7123,
    "longitude": 174.114
  },
  "PATA": {
    "airport": "Ralph M. Calhoun Memorial Airport",
    "latitude": 65.1744,
    "longitude": -152.109
  },
  "PATK": {
    "airport": "Talkeetna Airport",
    "latitude": 62.3205,
    "longitude": -150.094
  },
  "PFTO": {
    "airport": "Tok Junction Airport",
    "latitude": 63.3295,
    "longitude": -142.954
  },
  "PATE": {
    "airport": "Teller Airport",
    "latitude": 65.2404,
    "longitude": -166.339
  },
  "PATL": {
    "airport": "Tatalina LRRS Airport",
    "latitude": 62.8944,
    "longitude": -155.977
  },
  "PATC": {
    "airport": "Tin City LRRS Airport",
    "latitude": 65.5631,
    "longitude": -167.922
  },
  "PATG": {
    "airport": "Togiak Airport",
    "latitude": 59.0528,
    "longitude": -160.397
  },
  "PAST": {
    "airport": "Summit Airport",
    "latitude": 63.3315,
    "longitude": -149.127
  },
  "PAUM": {
    "airport": "Umiat Airport",
    "latitude": 69.3711,
    "longitude": -152.136
  },
  "PAUN": {
    "airport": "Unalakleet Airport",
    "latitude": 63.8884,
    "longitude": -160.799
  },
  "PAIM": {
    "airport": "Indian Mountain LRRS Airport",
    "latitude": 65.9928,
    "longitude": -153.704
  },
  "PAKU": {
    "airport": "Ugnu-Kuparuk Airport",
    "latitude": 70.3308,
    "longitude": -149.598
  },
  "PAVA": {
    "airport": "Chevak Airport",
    "latitude": 61.5409,
    "longitude": -165.6
  },
  "PAVD": {
    "airport": "Valdez Airport (Pioneer Field)",
    "latitude": 61.1339,
    "longitude": -146.248
  },
  "PAVE": {
    "airport": "Venetie Airport",
    "latitude": 67.0087,
    "longitude": -146.366
  },
  "PAIW": {
    "airport": "Wales Airport",
    "latitude": 65.6226,
    "longitude": -168.095
  },
  "PAWB": {
    "airport": "Beaver Airport",
    "latitude": 66.3622,
    "longitude": -147.407
  },
  "PALR": {
    "airport": "Chandalar Lake Airport",
    "latitude": 67.5045,
    "longitude": -148.483
  },
  "PASK": {
    "airport": "Selawik Airport",
    "latitude": 66.6001,
    "longitude": -159.986
  },
  "PAWM": {
    "airport": "White Mountain Airport",
    "latitude": 64.6892,
    "longitude": -163.413
  },
  "PANA": {
    "airport": "Napakiak Airport",
    "latitude": 60.6903,
    "longitude": -161.979
  },
  "PAUO": {
    "airport": "Willow Airport",
    "latitude": 61.7542,
    "longitude": -150.052
  },
  "PAWG": {
    "airport": "Wrangell Airport",
    "latitude": 56.4843,
    "longitude": -132.37
  },
  "PACS": {
    "airport": "Cape Sarichef Airport",
    "latitude": 61.1821,
    "longitude": -149.863
  },
  "PFWS": {
    "airport": "South Naknek Airport",
    "latitude": 58.7034,
    "longitude": -157.008
  },
  "PAWN": {
    "airport": "Noatak Airport",
    "latitude": 67.5661,
    "longitude": -162.975
  },
  "PAWS": {
    "airport": "Wasilla Airport",
    "latitude": 61.5717,
    "longitude": -149.54
  },
  "PAEW": {
    "airport": "Newtok Airport",
    "latitude": 60.9391,
    "longitude": -164.641
  },
  "PAYA": {
    "airport": "Yakutat Airport",
    "latitude": 59.5033,
    "longitude": -139.66
  },
  "KAVQ": {
    "airport": "Marana Regional Airport",
    "latitude": 32.4096,
    "longitude": -111.218
  },
  "KIWA": {
    "airport": "Phoenix-Mesa Gateway Airport",
    "latitude": 33.3078,
    "longitude": -111.655
  },
  "KBXK": {
    "airport": "Buckeye Municipal Airport",
    "latitude": 33.4204,
    "longitude": -112.686
  },
  "KCFT": {
    "airport": "Greenlee County Airport",
    "latitude": 32.9528,
    "longitude": -109.21
  },
  "KCGZ": {
    "airport": "Casa Grande Municipal Airport",
    "latitude": 32.9549,
    "longitude": -111.767
  },
  "KDGL": {
    "airport": "Douglas Municipal Airport",
    "latitude": 31.3426,
    "longitude": -109.506
  },
  "KDMA": {
    "airport": "Davis-Monthan Air Force Base",
    "latitude": 32.1665,
    "longitude": -110.883
  },
  "KDUG": {
    "airport": "Bisbee Douglas International Airport",
    "latitude": 31.469,
    "longitude": -109.604
  },
  "KDVT": {
    "airport": "Phoenix Deer Valley Airport",
    "latitude": 33.6883,
    "longitude": -112.083
  },
  "KFHU": {
    "airport": "Sierra Vista Municipal Airport (Libby Army Airfield)",
    "latitude": 31.5885,
    "longitude": -110.344
  },
  "KFLG": {
    "airport": "Flagstaff Pulliam Airport",
    "latitude": 35.1385,
    "longitude": -111.671
  },
  "KGCN": {
    "airport": "Grand Canyon National Park Airport",
    "latitude": 35.9524,
    "longitude": -112.147
  },
  "KGYR": {
    "airport": "Phoenix Goodyear Airport",
    "latitude": 33.4225,
    "longitude": -112.376
  },
  "KHII": {
    "airport": "Lake Havasu City Airport",
    "latitude": 34.5711,
    "longitude": -114.358
  },
  "KIFP": {
    "airport": "Laughlin/Bullhead International Airport",
    "latitude": 35.1574,
    "longitude": -114.56
  },
  "KIGM": {
    "airport": "Kingman Airport",
    "latitude": 35.2595,
    "longitude": -113.938
  },
  "KINW": {
    "airport": "Winslow-Lindbergh Regional Airport",
    "latitude": 35.0219,
    "longitude": -110.723
  },
  "KLGF": {
    "airport": "Laguna Army Airfield",
    "latitude": 32.86,
    "longitude": -114.397
  },
  "KLUF": {
    "airport": "Luke Air Force Base",
    "latitude": 33.535,
    "longitude": -112.383
  },
  "KFFZ": {
    "airport": "Falcon Field Airport",
    "latitude": 33.4608,
    "longitude": -111.728
  },
  "KMZJ": {
    "airport": "Pinal Airpark",
    "latitude": 32.5106,
    "longitude": -111.328
  },
  "KOLS": {
    "airport": "Nogales International Airport",
    "latitude": 31.4177,
    "longitude": -110.848
  },
  "KPGA": {
    "airport": "Page Municipal Airport",
    "latitude": 36.9261,
    "longitude": -111.448
  },
  "KPHX": {
    "airport": "Phoenix Sky Harbor International Airport",
    "latitude": 33.4343,
    "longitude": -112.012
  },
  "KPAN": {
    "airport": "Payson Airport",
    "latitude": 34.2568,
    "longitude": -111.339
  },
  "KPRC": {
    "airport": "Ernest A. Love Field",
    "latitude": 34.6545,
    "longitude": -112.42
  },
  "KSAD": {
    "airport": "Safford Regional Airport",
    "latitude": 32.8548,
    "longitude": -109.635
  },
  "KSDL": {
    "airport": "Scottsdale Airport",
    "latitude": 33.6229,
    "longitude": -111.911
  },
  "KSEZ": {
    "airport": "Sedona Airport",
    "latitude": 34.8486,
    "longitude": -111.788
  },
  "KSJN": {
    "airport": "St. Johns Industrial Air Park",
    "latitude": 34.5186,
    "longitude": -109.379
  },
  "KSOW": {
    "airport": "Show Low Regional Airport",
    "latitude": 34.2655,
    "longitude": -110.006
  },
  "KTUS": {
    "airport": "Tucson International Airport",
    "latitude": 32.1161,
    "longitude": -110.941
  },
  "KTYL": {
    "airport": "Taylor Airport",
    "latitude": 34.4528,
    "longitude": -110.115
  },
  "KNYL": {
    "airport": "Yuma International Airport / MCAS Yuma",
    "latitude": 32.6566,
    "longitude": -114.606
  },
  "KAGO": {
    "airport": "Magnolia Municipal Airport",
    "latitude": 33.228,
    "longitude": -93.217
  },
  "KARG": {
    "airport": "Walnut Ridge Regional Airport",
    "latitude": 36.1247,
    "longitude": -90.9251
  },
  "KAWM": {
    "airport": "West Memphis Municipal Airport",
    "latitude": 35.1351,
    "longitude": -90.2344
  },
  "KBVX": {
    "airport": "Batesville Regional Airport",
    "latitude": 35.7262,
    "longitude": -91.6473
  },
  "KBYH": {
    "airport": "Arkansas International Airport",
    "latitude": 35.9643,
    "longitude": -89.944
  },
  "KCDH": {
    "airport": "Harrell Field",
    "latitude": 33.6228,
    "longitude": -92.7634
  },
  "KCVK": {
    "airport": "Sharp County Regional Airport",
    "latitude": 36.2649,
    "longitude": -91.5626
  },
  "KCRT": {
    "airport": "Z. M. Jack Stell Field",
    "latitude": 33.1783,
    "longitude": -91.8802
  },
  "KELD": {
    "airport": "South Arkansas Regional Airport at Goodwin Field",
    "latitude": 33.221,
    "longitude": -92.8133
  },
  "KFCY": {
    "airport": "Forrest City Municipal Airport",
    "latitude": 34.942,
    "longitude": -90.775
  },
  "KFLP": {
    "airport": "Marion County Regional Airport",
    "latitude": 36.2909,
    "longitude": -92.5903
  },
  "KFSM": {
    "airport": "Fort Smith Regional Airport",
    "latitude": 35.3366,
    "longitude": -94.3674
  },
  "KFYV": {
    "airport": "Drake Field (Fayetteville Executive Airport)",
    "latitude": 36.0051,
    "longitude": -94.1701
  },
  "KHEE": {
    "airport": "Thompson-Robbins Airport",
    "latitude": 34.5766,
    "longitude": -90.6762
  },
  "KHKA": {
    "airport": "Blytheville Municipal Airport",
    "latitude": 35.9404,
    "longitude": -89.8308
  },
  "KHOT": {
    "airport": "Memorial Field Airport",
    "latitude": 34.478,
    "longitude": -93.0962
  },
  "KHRO": {
    "airport": "Boone County Airport",
    "latitude": 36.2615,
    "longitude": -93.1547
  },
  "KJBR": {
    "airport": "Jonesboro Municipal Airport",
    "latitude": 35.8317,
    "longitude": -90.6464
  },
  "KLIT": {
    "airport": "Clinton National Airport (Adams Field)",
    "latitude": 34.7294,
    "longitude": -92.2243
  },
  "KLRF": {
    "airport": "Little Rock Air Force Base",
    "latitude": 34.9169,
    "longitude": -92.1497
  },
  "KMPJ": {
    "airport": "Petit Jean Park Airport",
    "latitude": 35.1389,
    "longitude": -92.9092
  },
  "KMXA": {
    "airport": "Manila Municipal Airport",
    "latitude": 35.8944,
    "longitude": -90.1546
  },
  "KPBF": {
    "airport": "Grider Field",
    "latitude": 34.1731,
    "longitude": -91.9356
  },
  "KPGR": {
    "airport": "Kirk Field",
    "latitude": 36.0629,
    "longitude": -90.5078
  },
  "KROG": {
    "airport": "Rogers Municipal Airport (Carter Field)",
    "latitude": 36.3723,
    "longitude": -94.1069
  },
  "KSGT": {
    "airport": "Stuttgart Municipal Airport",
    "latitude": 34.5995,
    "longitude": -91.575
  },
  "KSLG": {
    "airport": "Smith Field",
    "latitude": 36.1919,
    "longitude": -94.49
  },
  "KASG": {
    "airport": "Springdale Municipal Airport",
    "latitude": 36.1764,
    "longitude": -94.1193
  },
  "KSRC": {
    "airport": "Searcy Municipal Airport",
    "latitude": 35.2106,
    "longitude": -91.7375
  },
  "KTXK": {
    "airport": "Texarkana Regional Airport (Webb Field)",
    "latitude": 33.4537,
    "longitude": -93.991
  },
  "KBPK": {
    "airport": "Ozark Regional Airport",
    "latitude": 36.3689,
    "longitude": -92.4705
  },
  "KXNA": {
    "airport": "Northwest Arkansas Regional Airport",
    "latitude": 36.2819,
    "longitude": -94.3068
  },
  "KVBT": {
    "airport": "Bentonville Municipal Airport",
    "latitude": 36.3458,
    "longitude": -94.2194
  },
  "KACV": {
    "airport": "Arcata-Eureka Airport",
    "latitude": 40.9781,
    "longitude": -124.109
  },
  "KAHC": {
    "airport": "Amedee Army Airfield",
    "latitude": 40.2662,
    "longitude": -120.153
  },
  "KAPC": {
    "airport": "Napa County Airport",
    "latitude": 38.2132,
    "longitude": -122.281
  },
  "KAPV": {
    "airport": "Apple Valley Airport",
    "latitude": 34.5753,
    "longitude": -117.186
  },
  "KAUN": {
    "airport": "Auburn Municipal Airport",
    "latitude": 38.9548,
    "longitude": -121.082
  },
  "KAVX": {
    "airport": "Catalina Airport",
    "latitude": 33.4049,
    "longitude": -118.416
  },
  "KBAB": {
    "airport": "Beale Air Force Base",
    "latitude": 39.1361,
    "longitude": -121.437
  },
  "KBFL": {
    "airport": "Meadows Field Airport",
    "latitude": 35.4336,
    "longitude": -119.057
  },
  "KBIH": {
    "airport": "Eastern Sierra Regional Airport",
    "latitude": 37.3731,
    "longitude": -118.364
  },
  "KBLH": {
    "airport": "Blythe Airport",
    "latitude": 33.6192,
    "longitude": -114.717
  },
  "KBLU": {
    "airport": "Blue Canyon-Nyack Airport",
    "latitude": 39.275,
    "longitude": -120.71
  },
  "KBNG": {
    "airport": "Banning Municipal Airport",
    "latitude": 33.9231,
    "longitude": -116.851
  },
  "KBUR": {
    "airport": "Bob Hope Airport",
    "latitude": 34.2007,
    "longitude": -118.359
  },
  "KBWC": {
    "airport": "Brawley Municipal Airport",
    "latitude": 32.9929,
    "longitude": -115.517
  },
  "KBYS": {
    "airport": "Bicycle Lake Army Airfield (Fort Irwin)",
    "latitude": 35.2805,
    "longitude": -116.63
  },
  "KCCB": {
    "airport": "Cable Airport",
    "latitude": 34.1116,
    "longitude": -117.688
  },
  "KCCR": {
    "airport": "Buchanan Field Airport",
    "latitude": 37.9897,
    "longitude": -122.057
  },
  "KCEC": {
    "airport": "Del Norte County Airport (Jack McNamara Field)",
    "latitude": 41.7802,
    "longitude": -124.237
  },
  "KCIC": {
    "airport": "Chico Municipal Airport",
    "latitude": 39.7954,
    "longitude": -121.858
  },
  "KCRQ": {
    "airport": "McClellan-Palomar Airport",
    "latitude": 33.1283,
    "longitude": -117.28
  },
  "KCLR": {
    "airport": "Cliff Hatfield Memorial Airport",
    "latitude": 33.1315,
    "longitude": -115.521
  },
  "KCNO": {
    "airport": "Chino Airport",
    "latitude": 33.9747,
    "longitude": -117.637
  },
  "KCPM": {
    "airport": "Compton/Woodley Airport",
    "latitude": 33.89,
    "longitude": -118.244
  },
  "KCRO": {
    "airport": "Corcoran Airport",
    "latitude": 36.1025,
    "longitude": -119.595
  },
  "KCXL": {
    "airport": "Calexico International Airport",
    "latitude": 32.6695,
    "longitude": -115.513
  },
  "KDAG": {
    "airport": "Barstow-Daggett Airport",
    "latitude": 34.8537,
    "longitude": -116.787
  },
  "KEDW": {
    "airport": "Edwards Air Force Base",
    "latitude": 34.9054,
    "longitude": -117.884
  },
  "KEED": {
    "airport": "Needles Airport",
    "latitude": 34.7663,
    "longitude": -114.623
  },
  "KEKA": {
    "airport": "Murray Field",
    "latitude": 40.8034,
    "longitude": -124.113
  },
  "KEMT": {
    "airport": "San Gabriel Valley Airport",
    "latitude": 34.0861,
    "longitude": -118.035
  },
  "KFAT": {
    "airport": "Fresno Yosemite International Airport",
    "latitude": 36.7762,
    "longitude": -119.718
  },
  "KFCH": {
    "airport": "Fresno Chandler Executive Airport",
    "latitude": 36.7324,
    "longitude": -119.82
  },
  "KFUL": {
    "airport": "Fullerton Municipal Airport",
    "latitude": 33.872,
    "longitude": -117.98
  },
  "KHAF": {
    "airport": "Half Moon Bay Airport",
    "latitude": 37.5134,
    "longitude": -122.501
  },
  "KHHR": {
    "airport": "Hawthorne Municipal Airport (Jack Northrop Field)",
    "latitude": 33.9228,
    "longitude": -118.335
  },
  "KCVH": {
    "airport": "Hollister Municipal Airport",
    "latitude": 36.8933,
    "longitude": -121.41
  },
  "KHMT": {
    "airport": "Hemet-Ryan Airport",
    "latitude": 33.734,
    "longitude": -117.023
  },
  "KHWD": {
    "airport": "Hayward Executive Airport",
    "latitude": 37.6592,
    "longitude": -122.122
  },
  "KIPL": {
    "airport": "Imperial County Airport (Boley Field)",
    "latitude": 32.8342,
    "longitude": -115.579
  },
  "KIYK": {
    "airport": "Inyokern Airport",
    "latitude": 35.6588,
    "longitude": -117.83
  },
  "KKIC": {
    "airport": "Mesa Del Rey Airport",
    "latitude": 36.228,
    "longitude": -121.122
  },
  "KLAX": {
    "airport": "Los Angeles International Airport",
    "latitude": 33.9425,
    "longitude": -118.408
  },
  "KLGB": {
    "airport": "Long Beach Airport",
    "latitude": 33.8177,
    "longitude": -118.152
  },
  "KLPC": {
    "airport": "Lompoc Airport",
    "latitude": 34.6656,
    "longitude": -120.468
  },
  "KLSN": {
    "airport": "Los Banos Municipal Airport",
    "latitude": 37.0629,
    "longitude": -120.869
  },
  "KLVK": {
    "airport": "Livermore Municipal Airport",
    "latitude": 37.6934,
    "longitude": -121.82
  },
  "KMAE": {
    "airport": "Madera Municipal Airport",
    "latitude": 36.9886,
    "longitude": -120.112
  },
  "KMCC": {
    "airport": "McClellan Airfield",
    "latitude": 38.6676,
    "longitude": -121.401
  },
  "KMCE": {
    "airport": "Merced Regional Airport (MacReady Field)",
    "latitude": 37.2847,
    "longitude": -120.514
  },
  "KMER": {
    "airport": "Castle Airport",
    "latitude": 37.3805,
    "longitude": -120.568
  },
  "KMHR": {
    "airport": "Sacramento Mather Airport",
    "latitude": 38.5539,
    "longitude": -121.298
  },
  "KMHV": {
    "airport": "Mojave Air and Space Port",
    "latitude": 35.0594,
    "longitude": -118.152
  },
  "KMIT": {
    "airport": "Shafter Airport (Minter Field)",
    "latitude": 35.5074,
    "longitude": -119.192
  },
  "KMMH": {
    "airport": "Mammoth Yosemite Airport",
    "latitude": 37.6241,
    "longitude": -118.838
  },
  "KMOD": {
    "airport": "Modesto City-County Airport (Harry Sham Field)",
    "latitude": 37.6258,
    "longitude": -120.954
  },
  "KMRY": {
    "airport": "Monterey Regional Airport",
    "latitude": 36.587,
    "longitude": -121.843
  },
  "KMYF": {
    "airport": "Montgomery Field Airport",
    "latitude": 32.8157,
    "longitude": -117.14
  },
  "KMYV": {
    "airport": "Yuba County Airport",
    "latitude": 39.0978,
    "longitude": -121.57
  },
  "KNJK": {
    "airport": "NAF El Centro",
    "latitude": 32.8292,
    "longitude": -115.672
  },
  "KNKX": {
    "airport": "MCAS Miramar",
    "latitude": 32.8684,
    "longitude": -117.143
  },
  "KNLC": {
    "airport": "NAS Lemoore (Reeves Field)",
    "latitude": 36.333,
    "longitude": -119.952
  },
  "KDVO": {
    "airport": "Marin County Airport (Gnoss Field)",
    "latitude": 38.1436,
    "longitude": -122.556
  },
  "KNRC": {
    "airport": "NASA Crows Landing Airport",
    "latitude": 37.408,
    "longitude": -121.109
  },
  "KNRS": {
    "airport": "NOLF Imperial Beach (Ream Field)",
    "latitude": 32.5667,
    "longitude": -117.117
  },
  "KNTD": {
    "airport": "NAS Point Mugu (Naval Base Ventura County)",
    "latitude": 34.1203,
    "longitude": -119.121
  },
  "KNUQ": {
    "airport": "Moffett Federal Airfield",
    "latitude": 37.4161,
    "longitude": -122.049
  },
  "KNZY": {
    "airport": "NAS North Island (Halsey Field)",
    "latitude": 32.6992,
    "longitude": -117.215
  },
  "KOAK": {
    "airport": "Oakland International Airport",
    "latitude": 37.7213,
    "longitude": -122.221
  },
  "KOAR": {
    "airport": "Marina Municipal Airport",
    "latitude": 36.6819,
    "longitude": -121.762
  },
  "KOKB": {
    "airport": "Oceanside Municipal Airport",
    "latitude": 33.2173,
    "longitude": -117.354
  },
  "KONT": {
    "airport": "Ontario International Airport",
    "latitude": 34.056,
    "longitude": -117.601
  },
  "KOVE": {
    "airport": "Oroville Municipal Airport",
    "latitude": 39.4878,
    "longitude": -121.622
  },
  "KOXR": {
    "airport": "Oxnard Airport",
    "latitude": 34.2008,
    "longitude": -119.207
  },
  "KPAO": {
    "airport": "Palo Alto Airport (Santa Clara County Airport)",
    "latitude": 37.4611,
    "longitude": -122.115
  },
  "KPMD": {
    "airport": "Palmdale Regional Airport",
    "latitude": 34.6294,
    "longitude": -118.085
  },
  "KPOC": {
    "airport": "Brackett Field",
    "latitude": 34.0916,
    "longitude": -117.782
  },
  "KPRB": {
    "airport": "Paso Robles Municipal Airport",
    "latitude": 35.6729,
    "longitude": -120.627
  },
  "KPSP": {
    "airport": "Palm Springs International Airport",
    "latitude": 33.8297,
    "longitude": -116.507
  },
  "KPTV": {
    "airport": "Porterville Municipal Airport",
    "latitude": 36.0296,
    "longitude": -119.063
  },
  "KPVF": {
    "airport": "Placerville Airport",
    "latitude": 38.7242,
    "longitude": -120.753
  },
  "KRAL": {
    "airport": "Riverside Municipal Airport",
    "latitude": 33.9519,
    "longitude": -117.445
  },
  "KRBL": {
    "airport": "Red Bluff Municipal Airport",
    "latitude": 40.1507,
    "longitude": -122.252
  },
  "KRDD": {
    "airport": "Redding Municipal Airport",
    "latitude": 40.509,
    "longitude": -122.293
  },
  "KRHV": {
    "airport": "Reid-Hillview Airport of Santa Clara County",
    "latitude": 37.3329,
    "longitude": -121.819
  },
  "KRIR": {
    "airport": "Flabob Airport",
    "latitude": 33.9897,
    "longitude": -117.411
  },
  "KRIV": {
    "airport": "March Air Reserve Base",
    "latitude": 33.8807,
    "longitude": -117.259
  },
  "KMPI": {
    "airport": "Mariposa-Yosemite Airport",
    "latitude": 37.5109,
    "longitude": -120.04
  },
  "KSAC": {
    "airport": "Sacramento Executive Airport",
    "latitude": 38.5125,
    "longitude": -121.493
  },
  "KSAN": {
    "airport": "San Diego International Airport",
    "latitude": 32.7336,
    "longitude": -117.19
  },
  "KSAS": {
    "airport": "Salton Sea Airport",
    "latitude": 33.2414,
    "longitude": -115.952
  },
  "KSBA": {
    "airport": "Santa Barbara Municipal Airport",
    "latitude": 34.4262,
    "longitude": -119.84
  },
  "KSBD": {
    "airport": "San Bernardino International Airport",
    "latitude": 34.0954,
    "longitude": -117.235
  },
  "KSBP": {
    "airport": "San Luis Obispo County Regional Airport (McChesney Field)",
    "latitude": 35.2368,
    "longitude": -120.642
  },
  "KSCK": {
    "airport": "Stockton Metropolitan Airport",
    "latitude": 37.8942,
    "longitude": -121.238
  },
  "KSDM": {
    "airport": "Brown Field Municipal Airport",
    "latitude": 32.5723,
    "longitude": -116.98
  },
  "KSEE": {
    "airport": "Gillespie Field",
    "latitude": 32.8262,
    "longitude": -116.972
  },
  "KSFO": {
    "airport": "San Francisco International Airport",
    "latitude": 37.619,
    "longitude": -122.375
  },
  "KSIY": {
    "airport": "Siskiyou County Airport",
    "latitude": 41.7781,
    "longitude": -122.473
  },
  "KSJC": {
    "airport": "San Jose International Airport",
    "latitude": 37.3626,
    "longitude": -121.929
  },
  "KSMF": {
    "airport": "Sacramento International Airport",
    "latitude": 38.6954,
    "longitude": -121.591
  },
  "KSMO": {
    "airport": "Santa Monica Municipal Airport",
    "latitude": 34.0158,
    "longitude": -118.451
  },
  "KSMX": {
    "airport": "Santa Maria Public Airport (Capt. G. Allan Hancock Field)",
    "latitude": 34.8989,
    "longitude": -120.457
  },
  "KSNA": {
    "airport": "John Wayne Airport (Orange County Airport)",
    "latitude": 33.6757,
    "longitude": -117.868
  },
  "KSNS": {
    "airport": "Salinas Municipal Airport",
    "latitude": 36.6628,
    "longitude": -121.606
  },
  "KSPA": {
    "airport": "Spartanburg Downtown Memorial Airport",
    "latitude": 34.9157,
    "longitude": -81.9565
  },
  "KIZA": {
    "airport": "Santa Ynez Airport",
    "latitude": 34.6068,
    "longitude": -120.076
  },
  "KSQL": {
    "airport": "San Carlos Airport",
    "latitude": 37.5119,
    "longitude": -122.25
  },
  "KSTS": {
    "airport": "Charles M. Schulz-Sonoma County A",
    "latitude": 38.509,
    "longitude": -122.813
  },
  "KSMS": {
    "airport": "Sumter Airport",
    "latitude": 33.995,
    "longitude": -80.3613
  },
  "KSUU": {
    "airport": "Travis Air Force Base",
    "latitude": 38.2627,
    "longitude": -121.927
  },
  "KSVE": {
    "airport": "Susanville Municipal Airport",
    "latitude": 40.3757,
    "longitude": -120.573
  },
  "KSZN": {
    "airport": "Santa Cruz Island Airport",
    "latitude": 34.0606,
    "longitude": -119.915
  },
  "KSZP": {
    "airport": "Santa Paula Airport",
    "latitude": 34.3472,
    "longitude": -119.061
  },
  "KTRK": {
    "airport": "Truckee Tahoe Airport",
    "latitude": 39.32,
    "longitude": -120.14
  },
  "KTLR": {
    "airport": "Mefford Field Airport",
    "latitude": 36.1563,
    "longitude": -119.326
  },
  "KTNP": {
    "airport": "Twentynine Palms Airport",
    "latitude": 34.1316,
    "longitude": -115.946
  },
  "KTOA": {
    "airport": "Zamperini Field",
    "latitude": 33.8034,
    "longitude": -118.34
  },
  "KTRM": {
    "airport": "Jacqueline Cochran Regional Airport",
    "latitude": 33.6267,
    "longitude": -116.16
  },
  "KTSP": {
    "airport": "Tehachapi Municipal Airport",
    "latitude": 35.135,
    "longitude": -118.439
  },
  "KTVL": {
    "airport": "Lake Tahoe Airport",
    "latitude": 38.8939,
    "longitude": -119.995
  },
  "KUDD": {
    "airport": "Bermuda Dunes Airport",
    "latitude": 33.7484,
    "longitude": -116.275
  },
  "KUKI": {
    "airport": "Ukiah Municipal Airport",
    "latitude": 39.126,
    "longitude": -123.201
  },
  "KVBG": {
    "airport": "Vandenberg Air Force Base",
    "latitude": 34.7373,
    "longitude": -120.584
  },
  "KVCV": {
    "airport": "Southern California Logistics Airport",
    "latitude": 34.5975,
    "longitude": -117.383
  },
  "KVIS": {
    "airport": "Visalia Municipal Airport",
    "latitude": 36.3187,
    "longitude": -119.393
  },
  "KVNY": {
    "airport": "Van Nuys Airport",
    "latitude": 34.2098,
    "longitude": -118.49
  },
  "KWHP": {
    "airport": "Whiteman Airport",
    "latitude": 34.2593,
    "longitude": -118.413
  },
  "KWJF": {
    "airport": "General William J. Fox Airfield",
    "latitude": 34.7411,
    "longitude": -118.219
  },
  "KWLW": {
    "airport": "Willows-Glenn County Airport",
    "latitude": 39.5164,
    "longitude": -122.218
  },
  "KWVI": {
    "airport": "Watsonville Municipal Airport",
    "latitude": 36.9357,
    "longitude": -121.79
  },
  "KAFF": {
    "airport": "United States Air Force Academy Airfield",
    "latitude": 38.9697,
    "longitude": -104.813
  },
  "KAKO": {
    "airport": "Colorado Plains Regional Airport",
    "latitude": 40.1756,
    "longitude": -103.222
  },
  "KALS": {
    "airport": "San Luis Valley Regional Airport",
    "latitude": 37.4349,
    "longitude": -105.867
  },
  "KAPA": {
    "airport": "Centennial Airport",
    "latitude": 39.5701,
    "longitude": -104.849
  },
  "KASE": {
    "airport": "Aspen-Pitkin County Airport (Sardy Field)",
    "latitude": 39.2232,
    "longitude": -106.869
  },
  "KBKF": {
    "airport": "Buckley Air Force Base",
    "latitude": 39.7017,
    "longitude": -104.752
  },
  "KBJC": {
    "airport": "Rocky Mountain Metropolitan Airport",
    "latitude": 39.9088,
    "longitude": -105.117
  },
  "KCEZ": {
    "airport": "Cortez Municipal Airport",
    "latitude": 37.303,
    "longitude": -108.628
  },
  "KCAG": {
    "airport": "Craig-Moffat Airport",
    "latitude": 40.4952,
    "longitude": -107.522
  },
  "KCOS": {
    "airport": "Colorado Springs Airport",
    "latitude": 38.8058,
    "longitude": -104.701
  },
  "KDEN": {
    "airport": "Denver International Airport",
    "latitude": 39.8617,
    "longitude": -104.673
  },
  "KDRO": {
    "airport": "Durango-La Plata County Airport",
    "latitude": 37.1515,
    "longitude": -107.754
  },
  "KEGE": {
    "airport": "Eagle County Regional Airport",
    "latitude": 39.6426,
    "longitude": -106.918
  },
  "KFCS": {
    "airport": "Butts Army Airfield (Fort Carson)",
    "latitude": 38.6784,
    "longitude": -104.757
  },
  "KFNL": {
    "airport": "Northern Colorado Regional Airport",
    "latitude": 40.4518,
    "longitude": -105.011
  },
  "KGJT": {
    "airport": "Grand Junction Regional Airport (Walker Field)",
    "latitude": 39.1224,
    "longitude": -108.527
  },
  "KGUC": {
    "airport": "Gunnison-Crested Butte Regional Airport",
    "latitude": 38.5339,
    "longitude": -106.933
  },
  "KGWS": {
    "airport": "Glenwood Springs Municipal Airport",
    "latitude": 39.5083,
    "longitude": -107.311
  },
  "KGXY": {
    "airport": "Greeley-Weld County Airport",
    "latitude": 40.4374,
    "longitude": -104.633
  },
  "KHDN": {
    "airport": "Yampa Valley Airport",
    "latitude": 40.4812,
    "longitude": -107.218
  },
  "KLAA": {
    "airport": "Lamar Municipal Airport",
    "latitude": 38.0697,
    "longitude": -102.688
  },
  "KLIC": {
    "airport": "Limon Municipal Airport",
    "latitude": 39.2748,
    "longitude": -103.666
  },
  "KLXV": {
    "airport": "Lake County Airport",
    "latitude": 39.2203,
    "longitude": -106.317
  },
  "KMTJ": {
    "airport": "Montrose Regional Airport",
    "latitude": 38.5098,
    "longitude": -107.894
  },
  "KPSO": {
    "airport": "Stevens Field",
    "latitude": 37.2863,
    "longitude": -107.056
  },
  "KPUB": {
    "airport": "Pueblo Memorial Airport",
    "latitude": 38.2891,
    "longitude": -104.497
  },
  "KRIL": {
    "airport": "Garfield County Regional Airport",
    "latitude": 39.5263,
    "longitude": -107.727
  },
  "KSBS": {
    "airport": "Steamboat Springs Airport (Bob Adams Field)",
    "latitude": 40.5163,
    "longitude": -106.866
  },
  "KANK": {
    "airport": "Harriet Alexander Field",
    "latitude": 38.5383,
    "longitude": -106.049
  },
  "KSTK": {
    "airport": "Sterling Municipal Airport",
    "latitude": 40.6153,
    "longitude": -103.265
  },
  "KTAD": {
    "airport": "Perry Stokes Airport",
    "latitude": 37.2594,
    "longitude": -104.341
  },
  "KTEX": {
    "airport": "Telluride Regional Airport",
    "latitude": 37.9538,
    "longitude": -107.908
  },
  "KBDU": {
    "airport": "Boulder Municipal Airport",
    "latitude": 40.0394,
    "longitude": -105.226
  },
  "KBDL": {
    "airport": "Bradley International Airport",
    "latitude": 41.9392,
    "longitude": -72.6833
  },
  "KBDR": {
    "airport": "Igor I. Sikorsky Memorial Airport",
    "latitude": 41.1635,
    "longitude": -73.1262
  },
  "KDXR": {
    "airport": "Danbury Municipal Airport",
    "latitude": 41.3715,
    "longitude": -73.4822
  },
  "KGON": {
    "airport": "Groton-New London Airport",
    "latitude": 41.3301,
    "longitude": -72.0451
  },
  "KHFD": {
    "airport": "Hartford-Brainard Airport",
    "latitude": 41.7367,
    "longitude": -72.6494
  },
  "KHVN": {
    "airport": "Tweed New Haven Airport",
    "latitude": 41.2637,
    "longitude": -72.8868
  },
  "KOXC": {
    "airport": "Waterbury-Oxford Airport",
    "latitude": 41.4786,
    "longitude": -73.1352
  },
  "KDOV": {
    "airport": "Dover Air Force Base",
    "latitude": 39.1295,
    "longitude": -75.466
  },
  "KGED": {
    "airport": "Delaware Coastal Airport",
    "latitude": 38.6892,
    "longitude": -75.3589
  },
  "KILG": {
    "airport": "Wilmington Airport (New Castle Airport)",
    "latitude": 39.6787,
    "longitude": -75.6065
  },
  "KAAF": {
    "airport": "Apalachicola Regional Airport",
    "latitude": 29.7275,
    "longitude": -85.0275
  },
  "KAPF": {
    "airport": "Naples Municipal Airport",
    "latitude": 26.1526,
    "longitude": -81.7753
  },
  "KAVO": {
    "airport": "Avon Park Executive Airport",
    "latitude": 27.5912,
    "longitude": -81.5278
  },
  "KBCT": {
    "airport": "Boca Raton Airport",
    "latitude": 26.3785,
    "longitude": -80.1077
  },
  "KBOW": {
    "airport": "Bartow Municipal Airport",
    "latitude": 27.9434,
    "longitude": -81.7834
  },
  "KCDK": {
    "airport": "George T. Lewis Airport",
    "latitude": 29.1342,
    "longitude": -83.0505
  },
  "KCEW": {
    "airport": "Bob Sikes Airport",
    "latitude": 30.7788,
    "longitude": -86.5221
  },
  "KCLW": {
    "airport": "Clearwater Air Park",
    "latitude": 27.9767,
    "longitude": -82.7587
  },
  "KCOF": {
    "airport": "Patrick Air Force Base",
    "latitude": 28.2349,
    "longitude": -80.6101
  },
  "KCOI": {
    "airport": "Merritt Island Airport",
    "latitude": 28.3416,
    "longitude": -80.6855
  },
  "KCRG": {
    "airport": "Jacksonville Executive at Craig Airport",
    "latitude": 30.3363,
    "longitude": -81.5144
  },
  "KCTY": {
    "airport": "Cross City Airport",
    "latitude": 29.6355,
    "longitude": -83.1048
  },
  "KDAB": {
    "airport": "Daytona Beach International Airport",
    "latitude": 29.1799,
    "longitude": -81.0581
  },
  "KDTS": {
    "airport": "Destin Executive Airport",
    "latitude": 30.4001,
    "longitude": -86.4715
  },
  "KECP": {
    "airport": "Northwest Florida Beaches International Airport",
    "latitude": 30.3571,
    "longitude": -85.7954
  },
  "KEGI": {
    "airport": "Duke Field (Eglin Auxiliary Field 3)",
    "latitude": 30.6504,
    "longitude": -86.5229
  },
  "KEYW": {
    "airport": "Key West International Airport",
    "latitude": 24.5561,
    "longitude": -81.7596
  },
  "KFLL": {
    "airport": "Fort Lauderdale-Hollywood International Airport",
    "latitude": 26.0726,
    "longitude": -80.1527
  },
  "KFMY": {
    "airport": "Page Field",
    "latitude": 26.5866,
    "longitude": -81.8633
  },
  "KFPR": {
    "airport": "St. Lucie County International Airport",
    "latitude": 27.4951,
    "longitude": -80.3683
  },
  "KFXE": {
    "airport": "Fort Lauderdale Executive Airport",
    "latitude": 26.1973,
    "longitude": -80.1707
  },
  "KGIF": {
    "airport": "Winter Haven's Gilbert Airport",
    "latitude": 28.0629,
    "longitude": -81.7533
  },
  "KGNV": {
    "airport": "Gainesville Regional Airport",
    "latitude": 29.6901,
    "longitude": -82.2718
  },
  "KHST": {
    "airport": "Homestead Air Reserve Base",
    "latitude": 25.4886,
    "longitude": -80.3836
  },
  "KHWO": {
    "airport": "North Perry Airport",
    "latitude": 26.0012,
    "longitude": -80.2407
  },
  "KIMM": {
    "airport": "Immokalee Regional Airport",
    "latitude": 26.4332,
    "longitude": -81.401
  },
  "KISM": {
    "airport": "Kissimmee Gateway Airport",
    "latitude": 28.2898,
    "longitude": -81.4371
  },
  "KJAX": {
    "airport": "Jacksonville International Airport",
    "latitude": 30.4941,
    "longitude": -81.6879
  },
  "KLAL": {
    "airport": "Lakeland Linder International Airport",
    "latitude": 27.9889,
    "longitude": -82.0186
  },
  "KLCQ": {
    "airport": "Lake City Gateway Airport",
    "latitude": 30.182,
    "longitude": -82.5769
  },
  "KLEE": {
    "airport": "Leesburg International Airport",
    "latitude": 28.8231,
    "longitude": -81.8087
  },
  "KLNA": {
    "airport": "Palm Beach County Park Airport",
    "latitude": 26.593,
    "longitude": -80.0851
  },
  "KMCF": {
    "airport": "MacDill Air Force Base",
    "latitude": 27.8493,
    "longitude": -82.5212
  },
  "KMCO": {
    "airport": "Orlando International Airport",
    "latitude": 28.4294,
    "longitude": -81.309
  },
  "KMIA": {
    "airport": "Miami International Airport",
    "latitude": 25.7932,
    "longitude": -80.2906
  },
  "KMLB": {
    "airport": "Orlando Melbourne International Airport",
    "latitude": 28.1028,
    "longitude": -80.6453
  },
  "KMKY": {
    "airport": "Marco Island Airport",
    "latitude": 25.995,
    "longitude": -81.6725
  },
  "KMTH": {
    "airport": "Florida Keys Marathon Airport",
    "latitude": 24.7261,
    "longitude": -81.0514
  },
  "KNEN": {
    "airport": "NOLF Whitehouse",
    "latitude": 30.3539,
    "longitude": -81.8719
  },
  "KNIP": {
    "airport": "NAS Jacksonville (Towers Field)",
    "latitude": 30.2358,
    "longitude": -81.6806
  },
  "KNPA": {
    "airport": "NAS Pensacola (Forrest Sherman Field)",
    "latitude": 30.3527,
    "longitude": -87.3186
  },
  "KNQX": {
    "airport": "NAS Key West (Boca Chica Field)",
    "latitude": 24.5758,
    "longitude": -81.6889
  },
  "KNRB": {
    "airport": "NS Mayport (Admiral David L. McDonald Field)",
    "latitude": 30.3911,
    "longitude": -81.4247
  },
  "KNSE": {
    "airport": "NAS Whiting Field - North",
    "latitude": 30.7242,
    "longitude": -87.0219
  },
  "KNUN": {
    "airport": "NOLF Saufley Field",
    "latitude": 30.4694,
    "longitude": -87.3381
  },
  "KOBE": {
    "airport": "Okeechobee County Airport",
    "latitude": 27.2628,
    "longitude": -80.8498
  },
  "KOCF": {
    "airport": "Ocala International Airport (Jim Taylor Field)",
    "latitude": 29.1726,
    "longitude": -82.2242
  },
  "KOPF": {
    "airport": "Miami-Opa Locka Executive Airport",
    "latitude": 25.907,
    "longitude": -80.2784
  },
  "KORL": {
    "airport": "Orlando Executive Airport",
    "latitude": 28.5455,
    "longitude": -81.3329
  },
  "KPAM": {
    "airport": "Tyndall Air Force Base",
    "latitude": 30.0696,
    "longitude": -85.5754
  },
  "KPBI": {
    "airport": "Palm Beach International Airport",
    "latitude": 26.6832,
    "longitude": -80.0956
  },
  "KPGD": {
    "airport": "Punta Gorda Airport",
    "latitude": 26.9202,
    "longitude": -81.9905
  },
  "KPHK": {
    "airport": "Palm Beach County Glades Airport",
    "latitude": 26.785,
    "longitude": -80.6934
  },
  "KPIE": {
    "airport": "St. Pete-Clearwater International Airport",
    "latitude": 27.9102,
    "longitude": -82.6874
  },
  "KPNS": {
    "airport": "Pensacola International Airport",
    "latitude": 30.4734,
    "longitude": -87.1866
  },
  "KPMP": {
    "airport": "Pompano Beach Airpark",
    "latitude": 26.2471,
    "longitude": -80.1111
  },
  "KRSW": {
    "airport": "Southwest Florida International Airport",
    "latitude": 26.5362,
    "longitude": -81.7552
  },
  "KSEF": {
    "airport": "Sebring Regional Airport",
    "latitude": 27.4564,
    "longitude": -81.3424
  },
  "KSFB": {
    "airport": "Orlando Sanford International Airport",
    "latitude": 28.7776,
    "longitude": -81.2375
  },
  "KSPG": {
    "airport": "Albert Whitted Airport",
    "latitude": 27.7651,
    "longitude": -82.627
  },
  "KSRQ": {
    "airport": "Sarasota-Bradenton International Airport",
    "latitude": 27.3954,
    "longitude": -82.5544
  },
  "KSUA": {
    "airport": "Witham Field",
    "latitude": 27.1817,
    "longitude": -80.2211
  },
  "KTIX": {
    "airport": "Space Coast Regional Airport",
    "latitude": 28.5148,
    "longitude": -80.7992
  },
  "KTLH": {
    "airport": "Tallahassee International Airport",
    "latitude": 30.3965,
    "longitude": -84.3503
  },
  "KTMB": {
    "airport": "Miami Executive Airport",
    "latitude": 25.6479,
    "longitude": -80.4328
  },
  "KTNT": {
    "airport": "Dade-Collier Training and Transition Airport",
    "latitude": 25.8618,
    "longitude": -80.897
  },
  "KTPA": {
    "airport": "Tampa International Airport",
    "latitude": 27.9755,
    "longitude": -82.5332
  },
  "KTPF": {
    "airport": "Peter O. Knight Airport",
    "latitude": 27.9156,
    "longitude": -82.4493
  },
  "KSGJ": {
    "airport": "Northeast Florida Regional Airport",
    "latitude": 29.9592,
    "longitude": -81.3398
  },
  "KVNC": {
    "airport": "Venice Municipal Airport",
    "latitude": 27.0716,
    "longitude": -82.4403
  },
  "KVPS": {
    "airport": "Destin-Fort Walton Beach Airport / Eglin Air Force Base",
    "latitude": 30.4832,
    "longitude": -86.5254
  },
  "KVQQ": {
    "airport": "Cecil Airport",
    "latitude": 30.2187,
    "longitude": -81.8767
  },
  "KVRB": {
    "airport": "Vero Beach Regional Airport",
    "latitude": 27.6556,
    "longitude": -80.4179
  },
  "KZPH": {
    "airport": "Zephyrhills Municipal Airport",
    "latitude": 28.2282,
    "longitude": -82.1559
  },
  "KABY": {
    "airport": "Southwest Georgia Regional Airport",
    "latitude": 31.5355,
    "longitude": -84.1945
  },
  "KAGS": {
    "airport": "Augusta Regional Airport at Bush Field",
    "latitude": 33.3699,
    "longitude": -81.9645
  },
  "KAHN": {
    "airport": "Athens Ben Epps Airport",
    "latitude": 33.9486,
    "longitude": -83.3263
  },
  "KATL": {
    "airport": "Hartsfield-Jackson Atlanta International Airport",
    "latitude": 33.6367,
    "longitude": -84.4281
  },
  "KAYS": {
    "airport": "Waycross-Ware County Airport",
    "latitude": 31.2491,
    "longitude": -82.3955
  },
  "KBGE": {
    "airport": "Decatur County Industrial Air Park",
    "latitude": 30.9715,
    "longitude": -84.6374
  },
  "KBQK": {
    "airport": "Brunswick Golden Isles Airport",
    "latitude": 31.2588,
    "longitude": -81.4665
  },
  "KCSG": {
    "airport": "Columbus Airport",
    "latitude": 32.5163,
    "longitude": -84.9389
  },
  "KDBN": {
    "airport": "W. H. 'Bud' Barron Airport",
    "latitude": 32.5644,
    "longitude": -82.9853
  },
  "KDNL": {
    "airport": "Daniel Field",
    "latitude": 33.4665,
    "longitude": -82.0394
  },
  "KDNN": {
    "airport": "Dalton Municipal Airport",
    "latitude": 34.7229,
    "longitude": -84.8702
  },
  "KFTY": {
    "airport": "Fulton County Airport (Charlie Brown Field)",
    "latitude": 33.7791,
    "longitude": -84.5214
  },
  "KGVL": {
    "airport": "Lee Gilmer Memorial Airport",
    "latitude": 34.2726,
    "longitude": -83.8302
  },
  "KLGC": {
    "airport": "LaGrange Callaway Airport",
    "latitude": 33.0089,
    "longitude": -85.0726
  },
  "KLHW": {
    "airport": "MidCoast Regional Airport at Wright Army Airfield",
    "latitude": 31.8891,
    "longitude": -81.5623
  },
  "KLSF": {
    "airport": "Lawson Army Airfield",
    "latitude": 32.3373,
    "longitude": -84.9913
  },
  "KLZU": {
    "airport": "Gwinnett County Airport (Briscoe Field)",
    "latitude": 33.9781,
    "longitude": -83.9624
  },
  "KMAC": {
    "airport": "Macon Downtown Airport",
    "latitude": 32.8221,
    "longitude": -83.562
  },
  "KMCN": {
    "airport": "Middle Georgia Regional Airport",
    "latitude": 32.6928,
    "longitude": -83.6492
  },
  "KMGE": {
    "airport": "Dobbins Air Reserve Base",
    "latitude": 33.9154,
    "longitude": -84.5163
  },
  "KMGR": {
    "airport": "Moultrie Municipal Airport",
    "latitude": 31.0849,
    "longitude": -83.8033
  },
  "KMLJ": {
    "airport": "Baldwin County Airport",
    "latitude": 33.1542,
    "longitude": -83.2407
  },
  "KMQW": {
    "airport": "Telfair-Wheeler Airport",
    "latitude": 32.0946,
    "longitude": -82.8822
  },
  "KMUL": {
    "airport": "Spence Airport",
    "latitude": 31.1378,
    "longitude": -83.7042
  },
  "KPDK": {
    "airport": "DeKalb-Peachtree Airport",
    "latitude": 33.8756,
    "longitude": -84.302
  },
  "KPIM": {
    "airport": "Harris County Airport",
    "latitude": 32.8407,
    "longitude": -84.8824
  },
  "KRMG": {
    "airport": "Richard B. Russell Airport",
    "latitude": 34.3506,
    "longitude": -85.158
  },
  "KSAV": {
    "airport": "Savannah/Hilton Head International Airport",
    "latitude": 32.1276,
    "longitude": -81.2021
  },
  "KSSI": {
    "airport": "Malcolm McKinnon Airport",
    "latitude": 31.1518,
    "longitude": -81.3913
  },
  "KSVN": {
    "airport": "Hunter Army Airfield",
    "latitude": 32.01,
    "longitude": -81.1457
  },
  "KSYV": {
    "airport": "Sylvester Airport",
    "latitude": 31.5585,
    "longitude": -83.8957
  },
  "KTBR": {
    "airport": "Statesboro-Bulloch County Airport",
    "latitude": 32.4827,
    "longitude": -81.7369
  },
  "KTMA": {
    "airport": "Henry Tift Myers Airport",
    "latitude": 31.429,
    "longitude": -83.4885
  },
  "KTOC": {
    "airport": "Toccoa Airport (R.G. LeTourneau Field)",
    "latitude": 34.5938,
    "longitude": -83.2958
  },
  "KTVI": {
    "airport": "Thomasville Regional Airport",
    "latitude": 30.9016,
    "longitude": -83.8813
  },
  "KVAD": {
    "airport": "Moody Air Force Base",
    "latitude": 30.9678,
    "longitude": -83.193
  },
  "KVDI": {
    "airport": "Vidalia Regional Airport",
    "latitude": 32.1927,
    "longitude": -82.3712
  },
  "KVLD": {
    "airport": "Valdosta Regional Airport",
    "latitude": 30.7825,
    "longitude": -83.2767
  },
  "KWDR": {
    "airport": "Barrow County Airport",
    "latitude": 33.9829,
    "longitude": -83.6674
  },
  "KWRB": {
    "airport": "Robins Air Force Base",
    "latitude": 32.6401,
    "longitude": -83.5919
  },
  "PHBK": {
    "airport": "Barking Sands PMRF",
    "latitude": 22.0228,
    "longitude": -159.785
  },
  "PHSF": {
    "airport": "Bradshaw Army Airfield",
    "latitude": 19.7601,
    "longitude": -155.554
  },
  "NSFQ": {
    "airport": "Fitiuta Airport",
    "latitude": -14.2172,
    "longitude": -169.425
  },
  "PHDH": {
    "airport": "Dillingham Airfield",
    "latitude": 21.5795,
    "longitude": -158.197
  },
  "PHHI": {
    "airport": "Wheeler Army Airfield",
    "latitude": 21.4835,
    "longitude": -158.04
  },
  "PHNL": {
    "airport": "Daniel K. Inouye International Airport",
    "latitude": 21.3206,
    "longitude": -157.924
  },
  "PHHN": {
    "airport": "Hana Airport",
    "latitude": 20.7956,
    "longitude": -156.014
  },
  "PHTO": {
    "airport": "Hilo International Airport",
    "latitude": 19.7214,
    "longitude": -155.048
  },
  "PHJH": {
    "airport": "Kapalua Airport",
    "latitude": 20.9629,
    "longitude": -156.673
  },
  "PHJR": {
    "airport": "Kalaeloa Airport (John Rodgers Field)",
    "latitude": 21.3074,
    "longitude": -158.07
  },
  "PHKO": {
    "airport": "Kona International Airport at Keahole",
    "latitude": 19.7388,
    "longitude": -156.046
  },
  "PHLI": {
    "airport": "Lihue Airport",
    "latitude": 21.976,
    "longitude": -159.339
  },
  "PHNY": {
    "airport": "Lanai Airport",
    "latitude": 20.7856,
    "longitude": -156.951
  },
  "PHLU": {
    "airport": "Kalaupapa Airport",
    "latitude": 21.211,
    "longitude": -156.974
  },
  "PMDY": {
    "airport": "Henderson Field",
    "latitude": 28.2017,
    "longitude": -177.381
  },
  "PHMK": {
    "airport": "Molokai Airport",
    "latitude": 21.1529,
    "longitude": -157.096
  },
  "PHMU": {
    "airport": "Waimea-Kohala Airport",
    "latitude": 20.0013,
    "longitude": -155.668
  },
  "PHNG": {
    "airport": "MCAS Kaneohe Bay",
    "latitude": 21.4505,
    "longitude": -157.768
  },
  "PHOG": {
    "airport": "Kahului Airport",
    "latitude": 20.8986,
    "longitude": -156.43
  },
  "PHPA": {
    "airport": "Port Allen Airport",
    "latitude": 21.8969,
    "longitude": -159.603
  },
  "PHUP": {
    "airport": "Upolu Airport",
    "latitude": 20.2653,
    "longitude": -155.86
  },
  "KBOI": {
    "airport": "Boise Air Terminal (Gowen Field)",
    "latitude": 43.5644,
    "longitude": -116.223
  },
  "KBYI": {
    "airport": "Burley Municipal Airport",
    "latitude": 42.5426,
    "longitude": -113.772
  },
  "KLLJ": {
    "airport": "Challis Airport",
    "latitude": 44.523,
    "longitude": -114.218
  },
  "KCOE": {
    "airport": "Coeur d'Alene Airport",
    "latitude": 47.7743,
    "longitude": -116.82
  },
  "KGNG": {
    "airport": "Gooding Municipal Airport",
    "latitude": 42.9172,
    "longitude": -114.765
  },
  "KIDA": {
    "airport": "Idaho Falls Regional Airport",
    "latitude": 43.5136,
    "longitude": -112.071
  },
  "KGIC": {
    "airport": "Idaho County Airport",
    "latitude": 45.9426,
    "longitude": -116.123
  },
  "KLWS": {
    "airport": "Lewiston-Nez Perce County Airport",
    "latitude": 46.3745,
    "longitude": -117.015
  },
  "KMLD": {
    "airport": "Malad City Airport",
    "latitude": 42.1666,
    "longitude": -112.297
  },
  "KMUO": {
    "airport": "Mountain Home Air Force Base",
    "latitude": 43.0436,
    "longitude": -115.872
  },
  "KMYL": {
    "airport": "McCall Municipal Airport",
    "latitude": 44.8897,
    "longitude": -116.101
  },
  "KPIH": {
    "airport": "Pocatello Regional Airport",
    "latitude": 42.9098,
    "longitude": -112.596
  },
  "KRXE": {
    "airport": "Rexburg-Madison County Airport",
    "latitude": 43.8339,
    "longitude": -111.805
  },
  "KSMN": {
    "airport": "Lemhi County Airport",
    "latitude": 45.1238,
    "longitude": -113.881
  },
  "KSUN": {
    "airport": "Friedman Memorial Airport",
    "latitude": 43.5044,
    "longitude": -114.296
  },
  "KTWF": {
    "airport": "Magic Valley Regional Airport (Joslin Field)",
    "latitude": 42.4818,
    "longitude": -114.488
  },
  "KALN": {
    "airport": "St. Louis Regional Airport",
    "latitude": 38.8903,
    "longitude": -90.046
  },
  "KARR": {
    "airport": "Aurora Municipal Airport",
    "latitude": 41.7719,
    "longitude": -88.4757
  },
  "KBLV": {
    "airport": "MidAmerica St. Louis Airport / Scott Air Force Base",
    "latitude": 38.5452,
    "longitude": -89.8352
  },
  "KBMI": {
    "airport": "Central Illinois Regional Airport",
    "latitude": 40.4771,
    "longitude": -88.9159
  },
  "KCIR": {
    "airport": "Cairo Regional Airport",
    "latitude": 37.0645,
    "longitude": -89.2196
  },
  "KCMI": {
    "airport": "University of Illinois Willard Airport",
    "latitude": 40.0392,
    "longitude": -88.2781
  },
  "KCPS": {
    "airport": "St. Louis Downtown Airport",
    "latitude": 38.5707,
    "longitude": -90.1562
  },
  "KDEC": {
    "airport": "Decatur Airport",
    "latitude": 39.8346,
    "longitude": -88.8657
  },
  "KDNV": {
    "airport": "Vermilion Regional Airport",
    "latitude": 40.1992,
    "longitude": -87.5959
  },
  "KDPA": {
    "airport": "DuPage Airport",
    "latitude": 41.9078,
    "longitude": -88.2486
  },
  "KDVN": {
    "airport": "Davenport Municipal Airport",
    "latitude": 41.6103,
    "longitude": -90.5883
  },
  "KENL": {
    "airport": "Centralia Municipal Airport",
    "latitude": 38.5151,
    "longitude": -89.0911
  },
  "KEOK": {
    "airport": "Keokuk Municipal Airport",
    "latitude": 40.4599,
    "longitude": -91.4285
  },
  "KFEP": {
    "airport": "Albertus Airport",
    "latitude": 42.2462,
    "longitude": -89.582
  },
  "KGBG": {
    "airport": "Galesburg Municipal Airport",
    "latitude": 40.938,
    "longitude": -90.4311
  },
  "KGRE": {
    "airport": "Greenville Airport",
    "latitude": 38.8362,
    "longitude": -89.3784
  },
  "KHSB": {
    "airport": "Harrisburg-Raleigh Airport",
    "latitude": 37.8113,
    "longitude": -88.5503
  },
  "KIJX": {
    "airport": "Jacksonville Municipal Airport",
    "latitude": 39.7707,
    "longitude": -90.238
  },
  "KIKK": {
    "airport": "Greater Kankakee Airport",
    "latitude": 41.0714,
    "longitude": -87.8463
  },
  "KJOT": {
    "airport": "Joliet Regional Airport",
    "latitude": 41.5178,
    "longitude": -88.1755
  },
  "KLOT": {
    "airport": "Lewis University Airport",
    "latitude": 41.6073,
    "longitude": -88.0962
  },
  "KLWV": {
    "airport": "Lawrenceville-Vincennes International Airport",
    "latitude": 38.7643,
    "longitude": -87.6055
  },
  "KMDH": {
    "airport": "Southern Illinois Airport",
    "latitude": 37.7781,
    "longitude": -89.252
  },
  "KMDW": {
    "airport": "Chicago Midway International Airport",
    "latitude": 41.7861,
    "longitude": -87.7525
  },
  "KMLI": {
    "airport": "Quad City International Airport",
    "latitude": 41.4485,
    "longitude": -90.5075
  },
  "KMQB": {
    "airport": "Macomb Municipal Airport",
    "latitude": 40.5201,
    "longitude": -90.6524
  },
  "KMTO": {
    "airport": "Coles County Memorial Airport",
    "latitude": 39.4779,
    "longitude": -88.2792
  },
  "KMVN": {
    "airport": "Mount Vernon Airport",
    "latitude": 38.3219,
    "longitude": -88.8535
  },
  "KMWA": {
    "airport": "Williamson County Regional Airport",
    "latitude": 37.755,
    "longitude": -89.0111
  },
  "KOLY": {
    "airport": "Olney-Noble Airport",
    "latitude": 38.7207,
    "longitude": -88.1749
  },
  "KORD": {
    "airport": "Chicago O'Hare International Airport",
    "latitude": 41.9786,
    "longitude": -87.9047
  },
  "KPIA": {
    "airport": "General Wayne A. Downing Peoria International Airport",
    "latitude": 40.6642,
    "longitude": -89.6933
  },
  "KRFD": {
    "airport": "Chicago Rockford International Airport",
    "latitude": 42.1953,
    "longitude": -89.0972
  },
  "KSAR": {
    "airport": "Sparta Community Airport (Hunter Field)",
    "latitude": 38.1489,
    "longitude": -89.6987
  },
  "KSLO": {
    "airport": "Salem-Leckrone Airport",
    "latitude": 38.6429,
    "longitude": -88.9642
  },
  "KSPI": {
    "airport": "Abraham Lincoln Capital Airport",
    "latitude": 39.8441,
    "longitude": -89.6779
  },
  "KSQI": {
    "airport": "Whiteside County Airport (Jos. H. Bittorf Field)",
    "latitude": 41.7428,
    "longitude": -89.6763
  },
  "KUGN": {
    "airport": "Waukegan National Airport",
    "latitude": 42.4222,
    "longitude": -87.8679
  },
  "KUIN": {
    "airport": "Quincy Regional Airport (Baldwin Field)",
    "latitude": 39.9427,
    "longitude": -91.1946
  },
  "KVLA": {
    "airport": "Vandalia Municipal Airport",
    "latitude": 38.9915,
    "longitude": -89.1662
  },
  "KVYS": {
    "airport": "Illinois Valley Regional Airport (Walter A. Duncan Field)",
    "latitude": 41.3519,
    "longitude": -89.1531
  },
  "KAID": {
    "airport": "Anderson Municipal Airport (Darlington Field)",
    "latitude": 40.1086,
    "longitude": -85.613
  },
  "KANQ": {
    "airport": "Tri-State Steuben County Airport",
    "latitude": 41.6397,
    "longitude": -85.0835
  },
  "KBFR": {
    "airport": "Virgil I. Grissom Municipal Airport",
    "latitude": 38.84,
    "longitude": -86.4454
  },
  "KBMG": {
    "airport": "Monroe County Airport",
    "latitude": 39.146,
    "longitude": -86.6167
  },
  "KCEV": {
    "airport": "Mettel Field",
    "latitude": 39.6985,
    "longitude": -85.1297
  },
  "KBAK": {
    "airport": "Columbus Municipal Airport",
    "latitude": 39.2619,
    "longitude": -85.8963
  },
  "KEKM": {
    "airport": "Elkhart Municipal Airport",
    "latitude": 41.7194,
    "longitude": -86.0032
  },
  "KEVV": {
    "airport": "Evansville Regional Airport",
    "latitude": 38.037,
    "longitude": -87.5324
  },
  "KFRH": {
    "airport": "French Lick Municipal Airport",
    "latitude": 38.5062,
    "longitude": -86.6369
  },
  "KFWA": {
    "airport": "Fort Wayne International Airport",
    "latitude": 40.9785,
    "longitude": -85.1951
  },
  "VOGB": {
    "airport": "Kalaburagi Airport",
    "latitude": 26.6319,
    "longitude": -78.3592
  },
  "KGFD": {
    "airport": "Pope Field",
    "latitude": 39.7903,
    "longitude": -85.7361
  },
  "KGSH": {
    "airport": "Goshen Municipal Airport",
    "latitude": 41.5264,
    "longitude": -85.7929
  },
  "KGUS": {
    "airport": "Grissom Air Reserve Base",
    "latitude": 40.6481,
    "longitude": -86.1521
  },
  "KHLB": {
    "airport": "Hillenbrand Industries Airport",
    "latitude": 39.3445,
    "longitude": -85.2583
  },
  "KHNB": {
    "airport": "Huntingburg Airport",
    "latitude": 38.249,
    "longitude": -86.9537
  },
  "KIND": {
    "airport": "Indianapolis International Airport",
    "latitude": 39.7173,
    "longitude": -86.2944
  },
  "KLAF": {
    "airport": "Purdue University Airport",
    "latitude": 40.4123,
    "longitude": -86.9369
  },
  "KPPO": {
    "airport": "La Porte Municipal Airport",
    "latitude": 41.5725,
    "longitude": -86.7345
  },
  "KIMS": {
    "airport": "Madison Municipal Airport",
    "latitude": 38.7589,
    "longitude": -85.4655
  },
  "KMGC": {
    "airport": "Michigan City Municipal Airport",
    "latitude": 41.7033,
    "longitude": -86.8212
  },
  "KMIE": {
    "airport": "Delaware County Regional Airport",
    "latitude": 40.2423,
    "longitude": -85.3959
  },
  "KMZZ": {
    "airport": "Marion Municipal Airport",
    "latitude": 40.4899,
    "longitude": -85.6797
  },
  "KOKK": {
    "airport": "Kokomo Municipal Airport",
    "latitude": 40.5282,
    "longitude": -86.059
  },
  "KRCR": {
    "airport": "Fulton County Airport",
    "latitude": 41.0656,
    "longitude": -86.1817
  },
  "KRID": {
    "airport": "Richmond Municipal Airport",
    "latitude": 39.7572,
    "longitude": -84.8428
  },
  "KRZL": {
    "airport": "Jasper County Airport",
    "latitude": 40.9479,
    "longitude": -87.1826
  },
  "KSBN": {
    "airport": "South Bend International Airport",
    "latitude": 41.7087,
    "longitude": -86.3173
  },
  "KSER": {
    "airport": "Freeman Municipal Airport",
    "latitude": 38.9236,
    "longitude": -85.9074
  },
  "KSIV": {
    "airport": "Sullivan County Airport",
    "latitude": 39.1147,
    "longitude": -87.4483
  },
  "KSMD": {
    "airport": "Smith Field",
    "latitude": 41.1434,
    "longitude": -85.1528
  },
  "KVPZ": {
    "airport": "Porter County Regional Airport",
    "latitude": 41.454,
    "longitude": -87.0071
  },
  "KAIO": {
    "airport": "Atlantic Municipal Airport",
    "latitude": 41.4073,
    "longitude": -95.0469
  },
  "KALO": {
    "airport": "Waterloo Regional Airport",
    "latitude": 42.5571,
    "longitude": -92.4003
  },
  "KAMW": {
    "airport": "Ames Municipal Airport",
    "latitude": 41.992,
    "longitude": -93.6218
  },
  "KAXA": {
    "airport": "Algona Municipal Airport",
    "latitude": 43.0779,
    "longitude": -94.272
  },
  "KBNW": {
    "airport": "Boone Municipal Airport",
    "latitude": 42.0496,
    "longitude": -93.8476
  },
  "KBRL": {
    "airport": "Southeast Iowa Regional Airport",
    "latitude": 40.7832,
    "longitude": -91.1255
  },
  "KCBF": {
    "airport": "Council Bluffs Municipal Airport",
    "latitude": 41.2592,
    "longitude": -95.7606
  },
  "KCCY": {
    "airport": "Northeast Iowa Regional Airport",
    "latitude": 43.0726,
    "longitude": -92.6108
  },
  "KCID": {
    "airport": "The Eastern Iowa Airport",
    "latitude": 41.8847,
    "longitude": -91.7108
  },
  "KCIN": {
    "airport": "Arthur N. Neu Airport",
    "latitude": 42.0462,
    "longitude": -94.789
  },
  "KCSQ": {
    "airport": "Creston Municipal Airport",
    "latitude": 41.0214,
    "longitude": -94.3633
  },
  "KCWI": {
    "airport": "Clinton Municipal Airport",
    "latitude": 41.8311,
    "longitude": -90.3291
  },
  "KDBQ": {
    "airport": "Dubuque Regional Airport",
    "latitude": 42.402,
    "longitude": -90.7095
  },
  "KDEH": {
    "airport": "Decorah Municipal Airport",
    "latitude": 43.2755,
    "longitude": -91.7394
  },
  "KDNS": {
    "airport": "Denison Municipal Airport",
    "latitude": 41.9864,
    "longitude": -95.3807
  },
  "KDSM": {
    "airport": "Des Moines International Airport",
    "latitude": 41.534,
    "longitude": -93.6631
  },
  "KEBS": {
    "airport": "Webster City Municipal Airport",
    "latitude": 42.4366,
    "longitude": -93.8689
  },
  "KEFW": {
    "airport": "Jefferson Municipal Airport",
    "latitude": 42.0102,
    "longitude": -94.3426
  },
  "KEST": {
    "airport": "Estherville Municipal Airport",
    "latitude": 43.4074,
    "longitude": -94.7464
  },
  "KFFL": {
    "airport": "Fairfield Municipal Airport",
    "latitude": 41.0533,
    "longitude": -91.9789
  },
  "KFSW": {
    "airport": "Fort Madison Municipal Airport",
    "latitude": 40.6593,
    "longitude": -91.3268
  },
  "KFOD": {
    "airport": "Fort Dodge Regional Airport",
    "latitude": 42.5515,
    "longitude": -94.1926
  },
  "KFXY": {
    "airport": "Forest City Municipal Airport",
    "latitude": 43.2347,
    "longitude": -93.6241
  },
  "KHPT": {
    "airport": "Hampton Municipal Airport",
    "latitude": 42.7237,
    "longitude": -93.2263
  },
  "KICL": {
    "airport": "Schenck Field",
    "latitude": 40.7218,
    "longitude": -95.0264
  },
  "KIDG": {
    "airport": "Ida Grove Municipal Airport",
    "latitude": 42.3325,
    "longitude": -95.445
  },
  "KIFA": {
    "airport": "Iowa Falls Municipal Airport",
    "latitude": 42.4708,
    "longitude": -93.27
  },
  "KIOW": {
    "airport": "Iowa City Municipal Airport",
    "latitude": 41.6392,
    "longitude": -91.5465
  },
  "KLRJ": {
    "airport": "Le Mars Municipal Airport",
    "latitude": 42.778,
    "longitude": -96.1937
  },
  "KMCW": {
    "airport": "Mason City Municipal Airport",
    "latitude": 43.1578,
    "longitude": -93.3313
  },
  "KMIW": {
    "airport": "Marshalltown Municipal Airport",
    "latitude": 42.1128,
    "longitude": -92.9178
  },
  "KMPZ": {
    "airport": "Mount Pleasant Municipal Airport",
    "latitude": 40.9466,
    "longitude": -91.5111
  },
  "KMUT": {
    "airport": "Muscatine Municipal Airport",
    "latitude": 41.3678,
    "longitude": -91.1482
  },
  "KMXO": {
    "airport": "Monticello Regional Airport",
    "latitude": 42.2263,
    "longitude": -91.1635
  },
  "KOMA": {
    "airport": "Eppley Airfield",
    "latitude": 41.3032,
    "longitude": -95.8941
  },
  "KOOA": {
    "airport": "Oskaloosa Municipal Airport",
    "latitude": 41.0048,
    "longitude": -93.3096
  },
  "KOTM": {
    "airport": "Ottumwa Regional Airport",
    "latitude": 41.1066,
    "longitude": -92.4479
  },
  "KPOH": {
    "airport": "Pocahontas Municipal Airport",
    "latitude": 36.2456,
    "longitude": -90.9553
  },
  "KPRO": {
    "airport": "Perry Municipal Airport",
    "latitude": 41.828,
    "longitude": -94.1599
  },
  "KSLB": {
    "airport": "Storm Lake Municipal Airport",
    "latitude": 42.5973,
    "longitude": -95.2407
  },
  "KSPW": {
    "airport": "Spencer Municipal Airport",
    "latitude": 43.1655,
    "longitude": -95.2028
  },
  "KSUX": {
    "airport": "Sioux Gateway Airport (Colonel Bud Day Field)",
    "latitude": 42.4026,
    "longitude": -96.3844
  },
  "KTNU": {
    "airport": "Newton Municipal Airport",
    "latitude": 41.6744,
    "longitude": -93.0217
  },
  "KANY": {
    "airport": "Anthony Municipal Airport",
    "latitude": 37.1585,
    "longitude": -98.0796
  },
  "KBEC": {
    "airport": "Beech Factory Airport",
    "latitude": 37.6945,
    "longitude": -97.215
  },
  "KCBK": {
    "airport": "Colby Municipal Airport (Shalz Field)",
    "latitude": 39.4275,
    "longitude": -101.047
  },
  "KCEA": {
    "airport": "Cessna Aircraft Field",
    "latitude": 37.6486,
    "longitude": -97.2506
  },
  "KCFV": {
    "airport": "Coffeyville Municipal Airport",
    "latitude": 37.094,
    "longitude": -95.5719
  },
  "KCNK": {
    "airport": "Blosser Municipal Airport",
    "latitude": 39.5493,
    "longitude": -97.6523
  },
  "KCNU": {
    "airport": "Chanute Martin Johnson Airport",
    "latitude": 37.6688,
    "longitude": -95.4851
  },
  "KDDC": {
    "airport": "Dodge City Regional Airport",
    "latitude": 37.7634,
    "longitude": -99.9656
  },
  "KEQA": {
    "airport": "Captain Jack Thomas/El Dorado Airport",
    "latitude": 37.7741,
    "longitude": -96.8176
  },
  "KEMP": {
    "airport": "Emporia Municipal Airport",
    "latitude": 38.3321,
    "longitude": -96.1912
  },
  "KEWK": {
    "airport": "Newton City/County Airport",
    "latitude": 38.0582,
    "longitude": -97.2745
  },
  "KFLV": {
    "airport": "Sherman Army Airfield",
    "latitude": 39.3683,
    "longitude": -94.9147
  },
  "KFOE": {
    "airport": "Topeka Regional Airport",
    "latitude": 38.9509,
    "longitude": -95.6636
  },
  "KFRI": {
    "airport": "Marshall Army Airfield",
    "latitude": 39.0553,
    "longitude": -96.7645
  },
  "KFSK": {
    "airport": "Fort Scott Municipal Airport",
    "latitude": 37.7984,
    "longitude": -94.7694
  },
  "KGBD": {
    "airport": "Great Bend Municipal Airport",
    "latitude": 38.3443,
    "longitude": -98.8592
  },
  "KGCK": {
    "airport": "Garden City Regional Airport",
    "latitude": 37.9275,
    "longitude": -100.724
  },
  "KGLD": {
    "airport": "Goodland Municipal Airport (Renner Field)",
    "latitude": 39.3706,
    "longitude": -101.699
  },
  "KHLC": {
    "airport": "Hill City Municipal Airport",
    "latitude": 39.3788,
    "longitude": -99.8315
  },
  "KHUT": {
    "airport": "Hutchinson Municipal Airport",
    "latitude": 38.0655,
    "longitude": -97.8606
  },
  "KHYS": {
    "airport": "Hays Regional Airport",
    "latitude": 38.8422,
    "longitude": -99.2732
  },
  "KIAB": {
    "airport": "McConnell Air Force Base",
    "latitude": 37.6219,
    "longitude": -97.2682
  },
  "KICT": {
    "airport": "Wichita Dwight D. Eisenhower National Airport",
    "latitude": 37.6499,
    "longitude": -97.4331
  },
  "KIDP": {
    "airport": "Independence Municipal Airport",
    "latitude": 37.1584,
    "longitude": -95.7784
  },
  "KIXD": {
    "airport": "New Century AirCenter",
    "latitude": 38.8309,
    "longitude": -94.8903
  },
  "KLBL": {
    "airport": "Liberal Mid-America Regional Airport",
    "latitude": 37.0442,
    "longitude": -100.96
  },
  "KLWC": {
    "airport": "Lawrence Regional Airport",
    "latitude": 39.0112,
    "longitude": -95.2166
  },
  "KLYO": {
    "airport": "Lyons-Rice County Municipal Airport",
    "latitude": 38.3428,
    "longitude": -98.2269
  },
  "KMHK": {
    "airport": "Manhattan Regional Airport",
    "latitude": 39.141,
    "longitude": -96.6708
  },
  "KMPR": {
    "airport": "McPherson Airport",
    "latitude": 38.3524,
    "longitude": -97.6913
  },
  "KOJC": {
    "airport": "Johnson County Executive Airport",
    "latitude": 38.8476,
    "longitude": -94.7376
  },
  "KPPF": {
    "airport": "Tri-City Airport",
    "latitude": 37.3299,
    "longitude": -95.5062
  },
  "KPTS": {
    "airport": "Atkinson Municipal Airport",
    "latitude": 37.4478,
    "longitude": -94.7311
  },
  "KPTT": {
    "airport": "Pratt Regional Airport",
    "latitude": 37.7016,
    "longitude": -98.7469
  },
  "KRSL": {
    "airport": "Russell Municipal Airport",
    "latitude": 38.8721,
    "longitude": -98.8118
  },
  "KSLN": {
    "airport": "Salina Regional Airport",
    "latitude": 38.791,
    "longitude": -97.6522
  },
  "KTOP": {
    "airport": "Philip Billard Municipal Airport",
    "latitude": 39.0687,
    "longitude": -95.6225
  },
  "KWLD": {
    "airport": "Strother Field",
    "latitude": 37.1686,
    "longitude": -97.0376
  },
  "KBRY": {
    "airport": "Samuels Field",
    "latitude": 37.8143,
    "longitude": -85.4996
  },
  "KBWG": {
    "airport": "Bowling Green-Warren County Regional Airport",
    "latitude": 36.9645,
    "longitude": -86.4197
  },
  "KCEY": {
    "airport": "Murray-Calloway County Airport",
    "latitude": 36.6646,
    "longitude": -88.3728
  },
  "KCVG": {
    "airport": "Cincinnati/Northern Kentucky International Airport",
    "latitude": 39.0488,
    "longitude": -84.6678
  },
  "KEKX": {
    "airport": "Elizabethtown Regional Airport (Addington Field)",
    "latitude": 37.686,
    "longitude": -85.925
  },
  "KFFT": {
    "airport": "Capital City Airport",
    "latitude": 38.1825,
    "longitude": -84.9047
  },
  "KFTK": {
    "airport": "Godman Army Airfield",
    "latitude": 37.9071,
    "longitude": -85.9721
  },
  "KGLW": {
    "airport": "Glasgow Municipal Airport",
    "latitude": 37.0318,
    "longitude": -85.9537
  },
  "KHOP": {
    "airport": "Campbell Army Airfield",
    "latitude": 36.6686,
    "longitude": -87.4962
  },
  "KLEX": {
    "airport": "Blue Grass Airport",
    "latitude": 38.0365,
    "longitude": -84.6059
  },
  "KLOU": {
    "airport": "Bowman Field",
    "latitude": 38.228,
    "longitude": -85.6637
  },
  "KLOZ": {
    "airport": "London-Corbin Airport (Magee Field)",
    "latitude": 37.0822,
    "longitude": -84.0849
  },
  "KOWB": {
    "airport": "Owensboro-Daviess County Airport",
    "latitude": 37.7401,
    "longitude": -87.1668
  },
  "KPAH": {
    "airport": "Barkley Regional Airport",
    "latitude": 37.0608,
    "longitude": -88.7738
  },
  "KPBX": {
    "airport": "Pike County Airport",
    "latitude": 37.5618,
    "longitude": -82.5664
  },
  "KSDF": {
    "airport": "Louisville International Airport (Standiford Field)",
    "latitude": 38.1744,
    "longitude": -85.736
  },
  "KSME": {
    "airport": "Lake Cumberland Regional Airport",
    "latitude": 37.0534,
    "longitude": -84.6159
  },
  "KAEX": {
    "airport": "Alexandria International Airport",
    "latitude": 31.3274,
    "longitude": -92.5498
  },
  "KARA": {
    "airport": "Acadiana Regional Airport",
    "latitude": 30.0378,
    "longitude": -91.8839
  },
  "KBAD": {
    "airport": "Barksdale Air Force Base",
    "latitude": 32.5018,
    "longitude": -93.6627
  },
  "KBTR": {
    "airport": "Baton Rouge Metropolitan Airport (Ryan Field)",
    "latitude": 30.5332,
    "longitude": -91.1496
  },
  "KBXA": {
    "airport": "George R. Carr Memorial Air Field",
    "latitude": 30.8137,
    "longitude": -89.865
  },
  "KCWF": {
    "airport": "Chennault International Airport",
    "latitude": 30.2106,
    "longitude": -93.1432
  },
  "KDRI": {
    "airport": "Beauregard Regional Airport",
    "latitude": 30.8317,
    "longitude": -93.3399
  },
  "KDTN": {
    "airport": "Shreveport Downtown Airport",
    "latitude": 32.5402,
    "longitude": -93.745
  },
  "KESF": {
    "airport": "Esler Airfield (Esler Regional Airport)",
    "latitude": 31.3949,
    "longitude": -92.2958
  },
  "KHUM": {
    "airport": "Houma-Terrebonne Airport",
    "latitude": 29.5665,
    "longitude": -90.6604
  },
  "KLCH": {
    "airport": "Lake Charles Regional Airport",
    "latitude": 30.1261,
    "longitude": -93.2233
  },
  "KLFT": {
    "airport": "Lafayette Regional Airport",
    "latitude": 30.2053,
    "longitude": -91.9876
  },
  "KMLU": {
    "airport": "Monroe Regional Airport",
    "latitude": 32.5109,
    "longitude": -92.0377
  },
  "KMSY": {
    "airport": "Louis Armstrong New Orleans International Airport",
    "latitude": 29.9934,
    "longitude": -90.258
  },
  "KNBG": {
    "airport": "NAS JRB New Orleans (Alvin Callender Field)",
    "latitude": 29.8253,
    "longitude": -90.035
  },
  "KNEW": {
    "airport": "Lakefront Airport",
    "latitude": 30.0424,
    "longitude": -90.0283
  },
  "KOPL": {
    "airport": "St. Landry Parish Airport (Ahart Field)",
    "latitude": 30.5584,
    "longitude": -92.0994
  },
  "KPOE": {
    "airport": "Polk Army Airfield",
    "latitude": 31.0448,
    "longitude": -93.1917
  },
  "KPTN": {
    "airport": "Harry P. Williams Memorial Airport",
    "latitude": 29.7095,
    "longitude": -91.339
  },
  "KRSN": {
    "airport": "Ruston Regional Airport",
    "latitude": 32.5144,
    "longitude": -92.5917
  },
  "KSHV": {
    "airport": "Shreveport Regional Airport",
    "latitude": 32.4466,
    "longitude": -93.8256
  },
  "KAUG": {
    "airport": "Augusta State Airport",
    "latitude": 44.3206,
    "longitude": -69.7973
  },
  "KBGR": {
    "airport": "Bangor International Airport",
    "latitude": 44.8074,
    "longitude": -68.8281
  },
  "KBHB": {
    "airport": "Hancock County-Bar Harbor Airport",
    "latitude": 44.45,
    "longitude": -68.3615
  },
  "KCAR": {
    "airport": "Caribou Municipal Airport",
    "latitude": 46.8715,
    "longitude": -68.0179
  },
  "KIZG": {
    "airport": "Eastern Slopes Regional Airport",
    "latitude": 43.9911,
    "longitude": -70.9479
  },
  "KHUL": {
    "airport": "Houlton International Airport",
    "latitude": 46.1231,
    "longitude": -67.7921
  },
  "KIWI": {
    "airport": "Wiscasset Airport",
    "latitude": 43.9614,
    "longitude": -69.7126
  },
  "KLEW": {
    "airport": "Auburn/Lewiston Municipal Airport",
    "latitude": 44.0485,
    "longitude": -70.2835
  },
  "KMLT": {
    "airport": "Millinocket Municipal Airport",
    "latitude": 45.6478,
    "longitude": -68.6856
  },
  "KBXM": {
    "airport": "Brunswick Executive Airport",
    "latitude": 43.8922,
    "longitude": -69.9386
  },
  "KOLD": {
    "airport": "Old Town Municipal Airport and Seaplane Base (Dewitt Field)",
    "latitude": 44.9528,
    "longitude": -68.6743
  },
  "KOWK": {
    "airport": "Central Maine Airport of Norridgewock",
    "latitude": 44.7155,
    "longitude": -69.8665
  },
  "KPNN": {
    "airport": "Princeton Municipal Airport",
    "latitude": 45.2007,
    "longitude": -67.5644
  },
  "KPQI": {
    "airport": "Northern Maine Regional Airport at Presque Isle",
    "latitude": 46.689,
    "longitude": -68.0448
  },
  "KPWM": {
    "airport": "Portland International Jetport",
    "latitude": 43.6462,
    "longitude": -70.3093
  },
  "KRKD": {
    "airport": "Knox County Regional Airport",
    "latitude": 44.0601,
    "longitude": -69.0992
  },
  "KSFM": {
    "airport": "Sanford Seacoast Regional Airport",
    "latitude": 43.3939,
    "longitude": -70.708
  },
  "KFVE": {
    "airport": "Northern Aroostook Regional Airport",
    "latitude": 47.2855,
    "longitude": -68.3128
  },
  "KWVL": {
    "airport": "Waterville Robert LaFleur Airport",
    "latitude": 44.5332,
    "longitude": -69.6755
  },
  "KADW": {
    "airport": "Andrews Field (Andrews Air Force Base)",
    "latitude": 38.8108,
    "longitude": -76.867
  },
  "KANP": {
    "airport": "Lee Airport",
    "latitude": 38.9429,
    "longitude": -76.5684
  },
  "KAPG": {
    "airport": "Phillips Army Airfield",
    "latitude": 39.4662,
    "longitude": -76.1688
  },
  "KBWI": {
    "airport": "Baltimore/Washington International Airport",
    "latitude": 39.1753,
    "longitude": -76.6683
  },
  "KCBE": {
    "airport": "Greater Cumberland Regional Airport",
    "latitude": 39.6154,
    "longitude": -78.7609
  },
  "KCGE": {
    "airport": "Cambridge-Dorchester Airport",
    "latitude": 38.5393,
    "longitude": -76.0304
  },
  "KCGS": {
    "airport": "College Park Airport",
    "latitude": 38.9806,
    "longitude": -76.9223
  },
  "KESN": {
    "airport": "Easton Airport (Newnam Field)",
    "latitude": 38.8042,
    "longitude": -76.069
  },
  "KFDK": {
    "airport": "Frederick Municipal Airport",
    "latitude": 39.4176,
    "longitude": -77.3743
  },
  "KFME": {
    "airport": "Tipton Airport",
    "latitude": 39.0854,
    "longitude": -76.7594
  },
  "KGAI": {
    "airport": "Montgomery County Airpark",
    "latitude": 39.1683,
    "longitude": -77.166
  },
  "KHGR": {
    "airport": "Hagerstown Regional Airport (Richard A. Henson Field)",
    "latitude": 39.7079,
    "longitude": -77.7295
  },
  "KMTN": {
    "airport": "Martin State Airport",
    "latitude": 39.3257,
    "longitude": -76.4138
  },
  "KNHK": {
    "airport": "NAS Patuxent River (Trapnell Field)",
    "latitude": 38.286,
    "longitude": -76.4118
  },
  "KOXB": {
    "airport": "Ocean City Municipal Airport",
    "latitude": 38.3104,
    "longitude": -75.124
  },
  "KSBY": {
    "airport": "Salisbury-Ocean City-Wicomico Regional Airport",
    "latitude": 38.3405,
    "longitude": -75.5103
  },
  "KACK": {
    "airport": "Nantucket Memorial Airport",
    "latitude": 41.2531,
    "longitude": -70.0602
  },
  "TJAB": {
    "airport": "Antonio (Nery) Juarbe Pol Airport",
    "latitude": 18.45,
    "longitude": -66.6753
  },
  "KBAF": {
    "airport": "Westfield-Barnes Regional Airport",
    "latitude": 42.1578,
    "longitude": -72.7156
  },
  "KBED": {
    "airport": "Laurence G. Hanscom Field",
    "latitude": 42.47,
    "longitude": -71.289
  },
  "KBOS": {
    "airport": "Logan International Airport",
    "latitude": 42.3643,
    "longitude": -71.0052
  },
  "TJBQ": {
    "airport": "Rafael Hernandez Airport",
    "latitude": 18.4949,
    "longitude": -67.1294
  },
  "KBVY": {
    "airport": "Beverly Municipal Airport",
    "latitude": 42.5842,
    "longitude": -70.9165
  },
  "TJCP": {
    "airport": "Benjamin Rivera Noriega Airport",
    "latitude": 18.3133,
    "longitude": -65.3043
  },
  "KEWB": {
    "airport": "New Bedford Regional Airport",
    "latitude": 41.6761,
    "longitude": -70.9569
  },
  "TJFA": {
    "airport": "Diego Jimenez Torres Airport",
    "latitude": 18.3089,
    "longitude": -65.6619
  },
  "KFMH": {
    "airport": "Otis Air National Guard Base",
    "latitude": 41.6584,
    "longitude": -70.5214
  },
  "KGBR": {
    "airport": "Walter J. Koladza Airport",
    "latitude": 42.1842,
    "longitude": -73.4032
  },
  "KGDM": {
    "airport": "Gardner Municipal Airport",
    "latitude": 42.55,
    "longitude": -72.0161
  },
  "KHYA": {
    "airport": "Barnstable Municipal Airport (Boardman/Polando Field)",
    "latitude": 41.6693,
    "longitude": -70.2804
  },
  "KLWM": {
    "airport": "Lawrence Municipal Airport",
    "latitude": 42.7172,
    "longitude": -71.1234
  },
  "TJMZ": {
    "airport": "Eugenio Maria de Hostos Airport",
    "latitude": 18.2557,
    "longitude": -67.1485
  },
  "KMVY": {
    "airport": "Martha's Vineyard Airport",
    "latitude": 41.3931,
    "longitude": -70.6143
  },
  "TJRV": {
    "airport": "Jose Aponte de la Torre Airport",
    "latitude": 18.2453,
    "longitude": -65.6434
  },
  "KORH": {
    "airport": "Worcester Regional Airport",
    "latitude": 42.2673,
    "longitude": -71.8757
  },
  "KOWD": {
    "airport": "Norwood Memorial Airport",
    "latitude": 42.1905,
    "longitude": -71.1729
  },
  "KPSF": {
    "airport": "Pittsfield Municipal Airport",
    "latitude": 42.4268,
    "longitude": -73.2929
  },
  "KPVC": {
    "airport": "Provincetown Municipal Airport",
    "latitude": 42.0719,
    "longitude": -70.2214
  },
  "KPYM": {
    "airport": "Plymouth Municipal Airport",
    "latitude": 41.909,
    "longitude": -70.7288
  },
  "TJVQ": {
    "airport": "Antonio Rivera Rodriguez Airport",
    "latitude": 18.1348,
    "longitude": -65.4936
  },
  "KACB": {
    "airport": "Antrim County Airport",
    "latitude": 44.9886,
    "longitude": -85.1984
  },
  "KADG": {
    "airport": "Lenawee County Airport",
    "latitude": 41.8677,
    "longitude": -84.0773
  },
  "KAMN": {
    "airport": "Gratiot Community Airport",
    "latitude": 43.3221,
    "longitude": -84.688
  },
  "KAPN": {
    "airport": "Alpena County Regional Airport",
    "latitude": 45.0781,
    "longitude": -83.5603
  },
  "KARB": {
    "airport": "Ann Arbor Municipal Airport",
    "latitude": 42.223,
    "longitude": -83.7456
  },
  "KAZO": {
    "airport": "Kalamazoo/Battle Creek International Airport",
    "latitude": 42.2349,
    "longitude": -85.5521
  },
  "KBEH": {
    "airport": "Southwest Michigan Regional Airport",
    "latitude": 42.1286,
    "longitude": -86.4285
  },
  "KBTL": {
    "airport": "W. K. Kellogg Airport",
    "latitude": 42.3073,
    "longitude": -85.2515
  },
  "KCAD": {
    "airport": "Wexford County Airport",
    "latitude": 44.2753,
    "longitude": -85.4189
  },
  "KCIU": {
    "airport": "Chippewa County International Airport",
    "latitude": 46.2508,
    "longitude": -84.4724
  },
  "KCMX": {
    "airport": "Houghton County Memorial Airport",
    "latitude": 47.1684,
    "longitude": -88.4891
  },
  "KDRM": {
    "airport": "Drummond Island Airport",
    "latitude": 46.0093,
    "longitude": -83.7439
  },
  "KDTW": {
    "airport": "Detroit Metro Wayne County Airport",
    "latitude": 42.2125,
    "longitude": -83.3533
  },
  "KESC": {
    "airport": "Delta County Airport",
    "latitude": 45.7227,
    "longitude": -87.0937
  },
  "KFNT": {
    "airport": "Bishop International Airport",
    "latitude": 42.9654,
    "longitude": -83.7436
  },
  "KGDW": {
    "airport": "Gladwin Zettel Memorial Airport",
    "latitude": 43.9706,
    "longitude": -84.475
  },
  "KGLR": {
    "airport": "Gaylord Regional Airport",
    "latitude": 45.0135,
    "longitude": -84.7036
  },
  "KGRR": {
    "airport": "Gerald R. Ford International Airport",
    "latitude": 42.8808,
    "longitude": -85.5228
  },
  "KHAI": {
    "airport": "Three Rivers Municipal Airport (Dr. Haines Flying Field)",
    "latitude": 41.9598,
    "longitude": -85.5934
  },
  "KHLM": {
    "airport": "Park Township Airport",
    "latitude": 42.7959,
    "longitude": -86.162
  },
  "KHTL": {
    "airport": "Roscommon County-Blodgett Memorial Airport",
    "latitude": 44.3598,
    "longitude": -84.6711
  },
  "KIMT": {
    "airport": "Ford Airport",
    "latitude": 45.8184,
    "longitude": -88.1145
  },
  "KIRS": {
    "airport": "Kirsch Municipal Airport",
    "latitude": 41.8133,
    "longitude": -85.439
  },
  "KISQ": {
    "airport": "Schoolcraft County Airport",
    "latitude": 45.9746,
    "longitude": -86.1718
  },
  "KIWD": {
    "airport": "Gogebic-Iron County Airport",
    "latitude": 46.5275,
    "longitude": -90.1314
  },
  "KJXN": {
    "airport": "Jackson County Airport (Reynolds Field)",
    "latitude": 42.2598,
    "longitude": -84.4594
  },
  "KLAN": {
    "airport": "Capital Region International Airport",
    "latitude": 42.7787,
    "longitude": -84.5874
  },
  "KLDM": {
    "airport": "Mason County Airport",
    "latitude": 43.9625,
    "longitude": -86.4079
  },
  "KMBL": {
    "airport": "Manistee County Blacker Airport",
    "latitude": 44.2724,
    "longitude": -86.2469
  },
  "KMBS": {
    "airport": "MBS International Airport",
    "latitude": 43.5329,
    "longitude": -84.0796
  },
  "KMCD": {
    "airport": "Mackinac Island Airport",
    "latitude": 45.8649,
    "longitude": -84.6373
  },
  "KMKG": {
    "airport": "Muskegon County Airport",
    "latitude": 43.1695,
    "longitude": -86.2382
  },
  "KMNM": {
    "airport": "Menominee-Marinette Twin County Airport",
    "latitude": 45.1267,
    "longitude": -87.6384
  },
  "KMOP": {
    "airport": "Mount Pleasant Municipal Airport",
    "latitude": 43.6217,
    "longitude": -84.7375
  },
  "KSAW": {
    "airport": "Sawyer International Airport",
    "latitude": 46.3536,
    "longitude": -87.3954
  },
  "KMTC": {
    "airport": "Selfridge Air National Guard Base",
    "latitude": 42.6135,
    "longitude": -82.8369
  },
  "KOSC": {
    "airport": "Oscoda-Wurtsmith Airport",
    "latitude": 44.4516,
    "longitude": -83.3941
  },
  "KPHN": {
    "airport": "St. Clair County International Airport",
    "latitude": 42.911,
    "longitude": -82.5289
  },
  "KPLN": {
    "airport": "Pellston Regional Airport (Emmet County)",
    "latitude": 45.5709,
    "longitude": -84.7967
  },
  "KPTK": {
    "airport": "Oakland County International Airport",
    "latitude": 42.6655,
    "longitude": -83.4201
  },
  "KRCT": {
    "airport": "Nartron Field",
    "latitude": 43.9,
    "longitude": -85.5167
  },
  "KTVC": {
    "airport": "Cherry Capital Airport",
    "latitude": 44.7414,
    "longitude": -85.5822
  },
  "KCFS": {
    "airport": "Tuscola Area Airport",
    "latitude": 43.4588,
    "longitude": -83.4455
  },
  "KRQB": {
    "airport": "Roben-Hood Airport",
    "latitude": 43.7226,
    "longitude": -85.5041
  },
  "KAEL": {
    "airport": "Albert Lea Municipal Airport",
    "latitude": 43.6815,
    "longitude": -93.3672
  },
  "KAUM": {
    "airport": "Austin Municipal Airport",
    "latitude": 43.665,
    "longitude": -92.9334
  },
  "KAXN": {
    "airport": "Alexandria Municipal Airport (Chandler Field)",
    "latitude": 45.8663,
    "longitude": -95.3947
  },
  "KBBB": {
    "airport": "Benson Municipal Airport",
    "latitude": 45.3319,
    "longitude": -95.6506
  },
  "KBDE": {
    "airport": "Baudette International Airport",
    "latitude": 48.7284,
    "longitude": -94.6122
  },
  "KBJI": {
    "airport": "Bemidji Regional Airport",
    "latitude": 47.5094,
    "longitude": -94.9337
  },
  "KBRD": {
    "airport": "Brainerd Lakes Regional Airport",
    "latitude": 46.3983,
    "longitude": -94.1381
  },
  "KCKN": {
    "airport": "Crookston Municipal Airport (Kirkwood Field)",
    "latitude": 47.8417,
    "longitude": -96.6216
  },
  "KDLH": {
    "airport": "Duluth International Airport",
    "latitude": 46.8421,
    "longitude": -92.1936
  },
  "KDTL": {
    "airport": "Detroit Lakes Airport (Wething Field)",
    "latitude": 46.8252,
    "longitude": -95.8857
  },
  "KEVM": {
    "airport": "Eveleth-Virginia Municipal Airport",
    "latitude": 47.4251,
    "longitude": -92.4985
  },
  "KFBL": {
    "airport": "Faribault Municipal Airport",
    "latitude": 44.3284,
    "longitude": -93.3125
  },
  "KFCM": {
    "airport": "Flying Cloud Airport",
    "latitude": 44.8272,
    "longitude": -93.4571
  },
  "KFFM": {
    "airport": "Fergus Falls Municipal Airport (Einar Mickelson Field)",
    "latitude": 46.2844,
    "longitude": -96.1567
  },
  "KFRM": {
    "airport": "Fairmont Municipal Airport",
    "latitude": 43.6439,
    "longitude": -94.4156
  },
  "KGPZ": {
    "airport": "Grand Rapids-Itasca County Airport (Gordon Newstrom Field)",
    "latitude": 47.2111,
    "longitude": -93.5098
  },
  "KCKC": {
    "airport": "Grand Marais/Cook County Airport",
    "latitude": 47.8383,
    "longitude": -90.3829
  },
  "KHIB": {
    "airport": "Range Regional Airport",
    "latitude": 47.3866,
    "longitude": -92.839
  },
  "KBDH": {
    "airport": "Willmar Municipal Airport (John L. Rice Field)",
    "latitude": 45.1177,
    "longitude": -95.1304
  },
  "KINL": {
    "airport": "Falls International Airport",
    "latitude": 48.5662,
    "longitude": -93.4031
  },
  "KELO": {
    "airport": "Ely Municipal Airport",
    "latitude": 47.8245,
    "longitude": -91.8307
  },
  "KMIC": {
    "airport": "Crystal Airport",
    "latitude": 45.062,
    "longitude": -93.3539
  },
  "KMJQ": {
    "airport": "Jackson Municipal Airport",
    "latitude": 43.65,
    "longitude": -94.9867
  },
  "KMKT": {
    "airport": "Mankato Regional Airport",
    "latitude": 44.2216,
    "longitude": -93.9187
  },
  "KMML": {
    "airport": "Southwest Minnesota Regional Airport (Marshall/Ryan Field)",
    "latitude": 44.4505,
    "longitude": -95.8219
  },
  "KMOX": {
    "airport": "Morris Municipal Airport",
    "latitude": 45.5704,
    "longitude": -95.9684
  },
  "KMSP": {
    "airport": "Minneapolis-Saint Paul International Airport (Wold-Chamberlain Field)",
    "latitude": 44.882,
    "longitude": -93.2218
  },
  "KMVE": {
    "airport": "Montevideo-Chippewa County Airport",
    "latitude": 44.9691,
    "longitude": -95.7103
  },
  "KMWM": {
    "airport": "Windom Municipal Airport",
    "latitude": 43.9134,
    "longitude": -95.1094
  },
  "KDVP": {
    "airport": "Slayton Municipal Airport",
    "latitude": 43.9868,
    "longitude": -95.7826
  },
  "KONA": {
    "airport": "Winona Municipal Airport (Max Conrad Field)",
    "latitude": 44.0772,
    "longitude": -91.7083
  },
  "KOTG": {
    "airport": "Worthington Municipal Airport",
    "latitude": 43.6559,
    "longitude": -95.584
  },
  "KOWA": {
    "airport": "Owatonna Degner Regional Airport",
    "latitude": 44.1234,
    "longitude": -93.2606
  },
  "KPKD": {
    "airport": "Park Rapids Municipal Airport (Konshok Field)",
    "latitude": 46.9006,
    "longitude": -95.0731
  },
  "KROX": {
    "airport": "Roseau Municipal Airport (Rudy Billberg Field)",
    "latitude": 48.856,
    "longitude": -95.697
  },
  "KRRT": {
    "airport": "Warroad International Memorial Airport (Swede Carlson Field)",
    "latitude": 48.9414,
    "longitude": -95.3484
  },
  "KRST": {
    "airport": "Rochester International Airport",
    "latitude": 43.9083,
    "longitude": -92.5
  },
  "KRWF": {
    "airport": "Redwood Falls Municipal Airport",
    "latitude": 44.5472,
    "longitude": -95.0823
  },
  "KSTC": {
    "airport": "St. Cloud Regional Airport",
    "latitude": 45.5466,
    "longitude": -94.0599
  },
  "KSTP": {
    "airport": "St. Paul Downtown Airport (Holman Field)",
    "latitude": 44.9345,
    "longitude": -93.06
  },
  "KSYN": {
    "airport": "Stanton Airfield",
    "latitude": 44.4755,
    "longitude": -93.0163
  },
  "KTVF": {
    "airport": "Thief River Falls Regional Airport",
    "latitude": 48.0657,
    "longitude": -96.185
  },
  "KULM": {
    "airport": "New Ulm Municipal Airport",
    "latitude": 44.3196,
    "longitude": -94.5023
  },
  "KBIX": {
    "airport": "Keesler Air Force Base",
    "latitude": 30.4104,
    "longitude": -88.9244
  },
  "KCBM": {
    "airport": "Columbus Air Force Base",
    "latitude": 33.6438,
    "longitude": -88.4438
  },
  "KCKM": {
    "airport": "Fletcher Field",
    "latitude": 34.2997,
    "longitude": -90.5123
  },
  "KCRX": {
    "airport": "Roscoe Turner Airport",
    "latitude": 34.915,
    "longitude": -88.6035
  },
  "KMBO": {
    "airport": "Bruce Campbell Field",
    "latitude": 32.4387,
    "longitude": -90.1031
  },
  "KGLH": {
    "airport": "Mid-Delta Regional Airport",
    "latitude": 33.4829,
    "longitude": -90.9856
  },
  "KGPT": {
    "airport": "Gulfport-Biloxi International Airport",
    "latitude": 30.4073,
    "longitude": -89.0701
  },
  "KGTR": {
    "airport": "Golden Triangle Regional Airport",
    "latitude": 33.4503,
    "longitude": -88.5914
  },
  "KGWO": {
    "airport": "Greenwood-Leflore Airport",
    "latitude": 33.4943,
    "longitude": -90.0847
  },
  "KHBG": {
    "airport": "Hattiesburg Bobby L. Chain Municipal Airport",
    "latitude": 31.2648,
    "longitude": -89.2528
  },
  "KHEZ": {
    "airport": "Natchez-Adams County Airport (Hardy-Anders Field)",
    "latitude": 31.6137,
    "longitude": -91.2973
  },
  "KHKS": {
    "airport": "Hawkins Field",
    "latitude": 32.3345,
    "longitude": -90.2222
  },
  "KJAN": {
    "airport": "Jackson-Evers International Airport",
    "latitude": 32.3112,
    "longitude": -90.0759
  },
  "KLMS": {
    "airport": "Louisville Winston County Airport",
    "latitude": 33.1462,
    "longitude": -89.0625
  },
  "KLUL": {
    "airport": "Hesler-Noble Field",
    "latitude": 31.6726,
    "longitude": -89.1722
  },
  "KMCB": {
    "airport": "McComb-Pike County Airport (John E. Lewis Field)",
    "latitude": 31.1785,
    "longitude": -90.4719
  },
  "KMEI": {
    "airport": "Meridian Regional Airport (Key Field)",
    "latitude": 32.3326,
    "longitude": -88.7519
  },
  "KMMS": {
    "airport": "Selfs Airport",
    "latitude": 34.2315,
    "longitude": -90.2896
  },
  "KOLV": {
    "airport": "Olive Branch Airport",
    "latitude": 34.9787,
    "longitude": -89.7869
  },
  "KOSX": {
    "airport": "Kosciusko-Attala County Airport",
    "latitude": 33.09,
    "longitude": -89.5409
  },
  "KPQL": {
    "airport": "Trent Lott International Airport",
    "latitude": 30.4628,
    "longitude": -88.5292
  },
  "KPIB": {
    "airport": "Hattiesburg-Laurel Regional Airport",
    "latitude": 31.4671,
    "longitude": -89.3371
  },
  "KTUP": {
    "airport": "Tupelo Regional Airport",
    "latitude": 34.2681,
    "longitude": -88.7699
  },
  "KUBS": {
    "airport": "Columbus-Lowndes County Airport",
    "latitude": 33.4654,
    "longitude": -88.3803
  },
  "KUOX": {
    "airport": "University-Oxford Airport",
    "latitude": 34.3843,
    "longitude": -89.5368
  },
  "KUTA": {
    "airport": "Tunica Municipal Airport",
    "latitude": 34.681,
    "longitude": -90.3467
  },
  "KVKS": {
    "airport": "Vicksburg Municipal Airport",
    "latitude": 32.2393,
    "longitude": -90.9284
  },
  "KAIZ": {
    "airport": "Lee C. Fine Memorial Airport",
    "latitude": 38.096,
    "longitude": -92.5495
  },
  "KBBG": {
    "airport": "Branson Airport",
    "latitude": 36.5321,
    "longitude": -93.2005
  },
  "KBUM": {
    "airport": "Butler Memorial Airport",
    "latitude": 38.2898,
    "longitude": -94.3401
  },
  "KCGI": {
    "airport": "Cape Girardeau Regional Airport",
    "latitude": 37.2253,
    "longitude": -89.5708
  },
  "KCOU": {
    "airport": "Columbia Regional Airport",
    "latitude": 38.8181,
    "longitude": -92.2196
  },
  "KDMO": {
    "airport": "Sedalia Regional Airport",
    "latitude": 38.7074,
    "longitude": -93.1759
  },
  "KEOS": {
    "airport": "Neosho Hugh Robinson Airport",
    "latitude": 36.8065,
    "longitude": -94.391
  },
  "KFAM": {
    "airport": "Farmington Regional Airport",
    "latitude": 37.7611,
    "longitude": -90.4286
  },
  "KIRK": {
    "airport": "Kirksville Regional Airport",
    "latitude": 40.0935,
    "longitude": -92.5449
  },
  "KJEF": {
    "airport": "Jefferson City Memorial Airport",
    "latitude": 38.5912,
    "longitude": -92.1561
  },
  "KJLN": {
    "airport": "Joplin Regional Airport",
    "latitude": 37.1518,
    "longitude": -94.4983
  },
  "PFKK": {
    "airport": "Kokhanok Airport",
    "latitude": 59.4332,
    "longitude": -154.804
  },
  "KTKX": {
    "airport": "Kennett Memorial Airport",
    "latitude": 36.2259,
    "longitude": -90.0366
  },
  "KMAW": {
    "airport": "Malden Regional Airport",
    "latitude": 36.6006,
    "longitude": -89.9922
  },
  "KMBY": {
    "airport": "Omar N. Bradley Airport",
    "latitude": 39.4639,
    "longitude": -92.427
  },
  "KMCI": {
    "airport": "Kansas City International Airport",
    "latitude": 39.2976,
    "longitude": -94.7139
  },
  "KMHL": {
    "airport": "Marshall Memorial Municipal Airport",
    "latitude": 39.0958,
    "longitude": -93.2029
  },
  "KMKC": {
    "airport": "Charles B. Wheeler Downtown Airport",
    "latitude": 39.1232,
    "longitude": -94.5928
  },
  "KNVD": {
    "airport": "Nevada Municipal Airport",
    "latitude": 37.853,
    "longitude": -94.3045
  },
  "KPLK": {
    "airport": "M. Graham Clark Downtown Airport",
    "latitude": 36.6259,
    "longitude": -93.2289
  },
  "KPOF": {
    "airport": "Poplar Bluff Municipal Airport",
    "latitude": 36.7739,
    "longitude": -90.3249
  },
  "KSGF": {
    "airport": "Springfield-Branson National Airport",
    "latitude": 37.2457,
    "longitude": -93.3886
  },
  "KSIK": {
    "airport": "Sikeston Memorial Municipal Airport",
    "latitude": 36.8989,
    "longitude": -89.5618
  },
  "KSTJ": {
    "airport": "Rosecrans Memorial Airport",
    "latitude": 39.7719,
    "longitude": -94.9097
  },
  "KSTL": {
    "airport": "Lambert-St. Louis International Airport",
    "latitude": 38.7487,
    "longitude": -90.37
  },
  "KSUS": {
    "airport": "Spirit of St. Louis Airport",
    "latitude": 38.6621,
    "longitude": -90.652
  },
  "KSZL": {
    "airport": "Whiteman Air Force Base",
    "latitude": 38.7303,
    "longitude": -93.5479
  },
  "KTBN": {
    "airport": "Waynesville-St. Robert Regional Airport (Forney Field)",
    "latitude": 37.7416,
    "longitude": -92.1407
  },
  "KTRX": {
    "airport": "Trenton Municipal Airport",
    "latitude": 40.0836,
    "longitude": -93.5908
  },
  "KVIH": {
    "airport": "Rolla National Airport",
    "latitude": 38.1274,
    "longitude": -91.7695
  },
  "KBIL": {
    "airport": "Billings Logan International Airport",
    "latitude": 45.8077,
    "longitude": -108.543
  },
  "KBTM": {
    "airport": "Bert Mooney Airport",
    "latitude": 45.9548,
    "longitude": -112.497
  },
  "KBZN": {
    "airport": "Bozeman Yellowstone International Airport (Gallatin Field)",
    "latitude": 45.7775,
    "longitude": -111.153
  },
  "KCTB": {
    "airport": "Cut Bank Municipal Airport",
    "latitude": 48.6084,
    "longitude": -112.376
  },
  "KDLN": {
    "airport": "Dillon Airport",
    "latitude": 45.2554,
    "longitude": -112.553
  },
  "KGPI": {
    "airport": "Glacier Park International Airport",
    "latitude": 48.3105,
    "longitude": -114.256
  },
  "KGDV": {
    "airport": "Dawson Community Airport",
    "latitude": 47.1387,
    "longitude": -104.807
  },
  "KGGW": {
    "airport": "Glasgow Airport (Wokal Field)",
    "latitude": 48.2125,
    "longitude": -106.615
  },
  "KGTF": {
    "airport": "Great Falls International Airport",
    "latitude": 47.482,
    "longitude": -111.371
  },
  "KHLN": {
    "airport": "Helena Regional Airport",
    "latitude": 46.6068,
    "longitude": -111.983
  },
  "KHVR": {
    "airport": "Havre City-County Airport",
    "latitude": 48.543,
    "longitude": -109.762
  },
  "KJDN": {
    "airport": "Jordan Airport",
    "latitude": 47.3288,
    "longitude": -106.953
  },
  "KLVM": {
    "airport": "Mission Field",
    "latitude": 45.6994,
    "longitude": -110.448
  },
  "KLWT": {
    "airport": "Lewistown Municipal Airport",
    "latitude": 47.0493,
    "longitude": -109.467
  },
  "KMLS": {
    "airport": "Miles City Airport (Frank Wiley Field)",
    "latitude": 46.428,
    "longitude": -105.886
  },
  "KMSO": {
    "airport": "Missoula International Airport",
    "latitude": 46.9163,
    "longitude": -114.091
  },
  "KOLF": {
    "airport": "L. M. Clayton Airport",
    "latitude": 48.0945,
    "longitude": -105.575
  },
  "KPWD": {
    "airport": "Sher-Wood Airport",
    "latitude": 48.7903,
    "longitude": -104.534
  },
  "KRPX": {
    "airport": "Roundup Airport",
    "latitude": 46.4751,
    "longitude": -108.541
  },
  "KSBX": {
    "airport": "Shelby Airport",
    "latitude": 48.5407,
    "longitude": -111.871
  },
  "KSDY": {
    "airport": "Sidney-Richland Municipal Airport",
    "latitude": 47.7069,
    "longitude": -104.193
  },
  "KTHM": {
    "airport": "Thompson Falls Airport",
    "latitude": 47.5735,
    "longitude": -115.281
  },
  "KWYS": {
    "airport": "Yellowstone Airport",
    "latitude": 44.6884,
    "longitude": -111.118
  },
  "KAIA": {
    "airport": "Alliance Municipal Airport",
    "latitude": 42.0532,
    "longitude": -102.804
  },
  "KANW": {
    "airport": "Ainsworth Regional Airport",
    "latitude": 42.5792,
    "longitude": -99.993
  },
  "KBBW": {
    "airport": "Broken Bow Municipal Airport",
    "latitude": 41.4365,
    "longitude": -99.6422
  },
  "KBFF": {
    "airport": "Western Nebraska Regional Airport (William B. Heilig Field)",
    "latitude": 41.874,
    "longitude": -103.596
  },
  "KBIE": {
    "airport": "Beatrice Municipal Airport",
    "latitude": 40.3013,
    "longitude": -96.7541
  },
  "KBUB": {
    "airport": "Cram Field",
    "latitude": 41.7767,
    "longitude": -99.1497
  },
  "KCDR": {
    "airport": "Chadron Municipal Airport",
    "latitude": 42.8376,
    "longitude": -103.095
  },
  "KEAR": {
    "airport": "Kearney Regional Airport",
    "latitude": 40.727,
    "longitude": -99.0068
  },
  "KFBY": {
    "airport": "Fairbury Municipal Airport",
    "latitude": 40.183,
    "longitude": -97.1693
  },
  "KFET": {
    "airport": "Fremont Municipal Airport",
    "latitude": 41.4491,
    "longitude": -96.5202
  },
  "KGRI": {
    "airport": "Central Nebraska Regional Airport",
    "latitude": 40.9675,
    "longitude": -98.3096
  },
  "KGRN": {
    "airport": "Gordon Municipal Airport",
    "latitude": 42.806,
    "longitude": -102.175
  },
  "KHDE": {
    "airport": "Brewster Field",
    "latitude": 40.4521,
    "longitude": -99.3365
  },
  "KHSI": {
    "airport": "Hastings Municipal Airport",
    "latitude": 40.6053,
    "longitude": -98.4279
  },
  "KIML": {
    "airport": "Imperial Municipal Airport",
    "latitude": 40.5093,
    "longitude": -101.621
  },
  "KLBF": {
    "airport": "North Platte Regional Airport (Lee Bird Field)",
    "latitude": 41.1262,
    "longitude": -100.684
  },
  "KLNK": {
    "airport": "Lincoln Airport",
    "latitude": 40.851,
    "longitude": -96.7592
  },
  "KLXN": {
    "airport": "Jim Kelly Field",
    "latitude": 40.791,
    "longitude": -99.7773
  },
  "KMCK": {
    "airport": "McCook Ben Nelson Regional Airport",
    "latitude": 40.2063,
    "longitude": -100.592
  },
  "KMHN": {
    "airport": "Hooker County Airport",
    "latitude": 42.0422,
    "longitude": -101.059
  },
  "KMLE": {
    "airport": "Millard Airport",
    "latitude": 41.195,
    "longitude": -96.1148
  },
  "KOFF": {
    "airport": "Offutt Air Force Base",
    "latitude": 41.1183,
    "longitude": -95.9125
  },
  "KOFK": {
    "airport": "Norfolk Regional Airport (Karl Stefan Memorial Field)",
    "latitude": 41.9855,
    "longitude": -97.4351
  },
  "KOGA": {
    "airport": "Searle Field",
    "latitude": 41.1195,
    "longitude": -101.77
  },
  "KOKS": {
    "airport": "Garden County Airport",
    "latitude": 41.401,
    "longitude": -102.355
  },
  "KOLU": {
    "airport": "Columbus Municipal Airport",
    "latitude": 41.448,
    "longitude": -97.3426
  },
  "KONL": {
    "airport": "O'Neill Municipal Airport (John L. Baker Field)",
    "latitude": 42.4699,
    "longitude": -98.6881
  },
  "KSCB": {
    "airport": "Scribner State Airport",
    "latitude": 41.6103,
    "longitude": -96.6299
  },
  "KSNY": {
    "airport": "Sidney Municipal Airport (Lloyd W. Carr Field)",
    "latitude": 41.1013,
    "longitude": -102.985
  },
  "KVTN": {
    "airport": "Miller Field",
    "latitude": 42.8578,
    "longitude": -100.548
  },
  "KBAM": {
    "airport": "Battle Mountain Airport (Lander County Airport)",
    "latitude": 40.599,
    "longitude": -116.874
  },
  "KBTY": {
    "airport": "Beatty Airport",
    "latitude": 36.8611,
    "longitude": -116.787
  },
  "KCXP": {
    "airport": "Carson Airport",
    "latitude": 39.1922,
    "longitude": -119.734
  },
  "KDRA": {
    "airport": "Desert Rock Airport",
    "latitude": 36.6194,
    "longitude": -116.033
  },
  "KEKO": {
    "airport": "Elko Regional Airport",
    "latitude": 40.8249,
    "longitude": -115.792
  },
  "KELY": {
    "airport": "Ely Airport",
    "latitude": 39.2997,
    "longitude": -114.842
  },
  "KFLX": {
    "airport": "Fallon Municipal Airport",
    "latitude": 39.4991,
    "longitude": -118.749
  },
  "KGAB": {
    "airport": "Gabbs Airport",
    "latitude": 38.9241,
    "longitude": -117.959
  },
  "KHND": {
    "airport": "Henderson Executive Airport",
    "latitude": 35.9728,
    "longitude": -115.134
  },
  "KHTH": {
    "airport": "Hawthorne Industrial Airport",
    "latitude": 38.5444,
    "longitude": -118.634
  },
  "KINS": {
    "airport": "Creech Air Force Base",
    "latitude": 36.5872,
    "longitude": -115.673
  },
  "KLAS": {
    "airport": "Harry Reid International Airport",
    "latitude": 36.0801,
    "longitude": -115.152
  },
  "KLOL": {
    "airport": "Derby Field",
    "latitude": 40.0664,
    "longitude": -118.565
  },
  "KLSV": {
    "airport": "Nellis Air Force Base",
    "latitude": 36.2362,
    "longitude": -115.034
  },
  "KLWL": {
    "airport": "Wells Municipal Airport (Harriet Field)",
    "latitude": 41.1171,
    "longitude": -114.922
  },
  "KMEV": {
    "airport": "Minden-Tahoe Airport",
    "latitude": 39.0003,
    "longitude": -119.751
  },
  "KNFL": {
    "airport": "NAS Fallon (Van Voorhis Field)",
    "latitude": 39.4166,
    "longitude": -118.701
  },
  "KRNO": {
    "airport": "Reno-Tahoe International Airport",
    "latitude": 39.4991,
    "longitude": -119.768
  },
  "KTPH": {
    "airport": "Tonopah Airport",
    "latitude": 38.0602,
    "longitude": -117.087
  },
  "KUCC": {
    "airport": "Yucca Airstrip",
    "latitude": 36.9458,
    "longitude": -116.038
  },
  "KVGT": {
    "airport": "North Las Vegas Airport",
    "latitude": 36.2107,
    "longitude": -115.194
  },
  "KWMC": {
    "airport": "Winnemucca Municipal Airport",
    "latitude": 40.8966,
    "longitude": -117.806
  },
  "KTNX": {
    "airport": "Tonopah Test Range Airport",
    "latitude": 37.7988,
    "longitude": -116.781
  },
  "KAFN": {
    "airport": "Jaffrey Airport-Silver Ranch",
    "latitude": 42.8051,
    "longitude": -72.003
  },
  "KASH": {
    "airport": "Nashua Airport (Boire Field)",
    "latitude": 42.7817,
    "longitude": -71.5148
  },
  "KBML": {
    "airport": "Berlin Regional Airport",
    "latitude": 44.5754,
    "longitude": -71.1759
  },
  "KCNH": {
    "airport": "Claremont Municipal Airport",
    "latitude": 43.3704,
    "longitude": -72.3687
  },
  "KCON": {
    "airport": "Concord Municipal Airport",
    "latitude": 43.2027,
    "longitude": -71.5023
  },
  "KEEN": {
    "airport": "Dillant-Hopkins Airport",
    "latitude": 42.8984,
    "longitude": -72.2708
  },
  "KERR": {
    "airport": "Errol Airport",
    "latitude": 44.7925,
    "longitude": -71.1642
  },
  "KHIE": {
    "airport": "Mount Washington Regional Airport",
    "latitude": 44.3676,
    "longitude": -71.5445
  },
  "KLCI": {
    "airport": "Laconia Municipal Airport",
    "latitude": 43.5727,
    "longitude": -71.4189
  },
  "KLEB": {
    "airport": "Lebanon Municipal Airport",
    "latitude": 43.6261,
    "longitude": -72.3042
  },
  "KMHT": {
    "airport": "Manchester-Boston Regional Airport",
    "latitude": 42.9326,
    "longitude": -71.4357
  },
  "KPSM": {
    "airport": "Portsmouth International Airport at Pease",
    "latitude": 43.0779,
    "longitude": -70.8233
  },
  "KACY": {
    "airport": "Atlantic City International Airport",
    "latitude": 39.4576,
    "longitude": -74.5772
  },
  "KBLM": {
    "airport": "Monmouth Executive Airport",
    "latitude": 40.1869,
    "longitude": -74.1249
  },
  "KCDW": {
    "airport": "Essex County Airport",
    "latitude": 40.8752,
    "longitude": -74.2814
  },
  "KEWR": {
    "airport": "Newark Liberty International Airport",
    "latitude": 40.6925,
    "longitude": -74.1686
  },
  "KLDJ": {
    "airport": "Linden Airport",
    "latitude": 40.6174,
    "longitude": -74.2446
  },
  "KVAY": {
    "airport": "South Jersey Regional Airport",
    "latitude": 39.9429,
    "longitude": -74.8457
  },
  "KMIV": {
    "airport": "Millville Municipal Airport",
    "latitude": 39.3678,
    "longitude": -75.0722
  },
  "KMJX": {
    "airport": "Robert J. Miller Air Park (Ocean County Airport)",
    "latitude": 39.9275,
    "longitude": -74.2924
  },
  "KMMU": {
    "airport": "Morristown Municipal Airport",
    "latitude": 40.7994,
    "longitude": -74.4149
  },
  "KNEL": {
    "airport": "NAES Lakehurst (Maxfield Field)",
    "latitude": 40.0333,
    "longitude": -74.3533
  },
  "KTEB": {
    "airport": "Teterboro Airport",
    "latitude": 40.8501,
    "longitude": -74.0608
  },
  "KTTN": {
    "airport": "Trenton-Mercer Airport",
    "latitude": 40.2767,
    "longitude": -74.8135
  },
  "KWRI": {
    "airport": "McGuire Air Force Base",
    "latitude": 40.0156,
    "longitude": -74.5917
  },
  "KWWD": {
    "airport": "Cape May Airport",
    "latitude": 39.0085,
    "longitude": -74.9083
  },
  "KABQ": {
    "airport": "Albuquerque International Sunport",
    "latitude": 35.0402,
    "longitude": -106.609
  },
  "KALM": {
    "airport": "Alamogordo-White Sands Regional Airport",
    "latitude": 32.8399,
    "longitude": -105.991
  },
  "KATS": {
    "airport": "Artesia Municipal Airport",
    "latitude": 32.8525,
    "longitude": -104.468
  },
  "KAXX": {
    "airport": "Angel Fire Airport",
    "latitude": 36.422,
    "longitude": -105.29
  },
  "KCAO": {
    "airport": "Clayton Municipal Airpark",
    "latitude": 36.4462,
    "longitude": -103.167
  },
  "KCNM": {
    "airport": "Cavern City Air Terminal",
    "latitude": 32.3375,
    "longitude": -104.263
  },
  "KCVN": {
    "airport": "Clovis Municipal Airport",
    "latitude": 34.4251,
    "longitude": -103.079
  },
  "KCVS": {
    "airport": "Cannon Air Force Base",
    "latitude": 34.3828,
    "longitude": -103.322
  },
  "KDMN": {
    "airport": "Deming Municipal Airport",
    "latitude": 32.2623,
    "longitude": -107.721
  },
  "KFMN": {
    "airport": "Four Corners Regional Airport",
    "latitude": 36.7412,
    "longitude": -108.23
  },
  "KFSU": {
    "airport": "Fort Sumner Municipal Airport",
    "latitude": 34.4834,
    "longitude": -104.217
  },
  "KGNT": {
    "airport": "Grants-Milan Municipal Airport",
    "latitude": 35.1673,
    "longitude": -107.902
  },
  "KGUP": {
    "airport": "Gallup Municipal Airport",
    "latitude": 35.5111,
    "longitude": -108.789
  },
  "KHMN": {
    "airport": "Holloman Air Force Base",
    "latitude": 32.8525,
    "longitude": -106.107
  },
  "KHOB": {
    "airport": "Lea County Regional Airport",
    "latitude": 32.6875,
    "longitude": -103.217
  },
  "KLAM": {
    "airport": "Los Alamos County Airport",
    "latitude": 35.8798,
    "longitude": -106.269
  },
  "KLRU": {
    "airport": "Las Cruces International Airport",
    "latitude": 32.2894,
    "longitude": -106.922
  },
  "KLSB": {
    "airport": "Lordsburg Municipal Airport",
    "latitude": 32.3335,
    "longitude": -108.692
  },
  "KLVS": {
    "airport": "Las Vegas Municipal Airport",
    "latitude": 35.6542,
    "longitude": -105.142
  },
  "KONM": {
    "airport": "Socorro Municipal Airport",
    "latitude": 34.024,
    "longitude": -106.898
  },
  "KROW": {
    "airport": "Roswell International Air Center",
    "latitude": 33.3016,
    "longitude": -104.531
  },
  "KRTN": {
    "airport": "Raton Municipal Airport (Crews Field)",
    "latitude": 36.7415,
    "longitude": -104.502
  },
  "KSRR": {
    "airport": "Sierra Blanca Regional Airport",
    "latitude": 33.4628,
    "longitude": -105.535
  },
  "KSAF": {
    "airport": "Santa Fe Municipal Airport",
    "latitude": 35.6171,
    "longitude": -106.089
  },
  "KSVC": {
    "airport": "Grant County Airport",
    "latitude": 32.6365,
    "longitude": -108.156
  },
  "KTCC": {
    "airport": "Tucumcari Municipal Airport",
    "latitude": 35.1828,
    "longitude": -103.603
  },
  "KTCS": {
    "airport": "Truth or Consequences Municipal Airport",
    "latitude": 33.2369,
    "longitude": -107.272
  },
  "KSKX": {
    "airport": "Taos Regional Airport",
    "latitude": 36.4582,
    "longitude": -105.672
  },
  "KWSD": {
    "airport": "Condron Army Airfield",
    "latitude": 32.3415,
    "longitude": -106.403
  },
  "KALB": {
    "airport": "Albany International Airport",
    "latitude": 42.7483,
    "longitude": -73.8017
  },
  "KART": {
    "airport": "Watertown International Airport",
    "latitude": 43.9919,
    "longitude": -76.0217
  },
  "KBGM": {
    "airport": "Greater Binghamton Airport (Edwin A. Link Field)",
    "latitude": 42.2087,
    "longitude": -75.9798
  },
  "KBUF": {
    "airport": "Buffalo Niagara International Airport",
    "latitude": 42.9405,
    "longitude": -78.7322
  },
  "KDKK": {
    "airport": "Chautauqua County/Dunkirk Airport",
    "latitude": 42.4933,
    "longitude": -79.272
  },
  "KDSV": {
    "airport": "Dansville Municipal Airport",
    "latitude": 42.5709,
    "longitude": -77.7131
  },
  "KELM": {
    "airport": "Elmira/Corning Regional Airport",
    "latitude": 42.1599,
    "longitude": -76.8916
  },
  "KELZ": {
    "airport": "Wellsville Municipal Airport (Tarantine Field)",
    "latitude": 42.1095,
    "longitude": -77.99
  },
  "KFOK": {
    "airport": "Francis S. Gabreski Airport",
    "latitude": 40.8437,
    "longitude": -72.6318
  },
  "KFRG": {
    "airport": "Republic Airport",
    "latitude": 40.7288,
    "longitude": -73.4134
  },
  "KGFL": {
    "airport": "Floyd Bennett Memorial Airport",
    "latitude": 43.3412,
    "longitude": -73.6103
  },
  "KHPN": {
    "airport": "Westchester County Airport",
    "latitude": 41.067,
    "longitude": -73.7076
  },
  "KHTO": {
    "airport": "East Hampton Airport",
    "latitude": 40.9596,
    "longitude": -72.2518
  },
  "KIAG": {
    "airport": "Niagara Falls International Airport",
    "latitude": 43.1073,
    "longitude": -78.9462
  },
  "KISP": {
    "airport": "Long Island MacArthur Airport",
    "latitude": 40.7952,
    "longitude": -73.1002
  },
  "KITH": {
    "airport": "Ithaca Tompkins Regional Airport",
    "latitude": 42.491,
    "longitude": -76.4584
  },
  "KJFK": {
    "airport": "John F. Kennedy International Airport",
    "latitude": 40.6397,
    "longitude": -73.7789
  },
  "KJHW": {
    "airport": "Chautauqua County-Jamestown Airport",
    "latitude": 42.1534,
    "longitude": -79.258
  },
  "KLGA": {
    "airport": "LaGuardia Airport",
    "latitude": 40.775,
    "longitude": -73.875
  },
  "KLKP": {
    "airport": "Lake Placid Airport",
    "latitude": 44.2645,
    "longitude": -73.9619
  },
  "KMGJ": {
    "airport": "Orange County Airport",
    "latitude": 41.51,
    "longitude": -74.2646
  },
  "KMSS": {
    "airport": "Massena International Airport (Richards Field)",
    "latitude": 44.9358,
    "longitude": -74.8456
  },
  "KMSV": {
    "airport": "Sullivan County International Airport",
    "latitude": 41.7016,
    "longitude": -74.795
  },
  "KMTP": {
    "airport": "Montauk Airport",
    "latitude": 41.0765,
    "longitude": -71.9208
  },
  "KOGS": {
    "airport": "Ogdensburg International Airport",
    "latitude": 44.6819,
    "longitude": -75.4655
  },
  "KOIC": {
    "airport": "Lt. Warren Eaton Airport",
    "latitude": 42.5666,
    "longitude": -75.5241
  },
  "KOLE": {
    "airport": "Cattaraugus County-Olean Airport",
    "latitude": 42.2422,
    "longitude": -78.3716
  },
  "KPBG": {
    "airport": "Plattsburgh International Airport",
    "latitude": 44.6509,
    "longitude": -73.4681
  },
  "KPOU": {
    "airport": "Dutchess County Airport",
    "latitude": 41.6266,
    "longitude": -73.8842
  },
  "KRME": {
    "airport": "Griffiss International Airport",
    "latitude": 43.2338,
    "longitude": -75.407
  },
  "KROC": {
    "airport": "Greater Rochester International Airport",
    "latitude": 43.1189,
    "longitude": -77.6724
  },
  "KSCH": {
    "airport": "Schenectady County Airport",
    "latitude": 42.8525,
    "longitude": -73.9289
  },
  "KSLK": {
    "airport": "Adirondack Regional Airport",
    "latitude": 44.3853,
    "longitude": -74.2062
  },
  "KSWF": {
    "airport": "New York Stewart International Airport",
    "latitude": 41.5042,
    "longitude": -74.1047
  },
  "KSYR": {
    "airport": "Syracuse Hancock International Airport",
    "latitude": 43.1112,
    "longitude": -76.1063
  },
  "KHWV": {
    "airport": "Brookhaven Airport",
    "latitude": 40.8219,
    "longitude": -72.8694
  },
  "KAVL": {
    "airport": "Asheville Regional Airport",
    "latitude": 35.4362,
    "longitude": -82.5418
  },
  "KCLT": {
    "airport": "Charlotte Douglas International Airport",
    "latitude": 35.214,
    "longitude": -80.9431
  },
  "KCTZ": {
    "airport": "Clinton-Sampson County Airport",
    "latitude": 34.9756,
    "longitude": -78.3646
  },
  "KECG": {
    "airport": "Elizabeth City Regional Airport",
    "latitude": 36.2606,
    "longitude": -76.1746
  },
  "KEDE": {
    "airport": "Northeastern Regional Airport",
    "latitude": 36.0277,
    "longitude": -76.5671
  },
  "KEWN": {
    "airport": "Coastal Carolina Regional Airport",
    "latitude": 35.073,
    "longitude": -77.0429
  },
  "KFAY": {
    "airport": "Fayetteville Regional Airport (Grannis Field)",
    "latitude": 34.9912,
    "longitude": -78.8803
  },
  "KFBG": {
    "airport": "Simmons Army Airfield",
    "latitude": 35.1318,
    "longitude": -78.9367
  },
  "KFFA": {
    "airport": "First Flight Airport",
    "latitude": 36.0182,
    "longitude": -75.6713
  },
  "KGSB": {
    "airport": "Seymour Johnson Air Force Base",
    "latitude": 35.3394,
    "longitude": -77.9606
  },
  "KGSO": {
    "airport": "Piedmont Triad International Airport",
    "latitude": 36.0978,
    "longitude": -79.9373
  },
  "KHFF": {
    "airport": "Mackall Army Airfield",
    "latitude": 35.0363,
    "longitude": -79.4978
  },
  "KHKY": {
    "airport": "Hickory Regional Airport",
    "latitude": 35.7411,
    "longitude": -81.3895
  },
  "KHSE": {
    "airport": "Billy Mitchell Airport",
    "latitude": 35.2328,
    "longitude": -75.6178
  },
  "KUKF": {
    "airport": "Wilkes County Airport",
    "latitude": 36.2228,
    "longitude": -81.0983
  },
  "KILM": {
    "airport": "Wilmington International Airport",
    "latitude": 34.2706,
    "longitude": -77.9026
  },
  "KINT": {
    "airport": "Smith Reynolds Airport",
    "latitude": 36.1337,
    "longitude": -80.222
  },
  "KISO": {
    "airport": "Kinston Regional Jetport (Stallings Field)",
    "latitude": 35.3314,
    "longitude": -77.6088
  },
  "KLBT": {
    "airport": "Lumberton Municipal Airport",
    "latitude": 34.6099,
    "longitude": -79.0594
  },
  "KLHZ": {
    "airport": "Triangle North Executive Airport (Franklin County Airport)",
    "latitude": 36.0233,
    "longitude": -78.3303
  },
  "KMQI": {
    "airport": "Dare County Regional Airport",
    "latitude": 35.919,
    "longitude": -75.6955
  },
  "KMRN": {
    "airport": "Foothills Regional Airport (was Morganton-Lenoir Airport)",
    "latitude": 35.8202,
    "longitude": -81.6114
  },
  "KMEB": {
    "airport": "Laurinburg-Maxton Airport",
    "latitude": 34.7919,
    "longitude": -79.3658
  },
  "KOAJ": {
    "airport": "Albert J. Ellis Airport",
    "latitude": 34.8292,
    "longitude": -77.6121
  },
  "KOCW": {
    "airport": "Washington-Warren Airport (Warren Field)",
    "latitude": 35.5705,
    "longitude": -77.0498
  },
  "KPGV": {
    "airport": "Pitt-Greenville Airport",
    "latitude": 35.6352,
    "longitude": -77.3853
  },
  "KPOB": {
    "airport": "Pope Field (Pope AFB)",
    "latitude": 35.1709,
    "longitude": -79.0145
  },
  "KRDU": {
    "airport": "Raleigh-Durham International Airport",
    "latitude": 35.8776,
    "longitude": -78.7875
  },
  "KRWI": {
    "airport": "Rocky Mount-Wilson Regional Airport",
    "latitude": 35.8563,
    "longitude": -77.8919
  },
  "KRZZ": {
    "airport": "Halifax County Airport",
    "latitude": 36.4395,
    "longitude": -77.7093
  },
  "KSOP": {
    "airport": "Moore County Airport",
    "latitude": 35.2374,
    "longitude": -79.3912
  },
  "KRUQ": {
    "airport": "Rowan County Airport",
    "latitude": 35.6459,
    "longitude": -80.5203
  },
  "KSVH": {
    "airport": "Statesville Regional Airport",
    "latitude": 35.7653,
    "longitude": -80.9539
  },
  "KJQF": {
    "airport": "Concord Regional Airport",
    "latitude": 35.3878,
    "longitude": -80.7091
  },
  "KASY": {
    "airport": "Ashley Municipal Airport",
    "latitude": 46.0239,
    "longitude": -99.3526
  },
  "KBIS": {
    "airport": "Bismarck Municipal Airport",
    "latitude": 46.7727,
    "longitude": -100.746
  },
  "KBPP": {
    "airport": "Bowman Municipal Airport",
    "latitude": 46.1655,
    "longitude": -103.301
  },
  "KDIK": {
    "airport": "Dickinson Theodore Roosevelt Regional Airport",
    "latitude": 46.7974,
    "longitude": -102.802
  },
  "KDVL": {
    "airport": "Devils Lake Regional Airport (Devils Lake Municipal Airport)",
    "latitude": 48.1142,
    "longitude": -98.9088
  },
  "KFAR": {
    "airport": "Hector International Airport",
    "latitude": 46.9207,
    "longitude": -96.8158
  },
  "KGFK": {
    "airport": "Grand Forks International Airport",
    "latitude": 47.9493,
    "longitude": -97.1761
  },
  "KISN": {
    "airport": "Sloulin Field International Airport",
    "latitude": 48.1779,
    "longitude": -103.642
  },
  "KJMS": {
    "airport": "Jamestown Regional Airport",
    "latitude": 46.9297,
    "longitude": -98.6782
  },
  "KMIB": {
    "airport": "Minot Air Force Base",
    "latitude": 48.4156,
    "longitude": -101.358
  },
  "KMOT": {
    "airport": "Minot International Airport",
    "latitude": 48.2594,
    "longitude": -101.28
  },
  "KPMB": {
    "airport": "Pembina Municipal Airport",
    "latitude": 48.9425,
    "longitude": -97.2408
  },
  "KRDR": {
    "airport": "Grand Forks Air Force Base",
    "latitude": 47.9611,
    "longitude": -97.4012
  },
  "KBWP": {
    "airport": "Harry Stern Airport",
    "latitude": 46.2441,
    "longitude": -96.6074
  },
  "KXWA": {
    "airport": "Williston Basin International Airport",
    "latitude": 48.2597,
    "longitude": -103.751
  },
  "KAKR": {
    "airport": "Akron Fulton International Airport",
    "latitude": 41.0375,
    "longitude": -81.4669
  },
  "KAOH": {
    "airport": "Lima Allen County Airport",
    "latitude": 40.7069,
    "longitude": -84.0267
  },
  "KUNI": {
    "airport": "Ohio University Airport (Snyder Field)",
    "latitude": 39.211,
    "longitude": -82.2314
  },
  "KAXV": {
    "airport": "Neil Armstrong Airport",
    "latitude": 40.4934,
    "longitude": -84.2989
  },
  "KBJJ": {
    "airport": "Wayne County Airport",
    "latitude": 40.8748,
    "longitude": -81.8883
  },
  "KBKL": {
    "airport": "Cleveland Burke Lakefront Airport",
    "latitude": 41.5175,
    "longitude": -81.6833
  },
  "KCAK": {
    "airport": "Akron-Canton Airport",
    "latitude": 40.9161,
    "longitude": -81.4422
  },
  "KCGF": {
    "airport": "Cuyahoga County Airport",
    "latitude": 41.5651,
    "longitude": -81.4864
  },
  "KCLE": {
    "airport": "Cleveland Hopkins International Airport",
    "latitude": 41.4117,
    "longitude": -81.8498
  },
  "KCMH": {
    "airport": "John Glenn Columbus International Airport",
    "latitude": 39.998,
    "longitude": -82.8919
  },
  "KDAY": {
    "airport": "Dayton International Airport",
    "latitude": 39.9024,
    "longitude": -84.2194
  },
  "KDFI": {
    "airport": "Defiance Memorial Airport",
    "latitude": 41.3375,
    "longitude": -84.4288
  },
  "KFDY": {
    "airport": "Findlay Airport",
    "latitude": 41.0135,
    "longitude": -83.6687
  },
  "KFFO": {
    "airport": "Wright-Patterson Air Force Base",
    "latitude": 39.8261,
    "longitude": -84.0483
  },
  "KGQQ": {
    "airport": "Galion Municipal Airport",
    "latitude": 40.7534,
    "longitude": -82.7238
  },
  "KHAO": {
    "airport": "Butler County Regional Airport",
    "latitude": 39.3638,
    "longitude": -84.522
  },
  "KHTW": {
    "airport": "Lawrence County Airpark",
    "latitude": 38.4193,
    "longitude": -82.4943
  },
  "KILN": {
    "airport": "Wilmington Air Park",
    "latitude": 39.4279,
    "longitude": -83.7921
  },
  "KHZY": {
    "airport": "Northeast Ohio Regional Airport",
    "latitude": 41.778,
    "longitude": -80.6955
  },
  "KLCK": {
    "airport": "Rickenbacker International Airport",
    "latitude": 39.8138,
    "longitude": -82.9278
  },
  "KLNN": {
    "airport": "Lost Nation Airport",
    "latitude": 41.684,
    "longitude": -81.3897
  },
  "KLUK": {
    "airport": "Cincinnati Municipal Airport (Lunken Field)",
    "latitude": 39.1033,
    "longitude": -84.4186
  },
  "KMFD": {
    "airport": "Mansfield Lahm Regional Airport",
    "latitude": 40.8214,
    "longitude": -82.5166
  },
  "KMGY": {
    "airport": "Dayton-Wright Brothers Airport",
    "latitude": 39.589,
    "longitude": -84.2249
  },
  "KMNN": {
    "airport": "Marion Municipal Airport",
    "latitude": 40.6162,
    "longitude": -83.0635
  },
  "KMWO": {
    "airport": "Middletown Regional Airport (Hook Field)",
    "latitude": 39.531,
    "longitude": -84.3953
  },
  "KOSU": {
    "airport": "Ohio State University Airport",
    "latitude": 40.0798,
    "longitude": -83.073
  },
  "KOXD": {
    "airport": "Miami University Airport",
    "latitude": 39.5023,
    "longitude": -84.7844
  },
  "KPHD": {
    "airport": "Harry Clever Field",
    "latitude": 40.4709,
    "longitude": -81.4197
  },
  "KPMH": {
    "airport": "Greater Portsmouth Regional Airport",
    "latitude": 38.8405,
    "longitude": -82.8473
  },
  "KSGH": {
    "airport": "Springfield-Beckley Municipal Airport",
    "latitude": 39.8403,
    "longitude": -83.8402
  },
  "KSKY": {
    "airport": "Griffing Sandusky Airport",
    "latitude": 41.4333,
    "longitude": -82.6522
  },
  "KTDZ": {
    "airport": "Toledo Executive Airport",
    "latitude": 41.5649,
    "longitude": -83.4823
  },
  "KTOL": {
    "airport": "Toledo Express Airport",
    "latitude": 41.5868,
    "longitude": -83.8078
  },
  "KYNG": {
    "airport": "Youngstown-Warren Regional Airport",
    "latitude": 41.2607,
    "longitude": -80.6791
  },
  "KZZV": {
    "airport": "Zanesville Municipal Airport",
    "latitude": 39.9444,
    "longitude": -81.8921
  },
  "KADM": {
    "airport": "Ardmore Municipal Airport",
    "latitude": 34.303,
    "longitude": -97.0196
  },
  "KADH": {
    "airport": "Ada Municipal Airport",
    "latitude": 34.8043,
    "longitude": -96.6713
  },
  "KAXS": {
    "airport": "Altus/Quartz Mountain Regional Airport",
    "latitude": 34.698,
    "longitude": -99.3385
  },
  "KBVO": {
    "airport": "Bartlesville Municipal Airport",
    "latitude": 36.7625,
    "longitude": -96.0112
  },
  "KBKN": {
    "airport": "Blackwell-Tonkawa Municipal Airport",
    "latitude": 36.7959,
    "longitude": -97.317
  },
  "KCHK": {
    "airport": "Chickasha Municipal Airport",
    "latitude": 35.0974,
    "longitude": -97.9677
  },
  "KCKA": {
    "airport": "Kegelman Air Force Auxiliary Field",
    "latitude": 36.7439,
    "longitude": -98.1231
  },
  "KCLK": {
    "airport": "Clinton Regional Airport",
    "latitude": 35.5383,
    "longitude": -98.9327
  },
  "KCSM": {
    "airport": "Clinton-Sherman Airport",
    "latitude": 35.3398,
    "longitude": -99.2005
  },
  "KCUH": {
    "airport": "Cushing Municipal Airport",
    "latitude": 35.9499,
    "longitude": -96.7731
  },
  "KDUA": {
    "airport": "Durant Regional Airport-Eaker Field",
    "latitude": 33.9423,
    "longitude": -96.3945
  },
  "KDUC": {
    "airport": "Halliburton Field",
    "latitude": 34.4709,
    "longitude": -97.9599
  },
  "KELK": {
    "airport": "Elk City Regional Business Airport",
    "latitude": 35.4308,
    "longitude": -99.3943
  },
  "KEND": {
    "airport": "Vance Air Force Base",
    "latitude": 36.3392,
    "longitude": -97.9165
  },
  "KFDR": {
    "airport": "Frederick Regional Airport",
    "latitude": 34.352,
    "longitude": -98.9839
  },
  "KFSI": {
    "airport": "Henry Post Army Airfield (Fort Sill)",
    "latitude": 34.6498,
    "longitude": -98.4022
  },
  "KGAG": {
    "airport": "Gage Airport",
    "latitude": 36.2955,
    "longitude": -99.7764
  },
  "KGOK": {
    "airport": "Guthrie-Edmond Regional Airport",
    "latitude": 35.8498,
    "longitude": -97.4156
  },
  "KGUY": {
    "airport": "Guymon Municipal Airport",
    "latitude": 36.6851,
    "longitude": -101.508
  },
  "KHBR": {
    "airport": "Hobart Regional Airport",
    "latitude": 34.9913,
    "longitude": -99.0513
  },
  "KHHW": {
    "airport": "Stan Stamper Municipal Airport",
    "latitude": 34.0348,
    "longitude": -95.5419
  },
  "KLAW": {
    "airport": "Lawton-Fort Sill Regional Airport",
    "latitude": 34.5677,
    "longitude": -98.4166
  },
  "KLTS": {
    "airport": "Altus Air Force Base",
    "latitude": 34.6671,
    "longitude": -99.2667
  },
  "KMIO": {
    "airport": "Miami Municipal Airport",
    "latitude": 36.9092,
    "longitude": -94.8875
  },
  "KMKO": {
    "airport": "Davis Field",
    "latitude": 35.6565,
    "longitude": -95.3667
  },
  "KMLC": {
    "airport": "McAlester Regional Airport",
    "latitude": 34.8824,
    "longitude": -95.7835
  },
  "KOKC": {
    "airport": "Will Rogers World Airport",
    "latitude": 35.3931,
    "longitude": -97.6007
  },
  "KOKM": {
    "airport": "Okmulgee Regional Airport",
    "latitude": 35.6681,
    "longitude": -95.9487
  },
  "KOUN": {
    "airport": "University of Oklahoma Westheimer Airport (Max Westheimer Airport)",
    "latitude": 35.2456,
    "longitude": -97.4721
  },
  "KPNC": {
    "airport": "Ponca City Regional Airport",
    "latitude": 36.732,
    "longitude": -97.0998
  },
  "KPWA": {
    "airport": "Wiley Post Airport",
    "latitude": 35.5342,
    "longitude": -97.6471
  },
  "KRKR": {
    "airport": "Robert S. Kerr Airport",
    "latitude": 35.0216,
    "longitude": -94.6213
  },
  "KRVS": {
    "airport": "Richard Lloyd Jones Jr. Airport",
    "latitude": 36.0396,
    "longitude": -95.9846
  },
  "KSNL": {
    "airport": "Shawnee Regional Airport",
    "latitude": 35.3579,
    "longitude": -96.9428
  },
  "KSUD": {
    "airport": "Stroud Municipal Airport",
    "latitude": 35.7896,
    "longitude": -96.6557
  },
  "KSWO": {
    "airport": "Stillwater Regional Airport",
    "latitude": 36.1612,
    "longitude": -97.0857
  },
  "KTIK": {
    "airport": "Tinker Air Force Base",
    "latitude": 35.4147,
    "longitude": -97.3866
  },
  "KTUL": {
    "airport": "Tulsa International Airport",
    "latitude": 36.1984,
    "longitude": -95.8881
  },
  "KWDG": {
    "airport": "Enid Woodring Regional Airport",
    "latitude": 36.3792,
    "longitude": -97.7911
  },
  "KWWR": {
    "airport": "West Woodward Airport",
    "latitude": 36.438,
    "longitude": -99.5227
  },
  "KAST": {
    "airport": "Astoria Regional Airport",
    "latitude": 46.158,
    "longitude": -123.879
  },
  "KBKE": {
    "airport": "Baker City Municipal Airport",
    "latitude": 44.8373,
    "longitude": -117.809
  },
  "KBNO": {
    "airport": "Burns Municipal Airport",
    "latitude": 43.5919,
    "longitude": -118.955
  },
  "KBOK": {
    "airport": "Brookings Airport",
    "latitude": 42.0746,
    "longitude": -124.29
  },
  "KCVO": {
    "airport": "Corvallis Municipal Airport",
    "latitude": 44.4972,
    "longitude": -123.29
  },
  "KCZK": {
    "airport": "Cascade Locks State Airport",
    "latitude": 45.6769,
    "longitude": -121.879
  },
  "KDLS": {
    "airport": "Columbia Gorge Regional Airport (The Dalles Municipal Airport)",
    "latitude": 45.6185,
    "longitude": -121.167
  },
  "KEUG": {
    "airport": "Eugene Airport (Mahlon Sweet Airport)",
    "latitude": 44.1246,
    "longitude": -123.212
  },
  "KHRI": {
    "airport": "Hermiston Municipal Airport",
    "latitude": 45.8282,
    "longitude": -119.259
  },
  "KHIO": {
    "airport": "Hillsboro Airport (Portland-Hillsboro Airport)",
    "latitude": 45.5404,
    "longitude": -122.95
  },
  "KGCD": {
    "airport": "Grant County Regional Airport (Ogilvie Field)",
    "latitude": 44.4042,
    "longitude": -118.963
  },
  "KLGD": {
    "airport": "La Grande/Union County Airport",
    "latitude": 45.2902,
    "longitude": -118.007
  },
  "KLKV": {
    "airport": "Lake County Airport",
    "latitude": 42.1611,
    "longitude": -120.399
  },
  "KLMT": {
    "airport": "Klamath Falls Airport",
    "latitude": 42.1561,
    "longitude": -121.733
  },
  "KMFR": {
    "airport": "Rogue Valley International-Medford Airport",
    "latitude": 42.3742,
    "longitude": -122.873
  },
  "KONO": {
    "airport": "Ontario Municipal Airport",
    "latitude": 44.0205,
    "longitude": -117.014
  },
  "KONP": {
    "airport": "Newport Municipal Airport",
    "latitude": 44.5804,
    "longitude": -124.058
  },
  "KOTH": {
    "airport": "Southwest Oregon Regional Airport",
    "latitude": 43.4171,
    "longitude": -124.246
  },
  "KTMK": {
    "airport": "Tillamook Airport",
    "latitude": 45.4182,
    "longitude": -123.814
  },
  "KPDT": {
    "airport": "Eastern Oregon Regional Airport",
    "latitude": 45.6951,
    "longitude": -118.841
  },
  "KPDX": {
    "airport": "Portland International Airport",
    "latitude": 45.5887,
    "longitude": -122.598
  },
  "KPFC": {
    "airport": "Pacific City State Airport",
    "latitude": 45.1998,
    "longitude": -123.962
  },
  "KRBG": {
    "airport": "Roseburg Regional Airport",
    "latitude": 43.2388,
    "longitude": -123.356
  },
  "KRDM": {
    "airport": "Roberts Field",
    "latitude": 44.2541,
    "longitude": -121.15
  },
  "KREO": {
    "airport": "Rome State Airport",
    "latitude": 42.5777,
    "longitude": -117.885
  },
  "KSLE": {
    "airport": "McNary Field",
    "latitude": 44.9095,
    "longitude": -123.003
  },
  "KTTD": {
    "airport": "Portland-Troutdale Airport",
    "latitude": 45.5494,
    "longitude": -122.401
  },
  "KABE": {
    "airport": "Lehigh Valley International Airport",
    "latitude": 40.6521,
    "longitude": -75.4408
  },
  "KAGC": {
    "airport": "Allegheny County Airport",
    "latitude": 40.3544,
    "longitude": -79.9302
  },
  "KAOO": {
    "airport": "Altoona-Blair County Airport",
    "latitude": 40.2964,
    "longitude": -78.32
  },
  "KAVP": {
    "airport": "Wilkes-Barre/Scranton International Airport",
    "latitude": 41.3385,
    "longitude": -75.7234
  },
  "KLOM": {
    "airport": "Wings Field",
    "latitude": 40.1375,
    "longitude": -75.2651
  },
  "KBFD": {
    "airport": "Bradford Regional Airport",
    "latitude": 41.8031,
    "longitude": -78.6401
  },
  "KBVI": {
    "airport": "Beaver County Airport",
    "latitude": 40.7725,
    "longitude": -80.3914
  },
  "KBTP": {
    "airport": "Butler County Airport (K.W. Scholter Field)",
    "latitude": 40.7769,
    "longitude": -79.9497
  },
  "KMQS": {
    "airport": "Chester County G. O. Carlson Airport",
    "latitude": 39.979,
    "longitude": -75.8655
  },
  "KDUJ": {
    "airport": "DuBois Regional Airport",
    "latitude": 41.1783,
    "longitude": -78.8987
  },
  "KDYL": {
    "airport": "Doylestown Airport",
    "latitude": 40.333,
    "longitude": -75.1223
  },
  "KERI": {
    "airport": "Erie International Airport (Tom Ridge Field)",
    "latitude": 42.0831,
    "longitude": -80.1739
  },
  "KFKL": {
    "airport": "Venango Regional Airport (Chess Lamberton Field)",
    "latitude": 41.3779,
    "longitude": -79.8604
  },
  "KCXY": {
    "airport": "Capital City Airport",
    "latitude": 40.2171,
    "longitude": -76.8515
  },
  "KHZL": {
    "airport": "Hazleton Municipal Airport",
    "latitude": 40.9868,
    "longitude": -75.9949
  },
  "KIDI": {
    "airport": "Indiana County-Jimmy Stewart Airport",
    "latitude": 40.6322,
    "longitude": -79.1055
  },
  "KIPT": {
    "airport": "Williamsport Regional Airport",
    "latitude": 41.2418,
    "longitude": -76.9211
  },
  "KJST": {
    "airport": "John Murtha Johnstown-Cambria County Airport",
    "latitude": 40.3161,
    "longitude": -78.8339
  },
  "KLBE": {
    "airport": "Arnold Palmer Regional Airport",
    "latitude": 40.2759,
    "longitude": -79.4048
  },
  "KLHV": {
    "airport": "William T. Piper Memorial Airport",
    "latitude": 41.1356,
    "longitude": -77.4223
  },
  "KLNS": {
    "airport": "Lancaster Airport",
    "latitude": 40.1217,
    "longitude": -76.2961
  },
  "KMDT": {
    "airport": "Harrisburg International Airport",
    "latitude": 40.1935,
    "longitude": -76.7634
  },
  "KGKJ": {
    "airport": "Port Meadville Airport",
    "latitude": 41.6265,
    "longitude": -80.2147
  },
  "KMPO": {
    "airport": "Pocono Mountains Municipal Airport",
    "latitude": 41.1375,
    "longitude": -75.3789
  },
  "KMUI": {
    "airport": "Muir Army Airfield",
    "latitude": 40.4348,
    "longitude": -76.5694
  },
  "KPHL": {
    "airport": "Philadelphia International Airport",
    "latitude": 39.8719,
    "longitude": -75.2411
  },
  "KPIT": {
    "airport": "Pittsburgh International Airport",
    "latitude": 40.4915,
    "longitude": -80.2329
  },
  "KPNE": {
    "airport": "Northeast Philadelphia Airport",
    "latitude": 40.0819,
    "longitude": -75.0106
  },
  "KPSB": {
    "airport": "Mid-State Regional Airport",
    "latitude": 40.8835,
    "longitude": -78.0863
  },
  "KPTW": {
    "airport": "Heritage Field",
    "latitude": 40.2396,
    "longitude": -75.5567
  },
  "KRDG": {
    "airport": "Reading Regional Airport (Carl A. Spaatz Field)",
    "latitude": 40.3785,
    "longitude": -75.9652
  },
  "KRVL": {
    "airport": "Mifflin County Airport",
    "latitude": 40.6774,
    "longitude": -77.6268
  },
  "KUNV": {
    "airport": "University Park Airport",
    "latitude": 40.8493,
    "longitude": -77.8487
  },
  "KSEG": {
    "airport": "Penn Valley Airport",
    "latitude": 40.8206,
    "longitude": -76.8639
  },
  "KOYM": {
    "airport": "St. Marys Municipal Airport",
    "latitude": 41.4125,
    "longitude": -78.5026
  },
  "KTHV": {
    "airport": "York Airport",
    "latitude": 39.917,
    "longitude": -76.873
  },
  "KUKT": {
    "airport": "Quakertown Airport",
    "latitude": 40.4352,
    "longitude": -75.3819
  },
  "KWAY": {
    "airport": "Greene County Airport",
    "latitude": 39.9001,
    "longitude": -80.1331
  },
  "KWBW": {
    "airport": "Wilkes-Barre Wyoming Valley Airport",
    "latitude": 41.2972,
    "longitude": -75.8512
  },
  "KAFJ": {
    "airport": "Washington County Airport",
    "latitude": 40.1365,
    "longitude": -80.2902
  },
  "KBID": {
    "airport": "Block Island State Airport",
    "latitude": 41.1681,
    "longitude": -71.5778
  },
  "KOQU": {
    "airport": "Quonset State Airport",
    "latitude": 41.5971,
    "longitude": -71.4121
  },
  "KUUU": {
    "airport": "Newport State Airport",
    "latitude": 41.5324,
    "longitude": -71.2815
  },
  "KPVD": {
    "airport": "Theodore Francis Green State Airport",
    "latitude": 41.7326,
    "longitude": -71.4204
  },
  "KSFZ": {
    "airport": "North Central State Airport",
    "latitude": 41.9208,
    "longitude": -71.4914
  },
  "KWST": {
    "airport": "Westerly State Airport",
    "latitude": 41.3496,
    "longitude": -71.8034
  },
  "KAIK": {
    "airport": "Aiken Municipal Airport",
    "latitude": 33.6494,
    "longitude": -81.685
  },
  "KAND": {
    "airport": "Anderson Regional Airport",
    "latitude": 34.4946,
    "longitude": -82.7094
  },
  "KARW": {
    "airport": "Beaufort County Airport",
    "latitude": 32.4122,
    "longitude": -80.6344
  },
  "KBNL": {
    "airport": "Barnwell Regional Airport",
    "latitude": 33.2578,
    "longitude": -81.3883
  },
  "KBBP": {
    "airport": "Marlboro County Jetport",
    "latitude": 34.6217,
    "longitude": -79.7344
  },
  "KCAE": {
    "airport": "Columbia Metropolitan Airport",
    "latitude": 33.9388,
    "longitude": -81.1195
  },
  "KCDN": {
    "airport": "Woodward Field",
    "latitude": 34.2836,
    "longitude": -80.5649
  },
  "KCEU": {
    "airport": "Oconee County Regional Airport",
    "latitude": 34.6719,
    "longitude": -82.8865
  },
  "KCHS": {
    "airport": "Charleston International Airport / Charleston Air Force Base",
    "latitude": 32.8986,
    "longitude": -80.0405
  },
  "KCRE": {
    "airport": "Grand Strand Airport",
    "latitude": 33.8117,
    "longitude": -78.7239
  },
  "KCUB": {
    "airport": "Jim Hamilton-L.B. Owens Airport",
    "latitude": 33.9705,
    "longitude": -80.9952
  },
  "KDLC": {
    "airport": "Dillon County Airport",
    "latitude": 34.4491,
    "longitude": -79.3686
  },
  "KFLO": {
    "airport": "Florence Regional Airport",
    "latitude": 34.1854,
    "longitude": -79.7239
  },
  "KGYH": {
    "airport": "Donaldson Center Airport",
    "latitude": 34.7583,
    "longitude": -82.3764
  },
  "KGGE": {
    "airport": "Georgetown County Airport",
    "latitude": 33.3117,
    "longitude": -79.3196
  },
  "KGMU": {
    "airport": "Greenville Downtown Airport",
    "latitude": 34.8479,
    "longitude": -82.35
  },
  "KGRD": {
    "airport": "Greenwood County Airport",
    "latitude": 34.2487,
    "longitude": -82.1591
  },
  "KGSP": {
    "airport": "Greenville-Spartanburg International Airport",
    "latitude": 34.8957,
    "longitude": -82.2189
  },
  "KCQW": {
    "airport": "Cheraw Municipal Airport (Lynch Bellinger Field",
    "latitude": 34.7129,
    "longitude": -79.957
  },
  "KHXD": {
    "airport": "Hilton Head Airport",
    "latitude": 32.2244,
    "longitude": -80.6975
  },
  "KHVS": {
    "airport": "Hartsville Regional Airport",
    "latitude": 34.4031,
    "longitude": -80.1192
  },
  "KMMT": {
    "airport": "McEntire Joint National Guard Base",
    "latitude": 33.9208,
    "longitude": -80.8013
  },
  "KMYR": {
    "airport": "Myrtle Beach International Airport",
    "latitude": 33.6797,
    "longitude": -78.9283
  },
  "KOGB": {
    "airport": "Orangeburg Municipal Airport",
    "latitude": 33.4568,
    "longitude": -80.8595
  },
  "KRBW": {
    "airport": "Lowcountry Regional Airport",
    "latitude": 32.921,
    "longitude": -80.6406
  },
  "KUZA": {
    "airport": "Rock Hill/York County Airport",
    "latitude": 34.9878,
    "longitude": -81.0572
  },
  "KSSC": {
    "airport": "Shaw Air Force Base",
    "latitude": 33.9727,
    "longitude": -80.4706
  },
  "KABR": {
    "airport": "Aberdeen Regional Airport",
    "latitude": 45.4491,
    "longitude": -98.4218
  },
  "KATY": {
    "airport": "Watertown Regional Airport",
    "latitude": 44.914,
    "longitude": -97.1547
  },
  "KBKX": {
    "airport": "Brookings Regional Airport",
    "latitude": 44.3048,
    "longitude": -96.8169
  },
  "KFSD": {
    "airport": "Sioux Falls Regional Airport (Joe Foss Field)",
    "latitude": 43.582,
    "longitude": -96.7419
  },
  "KHON": {
    "airport": "Huron Regional Airport",
    "latitude": 44.3852,
    "longitude": -98.2285
  },
  "KLEM": {
    "airport": "Lemmon Municipal Airport",
    "latitude": 45.9187,
    "longitude": -102.106
  },
  "KLQK": {
    "airport": "Pickens County Airport",
    "latitude": 34.81,
    "longitude": -82.7029
  },
  "KMBG": {
    "airport": "Mobridge Municipal Airport",
    "latitude": 45.5465,
    "longitude": -100.408
  },
  "KMHE": {
    "airport": "Mitchell Municipal Airport",
    "latitude": 43.7748,
    "longitude": -98.0386
  },
  "KPHP": {
    "airport": "Philip Airport",
    "latitude": 44.0486,
    "longitude": -101.599
  },
  "KPIR": {
    "airport": "Pierre Regional Airport",
    "latitude": 44.3827,
    "longitude": -100.286
  },
  "KRAP": {
    "airport": "Rapid City Regional Airport",
    "latitude": 44.0453,
    "longitude": -103.057
  },
  "KRCA": {
    "airport": "Ellsworth Air Force Base",
    "latitude": 44.145,
    "longitude": -103.104
  },
  "KSPF": {
    "airport": "Black Hills Airport (Clyde Ice Field)",
    "latitude": 44.4803,
    "longitude": -103.783
  },
  "KBTN": {
    "airport": "Britton Municipal Airport",
    "latitude": 45.8152,
    "longitude": -97.7431
  },
  "KMDS": {
    "airport": "Madison Municipal Airport",
    "latitude": 44.016,
    "longitude": -97.0859
  },
  "KIEN": {
    "airport": "Pine Ridge Airport",
    "latitude": 43.0225,
    "longitude": -102.511
  },
  "KYKN": {
    "airport": "Chan Gurney Municipal Airport",
    "latitude": 42.9167,
    "longitude": -97.3859
  },
  "KAPT": {
    "airport": "Marion County Airport (Brown Field)",
    "latitude": 35.0607,
    "longitude": -85.5853
  },
  "KBNA": {
    "airport": "Nashville International Airport",
    "latitude": 36.1245,
    "longitude": -86.6782
  },
  "KCHA": {
    "airport": "Chattanooga Metropolitan Airport (Lovell Field)",
    "latitude": 35.0353,
    "longitude": -85.2038
  },
  "KCKV": {
    "airport": "Clarksville-Montgomery County Regional Airport (Outlaw Field)",
    "latitude": 36.6219,
    "longitude": -87.415
  },
  "KCSV": {
    "airport": "Crossville Memorial-Whitson Field",
    "latitude": 35.9513,
    "longitude": -85.085
  },
  "KFYM": {
    "airport": "Fayetteville Municipal Airport",
    "latitude": 35.0597,
    "longitude": -86.564
  },
  "KGCY": {
    "airport": "Greeneville-Greene County Municipal Airport",
    "latitude": 36.193,
    "longitude": -82.8151
  },
  "KGHM": {
    "airport": "Centerville Municipal Airport",
    "latitude": 35.8374,
    "longitude": -87.4454
  },
  "KGKT": {
    "airport": "Gatlinburg-Pigeon Forge Airport",
    "latitude": 35.8578,
    "longitude": -83.5287
  },
  "KMEM": {
    "airport": "Memphis International Airport",
    "latitude": 35.0424,
    "longitude": -89.9767
  },
  "KMKL": {
    "airport": "McKellar-Sipes Regional Airport",
    "latitude": 35.5999,
    "longitude": -88.9156
  },
  "KMMI": {
    "airport": "McMinn County Airport",
    "latitude": 35.3973,
    "longitude": -84.5626
  },
  "KMOR": {
    "airport": "Morristown Regional Airport (Moore-Murrell Airport)",
    "latitude": 36.1795,
    "longitude": -83.3752
  },
  "KMQY": {
    "airport": "Smyrna Airport",
    "latitude": 36.009,
    "longitude": -86.5201
  },
  "KMRC": {
    "airport": "Maury County Airport",
    "latitude": 35.5541,
    "longitude": -87.1789
  },
  "KNQA": {
    "airport": "Millington Regional Jetport",
    "latitude": 35.3567,
    "longitude": -89.8703
  },
  "KPHT": {
    "airport": "Henry County Airport",
    "latitude": 36.3382,
    "longitude": -88.3829
  },
  "KRKW": {
    "airport": "Rockwood Municipal Airport",
    "latitude": 35.9223,
    "longitude": -84.6897
  },
  "KRNC": {
    "airport": "Warren County Memorial Airport",
    "latitude": 35.6987,
    "longitude": -85.8438
  },
  "KSYI": {
    "airport": "Shelbyville Municipal Airport (Bomar Field)",
    "latitude": 35.5601,
    "longitude": -86.4425
  },
  "KTHA": {
    "airport": "Tullahoma Regional Airport (William Northern Field)",
    "latitude": 35.3801,
    "longitude": -86.2464
  },
  "KTRI": {
    "airport": "Tri-Cities Regional Airport",
    "latitude": 36.4752,
    "longitude": -82.4074
  },
  "KTYS": {
    "airport": "McGhee Tyson Airport",
    "latitude": 35.811,
    "longitude": -83.994
  },
  "KUCY": {
    "airport": "Everett-Stewart Regional Airport",
    "latitude": 36.3818,
    "longitude": -88.9854
  },
  "KUOS": {
    "airport": "Franklin County Airport",
    "latitude": 35.2051,
    "longitude": -85.8981
  },
  "KABI": {
    "airport": "Abilene Regional Airport",
    "latitude": 32.4113,
    "longitude": -99.6819
  },
  "KACT": {
    "airport": "Waco Regional Airport",
    "latitude": 31.6113,
    "longitude": -97.2305
  },
  "KADS": {
    "airport": "Addison Airport",
    "latitude": 32.9686,
    "longitude": -96.8364
  },
  "KAFW": {
    "airport": "Fort Worth Alliance Airport",
    "latitude": 32.9876,
    "longitude": -97.3188
  },
  "KALI": {
    "airport": "Alice International Airport",
    "latitude": 27.7409,
    "longitude": -98.0269
  },
  "KAMA": {
    "airport": "Rick Husband Amarillo International Airport",
    "latitude": 35.2194,
    "longitude": -101.706
  },
  "KASL": {
    "airport": "Harrison County Airport",
    "latitude": 32.5205,
    "longitude": -94.3078
  },
  "KAUS": {
    "airport": "Austin-Bergstrom International Airport",
    "latitude": 30.1945,
    "longitude": -97.6699
  },
  "KBAZ": {
    "airport": "New Braunfels National Airport",
    "latitude": 29.703,
    "longitude": -98.0411
  },
  "KBYY": {
    "airport": "Bay City Municipal Airport",
    "latitude": 28.9733,
    "longitude": -95.8635
  },
  "KBBD": {
    "airport": "Curtis Field",
    "latitude": 31.1793,
    "longitude": -99.3239
  },
  "KBGD": {
    "airport": "Hutchinson County Airport",
    "latitude": 35.7009,
    "longitude": -101.394
  },
  "KBIF": {
    "airport": "Biggs Army Airfield",
    "latitude": 31.8495,
    "longitude": -106.38
  },
  "KBKD": {
    "airport": "Stephens County Airport",
    "latitude": 32.719,
    "longitude": -98.891
  },
  "KBMT": {
    "airport": "Beaumont Municipal Airport",
    "latitude": 30.0707,
    "longitude": -94.2158
  },
  "KBPT": {
    "airport": "Jack Brooks Regional Airport",
    "latitude": 29.9508,
    "longitude": -94.0207
  },
  "KBRO": {
    "airport": "Brownsville/South Padre Island International Airport",
    "latitude": 25.9068,
    "longitude": -97.4259
  },
  "KBWD": {
    "airport": "Brownwood Regional Airport",
    "latitude": 31.7936,
    "longitude": -98.9565
  },
  "KCDS": {
    "airport": "Childress Municipal Airport",
    "latitude": 34.4338,
    "longitude": -100.288
  },
  "KCFD": {
    "airport": "Coulter Field",
    "latitude": 30.7157,
    "longitude": -96.3314
  },
  "KCLL": {
    "airport": "Easterwood Airport (Easterwood Field)",
    "latitude": 30.5886,
    "longitude": -96.3638
  },
  "KCNW": {
    "airport": "TSTC Waco Airport",
    "latitude": 31.6378,
    "longitude": -97.0741
  },
  "KCOM": {
    "airport": "Coleman Municipal Airport",
    "latitude": 31.8411,
    "longitude": -99.4036
  },
  "KCOT": {
    "airport": "Cotulla-La Salle County Airport",
    "latitude": 28.4567,
    "longitude": -99.2203
  },
  "KCRP": {
    "airport": "Corpus Christi International Airport",
    "latitude": 27.7704,
    "longitude": -97.5012
  },
  "KCRS": {
    "airport": "C. David Campbell Field (Corsicana Municipal Airport)",
    "latitude": 32.0281,
    "longitude": -96.4006
  },
  "KCXO": {
    "airport": "Lone Star Executive Airport",
    "latitude": 30.3518,
    "longitude": -95.4145
  },
  "KCZT": {
    "airport": "Dimmit County Airport",
    "latitude": 28.5222,
    "longitude": -99.8236
  },
  "KDAL": {
    "airport": "Dallas Love Field",
    "latitude": 32.8471,
    "longitude": -96.8518
  },
  "KDFW": {
    "airport": "Dallas/Fort Worth International Airport",
    "latitude": 32.8968,
    "longitude": -97.038
  },
  "KDHT": {
    "airport": "Dalhart Municipal Airport",
    "latitude": 36.0226,
    "longitude": -102.547
  },
  "KDLF": {
    "airport": "Laughlin Air Force Base",
    "latitude": 29.3595,
    "longitude": -100.778
  },
  "KDRT": {
    "airport": "Del Rio International Airport",
    "latitude": 29.3742,
    "longitude": -100.927
  },
  "KDWH": {
    "airport": "David Wayne Hooks Memorial Airport",
    "latitude": 30.0618,
    "longitude": -95.5528
  },
  "KDYS": {
    "airport": "Dyess Air Force Base",
    "latitude": 32.4208,
    "longitude": -99.8546
  },
  "KEFD": {
    "airport": "Ellington Field",
    "latitude": 29.6073,
    "longitude": -95.1588
  },
  "KELA": {
    "airport": "Eagle Lake Airport",
    "latitude": 29.6006,
    "longitude": -96.3219
  },
  "KELP": {
    "airport": "El Paso International Airport",
    "latitude": 31.8072,
    "longitude": -106.378
  },
  "KERV": {
    "airport": "Kerrville Municipal Airport (Louis Schreiner Field)",
    "latitude": 29.9767,
    "longitude": -99.0857
  },
  "KETN": {
    "airport": "Eastland Municipal Airport",
    "latitude": 32.4135,
    "longitude": -98.8098
  },
  "KFST": {
    "airport": "Fort Stockton-Pecos County Airport",
    "latitude": 30.9157,
    "longitude": -102.916
  },
  "KFTW": {
    "airport": "Fort Worth Meacham International Airport",
    "latitude": 32.8198,
    "longitude": -97.3624
  },
  "KNFW": {
    "airport": "NAS Fort Worth JRB / Carswell Field",
    "latitude": 32.7692,
    "longitude": -97.4415
  },
  "KGGG": {
    "airport": "East Texas Regional Airport",
    "latitude": 32.384,
    "longitude": -94.7115
  },
  "KGLE": {
    "airport": "Gainesville Municipal Airport",
    "latitude": 33.6514,
    "longitude": -97.197
  },
  "KGLS": {
    "airport": "Scholes International Airport at Galveston",
    "latitude": 29.2653,
    "longitude": -94.8604
  },
  "KGRK": {
    "airport": "Killeen-Fort Hood Regional Airport / Robert Gray Army Airfield",
    "latitude": 31.0672,
    "longitude": -97.8289
  },
  "KGVT": {
    "airport": "Majors Airport",
    "latitude": 33.0678,
    "longitude": -96.0653
  },
  "KBPG": {
    "airport": "Big Spring McMahon-Wrinkle Airport",
    "latitude": 32.2126,
    "longitude": -101.522
  },
  "KHLR": {
    "airport": "Hood Army Airfield",
    "latitude": 31.1387,
    "longitude": -97.7145
  },
  "KHOU": {
    "airport": "William P. Hobby Airport",
    "latitude": 29.6454,
    "longitude": -95.2789
  },
  "KHPY": {
    "airport": "Baytown Airport",
    "latitude": 29.7861,
    "longitude": -94.9527
  },
  "KHRL": {
    "airport": "Valley International Airport",
    "latitude": 26.2285,
    "longitude": -97.6544
  },
  "KUTS": {
    "airport": "Huntsville Municipal Airport (Bruce Brothers Regional)",
    "latitude": 30.7469,
    "longitude": -95.5872
  },
  "KIAH": {
    "airport": "George Bush Intercontinental Airport",
    "latitude": 29.9844,
    "longitude": -95.3414
  },
  "KILE": {
    "airport": "Skylark Field",
    "latitude": 31.0858,
    "longitude": -97.6865
  },
  "KINK": {
    "airport": "Winkler County Airport",
    "latitude": 31.7796,
    "longitude": -103.201
  },
  "KIWS": {
    "airport": "West Houston Airport",
    "latitude": 29.8182,
    "longitude": -95.6726
  },
  "KJAS": {
    "airport": "Jasper County Airport (Bell Field)",
    "latitude": 30.8857,
    "longitude": -94.0349
  },
  "KJCT": {
    "airport": "Kimble County Airport",
    "latitude": 30.5113,
    "longitude": -99.7635
  },
  "KJSO": {
    "airport": "Cherokee County Airport",
    "latitude": 31.8693,
    "longitude": -95.2174
  },
  "KCWC": {
    "airport": "Kickapoo Downtown Airport",
    "latitude": 33.8578,
    "longitude": -98.4904
  },
  "KLBB": {
    "airport": "Lubbock Preston Smith International Airport",
    "latitude": 33.6636,
    "longitude": -101.823
  },
  "KLFK": {
    "airport": "Angelina County Airport",
    "latitude": 31.234,
    "longitude": -94.75
  },
  "KLBX": {
    "airport": "Texas Gulf Coast Regional Airport",
    "latitude": 29.1086,
    "longitude": -95.4621
  },
  "KLRD": {
    "airport": "Laredo International Airport",
    "latitude": 27.5438,
    "longitude": -99.4616
  },
  "KMAF": {
    "airport": "Midland International Air and Space Port",
    "latitude": 31.9425,
    "longitude": -102.202
  },
  "KMDD": {
    "airport": "Midland Airpark",
    "latitude": 32.0365,
    "longitude": -102.101
  },
  "KMFE": {
    "airport": "McAllen Miller International Airport",
    "latitude": 26.1758,
    "longitude": -98.2386
  },
  "KOSA": {
    "airport": "Mount Pleasant Regional Airport",
    "latitude": 32.8981,
    "longitude": -79.7828
  },
  "KMRF": {
    "airport": "Marfa Municipal Airport",
    "latitude": 30.3711,
    "longitude": -104.018
  },
  "KMWL": {
    "airport": "Mineral Wells Airport",
    "latitude": 32.7816,
    "longitude": -98.0602
  },
  "KNGP": {
    "airport": "NAS Corpus Christi (Truax Field)",
    "latitude": 27.6926,
    "longitude": -97.2911
  },
  "KNGW": {
    "airport": "NOLF Cabaniss Field",
    "latitude": 27.7027,
    "longitude": -97.4389
  },
  "KNQI": {
    "airport": "NAS Kingsville",
    "latitude": 27.5072,
    "longitude": -97.8097
  },
  "KOCH": {
    "airport": "A.L. Mangham Jr. Regional Airport",
    "latitude": 31.578,
    "longitude": -94.7095
  },
  "KONY": {
    "airport": "Olney Municipal Airport",
    "latitude": 33.3522,
    "longitude": -98.7915
  },
  "KOZA": {
    "airport": "Ozona Municipal Airport",
    "latitude": 30.7353,
    "longitude": -101.203
  },
  "KPEQ": {
    "airport": "Pecos Municipal Airport",
    "latitude": 31.3824,
    "longitude": -103.511
  },
  "KGYI": {
    "airport": "North Texas Regional Airport",
    "latitude": 33.7141,
    "longitude": -96.6737
  },
  "KPPA": {
    "airport": "Perry Lefors Field",
    "latitude": 35.613,
    "longitude": -100.996
  },
  "KPRX": {
    "airport": "Cox Field",
    "latitude": 33.6366,
    "longitude": -95.4508
  },
  "KPSN": {
    "airport": "Palestine Municipal Airport",
    "latitude": 31.7797,
    "longitude": -95.7063
  },
  "KPSX": {
    "airport": "Palacios Municipal Airport",
    "latitude": 28.7275,
    "longitude": -96.251
  },
  "KPVW": {
    "airport": "Hale County Airport",
    "latitude": 34.1681,
    "longitude": -101.717
  },
  "KRBD": {
    "airport": "Dallas Executive Airport",
    "latitude": 32.6809,
    "longitude": -96.8682
  },
  "KRCK": {
    "airport": "H. H. Coffield Regional Airport",
    "latitude": 30.6316,
    "longitude": -96.9897
  },
  "KRFG": {
    "airport": "Rooke Field",
    "latitude": 28.2886,
    "longitude": -97.318
  },
  "KRKP": {
    "airport": "Aransas County Airport",
    "latitude": 28.0868,
    "longitude": -97.0446
  },
  "KRND": {
    "airport": "Randolph Air Force Base",
    "latitude": 29.5297,
    "longitude": -98.2789
  },
  "KSAT": {
    "airport": "San Antonio International Airport",
    "latitude": 29.5337,
    "longitude": -98.4698
  },
  "KSEP": {
    "airport": "Stephenville Clark Regional Airport",
    "latitude": 32.2153,
    "longitude": -98.1777
  },
  "KSGR": {
    "airport": "Sugar Land Regional Airport",
    "latitude": 29.6223,
    "longitude": -95.6565
  },
  "KSJT": {
    "airport": "San Angelo Regional Airport (Mathis Field)",
    "latitude": 31.3577,
    "longitude": -100.496
  },
  "KSKF": {
    "airport": "Kelly Field Annex / Lackland Air Force Base",
    "latitude": 29.3842,
    "longitude": -98.5811
  },
  "KSLR": {
    "airport": "Sulphur Springs Municipal Airport",
    "latitude": 33.1598,
    "longitude": -95.6211
  },
  "KSNK": {
    "airport": "Winston Field Airport",
    "latitude": 32.6934,
    "longitude": -100.95
  },
  "KSPS": {
    "airport": "Sheppard Air Force Base / Wichita Falls Municipal Airport",
    "latitude": 33.9888,
    "longitude": -98.4919
  },
  "KSSF": {
    "airport": "Stinson Municipal Airport",
    "latitude": 29.337,
    "longitude": -98.4711
  },
  "KSWW": {
    "airport": "Avenger Field",
    "latitude": 32.4674,
    "longitude": -100.467
  },
  "KTDW": {
    "airport": "Tradewind Airport",
    "latitude": 35.1699,
    "longitude": -101.826
  },
  "KTPL": {
    "airport": "Draughon-Miller Central Texas Regional Airport",
    "latitude": 31.1525,
    "longitude": -97.4078
  },
  "KTRL": {
    "airport": "Terrell Municipal Airport",
    "latitude": 32.7092,
    "longitude": -96.2674
  },
  "KTYR": {
    "airport": "Tyler Pounds Regional Airport",
    "latitude": 32.3541,
    "longitude": -95.4024
  },
  "KUVA": {
    "airport": "Garner Field",
    "latitude": 29.2113,
    "longitude": -99.7436
  },
  "KVCT": {
    "airport": "Victoria Regional Airport",
    "latitude": 28.8526,
    "longitude": -96.9185
  },
  "KVHN": {
    "airport": "Culberson County Airport",
    "latitude": 31.0578,
    "longitude": -104.784
  },
  "KWEA": {
    "airport": "Parker County Airport",
    "latitude": 32.7463,
    "longitude": -97.6824
  },
  "KARM": {
    "airport": "Wharton Regional Airport",
    "latitude": 29.2543,
    "longitude": -96.1544
  },
  "KBCE": {
    "airport": "Bryce Canyon Airport",
    "latitude": 37.7064,
    "longitude": -112.145
  },
  "KBDG": {
    "airport": "Blanding Municipal Airport",
    "latitude": 37.5833,
    "longitude": -109.483
  },
  "KBMC": {
    "airport": "Brigham City Airport",
    "latitude": 41.5524,
    "longitude": -112.062
  },
  "KBTF": {
    "airport": "Skypark Airport",
    "latitude": 40.8694,
    "longitude": -111.927
  },
  "KCDC": {
    "airport": "Cedar City Regional Airport",
    "latitude": 37.701,
    "longitude": -113.099
  },
  "KCNY": {
    "airport": "Canyonlands Field",
    "latitude": 38.755,
    "longitude": -109.755
  },
  "KDPG": {
    "airport": "Michael Army Airfield",
    "latitude": 40.1994,
    "longitude": -112.937
  },
  "KDTA": {
    "airport": "Delta Municipal Airport",
    "latitude": 39.3806,
    "longitude": -112.508
  },
  "KENV": {
    "airport": "Wendover Airport",
    "latitude": 40.7187,
    "longitude": -114.031
  },
  "KFOM": {
    "airport": "Fillmore Municipal Airport",
    "latitude": 38.9583,
    "longitude": -112.363
  },
  "KHIF": {
    "airport": "Hill Air Force Base",
    "latitude": 41.124,
    "longitude": -111.973
  },
  "KHVE": {
    "airport": "Hanksville Airport",
    "latitude": 38.418,
    "longitude": -110.704
  },
  "KKNB": {
    "airport": "Kanab Municipal Airport",
    "latitude": 37.0106,
    "longitude": -112.531
  },
  "KLGU": {
    "airport": "Logan-Cache Airport",
    "latitude": 41.7912,
    "longitude": -111.852
  },
  "KMLF": {
    "airport": "Milford Municipal Airport (Ben and Judy Briscoe Field)",
    "latitude": 38.6097,
    "longitude": -112.986
  },
  "KOGD": {
    "airport": "Ogden-Hinckley Airport",
    "latitude": 41.1959,
    "longitude": -112.012
  },
  "KPUC": {
    "airport": "Carbon County Regional Airport",
    "latitude": 39.6139,
    "longitude": -110.751
  },
  "KPVU": {
    "airport": "Provo Municipal Airport",
    "latitude": 40.2192,
    "longitude": -111.723
  },
  "KRIF": {
    "airport": "Richfield Municipal Airport",
    "latitude": 38.7364,
    "longitude": -112.099
  },
  "KSGU": {
    "airport": "St. George Regional Airport",
    "latitude": 37.0364,
    "longitude": -113.51
  },
  "KSLC": {
    "airport": "Salt Lake City International Airport",
    "latitude": 40.7884,
    "longitude": -111.978
  },
  "KVEL": {
    "airport": "Vernal Regional Airport",
    "latitude": 40.4409,
    "longitude": -109.51
  },
  "KBTV": {
    "airport": "Burlington International Airport",
    "latitude": 44.4719,
    "longitude": -73.1533
  },
  "KEFK": {
    "airport": "Newport State Airport",
    "latitude": 44.8888,
    "longitude": -72.2292
  },
  "KCDA": {
    "airport": "Caledonia County Airport",
    "latitude": 44.5691,
    "longitude": -72.018
  },
  "KMPV": {
    "airport": "Edward F. Knapp State Airport",
    "latitude": 44.2035,
    "longitude": -72.5623
  },
  "KMVL": {
    "airport": "Morrisville-Stowe State Airport",
    "latitude": 44.5346,
    "longitude": -72.614
  },
  "KRUT": {
    "airport": "Rutland - Southern Vermont Regional Airport",
    "latitude": 43.5294,
    "longitude": -72.9496
  },
  "KVSF": {
    "airport": "Hartness State Airport",
    "latitude": 43.3436,
    "longitude": -72.5173
  },
  "KAPH": {
    "airport": "A.P. Hill Army Airfield",
    "latitude": 38.0689,
    "longitude": -77.3183
  },
  "KBCB": {
    "airport": "Virginia Tech Montgomery Executive Airport",
    "latitude": 37.2076,
    "longitude": -80.4078
  },
  "KBKT": {
    "airport": "Blackstone Army Airfield (Allen C. Perkinson Airport)",
    "latitude": 37.0742,
    "longitude": -77.9575
  },
  "KCHO": {
    "airport": "Charlottesville-Albemarle Airport",
    "latitude": 38.1386,
    "longitude": -78.4529
  },
  "KDAA": {
    "airport": "Davison Army Airfield",
    "latitude": 38.715,
    "longitude": -77.181
  },
  "KDAN": {
    "airport": "Danville Regional Airport",
    "latitude": 36.5729,
    "longitude": -79.3361
  },
  "KDCA": {
    "airport": "Ronald Reagan Washington National Airport",
    "latitude": 38.8522,
    "longitude": -77.0378
  },
  "KNDY": {
    "airport": "Naval Surface Warfare Center Dahlgren Division",
    "latitude": 38.3325,
    "longitude": -77.0372
  },
  "KFAF": {
    "airport": "Felker Army Airfield",
    "latitude": 37.1325,
    "longitude": -76.6088
  },
  "KFCI": {
    "airport": "Chesterfield County Airport",
    "latitude": 37.406667,
    "longitude": -77.525
  },
  "KFKN": {
    "airport": "Franklin Municipal-John Beverly Rose Airport",
    "latitude": 36.6981,
    "longitude": -76.9038
  },
  "KFRR": {
    "airport": "Front Royal-Warren County Airport",
    "latitude": 38.9175,
    "longitude": -78.2535
  },
  "KGVE": {
    "airport": "Gordonsville Municipal Airport",
    "latitude": 38.156,
    "longitude": -78.1658
  },
  "KHSP": {
    "airport": "Ingalls Field",
    "latitude": 37.9514,
    "longitude": -79.8339
  },
  "KIAD": {
    "airport": "Washington Dulles International Airport",
    "latitude": 38.9445,
    "longitude": -77.4558
  },
  "KLFI": {
    "airport": "Langley Air Force Base",
    "latitude": 37.0829,
    "longitude": -76.3605
  },
  "KLNP": {
    "airport": "Lonesome Pine Airport",
    "latitude": 36.9875,
    "longitude": -82.53
  },
  "KLKU": {
    "airport": "Louisa County Airport (Freeman Field)",
    "latitude": 38.0098,
    "longitude": -77.9701
  },
  "KLVL": {
    "airport": "Lawrenceville/Brunswick Municipal Airport",
    "latitude": 36.7728,
    "longitude": -77.7943
  },
  "KLYH": {
    "airport": "Lynchburg Regional Airport (Preston Glenn Field)",
    "latitude": 37.3267,
    "longitude": -79.2004
  },
  "KMFV": {
    "airport": "Accomack County Airport",
    "latitude": 37.6469,
    "longitude": -75.7611
  },
  "KHEF": {
    "airport": "Manassas Regional Airport",
    "latitude": 38.7214,
    "longitude": -77.5154
  },
  "KNGU": {
    "airport": "NS Norfolk (Chambers Field)",
    "latitude": 36.9376,
    "longitude": -76.2893
  },
  "KNTU": {
    "airport": "NAS Oceana (Apollo Soucek Field)",
    "latitude": 36.8207,
    "longitude": -76.0335
  },
  "KNYG": {
    "airport": "MCAF Quantico (Turner Field)",
    "latitude": 38.5017,
    "longitude": -77.3053
  },
  "KORF": {
    "airport": "Norfolk International Airport",
    "latitude": 36.8946,
    "longitude": -76.2012
  },
  "KPHF": {
    "airport": "Newport News/Williamsburg International Airport",
    "latitude": 37.1319,
    "longitude": -76.493
  },
  "KPSK": {
    "airport": "New River Valley Airport",
    "latitude": 37.1373,
    "longitude": -80.6785
  },
  "KPTB": {
    "airport": "Dinwiddie County Airport",
    "latitude": 37.1838,
    "longitude": -77.5074
  },
  "KPVG": {
    "airport": "Hampton Roads Executive Airport",
    "latitude": 36.780278,
    "longitude": -76.448889
  },
  "KRIC": {
    "airport": "Richmond International Airport",
    "latitude": 37.5052,
    "longitude": -77.3197
  },
  "KROA": {
    "airport": "Roanoke-Blacksburg Regional Airport (Woodrum Field)",
    "latitude": 37.3255,
    "longitude": -79.9754
  },
  "KRMN": {
    "airport": "Stafford Regional Airport",
    "latitude": 38.398056,
    "longitude": -77.455556
  },
  "KSHD": {
    "airport": "Shenandoah Valley Regional Airport",
    "latitude": 38.2638,
    "longitude": -78.8964
  },
  "KVJI": {
    "airport": "Virginia Highlands Airport",
    "latitude": 36.6871,
    "longitude": -82.0333
  },
  "KWAL": {
    "airport": "Wallops Flight Facility",
    "latitude": 37.9402,
    "longitude": -75.4664
  },
  "KOKV": {
    "airport": "Winchester Regional Airport",
    "latitude": 39.1435,
    "longitude": -78.1444
  },
  "KALW": {
    "airport": "Walla Walla Regional Airport",
    "latitude": 46.0949,
    "longitude": -118.288
  },
  "KBFI": {
    "airport": "Boeing Field/King County International Airport",
    "latitude": 47.53,
    "longitude": -122.302
  },
  "KBLI": {
    "airport": "Bellingham International Airport",
    "latitude": 48.7928,
    "longitude": -122.538
  },
  "KCLM": {
    "airport": "William R. Fairchild International Airport",
    "latitude": 48.1202,
    "longitude": -123.5
  },
  "KCLS": {
    "airport": "Chehalis-Centralia Airport",
    "latitude": 46.677,
    "longitude": -122.983
  },
  "KEAT": {
    "airport": "Pangborn Memorial Airport",
    "latitude": 47.3989,
    "longitude": -120.207
  },
  "KELN": {
    "airport": "Bowers Field",
    "latitude": 47.033,
    "longitude": -120.531
  },
  "KEPH": {
    "airport": "Ephrata Municipal Airport",
    "latitude": 47.3076,
    "longitude": -119.516
  },
  "KORS": {
    "airport": "Orcas Island Airport",
    "latitude": 48.7082,
    "longitude": -122.91
  },
  "KESW": {
    "airport": "Easton State Airport",
    "latitude": 47.2542,
    "longitude": -121.186
  },
  "KFHR": {
    "airport": "Friday Harbor Airport",
    "latitude": 48.522,
    "longitude": -123.024
  },
  "KGEG": {
    "airport": "Spokane International Airport",
    "latitude": 47.6199,
    "longitude": -117.534
  },
  "KGRF": {
    "airport": "Gray Army Airfield",
    "latitude": 47.0792,
    "longitude": -122.581
  },
  "KHQM": {
    "airport": "Bowerman Airport",
    "latitude": 46.9712,
    "longitude": -123.937
  },
  "KKLS": {
    "airport": "Southwest Washington Regional Airport",
    "latitude": 46.118,
    "longitude": -122.898
  },
  "KBVS": {
    "airport": "Skagit Regional Airport",
    "latitude": 48.4709,
    "longitude": -122.421
  },
  "KMWH": {
    "airport": "Grant County International Airport",
    "latitude": 47.2077,
    "longitude": -119.32
  },
  "KNUW": {
    "airport": "NAS Whidbey Island (Ault Field)",
    "latitude": 48.3518,
    "longitude": -122.656
  },
  "KOKH": {
    "airport": "A.J. Eisenberg Airport",
    "latitude": 48.2515,
    "longitude": -122.674
  },
  "KOLM": {
    "airport": "Olympia Regional Airport",
    "latitude": 46.9694,
    "longitude": -122.903
  },
  "KOMK": {
    "airport": "Omak Airport",
    "latitude": 48.4644,
    "longitude": -119.518
  },
  "KPAE": {
    "airport": "Paine Field (Snohomish County Airport)",
    "latitude": 47.9063,
    "longitude": -122.282
  },
  "KPSC": {
    "airport": "Tri-Cities Airport",
    "latitude": 46.2647,
    "longitude": -119.119
  },
  "KPUW": {
    "airport": "Pullman-Moscow Regional Airport",
    "latitude": 46.7439,
    "longitude": -117.11
  },
  "KPWT": {
    "airport": "Bremerton National Airport",
    "latitude": 47.4902,
    "longitude": -122.765
  },
  "KRLD": {
    "airport": "Richland Airport",
    "latitude": 46.3056,
    "longitude": -119.304
  },
  "KRNT": {
    "airport": "Renton Municipal Airport",
    "latitude": 47.4931,
    "longitude": -122.216
  },
  "KSEA": {
    "airport": "Seattle-Tacoma International Airport",
    "latitude": 47.449,
    "longitude": -122.309
  },
  "KSFF": {
    "airport": "Felts Field",
    "latitude": 47.6828,
    "longitude": -117.323
  },
  "KSHN": {
    "airport": "Sanderson Field",
    "latitude": 47.2336,
    "longitude": -123.148
  },
  "KSKA": {
    "airport": "Fairchild Air Force Base",
    "latitude": 47.6151,
    "longitude": -117.656
  },
  "KTCM": {
    "airport": "McChord Field",
    "latitude": 47.1377,
    "longitude": -122.476
  },
  "KTDO": {
    "airport": "South Lewis County Airport (Ed Carlson Memorial Field)",
    "latitude": 46.4772,
    "longitude": -122.806
  },
  "KTIW": {
    "airport": "Tacoma Narrows Airport",
    "latitude": 47.2679,
    "longitude": -122.578
  },
  "KUIL": {
    "airport": "Quillayute Airport",
    "latitude": 47.9366,
    "longitude": -124.563
  },
  "KYKM": {
    "airport": "Yakima Air Terminal (McAllister Field)",
    "latitude": 46.5682,
    "longitude": -120.544
  },
  "KBKW": {
    "airport": "Raleigh County Memorial Airport",
    "latitude": 37.7873,
    "longitude": -81.1242
  },
  "KBLF": {
    "airport": "Mercer County Airport",
    "latitude": 37.2958,
    "longitude": -81.2077
  },
  "KCKB": {
    "airport": "North Central West Virginia Airport",
    "latitude": 39.2966,
    "longitude": -80.2281
  },
  "KCRW": {
    "airport": "Yeager Airport",
    "latitude": 38.3731,
    "longitude": -81.5932
  },
  "KEKN": {
    "airport": "Elkins-Randolph County Airport",
    "latitude": 38.8894,
    "longitude": -79.8571
  },
  "KHLG": {
    "airport": "Wheeling Ohio County Airport",
    "latitude": 40.175,
    "longitude": -80.6463
  },
  "KHTS": {
    "airport": "Tri-State Airport (Milton J. Ferguson Field)",
    "latitude": 38.3667,
    "longitude": -82.558
  },
  "KLWB": {
    "airport": "Greenbrier Valley Airport",
    "latitude": 37.8583,
    "longitude": -80.3995
  },
  "KMGW": {
    "airport": "Morgantown Municipal Airport (Walter L. Bill Hart Field)",
    "latitude": 39.6429,
    "longitude": -79.9163
  },
  "KMRB": {
    "airport": "Eastern WV Regional Airport (Shepherd Field)",
    "latitude": 39.4019,
    "longitude": -77.9846
  },
  "KPKB": {
    "airport": "Mid-Ohio Valley Regional Airport",
    "latitude": 39.3451,
    "longitude": -81.4392
  },
  "KAHH": {
    "airport": "Amery Municipal Airport",
    "latitude": 45.2811,
    "longitude": -92.3754
  },
  "KARV": {
    "airport": "Lakeland Airport (Noble F. Lee Memorial Field)",
    "latitude": 45.9279,
    "longitude": -89.7309
  },
  "KASX": {
    "airport": "John F. Kennedy Memorial Airport",
    "latitude": 46.5485,
    "longitude": -90.919
  },
  "KATW": {
    "airport": "Appleton International Airport",
    "latitude": 44.2581,
    "longitude": -88.5191
  },
  "KAUW": {
    "airport": "Wausau Downtown Airport",
    "latitude": 44.9262,
    "longitude": -89.6266
  },
  "KCLI": {
    "airport": "Clintonville Municipal Airport",
    "latitude": 44.6138,
    "longitude": -88.7313
  },
  "KCMY": {
    "airport": "Sparta/Fort McCoy Airport",
    "latitude": 43.9583,
    "longitude": -90.7379
  },
  "KCWA": {
    "airport": "Central Wisconsin Airport",
    "latitude": 44.7776,
    "longitude": -89.6668
  },
  "KEAU": {
    "airport": "Chippewa Valley Regional Airport",
    "latitude": 44.8658,
    "longitude": -91.4843
  },
  "KEGV": {
    "airport": "Eagle River Union Airport",
    "latitude": 45.9323,
    "longitude": -89.2683
  },
  "KENW": {
    "airport": "Kenosha Regional Airport",
    "latitude": 42.5957,
    "longitude": -87.9278
  },
  "KETB": {
    "airport": "West Bend Municipal Airport",
    "latitude": 43.4222,
    "longitude": -88.1279
  },
  "KFLD": {
    "airport": "Fond du Lac County Airport",
    "latitude": 43.7712,
    "longitude": -88.4884
  },
  "KGRB": {
    "airport": "Austin Straubel International Airport",
    "latitude": 44.4851,
    "longitude": -88.1296
  },
  "KGTG": {
    "airport": "Grantsburg Municipal Airport",
    "latitude": 45.7981,
    "longitude": -92.6644
  },
  "KHYR": {
    "airport": "Sawyer County Airport",
    "latitude": 46.0252,
    "longitude": -91.4443
  },
  "KISW": {
    "airport": "South Wood County Airport (Alexander Field)",
    "latitude": 44.3603,
    "longitude": -89.839
  },
  "KJVL": {
    "airport": "Southern Wisconsin Regional Airport",
    "latitude": 42.6203,
    "longitude": -89.0416
  },
  "KLNR": {
    "airport": "Tri-County Regional Airport",
    "latitude": 43.2117,
    "longitude": -90.1816
  },
  "KLSE": {
    "airport": "La Crosse Regional Airport",
    "latitude": 43.879,
    "longitude": -91.2567
  },
  "KMDZ": {
    "airport": "Taylor County Airport",
    "latitude": 45.101,
    "longitude": -90.3033
  },
  "KMFI": {
    "airport": "Marshfield Municipal Airport",
    "latitude": 44.6369,
    "longitude": -90.1893
  },
  "KMKE": {
    "airport": "General Mitchell International Airport",
    "latitude": 42.9472,
    "longitude": -87.8966
  },
  "KMSN": {
    "airport": "Dane County Regional Airport (Truax Field)",
    "latitude": 43.1399,
    "longitude": -89.3375
  },
  "KMTW": {
    "airport": "Manitowoc County Airport",
    "latitude": 44.1288,
    "longitude": -87.6806
  },
  "KMWC": {
    "airport": "Lawrence J. Timmerman Airport",
    "latitude": 43.1104,
    "longitude": -88.0344
  },
  "KOEO": {
    "airport": "L.O. Simenstad Municipal Airport",
    "latitude": 45.31,
    "longitude": -92.6919
  },
  "KOSH": {
    "airport": "Wittman Regional Airport",
    "latitude": 43.9844,
    "longitude": -88.557
  },
  "KPDC": {
    "airport": "Prairie du Chien Municipal Airport",
    "latitude": 43.0193,
    "longitude": -91.1237
  },
  "KPKF": {
    "airport": "Park Falls Municipal Airport",
    "latitude": 45.955,
    "longitude": -90.4244
  },
  "KRAC": {
    "airport": "John H. Batten Airport",
    "latitude": 42.7606,
    "longitude": -87.8152
  },
  "KRHI": {
    "airport": "Rhinelander-Oneida County Airport",
    "latitude": 45.6312,
    "longitude": -89.4675
  },
  "KRPD": {
    "airport": "Rice Lake Regional Airport (Carl's Field)",
    "latitude": 45.419,
    "longitude": -91.7735
  },
  "KRNH": {
    "airport": "New Richmond Regional Airport",
    "latitude": 45.1483,
    "longitude": -92.5381
  },
  "KRRL": {
    "airport": "Merrill Municipal Airport",
    "latitude": 45.1989,
    "longitude": -89.7129
  },
  "KSBM": {
    "airport": "Sheboygan County Memorial Airport",
    "latitude": 43.7696,
    "longitude": -87.8514
  },
  "KSTE": {
    "airport": "Stevens Point Municipal Airport",
    "latitude": 44.5452,
    "longitude": -89.5303
  },
  "KSUE": {
    "airport": "Door County Cherryland Airport",
    "latitude": 44.8437,
    "longitude": -87.4215
  },
  "KSUW": {
    "airport": "Richard I. Bong Airport",
    "latitude": 46.6897,
    "longitude": -92.0947
  },
  "KUES": {
    "airport": "Waukesha County Airport (Crites Field)",
    "latitude": 43.041,
    "longitude": -88.2371
  },
  "KUNU": {
    "airport": "Dodge County Airport",
    "latitude": 43.4266,
    "longitude": -88.7032
  },
  "KVOK": {
    "airport": "Volk Field Air National Guard Base",
    "latitude": 43.939,
    "longitude": -90.2534
  },
  "KAFO": {
    "airport": "Afton Municipal Airport",
    "latitude": 42.7112,
    "longitude": -110.942
  },
  "KBPI": {
    "airport": "Miley Memorial Field",
    "latitude": 42.5851,
    "longitude": -110.111
  },
  "KBYG": {
    "airport": "Johnson County Airport",
    "latitude": 44.3811,
    "longitude": -106.722
  },
  "KCOD": {
    "airport": "Yellowstone Regional Airport",
    "latitude": 44.5202,
    "longitude": -109.024
  },
  "KCPR": {
    "airport": "Casper-Natrona County International Airport",
    "latitude": 42.908,
    "longitude": -106.464
  },
  "KCYS": {
    "airport": "Cheyenne Regional Airport (Jerry Olson Field)",
    "latitude": 41.1557,
    "longitude": -104.812
  },
  "KDGW": {
    "airport": "Converse County Airport",
    "latitude": 42.7972,
    "longitude": -105.386
  },
  "KEAN": {
    "airport": "Phifer Airfield",
    "latitude": 42.0555,
    "longitude": -104.929
  },
  "KECS": {
    "airport": "Mondell Field",
    "latitude": 43.8854,
    "longitude": -104.318
  },
  "KEMM": {
    "airport": "Kemmerer Municipal Airport",
    "latitude": 41.8241,
    "longitude": -110.557
  },
  "KEVW": {
    "airport": "Evanston-Uinta County Burns Field",
    "latitude": 41.2748,
    "longitude": -111.035
  },
  "KFBR": {
    "airport": "Fort Bridger Airport",
    "latitude": 41.3919,
    "longitude": -110.407
  },
  "KGCC": {
    "airport": "Gillette-Campbell County Airport",
    "latitude": 44.3489,
    "longitude": -105.539
  },
  "KGEY": {
    "airport": "South Big Horn County Airport",
    "latitude": 44.5168,
    "longitude": -108.083
  },
  "KJAC": {
    "airport": "Jackson Hole Airport",
    "latitude": 43.6073,
    "longitude": -110.738
  },
  "KLAR": {
    "airport": "Laramie Regional Airport",
    "latitude": 41.3121,
    "longitude": -105.675
  },
  "KLND": {
    "airport": "Hunt Field",
    "latitude": 42.8152,
    "longitude": -108.73
  },
  "KLSK": {
    "airport": "Lusk Municipal Airport",
    "latitude": 42.7538,
    "longitude": -104.405
  },
  "KPOY": {
    "airport": "Powell Municipal Airport",
    "latitude": 44.8672,
    "longitude": -108.793
  },
  "KPNA": {
    "airport": "Ralph Wenz Field",
    "latitude": 42.7955,
    "longitude": -109.807
  },
  "KRIW": {
    "airport": "Central Wyoming Regional Airport",
    "latitude": 43.0642,
    "longitude": -108.46
  },
  "KRKS": {
    "airport": "Southwest Wyoming Regional Airport",
    "latitude": 41.5942,
    "longitude": -109.065
  },
  "KRWL": {
    "airport": "Rawlins Municipal Airport (Harvey Field)",
    "latitude": 41.8056,
    "longitude": -107.2
  },
  "KSAA": {
    "airport": "Shively Field",
    "latitude": 41.4449,
    "longitude": -106.824
  },
  "KSHR": {
    "airport": "Sheridan County Airport",
    "latitude": 44.7692,
    "longitude": -106.98
  },
  "KTHP": {
    "airport": "Hot Springs County-Thermopolis Municipal Airport",
    "latitude": 43.7136,
    "longitude": -108.39
  },
  "KTOR": {
    "airport": "Torrington Municipal Airport",
    "latitude": 42.0645,
    "longitude": -104.153
  },
  "KWRL": {
    "airport": "Worland Municipal Airport",
    "latitude": 43.9657,
    "longitude": -107.951
  },
  "SUAG": {
    "airport": "Artigas International Airport",
    "latitude": -30.4007,
    "longitude": -56.5079
  },
  "SUBU": {
    "airport": "Placeres Airport",
    "latitude": -30.3333,
    "longitude": -57.0833
  },
  "SUMO": {
    "airport": "Cerro Largo International Airport",
    "latitude": -32.3379,
    "longitude": -54.2167
  },
  "SUCA": {
    "airport": "Colonia Airport (Laguna de los Patos Intn'l Airport)",
    "latitude": -34.4564,
    "longitude": -57.7706
  },
  "SUDU": {
    "airport": "Santa Bernardina International Airport",
    "latitude": -33.3589,
    "longitude": -56.4992
  },
  "SULS": {
    "airport": "Capitan de Corbeta Carlos A. Curbelo International Airport",
    "latitude": -34.8551,
    "longitude": -55.0943
  },
  "SUMU": {
    "airport": "Carrasco Gral. Cesareo L. Berisso International Airport",
    "latitude": -34.8384,
    "longitude": -56.0308
  },
  "SUPU": {
    "airport": "Tydeo Larre Borges International Airport",
    "latitude": -32.3633,
    "longitude": -58.0619
  },
  "SURV": {
    "airport": "Pres. Gral. Oscar D. Gestido International Airport",
    "latitude": -30.9746,
    "longitude": -55.4762
  },
  "SUVO": {
    "airport": "Vichadero Airport",
    "latitude": -31.767,
    "longitude": -54.617
  },
  "SUSO": {
    "airport": "Nueva Hesperides International Airport",
    "latitude": -31.4385,
    "longitude": -57.9853
  },
  "SUTB": {
    "airport": "Tacuarembo Airport",
    "latitude": -31.749,
    "longitude": -55.9258
  },
  "SUTR": {
    "airport": "Treinta y Tres Airport",
    "latitude": -33.1957,
    "longitude": -54.3472
  },
  "UTKA": {
    "airport": "Andizhan Airport",
    "latitude": 40.7277,
    "longitude": 72.294
  },
  "UTSN": {
    "airport": "Zarafshan Airport",
    "latitude": 41.6139,
    "longitude": 64.2332
  },
  "UTSB": {
    "airport": "Bukhara International Airport",
    "latitude": 39.775,
    "longitude": 64.4833
  },
  "UTKF": {
    "airport": "Fergana International Airport",
    "latitude": 40.3588,
    "longitude": 71.745
  },
  "UTFN": {
    "airport": "Namangan Airport",
    "latitude": 40.9846,
    "longitude": 71.5567
  },
  "UTSA": {
    "airport": "Navoi International Airport",
    "latitude": 40.1172,
    "longitude": 65.1708
  },
  "UTSK": {
    "airport": "Karshi Airport",
    "latitude": 38.8336,
    "longitude": 65.9215
  },
  "UTNM": {
    "airport": "Muynaq Airport",
    "latitude": 43.7574,
    "longitude": 59.0294
  },
  "UTNN": {
    "airport": "Nukus Airport",
    "latitude": 42.4884,
    "longitude": 59.6233
  },
  "UTSS": {
    "airport": "Samarkand International Airport",
    "latitude": 39.7005,
    "longitude": 66.9838
  },
  "UTST": {
    "airport": "Termez Airport",
    "latitude": 37.2867,
    "longitude": 67.31
  },
  "UTTT": {
    "airport": "Tashkent International Airport",
    "latitude": 41.2579,
    "longitude": 69.2812
  },
  "UTNU": {
    "airport": "Urgench International Airport",
    "latitude": 41.5843,
    "longitude": 60.6417
  },
  "TVSB": {
    "airport": "J. F. Mitchell Airport",
    "latitude": 12.9884,
    "longitude": -61.262
  },
  "TVSC": {
    "airport": "Canouan Airport",
    "latitude": 12.699,
    "longitude": -61.3424
  },
  "TVSM": {
    "airport": "Mustique Airport",
    "latitude": 12.8879,
    "longitude": -61.1802
  },
  "TVSU": {
    "airport": "Union Island Airport",
    "latitude": 12.6001,
    "longitude": -61.4119
  },
  "TVSA": {
    "airport": "Argyle International Airport",
    "latitude": 13.1443,
    "longitude": -61.2109
  },
  "SVPA": {
    "airport": "Cacique Aramare Airport",
    "latitude": 5.61999,
    "longitude": -67.6061
  },
  "SVAN": {
    "airport": "Anaco Airport",
    "latitude": 9.43023,
    "longitude": -64.4707
  },
  "SVBC": {
    "airport": "General Jose Antonio Anzoategui International Airport",
    "latitude": 10.1111,
    "longitude": -64.6922
  },
  "SVST": {
    "airport": "San Tome Airport",
    "latitude": 8.94515,
    "longitude": -64.1511
  },
  "SVEZ": {
    "airport": "Elorza Airport",
    "latitude": 7.08333,
    "longitude": -69.5333
  },
  "SVGD": {
    "airport": "Guasdualito Airport (Vare Maria Airport)",
    "latitude": 7.23333,
    "longitude": -70.8
  },
  "SVPT": {
    "airport": "Palmarito Airport",
    "latitude": 7.56667,
    "longitude": -70.1833
  },
  "SVSR": {
    "airport": "Las Flecheras Airport",
    "latitude": 7.88332,
    "longitude": -67.444
  },
  "SVBI": {
    "airport": "Barinas Airport",
    "latitude": 8.615,
    "longitude": -70.2142
  },
  "SVSB": {
    "airport": "Santa Barbara de Barinas Airport",
    "latitude": 7.80351,
    "longitude": -71.1657
  },
  "SVCN": {
    "airport": "Canaima Airport",
    "latitude": 6.23199,
    "longitude": -62.8544
  },
  "SVCB": {
    "airport": "Tomas de Heres Airport",
    "latitude": 8.12216,
    "longitude": -63.537
  },
  "SVCD": {
    "airport": "Caicara del Orinoco Airport",
    "latitude": 7.62551,
    "longitude": -66.1628
  },
  "SVED": {
    "airport": "El Dorado Airport",
    "latitude": 6.73333,
    "longitude": -61.5833
  },
  "SVIC": {
    "airport": "Icabaru Airport",
    "latitude": 4.33632,
    "longitude": -61.7396
  },
  "SVIE": {
    "airport": "Andres Miguel Salazar Marcano Airport",
    "latitude": 10.7944,
    "longitude": -63.9816
  },
  "SVKA": {
    "airport": "Kavanayen Airport",
    "latitude": 5.633,
    "longitude": -61.783
  },
  "SVKM": {
    "airport": "Kamarata Airport",
    "latitude": 5.75,
    "longitude": -62.416
  },
  "SVPR": {
    "airport": "Manuel Carlos Piar Guayana Airport",
    "latitude": 8.28853,
    "longitude": -62.7604
  },
  "SVSE": {
    "airport": "Santa Elena de Uairen Airport",
    "latitude": 4.555,
    "longitude": -61.15
  },
  "SVTM": {
    "airport": "Tumeremo Airport",
    "latitude": 7.24938,
    "longitude": -61.5289
  },
  "SVUM": {
    "airport": "Uriman Airport",
    "latitude": 5.33333,
    "longitude": -62.7667
  },
  "SVBS": {
    "airport": "Mariscal Sucre Airport",
    "latitude": 10.25,
    "longitude": -67.6494
  },
  "SVPC": {
    "airport": "Bartolome Salom Airport",
    "latitude": 10.4805,
    "longitude": -68.073
  },
  "SVVA": {
    "airport": "Arturo Michelena International Airport",
    "latitude": 10.1497,
    "longitude": -67.9284
  },
  "SVPE": {
    "airport": "Pedernales Airport",
    "latitude": 9.97924,
    "longitude": -62.2286
  },
  "SVTC": {
    "airport": "San Rafael Airport",
    "latitude": 9.08899,
    "longitude": -62.0942
  },
  "SVCR": {
    "airport": "Jose Leonardo Chirino Airport",
    "latitude": 11.4149,
    "longitude": -69.6809
  },
  "SVJC": {
    "airport": "Josefa Camejo International Airport",
    "latitude": 11.7808,
    "longitude": -70.1515
  },
  "SVCL": {
    "airport": "Calabozo Airport",
    "latitude": 8.92466,
    "longitude": -67.4171
  },
  "SVVP": {
    "airport": "Valle de la Pascua Airport",
    "latitude": 9.22203,
    "longitude": -65.9936
  },
  "SVBM": {
    "airport": "Jacinto Lara International Airport",
    "latitude": 10.0427,
    "longitude": -69.3586
  },
  "SVCO": {
    "airport": "Carora Airport",
    "latitude": 10.1756,
    "longitude": -70.0652
  },
  "SVMD": {
    "airport": "Alberto Carnevalli Airport",
    "latitude": 8.58208,
    "longitude": -71.161
  },
  "SVVG": {
    "airport": "Juan Pablo Perez Alfonzo Airport",
    "latitude": 8.62414,
    "longitude": -71.6727
  },
  "SVRS": {
    "airport": "Los Roques Airport",
    "latitude": 11.95,
    "longitude": -66.67
  },
  "SVMT": {
    "airport": "Jose Tadeo Monagas International Airport",
    "latitude": 9.75453,
    "longitude": -63.1474
  },
  "SVMG": {
    "airport": "Santiago Marino Caribbean International Airport",
    "latitude": 10.9126,
    "longitude": -63.9666
  },
  "SVAC": {
    "airport": "Oswaldo Guevara Mujica Airport",
    "latitude": 9.55338,
    "longitude": -69.2379
  },
  "SVGU": {
    "airport": "Guanare Airport",
    "latitude": 9.02694,
    "longitude": -69.7551
  },
  "SVCU": {
    "airport": "Antonio Jose de Sucre Airport",
    "latitude": 10.4503,
    "longitude": -64.1305
  },
  "SVCP": {
    "airport": "General Jose Francisco Bermudez Airport",
    "latitude": 10.66,
    "longitude": -63.2617
  },
  "SVGI": {
    "airport": "Guiria Airport",
    "latitude": 10.5741,
    "longitude": -62.3127
  },
  "SVLF": {
    "airport": "La Fria Airport",
    "latitude": 8.23917,
    "longitude": -72.271
  },
  "SVPM": {
    "airport": "Paramillo Airport",
    "latitude": 7.80132,
    "longitude": -72.2029
  },
  "SVSO": {
    "airport": "Mayor Buenaventura Vivas Airport",
    "latitude": 7.56538,
    "longitude": -72.0351
  },
  "SVSA": {
    "airport": "Juan Vicente Gomez International Airport",
    "latitude": 7.84083,
    "longitude": -72.4397
  },
  "SVVL": {
    "airport": "Dr. Antonio Nicolas Briceno Airport",
    "latitude": 9.34048,
    "longitude": -70.5841
  },
  "SVMI": {
    "airport": "Simon Bolivar International Airport",
    "latitude": 10.6012,
    "longitude": -66.9912
  },
  "SVSP": {
    "airport": "Sub Teniente Nestor Arias Airport",
    "latitude": 10.2787,
    "longitude": -68.7552
  },
  "SVON": {
    "airport": "Oro Negro Airport",
    "latitude": 10.3307,
    "longitude": -71.3225
  },
  "SVCG": {
    "airport": "Casigua El Cubo Airport",
    "latitude": 8.75814,
    "longitude": -72.5363
  },
  "SVMC": {
    "airport": "La Chinita International Airport",
    "latitude": 10.5582,
    "longitude": -71.7279
  },
  "SVSZ": {
    "airport": "Miguel Urdaneta Fernandez Airport",
    "latitude": 8.97455,
    "longitude": -71.9433
  },
  "TUPJ": {
    "airport": "Terrance B. Lettsome International Airport",
    "latitude": 18.4448,
    "longitude": -64.543
  },
  "TUPA": {
    "airport": "Auguste George Airport",
    "latitude": 18.7272,
    "longitude": -64.3297
  },
  "TUPW": {
    "airport": "Virgin Gorda Airport",
    "latitude": 18.4464,
    "longitude": -64.4275
  },
  "TIST": {
    "airport": "Cyril E. King Airport",
    "latitude": 18.3373,
    "longitude": -64.9734
  },
  "TISX": {
    "airport": "Henry E. Rohlsen Airport",
    "latitude": 17.7019,
    "longitude": -64.7986
  },
  "VVCS": {
    "airport": "Con Dao Airport",
    "latitude": 8.73183,
    "longitude": 106.633
  },
  "VVVT": {
    "airport": "Vung Tau Airport",
    "latitude": 10.3725,
    "longitude": 107.095
  },
  "VVPC": {
    "airport": "Phu Cat Airport",
    "latitude": 13.955,
    "longitude": 109.042
  },
  "VVCM": {
    "airport": "Ca Mau Airport",
    "latitude": 9.17767,
    "longitude": 105.178
  },
  "VVCT": {
    "airport": "Can Tho International Airport",
    "latitude": 10.0851,
    "longitude": 105.712
  },
  "VVDN": {
    "airport": "Da Nang International Airport",
    "latitude": 16.0439,
    "longitude": 108.199
  },
  "VVBM": {
    "airport": "Buon Ma Thuot Airport",
    "latitude": 12.6683,
    "longitude": 108.12
  },
  "VVDB": {
    "airport": "Dien Bien Phu Airport",
    "latitude": 21.3975,
    "longitude": 103.008
  },
  "VVPK": {
    "airport": "Pleiku Airport",
    "latitude": 14.0045,
    "longitude": 108.017
  },
  "VVNB": {
    "airport": "Noi Bai International Airport",
    "latitude": 21.2212,
    "longitude": 105.807
  },
  "VVCI": {
    "airport": "Cat Bi International Airport",
    "latitude": 20.8194,
    "longitude": 106.725
  },
  "VVTS": {
    "airport": "Tan Son Nhat International Airport",
    "latitude": 10.8188,
    "longitude": 106.652
  },
  "VVCR": {
    "airport": "Cam Ranh International Airport",
    "latitude": 11.9982,
    "longitude": 109.219
  },
  "VVNT": {
    "airport": "Nha Trang Air Base",
    "latitude": 12.2275,
    "longitude": 109.192
  },
  "VVPQ": {
    "airport": "Phu Quoc International Airport",
    "latitude": 10.1698,
    "longitude": 103.993
  },
  "VVRG": {
    "airport": "Rach Gia Airport",
    "latitude": 9.95803,
    "longitude": 105.132
  },
  "VVDL": {
    "airport": "Lien Khuong Airport",
    "latitude": 11.75,
    "longitude": 108.367
  },
  "VVVH": {
    "airport": "Vinh International Airport",
    "latitude": 18.7376,
    "longitude": 105.671
  },
  "VVPR": {
    "airport": "Phan Rang Air Base",
    "latitude": 11.6335,
    "longitude": 108.952
  },
  "VVTH": {
    "airport": "Dong Tac Airport",
    "latitude": 13.0496,
    "longitude": 109.334
  },
  "VVDH": {
    "airport": "Dong Hoi Airport",
    "latitude": 17.515,
    "longitude": 106.591
  },
  "VVCA": {
    "airport": "Chu Lai International Airport",
    "latitude": 15.4033,
    "longitude": 108.706
  },
  "VVVD": {
    "airport": "Van Don International Airport",
    "latitude": 21.1178,
    "longitude": 107.414
  },
  "VVNS": {
    "airport": "Na San Airport",
    "latitude": 21.217,
    "longitude": 104.033
  },
  "VVTX": {
    "airport": "Tho Xuan Airport",
    "latitude": 19.9017,
    "longitude": 105.468
  },
  "VVPB": {
    "airport": "Phu Bai International Airport",
    "latitude": 16.4015,
    "longitude": 107.703
  },
  "NVSF": {
    "airport": "Craig Cove Airport",
    "latitude": -16.265,
    "longitude": 167.924
  },
  "NVSL": {
    "airport": "Malekoula Airport (Lamap Airport)",
    "latitude": -16.4611,
    "longitude": 167.829
  },
  "NVSP": {
    "airport": "Norsup Airport",
    "latitude": -16.0797,
    "longitude": 167.401
  },
  "NVSI": {
    "airport": "Paama Airport",
    "latitude": -16.439,
    "longitude": 168.257
  },
  "NVSX": {
    "airport": "South West Bay Airport",
    "latitude": -16.4864,
    "longitude": 167.447
  },
  "NVSU": {
    "airport": "Ulei Airport",
    "latitude": -16.3297,
    "longitude": 168.301
  },
  "NVSO": {
    "airport": "Lonorore Airport",
    "latitude": -15.8656,
    "longitude": 168.172
  },
  "NVSG": {
    "airport": "Longana Airport",
    "latitude": -15.3067,
    "longitude": 167.967
  },
  "NVSN": {
    "airport": "Maewo-Naone Airport",
    "latitude": -15,
    "longitude": 168.083
  },
  "NVSR": {
    "airport": "Redcliffe Airport",
    "latitude": -15.472,
    "longitude": 167.835
  },
  "NVSH": {
    "airport": "Sara Airport",
    "latitude": -15.4708,
    "longitude": 168.152
  },
  "NVSW": {
    "airport": "Walaha Airport",
    "latitude": -15.412,
    "longitude": 167.691
  },
  "NVSZ": {
    "airport": "Olpoi Airport (North West Santo Airport)",
    "latitude": -14.8817,
    "longitude": 166.558
  },
  "NVSS": {
    "airport": "Santo-Pekoa International Airport",
    "latitude": -15.505,
    "longitude": 167.22
  },
  "NVSE": {
    "airport": "Siwo Airport",
    "latitude": -17.0903,
    "longitude": 168.343
  },
  "NVSM": {
    "airport": "Lamen Bay Airport",
    "latitude": -16.5842,
    "longitude": 168.159
  },
  "NVST": {
    "airport": "Tongoa Airport",
    "latitude": -16.8911,
    "longitude": 168.551
  },
  "NVVQ": {
    "airport": "Quoin Hill Airfield",
    "latitude": -17.54,
    "longitude": 168.442
  },
  "NVVV": {
    "airport": "Bauerfield International Airport",
    "latitude": -17.6993,
    "longitude": 168.32
  },
  "NVSV": {
    "airport": "Valesdir Airport",
    "latitude": -16.7961,
    "longitude": 168.177
  },
  "NVVA": {
    "airport": "Anatom Airport",
    "latitude": -20.2492,
    "longitude": 169.771
  },
  "NVVB": {
    "airport": "Aniwa Airport",
    "latitude": -19.2346,
    "longitude": 169.601
  },
  "NVVD": {
    "airport": "Dillon's Bay Airport",
    "latitude": -18.7694,
    "longitude": 169.001
  },
  "NVVF": {
    "airport": "Futuna Airport",
    "latitude": -19.5164,
    "longitude": 170.232
  },
  "NVVI": {
    "airport": "Ipota Airport",
    "latitude": -18.8564,
    "longitude": 169.283
  },
  "NVVW": {
    "airport": "Whitegrass Airport",
    "latitude": -19.4551,
    "longitude": 169.224
  },
  "NVSA": {
    "airport": "Mota Lava Airport",
    "latitude": -13.666,
    "longitude": 167.712
  },
  "NVSC": {
    "airport": "Vanua Lava Airport",
    "latitude": -13.8517,
    "longitude": 167.537
  },
  "NVSD": {
    "airport": "Torres Airport",
    "latitude": -13.328,
    "longitude": 166.638
  },
  "NVSQ": {
    "airport": "Gaua Airport",
    "latitude": -14.2181,
    "longitude": 167.587
  },
  "NLWF": {
    "airport": "Pointe Vele Airport",
    "latitude": -14.3114,
    "longitude": -178.066
  },
  "NLWW": {
    "airport": "Hihifo Airport",
    "latitude": -13.2383,
    "longitude": -176.199
  },
  "NSMA": {
    "airport": "Maota Airport",
    "latitude": -13.7423,
    "longitude": -172.258
  },
  "NSAU": {
    "airport": "Asau Airport",
    "latitude": -13.5051,
    "longitude": -172.628
  },
  "NSFA": {
    "airport": "Faleolo International Airport",
    "latitude": -13.83,
    "longitude": -172.008
  },
  "NSFI": {
    "airport": "Fagali'i Airport",
    "latitude": -13.8487,
    "longitude": -171.74
  },
  "BKPR": {
    "airport": "Pristina Adem Jashari Airport",
    "latitude": 42.5745,
    "longitude": 21.0294
  },
  "OYMS": {
    "airport": "Mukeiras Airport",
    "latitude": 13.9368,
    "longitude": 45.657
  },
  "ODAL": {
    "airport": "Dhala Airport",
    "latitude": 13.6858,
    "longitude": 44.1389
  },
  "OYAA": {
    "airport": "Aden International Airport",
    "latitude": 12.8295,
    "longitude": 45.0288
  },
  "OYBI": {
    "airport": "Al Bayda Airport",
    "latitude": 14.106,
    "longitude": 45.4411
  },
  "OYHD": {
    "airport": "Hodeida International Airport",
    "latitude": 14.753,
    "longitude": 42.9763
  },
  "OYKM": {
    "airport": "Kamaran Airport",
    "latitude": 15.3633,
    "longitude": 42.605
  },
  "OYGD": {
    "airport": "Al Ghaydah Airport",
    "latitude": 16.1917,
    "longitude": 52.175
  },
  "OYQN": {
    "airport": "Qishn Airport",
    "latitude": 15.417,
    "longitude": 51.683
  },
  "OYSY": {
    "airport": "Sayun Airport",
    "latitude": 15.9661,
    "longitude": 48.7883
  },
  "OYRN": {
    "airport": "Riyan International Airport",
    "latitude": 14.6626,
    "longitude": 49.375
  },
  "OYSQ": {
    "airport": "Socotra Airport",
    "latitude": 12.6307,
    "longitude": 53.9058
  },
  "ODAS": {
    "airport": "Abbs Airport",
    "latitude": 16.0108,
    "longitude": 43.1767
  },
  "OYMB": {
    "airport": "Marib Airport",
    "latitude": 15.4692,
    "longitude": 45.3269
  },
  "OYSH": {
    "airport": "Saadah Airport",
    "latitude": 16.967,
    "longitude": 43.733
  },
  "OYSN": {
    "airport": "Sana'a International Airport",
    "latitude": 15.4764,
    "longitude": 44.2197
  },
  "OYAT": {
    "airport": "Ataq Airport",
    "latitude": 14.5513,
    "longitude": 46.8262
  },
  "OYBN": {
    "airport": "Beihan Airport",
    "latitude": 14.782,
    "longitude": 45.7201
  },
  "OYTZ": {
    "airport": "Taiz International Airport",
    "latitude": 13.686,
    "longitude": 44.1391
  },
  "FMCZ": {
    "airport": "Dzaoudzi-Pamandzi International Airport",
    "latitude": -12.8047,
    "longitude": 45.2811
  },
  "FAPA": {
    "airport": "Port Alfred Airport",
    "latitude": -33.5542,
    "longitude": 26.8777
  },
  "FABE": {
    "airport": "Bhisho Airport",
    "latitude": -32.8971,
    "longitude": 27.2791
  },
  "FACD": {
    "airport": "Cradock Airport",
    "latitude": -32.1567,
    "longitude": 25.6456
  },
  "FAEL": {
    "airport": "East London Airport",
    "latitude": -33.0356,
    "longitude": 27.8259
  },
  "FAPJ": {
    "airport": "Port St. Johns Airport",
    "latitude": -31.6059,
    "longitude": 29.5198
  },
  "FAMW": {
    "airport": "Wild Coast Sun Airport",
    "latitude": -31.25,
    "longitude": 29.833
  },
  "FAPE": {
    "airport": "Port Elizabeth Airport",
    "latitude": -33.9849,
    "longitude": 25.6173
  },
  "FAUT": {
    "airport": "Mthatha Airport",
    "latitude": -31.5464,
    "longitude": 28.6734
  },
  "FAQT": {
    "airport": "Queenstown Airport",
    "latitude": -31.9202,
    "longitude": 26.8822
  },
  "FABL": {
    "airport": "Bloemfontein Airport",
    "latitude": -29.0927,
    "longitude": 26.3024
  },
  "FAFB": {
    "airport": "Ficksburg Airport",
    "latitude": -28.8231,
    "longitude": 27.9089
  },
  "FAHR": {
    "airport": "Harrismith Airport",
    "latitude": -28.2351,
    "longitude": 29.1062
  },
  "FATN": {
    "airport": "Thaba Nchu Airport",
    "latitude": -29.3178,
    "longitude": 26.8228
  },
  "FAWM": {
    "airport": "Welkom Airport",
    "latitude": -27.9968,
    "longitude": 26.6633
  },
  "FAGC": {
    "airport": "Grand Central Airport",
    "latitude": -25.9863,
    "longitude": 28.1401
  },
  "FALA": {
    "airport": "Lanseria International Airport",
    "latitude": -25.9385,
    "longitude": 27.9261
  },
  "FAOR": {
    "airport": "O. R. Tambo International Airport",
    "latitude": -26.1392,
    "longitude": 28.246
  },
  "FAWB": {
    "airport": "Wonderboom Airport",
    "latitude": -25.6539,
    "longitude": 28.2242
  },
  "FAGM": {
    "airport": "Rand Airport",
    "latitude": -26.2425,
    "longitude": 28.1512
  },
  "FAWK": {
    "airport": "Air Force Base Waterkloof",
    "latitude": -25.83,
    "longitude": 28.2225
  },
  "FADK": {
    "airport": "Dukuduku Airport",
    "latitude": -28.3684,
    "longitude": 32.2481
  },
  "FALE": {
    "airport": "King Shaka International Airport",
    "latitude": -29.6144,
    "longitude": 31.1197
  },
  "FAEM": {
    "airport": "Empangeni Airport",
    "latitude": -28.72,
    "longitude": 31.89
  },
  "FAHL": {
    "airport": "Hluhluwe Airport",
    "latitude": -28.0166,
    "longitude": 32.2752
  },
  "FALY": {
    "airport": "Ladysmith Airport",
    "latitude": -28.5817,
    "longitude": 29.7497
  },
  "FAMG": {
    "airport": "Margate Airport",
    "latitude": -30.8574,
    "longitude": 30.343
  },
  "FAMU": {
    "airport": "Mkuze Airport",
    "latitude": -27.6261,
    "longitude": 32.0443
  },
  "FANC": {
    "airport": "Newcastle Airport",
    "latitude": -27.7706,
    "longitude": 29.9769
  },
  "FAPM": {
    "airport": "Pietermaritzburg Airport",
    "latitude": -29.649,
    "longitude": 30.3987
  },
  "FADQ": {
    "airport": "Zulu Inyala Airport",
    "latitude": -27.8494,
    "longitude": 32.3097
  },
  "FARB": {
    "airport": "Richards Bay Airport",
    "latitude": -28.741,
    "longitude": 32.0921
  },
  "FAUL": {
    "airport": "Ulundi Airport",
    "latitude": -28.3206,
    "longitude": 31.4165
  },
  "FAVG": {
    "airport": "Virginia Airport",
    "latitude": -29.7706,
    "longitude": 31.0584
  },
  "FAVY": {
    "airport": "Vryheid Airport",
    "latitude": -27.7869,
    "longitude": 30.7964
  },
  "FAAL": {
    "airport": "Alldays Airport",
    "latitude": -22.679,
    "longitude": 29.0555
  },
  "FAER": {
    "airport": "Ellisras Airport",
    "latitude": -23.7267,
    "longitude": 27.6883
  },
  "FAGI": {
    "airport": "Giyani Airport",
    "latitude": -23.2833,
    "longitude": 30.65
  },
  "FAHS": {
    "airport": "Air Force Base Hoedspruit",
    "latitude": -24.3686,
    "longitude": 31.0487
  },
  "FALO": {
    "airport": "Louis Trichardt Airport",
    "latitude": -23.0619,
    "longitude": 29.8647
  },
  "FALD": {
    "airport": "Londolozi Airport",
    "latitude": -24.7478,
    "longitude": 31.4743
  },
  "FATZ": {
    "airport": "Tzaneen Airport (Letaba Airport)",
    "latitude": -23.8244,
    "longitude": 30.3293
  },
  "FAMS": {
    "airport": "Messina Airport",
    "latitude": -22.356,
    "longitude": 29.9862
  },
  "FAPH": {
    "airport": "Hendrik Van Eck Airport",
    "latitude": -23.9372,
    "longitude": 31.1554
  },
  "FAPP": {
    "airport": "Polokwane International Airport",
    "latitude": -23.8453,
    "longitude": 29.4586
  },
  "FATH": {
    "airport": "P.R. Mphephu Airport",
    "latitude": -23.0769,
    "longitude": 30.3836
  },
  "FAUS": {
    "airport": "Ulusaba Airstrip",
    "latitude": -24.7854,
    "longitude": 31.3549
  },
  "FAMD": {
    "airport": "Mala Mala Airport",
    "latitude": -24.8181,
    "longitude": 31.5446
  },
  "FAHW": {
    "airport": "Hazyview Airport",
    "latitude": -25.0501,
    "longitude": 31.1319
  },
  "FAKP": {
    "airport": "Komatipoort Airport",
    "latitude": -25.4403,
    "longitude": 31.93
  },
  "FAMN": {
    "airport": "Malelane Airport",
    "latitude": -25.43,
    "longitude": 31.5767
  },
  "FAKN": {
    "airport": "Kruger Mpumalanga International Airport",
    "latitude": -25.3832,
    "longitude": 31.1056
  },
  "FANG": {
    "airport": "Ngala Airfield",
    "latitude": -24.389,
    "longitude": 31.326
  },
  "FANS": {
    "airport": "Nelspruit Airport",
    "latitude": -25.5,
    "longitude": 30.9138
  },
  "FASZ": {
    "airport": "Skukuza Airport",
    "latitude": -24.9609,
    "longitude": 31.5887
  },
  "FASC": {
    "airport": "Secunda Airport",
    "latitude": -26.5241,
    "longitude": 29.1701
  },
  "FAKD": {
    "airport": "Klerksdorp Airport (P.C. Pelser Airport)",
    "latitude": -26.8711,
    "longitude": 26.718
  },
  "FAMM": {
    "airport": "Mahikeng Airport (Mmabatho Airport)",
    "latitude": -25.7984,
    "longitude": 25.548
  },
  "FAPN": {
    "airport": "Pilanesberg International Airport",
    "latitude": -25.3338,
    "longitude": 27.1734
  },
  "FAPS": {
    "airport": "Potchefstroom Airport",
    "latitude": -26.671,
    "longitude": 27.0819
  },
  "FARI": {
    "airport": "Reivilo Airport",
    "latitude": -27.5472,
    "longitude": 24.1725
  },
  "FAVB": {
    "airport": "Vryburg Airport",
    "latitude": -26.9824,
    "longitude": 24.7288
  },
  "FAAG": {
    "airport": "Aggeneys Airport",
    "latitude": -29.2818,
    "longitude": 18.8139
  },
  "FAAB": {
    "airport": "Alexander Bay Airport",
    "latitude": -28.575,
    "longitude": 16.5333
  },
  "FAKM": {
    "airport": "Kimberley Airport",
    "latitude": -28.8028,
    "longitude": 24.7652
  },
  "FAKZ": {
    "airport": "Kleinzee Airport",
    "latitude": -29.6884,
    "longitude": 17.094
  },
  "FAKU": {
    "airport": "Johan Pienaar Airport",
    "latitude": -27.4567,
    "longitude": 23.4114
  },
  "FALC": {
    "airport": "Finsch Mine Airport",
    "latitude": -28.3601,
    "longitude": 23.4391
  },
  "FAPK": {
    "airport": "Prieska Airport",
    "latitude": -29.6836,
    "longitude": 22.7706
  },
  "FASB": {
    "airport": "Springbok Airport",
    "latitude": -29.6893,
    "longitude": 17.9396
  },
  "FASS": {
    "airport": "Sishen Airport",
    "latitude": -27.6486,
    "longitude": 22.9993
  },
  "FAUP": {
    "airport": "Upington Airport",
    "latitude": -28.3991,
    "longitude": 21.2602
  },
  "FACT": {
    "airport": "Cape Town International Airport",
    "latitude": -33.9648,
    "longitude": 18.6017
  },
  "FAGG": {
    "airport": "George Airport",
    "latitude": -34.0056,
    "longitude": 22.3789
  },
  "FAMO": {
    "airport": "Mossel Bay Airport",
    "latitude": -34.1583,
    "longitude": 22.0586
  },
  "FAOH": {
    "airport": "Oudtshoorn Airport",
    "latitude": -33.607,
    "longitude": 22.189
  },
  "FAOB": {
    "airport": "Air Force Base Overberg",
    "latitude": -34.5549,
    "longitude": 20.2507
  },
  "FAPG": {
    "airport": "Plettenberg Bay Airport",
    "latitude": -34.0882,
    "longitude": 23.3287
  },
  "FARS": {
    "airport": "Robertson Airfield",
    "latitude": -33.8122,
    "longitude": 19.9028
  },
  "FALW": {
    "airport": "Air Force Base Langebaanweg",
    "latitude": -32.9689,
    "longitude": 18.1603
  },
  "FAVR": {
    "airport": "Vredendal Airport",
    "latitude": -31.641,
    "longitude": 18.5448
  },
  "FLSO": {
    "airport": "Southdowns Airport",
    "latitude": -12.9005,
    "longitude": 28.1499
  },
  "FLND": {
    "airport": "Simon Mwansa Kapwepwe International Airport",
    "latitude": -12.9981,
    "longitude": 28.6649
  },
  "FLCP": {
    "airport": "Chipata Airport",
    "latitude": -13.5583,
    "longitude": 32.5872
  },
  "FLMF": {
    "airport": "Mfuwe Airport",
    "latitude": -13.2589,
    "longitude": 31.9366
  },
  "FLMA": {
    "airport": "Mansa Airport",
    "latitude": -11.137,
    "longitude": 28.8726
  },
  "FLLS": {
    "airport": "Kenneth Kaunda International Airport",
    "latitude": -15.3308,
    "longitude": 28.4526
  },
  "FLZB": {
    "airport": "Zambezi Airport",
    "latitude": -13.537,
    "longitude": 23.1081
  },
  "FLSW": {
    "airport": "Solwezi Airport",
    "latitude": -12.1737,
    "longitude": 26.3651
  },
  "FLKS": {
    "airport": "Kasama Airport",
    "latitude": -10.2167,
    "longitude": 31.1333
  },
  "FLBA": {
    "airport": "Mbala Airport",
    "latitude": -8.85917,
    "longitude": 31.3364
  },
  "FLKY": {
    "airport": "Kasaba Bay Airport",
    "latitude": -8.525,
    "longitude": 30.663
  },
  "FLLI": {
    "airport": "Harry Mwanga Nkumbula International Airport",
    "latitude": -17.8218,
    "longitude": 25.8227
  },
  "FLNA": {
    "airport": "Ngoma Airport",
    "latitude": -15.9658,
    "longitude": 25.9333
  },
  "FLKL": {
    "airport": "Kalabo Airport",
    "latitude": -14.9983,
    "longitude": 22.6454
  },
  "FLKO": {
    "airport": "Kaoma Airport",
    "latitude": -14.8,
    "longitude": 24.783
  },
  "FLLK": {
    "airport": "Lukulu Airport",
    "latitude": -14.3748,
    "longitude": 23.2495
  },
  "FLMG": {
    "airport": "Mongu Airport",
    "latitude": -15.2545,
    "longitude": 23.1623
  },
  "FLSS": {
    "airport": "Sesheke Airport",
    "latitude": -17.4763,
    "longitude": 24.3047
  },
  "FLSN": {
    "airport": "Senanga Airport",
    "latitude": -16.113,
    "longitude": 23.2982
  },
  "FVBU": {
    "airport": "Joshua Mqabuko Nkomo International Airport",
    "latitude": -20.0174,
    "longitude": 28.6179
  },
  "FVHA": {
    "airport": "Robert Gabriel Mugabe International Airport",
    "latitude": -17.9318,
    "longitude": 31.0928
  },
  "FVCH": {
    "airport": "Chipinge Airport",
    "latitude": -20.2067,
    "longitude": 32.6283
  },
  "FVMU": {
    "airport": "Mutare Airport",
    "latitude": -18.9975,
    "longitude": 32.6272
  },
  "FVKB": {
    "airport": "Kariba Airport",
    "latitude": -16.5198,
    "longitude": 28.885
  },
  "FVCZ": {
    "airport": "Buffalo Range Airport",
    "latitude": -21.0081,
    "longitude": 31.5786
  },
  "FVMH": {
    "airport": "Mahenye Airport",
    "latitude": -21.231,
    "longitude": 32.3336
  },
  "FVMV": {
    "airport": "Masvingo Airport",
    "latitude": -20.0553,
    "longitude": 30.8591
  },
  "FVWN": {
    "airport": "Hwange National Park Airport",
    "latitude": -18.6299,
    "longitude": 27.021
  },
  "FVFA": {
    "airport": "Victoria Falls Airport",
    "latitude": -18.0959,
    "longitude": 25.839
  },
  "FVWT": {
    "airport": "Hwange Town Airport",
    "latitude": -18.363,
    "longitude": 26.5198
  },
  "FVTL": {
    "airport": "Thornhill Air Base",
    "latitude": -19.4364,
    "longitude": 29.8619
  }
};