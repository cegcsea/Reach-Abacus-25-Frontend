import axios from "axios";

export const checkCA20Events = async (userId) => {
  try {
    await axios.post("/admin/check-ca", { userId });
  } catch (err) {
    console.log("CA check failed");
  }
};
