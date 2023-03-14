import axiosIntance from "../axiosInstance";
export interface ILoginProps {email: string, password: string}
function parseJwt(token: string) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  
    return JSON.parse(jsonPayload);
  }
export const register = (username: string, email: string, password: string) => {
  return axiosIntance.post("/auth/signup", {
    email,
    password,
  });
};
export const login = ({email, password}: ILoginProps) => {
  return axiosIntance
    .post("/auth/signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        const userData = parseJwt(response.data.accessToken)
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("accessToken", response.data.accessToken);
        window.location.reload();
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};