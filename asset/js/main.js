const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const audio1 = $('.currentsong .play__container audio');
const avt = $('.currentsong .avt img');
const namesong1 = $('.currentsong .info .name');
const composer = $('.currentsong .info .author');
const playlist = $('.song__container');
const app = {
    currentIndex: 0,
    songs: [

        {
            name: "Thê Lương",
            path: "./asset/audio/Theluong.mp3",
            images: "./asset/img/ĐNXE.jpg",
            author: "Unknown",
        },
        {
            name: "Đếm Ngày Xa Em",
            path: "./asset/audio/Dem Ngay Xa Em.mp3",
            images: "./asset/img/ĐNXE.jpg",
            author: "Only C",
        },
        {
            name: "Chờ Anh Nhé",
            path: "./asset/audio/Cho Anh Nhe-HQH.mp3",
            images: "./asset/img/ĐNXE.jpg",
            author: "Hồ Quang Hiếu",
        },
        {
            name: "Sao Em Vô Tình",
            path: "./asset/audio/Sao Em Vo Tinh - Jack Liam (NhacPro.net).mp3",
            images: "./asset/img/ĐNXE.jpg",
            author: "Jack",
        },
        {
            name: "Đồi Hoa Mặt Trời",
            path: "./asset/audio/Doi Hoa Mat Troi.mp3",
            images: "./asset/img/ĐNXE.jpg",
            author: "Hoàng Yến Chibi",
        },
        {
            name: "Hai Thế Giới",
            path: "./asset/audio/Hai The Gioi.mp3",
            images: "./asset/img/ĐNXE.jpg",
            author: "OST-Yêu Nhầm Thần Chết",
        },
        {
            name: "Chia Tay Là Giải Pháp",
            path: "./asset/audio/Chia Tay La Giai Phap.mp3",
            images: "./asset/img/ĐNXE.jpg",
            author: "Phát Hồ",
        },
        {
            name: "Bên Trên Tầng Lầu",
            path: "./asset/audio/Ben TrenTang Lau.mp3",
            images: "./asset/img/ĐNXE.jpg",
            author: "Phát Hồ",
        },
        {
            name: "Chia Tay Là Giải Pháp",
            path: "./asset/audio/Chia Tay La Giai Phap.mp3",
            images: "./asset/img/ĐNXE.jpg",
            author: "Phát Hồ",
        },
        {
            name: "What Are Words - Chris Medina",
            path: "./asset/audio/What Are Words - Chris Medina.mp3",
            images: "./asset/img/ĐNXE.jpg",
            author: "UnKnown",
        },

        {
            name: "Winter In My Heart - Befour",
            path: "./asset/audio/Winter In My Heart - Befour.mp3",
            images: "./asset/img/ĐNXE.jpg",
            author: "UnKnown",
        },

        {
            name: "A Little Love - Fiona Fung",
            path: "./asset/audio/A Little Love - Fiona Fung.mp3",
            images: "./asset/img/ĐNXE.jpg",
            author: "UnKnown",
        },
        {
            name: "Winter In My Heart - Befour",
            path: "./asset/audio/Winter In My Heart - Befour.mp3",
            images: "./asset/img/ĐNXE.jpg",
            author: "UnKnown",
        },
        {
            name: "Hồng Nhan",
            path: "./asset/audio/Hong Nhan - Jack (NhacPro.net).mp3",
            images: "./asset/img/ĐNXE.jpg",
            author: "Jack97",
        },
        {
            name: "I Cry",
            path: "./asset/audio/I Cry.mp3",
            images: "./asset/img/ĐNXE.jpg",
            author: "UnKnown",
        },
        {
            name: "Là Một Thằng Con Trai",
            path: "./asset/audio/La 1 Thang Con Trai - Jack (NhacPro.net).mp3",
            images: "./asset/img/ĐNXE.jpg",
            author: "Jack97",
        },
        {
            name: "Sea Shanty",
            path: "./asset/audio/Sea shanty.mp3",
            images: "./asset/img/ĐNXE.jpg",
            author: "UnKnown",
        },
    ],
    loadCurrentSong: function () {
        audio1.src = this.currentSong.path;
        avt.src = `${this.currentSong.images}`;
        namesong1.innerHTML = this.currentSong.name
        composer.innerHTML = this.currentSong.author
        // console.log(audio1, avt, namesong1, composer);
        
    },

    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex];
            },

        })
    },
     //   Render Dữ Liệu
     render: function (){
        const htmls = this.songs.map(song => {
            return `
            <div class="song">
                <div class="avt">
                    <img src="${song.images}" alt="">
                </div>
                <div class="info">
                    <div class="nameSong">
                        ${song.name}
                    </div>
                    <div class="singerofSong">
                        ${song.author}
                    </div>
                </div>
                <div class="option">
                </div>
            </div>`
        })
        playlist.innerHTML = htmls.join("");
    },
    // Chạy các funtion trên app
    start: function () {
        app.render();
        // Định nghĩa các thuộc tính cho object
        this.defineProperties();
        // Tải thông tin bài hát đầu tiên
        this.loadCurrentSong();
    }
}
   

// Thực thi trên app
app.start()