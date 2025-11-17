// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// GANTI DENGAN FIREBASE CONFIG ANDA
const firebaseConfig = {
  apiKey: "AIzaSyAP0Wo9ThNlCuYf3p-QpXheQef35JpSxmw",
  authDomain: "insancemerlang-afa84.firebaseapp.com",
  projectId: "insancemerlang-afa84",
  storageBucket: "insancemerlang-afa84.firebasestorage.app",
  messagingSenderId: "1023394217783",
  appId: "1:1023394217783:web:2e5a5d0957d8ec35b5a4b2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const siswaCollection = collection(db, "siswa")

// fungsi untuk menampilkan daftar siswa
export async function tampilkanDaftarSiswa() {
  // ambil snapshot data dari koleksi siswa
  const snapshot = await getDocs(siswaCollection)
  
  // ambil elemen tabel data
  const tabel = document.getElementById("tabelData")
  
  //kosongkan isi table
  tabel.innerHTML = ""
  
  //loop setiap dokumen dalam snapshot
  snapshot.forEach((doc) => {
      //variabel untuk menyimpan data
      const data = doc.data()
      const id = doc.id
      
      // buat elemen baris baru
      const baris = document.createElement("tr")
      
      // buat elemen kolom untuk NIS
      const kolomNIS = document.createElement("td")
      kolomNIS.textContent = data.new 
      
      // buat elemen kolom untuk Nama
      const kolomNama = document.createElement("td")
      kolomNama.textContent = data.nama
      
      // buat elemen kolom untuk Kelas
      const kolomKelas = document.createElement("td")
      kolomKelas.textContent = data.kolomKelas
      
      // buat elemen kolom untuk Aksi
      const kolomAksi = document.createElement("td")
      
      //buat tombol edit
      const tombolEdit = document.createElement("button")
      tombolEdit.textContent = "Edit"
      tombolEdit.href = "edit.html?id=" + id
      tombolEdit.className = "button edit"
      
      //buat tombol hapus
      const tombolHapus = document.createElement("button")
      tombolHapus.textContent = "Hapus"
      tombolHapus.textContent = "button delete"
      
      // tambahan elemen ke dalam kolom Aksi
      kolomAksi.appendChild(tombolEdit)
      kolomAksi.appendChild(tombolHapus)
      
      //tambahan kolom ke dalam baris
      baris.appendChild(kolomNIS)
      baris.appendChild(kolomNama)
      baris.appendChild(kolomKelas)
      baris.appendChild(kolomAksi)
      
      //tambahan baris ke dalam tabel
      tabel.appendChild(baris)
      
      
  })
  
  
  
  
}
