const root = document.querySelector('#root');
const navLinks = document.querySelectorAll('.at-link');
const home = document.querySelector('.at-home-dashboard');

const homeCard =  (name, suhuRuangan) => {

    return (
        `
        <div class='flex flex-col items-center p-[20px] border-[1px] border-black'>
            <div>
                <h3>${name}</h3>
            </div>
            <div>
                <p>${suhuRuangan}</p>
            </div>
        </div>
        `
    )
}

const getAllData = async () => {
    const data = await axios({
        method: 'get',
        url: 'http://localhost:8080/room',
        responseType: 'application/json'
      })
      
    return JSON.parse(data.data);
}

navLinks.forEach((it) => {
    it.addEventListener('click', function () {
        if (this.textContent === 'Dashboard') {
            window.location.href = 'http://127.0.0.1:5500/src/pages/dashboard.html'
        }
    })
})

const makeCardData = async () => {
    const roomData = await getAllData();

    let content = '';

    for (const room of roomData) {
        console.log(room.name, room.suhuRuangan);
        content += homeCard(room.name, room.suhuRuangan);
    }

    console.log(content);

    home.innerHTML += content;
};

makeCardData();