import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {
  deleteBookContent,
  deleteKategori,
  getBookContentPagination,
  getCategories,
} from "../../network/lib/book-endpoint";
import ReactPaginate from "react-paginate";
import "./coba.css";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../features/authSlice";

const EditBookContentPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  const [kategori, setKategori] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [resultDelete, setResultDelete] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchKategoriList();
  }, [page, resultDelete, search]);

  const fetchKategoriList = async () => {
    try {
      const response = await getBookContentPagination(page, limit, search);
      setKategori(response.data.result);
      setPage(response.data.page);
      setRows(response.data.totalRows);
      setPages(response.data.totalPage);
    } catch (error) {
      console.log(error);
    }
  };

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  const handleDelete = async (id, page) => {
    try {
      const result = await deleteBookContent(id, page);
      setResultDelete({ id });
    } catch (error) {
    } finally {
      Swal.fire("Deleted!", `${page} has been deleted.`, "success");
    }
  };

  const onChangeSearch = (search) => {
    setPage(0);
    setSearch(search);
  };

  return (
    <>
      <div className="mb-3 d-flex justify-content-between">
        <div className="w-25">
          <Button
            onClick={() => {
              navigate("/home/tambah/konten-buku");
            }}
          >
            + Tambah Konten Buku
          </Button>
        </div>
      </div>
      {kategori.length !== 0 ? (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Halaman</th>
                <th>Konten</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {kategori.map((kategori, index) => {
                return (
                  <tr key={kategori.pk_bookdetail + index}>
                    <td>{index + 1}</td>
                    <td>{kategori.title}</td>
                    <td>{kategori.page}</td>
                    <td>
                      {kategori.book_content.length > 20
                        ? kategori.book_content.substring(0, 20) + "..."
                        : kategori.book_content}
                    </td>
                    <td>
                      {
                        <div className="red">
                          <Link
                            className="mr-3"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate("/home/update/konten-buku", {
                                state: {
                                  kategori,
                                },
                              });
                            }}
                          >
                            {
                              <AiFillEdit
                                color="rgb(255,165,0)"
                                size={"25px"}
                              />
                            }
                          </Link>
                          <Link
                            onClick={() => {
                              Swal.fire({
                                title: "Apakah anda Yakin?",
                                text: "Anda tidak akan dapat mengembalika data yang sudah di Hapus!",
                                icon: "warning",
                                showCancelButton: true,
                                cancelButtonText: "Batalkan",
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Hapus!",
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  handleDelete(
                                    kategori.pk_bookdetail,
                                    kategori.page
                                  );
                                }
                              });
                            }}
                          >
                            {<AiFillDelete color="#dc3545" size={"25px"} />}
                          </Link>
                        </div>
                      }
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <p>
            Total Rows : {rows} Page: {rows ? page + 1 : 0} of {pages}
          </p>

          <nav
            className="d-flex justify-content-center"
            role="navigation"
            aria-label="pagination"
            key={rows}
          >
            <ReactPaginate
              previousLabel={"< prev"}
              nextLabel={"Next >"}
              pageCount={pages}
              onPageChange={changePage}
              containerClassName={"pagination"}
              pageLinkClassName={"page-link"}
              previousLinkClassName={"page-link"}
              previousClassName={"page-item"}
              nextLinkClassName={"page-link"}
              nextClassName={"page-item"}
              activeClassName={"active"}
            />
          </nav>
        </>
      ) : (
        "Tidak ada data yang bisa ditampilkan"
      )}
    </>
  );
};

export default EditBookContentPage;
