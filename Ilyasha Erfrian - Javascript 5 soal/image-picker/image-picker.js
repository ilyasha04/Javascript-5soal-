const img = document.querySelector(".image");
let hasil = document.querySelector(".hasil");

const daftarImage = {
    img1: "./Games/2022 chorus.jpg",
    img2: "./Games/Assassins Cread.jpg",
    img3: "./Games/counter strike global offensive.jpg",
    img4: "./Games/destiny 2 beyond light.jpg",
    img5: "./Games/gerlat of rivia.jpg",
    img6: "./Games/halo 20th anniversary.jpg",
    img7: "./Games/god of war.jpg",
    img8: "./Games/jinx vi league of legends.jpg",
    img9: "./Games/mass effect 2 torn loyalty.jpg",
    img10: "./Games/red dead redemption.jpg",
};

const {
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
} = daftarImage;

img.addEventListener("change", () => {
    for (const i in daftarImage) {
        if (img.value == i) {
            alert(`Gambar ${daftarImage[i]}`);
           hasil.innerHTML = `<img src="${daftarImage[i]}" />`;
        }
    }
});