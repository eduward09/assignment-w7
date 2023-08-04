// Input
const namaKaryawan = document.querySelector('.namaKaryawan') as HTMLInputElement;
const periodeBulan = document.querySelector('.periodeBulan') as HTMLInputElement;
const jabatanKaryawan = document.querySelector('.jabatanKaryawan') as HTMLInputElement;
const gajiKaryawan = document.querySelector('.gajiKaryawan') as HTMLInputElement;

// Button
const calculateButton = document.querySelector('.calculateBtn') as HTMLButtonElement;


// Output
const namaPegawai = document.querySelector('.namaPegawai') as HTMLOutputElement
const periode = document.querySelector('.periode') as HTMLOutputElement
const jabatan = document.querySelector('.jabatan') as HTMLOutputElement
const gajiPegawai = document.querySelector('.gajiPegawai') as HTMLOutputElement


// Function
function hasilGaji(): void {
    const nama = (namaKaryawan.value);
    const periodeGaji = (periodeBulan.value);
    const jabatanPegawai = (jabatanKaryawan.value);
    const gaji = parseFloat(gajiKaryawan.value);

    namaPegawai.textContent = `Nama Karyawan: ${nama}`
    periode.textContent = `Periode Bulan: ${periodeGaji}`
    jabatan.textContent = `Jabatan: ${jabatanPegawai}`
    gajiPegawai.textContent = `Total Gaji yang diterima ${nama} bulan ini adalah sebesar : Rp. ${gaji}`

}

calculateButton.addEventListener('click', hasilGaji);