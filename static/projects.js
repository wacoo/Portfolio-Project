const recentWorksSection = document.querySelector('.recent_works');
const showCaseSection = document.querySelector('.show_case');

const recentWorksObject = {};
const keyValuePair = {
  wrapper: 'div',
  title: 'div',
  recent_summary: 'div',
  place_holder: 'div',
  ph_image: 'img',
  stories: 'div',
  mp_stories: 'div',
  links: 'div',
  buttons: 'div',
  h2: 'h2',
  h3: 'h3',
  line: 'hr',
  ul: 'ul',
  a: 'a',
  p: 'p',
};

const recentData = {
  title: 'My Recent Works',
  name: 'DEF-CON Conference',
  description: ' The ultimate destination for hacking enthusiasts, cybersecurity professionals, and tech aficionados worldwide. This cutting-edge platform offers everything you need to make the most out of this premier cybersecurity event, from real-time updates on schedules and speakers to instant access to event information and resources.',
  featuredImage: 'static/images/defcon/head.png',
  technologies: ['HTML', 'CSS', 'Javascript'],
  link_to_live_version: '',
  link_to_source: '',

};

const noClassAtributes = ['hr', 'ul', 'li', 'a'];

Object.keys(keyValuePair).forEach((key) => {
  recentWorksObject[key] = document.createElement(keyValuePair[key]);
  if (!noClassAtributes.includes(key)) {
    recentWorksObject[key].classList.add(key);
  }
  if (key === 'buttons') {
    recentWorksObject[key].classList.add('btn_with_wrap');
  }
  if (key === 'a') {
    recentWorksObject[key].id = 'a-1';
  }
});

// Title
recentWorksObject.h2.innerHTML = recentData.title;
recentWorksObject.title.appendChild(recentWorksObject.h2);
recentWorksObject.title.appendChild(recentWorksObject.line);
recentWorksObject.wrapper.appendChild(recentWorksObject.title);
recentWorksObject.wrapper.appendChild(recentWorksObject.recent_summary);

// Recent summary
recentWorksObject.ph_image.src = recentData.featuredImage;
recentWorksObject.ph_image.alt = 'Gymnasium image';

recentWorksObject.h3.innerHTML = recentData.name;
recentWorksObject.p.innerHTML = recentData.description;

recentWorksObject.mp_stories.appendChild(recentWorksObject.h3);
recentWorksObject.mp_stories.appendChild(recentWorksObject.p);

for (let i = 0; i < recentData.technologies.length; i += 1) {
  const li = document.createElement('li');
  li.innerHTML = recentData.technologies[i];
  recentWorksObject.ul.appendChild(li);
}
recentWorksObject.links.appendChild(recentWorksObject.ul);

recentWorksObject.a.href = '#';
recentWorksObject.a.innerHTML = 'See project';
recentWorksObject.buttons.appendChild(recentWorksObject.a);

recentWorksObject.place_holder.appendChild(recentWorksObject.ph_image);
recentWorksObject.stories.appendChild(recentWorksObject.mp_stories);
recentWorksObject.stories.appendChild(recentWorksObject.links);
recentWorksObject.stories.appendChild(recentWorksObject.buttons);

recentWorksObject.recent_summary.appendChild(recentWorksObject.place_holder);
recentWorksObject.recent_summary.appendChild(recentWorksObject.place_holder);
recentWorksObject.recent_summary.appendChild(recentWorksObject.stories);

recentWorksObject.wrapper.appendChild(recentWorksObject.recent_summary);

recentWorksSection.appendChild(recentWorksObject.wrapper);

// Cards
const showCaseObject = {};
const keyValuePairSK = {
  wrapper: 'div',
  mp_stories: 'div',
  links: 'div',
  buttons: 'div',
  h3: 'h3',
  ul: 'ul',
  a: 'a',
  p: 'p',
};

for (let i = 1; i <= 8; i += 1) {
  keyValuePairSK[`child-${i}`] = 'article';
  keyValuePairSK[`mp_stories-${i}`] = 'div';
  keyValuePairSK[`links-${i}`] = 'div';
  keyValuePairSK[`buttons-${i}`] = 'div';

  keyValuePairSK[`h3-${i}`] = 'h3';
  keyValuePairSK[`p-${i}`] = 'p';
  keyValuePairSK[`ul-${i}`] = 'ul';
  keyValuePairSK[`a-${i}`] = 'a';
}

