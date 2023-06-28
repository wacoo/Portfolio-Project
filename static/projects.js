const recentWorksSection = document.querySelector('.recent_works');
const showCaseSection = document.querySelector('.show_case');

const recentWorksObject = {};
const projectData = [];
const keyValuePair = {
    wrapper:'div',
    title:'div',
    recent_summary:'div',
    place_holder:'div',
    ph_image:'img',
    stories:'div',
    mp_stories:'div',
    links:'div',
    buttons:'div',
    h2:'h2',
    h3: 'h3',
    line:'hr',
    ul:'ul',
    a:'a',
    p: 'p'
}

const recentData = {
    title: 'My Recent Works',
    name: 'Multi-Post Stories',
    description: 'A daily selection of selection of privately personalized reads; no accounts or sign-ups required:\
    has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    featuredImage: '/static/images/ph1.png',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Ruby'],
    link_to_live_version: '',
    link_to_source: '' ,

}

const noClassAtributes = ['hr', 'ul', 'li', 'a'];

for (let key in keyValuePair) {
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
}

//Title
recentWorksObject.h2.innerHTML = recentData.title;
recentWorksObject.title.appendChild(recentWorksObject.h2);
recentWorksObject.title.appendChild(recentWorksObject.line);
recentWorksObject.wrapper.appendChild(recentWorksObject.title);
recentWorksObject.wrapper.appendChild(recentWorksObject.recent_summary);

//Recent summary
recentWorksObject.ph_image.src = recentData.featuredImage;
recentWorksObject.ph_image.alt = "Gymnasium image";

recentWorksObject.h3.innerHTML = recentData.name;
recentWorksObject.p.innerHTML = recentData.description;

recentWorksObject.mp_stories.appendChild(recentWorksObject.h3);
recentWorksObject.mp_stories.appendChild(recentWorksObject.p);

for (let i = 0; i < recentData.technologies.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = recentData.technologies[i];
    recentWorksObject.ul.appendChild(li);
}
recentWorksObject.links.appendChild(recentWorksObject.ul);

recentWorksObject.a.href = "#";
recentWorksObject.a.innerHTML = "See project";
recentWorksObject.buttons.appendChild(recentWorksObject.a);

recentWorksObject.place_holder.appendChild(recentWorksObject.ph_image);
recentWorksObject.stories.appendChild(recentWorksObject.mp_stories);
recentWorksObject.stories.appendChild(recentWorksObject.links);
recentWorksObject.stories.appendChild(recentWorksObject.buttons);

recentWorksObject.recent_summary.appendChild(recentWorksObject.place_holder);
recentWorksObject.recent_summary.appendChild(recentWorksObject.place_holder);
recentWorksObject.recent_summary.appendChild(recentWorksObject.stories);

recentWorksObject.wrapper.appendChild(recentWorksObject.recent_summary);


//Add data
recentWorksSection.appendChild(recentWorksObject.wrapper);
//projectData.push(recentWorksObject);

// Cards

const showCaseObject= {};
const projectDataSK = [];
const keyValuePairSK = {
    wrapper:'div',
    mp_stories:'div',
    links:'div',
    buttons:'div',
    h3: 'h3',
    ul: 'ul',
    a: 'a',
    p: 'p'
}

for (let i = 1; i <= 8; i++) {
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
        name: 'Professional Art<br>Printing Data',
        description: 'A daily selection of selection of privately personalized reads; no accounts or sign-ups required. has\
        been the industry\'s standard.',
        featuredImage: '/static/images/bg_c1.png',
        technologies: ['HTML', 'Bootstrap', 'Ruby'],
        link_to_live_version: '',
        link_to_source: ''

    },
    {
        name: 'Data Dashboard<br> Healthcare',
        description: 'A daily selection of selection of privately personalized reads; no accounts or sign-ups required. has\
        been the industry\'s standard.',
        featuredImage: '/static/images/bg_c2.png',
        technologies: ['HTML', 'Bootstrap', 'Ruby'],
        link_to_live_version: '',
        link_to_source: ''

    },
    {
        name: 'Website Portfolio',
        description: 'A daily selection of selection of privately personalized reads; no accounts or sign-ups required. has\
        been the industry\'s standard.',
        featuredImage: '/static/images/bg_c3.png',
        technologies: ['HTML', 'Bootstrap', 'Ruby'],
        link_to_live_version: '',
        link_to_source: ''

    },
    {
        name: 'Professional Art<br>Printing Data',
        description: 'A daily selection of selection of privately personalized reads; no accounts or sign-ups required. has\
        been the industry\'s standard.',
        featuredImage: '/static/images/bg_c1.png',
        technologies: ['HTML', 'Bootstrap', 'Ruby'],
        link_to_live_version: '',
        link_to_source: ''

    },
    {
        name: 'Professional Art<br>Printing Data',
        description: 'A daily selection of selection of privately personalized reads; no accounts or sign-ups required. has\
        been the industry\'s standard.',
        featuredImage: '/static/images/bg_c1.png',
        technologies: ['HTML', 'Bootstrap', 'Ruby'],
        link_to_live_version: '',
        link_to_source: ''

    },
    {
        name: 'Professional Art<br>Printing Data',
        description: 'A daily selection of selection of privately personalized reads; no accounts or sign-ups required. has\
        been the industry\'s standard.',
        featuredImage: '/static/images/bg_c1.png',
        technologies: ['HTML', 'Bootstrap', 'Ruby'],
        link_to_live_version: '',
        link_to_source: ''

    },
    {
        name: 'Professional Art<br>Printing Data',
        description: 'A daily selection of selection of privately personalized reads; no accounts or sign-ups required. has\
        been the industry\'s standard.',
        featuredImage: '/static/images/bg_c1.png',
        technologies: ['HTML', 'Bootstrap', 'Ruby'],
        link_to_live_version: '',
        link_to_source: ''

    },
    {
        name: 'Professional Art<br>Printing Data',
        description: 'A daily selection of selection of privately personalized reads; no accounts or sign-ups required. has\
        been the industry\'s standard.',
        featuredImage: '/static/images/bg_c1.png',
        technologies: ['HTML', 'Bootstrap', 'Ruby'],
        link_to_live_version: '',
        link_to_source: ''

    }
]
let count = 2;
for (let key in keyValuePairSK) {
    showCaseObject[key] = document.createElement(keyValuePairSK[key]);
    if (!noClassAtributes.includes(key)) {
        if (key.substring(0, 10) === 'mp_stories') {
            showCaseObject[key].classList.add('mp_stories');
        }else if (key.substring(0, 5) === 'links') {
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
        showCaseObject[key].id = 'a-' + count;
        count++;
    }
}


window.addEventListener('resize', function(event) {
    window.location.reload();     
}, true);

// 6 times

for (let i = 1; i <= 8; i++) {
    let x = window.matchMedia("(min-width: 768px)");
    let c = i - 1;
    if (x.matches && (c === 4)) {
        c = 1;
    } else if (x.matches && (c === 5)) {
        c = 2;
    }
    showCaseObject[`h3-${i}`].innerHTML = showCaseData[c].name;
    showCaseObject[`p-${i}`].innerHTML = showCaseData[c].description;

    for (let j = 0; j < showCaseData[c].technologies.length; j++) {
        const li = document.createElement('li');
        li.innerHTML = showCaseData[c].technologies[j];
        showCaseObject[`ul-${i}`].appendChild(li);
    }


    showCaseObject[`a-${i}`].href = "#";
    showCaseObject[`a-${i}`].innerHTML = "See project";

    showCaseObject[`mp_stories-${i}`].appendChild(showCaseObject[`h3-${i}`]);
    showCaseObject[`mp_stories-${i}`].appendChild(showCaseObject[`p-${i}`]);
    showCaseObject[`links-${i}`].appendChild(showCaseObject[`ul-${i}`]);
    showCaseObject[`buttons-${i}`].appendChild(showCaseObject[`a-${i}`]);

    showCaseObject[`child-${i}`].appendChild(showCaseObject[`mp_stories-${i}`]);
    showCaseObject[`child-${i}`].appendChild(showCaseObject[`links-${i}`]);
    showCaseObject[`child-${i}`].appendChild(showCaseObject[`buttons-${i}`]);
    showCaseObject['wrapper'].appendChild(showCaseObject[`child-${i}`]);
    
}

//Add data
showCaseSection.appendChild(showCaseObject.wrapper);

