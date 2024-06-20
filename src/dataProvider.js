import { fetchUtils } from "react-admin";

const apiUrl = "https://devsterapi.vercel.app";
// const apiUrl = "http://localhost:4000";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("token");
  options.headers.set("Authorization", `Bearer ${token}`);

  if (options.body instanceof FormData) {
    options.headers.delete("Content-Type");
  } else {
    options.headers.set("Content-Type", "application/json");
  }

  return fetchUtils.fetchJson(url, options);
};

const dataProvider = {
  getList: (resource) => {
    const url = `${apiUrl}/${resource}`;
    return httpClient(url).then(({ json }) => ({
      data: json.map((item) => ({ ...item, id: item._id })),
      total: json.length,
    }));
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: { ...json, id: json._id },
    })),

  update: async (resource, params) => {
    if (params.data.image || params.data.file) {
      const formData = new FormData();

      if (params.data.file) {
        formData.append("name", params.data.name);
        formData.append("position", params.data.position);
        formData.append("links", JSON.stringify(params.data.links));
        formData.append("file", params.data.file.rawFile);
      } else {
        formData.append("title", params.data.title);
        formData.append("image", params.data.image.rawFile);
      }

      const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
        method: "PUT",
        body: formData,
      });
      return {
        data: { ...params.data, id: json._id },
      };
    } else {
      const { json: json_1 } = await httpClient(
        `${apiUrl}/${resource}/${params.id}`,
        {
          method: "PUT",
          body: JSON.stringify(params.data),
        }
      );
      return { data: { ...json_1, id: json_1._id } };
    }
  },

  create: async (resource, params) => {
    if (params.data.image || params.data.file) {
      const formData = new FormData();
      if (params.data.image) {
        formData.append("title", params.data.title);
        formData.append("image", params.data.image.rawFile);
      } else {
        formData.append("name", params.data.name);
        formData.append("position", params.data.position);
        formData.append("links", JSON.stringify(params.data.links));
        formData.append("file", params.data.file.rawFile);
      }

      const { json } = await httpClient(`${apiUrl}/${resource}`, {
        method: "POST",
        body: formData,
      });
      return {
        data: { ...params.data, id: json._id },
      };
    } else {
      const { json: json_1 } = await httpClient(`${apiUrl}/${resource}`, {
        method: "POST",
        body: JSON.stringify(params.data),
      });
      return { data: { ...json_1, id: json_1._id } };
    }
  },

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: { ...json, id: json._id } })),
};

export default dataProvider;
