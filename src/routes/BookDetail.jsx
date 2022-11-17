import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { BookContext } from "../components/context/BookContext";
import { addBookDetail } from "../network/lib/book-endpoint";
import Swal from "sweetalert2";

const defaultValue = {
  title: "",
  author: "",
  publish: "",
  pages: "",
  price: "",
  source: "",
  description: "",
  pk_categoryid: "",
  pk_subcategoryid: "",
};
const BookDetail = () => {
  const [formField, setFormField] = useState(defaultValue);
  const {
    title,
    author,
    publish,
    pages,
    price,
    source,
    description,
    pk_categoryid,
    pk_subcategoryid,
  } = formField;
  const [errors, setErrors] = useState({});
  const { bookData, setTriggerBk } = useContext(BookContext);
  const filteredCategory = bookData.filter(
    (cate) => cate.pk_categoryid === pk_categoryid
  );

  const onChangeValue = (e) => {
    const { name, value } = e.target;
    if (name === "pk_categoryid") {
      setFormField({ ...formField, [name]: value, ["pk_subcategoryid"]: "" });
    } else {
      setFormField({ ...formField, [name]: value });
    }

    if (!!errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newError = {};
    if (!title || title === "") {
      newError.title = "Mohon Isi Judul Buku!";
    }
    if (!author || author === "") {
      newError.author = "Mohon Isi Pengarang Buku";
    }
    if (!pk_categoryid || pk_categoryid === "") {
      newError.pk_categoryid = "Mohon Pilih Kategori Buku";
    }
    return newError;
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const formError = validateForm();
    if (Object.keys(formError).length > 0) {
      setErrors(formError);
    } else {
      (async () => {
        try {
          const response = await addBookDetail({
            title,
            author,
            publish,
            pages,
            price,
            source,
            description,
            pk_categoryid,
            pk_subcategoryid,
          });
          Swal.fire({
            icon: "success",
            text: response.data.message,
          });
          setTriggerBk(response);
          setFormField(defaultValue);
        } catch (error) {
          Swal.fire({
            icon: "error",
            text: error.response.data.message,
          });
        } finally {
          e.target.reset();
        }
      })();
    }
  };

  return (
    <>
      <Form onSubmit={onSubmitForm}>
        <Form.Group className="mb-3">
          <Form.Label>Kategori Buku</Form.Label>
          <Form.Select
            onChange={onChangeValue}
            name="pk_categoryid"
            isInvalid={errors.pk_categoryid}
          >
            <option value="">Pilih Kategori Buku</option>
            {bookData.map((cate) => (
              <option key={cate.pk_categoryid} value={cate.pk_categoryid}>
                {cate.category_name}
              </option>
            ))}
          </Form.Select>
          <div style={{ color: "red" }}>{errors.pk_categoryid}</div>
        </Form.Group>

        {filteredCategory[0]?.sub_categories?.length > 0 && (
          <Form.Group className="mb-3">
            <Form.Label>Sub Kategori Buku</Form.Label>
            <Form.Select
              onChange={onChangeValue}
              name="pk_subcategoryid"
              isInvalid={!!errors.pk_subcategoryid}
            >
              <option value="">Pilih Sub Kategori Buku</option>
              {filteredCategory[0].sub_categories.map((sub) => (
                <option key={sub.pk_subcategoryid} value={sub.pk_subcategoryid}>
                  {sub.sub_category_name}
                </option>
              ))}
            </Form.Select>
            <div style={{ color: "red" }}>{errors.pk_subcategoryid}</div>
          </Form.Group>
        )}
        <Form.Group className="mb-3">
          <Form.Label>
            Title <span>*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Judul Buku"
            onChange={onChangeValue}
            name="title"
            value={title}
            isInvalid={!!errors.title}
          />
          <Form.Control.Feedback type="invalid">
            {errors.title}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nama Author Buku"
            onChange={onChangeValue}
            name="author"
            value={author}
            isInvalid={!!errors.author}
          />
          <Form.Control.Feedback type="invalid">
            {errors.author}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Publish</Form.Label>
          <Form.Control
            type="date"
            onChange={onChangeValue}
            value={publish}
            name="publish"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Pages</Form.Label>
          <Form.Control
            type="number"
            placeholder="Jumlah Halaman Buku"
            onChange={onChangeValue}
            name="pages"
            value={pages}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Harga Buku"
            onChange={onChangeValue}
            name="price"
            value={price}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Source</Form.Label>
          <Form.Control
            type="text"
            placeholder="Sumber Buku"
            onChange={onChangeValue}
            name="source"
            value={source}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control
            type="text"
            placeholder="Deskripsi Buku"
            onChange={onChangeValue}
            value={description}
            name="description"
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Tambah Judul Buku
        </Button>
      </Form>
    </>
  );
};

export default BookDetail;
