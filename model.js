
        <script>
        const openModalBtn = document.getElementById("openModal");
        const modal = document.getElementById("myModal");
        const closeBtn = document.getElementsByClassName("close")[0];
        const linkInput = document.getElementById("linkInput");
        const copyButton = document.getElementById("copyButton");

        openModalBtn.addEventListener("click", function () {
          modal.style.display = "block";
        });

        closeBtn.addEventListener("click", function () {
          modal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        });

        copyButton.addEventListener("click", function () {
          linkInput.select();
          linkInput.setSelectionRange(0, 99999); // For mobile devices
          document.execCommand("copy");
          alert("Link copied!");
        });
      </script>