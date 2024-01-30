# Meal App

Aplikasi ini adalah aplikasi sederhana yang memungkinkan pengguna mencari resep makanan berdasarkan kategori, lokasi, dan bahan-bahan tertentu. Aplikasi ini menggunakan React dan beberapa dependensi terkait.

## Live Demo

Aplikasi ini dapat diakses secara langsung melalui URL berikut: [Meal App Live Demo](https://ahmakbardev.github.io/meal-app/)

## Fitur

- Pencarian resep berdasarkan kategori makanan.
- Pencarian resep berdasarkan lokasi.
- Pencarian resep berdasarkan bahan-bahan tertentu.
- Informasi detail tentang setiap resep termasuk gambar, instruksi, dan video tutorial (jika tersedia).

## Cara Menjalankan Aplikasi secara Lokal

1. Pastikan Anda memiliki Node.js dan npm diinstal di sistem Anda.

2. Clone repositori ini ke lokal:

    ```bash
    git clone https://github.com/ahmakbardev/meal-app.git
    cd meal-app
    ```

3. Instal dependensi:

    ```bash
    npm install
    ```

4. Jalankan aplikasi:

    ```bash
    npm start
    ```

    Aplikasi akan berjalan di http://localhost:3000/.

## Dependensi

Aplikasi ini menggunakan beberapa dependensi utama:

- [Bootstrap](https://getbootstrap.com/): ^5.3.2
- [React Icons](https://react-icons.github.io/react-icons/): ^5.0.1
- [React Router DOM](https://reactrouter.com/): ^6.21.3
- [React YouTube](https://github.com/tjallingt/react-youtube): ^10.1.0

## Deployment

Aplikasi ini di-deploy menggunakan GitHub Pages. Proses deployment diatur menggunakan `gh-pages`.

### Cara Deploy ke GitHub Pages

1. Instalasi `gh-pages` sebagai devDependency:

    ```bash
    npm install --save-dev gh-pages
    ```

2. Tambahkan script deploy ke `package.json`:

    ```json
    "scripts": {
      "deploy": "gh-pages -d build"
    }
    ```

3. Jalankan script deploy:

    ```bash
    npm run deploy
    ```

    Setelah proses selesai, aplikasi dapat diakses melalui URL: [Meal App Live Demo](https://ahmakbardev.github.io/meal-app/)
   
## Lisensi

Diprogram dengan ❤️ oleh [ahmakbar.dev].
