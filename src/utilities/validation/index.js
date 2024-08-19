import * as yup from "yup";
import dayjs from "dayjs";
import { phoneRegExp, passwordRegExp } from "../helper";
import { passwordMessage } from "../constant";
import moment from "moment";

export const loginFormFields = {
  username: "",
  password: "",
};
export const AppointmentFormFields = {
  firstName: "",
  lastName: "",
  doctor: "",
  doctorFee: "", // Added this field
  doctorEmail: "", // Added this field
  appointmentTime: "", // Added this field
  notes: "", // Added this field
};

export const chngPassFormFields = {
  newpass: "",
  oldpass: "",
};

export const resetPassFormFields = {
  password: "",
  cpassword: "",
};

export const PRComparisonFormFields = yup.object().shape({
  city: "",
  region: "",
  station_name: "",
  mount_list: "",
  site_breakup_list: "",
  selectedTimeRange: "Daily",
});

export const forgotFormFields = {
  username: "",
  email: "",
  password: "",
  phoneNumber: "",
  picture: null,
  qualifications: "",
  qualificationSpecialisation: "",
  availabilityTiming: [],
  remoteInperson: "",
  location: "",
  experience: "",
  certificates: "",
  doctorFee: "",
  about: "",
};

export const contactUsFormFields = {
  email: "",
  phoneNo: "",
  subject: "",
  message: "",
};

export const preReportFormFields = {
  timePeriod: [],
  site: "",
  reportFormat: "",
};

export const fileFormats = [
  { label: "PDF", value: "pdf" },
  { label: "XLSX", value: "excel" },
];

export const Induction0FormFields = (data) => {
  return {
    siteId: data?.site_id || "",
    projectId: data?.project_id || "",
    siteName: data?.site_name || "",
    clientName: data?.client_name || "",
    postalName: data?.postal_address || "",
    city: data?.city || "",
    latitude: data?.latitude || "",
    longitude: data?.longitude || "",
    region: data?.region || "",
    siteType1: data?.site_type || "",
    siteType2: data?.system_type || "",
    siteCategory: data?.site_category || "",
    systemSize: data?.system_size || 0,
    siteCommDate: data?.site_comissioning_date,
    exportType: data?.is_export_enabled
      ? data?.is_export_enabled == 1
        ? "Export-Enable"
        : "Export-Disable"
      : "",
  };
};

export const VendorFormFields = {
  siteName: "",
  vendorDate: "",
};

export const AddAlarmFormFields = {
  siteName: "",
  event: "",
  priority: "",
  alarmStatus: "",
};

export const AddUserFormFields = {
  siteName: "",
  username: "",
  email: "",
  password: "",
  role: "",
};

export const UpdateUserFormFields = {
  siteName: "",
  username: "",
  email: "",
  password: "",
  role: "",
};

export const Induction1FormFields = (data) => {
  return {
    indivInvCommDate: data?.inverter_commisioning_date,
    structureType: data?.structure_type || "",
    warrantyStarts: data?.warranty_starts,
    oemPanels: data?.oem_panel || "",
    modelName: data?.model_name || "",
    panelType: data?.panels_type || "",
    panelKind: data?.panel_kind || "",
    maxSysVolt: data?.maximum_system_voltage || "",
    tNoPanel: data?.total_panels || "",
    invrModel: data?.inverter_model || "",
    pMax: data?.p_max || "",
    moduleEff: data?.module_efficienncy_stc || "",
    tempCoeff: data?.temperature_cofficients_pmax || "",
    noOfInv: data?.total_inverters || "",
    stringMppt: data?.string_mppt || "",
    invDatasheet: data?.inverter_datasheet || "",
    mountType: data?.mount_type || "",
    provider: data?.provider || "",
  };
};

export const Induction2FormFields = (data) => {
  return {
    invrSupplName: data?.inverter_supplier_name || "",
    mechContrName: data?.mechnaical_contractor_name || "",
    electContrName: data?.electrical_contractor_name || "",
    gridSupplName: data?.grid_supplier_name || "",
    refElectBill: data?.reference_number_electricity_bill || "",
    poc: data?.poc || "",
    pocNo: data?.poc_number || "",
  };
};

