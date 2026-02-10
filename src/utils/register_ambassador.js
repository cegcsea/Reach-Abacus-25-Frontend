import axios from "axios";

export const checkCA20Events = async (userId) => {
  try {
    await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/admin/check-ca-events`,
      { userId },
    );
  } catch (err) {
    console.log("CA check failed");
  }
};
