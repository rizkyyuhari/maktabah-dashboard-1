import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { getListOfUser } from "../../network/lib/book-endpoint";
import ReactPaginate from "react-paginate";
import "./coba.css";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import SearchBar from "../../components/search-bar/SearchBar";
import { useContext } from "react";
import { BookContext } from "../../components/context/BookContext";
import { useDispatch,useSelector } from "react-redux";
import { getMe } from "../../features/authSlice";
const EditUsers = () => {
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

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [resultDelete, setResultDelete] = useState({});
  const [search, setSearch] = useState("");

  const { setTrigger } = useContext(BookContext);

  useEffect(() => {
    fetchKategoriList();
  }, [page, resultDelete, search]);

  const fetchKategoriList = async () => {
    try {
      const response = await getListOfUser(page, limit, search);
      console.log("response", response);
      setUsers(response.data.result);
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

  //   const handleDelete = async (id, name) => {
  //     try {
  //       const result = await deleteKategori(id);
  //       setResultDelete({ id });
  //       setTrigger(result);
  //     } catch (error) {
  //     } finally {
  //       Swal.fire("Deleted!", `${name} has been deleted.`, "success");
  //     }
  //   };

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
              navigate("/home/tambah/users");
            }}
          >
            + Tambah user
          </Button>
        </div>

        <SearchBar placeholder="Cari Users" onSubmitHandler={onChangeSearch} />
      </div>
      {users.length !== 0 ? (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.uuid}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    {
                      <div className="red">
                        <Link
                          className="mr-3"
                          onClick={(e) => {
                            e.preventDefault();
                            // navigate(
                            //   `/update/kategori-buku?id=${kategori.pk_categoryid}`,
                            //   {
                            //     state: {
                            //       kategori: kategori.category_name,
                            //       id: kategori.pk_categoryid,
                            //     },
                            //   }
                            // );
                          }}
                        >
                          {<AiFillEdit color="rgb(255,165,0)" size={"25px"} />}
                        </Link>
                        <Link
                        //   onClick={() => {
                        //     Swal.fire({
                        //       title: "Are you sure?",
                        //       text: "You won't be able to revert this!",
                        //       icon: "warning",
                        //       showCancelButton: true,
                        //       confirmButtonColor: "#3085d6",
                        //       cancelButtonColor: "#d33",
                        //       confirmButtonText: "Yes, delete it!",
                        //     }).then((result) => {
                        //       if (result.isConfirmed) {
                        //         console.log("delete berhasil");
                        //         handleDelete(
                        //           kategori.pk_categoryid,
                        //           kategori.category_name
                        //         );
                        //       }
                        //     });
                        //   }}
                        >
                          {<AiFillDelete color="#dc3545" size={"25px"} />}
                        </Link>
                      </div>
                    }
                  </td>
                </tr>
              ))}
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

export default EditUsers;
