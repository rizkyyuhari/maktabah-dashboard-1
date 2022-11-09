import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import KategoriBuku from "./routes/KategoriBuku";
import SubKategoriBuku from "./routes/SubKategoriBuku";
import BookDetail from "./routes/BookDetail";
import BookContent from "./routes/BookContent";
import EditKategoriPage from "./routes/EditablePage/EditKategoriPage";
import Test from "./test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<EditKategoriPage/>}/>
        <Route path="kategori-buku" element={<KategoriBuku />} />
        <Route path="sub-kategori-buku" element={<SubKategoriBuku />} />
        <Route path="buku" element={<BookDetail />} />
        <Route path="konten-buku" element={<BookContent />} />
        <Route path="test" element={<Test/>}/>
      </Route>
    </Routes>
  );
}

export default App;
