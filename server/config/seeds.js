const db = require('./connection');
const { Chat } = require('../models');

db.once('open', async () => {
  await Chat.deleteMany();

  await Chat.insertMany([
    {
      "city": {
        "name": "Vatican City"
      }
    },
    {
      "city": {
        "name": "San Marino"
      }
    },
    {
      "city": {
        "name": "Vaduz"
      }
    },
    {
      "city": {
        "name": "Lobamba"
      }
    },
    {
      "city": {
        "name": "Luxembourg"
      }
    },
    {
      "city": {
        "name": "Palikir"
      }
    },
    {
      "city": {
        "name": "Majuro"
      }
    },
    {
      "city": {
        "name": "Funafuti"
      }
    },
    {
      "city": {
        "name": "Melekeok"
      }
    },
    {
      "city": {
        "name": "Bir Lehlou"
      }
    },
    {
      "city": {
        "name": "Monaco"
      }
    },
    {
      "city": {
        "name": "Tarawa"
      }
    },
    {
      "city": {
        "name": "Moroni"
      }
    },
    {
      "city": {
        "name": "Andorra"
      }
    },
    {
      "city": {
        "name": "Port-of-Spain"
      }
    },
    {
      "city": {
        "name": "Kigali"
      }
    },
    {
      "city": {
        "name": "Mbabane"
      }
    },
    {
      "city": {
        "name": "Juba"
      }
    },
    {
      "city": {
        "name": "The Hague"
      }
    },
    {
      "city": {
        "name": "Ljubljana"
      }
    },
    {
      "city": {
        "name": "Bratislava"
      }
    },
    {
      "city": {
        "name": "Doha"
      }
    },
    {
      "city": {
        "name": "Podgorica"
      }
    },
    {
      "city": {
        "name": "Sri Jayawardenepura Kotte"
      }
    },
    {
      "city": {
        "name": "Baguio"
      }
    },
    {
      "city": {
        "name": "Dodoma"
      }
    },
    {
      "city": {
        "name": "Bern"
      }
    },
    {
      "city": {
        "name": "Laayoune"
      }
    },
    {
      "city": {
        "name": "Pristina"
      }
    },
    {
      "city": {
        "name": "Roseau"
      }
    },
    {
      "city": {
        "name": "Djibouti"
      }
    },
    {
      "city": {
        "name": "Putrajaya"
      }
    },
    {
      "city": {
        "name": "Kyoto"
      }
    },
    {
      "city": {
        "name": "Banjul"
      }
    },
    {
      "city": {
        "name": "Skopje"
      }
    },
    {
      "city": {
        "name": "Bridgetown"
      }
    },
    {
      "city": {
        "name": "Porto-Novo"
      }
    },
    {
      "city": {
        "name": "Bujumbura"
      }
    },
    {
      "city": {
        "name": "Kingstown"
      }
    },
    {
      "city": {
        "name": "Castries"
      }
    },
    {
      "city": {
        "name": "Basseterre"
      }
    },
    {
      "city": {
        "name": "Port Louis"
      }
    },
    {
      "city": {
        "name": "Saint George's"
      }
    },
    {
      "city": {
        "name": "Manama"
      }
    },
    {
      "city": {
        "name": "Saint John's"
      }
    },
    {
      "city": {
        "name": "Montevideo"
      }
    },
    {
      "city": {
        "name": "Lomé"
      }
    },
    {
      "city": {
        "name": "Tunis"
      }
    },
    {
      "city": {
        "name": "Abu Dhabi"
      }
    },
    {
      "city": {
        "name": "Ashgabat"
      }
    },
    {
      "city": {
        "name": "Lusaka"
      }
    },
    {
      "city": {
        "name": "Harare"
      }
    },
    {
      "city": {
        "name": "Dili"
      }
    },
    {
      "city": {
        "name": "Port Vila"
      }
    },
    {
      "city": {
        "name": "Tegucigalpa"
      }
    },
    {
      "city": {
        "name": "Georgetown"
      }
    },
    {
      "city": {
        "name": "Reykjavík"
      }
    },
    {
      "city": {
        "name": "Port-au-Prince"
      }
    },
    {
      "city": {
        "name": "Kampala"
      }
    },
    {
      "city": {
        "name": "Paramaribo"
      }
    },
    {
      "city": {
        "name": "Niamey"
      }
    },
    {
      "city": {
        "name": "Dushanbe"
      }
    },
    {
      "city": {
        "name": "Asunción"
      }
    },
    {
      "city": {
        "name": "Managua"
      }
    },
    {
      "city": {
        "name": "Freetown"
      }
    },
    {
      "city": {
        "name": "Islamabad"
      }
    },
    {
      "city": {
        "name": "Kathmandu"
      }
    },
    {
      "city": {
        "name": "Bloemfontein"
      }
    },
    {
      "city": {
        "name": "Pretoria"
      }
    },
    {
      "city": {
        "name": "Port Moresby"
      }
    },
    {
      "city": {
        "name": "Honiara"
      }
    },
    {
      "city": {
        "name": "Panama City"
      }
    },
    {
      "city": {
        "name": "Rabat"
      }
    },
    {
      "city": {
        "name": "Chișinău"
      }
    },
    {
      "city": {
        "name": "Maputo"
      }
    },
    {
      "city": {
        "name": "Mogadishu"
      }
    },
    {
      "city": {
        "name": "Muscat"
      }
    },
    {
      "city": {
        "name": "Colombo"
      }
    },
    {
      "city": {
        "name": "Ulaanbaatar"
      }
    },
    {
      "city": {
        "name": "Windhoek"
      }
    },
    {
      "city": {
        "name": "Abuja"
      }
    },
    {
      "city": {
        "name": "Bissau"
      }
    },
    {
      "city": {
        "name": "Amman"
      }
    },
    {
      "city": {
        "name": "Vilnius"
      }
    },
    {
      "city": {
        "name": "Riga"
      }
    },
    {
      "city": {
        "name": "Bishkek"
      }
    },
    {
      "city": {
        "name": "Maseru"
      }
    },
    {
      "city": {
        "name": "Antananarivo"
      }
    },
    {
      "city": {
        "name": "Quito"
      }
    },
    {
      "city": {
        "name": "San José"
      }
    },
    {
      "city": {
        "name": "San Salvador"
      }
    },
    {
      "city": {
        "name": "Kingston"
      }
    },
    {
      "city": {
        "name": "N'Djamena"
      }
    },
    {
      "city": {
        "name": "Malabo"
      }
    },
    {
      "city": {
        "name": "Asmara"
      }
    },
    {
      "city": {
        "name": "Zagreb"
      }
    },
    {
      "city": {
        "name": "Tallinn"
      }
    },
    {
      "city": {
        "name": "Lilongwe"
      }
    },
    {
      "city": {
        "name": "Guatemala City"
      }
    },
    {
      "city": {
        "name": "Libreville"
      }
    },
    {
      "city": {
        "name": "Suva"
      }
    },
    {
      "city": {
        "name": "Valparaíso"
      }
    },
    {
      "city": {
        "name": "Nouakchott"
      }
    },
    {
      "city": {
        "name": "Bamako"
      }
    },
    {
      "city": {
        "name": "Beirut"
      }
    },
    {
      "city": {
        "name": "Tbilisi"
      }
    },
    {
      "city": {
        "name": "Nur-Sultan"
      }
    },
    {
      "city": {
        "name": "Vientiane"
      }
    },
    {
      "city": {
        "name": "Brazzaville"
      }
    },
    {
      "city": {
        "name": "Conakry"
      }
    },
    {
      "city": {
        "name": "Yamoussoukro"
      }
    },
    {
      "city": {
        "name": "Ottawa"
      }
    },
    {
      "city": {
        "name": "Belgrade"
      }
    },
    {
      "city": {
        "name": "Bandar Seri Begawan"
      }
    },
    {
      "city": {
        "name": "Sucre"
      }
    },
    {
      "city": {
        "name": "Belmopan"
      }
    },
    {
      "city": {
        "name": "Bangui"
      }
    },
    {
      "city": {
        "name": "Yaoundé"
      }
    },
    {
      "city": {
        "name": "Tirana"
      }
    },
    {
      "city": {
        "name": "Yerevan"
      }
    },
    {
      "city": {
        "name": "Baku"
      }
    },
    {
      "city": {
        "name": "Phnom Penh"
      }
    },
    {
      "city": {
        "name": "La Paz"
      }
    },
    {
      "city": {
        "name": "Cotonou"
      }
    },
    {
      "city": {
        "name": "Sofia"
      }
    },
    {
      "city": {
        "name": "Minsk"
      }
    },
    {
      "city": {
        "name": "Thimphu"
      }
    },
    {
      "city": {
        "name": "Gaborone"
      }
    },
    {
      "city": {
        "name": "Canberra"
      }
    },
    {
      "city": {
        "name": "Ouagadougou"
      }
    },
    {
      "city": {
        "name": "Sarajevo"
      }
    },
    {
      "city": {
        "name": "Naypyidaw"
      }
    },
    {
      "city": {
        "name": "Nuku'alofa"
      }
    },
    {
      "city": {
        "name": "Hargeisa"
      }
    },
    {
      "city": {
        "name": "Victoria"
      }
    },
    {
      "city": {
        "name": "São Tomé"
      }
    },
    {
      "city": {
        "name": "Apia"
      }
    },
    {
      "city": {
        "name": "Valletta"
      }
    },
    {
      "city": {
        "name": "Malé"
      }
    },
    {
      "city": {
        "name": "Jerusalem"
      }
    },
    {
      "city": {
        "name": "Praia"
      }
    },
    {
      "city": {
        "name": "Nassau"
      }
    },
    {
      "city": {
        "name": "Nicosia"
      }
    },
    {
      "city": {
        "name": "Wellington"
      }
    },
    {
      "city": {
        "name": "Hanoi"
      }
    },
    {
      "city": {
        "name": "Ankara"
      }
    },
    {
      "city": {
        "name": "Budapest"
      }
    },
    {
      "city": {
        "name": "Sanaa"
      }
    },
    {
      "city": {
        "name": "Bucharest"
      }
    },
    {
      "city": {
        "name": "Damascus"
      }
    },
    {
      "city": {
        "name": "Lisbon"
      }
    },
    {
      "city": {
        "name": "Khartoum"
      }
    },
    {
      "city": {
        "name": "Oslo"
      }
    },
    {
      "city": {
        "name": "Warsaw"
      }
    },
    {
      "city": {
        "name": "Pyongyang"
      }
    },
    {
      "city": {
        "name": "Dar es Salaam"
      }
    },
    {
      "city": {
        "name": "Dublin"
      }
    },
    {
      "city": {
        "name": "Monrovia"
      }
    },
    {
      "city": {
        "name": "Kuala Lumpur"
      }
    },
    {
      "city": {
        "name": "Havana"
      }
    },
    {
      "city": {
        "name": "Prague"
      }
    },
    {
      "city": {
        "name": "Kuwait City"
      }
    },
    {
      "city": {
        "name": "Santo Domingo"
      }
    },
    {
      "city": {
        "name": "Accra"
      }
    },
    {
      "city": {
        "name": "Tripoli"
      }
    },
    {
      "city": {
        "name": "Tel Aviv"
      }
    },
    {
      "city": {
        "name": "Helsinki"
      }
    },
    {
      "city": {
        "name": "København"
      }
    },
    {
      "city": {
        "name": "Abidjan"
      }
    },
    {
      "city": {
        "name": "Brasília"
      }
    },
    {
      "city": {
        "name": "Brussels"
      }
    },
    {
      "city": {
        "name": "Dhaka"
      }
    },
    {
      "city": {
        "name": "Luanda"
      }
    },
    {
      "city": {
        "name": "Algiers"
      }
    },
    {
      "city": {
        "name": "Yangon"
      }
    },
    {
      "city": {
        "name": "San Francisco"
      }
    },
    {
      "city": {
        "name": "Denver"
      }
    },
    {
      "city": {
        "name": "Houston"
      }
    },
    {
      "city": {
        "name": "Miami"
      }
    },
    {
      "city": {
        "name": "Atlanta"
      }
    },
    {
      "city": {
        "name": "Chicago"
      }
    },
    {
      "city": {
        "name": "Caracas"
      }
    },
    {
      "city": {
        "name": "Kyiv"
      }
    },
    {
      "city": {
        "name": "Dubai"
      }
    },
    {
      "city": {
        "name": "Tashkent"
      }
    },
    {
      "city": {
        "name": "Madrid"
      }
    },
    {
      "city": {
        "name": "Geneva"
      }
    },
    {
      "city": {
        "name": "Stockholm"
      }
    },
    {
      "city": {
        "name": "Bangkok"
      }
    },
    {
      "city": {
        "name": "Lima"
      }
    },
    {
      "city": {
        "name": "Dakar"
      }
    },
    {
      "city": {
        "name": "Johannesburg"
      }
    },
    {
      "city": {
        "name": "Amsterdam"
      }
    },
    {
      "city": {
        "name": "Casablanca"
      }
    },
    {
      "city": {
        "name": "Seoul"
      }
    },
    {
      "city": {
        "name": "Manila"
      }
    },
    {
      "city": {
        "name": "Monterrey"
      }
    },
    {
      "city": {
        "name": "Berlin"
      }
    },
    {
      "city": {
        "name": "Ürümqi"
      }
    },
    {
      "city": {
        "name": "Chengdu"
      }
    },
    {
      "city": {
        "name": "Ōsaka"
      }
    },
    {
      "city": {
        "name": "Kinshasa"
      }
    },
    {
      "city": {
        "name": "New Delhi"
      }
    },
    {
      "city": {
        "name": "Bengaluru"
      }
    },
    {
      "city": {
        "name": "Athens"
      }
    },
    {
      "city": {
        "name": "Baghdad"
      }
    },
    {
      "city": {
        "name": "Addis Ababa"
      }
    },
    {
      "city": {
        "name": "Tehran"
      }
    },
    {
      "city": {
        "name": "Vancouver"
      }
    },
    {
      "city": {
        "name": "Toronto"
      }
    },
    {
      "city": {
        "name": "Buenos Aires"
      }
    },
    {
      "city": {
        "name": "Kabul"
      }
    },
    {
      "city": {
        "name": "Vienna"
      }
    },
    {
      "city": {
        "name": "Melbourne"
      }
    },
    {
      "city": {
        "name": "Taipei"
      }
    },
    {
      "city": {
        "name": "Auckland"
      }
    },
    {
      "city": {
        "name": "Los Angeles"
      }
    },
    {
      "city": {
        "name": "Washington,  D.C."
      }
    },
    {
      "city": {
        "name": "New York"
      }
    },
    {
      "city": {
        "name": "London"
      }
    },
    {
      "city": {
        "name": "Istanbul"
      }
    },
    {
      "city": {
        "name": "Riyadh"
      }
    },
    {
      "city": {
        "name": "Cape Town"
      }
    },
    {
      "city": {
        "name": "Moscow"
      }
    },
    {
      "city": {
        "name": "Mexico City"
      }
    },
    {
      "city": {
        "name": "Lagos"
      }
    },
    {
      "city": {
        "name": "Rome"
      }
    },
    {
      "city": {
        "name": "Beijing"
      }
    },
    {
      "city": {
        "name": "Nairobi"
      }
    },
    {
      "city": {
        "name": "Jakarta"
      }
    },
    {
      "city": {
        "name": "Bogota"
      }
    },
    {
      "city": {
        "name": "Cairo"
      }
    },
    {
      "city": {
        "name": "Shanghai"
      }
    },
    {
      "city": {
        "name": "Tokyo"
      }
    },
    {
      "city": {
        "name": "Mumbai"
      }
    },
    {
      "city": {
        "name": "Paris"
      }
    },
    {
      "city": {
        "name": "Santiago"
      }
    },
    {
      "city": {
        "name": "Kolkata"
      }
    },
    {
      "city": {
        "name": "Rio de Janeiro"
      }
    },
    {
      "city": {
        "name": "São Paulo"
      }
    },
    {
      "city": {
        "name": "Sydney"
      }
    },
    {
      "city": {
        "name": "Singapore"
      }
    },
    {
      "city": {
        "name": "Hong Kong"
      }
    }
  ]);

  console.log('Chats seeded');

  process.exit();
});
