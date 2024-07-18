import axios from "axios";

export async function axiosGet({ url }) {
  let result = null;
  try {
    result = await axios.get(url).then((res) => res.data);
  } catch (error) {}
  return result;
}

export async function axiosPost({ url, data }) {
  let result = null;

  try {
    result = await axios({
      method: "post",
      url: url,
      data: data,
    }).then((res) => res.data);
  } catch (error) {
    console.log(error);
  }
  return result;
}

export async function axiosDelete({ url, data }) {
  let result = null;

  try {
    result = await axios.delete(url, { data }).then((res) => res.data);
  } catch (error) {
    console.log(error);
  }
  return result;
}