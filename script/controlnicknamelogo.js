
//-----------------NICKNAME----------------//

function saveNames() {
    let names = [];
    for (let i = 1; i <= 14; i++) {
        const name = document.getElementById(`name-input-${i}`).value;
        names.push(name);
    }
    localStorage.setItem("names", JSON.stringify(names));
}

function resetNames() {
    for (let i = 1; i <= 14; i++) {
        document.getElementById(`name-input-${i}`).value = "";
    }
    localStorage.removeItem("names");
}

function switchNames() {
    let names = JSON.parse(localStorage.getItem("names")) || [];
    if (names.length < 14) return alert("Isi semua nama terlebih dahulu!");

    // Tukar bagian 1-7 dengan 8-14
    let temp = names.slice(0, 7);
    names.splice(0, 7, ...names.slice(7, 14));
    names.splice(7, 7, ...temp);

    localStorage.setItem("names", JSON.stringify(names));
    loadNames();
}

function loadNames() {
    let names = JSON.parse(localStorage.getItem("names")) || [];
    for (let i = 1; i <= 14; i++) {
        document.getElementById(`name-input-${i}`).value = names[i - 1] || "";
    }
}

// Event listener untuk input real-time
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", saveNames);
});

loadNames();

//----------------Logo

     // Simpan gambar ke localStorage saat diunggah (Realtime)
     document.getElementById('file1').addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                localStorage.setItem('logo1', e.target.result);
                updateRealtime();
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('file2').addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                localStorage.setItem('logo2', e.target.result);
                updateRealtime();
            };
            reader.readAsDataURL(file);
        }
    });

    // Fungsi untuk menukar gambar 1 dan 2
    function switchImages() {
        let logo1 = localStorage.getItem('logo1');
        let logo2 = localStorage.getItem('logo2');
        localStorage.setItem('logo1', logo2);
        localStorage.setItem('logo2', logo1);
        updateRealtime();
    }

    // Fungsi reset gambar
    function resetImages() {
        localStorage.removeItem('logo1');
        localStorage.removeItem('logo2');
        updateRealtime();
    }

    // Memicu event pembaruan untuk display.html
    function updateRealtime() {
        localStorage.setItem('updateTime', Date.now()); // Timestamp untuk memicu event
    }


