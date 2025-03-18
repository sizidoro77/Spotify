document.addEventListener("DOMContentLoaded", () => {
    const artistsData = [
        { name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpeg' },
        { name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpeg' },
        { name: 'Zé Neto e Cristiano', image: './img/artista-ze-neto.jpeg' },
        { name: 'Gusttavo Lima', image: './img/artista-gustavo-lima.jpeg' },
        { name: 'Luan Santana', image: './img/artista-luan-santana.jpeg' },
        { name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpeg' }
    
      ];
     
      const albumsData = [
        { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: './img/album-white-noise.jpeg' },
        { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './img/album-ceu-explica.jpeg' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/album-vida-loka.jpeg' },
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './img/album-hit-me.jpeg' },
        { name: 'CAJU', artist: 'Liniker', image: './img/album-caju.jpeg' },
        { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: './img/album-escandalo.jpeg' }
    
      ];

      const artistGrid = document.querySelector('.artists-grid')
      const albumsGrid = document.querySelector('.albums-grid')

      artistsData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="image do ${artist.name}">
            <h3>${artist.name}</h3>
            <p>artista</p>
        `

        artistGrid.appendChild(artistCard)

      })

      albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.in
        nerHTML = `
            <img src="${album.image}" alt="image do ${album.name}">
            <p>${album.name}</p>
        `

        albumsGrid.appendChild(albumCard)

    })
})
