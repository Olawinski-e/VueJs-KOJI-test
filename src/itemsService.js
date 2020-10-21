import http from "@/http-common";

class itemsService {
  getAll() {
    return http.get("/posts");
  }

  getItem(id) {
    return http.get(`/posts/${id}`);
  }
}

export default new itemsService();
