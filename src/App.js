import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import AddKategoriBookPage from "./routes/AddKategoriBookPage";
import AddSubKategoriBookPage from "./routes/AddSubKategoriBookPage";
import AddBookDetailPage from "./routes/AddBookDetailPage";
import AddBookContentPage from "./routes/AddBookContentPage";
import EditKategoriPage from "./routes/view-data-page/EditKategoriPage";
import EditSubKategori from "./routes/view-data-page/EditSubKategori";
import EditBookDetailPage from "./routes/view-data-page/EditBookDetailPage";
import EditBookContentPage from "./routes/view-data-page/EditBookContentPage";
import UpdateKategoriPage from "./routes/edit-page/UpdateKategoriPage";
import UpdateSubKategoriPage from "./routes/edit-page/UpdateSubKategoriPage";
import UpdateBookDetailPage from "./routes/edit-page/UpdateBookDetailPage";
import UpdateBookContentPage from "./routes/edit-page/UpdateBookContentPage";
import AddTableOfContent from "./routes/AddTableOfContent";
import EditTableOfContent from "./routes/view-data-page/EditTableOfContent";
import UpdateTableOfContent from "./routes/edit-page/UpdateTableOfContent";
import Login from "./components/login/Login";

import EditUsers from "./routes/view-data-page/EditUsers";
import AddUser from "./routes/AddUser";
import Home from "./routes/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Sidebar />}>

        <Route index element={<EditKategoriPage />} />
        <Route path="/home/users" element={<EditUsers />} />
        <Route path="/home/book-detail" element={<EditBookDetailPage />} />
        <Route path="/home/sub-kategori" element={<EditSubKategori />} />

        <Route
          path="/home/tambah/kategori-buku"
          element={<AddKategoriBookPage />}
        />
        <Route path="/home/tambah/users" element={<AddUser />} />
        <Route
          path="/home/tambah/sub-kategori-buku"
          element={<AddSubKategoriBookPage />}
        />
        <Route path="/home/book-content" element={<EditBookContentPage />} />
        <Route path="/home/tambah/buku" element={<AddBookDetailPage />} />
        <Route
          path="/home/tambah/konten-buku"
          element={<AddBookContentPage />}
        />
        <Route
          path="/home/update/kategori-buku"
          element={<UpdateKategoriPage />}
        />
        <Route
          path="/home/update/sub-kategori-buku"
          element={<UpdateSubKategoriPage />}
        />
        <Route path="/home/table-of-content" element={<EditTableOfContent />} />
        <Route path="/home/update/buku" element={<UpdateBookDetailPage />} />
        <Route
          path="/home/update/konten-buku"
          element={<UpdateBookContentPage />}
        />
        <Route
          path="/home/tambah/table-of-content"
          element={<AddTableOfContent />}
        />

        <Route
          path="/home/update/table-of-content"
          element={<UpdateTableOfContent />}
        />
      </Route>
    </Routes>
  );
}

export default App;
