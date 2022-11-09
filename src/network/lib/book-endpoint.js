import axiosClient from "../apiClient";

export function addCategories(data) {
  return axiosClient.post("/categories", data).then((response) => response);
}

export function addBookDetail(data) {
  return axiosClient.post("/book-detail", data).then((response) => response);
}

export function getCategories() {
  return axiosClient.get("/categories");
}

export function addSubCategories(data) {
  return axiosClient.post("/sub-categories", data).then((response) => response);
}

export function getBookDetail() {
  return axiosClient.get("book-detail");
}

export function addBookContent(data) {
  return axiosClient.post("/book-content", data).then((response) => response);
}

export function getKategoriList(page, limit, search) {
  return axiosClient
    .get(`/catepagi?page=${page}&limit=${limit}&search=${search}`)
    .then((response) => response);
}

export function deleteKategori(id) {
  return axiosClient.delete(`/categories?id=${id}`);
}
