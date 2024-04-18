import data from "@/app/_data/general-data.json";

const {
  contact: { email },
} = data;

export const showEmail = async () => {
  return email;
};
