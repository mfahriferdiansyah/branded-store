[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10471235&assignment_repo_type=AssignmentRepo)
# P3-Challenge-1

- Tema Aplikasi: Brand Showcase
- CSS Framework: Tailwind

Struktur Folder:

- server (PORT: 3000)
- client-user
- client-admin

## W1D1

Target:

- [x] Lecture - React Intro
- [x] React: Class Component vs Function Component
- [x] Mempelajari State menggunakan useState
- [x] Mengirim Props baik berupa sebuah state atau function
- [x] Event Handling (onClick, onChange, onSubmit)
- [x] Conditional Rendering di dalam React
- [x] Looping List of Data di dalam React
- [x] Lifecycle component menggunakan useEffect
- [x] Membuat server (json-server)
- [x] Membuat react app untuk client-user (Styling)
- [x] Membuat react app untuk client-admin (CRUD)
- [x] Menentukan Thema Aplikasi
- [x] Menentukan Design dan pemilihan CSS Framework

**Report:**

> Pada lecture hari ini saya mempelajari dasar dari library javascript yaitu react menggunakan create-react-app, penggunaan dasar dari hooks, state, props (state/function), dan event handling.

> Progress challange pada sore ini, saya sedang mengerjakan client-admin dimana sampai pada tahap login-page. Untuk selanjutnya akan mengerjakan dashboard, serta form product, untuk kemudian saya selesaikan sampai client-user sebelum lecture esok hari.

> Pada saat sesi standup dijelaskan lebih lanjut terkait penggunaan useEffect dan cara menghindari infinite loop, serta pemanfaatan spread operator pada setter.

> contoh: Hari ini saya belajar React Component. Saya memahami bagaimana cara React bekerja. Lifecycle yang sudah saya coba adalah componentDidMount yang digunakan untuk fetch data dst. Namun saya belum mencoba menggunakan onSubmit dikarenakan data yang didapat belum sesuai.
> Pada tugas ini, saya memilih Tema A dengan mengambil referensi dari B. Saya juga akan menggunakan CSS Framework yaitu Tailwind CSS

## W1D2

Target:

- [x] Lecture - Custom Hooks
- [x] Rules of Hooks
- [x] Lecture - React-Router
- [x] Membuat router user-side (min: home, detail)
- [x] Membuat router admin-side (min: login, add admin, CRUD main entitas, CRUD another entitas)
- [x] Membuat privateRoute untuk admin

**Report:**

> Hari ini dijelaskan terkait tentang custom hooks, dan react router. PENTING, selalu gunakan hooks pada top level. Pada react router, bisa menggunakan hooks useNavigate untuk berpindah page, dan redirect bila digunakan pada selain top level. Untuk mendapatkan params bisa menggunakan useParams. proteksi router dilakukan seperti halnya pada vue, menggunakan validasi localstorage terkait access token untuk kemudian di redirect.

> Progress tugas sore ini sampai di 03-router, jika sudah selesai akan meneruskan ke bagian reuse form input untuk edit, dan reuse form login untuk membuat page menambahkan admin baru.

## W1D3

Target:

- [x] Lecture - Redux
- [x] State vs Global State
- [x] Bagaimana cara membuat Store
- [x] Bagaimana cara membuat Reducer
- [x] Bagaimana cara membuat Action
- [x] Membuat Action Creators
- [x] Membuat Action Types
- [x] Lecture - Redux-thunk (handle async)
- [x] Cara menggunakan combineReducers

**Report:**

> Mempelajari penggunaan redux, dan binding dengan react. Terdapat hooks pada redux, diantaranya useSelector yang kurang lebih berfungsi seperti getter, dan useDispatch sebagai setter. Penggunaan middleware untuk proteksi dan handle async. Reducer berisi kumpulan action pure function. Seperti assign hasil fetch kedalam state, ataupun assign state biasa. Default pada switch reducer bersifat seperti getter karena mereturn state. Jadi wajib ada.

> Progress malam ini sampai pada 04 redux pada sisi admin, pada home, form product, dan auto populate data saat edit.

## W1D4

Target:

- [x] Lecture - SQL Transaction
- [x] Membuat server mengguanakan express.js, postgreSQL dan Sequelize
- [x] Menentukan associations antar tables
- [x] Lecture - AWS EC2
- [x] Membuat transaction saat membuat entitas baru pada main table. Pastikan ada assosiasi di dalamnya

**Report:**

> Lecture hari ini belajar tentang dasar penggunaan transaction dan deployment. Transaction bertujuan agar ketika terjadi kesalahan dalam chain query bisa dilakukan rollback, sifat transaction isolated membuat data base utama tidak mendapatkan effect error ketika terjadi kesalahan. Error hanya terjadi pada scope transaction. Ketika ingin meneruskan hasil scope tersebut bisa menggunakan commit transaction, dan ketika ingin memulai bisa menggunakan begin, dan rollback ketika terjadi error atau keluar dari transaction.

> Progress tugas sampai pada lecture middleware thunk, dan mulai masuk ke proses pembuatan server.

## W1D5

Target:

- [x] LC Simulation
- [x] Practice, Practice, Practice

**Report:**
```md
# Buat router
npm create-react-app client
Install dependencies
> Bikin folder router - > indexJs
> Declare path dan element
createBrowserRoute pada indexjs
> Masukin router provider ke app.js
RouterProvidr pada app js
[reactRouter](https://reactrouter.com/en/main/start/tutorial)
```

```md
# Buat pages
> Bikin children untuk navbar pakai layout < Outlet > dari react-router
> Navbar/sidebar
[daisyUi-Navbar](https://daisyui.com/components/drawer/)
> Table
[daisyUi-Table](https://daisyui.com/components/table/)
> Button
[daisyUi-Button](https://daisyui.com/components/button/)
> Text Input
[Input-daisyUi](https://daisyui.com/components/input/)
> Theme
[Theme-daisyUi](https://daisyui.com/docs/themes/)
```

```md
# Buat Store
> Setting store -> index.js
[Ke-Basic-Example](https://redux.js.org/introduction/getting-started)
Kalau possible mending langsung digabung juga sama actionCreator yang bakal butuh thunk.

> Import provider react-redux
[Api-Overview](https://react-redux.js.org/introduction/getting-started)

> Layouting + Fetch -> Bikin actionCreator + thunk
Ketika fetch jangan lupa check if res.ok dan return res.json()
[Fetch-Api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
[json-server](https://github.com/typicode/json-server)

> Ngerjain login handle form, delete, update, create dll.

formwatcher pakai onChange pada input pada useState di spread dimasukin ke useState / lokal dulu.

handleForm pakai onSubmit, kalau mau ada button cancel kasih type button biar ga ngesubmit. Functionya berisi dispatch useState lokal formWatcher.

angan lupa lakukan dispatch fetch apabila diperlukan pada actionCreator/thunk setelah melakukan delete/post/patch.

setelah melakukan update data lakukan navigate pakai hooks usenavigate ke halaman yang dituju.
```

```
Notes:
> Belajar lagi cara CRUID

> Latihan handleForm, Query filter dan sorting
```
...
