const request = async (method, url, data) => {
  const options = {};

  if (method !== "GET" && method !== "DELETE") {
    options.method = method;

    if (data) {
      options.headers = {
        "Content-Type": "application/json",
      };
      options.body = JSON.stringify(data);
    }
  }

  const response = await fetch(url, options);
  
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  
  if (response.status === 204) {
  return {};
  }

  try {
    return await response.json();
  } catch (error) {
    throw new Error(response.statusText);
  }

};

export const requestFactory = () => {
    return {
        get: request.bind(null, "GET"),
        post: request.bind(null, "POST"),
        put: request.bind(null, "PUT"),
        delete: request.bind(null, "DELETE"),
    }
};
