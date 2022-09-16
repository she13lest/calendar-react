const baseUrl = "https://6323710dbb2321cba91a08c4.mockapi.io/api/v1/events";

export const getEventList = () =>
  fetch(baseUrl).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Error with data");
  });

export const createEvent = (event) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(event),
  });
};

export const deleteEvent = (eventId) =>
  fetch(`${baseUrl}/${eventId}`, {
    method: "DELETE",
  });
