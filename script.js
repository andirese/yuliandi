function bukaUndangan() {
    document.querySelector('.opening').style.display = 'none';
    document.querySelector('#content').classList.remove('hidden');
    document.getElementById('bgm').play();
}

function toggleMusic() {
    var music = document.getElementById('bgm');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
