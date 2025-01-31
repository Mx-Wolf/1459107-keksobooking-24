import{getRandomIntInclusive,getRandomArbitrary} from './random-number.js';


const getAvatar=function(){
  const xot=getRandomIntInclusive(1,10);
  let avatar = '';

  if(xot>=10){
    avatar={avatar: `img/avatars/user${   xot }.png`};
  }else{
    avatar={avatar: `${'img/avatars/user' + '0'}${ xot }.png`};
  }
  return avatar;};

const getLocation=function(){
  const lats=getRandomArbitrary(35.65000,35.70000,5);
  const leng=getRandomArbitrary(139.70000,139.80000,5);

  return{
    lat:lats,
    lng:leng,
  };
};

const features =[
  'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner',
];

const newArray = function(){
  const lenght=features.length-1;

  return features.slice(getRandomIntInclusive(0,lenght));


};

const photos=[
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',

];

const getPhotosArray=function(){
  const w = photos.length-1;

  return photos.slice(getRandomIntInclusive(0, w));
};

const getOffer=function(){
  const location=getLocation();
  const type=[
    'palace','flat','house','bungalow','hotel',
  ];
  const checkin=[
    '12:00','13:00','14:00',
  ];


  return{
    title:'Заголовок обьявления',
    address:`${  location.lat  }, ${  location.lng}`,
    price:5000,
    type:type[getRandomIntInclusive(0,type.length)],
    rooms:5,
    guests:8,
    checkin:checkin[getRandomIntInclusive(0,checkin.length-1)],
    checkout:checkin[getRandomIntInclusive(0,checkin.length-1)],
    features:newArray(),
    description:'Комната для отдыха недорого',
    photos:getPhotosArray(),
  };

};


const getArray=function(){
  return{
    author:getAvatar(),
    offer:getOffer(),
    location:getLocation(),
  };
};


const result = Array.from({length:10},getArray);


export{result,getArray};
