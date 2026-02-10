import axios from "axios";

export const checkCA20Events = async () => {
  try {
    const token = localStorage.getItem("abacustoken");
    await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/user/check-ca-events`,
      {},
      { headers: { token } },
    );
  } catch (err) {
    console.log("CA check failed");
  }
};
