"use strict";
// Input
const namaKaryawan = document.querySelector('.namaKaryawan');
const periodeBulan = document.querySelector('.periodeBulan');
const jabatanKaryawan = document.querySelector('.jabatanKaryawan');
const gajiKaryawan = document.querySelector('.gajiKaryawan');
// Button
const calculateButton = document.querySelector('.calculateBtn');
// Output
const namaPegawai = document.querySelector('.namaPegawai');
const periode = document.querySelector('.periode');
const jabatan = document.querySelector('.jabatan');
const gajiPegawai = document.querySelector('.gajiPegawai');
// Function
function hasilGaji() {
    const nama = (namaKaryawan.value);
    const periodeGaji = (periodeBulan.value);
    const jabatanPegawai = (jabatanKaryawan.value);
    const gaji = parseFloat(gajiKaryawan.value);
    namaPegawai.textContent = `Nama Karyawan: ${nama}`;
    periode.textContent = `Periode Bulan: ${periodeGaji}`;
    jabatan.textContent = `Jabatan: ${jabatanPegawai}`;
    gajiPegawai.textContent = `Total Gaji yang diterima ${nama} bulan ini adalah sebesar : Rp. ${gaji}`;
}
calculateButton.addEventListener('click', hasilGaji);
