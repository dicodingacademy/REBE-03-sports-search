# ILT: Sports Search – Asynchronous JavaScript Process in React

## Pengantar

Sesi ILT (Instructor-Led Training) ini bertujuan membantu peserta memahami **proses asynchronous di JavaScript**, khususnya dalam konteks aplikasi React. Studi kasus yang digunakan adalah proyek **Sports Search**, aplikasi pencarian klub olahraga berbasis data dari REST API eksternal.

Instruktur diharapkan mampu melakukan live demonstration dari proyek ini untuk menjelaskan konsep asinkron, HTTP request, dan bagaimana hasil data API ditampilkan secara dinamis dalam React.

## Learning Objectives

Setelah sesi ini, peserta diharapkan mampu:

1. Memahami arsitektur aplikasi web secara umum.
2. Mengetahui cara membuat HTTP Request secara terprogram menggunakan JavaScript (fetch/async-await).
3. Menampilkan data yang didapat dari REST API pada aplikasi React secara interaktif.

## Struktur Repository

Repository ini terdiri dari dua direktori utama:

- `starter/` → Digunakan untuk memulai sesi hands-on.
- `solution/` → Digunakan untuk melihat hasil akhir yang diharapkan.

Instruktur **harus menggunakan folder `starter`** saat memulai demo.

## Menjalankan Proyek

Setiap direktori (`starter` maupun `solution`) dapat dijalankan dengan langkah berikut:

```bash
npm install
npm run dev
```

Gunakan browser modern seperti Chrome/Firefox untuk mengakses aplikasi di [http://localhost:5173](http://localhost:5173).

## Scripts Tersedia (package.json)

- `npm run dev`: Menjalankan development server (Vite)
- `npm run build`: Membangun produksi (untuk deployment)
- `npm run preview`: Menjalankan server statis hasil build
- `npm run lint`: Menjalankan pengecekan ESLint

## Checklist Live Demo

Berikut panduan langkah-langkah yang bisa diikuti oleh instruktur:

- [ ] Jalankan `solution/` untuk memberikan **preview hasil akhir** kepada peserta.
- [ ] Tunjukkan struktur folder dan komponen React secara ringkas.
- [ ] Pindah ke `starter/` dan jelaskan bagian-bagian kode:
  - Komponen utama (App.jsx)
  - Penempatan fetch/async-await
  - Lokasi penampilan hasil pencarian
- [ ] Demonstrasikan cara fetch data menggunakan:
  - `fetch` API
  - penggunaan `useEffect` dan `useState`
- [ ] Tunjukkan bagaimana data dari API ditampilkan secara dinamis.
- [ ] Tambahkan validasi props atau fallback UI jika diperlukan.
- [ ] Tunjukkan hasil akhir yang sudah sesuai `solution/`.

## Tips untuk Instruktur

- Gunakan browser dengan dukungan developer tools untuk menunjukkan hasil request.
- Gunakan DevTools > Network tab untuk menunjukkan proses async secara real-time.
- Bila kesulitan, perhatikan implementasi `solution/` sebagai referensi akhir.
- Dorong peserta untuk mengeksplorasi fetch, async/await, loading indicator, dan error handling.

## Referensi Tambahan

- [React – useEffect](https://react.dev/reference/react/useEffect)
- [React – useState](https://react.dev/reference/react/useState)
- [MDN – Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [TailwindCSS](https://tailwindcss.com/)