export const Induction3FormFields = {
  id: "",
  mppt: "",
  input: "",
  noOfPanels: "",
  mountType: "",
  orientation: "",
  tilt: "",
  voc: "",
  vmp: "",
  imp: "",
  // expected_power: [
  //   {
  //     id: 1,
  //     name: "January",
  //     value: 0,
  //   },
  //   {
  //     id: 2,
  //     name: "Feruaury",
  //     value: 0,
  //   },
  //   {
  //     id: 3,
  //     name: "March",
  //     value: 0,
  //   },
  //   {
  //     id: 4,
  //     name: "April",
  //     value: 0,
  //   },
  //   {
  //     id: 5,
  //     name: "May",
  //     value: 0,
  //   },
  //   {
  //     id: 6,
  //     name: "June",
  //     value: 0,
  //   },
  //   {
  //     id: 7,
  //     name: "July",
  //     value: 0,
  //   },
  //   {
  //     id: 8,
  //     name: "August",
  //     value: 0,
  //   },
  //   {
  //     id: 9,
  //     name: "September",
  //     value: 0,
  //   },
  //   {
  //     id: 10,
  //     name: "October",
  //     value: 0,
  //   },
  //   {
  //     id: 11,
  //     name: "November",
  //     value: 0,
  //   },
  //   {
  //     id: 12,
  //     name: "December",
  //     value: 0,
  //   },
  // ],
};

export const ExpectedPowerRows = {
  expected_power: [
    {
      id: 1,
      name: "January",
      value: 0,
    },
    {
      id: 2,
      name: "February",
      value: 0,
    },
    {
      id: 3,
      name: "March",
      value: 0,
    },
    {
      id: 4,
      name: "April",
      value: 0,
    },
    {
      id: 5,
      name: "May",
      value: 0,
    },
    {
      id: 6,
      name: "June",
      value: 0,
    },
    {
      id: 7,
      name: "July",
      value: 0,
    },
    {
      id: 8,
      name: "August",
      value: 0,
    },
    {
      id: 9,
      name: "September",
      value: 0,
    },
    {
      id: 10,
      name: "October",
      value: 0,
    },
    {
      id: 11,
      name: "November",
      value: 0,
    },
    {
      id: 12,
      name: "December",
      value: 0,
    },
  ],
};

export const LoginVS = yup.object().shape({
  username: yup.string().required("Username Required"),
  password: yup
    .string()
    .required("Password Required")
    .matches(passwordRegExp, passwordMessage),
});

export const ResetPassVS = yup.object().shape({
  password: yup.string().required("Password can not be empty"),
  cpassword: yup
    .string()
    .required("Password can not be empty")
    .oneOf([yup.ref("password"), null], "Passwords do not match"),
});

export const ChngPassVS = yup.object().shape({
  newpass: yup
    .string()
    .required("New Password required")
    .matches(passwordRegExp, passwordMessage),
  oldpass: yup
    .string()
    .required("Old Password required")
    .matches(passwordRegExp, passwordMessage),
});

export const AppointmentVS = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required")
    .min(2, "First Name must be at least 2 characters"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 characters"),
  doctor: yup.string().required("Please select a doctor"),
  appointmentTime: yup.string().required("Please select an appointment time"),
  notes: yup.string().required("Please provide additional notes"), // Add this line
});

