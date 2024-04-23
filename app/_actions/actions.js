import data from "@/app/_data/general-data.json";

const {
  homePage: {
    contact: { email, phone },
  },
} = data;

export const showEmailAddress = async () => {
  return email;
};

export const showPhoneNumber = async () => {
  return phone;
};
