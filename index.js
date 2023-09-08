


const loginform = document.getElementById('loginform');

const container = document.querySelector('.container');
const submit = document.getElementById('submit');
const form = document.getElementById('form');

const username = document.getElementById('username');
const password = document.getElementById('password');

const noOfTrees = document.getElementById('noOfTrees');
const type = document.getElementById('type');
const place = document.getElementById('location');

const data = {
    "data": [
        {
            "place": "Ooty",
            "totalTrees": 12404,
            "treesCut": 115
        },
        {
            "place": "Nilambur",
            "totalTrees": 21234,
            "treesCut": 215
        },
        {
            "place": "Coimbatore",
            "totalTrees": 50742,
            "treesCut": 125
        },
        {
            "place": "Pollachi",
            "totalTrees": 7893,
            "treesCut": 86
        },
        {
            "place": "Munnar",
            "totalTrees": 78123,
            "treesCut": 570
        },
        {
            "place": "Palakkad",
            "totalTrees": 67231,
            "treesCut": 230
        },

    ]
};
function handleLogin(e) {
    e.preventDefault();

    if (username.value === 'aksh' && password.value === 'aksh') {
        document.querySelector('.error').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.overlay').style.display = 'none';
            container.style.display = 'flex';
        }, 500);
    }
    else {
        document.querySelector('.error').style.opacity = '1';
        username.value = '';
        password.value = '';
    }
}

function handleSubmit(e) {
    e.preventDefault();
    console.log(noOfTrees.value + " " + type.value + " " + place.value);

    data.data.forEach(info => {
        if(info.place === place.value) {
            document.querySelector('.content').style.display = 'block';

            document.querySelector('.place').innerHTML = `Place: ${info.place}`;
            document.querySelector('.totaltrees').innerHTML = `Total Number of Trees: ${info.totalTrees}`;
            document.querySelector('.treescutpermission').innerHTML = `Number of trees cut with permission: ${noOfTrees.value}`;
            document.querySelector('.treescutwithoutpermission').innerHTML = `Number of trees cut without permission: ${info.treesCut-noOfTrees.value<0?0:info.treesCut-noOfTrees.value}`;
        }
    })
}


loginform.addEventListener('submit', handleLogin);

form.addEventListener('submit', handleSubmit);

console.log(data.data);