export const ForgotPasswordVS = (role) => {
  return yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(passwordRegExp, passwordMessage),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: yup.string().required("Phone number is required"),
    picture: yup.mixed().nullable(),
    qualifications:
      role === "Doctor"
        ? yup.string().required("Qualifications are required")
        : yup.string().nullable(),
    qualificationSpecialisation:
      role === "Doctor"
        ? yup.string().required("Specialisation is required")
        : yup.string().nullable(),
    availabilityTiming:
      role === "Doctor"
        ? yup.array().of(
            yup.object().shape({
              start: yup
                .string()
                .required("Start time is required")
                .test(
                  "is-today-or-later",
                  "Start time must be today or later",
                  (value) => {
                    return moment(value, "HH:mm").isSameOrAfter(
                      moment(),
                      "minute"
                    );
                  }
                ),
              end: yup
                .string()
                .required("End time is required")
                .test(
                  "is-after-start",
                  "End time must be after start time",
                  function (value) {
                    const { start } = this.parent;
                    return moment(value, "HH:mm").isAfter(
                      moment(start, "HH:mm")
                    );
                  }
                ),
            })
          )
        : yup.array().nullable(),
    remoteInperson:
      role === "Doctor"
        ? yup.string().required("Remote/In-person selection is required")
        : yup.string().nullable(),
    location:
      role === "Doctor"
        ? yup.string().required("Location is required")
        : yup.string().nullable(),
    experience:
      role === "Doctor"
        ? yup.string().required("Experience is required")
        : yup.string().nullable(),
    certificates:
      role === "Doctor"
        ? yup.string().required("Certificates are required")
        : yup.string().nullable(),
    doctorFee:
      role === "Doctor"
        ? yup.string().required("Doctor fee is required")
        : yup.string().nullable(),
    about:
      role === "Doctor"
        ? yup.string().required("About information is required")
        : yup.string().nullable(),
  });
};
export const billingForm = {
  cardNumber: "",
  expiryDate: "",
  cvv: "",
  cardHolderName: "",
  billingAddress: "",
  phoneNumber: "",
  amount: "",
  paymentMethod: "cash",
  paypalEmail: "",
};
export const PaymentBillingVS = yup.object().shape({
  cardNumber: yup
    .string()
    .required("Card Number is required")
    .matches(/^[0-9]{16}$/, "Card Number must be 16 digits"),
  expiryDate: yup
    .string()
    .required("Expiry Date is required")
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, "Invalid Expiry Date"),
  cvv: yup
    .string()
    .required("CVV is required")
    .matches(/^[0-9]{3,4}$/, "CVV must be 3 or 4 digits"),
  cardHolderName: yup.string().required("Card Holder Name is required"),
  billingAddress: yup.string().required("Billing Address is required"),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .matches(/^[0-9]{11}$/, "Phone Number must be 11 digits"),
  amount: yup.number().required("Amount is required"),
  paypalEmail: yup
    .string()
    .email("Invalid email")
    .when("paymentMethod", {
      is: "paypal",
      then: yup.string().required("PayPal Email is required"),
    }),
});
export const ContactUsVS = yup.object().shape({
  subject: yup.string().required("Subject Required"),
  message: yup.string().required("Message Required"),
});

export const preReportVS = yup.object().shape({
  site: yup.string().required("Site required"),
  timePeriod: yup
    .array()
    .of(yup.date())
    .required("Time Period Required")
    .min(1, "Time Period Required"),
});

export const InductionStep0VS = yup.object().shape({
  siteId: yup.string().required("Site Id Required"),
  projectId: yup.string().required("Project Id Required"),
  siteName: yup.string().required("Site Name Required"),
  //clientName: yup.string().required("Client Name Required"),
  postalName: yup.string().required("Postal Address Required"),
  city: yup.string().required("City Required"),
  latitude: yup.number().required("Latitude Required"),
  longitude: yup.number().required("Longitude Required"),
  //region: yup.string().required("Region Required"),
  //siteType1: yup.string().required("Site Type Required"),
  //siteType2: yup.string().required("Site Type Required"),
  //siteCategory: yup.string().required("Site Category Required"),
  //systemSize: yup.number().required("System Size Required"),
  //siteCommDate: yup.date().required("Site Commisioning Date Required"),
  //exportType: yup.string().required("Export Type Required"),
});
export const VendorFormVS = yup.object().shape({
  siteName: yup.string().required("Site Name Required"),
  vendorDate: yup.date().required("Vendor Date Required"),
});

export const AddAlarmVS = yup.object().shape({
  siteName: yup.string().required("Site Name Required"),
  priority: yup.string().required("Priority Required"),
  alarmStatus: yup.string().required("Alarm Status Required"),
  event: yup.string().required("Event Required"),
});

export const PRComparisonVS = yup.object().shape({
  city: yup.string().optional("City Required"),
  region: yup.string().optional("Region Required"),
  station_name: yup.string().optional("Station Name Required"),
  mount_list: yup.string().optional("Mount Type Required"),
  site_breakup_list: yup.string().optional("Station Type Required"),
});

