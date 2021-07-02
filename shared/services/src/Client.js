import httpRequest from "./http-request/http-request";

const getPurchaseResume = () => {
  return httpRequest({
    method: "get",
    url: "/5b15c4923100004a006f3c07",
  });
};

export { getPurchaseResume };
