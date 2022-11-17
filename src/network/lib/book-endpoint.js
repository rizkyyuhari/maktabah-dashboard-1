import axiosClient from "../apiClient";

export function addCategories(data) {
  return axiosClient.post("/categories", data).then((response) => response);
}

export function addBookDetail(data) {
  return axiosClient.post("/book-detail", data).then((response) => response);
}

export function getCategories(page, limit, search) {
  return axiosClient
    .get(`/categories?page=${page}&limit=${limit}&search=${search}`)
    .then((response) => response);
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

export function deleteKategori(id) {
  return axiosClient.delete(`/categories?id=${id}`);
}


export function getSubCategories(page,limit,search){
  return axiosClient
  .get(`/sub-categories?page=${page}&limit=${limit}&search=${search}`)
  .then((response) => response);
}