export const AddUserVS = yup.object().shape({
  siteName: yup
    .string()
    .test("conditional-siteName", "Site Name Required", function (value) {
      const role = this.parent.role;
      if (role === "Client" && !value) {
        return this.createError({
          message: "Site Name Required",
          path: "siteName",
        });
      }
      return true;
    }),
  username: yup
    .string()
    .required("Username Required")
    .test("no-spaces", "Username cannot contain spaces", function (value) {
      if (value && /\s/.test(value)) {
        return this.createError({
          message: "Username cannot contain spaces",
          path: "username",
        });
      }
      return true;
    }),
  role: yup.string().required("Role Required"),
  password: yup
    .string()
    .required("Password Required")
    .matches(passwordRegExp, passwordMessage),
  email: yup
    .string()
    .required("Email Required")
    .email("Please provide a valid email address"),
});

export const UpdateUserVS = yup.object().shape({
  siteName: yup
    .string()
    .test("conditional-siteName", "Site Name Required", function (value) {
      const role = this.parent.role;
      if (role === "Client" && !value) {
        return this.createError({
          message: "Site Name Required",
          path: "siteName",
        });
      }
      return true;
    }),
  username: yup
    .string()
    .required("Username Required")
    .test("no-spaces", "Username cannot contain spaces", function (value) {
      if (value && /\s/.test(value)) {
        return this.createError({
          message: "Username cannot contain spaces",
          path: "username",
        });
      }
      return true;
    }),
  role: yup.string().required("Role Required"),
  password: yup.string().optional(),
  email: yup
    .string()
    .required("Email Required")
    .email("Please provide a valid email address"),
});

export const InductionStep1VS = yup.object().shape({
  indivInvCommDate: yup
    .date()
    .required("Individual Inverter Commisioning Date Required"),
  structureType: yup.string().required("Structure Type Required"),
  warrantyStarts: yup.date().required("Warranty Starts Required"),
  oemPanels: yup.string().required("OEM Panels Required"),
  modelName: yup.string().required("Model Name Required"),
  panelType: yup.string().required("Panel Type Required"),
  panelKind: yup.string().required("Panel Kind Required"),
  maxSysVolt: yup.number().required("Maximum System Voltage Required"),
  tNoPanel: yup.number().required("Total Number of Panels Required"),
  invrModel: yup.string().required("Inverter Model Required"),
  invDatasheet: yup.number().required("Inverter Datasheet Required"),
  pMax: yup.number().required("Pmax Required"),
  moduleEff: yup.number().required("Module Efficienncy STC Required"),
  tempCoeff: yup.number().required("Temperature cofficients of Pmax Required"),
  noOfInv: yup.number().required("No. of Inverters Required"),
  stringMppt: yup.number().required("String in MPPTs Required"),
  mountType: yup.string().required("Mount Type Required"),
  provider: yup.string().required("Provider Required"),
});

export const InductionStep2VS = yup.object().shape({
  invrSupplName: yup.string().required("Inverter Supplier Name Required"),
  mechContrName: yup.string().required("Mechnaical Contractor Name Required"),
  electContrName: yup.string().required("Electrical Contractor Name Required"),
  gridSupplName: yup.string().required("Grid Supplier Name Required"),
  refElectBill: yup
    .string()
    .required("Reference Number of electricity bill Required"),
  poc: yup.string().required("POC Required"),
  pocNo: yup.number().required("POC Number Required"),
});

export const InductionStep3VS = yup.object().shape({
  mppt: yup.string().required("MPPT Required"),
  input: yup.number().required("Input Required"),
  noOfPanels: yup.number().required("Number of Panels Required"),
  mountType: yup.string().required("Mount Type Required"),
  orientation: yup.number().required("Orientation Required"),
  tilt: yup.number().required("Tilt Required"),
  voc: yup.number().required("Voc Required"),
  vmp: yup.number().required("Vmp Required"),
  imp: yup.number().required("Imp Required"),
});

export const settingsFormVS = yup.object().shape({
  co2_factor: yup.number().required("input required"),
  tree_factor: yup.number().required("input required"),
  tariff: yup.number().required("input required"),
  gridSupplName: yup.string().required("input required"),
});

export const SettingsFormFields = (data) => {
  return {
    co2_factor: data?.co2_factor || null,
    tree_factor: data?.tree_factor || null,
    tariff: data?.client_data[0]?.tariff || null,
    gridSupplName: data?.client_data[0]?.name || "",
    newSupplierName: "",
    newTariff: 0,
  };
};

export const addSupplierFormVS = yup.object().shape({
  tariff: yup.number().required("input required"),
  name: yup.string().required("input required"),
});

export const AddSupplierFormFields = () => {
  return {
    name: "",
    tariff: null,
  };
};
