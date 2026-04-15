import axios from "axios";

const api = axios.create({
  withCredentials: true,
});

export async function createPost(formData) {
  try {
    const response = await api.post(
      "http://localhost:3000/api/posts",
      formData,
    );
    return response.data;
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      "Create post failed.";
    console.error("Create Post API error:", error);
    throw new Error(message);
  }
}
