import { useContext, useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { BookContext } from "../components/context/BookContext";
import { addCategories, createUser } from "../network/lib/book-endpoint";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
const AddUser = () => {
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
  const [form, setForm] = useState({
    nama: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [errors, setErrors] = useState({});
  const { setTrigger } = useContext(BookContext);
  console.log(form);
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    if (!!errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const { nama, email, password, confirmPassword, role } = form;
    const newError = {};

    if (!nama || nama === "") {
      newError.nama = "Mohon isi Nama User";
    }
    if (!email || email === "") {
      newError.email = "Mohon isi Email User";
    }
    if (!password || password === "") {
      newError.password = "Mohon isi Password";
    }
    if (!confirmPassword || confirmPassword === "") {
      newError.confirmPassword = "Mohon isi Confirm Password";
    }
    if (!role || role === "") {
      newError.role = "Mohon isi Role";
    }

    return newError;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formError = validateForm();

    if (Object.keys(formError).length > 0) {
      setErrors(formError);
    } else {
      (async () => {
        try {
          const response = await createUser({
            name: form.nama,
            email: form.email,
            password: form.password,
            confPassword: form.confirmPassword,
            role: form.role,
          });
          Swal.fire({
            icon: "success",
            text: response.data.msg,
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            text: error.response.data.msg,
          });
        }
      })();
    }
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="nama">
          <Form.Label>Nama</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan Kategori Buku"
            onChange={onChange}
            isInvalid={!!errors.nama}
            value={form.nama}
            name="nama"
          />
          <Form.Control.Feedback type="invalid">
            {errors.nama}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoComplete="off"
            isInvalid={!!errors.email}
            type="text"
            onChange={onChange}
            placeholder="Masukkan Kategori Buku"
            name="email"
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            autoComplete="new-password"
            isInvalid={!!errors.password}
            onChange={onChange}
            type="password"
            placeholder="Masukkan Password"
            name="password"
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            isInvalid={!!errors.confirmPassword}
            type="password"
            onChange={onChange}
            placeholder="Masukkan Confirm Password"
            name="confirmPassword"
          />
          <Form.Control.Feedback type="invalid">
            {errors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="red-start">Role</Form.Label>
          <Form.Select
            onChange={onChange}
            type="text"
            name="role"
            isInvalid={!!errors.role}
          >
            <option>Pilih Role</option>
            <option value="Super Admin">Super Admin</option>
            <option value="Admin">Admin</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors.role}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="success" type="submit">
          Tambah User
        </Button>
      </Form>
    </>
  );
};

export default AddUser;
