import Cookies from "js-cookie";

export default function VerifyUser() {
  const token = Cookies.get("token");
  if (!token || token === "") {
    return false;
  }
  const id = localStorage.getItem("id");
  if (!id || id === "") {
    return false;
  }
  return true;
}