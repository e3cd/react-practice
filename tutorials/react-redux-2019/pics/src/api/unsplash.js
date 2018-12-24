//code related to conifguration of axios, unsplash request

import axios from "axios";

export default axios.create({
  //create method create a instance of axios client with default headers and properties

  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 973f47bd4685cb66de40d22957750bfc7cd3464f6bd17c2b17e2d1e569fa650f"
  }
});

//import this in app.js onSearchSubmit
