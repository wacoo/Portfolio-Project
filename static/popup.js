const modal2 = document.querySelector('.modal-2');
// const recentButton = document.getElementById('a-1');

const popUpObject = {};
const keyValuePair3 = {
  head: 'div',
  wrp: 'div',
  h2_mobile: 'h2',
  h2_desk: 'h2',
  links: 'div',
  all: 'div',
  pic_side: 'div',
  image: 'div',
  text_side: 'div',
  product_buttons: 'div',
  live_btn_div: 'div',
  source_btn_div: 'div',
  aLive: 'a',
  aSource: 'a',
  'close-2': 'span',
  img: 'img',
  ul: 'ul',
  a: 'a',
  p: 'p',
  'p-2': 'p',
};

const popUpData = [
  {
    name_desk: 'DEF-CON Annual Cyber Security Conference',
    name_mob: 'DEF-CON Conference',
    description:
      'The ultimate destination for hacking enthusiasts, cybersecurity professionals, and tech aficionados worldwide. This cutting-edge platform offers everything you need to make the most out of this premier cybersecurity event, from real-time updates on schedules and speakers to instant access to event information and resources.',
    description2:
      'The ultimate destination for hacking enthusiasts, cybersecurity professionals, and tech aficionados worldwide.',
    featuredImage: 'static/images/defcon/head.png',
    live_btn_txt: 'See live <img src="static/images/circle_arrow.png"  alt="">',
    source_btn_txt: 'See source <img src="static/images/github3.png" alt="">',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live_button_img: 'static/images/circle_arrow.png',
    source_button_img: 'static/images/github3.png',
    link_to_live_version: 'https://wacoo.github.io/DEF-CON_Summit/',
    link_to_source: 'https://github.com/wacoo/DEF-CON_Summit',
  },
  {
    name_desk: 'Health Clinic: Your Healthcare Appointment App, Simplifiede',
    name_mob: 'Health Clinic Website',
    description:
      'Health Clinic is modern appointment booking app that empowers you to manage your healthcare with ease. Ditch the phone calls and waiting rooms – Health Clinic gives you the flexibility to schedule appointments anytime, anywhere, straight from your mobile device.',
    description2:
      'Health Clinic is modern appointment booking app that empowers you to manage your healthcare with ease. Ditch the phone calls and waiting rooms – Health Clinic gives you the flexibility to schedule appointments anytime, anywhere, straight from your mobile device.',
    featuredImage: 'static/images/proj_imgs/health.jpg',
    live_btn_txt: 'See live <img src="static/images/circle_arrow.png"  alt="">',
    source_btn_txt: 'See source <img src="static/images/github3.png" alt="">',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    live_button_img: 'static/images/circle_arrow.png',
    source_button_img: 'static/images/github3.png',
    link_to_live_version: 'https://jade-rabanadas-479b96.netlify.app',
    link_to_source: 'https://github.com/tajemouti/medical-appointments-front-end',
  },
  {
    name_desk: 'Empowers users to effectively manage their finances',
    name_mob: 'Effective finance management',
    description:
      ' A mobile web app built with Rails that empowers users to effectively manage their finances. With Smart-Budget, users can create custom categories and track their expenses seamlessly.  By organizing their spending into categories such as groceries, transportation, entertainment, and more, users can gain a comprehensive understanding of their financial habits.',
    description2:
      'The app provides an intuitive interface for users to enter their expenses under the relevant categories. Additionally, Smart-Budget automatically calculates and displays the total budget for each category, enabling users to monitor their spending and make informed financial decisions.',
    featuredImage: 'static/images/budget/cat.png',
    live_btn_txt: 'See live <img src="static/images/circle_arrow.png"  alt="">',
    source_btn_txt: 'See source <img src="static/images/github3.png" alt="">',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    live_button_img: 'static/images/circle_arrow.png',
    source_button_img: 'static/images/github3.png',
    link_to_live_version: 'https://smart-budget-6u1l.onrender.com/',
    link_to_source: 'https://github.com/wacoo/smart-budget-ror-capstone',
  },
  {
    name_desk: 'Cheapr Project Web Application',
    name_mob: 'Cheapr Project Web Application',
    description:
      "Cheapr is a revolutionary app that makes it easy to find nearby stores and service providers offering the best deals on quality goods and services. What's more, it supports businesses that offer the most affordable prices by promoting them to users. The main goal of this project is to encourage a fair price for the goods or services provided.",
    description2:
      "Cheapr is a revolutionary app that makes it easy to find nearby stores and service providers offering the best deals on quality goods and services. What's more, it supports businesses that offer the most affordable prices by promoting them to users.",
    featuredImage: 'static/images/proj_imgs/cheapr.jpg',
    live_btn_txt: 'See live <img src="static/images/circle_arrow.png"  alt="">',
    source_btn_txt: 'See source <img src="static/images/github3.png" alt="">',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    live_button_img: 'static/images/circle_arrow.png',
    source_button_img: 'static/images/github3.png',
    link_to_live_version: '#',
    link_to_source: 'https://github.com/wacoo/cheapr-project',
  },
  {
    name_desk: 'Orbit: Your Gateway to Space Exploration and Commercial Ventures',
    name_mob: 'Orbit Space Travel Agency',
    description:
      'Orbit is a cutting-edge React-based app that unlocks the wonders of space exploration and commercial opportunities. Seamlessly blending scientific research and commercial endeavors, Orbit revolutionizes the way we engage with space.',
    description2:
      'Orbit is a cutting-edge React-based app that unlocks the wonders of space exploration and commercial opportunities. Seamlessly blending scientific research and commercial endeavors, Orbit revolutionizes the way we engage with space.',
    featuredImage: 'static/images/orbit/home.png',
    live_btn_txt: 'See live <img src="static/images/circle_arrow.png"  alt="">',
    source_btn_txt: 'See source <img src="static/images/github3.png" alt="">',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    live_button_img: 'static/images/circle_arrow.png',
    source_button_img: 'static/images/github3.png',
    link_to_live_version: 'https://orbit-space-travel.onrender.com/',
    link_to_source: 'https://github.com/wacoo/orbit-space-travel-agency',
  },
  {
    name_desk: 'TV Show Spotter Website',
    name_mob: 'TV Show Spotter',
    description:
      "A captivating web application that brings TV shows to life. Explore a vast collection of shows through visually stunning cards, each featuring the show's name and an enticing image. With a simple click, delve into detailed descriptions in elegant pop-up windows.",
    description2:
      "A captivating web application that brings TV shows to life. Explore a vast collection of shows through visually stunning cards, each featuring the show's name and an enticing image. With a simple click, delve into detailed descriptions in elegant pop-up windows.",
    featuredImage: 'static/images/proj_imgs/tv.jpg',
    live_btn_txt: 'See live <img src="static/images/circle_arrow.png"  alt="">',
    source_btn_txt: 'See source <img src="static/images/github3.png" alt="">',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    live_button_img: 'static/images/circle_arrow.png',
    source_button_img: 'static/images/github3.png',
    link_to_live_version: 'https://ngalamac.github.io/js-capstone-project/dist/',
    link_to_source: 'https://github.com/wacoo/tv-show-api-js-capstone-project',
  },
  {
    name_desk: 'AEDYA Chat Game',
    name_mob: 'AEDYA Chat Game',
    description:
      'AEDYA Chat Game is an innovative project that aims to revolutionize the way people connect and interact through a captivating chat application. The primary objective of this project is to provide users from different countries with an immersive and engaging platform where they can register and participate in exciting chat games.',
    description2:
      'AEDYA Chat Game is an innovative project that aims to revolutionize the way people connect and interact through a captivating chat application. The primary objective of this project is to provide users from different countries with an immersive and engaging platform where they can register and participate in exciting chat games.',
    featuredImage: 'static/images/proj_imgs/aedya.jpg',
    live_btn_txt: 'See live <img src="static/images/circle_arrow.png"  alt="">',
    source_btn_txt: 'See source <img src="static/images/github3.png" alt="">',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    live_button_img: 'static/images/circle_arrow.png',
    source_button_img: 'static/images/github3.png',
    link_to_live_version: '#',
    link_to_source: 'https://github.com/wacoo/aedya-chat-game',
  },
  {
    name_desk: 'ISO Documentation',
    name_mob: 'ISO Documentation',
    description:
      'ISO Documentation is a robust web application specifically designed to streamline the storage and management of diverse document types. From manuals and procedures to guidelines, organizational standards, and criteria documents, this user-friendly platform effortlessly handles documents in various formats. With a powerful database at its core, ISO Documentation enables easy organization and retrieval of documents. Users can swiftly search through the repository using filters such as department, date, category, and more.',
    description2:
      'ISO Documentation is a robust web application specifically designed to streamline the storage and management of diverse document types. From manuals and procedures to guidelines, organizational standards, and criteria documents, this user-friendly platform effortlessly handles documents in various formats. With a powerful database at its core, ISO Documentation enables easy organization and retrieval of documents.',
    featuredImage: 'static/images/iso/iso.jpg',
    live_btn_txt: 'See live <img src="static/images/circle_arrow.png"  alt="">',
    source_btn_txt: 'See source <img src="static/images/github3.png" alt="">',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    live_button_img: 'static/images/circle_arrow.png',
    source_button_img: 'static/images/github3.png',
    link_to_live_version: '#',
    link_to_source: '#',
  },
  {
    name_desk: 'Smart Math Magician',
    name_mob: 'Smart Math Magician',
    description:
      'A web app calculator that brings a touch of enchantment to your mathematical journey. Equipped with the power of React, this single-page application seamlessly melds the art of computation with the wonder of technology.',
    description2:
      'A web app calculator that brings a touch of enchantment to your mathematical journey. Equipped with the power of React, this single-page application seamlessly melds the art of computation with the wonder of technology.',
    featuredImage: 'static/images/calc/calc.png',
    live_btn_txt: 'See live <img src="static/images/circle_arrow.png"  alt="">',
    source_btn_txt: 'See source <img src="static/images/github3.png" alt="">',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    live_button_img: 'static/images/circle_arrow.png',
    source_button_img: 'static/images/github3.png',
    link_to_live_version: 'https://math-magician-irgv.onrender.com/calculator',
    link_to_source: 'https://github.com/wacoo/smart-math-magicians-react',
  },
];

