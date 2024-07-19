import { toast } from "react-toastify";
import moment from "moment";

export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const getRecentMonths = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the current month and year
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Create an array of the last 10 months
  const last10Months = [];
  for (let i = 11; i >= 0; i--) {
    let month = currentMonth - i;
    let year = currentYear;
    if (month < 0) {
      month += 12;
      year -= 1;
    }
    last10Months.push({
      month: months[month],
      year,
      label: `${months[month]} ${year}`,
    });
  }

  last10Months.reverse();

  return last10Months;
};

export const responseValidator = (message) => {
  toast.error(message, "Internal Server Error");
};

export const formatDate = (date) => {
  return moment(date).format("YYYY-MM-DD : HH:mm:ss");
};

export const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const getMonthsLeft = (dateString) => {
  return `Expired ${moment(dateString).fromNow()}`;
};

// export const convertToMw

export const hasMoreThanFourDigits = (value) => {
  // Convert the value to a string and check its length
  if (value && typeof value == "string") {
    return value.toString().length > 4;
  } else {
    return value;
  }
};

// Helper to convert kWh to MWh
export const convertKWhToMWh = (kWh) => {
  // 1 MWh is equal to 1000 kWh
  return kWh / 1000;
};
