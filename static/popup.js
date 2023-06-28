const modal2 = document.querySelector('.modal-2');

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
  'p-2': 'p'

}

const popUpData = {
  name_desk: 'Keeping track of hundreds  of components website',
  name_mob: 'Multi-Post Stories',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
  description2: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  featuredImage: '/static/images/Snapshoot Portfolio.png',
  live_btn_txt: 'See live <img src="/static/images/circle_arrow.png"  alt="">',
  source_btn_txt: 'See source <img src="/static/images/github3.png" alt="">',
  technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
  live_button_img: '/static/images/circle_arrow.png',
  source_button_img: '/static/images/github3.png',
  link_to_live_version: 'https://wacoo.github.io/Portfolio-Project',
  link_to_source: 'https://github.com/wacoo/Portfolio-Project',

}

const noClassAtributes2 = ['img', 'ul', 'li', 'a', 'p', 'p-2'];

for (let key in keyValuePair3) {
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
}

//Title
popUpObject['close-2'].innerHTML = '&times;';
popUpObject.wrp.appendChild(popUpObject['close-2']);
popUpObject.head.appendChild(popUpObject.wrp);

popUpObject.h2_desk.innerHTML = popUpData.name_desk;
popUpObject.h2_mobile.innerHTML = popUpData.name_mob;

popUpObject.head.appendChild(popUpObject.h2_desk);
popUpObject.head.appendChild(popUpObject.h2_mobile);

for (let i = 0; i < popUpData.technologies.length; i++) {
  const li = document.createElement('li');
  li.innerHTML = popUpData.technologies[i];
  popUpObject.ul.appendChild(li);
}

popUpObject.links.appendChild(popUpObject.ul);
popUpObject.head.appendChild(popUpObject.links);

popUpObject.img.src = popUpData.featuredImage;
popUpObject.img.alt = 'Snapshoot portfolio image';
popUpObject.image.append(popUpObject.img);
popUpObject.pic_side.appendChild(popUpObject.image);

popUpObject.p.innerHTML = popUpData.description;
popUpObject.text_side.append(popUpObject.p);

popUpObject['p-2'].innerHTML = popUpData.description2;
popUpObject.text_side.append(popUpObject['p-2']);

popUpObject.aLive.href = popUpData.link_to_live_version;
popUpObject.aSource.href = popUpData.link_to_source;

popUpObject.aLive.innerHTML = popUpData.live_btn_txt;
popUpObject.aSource.innerHTML = popUpData.source_btn_txt;

popUpObject.live_btn_div.appendChild(popUpObject.aLive);
popUpObject.source_btn_div.appendChild(popUpObject.aSource);

popUpObject.product_buttons.appendChild(popUpObject.live_btn_div);
popUpObject.product_buttons.appendChild(popUpObject.source_btn_div);

popUpObject.text_side.appendChild(popUpObject.product_buttons);

popUpObject.all.append(popUpObject.pic_side);
popUpObject.all.append(popUpObject.text_side);

modal2.append(popUpObject.head);
modal2.append(popUpObject.all);