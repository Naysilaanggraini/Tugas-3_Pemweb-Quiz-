// Membuat elemen form
const form = document.createElement("form");

// Membuat elemen table untuk mengatur form layout
const table = document.createElement("table");

// Membuat baris untuk Nama
const rowName = document.createElement("tr");
const cellNameLabel = document.createElement("td");
const cellNameInput = document.createElement("td");

const nameLabel = document.createElement("label");
nameLabel.textContent = "Nama: ";
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.name = "nama";
nameInput.required = true;

cellNameLabel.appendChild(nameLabel);
cellNameInput.appendChild(nameInput);
rowName.appendChild(cellNameLabel);
rowName.appendChild(cellNameInput);
table.appendChild(rowName);

// Event focus pada label Nama untuk merubah warna bg for saat pengisian
nameInput.addEventListener("focus", () => {
  nameInput.style.backgroundColor = "lightyellow"; 
});
nameInput.addEventListener("blur", () => {
  nameInput.style.backgroundColor = ""; // Mengembalikan warna saat blur
});

// Event 4: mouseenter pada input Nama
nameInput.addEventListener("mouseenter", () => {
  nameInput.style.border = "2px solid blue"; // Mengubah border saat mouse di atas input
});
nameInput.addEventListener("mouseleave", () => {
  nameInput.style.border = ""; // Mengembalikan border saat mouse keluar
});

// Membuat baris untuk NIM
const rowNim = document.createElement("tr");
const cellNimLabel = document.createElement("td");
const cellNimInput = document.createElement("td");

const nimLabel = document.createElement("label");
nimLabel.textContent = "NIM: ";
const nimInput = document.createElement("input");
nimInput.type = "text";
nimInput.name = "nim";
nimInput.required = true;

cellNimLabel.appendChild(nimLabel);
cellNimInput.appendChild(nimInput);
rowNim.appendChild(cellNimLabel);
rowNim.appendChild(cellNimInput);
table.appendChild(rowNim);

// Event blur pada input NIM (ketika user mengklik atau beralih ke label lain, event blur dijalankan, yakni memeriksa panjang nilai jika tidak sesuai akan error dengan mncul alert)
nimInput.addEventListener("blur", () => {
  if (nimInput.value.length < 7) {
    alert("NIM terdiri dari 7 karakter!"); // Peringatan jika NIM harus terdiri dari 7 karakter
  }
});

// Membuat baris untuk Program Studi (Select)
const rowProdi = document.createElement("tr");
const cellProdiLabel = document.createElement("td");
const cellProdiSelect = document.createElement("td");

const prodiLabel = document.createElement("label");
prodiLabel.textContent = "Program Studi: ";
const prodiSelect = document.createElement("select");
prodiSelect.name = "prodi";
const options = ["Pendidikan Guru Sekolah Dasar", "Pendidikan Guru PAUD", "Sistem Informasi Kelautan", "Pendidikan Kelautan dan Perikanan", "Logistik Kelautan"];
options.forEach(optionText => {
    const option = document.createElement("option");
    option.value = optionText;
    option.textContent = optionText;
    prodiSelect.appendChild(option);
});

cellProdiLabel.appendChild(prodiLabel);
cellProdiSelect.appendChild(prodiSelect);
rowProdi.appendChild(cellProdiLabel);
rowProdi.appendChild(cellProdiSelect);
table.appendChild(rowProdi);

// Event 3: change pada select Program Studi
prodiSelect.addEventListener("change", () => {
  alert("Program Studi dipilih: " + prodiSelect.value); 
});

// Membuat baris untuk Jenis Kelamin (Radio Button)
const rowGender = document.createElement("tr");
const cellGenderLabel = document.createElement("td");
const cellGenderInput = document.createElement("td");

const genderLabel = document.createElement("label");
genderLabel.textContent = "Jenis Kelamin: ";
const maleInput = document.createElement("input");
maleInput.type = "radio";
maleInput.name = "gender";
maleInput.value = "Laki-Laki";
maleInput.required = true;
const maleLabel = document.createElement("label");
maleLabel.textContent = "Laki-Laki";

const femaleInput = document.createElement("input");
femaleInput.type = "radio";
femaleInput.name = "gender";
femaleInput.value = "Perempuan";
const femaleLabel = document.createElement("label");
femaleLabel.textContent = "Perempuan";

// Menambahkan radio button secara vertikal menggunakan <div> (div ini sebagai container untuk mengelompokkan isian radiobutton dalam satu layout sehingga bisa diatur dengan lbeih fleksibel)
cellGenderLabel.appendChild(genderLabel);
const genderDiv = document.createElement("div");
genderDiv.appendChild(maleInput);
genderDiv.appendChild(maleLabel);
genderDiv.appendChild(document.createElement("br")); // Baris baru
genderDiv.appendChild(femaleInput);
genderDiv.appendChild(femaleLabel);
cellGenderInput.appendChild(genderDiv);
rowGender.appendChild(cellGenderLabel);
rowGender.appendChild(cellGenderInput);
table.appendChild(rowGender);

// Membuat baris untuk Hobi (Checkbox)
const rowHobby = document.createElement("tr");
const cellHobbyLabel = document.createElement("td");
const cellHobbyInput = document.createElement("td");

const hobbyLabel = document.createElement("label");
hobbyLabel.textContent = "Hobi: ";

const hobby1 = document.createElement("input");
hobby1.type = "checkbox";
hobby1.name = "hobby";
hobby1.value = "Membaca";
const hobby1Label = document.createElement("label");
hobby1Label.textContent = "Membaca";

const hobby2 = document.createElement("input");
hobby2.type = "checkbox";
hobby2.name = "hobby";
hobby2.value = "Olahraga";
const hobby2Label = document.createElement("label");
hobby2Label.textContent = "Olahraga";

const hobby3 = document.createElement("input");
hobby3.type = "checkbox";
hobby3.name = "hobby";
hobby3.value = "Menulis";
const hobby3Label = document.createElement("label");
hobby3Label.textContent = "Menulis";

// Menambahkan checkbox secara vertikal dengan <div>
cellHobbyLabel.appendChild(hobbyLabel);
const hobbyDiv = document.createElement("div");
hobbyDiv.appendChild(hobby1);
hobbyDiv.appendChild(hobby1Label);
hobbyDiv.appendChild(document.createElement("br")); // Baris baru
hobbyDiv.appendChild(hobby2);
hobbyDiv.appendChild(hobby2Label);
hobbyDiv.appendChild(document.createElement("br")); // Baris baru
hobbyDiv.appendChild(hobby3);
hobbyDiv.appendChild(hobby3Label);
cellHobbyInput.appendChild(hobbyDiv);
rowHobby.appendChild(cellHobbyLabel);
rowHobby.appendChild(cellHobbyInput);
table.appendChild(rowHobby);

// Membuat baris untuk Submit Button
const rowSubmit = document.createElement("tr");
const cellSubmit = document.createElement("td");
cellSubmit.colSpan = 2;
cellSubmit.style.textAlign = "center"; 

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit";

cellSubmit.appendChild(submitButton);
rowSubmit.appendChild(cellSubmit);
table.appendChild(rowSubmit);

// Event 6: submit pada form
form.addEventListener("submit", (event) => {
  event.preventDefault(); 
  alert("Data yang di inputkan sudah sesuai?");
});

// Menambahkan table ke form
form.appendChild(table);

// Menambahkan form ke body
document.body.appendChild(form);