const noClassAtributes2 = ['img', 'ul', 'li', 'a', 'p', 'p-2'];

Object.keys(keyValuePair3).forEach((key) => {
  popUpObject[key] = document.createElement(keyValuePair3[key]);
  if (!noClassAtributes2.includes(key)) {
    popUpObject[key].classList.add(key);
  }
  if (key === 'live_btn_div' || key === 'source_btn_div') {
    popUpObject[key].classList.add('buttons');
  }
  if (key === 'close-2') {
    popUpObject[key].id = 'close';
  }
});

// Title
popUpObject['close-2'].innerHTML = '<h2>&times;</h2>';

// popUpObject.h2_desk.innerHTML = popUpData[0].name_desk;
/// popUpObject.h2_mobile.innerHTML = popUpData[0].name_mob;

popUpObject.wrp.appendChild(popUpObject.h2_desk);
popUpObject.wrp.appendChild(popUpObject.h2_mobile);

popUpObject.wrp.appendChild(popUpObject['close-2']);
popUpObject.head.appendChild(popUpObject.wrp);

for (let i = 0; i < popUpData[0].technologies.length; i += 1) {
  const li = document.createElement('li');
  // li.innerHTML = popUpData[0].technologies[i];
  popUpObject.ul.appendChild(li);
}

