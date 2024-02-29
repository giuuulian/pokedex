var audio = document.getElementById("audioPlayer");

        function toggleAudio() {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }