const modal2 = document.querySelector(".modal-2");
const recentButton = document.getElementById('a-1');

const popUpObject = {};
const keyValuePair3 = {
  head: "div",
  wrp: "div",
  h2_mobile: "h2",
  h2_desk: "h2",
  links: "div",
  all: "div",
  pic_side: "div",
  image: "div",
  text_side: "div",
  product_buttons: "div",
  live_btn_div: "div",
  source_btn_div: "div",
  aLive: "a",
  aSource: "a",
  "close-2": "span",
  img: "img",
  ul: "ul",
  a: "a",
  p: "p",
  "p-2": "p",
};

const popUpData = [
  {
    name_desk: "Keeping track of hundreds  of components website",
    name_mob: "Multi-Post Stories",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    description2:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: "static/images/Snapshoot Portfolio.png",
    live_btn_txt: 'See live <img src="static/images/circle_arrow.png"  alt="">',
    source_btn_txt: 'See source <img src="static/images/github3.png" alt="">',
    technologies: ["HTML", "Bootstrap", "Ruby on rails"],
    live_button_img: "static/images/circle_arrow.png",
    source_button_img: "static/images/github3.png",
    link_to_live_version: "https://wacoo.github.io/Portfolio-Project",
    link_to_source: "https://github.com/wacoo/Portfolio-Project",
  },
  {
    name_desk: "DEF-CON Annual Cyber Security Conference",
    name_mob: "DEF-CON Conference",
    description:
      "The ultimate destination for hacking enthusiasts, cybersecurity professionals, and tech aficionados worldwide. This cutting-edge platform offers everything you need to make the most out of this premier cybersecurity event, from real-time updates on schedules and speakers to instant access to event information and resources.",
    description2:
      "The ultimate destination for hacking enthusiasts, cybersecurity professionals, and tech aficionados worldwide.",
    featuredImage: "static/images/defcon/head.png",
    live_btn_txt: 'See live <img src="static/images/circle_arrow.png"  alt="">',
    source_btn_txt: 'See source <img src="static/images/github3.png" alt="">',
    technologies: ["HTML", "CSS", "JavaScript"],
    live_button_img: "static/images/circle_arrow.png",
    source_button_img: "static/images/github3.png",
    link_to_live_version: "https://wacoo.github.io/DEF-CON_Summit/",
    link_to_source: "https://github.com/wacoo/DEF-CON_Summit",
  },
];

const noClassAtributes2 = ["img", "ul", "li", "a", "p", "p-2"];

Object.keys(keyValuePair3).forEach((key) => {
  popUpObject[key] = document.createElement(keyValuePair3[key]);
  if (!noClassAtributes2.includes(key)) {
    popUpObject[key].classList.add(key);
  }
  if (key === "live_btn_div" || key === "source_btn_div") {
    popUpObject[key].classList.add("buttons");
  }
  if (key === "close-2") {
    popUpObject[key].id = "close";
  }
});

// Title
popUpObject["close-2"].innerHTML = "<h2>&times;</h2>";

//popUpObject.h2_desk.innerHTML = popUpData[0].name_desk;
///popUpObject.h2_mobile.innerHTML = popUpData[0].name_mob;

popUpObject.wrp.appendChild(popUpObject.h2_desk);
popUpObject.wrp.appendChild(popUpObject.h2_mobile);

popUpObject.wrp.appendChild(popUpObject["close-2"]);
popUpObject.head.appendChild(popUpObject.wrp);

for (let i = 0; i < popUpData[0].technologies.length; i += 1) {
  const li = document.createElement("li");
  //li.innerHTML = popUpData[0].technologies[i];
  popUpObject.ul.appendChild(li);
}

popUpObject.links.appendChild(popUpObject.ul);
popUpObject.head.appendChild(popUpObject.links);

//popUpObject.img.src = popUpData[0].featuredImage;
popUpObject.img.alt = "Snapshoot portfolio image";
popUpObject.image.append(popUpObject.img);
popUpObject.pic_side.appendChild(popUpObject.image);

//popUpObject.p.innerHTML = popUpData[0].description;
popUpObject.text_side.appendChild(popUpObject.p);

//popUpObject["p-2"].innerHTML = popUpData[0].description2;
popUpObject.text_side.appendChild(popUpObject["p-2"]);

//popUpObject.aLive.href = popUpData[0].link_to_live_version;
//popUpObject.aSource.href = popUpData[0].link_to_source;

//popUpObject.aLive.innerHTML = popUpData[0].live_btn_txt;
//popUpObject.aSource.innerHTML = popUpData[0].source_btn_txt;

popUpObject.live_btn_div.appendChild(popUpObject.aLive);
popUpObject.source_btn_div.appendChild(popUpObject.aSource);

popUpObject.product_buttons.appendChild(popUpObject.live_btn_div);
popUpObject.product_buttons.appendChild(popUpObject.source_btn_div);

popUpObject.text_side.appendChild(popUpObject.product_buttons);

popUpObject.all.append(popUpObject.pic_side);
popUpObject.all.append(popUpObject.text_side);

modal2.append(popUpObject.head);
modal2.append(popUpObject.all);

function addSeeMoreListener(btn) {
  recentButton.addEventListener('click', (event) => {
    event.preventDefault();
    popUpObject.h2_desk.innerHTML = popUpData[x].name_desk;
    popUpObject.h2_mobile.innerHTML = popUpData[x].name_mob;
  
    popUpObject.ul.innerHTML = '';
    for (let i = 0; i < popUpData[x].technologies.length; i += 1) {
      const li = document.createElement("li");
      li.innerHTML = popUpData[x].technologies[i];
      popUpObject.ul.appendChild(li);
    }
  
    popUpObject.img.src = popUpData[x].featuredImage;
  
    popUpObject.p.innerHTML = popUpData[x].description;
  
    popUpObject["p-2"].innerHTML = popUpData[x].description2;
  
    popUpObject.aLive.href = popUpData[x].link_to_live_version;
    popUpObject.aSource.href = popUpData[x].link_to_source;
    popUpObject.aLive.innerHTML = popUpData[x].live_btn_txt;
    popUpObject.aSource.innerHTML = popUpData[x].source_btn_txt;
  }); 
}

for(let x = 0; x < popUpData.length; x += 1) {
  const btn = document.getElementById(`a-${x}`);
  addSeeMoreListener(btn);
}

