
        // Show appropriate input fields based on media type selection
        function toggleInputs() {
            const mediaType = document.getElementById("mediaType").value;
            document.getElementById("movieInput").style.display = mediaType === "movie" ? "block" : "none";
            document.getElementById("tvShowInput").style.display = mediaType === "tvshow" ? "block" : "none";
        }

        // Load media based on the selected type and input fields
        function loadMedia() {
            const mediaType = document.getElementById("mediaType").value;
            const iframe = document.getElementById("mediaIframe");
            let src = "";

            if (mediaType === "movie") {
                const movieCode = document.getElementById("movieCode").value;
                if (!movieCode) {
                    alert("Please enter a movie code.");
                    return;
                }
                src = `https://embed.su/embed/movie/${movieCode}`;
            } else if (mediaType === "tvshow") {
                const tvShowId = document.getElementById("tvShowId").value;
                const seasonNumber = document.getElementById("seasonNumber").value;
                const episodeNumber = document.getElementById("episodeNumber").value;

                if (!tvShowId || !seasonNumber || !episodeNumber) {
                    alert("Please enter the TV show ID, season number, and episode number.");
                    return;
                }
                src = `https://embed.su/embed/tv/${tvShowId}/${seasonNumber}/${episodeNumber}`;
            } else {
                alert("Please select a media type.");
                return;
            }

            // Set the iframe source and display the video container
            iframe.src = src;
            document.getElementById("videoContainer").style.display = "block";
        }