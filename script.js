const nav = document.querySelectorAll('.nav-item'),
    content__hours = document.querySelectorAll('.content__mid'),
    content__bot = document.querySelectorAll('.content__bot');

let data;

console.log('ll', content__bot)

fetch(`./data.json`, { method: "GET" })
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        data = json;
    });

nav.forEach(navi => {
    navi.addEventListener('click', e => {
        if (e.target.innerHTML === 'Daily') {
            dailyShow();
        }
        if (e.target.innerHTML === 'Weekly') {
            weeklyShow();
        }
        if (e.target.innerHTML === 'Monthly') {
            monthlyShow();
        }
    });
})

function addActive(x) {
    nav.forEach(navi => {
        navi.classList.remove('active');
    });

    nav[x].classList.add('active');
}

function dailyShow() {

    for (let i = 0; i < content__hours.length; i++) {
        content__hours[i].innerHTML = `<h1>${data[i].timeframes.daily.current}</h1>`;
        content__bot[i].innerHTML = `<p>Last Day - ${data[i].timeframes.daily.previous}hrs</p>`;
    }

    addActive(0);
};

function weeklyShow() {
    for (let i = 0; i < content__hours.length; i++) {
        content__hours[i].innerHTML = `<h1>${data[i].timeframes.weekly.current}</h1>`;
        content__bot[i].innerHTML = `<p>Last Week - ${data[i].timeframes.weekly.previous}hrs</p>`;
    }

    addActive(1);

};

function monthlyShow() {
    for (let i = 0; i < content__hours.length; i++) {
        content__hours[i].innerHTML = `<h1>${data[i].timeframes.monthly.current}</h1>`;
        content__bot[i].innerHTML = `<p>Last Monthly - ${data[i].timeframes.monthly.previous}hrs</p>`;
    }

    addActive(2);

};