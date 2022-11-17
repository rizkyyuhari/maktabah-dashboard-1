import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import KategoriBuku from "./routes/KategoriBuku";
import SubKategoriBuku from "./routes/SubKategoriBuku";
import BookDetail from "./routes/BookDetail";
import BookContent from "./routes/BookContent";
import EditKategoriPage from "./routes/view-data-page/EditKategoriPage";
import EditSubKategori from "./routes/view-data-page/EditSubKategori";
import PageNotFound from "./routes/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<EditKategoriPage />} />
        <Route path="/view-sub-kategori" element={<EditSubKategori />} />
        <Route path="tambah/kategori-buku" element={<KategoriBuku />} />
        <Route path="tambah/sub-kategori-buku" element={<SubKategoriBuku />} />
        <Route path="tambah/buku" element={<BookDetail />} />
        <Route path="tambah/konten-buku" element={<BookContent />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
