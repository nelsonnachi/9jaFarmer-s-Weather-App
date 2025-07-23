import {
  House,
  LandPlot,
  Globe,
  Locate ,
  Newspaper,
} from 'lucide-react'

// for blogs 
import farmmobile from "../assets/farmmobile.png";
import farmsmile from "../assets/farmsmile.png";

// for allIcons
import cloud from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png";
import snow from "../assets/snow.png";
import clear from "../assets/clear.png";
import partlysunny from "../assets/partly-sunny.png";
import rain from "../assets/rain.png";


export const menuItems = [
  {
    id: 1,
    href: '/',
    icon: House,
    label: 'Home'
  },
  {
    id: 2,
    href: '/cities',
    icon: LandPlot ,
    label: 'Cities'
  },
  {
    id: 3,
    href: '/globalweather',
    icon: Globe,
    label: 'Global Weather'
  },
  {
    id: 4,
    href: '/map',
    icon: Locate,
    label: 'Map'
  },
  {
    id: 5,
    href: '/news',
    icon: Newspaper,
    label: 'News'
  }
]

export const nigeriaPlaces = [
  // States
  "Abuja", "Enugu", "Calabar", "Jos", "Abia", "Umuahia", "Adamawa", "Yola", "Akwa Ibom", "Uyo", "Anambra", "Awka", "Bauchi",  "Bayelsa", "Yenagoa", "Benue", "Makurdi", "Borno", "Maiduguri",
  "Cross River",  "Delta", "Asaba", "Ebonyi", "Abakaliki", "Edo", "Benin", "Ekiti", "Ado Ekiti", "Enugu", "Gombe", "Imo", "Owerri",
  "Jigawa", "Dutse", "Kaduna", "Kano", "Katsina", "Kebbi", "Birnin Kebbi", "Kogi", "Lokoja", "Kwara", "Ilorin", "Lagos", "Ikeja",
  "Nasarawa", "Lafia", "Niger", "Minna", "Ogun", "Abeokuta", "Ondo", "Akure", "Osun", "Osogbo", "Oyo", "Ibadan", "Plateau", "Jos", "Rivers", "Port Harcourt",
  "Sokoto", "Taraba", "Jalingo", "Yobe", "Damaturu", "Zamfara", "Gusau",

  // Major Cities
  "Lagos", "Kano", "Ibadan", "Abuja", "Port Harcourt", "Benin City", "Kaduna", "Maiduguri", "Zaria", "Aba", "Jos", "Ilorin", "Enugu", "Onitsha", "Warri",
  "Sokoto", "Oyo", "Abeokuta", "Akure", "Calabar", "Uyo", "Owerri", "Makurdi", "Minna", "Bauchi", "Yola", "Katsina", "Asaba", "Ife", "Ijebu-Ode", "Ilesa",
  "Gombe", "Jalingo", "Osogbo", "Ekiti", "Nnewi", "Ikorodu", "Ikeja", "Epe", "Badagry", "Shagamu", "Ikot Ekpene", "Awka", "Nsukka", "Gboko", "Sapele",
  "Bida", "Gusau", "Birnin Kebbi", "Damaturu", "Jimeta", "Mubi", "Kontagora",

  // LGAs (Full list continues from previous preview)
"Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa", "Ohafia", "Osisioma Ngwa", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South", "Umu Nneochi",
  "Demsa", "Fufore", "Ganye", "Girei", "Gombi", "Guyuk", "Hong", "Jada", "Lamurde", "Madagali", "Maiha", "Mayo-Belwa", "Michika", "Mubi North", "Mubi South", "Numan", "Shelleng", "Song", "Toungo", "Yola North", "Yola South",
  "Abak", "Eastern Obolo", "Eket", "Esit Eket", "Essien Udim", "Etim Ekpo", "Etinan", "Ibeno", "Ibesikpo Asutan", "Ibiono Ibom", "Ika", "Ikono", "Ikot Abasi", "Ikot Ekpene", "Ini", "Itu", "Mbo", "Mkpat Enin", "Nsit Atai", "Nsit Ibom", "Nsit Ubium", "Obot Akara", "Okobo", "Onna", "Oron", "Oruk Anam", "Udung Uko", "Ukanafun", "Uruan", "Urue Offong/Oruko", "Uyo",
  "Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi",
  "Alkaleri", "Bauchi", "Bogoro", "Damban", "Darazo", "Dass", "Gamawa", "Ganjuwa", "Giade", "Itas/Gadau", "Jama'are", "Katagum", "Kirfi", "Misau", "Ningi", "Shira", "Tafawa Balewa", "Toro", "Warji", "Zaki",
  "Brass", "Ekeremor", "Kolokuma/Opokuma", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa",
  "Ado", "Agatu", "Apa", "Buruku", "Gboko", "Guma", "Gwer East", "Gwer West", "Katsina-Ala", "Konshisha", "Kwande", "Logo", "Makurdi", "Obi", "Ogbadibo", "Ohimini", "Oju", "Okpokwu", "Otukpo", "Tarka", "Ukum", "Ushongo", "Vandeikya",
  "Abadam", "Askira/Uba", "Bama", "Bayo", "Biu", "Chibok", "Damboa", "Dikwa", "Gubio", "Guzamala", "Gwoza", "Hawul", "Jere", "Kaga", "Kala/Balge", "Konduga", "Kukawa", "Kwaya Kusar", "Mafa", "Magumeri", "Maiduguri", "Marte", "Mobbar", "Monguno", "Ngala", "Nganzai", "Shani",
  "Abi", "Akamkpa", "Akpabuyo", "Bakassi", "Bekwarra", "Biase", "Boki", "Calabar Municipal", "Calabar South", "Etung", "Ikom", "Obanliku", "Obubra", "Obudu", "Odukpani", "Ogoja", "Yakurr", "Yala",
  "Aniocha North", "Aniocha South", "Bomadi", "Burutu", "Ethiope East", "Ethiope West", "Ika North East", "Ika South", "Isoko North", "Isoko South", "Ndokwa East", "Ndokwa West", "Okpe", "Oshimili North", "Oshimili South", "Patani", "Sapele", "Udu", "Ughelli North", "Ughelli South", "Ukwuani", "Uvwie", "Warri North", "Warri South", "Warri South West",
  "Abakaliki", "Afikpo North", "Afikpo South", "Ebonyi", "Ezza North", "Ezza South", "Ikwo", "Ishielu", "Ivo", "Izzi", "Ohaozara", "Ohaukwu", "Onicha",
  "Akoko-Edo", "Egor", "Esan Central", "Esan North-East", "Esan South-East", "Esan West", "Etsako Central", "Etsako East", "Etsako West", "Igueben", "Ikpoba Okha", "Oredo", "Orhionmwon", "Ovia North-East", "Ovia South-West", "Owan East", "Owan West", "Uhunmwonde",
  "Ado Ekiti", "Efon", "Ekiti East", "Ekiti South-West", "Ekiti West", "Emure", "Gbonyin", "Ido Osi", "Ijero", "Ikere", "Ikole", "Ilejemeje", "Irepodun/Ifelodun", "Ise/Orun", "Moba", "Oye",
  "Aninri", "Awgu", "Enugu East", "Enugu North", "Enugu South", "Ezeagu", "Igbo Etiti", "Igbo Eze North", "Igbo Eze South", "Isi Uzo", "Nkanu East", "Nkanu West", "Nsukka", "Oji River", "Udenu", "Udi", "Uzo Uwani",
  "Akko", "Balanga", "Billiri", "Dukku", "Funakaye", "Gombe", "Kaltungo", "Kwami", "Nafada", "Shongom", "Yamaltu/Deba",
  "Aboh Mbaise", "Ahiazu Mbaise", "Ehime Mbano", "Ezinihitte", "Ideato North", "Ideato South", "Ihitte/Uboma", "Ikeduru", "Isiala Mbano", "Isu", "Mbaitoli", "Ngor Okpala", "Njaba", "Nkwerre", "Nwangele", "Obowo", "Oguta", "Ohaji/Egbema", "Okigwe", "Onuimo", "Orlu", "Orsu", "Oru East", "Oru West", "Owerri Municipal", "Owerri North", "Owerri West",
  "Auyo", "Babura", "Birnin Kudu", "Birniwa", "Buji", "Dutse", "Gagarawa", "Garki", "Gumel", "Guri", "Gwaram", "Gwiwa", "Hadejia", "Jahun", "Kafin Hausa", "Kaugama", "Kazaure", "Kirikasamma", "Maigatari", "Malam Madori", "Miga", "Ringim", "Roni", "Sule Tankarkar", "Taura", "Yankwashi",
  "Birnin Gwari", "Chikun", "Giwa", "Igabi", "Ikara", "Jaba", "Jema'a", "Kachia", "Kaduna North", "Kaduna South", "Kagarko", "Kajuru", "Kaura", "Kauru", "Kubau", "Kudan", "Lere", "Makarfi", "Sabon Gari", "Sanga", "Soba", "Zangon Kataf", "Zaria",
  "Ajingi", "Albasu", "Bagwai", "Bebeji", "Bichi", "Bunkure", "Dala", "Dambatta", "Dawakin Kudu", "Dawakin Tofa", "Doguwa", "Fagge", "Gabasawa", "Garko", "Garun Mallam", "Gaya", "Gezawa", "Gwale", "Gwarzo", "Kabo", "Kano Municipal", "Karaye", "Kibiya", "Kiru", "Kumbotso", "Kunchi", "Kura", "Madobi", "Makoda", "Minjibir", "Nasarawa", "Rano", "Rimin Gado", "Rogo", "Shanono", "Sumaila", "Takai", "Tarauni", "Tofa", "Tsanyawa", "Tudun Wada", "Ungogo", "Warawa", "Wudil",
];

 export const blogs = [
    {
      title: "Lagos Farmers Smiles As Flooding Reduces",
      category: "1",
      image: farmsmile,
    },
    {
      title: "Less rainfaill in Kano as rice platation withers",
      category: "2",
      image: farmmobile,
    },
    {
      title: "Lagos Farmers Smiles As Flooding Reduces",
      category: "3",
      image: farmsmile,
    },
    {
      title: "Less rainfaill in Kano as rice platation withers",
      category: "4",
      image: farmmobile,
    },
    {
      title: "Less rainfaill in Kano as rice platation withers",
      category: "5",
      image: farmsmile,
    },
    {
      title: "Less rainfaill in Kano as rice platation withers",
      category: "6",
      image: farmsmile,
    },
    {
      title: "Less rainfaill in Kano as rice platation withers",
      category: "7",
      image: farmsmile,
    },
    {
      title: "Less rainfaill in Kano as rice platation withers",
      category: "8",
      image: farmsmile,
    },
  ];

  export  const allIcons = {
      "01d": clear,
      "01n": clear,
      "02d": partlysunny,
      "02n": partlysunny,
      "03d": cloud,
      "03n": cloud,
      "04d": cloud,
      "04n": cloud,
      "09d": drizzle,
      "09n": drizzle,
      "10d": rain,
      "10n": rain,
      "13d": snow,
      "13n": snow,
    };

    