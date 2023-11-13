const request = async (method, url, data) => {
  const options = {};

  if (method !== "GET" && method !== "DELETE") {
    options.method = method;

    if (data) {
      options.headers = {
        "Content-Type": "application/json",
      };

    //   options.credentials = 'include'

      options.body = JSON.stringify(data);
    }
  }

  const response = await fetch(url, options);

  if (response.status === 204) {
    return {};
  }

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
};

export const requestFactory = {
  get: request.bind(null, "GET"),
  post: request.bind(null, "POST"),
  put: request.bind(null, "PUT"),
  delete: request.bind(null, "DELETE"),
};
