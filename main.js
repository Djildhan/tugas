// Array untuk menyimpan jumlah buku yang diminta pengguna
let bookRequests = [];

// Data buku dengan harga
const books = [
    { title: 'Judul Buku 1', author: 'Penulis 1', description: 'Buku ini menceritakan tentang...', price: 150000 },
    { title: 'Judul Buku 2', author: 'Penulis 2', description: 'Buku ini berkisah tentang...', price: 200000 },
    { title: 'Judul Buku 3', author: 'Penulis 3', description: 'Buku ini memiliki kisah menarik...', price: 180000 },
    { title: 'Judul Buku 4', author: 'Penulis 4', description: 'Buku ini adalah karya besar...', price: 220000 },
    { title: 'Judul Buku 5', author: 'Penulis 5', description: 'Buku ini mengajarkan banyak hal...', price: 160000 },
];

// Fungsi untuk menampilkan buku dan menghitung rata-rata
function showBooks() {
    const bookCount = parseInt(document.getElementById('bookCount').value);
    const bookList = document.getElementById('bookList');
    const averageElement = document.getElementById('average');
    const userBookCountElement = document.getElementById('userBookCount');

    // Clear existing books
    bookList.innerHTML = '';

    // Mengecek apakah input valid
    if (bookCount > 0 && bookCount <= books.length) {
        // Menyimpan jumlah buku yang diminta dalam array
        bookRequests.push(bookCount);

        // Menampilkan jumlah buku yang diminta
        userBookCountElement.textContent = bookCount;

        // Menggunakan for loop untuk menampilkan buku sesuai jumlah yang diminta
        for (let i = 0; i < bookCount; i++) {
            const book = books[i];
            const bookElement = document.createElement('div');
            bookElement.classList.add('book');
            bookElement.innerHTML = `
                <h2>${book.title}</h2>
                <p><strong>Penulis:</strong> ${book.author}</p>
                <p><strong>Deskripsi:</strong> ${book.description}</p>
                <p><strong>Harga:</strong> Rp ${book.price.toLocaleString()}</p>
            `;
            bookList.appendChild(bookElement);
        }

        // Menghitung rata-rata jumlah buku yang diminta
        const totalBooksRequested = bookRequests.reduce((sum, count) => sum + count, 0);
        const average = totalBooksRequested / bookRequests.length;
        averageElement.textContent = average.toFixed(2); // Menampilkan rata-rata dengan 2 desimal
    } else {
        alert("Jumlah buku tidak valid. Harap masukkan angka antara 1 hingga " + books.length);
    }
}