const showCaseData = [
  {
    name: 'Health Clinic<br>Website',
    description: 'Health Clinic is modern appointment booking app that empowers you to manage your healthcare with ease.',
    featuredImage: 'static/images/bg_c1.png',
    technologies: ['React', 'Rails', 'PostgreSQL'],
    link_to_live_version: 'https://github.com/tajemouti/medical-appointments-front-end',
    link_to_source: 'https://jade-rabanadas-479b96.netlify.app/',

  },
  {
    name: 'Effective Expense<br>Management',
    description: 'A mobile web app built with Rails that empowers users to effectively manage their finances.',
    featuredImage: 'static/images/budget/cat_mob.png',
    technologies: ['JavaScript', 'React', 'Rails'],
    link_to_live_version: '',
    link_to_source: '',

  },
  {
    name: 'Cheapr Project<br>Web Application',
    description: 'a revolutionary app that makes it easy to find nearby stores and service providers offering the best deals on quality goods and services.',
    featuredImage: 'static/images/proj_imgs/cheapr.jpg',
    technologies: ['HTML5/CSS3', 'JavaScript', 'Flask'],
    link_to_live_version: '',
    link_to_source: 'https://github.com/wacoo/cheapr-project',

  },
  {
    name: 'Orbit Space<br>Travel Agency',
    description: 'Orbit is a cutting-edge React-based app that unlocks the wonders of space exploration and commercial opportunities.',
    featuredImage: 'static/images/orbit/home.png',
    technologies: ['HTML5/CSS3', 'Bootstrap', 'Ruby'],
    link_to_live_version: 'https://orbit-space-travel.onrender.com/',
    link_to_source: 'https://github.com/wacoo/orbit-space-travel-agency',

  },
  {
    name: 'TV Show Spotter<br>Website',
    description: 'A captivating web application that brings TV shows to life. Explore a vast collection of shows through visually stunning cards, each featuring the show\'s name and an enticing image.',
    featuredImage: 'static/images/proj_imgs/tv_mob.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    link_to_live_version: 'https://ngalamac.github.io/js-capstone-project/dist/',
    link_to_source: 'https://github.com/wacoo/tv-show-api-js-capstone-project',

  },
  {
    name: 'AEDYA<br>Chat Game',
    description: 'AEDYA Chat Game is an innovative project that aims to revolutionize the way people connect and interact through a captivating chat application.',
    featuredImage: 'static/images/proj_imgs/aedya.jpg',
    technologies: ['React', 'Flask', 'MySQL', 'Redis'],
    link_to_live_version: '',
    link_to_source: 'https://github.com/wacoo/aedya-chat-game',
  },
  {
    name: 'ISO<br>Documentation',
    description: 'ISO Documentation is a robust web application specifically designed to streamline the storage and management of diverse document types.',
    featuredImage: 'static/images/iso/iso.jpg',
    technologies: ['React', 'Flask', 'SQL'],
    link_to_live_version: '',
    link_to_source: 'https://github.com/wacoo/iso-documentation-flask-react',
  },
  {
    name: 'Smart Math<br>Magician',
    description: 'A web app calculator that brings a touch of enchantment to your mathematical journey. Equipped with the power of React.',
    featuredImage: 'static/images/iso/iso.jpg',
    technologies: ['HTML5', 'CSS3', 'React', 'ES5'],
    link_to_live_version: '',
    link_to_source: 'https://github.com/wacoo/iso-documentation-flask-react',
  },
];
let count = 2;
Object.keys(keyValuePairSK).forEach((key) => {
  showCaseObject[key] = document.createElement(keyValuePairSK[key]);
  if (!noClassAtributes.includes(key)) {
    if (key.substring(0, 10) === 'mp_stories') {
      showCaseObject[key].classList.add('mp_stories');
    } else if (key.substring(0, 5) === 'links') {
      showCaseObject[key].classList.add('links');
    } else if (key.substring(0, 7) === 'buttons') {
      showCaseObject[key].classList.add('buttons');
    } else if (key.substring(0, 2) === 'h3') {
      showCaseObject[key].classList.remove(key);
    } else if (key.substring(0, 1) === 'a') {
      showCaseObject[key].classList.remove(key);
    } else if (key.substring(0, 1) === 'p') {
      showCaseObject[key].classList.remove(key);
    } else if (key.substring(0, 2) === 'ul') {
      showCaseObject[key].classList.remove(key);
    } else {
      showCaseObject[key].classList.add(key);
    }
  }
  if (key.substring(0, 6) === 'child-') {
    showCaseObject[key].classList.add('img_p_holder');
  }
  if (key.substring(0, 2) === 'a-') {
    showCaseObject[key].id = `a-${count}`;
    count += 1;
  }
});

window.addEventListener('resize', () => {
  window.location.reload();
}, true);

// 6 times
for (let i = 1; i <= showCaseData.length; i += 1) {
  // const x = window.matchMedia('(min-width: 768px)');
  const c = i - 1;
  // if (x.matches && (c === 4)) {
  //   c = 1;
  // } else if (x.matches && (c === 5)) {
  //   c = 2;
  // }
  showCaseObject[`h3-${i}`].innerHTML = showCaseData[c].name;
  showCaseObject[`p-${i}`].innerHTML = showCaseData[c].description;

  for (let j = 0; j < showCaseData[c].technologies.length; j += 1) {
    const li = document.createElement('li');
    li.innerHTML = showCaseData[c].technologies[j];
    showCaseObject[`ul-${i}`].appendChild(li);
  }

  showCaseObject[`a-${i}`].href = '#';
  showCaseObject[`a-${i}`].innerHTML = 'See project';

  showCaseObject[`mp_stories-${i}`].appendChild(showCaseObject[`h3-${i}`]);
  showCaseObject[`mp_stories-${i}`].appendChild(showCaseObject[`p-${i}`]);
  showCaseObject[`links-${i}`].appendChild(showCaseObject[`ul-${i}`]);
  showCaseObject[`buttons-${i}`].appendChild(showCaseObject[`a-${i}`]);

  showCaseObject[`child-${i}`].appendChild(showCaseObject[`mp_stories-${i}`]);
  showCaseObject[`child-${i}`].appendChild(showCaseObject[`links-${i}`]);
  showCaseObject[`child-${i}`].appendChild(showCaseObject[`buttons-${i}`]);
  showCaseObject.wrapper.appendChild(showCaseObject[`child-${i}`]);
}

// Add data
showCaseSection.appendChild(showCaseObject.wrapper);