popUpObject.links.appendChild(popUpObject.ul);
popUpObject.head.appendChild(popUpObject.links);

// popUpObject.img.src = popUpData[0].featuredImage;
popUpObject.img.alt = 'Snapshoot portfolio image';
popUpObject.image.append(popUpObject.img);
popUpObject.pic_side.appendChild(popUpObject.image);

// popUpObject.p.innerHTML = popUpData[0].description;
popUpObject.text_side.appendChild(popUpObject.p);

// popUpObject["p-2"].innerHTML = popUpData[0].description2;
popUpObject.text_side.appendChild(popUpObject['p-2']);

// popUpObject.aLive.href = popUpData[0].link_to_live_version;
// popUpObject.aSource.href = popUpData[0].link_to_source;

// popUpObject.aLive.innerHTML = popUpData[0].live_btn_txt;
// popUpObject.aSource.innerHTML = popUpData[0].source_btn_txt;

popUpObject.live_btn_div.appendChild(popUpObject.aLive);
popUpObject.source_btn_div.appendChild(popUpObject.aSource);

popUpObject.product_buttons.appendChild(popUpObject.live_btn_div);
popUpObject.product_buttons.appendChild(popUpObject.source_btn_div);

popUpObject.text_side.appendChild(popUpObject.product_buttons);

popUpObject.all.append(popUpObject.pic_side);
popUpObject.all.append(popUpObject.text_side);

modal2.append(popUpObject.head);
modal2.append(popUpObject.all);

function addSeeMoreListener(btn, x) {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    popUpObject.h2_desk.innerHTML = popUpData[x].name_desk;
    popUpObject.h2_mobile.innerHTML = popUpData[x].name_mob;

    popUpObject.ul.innerHTML = '';
    for (let i = 0; i < popUpData[x].technologies.length; i += 1) {
      const li = document.createElement('li');
      li.innerHTML = popUpData[x].technologies[i];
      popUpObject.ul.appendChild(li);
    }

    popUpObject.img.src = popUpData[x].featuredImage;

    popUpObject.p.innerHTML = popUpData[x].description;

    // popUpObject["p-2"].innerHTML = popUpData[x].description2;

    popUpObject.aLive.href = popUpData[x].link_to_live_version;
    popUpObject.aSource.href = popUpData[x].link_to_source;
    popUpObject.aLive.innerHTML = popUpData[x].live_btn_txt;
    popUpObject.aSource.innerHTML = popUpData[x].source_btn_txt;
  });
}

for (let x = 1; x <= popUpData.length; x += 1) {
  const btn = document.getElementById(`a-${x}`);
  addSeeMoreListener(btn, x - 1);
}
