import { Battery, Generator, Grid, Home, SolarPanel } from "./images";

export const sideBarItems = [
  {
    id: 0,
    title: "Dashboard",
    icon: "home",
    path: "/",
    roles: ["Doctor", "Patient"],
  },
  {
    id: 1,
    title: "Appointment",
    icon: "appointment",
    path: "/appointment-form",
    roles: ["Patient"],
  },
];

//Overview Scr Data
export const overviewList = {
  totalGeneration: "123,040",
  totalInstallPlant: "25",
  carbonSaving: "697,07",
  activeAlarm: "25",
};

export const mountingWiseTabs = [
  {
    title: "Industrial",
  },
  {
    title: "Commercial",
  },
  {
    title: "Residential",
  },
];

export const mountingWiseInst = [
  { value: 2, name: "Roof Mount" },
  { value: 3, name: "Shed Mount" },
  { value: 5, name: "Ground Mount" },
];

export const sitesBreakup = [
  { name: "Residential Sites", value: 4 },
  { name: "Commercial Sites", value: 1 },
  { name: "Industrial Sites", value: 4 },
];

export const brandBreakdown = [
  { name: "Huawei", value: 20 },
  { name: "Sungrow", value: 80 },
];

export const pieChartColors = ["#020246", "#000075", "#3944bc", "#38acec"];

//Operations Scr Data
export const operationsList = {
  allSites: "25",
  platinumSites: "5",
  goldSites: "10",
  silverSites: "10",
};

export const alarmsList = {
  allAlarms: "25",
  criticalAlarms: "5",
  majorAlarms: "10",
  minorAlarms: "10",
};

export const siteWiseAlarms = [
  { site: "Ameen Farm House", major: 10, minor: 10, critical: 5 },
  { site: "TRTM FSD", major: 0, minor: 0, critical: 10 },
  { site: "Pepsi Co Greenhouse", major: 10, minor: 0, critical: 0 },
  { site: "Syngenta Warehouse", major: 10, minor: 0, critical: 0 },
];

//Site Details Scr Data
export const siteDetails = {
  todayRevenue: "0",
  cuf: "10",
  todayYield: "0",
  activeFault: "0",
  sysSize: "100",
  noOfInverter: "1",
  perfRatio: "0",
  tcpr: "0",
};
export const solarAdvangtage = {
  co2Reduction: "123,040",
  oilSaved: "79",
  treesPlanted: "1,714",
};

export const inverterDetails = {
  id: "123456",
  startTime: "00:00:00",
  name: "HWE-05-2323",
  shutdownTime: "00:00:00",
  size: "100kW",
  downTime: "0 hrs, 0 mins",
  comissionDate: "2022-09-14",
  supplier: "Moiz",
  warranty: "2.71 Yrs",
};

export const powerMix = [
  { time: "00:00:00", solar: 2.75, grid: 7.63 },
  { time: "00:35:00", solar: 2.64, grid: 7.79 },
  { time: "01:10:00", solar: 2.41, grid: 8.12 },
  { time: "01:45:00", solar: 1.95, grid: 8.58 },
  { time: "02:20:00", solar: 1.39, grid: 9.15 },
  { time: "02:55:00", solar: 1.04, grid: 9.5 },
  { time: "03:30:00", solar: 1.12, grid: 9.42 },
  { time: "04:05:00", solar: 1.47, grid: 9.07 },
  { time: "04:40:00", solar: 1.95, grid: 8.59 },
  { time: "05:15:00", solar: 2.46, grid: 8.08 },
  { time: "05:50:00", solar: 2.84, grid: 7.7 },
  { time: "06:25:00", solar: 3.05, grid: 7.49 },
  { time: "05:15:00", solar: 2.46, grid: 8.08 },
  { time: "07:00:00", solar: 3.11, grid: 7.43 },
  { time: "07:35:00", solar: 3.03, grid: 7.51 },
  { time: "08:10:00", solar: 2.8, grid: 7.74 },
  { time: "08:45:00", solar: 2.46, grid: 8.08 },
  { time: "09:20:00", solar: 2.08, grid: 8.46 },
  { time: "09:55:00", solar: 1.68, grid: 8.86 },
  { time: "10:30:00", solar: 1.34, grid: 9.2 },
  { time: "11:05:00", solar: 1.12, grid: 9.42 },
  { time: "11:40:00", solar: 1.04, grid: 9.5 },
  { time: "12:15:00", solar: 1.12, grid: 9.42 },
  { time: "12:50:00", solar: 1.34, grid: 9.2 },
  { time: "13:25:00", solar: 1.68, grid: 8.86 },
  { time: "14:00:00", solar: 2.08, grid: 8.46 },
  { time: "14:35:00", solar: 2.46, grid: 8.08 },
  { time: "15:10:00", solar: 2.8, grid: 7.74 },
  { time: "15:45:00", solar: 3.03, grid: 7.51 },
  { time: "16:20:00", solar: 3.11, grid: 7.43 },
  { time: "16:55:00", solar: 3.05, grid: 7.49 },
  { time: "17:30:00", solar: 2.84, grid: 7.7 },
  { time: "18:05:00", solar: 2.46, grid: 8.08 },
  { time: "18:40:00", solar: 1.95, grid: 8.59 },
  { time: "19:15:00", solar: 1.47, grid: 9.07 },
  { time: "19:50:00", solar: 1.12, grid: 9.42 },
  { time: "20:25:00", solar: 1.04, grid: 9.5 },
  { time: "21:00:00", solar: 1.12, grid: 9.42 },
  { time: "21:35:00", solar: 1.34, grid: 9.2 },
  { time: "22:10:00", solar: 1.68, grid: 8.86 },
  { time: "22:45:00", solar: 2.08, grid: 8.46 },
  { time: "23:20:00", solar: 2.46, grid: 8.08 },
];
export const inverPerformace = [
  { time: "00:00:00", inverter: 5.2 },
  { time: "00:35:00", inverter: 6.8 },
  { time: "01:10:00", inverter: 4.3 },
  { time: "01:45:00", inverter: 7.1 },
  { time: "02:20:00", inverter: 3.9 },
  { time: "02:55:00", inverter: 8.2 },
  { time: "03:30:00", inverter: 5.7 },
  { time: "04:05:00", inverter: 6.4 },
  { time: "04:40:00", inverter: 4.9 },
  { time: "05:15:00", inverter: 7.6 },
  { time: "05:50:00", inverter: 3.3 },
  { time: "06:25:00", inverter: 8.8 },
  { time: "05:15:00", inverter: 5.5 },
  { time: "07:00:00", inverter: 4.1 },
  { time: "07:35:00", inverter: 7.9 },
  { time: "08:10:00", inverter: 6.2 },
  { time: "08:45:00", inverter: 3.8 },
  { time: "09:20:00", inverter: 8.1 },
  { time: "09:55:00", inverter: 4.7 },
  { time: "10:30:00", inverter: 7.4 },
  { time: "11:05:00", inverter: 5.9 },
  { time: "11:40:00", inverter: 6.7 },
  { time: "12:15:00", inverter: 4.2 },
  { time: "12:50:00", inverter: 7.3 },
  { time: "13:25:00", inverter: 5.1 },
  { time: "14:00:00", inverter: 6.5 },
  { time: "14:35:00", inverter: 4.6 },
  { time: "15:10:00", inverter: 7.8 },
  { time: "15:45:00", inverter: 3.7 },
  { time: "16:20:00", inverter: 8.3 },
  { time: "16:55:00", inverter: 5.4 },
  { time: "17:30:00", inverter: 6.9 },
  { time: "18:05:00", inverter: 4.4 },
  { time: "18:40:00", inverter: 7.2 },
  { time: "19:15:00", inverter: 5.3 },
  { time: "19:50:00", inverter: 6.6 },
  { time: "20:25:00", inverter: 4.5 },
  { time: "21:00:00", inverter: 7.7 },
  { time: "21:35:00", inverter: 3.6 },
  { time: "22:10:00", inverter: 8.5 },
  { time: "22:45:00", inverter: 5.8 },
  { time: "23:20:00", inverter: 6.3 },
];

export const perfRatioHeatmap = [
  {
    name: "MPPT-1",
    data: [
      {
        x: "Inverter1",
        y: 347,
      },
    ],
  },
  {
    name: "MPPT-2",
    data: [
      {
        x: "Inverter1",
        y: 332,
      },
    ],
  },
  {
    name: "MPPT-3",
    data: [
      {
        x: "Inverter1",
        y: 357,
      },
    ],
  },
  {
    name: "MPPT-4",
    data: [
      {
        x: "Inverter1",
        y: 89,
      },
    ],
  },
  {
    name: "MPPT-5",
    data: [
      {
        x: "Inverter1",
        y: 53,
      },
    ],
  },
  {
    name: "MPPT-5",
    data: [
      {
        x: "Inverter1",
        y: 79,
      },
    ],
  },
  {
    name: "MPPT-7",
    data: [
      {
        x: "Inverter1",
        y: 10,
      },
    ],
  },
  {
    name: "MPPT-8",
    data: [
      {
        x: "Inverter1",
        y: 10,
      },
    ],
  },
  {
    name: "MPPT-9",
    data: [
      {
        x: "Inverter1",
        y: 10,
      },
    ],
  },
  {
    name: "MPPT-10",
    data: [
      {
        x: "Inverter1",
        y: 35,
      },
    ],
  },
];

//Equipment Details Scr Data
export const technicalSpecs = {
  currentPower: "0",
  inverterEff: "0",
  totalCurt: "0",
  totalFault: "0",
  inverterTemp: "0.0",
  mmptMismatch: "11 hrs, 45 mins",
  gridFreq: "0.0",
};

export const energyLogger = {
  netEnergy: 3056,
  energyOff: 264,
  energyPeak: 628,
  reactiveEnergyOff: 877,
  rectiveEnergy: 179,
};

export const loadshedding = [75];

export const imbalanceTabs = [
  {
    title: "Phase Voltage Imbalance",
  },
  {
    title: "Frequency Imbalance",
  },
];

export const siteColumns = [
  { id: "station_name", label: "Site", minWidth: 300 },
  { id: "region", label: "Region", minWidth: 50 },
  { id: "category", label: "Categories", minWidth: 50 },
  { id: "total_system_size", label: "Total Sys Size (kWp)", minWidth: 80 },
  { id: "total_yield", label: "Total Yield (kWh)", minWidth: 80 },
  { id: "total_alarms", label: "Active Alarms", minWidth: 100 },
  { id: "status", label: "Status", minWidth: 40 },
  { id: "export_enabled", label: "Export Enabled", minWidth: 50 },
  { id: "provider_name", label: "OEM", minWidth: 50 },
  // { id: "actions", label: "Actions", minWidth: 70 },
];

export const siteRows = [
  {
    site: "Ameen Farm House",
    region: "North",
    categories: "Gold",
    totalSysSize: "100",
    totalYield: "60,582",
    totalAlarms: "0",
    status: "Off",
  },
  {
    site: "Pepsi Phoolnagar",
    region: "South",
    categories: "Gold",
    totalSysSize: "100",
    totalYield: "60,582",
    totalAlarms: "0",
    status: "Off",
  },
];

export const userColumns = [
  { id: "id", label: "ID", minWidth: 50 },
  { id: "station_name", label: "Client Name", minWidth: 260 },
  { id: "username", label: "Username", minWidth: 110 },
  { id: "role", label: "Role", minWidth: 180 },
  { id: "created_at", label: "Created At", minWidth: 120 },
  { id: "actions", label: "Actions", minWidth: 70 },
];

export const alarmColumns = [
  { id: "id", label: "ID", minWidth: 120 },
  { id: "station_name", label: "Site", minWidth: 250 },
  { id: "event", label: "Events", minWidth: 120 },
  { id: "raised_time", label: "Alarm Start Date", minWidth: 200 },
  { id: "status", label: "Alarm Status", minWidth: 120 },
  { id: "elapsed_time", label: "Elapsed Time", minWidth: 120 },
  { id: "priority", label: "Priority", minWidth: 120 },
  { id: "actions", label: "Actions", minWidth: 120 },
];

export const ticketColumns = [
  { id: "id", label: "Alarm ID", width: 70 },
  { id: "ticketId", label: "Ticket ID", width: 90 },
  { id: "handlingQueue", label: "Handling Queue", width: 100 },
  { id: "assigneQueue", label: "Assignee Queue", width: 100 },
  { id: "prority", label: "Priority", width: 70 },
  { id: "status", label: "Status", width: 90 },
  { id: "rca", label: "RCA", width: 170 },
  { id: "actionTaken", label: "Action Taken", width: 130 },
  { id: "pendingReason", label: "Pending Reason", width: 110 },
  { id: "requestsName", label: "Request Name", width: 170 },
  { id: "taskName", label: "Task Name", width: 180 },
];

export const showTicketItems = {
  id: true,
  ticketId: true,
  handlingQueue: true,
  assigneQueue: true,
  prority: true,
  status: true,
  rca: true,
  actionTaken: true,
  pendingReason: true,
  requestsName: true,
  taskName: true,
};

export const inductionFormColumns = [
  { id: "id", label: "ID", minWidth: 120 },
  { id: "site_id", label: "Site Id", minWidth: 200 },
  { id: "site_name", label: "Site", minWidth: 250 },
  { id: "client_name", label: "Client Name", minWidth: 120 },
  { id: "status", label: "Application Status", minWidth: 120 },
  { id: "submitted_by", label: "Submitted By", minWidth: 120 },
  { id: "created_at", label: "Created At", minWidth: 120 },
  { id: "actions", label: "Actions", minWidth: 120 },
];

export const alarmRows = [
  {
    id: "01",
    site: "TRTM FSD",
    events: "PV abnormal alarm",
    alarmStartDate: "2023-05-09 11:17:51",
    alarmStatus: "Inactive",
    elapsedTime: "1 day",
    priority: "Critical",
  },
  {
    id: "02",
    site: "Pepsi Phoolnagar",
    events: "PV abnormal alarm",
    alarmStartDate: "2023-05-09 11:17:51",
    alarmStatus: "Inactive",
    elapsedTime: "1 day",
    priority: "Major",
  },
];

export const switchOptions = [
  {
    label: "Daily",
    value: "daily",
    selectedBackgroundColor: "#ffffff",
    selectedFontColor: "#000000",
  },
  {
    label: "Monthly",
    value: "monthly",
    selectedBackgroundColor: "#ffffff",
    selectedFontColor: "#000000",
  },
  {
    label: "Annual",
    value: "annual",
    selectedBackgroundColor: "#ffffff",
    selectedFontColor: "#000000",
  },
];

export const tabs = [
  {
    title: "Create New Template",
  },
  {
    title: "Use Saved Preference",
  },
];

export const sites = ["Pepsi Phoolnagar", "TRTM FSD", "Mughal Steel Mills"];

export const actualVsExpected = [
  { time: "00:00:00", actual: 3.79, expected: 0, curtailment: 0 },
  { time: "00:35:00", actual: 3.85, expected: 2.57, curtailment: 0 },
  { time: "01:10:00", actual: 4.24, expected: 3.67, curtailment: 0 },
  { time: "01:45:00", actual: 3.79, expected: 2.45, curtailment: 0 },
  { time: "02:20:00", actual: 3.56, expected: 5.34, curtailment: 0 },
  { time: "02:55:00", actual: 4.5, expected: 8.93, curtailment: 0 },
  { time: "03:30:00", actual: 4.67, expected: 8.93, curtailment: 0 },
  { time: "04:05:00", actual: 4.65, expected: 9.34, curtailment: 0 },
  { time: "04:40:00", actual: 4.68, expected: 9.43, curtailment: 0 },
  { time: "05:15:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "05:50:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "06:25:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "05:15:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "07:00:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "07:35:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "08:10:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "08:45:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "09:20:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "09:55:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "10:30:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "11:05:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "11:40:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "12:15:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "12:50:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "13:25:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "14:00:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "14:35:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "15:10:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "15:45:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "16:20:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "16:55:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "17:30:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "18:05:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "18:40:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "19:15:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "19:50:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "20:25:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "21:00:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "21:35:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "22:10:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "22:45:00", actual: 4.78, expected: 9.45, curtailment: 0 },
  { time: "23:20:00", actual: 4.78, expected: 9.45, curtailment: 0 },
];

export const perfRatioComp = [
  { site: "Ameen Farm House", perfRatio: 92.304, tempPerfRatio: 99.252 },
  { site: "TRTM FSD", perfRatio: 63.098, tempPerfRatio: 67.098 },
  { site: "Pepsi Co Greenhouse", perfRatio: 62.43, tempPerfRatio: 67.13 },
  { site: "Syngenta Warehouse", perfRatio: 53.87, tempPerfRatio: 57.32 },
  { site: "Ameen Farm House", perfRatio: 92.304, tempPerfRatio: 99.252 },
  { site: "TRTM FSD", perfRatio: 63.098, tempPerfRatio: 67.098 },
];

export const regions = [
  { name: "North", label: "North", id: 1 },
  { name: "South", label: "South", id: 2 },
  { name: "Central", label: "Central", id: 3 },
];

export const status = [
  { label: "Active", id: 1 },
  { label: "Inactive", id: 2 },
];

export const time = [
  { label: "Ascending", id: 1 },
  { label: "Descending", id: 2 },
];

export const category = [
  { label: "Platinum", id: 1 },
  { label: "Gold", id: 2 },
  { label: "Silver", id: 3 },
];

export const severity = [
  { label: "Critical", id: 1 },
  { label: "Major", id: 2 },
  { label: "Minor", id: 3 },
];

export const networkText = "Check Internet Connectivity!";

export const strokeColor = [
  "#228b22",
  "#cddc39",
  "#e1ad01",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#5cb85c",
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#8bc34a",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
];

//Induction Scr Data
export const steps = [
  "Site Details",
  "System Details",
  "General Details",
  "Inverter Details",
];

export const siteType1 = [
  { value: "Commercial", label: "Commercial" },
  { value: "Residential", label: "Residential" },
  { value: "Industrial", label: "Industrial" },
];

export const exportType = [
  { value: "Export-Enable", label: "Export-Enable" },
  { value: "Export-Disable", label: "Export-Disable" },
];

export const siteCategory = [
  { value: "Gold", label: "Gold" },
  { value: "Silver", label: "Silver" },
  { value: "Platinum", label: "Platinum" },
];

export const siteType2 = [
  { value: "Grid-Tied", label: "Grid-Tied" },
  { value: "Hybrid", label: "Hybrid" },
];
export const mountType = [
  { value: "Ground", label: "Ground" },
  { value: "Roof", label: "Roof" },
];

export const panelKind = [
  { value: "Mono", label: "Mono" },
  { value: "Bi-Facial", label: "Bi-Facial" },
];

export const mpptColumns = [
  { id: "mppt", label: "MPPT", minWidth: 120 },
  { id: "input", label: "Input", minWidth: 120 },
  { id: "noOfPanels", label: "No of Panels", minWidth: 120 },
  { id: "mountType", label: "Mount Type (Grid/Roof)", minWidth: 120 },

  { id: "orientation", label: "Orientation", minWidth: 120 },
  { id: "tilt", label: "Tilt", minWidth: 120 },
  { id: "voc", label: "Voc", minWidth: 120 },
  { id: "vmp", label: "Vmp", minWidth: 120 },
  { id: "imp", label: "Imp", minWidth: 120 },
  { id: "actions", label: "Actions", minWidth: 120 },
];

export const ViewInductionColumns = [
  { id: "mppt", label: "MPPT", minWidth: 120 },
  { id: "input", label: "Input", minWidth: 120 },
  { id: "noOfPanels", label: "No of Panels", minWidth: 120 },
  { id: "mountType", label: "Mount Type (Grid/Roof)", minWidth: 120 },
  { id: "orientation", label: "Orientation", minWidth: 120 },
  { id: "tilt", label: "Tilt", minWidth: 120 },
  { id: "voc", label: "Voc", minWidth: 120 },
  { id: "vmp", label: "Vmp", minWidth: 120 },
  { id: "imp", label: "Imp", minWidth: 120 },
];
export const ViewInductionExpectedColumns = [
  { id: "january", label: "Jan" },
  { id: "february", label: "Feb" },
  { id: "march", label: "Mar" },
  { id: "april", label: "Apr" },
  { id: "may", label: "May" },
  { id: "june", label: "Jun" },
  { id: "july", label: "Jul" },
  { id: "august", label: "Aug" },
  { id: "september", label: "Sep" },
  { id: "october", label: "Oct" },
  { id: "november", label: "Nov" },
  { id: "december", label: "Dec" },
];
export const regionList = [
  { value: "North", label: "North" },
  { value: "South", label: "South" },
  { value: "Central", label: "Central" },
];

export const citiesList = [
  "Islamabad",
  "Ahmed Nager",
  "Ahmadpur East",
  "Ali Khan",
  "Alipur",
  "Arifwala",
  "Attock",
  "Bhera",
  "Bhalwal",
  "Bahawalnagar",
  "Bahawalpur",
  "Bhakkar",
  "Burewala",
  "Chillianwala",
  "Chakwal",
  "Chichawatni",
  "Chiniot",
  "Chishtian",
  "Daska",
  "Darya Khan",
  "Dera Ghazi",
  "Dhaular",
  "Dina",
  "Dinga",
  "Dipalpur",
  "Faisalabad",
  "Fateh Jhang",
  "Ghakhar Mandi",
  "Gojra",
  "Gujranwala",
  "Gujrat",
  "Gujar Khan",
  "Hafizabad",
  "Haroonabad",
  "Hasilpur",
  "Haveli",
  "Lakha",
  "Jalalpur",
  "Jattan",
  "Jampur",
  "Jaranwala",
  "Jhang",
  "Jhelum",
  "Kalabagh",
  "Karor Lal",
  "Kasur",
  "Kamalia",
  "Kamoke",
  "Khanewal",
  "Khanpur",
  "Kharian",
  "Khushab",
  "Kot Adu",
  "Jauharabad",
  "Lahore",
  "Lalamusa",
  "Layyah",
  "Liaquat Pur",
  "Lodhran",
  "Malakwal",
  "Mamoori",
  "Mailsi",
  "Mandi Bahauddin",
  "mian Channu",
  "Mianwali",
  "Multan",
  "Murree",
  "Muridke",
  "Mianwali Bangla",
  "Muzaffargarh",
  "Narowal",
  "Okara",
  "Renala Khurd",
  "Pakpattan",
  "Pattoki",
  "Pir Mahal",
  "Qaimpur",
  "Qila Didar",
  "Rabwah",
  "Raiwind",
  "Rajanpur",
  "Rahim Yar",
  "Rawalpindi",
  "Sadiqabad",
  "Safdarabad",
  "Sahiwal",
  "Sangla Hill",
  "Sarai Alamgir",
  "Sargodha",
  "Shakargarh",
  "Sheikhupura",
  "Sialkot",
  "Sohawa",
  "Soianwala",
  "Siranwali",
  "Talagang",
  "Taxila",
  "Toba Tek",
  "Vehari",
  "Wah Cantonment",
  "Wazirabad",
  "Badin",
  "Bhirkan",
  "Rajo Khanani",
  "Chak",
  "Dadu",
  "Digri",
  "Diplo",
  "Dokri",
  "Ghotki",
  "Haala",
  "Hyderabad",
  "Islamkot",
  "Jacobabad",
  "Jamshoro",
  "Jungshahi",
  "Kandhkot",
  "Kandiaro",
  "Karachi",
  "Kashmore",
  "Keti Bandar",
  "Khairpur",
  "Kotri",
  "Larkana",
  "Matiari",
  "Mehar",
  "Mirpur Khas",
  "Mithani",
  "Mithi",
  "Mehrabpur",
  "Moro",
  "Nagarparkar",
  "Naudero",
  "Naushahro Feroze",
  "Naushara",
  "Nawabshah",
  "Nazimabad",
  "Qambar",
  "Qasimabad",
  "Ranipur",
  "Ratodero",
  "Rohri",
  "Sakrand",
  "Sanghar",
  "Shahbandar",
  "Shahdadkot",
  "Shahdadpur",
  "Shahpur Chakar",
  "Shikarpaur",
  "Sukkur",
  "Tangwani",
  "Tando Adam",
  "Tando Allahyar",
  "Tando Muhammad",
  "Thatta",
  "Umerkot",
  "Warah",
  "Abbottabad",
  "Adezai",
  "Alpuri",
  "Akora Khattak",
  "Ayubia",
  "Banda Daud",
  "Bannu",
  "Batkhela",
  "Battagram",
  "Birote",
  "Chakdara",
  "Charsadda",
  "Chitral",
  "Daggar",
  "Dargai",
  "Darya Khan",
  "dera Ismail",
  "Doaba",
  "Dir",
  "Drosh",
  "Hangu",
  "Haripur",
  "Karak",
  "Kohat",
  "Kulachi",
  "Lakki Marwat",
  "Latamber",
  "Madyan",
  "Mansehra",
  "Mardan",
  "Mastuj",
  "Mingora",
  "Nowshera",
  "Paharpur",
  "Pabbi",
  "Peshawar",
  "Saidu Sharif",
  "Shorkot",
  "Shewa Adda",
  "Swabi",
  "Swat",
  "Tangi",
  "Tank",
  "Thall",
  "Timergara",
  "Tordher",
  "Awaran",
  "Barkhan",
  "Chagai",
  "Dera Bugti",
  "Gwadar",
  "Harnai",
  "Jafarabad",
  "Jhal Magsi",
  "Kacchi",
  "Kalat",
  "Kech",
  "Kharan",
  "Khuzdar",
  "Killa Abdullah",
  "Killa Saifullah",
  "Kohlu",
  "Lasbela",
  "Lehri",
  "Loralai",
  "Mastung",
  "Musakhel",
  "Nasirabad",
  "Nushki",
  "Panjgur",
  "Pishin valley",
  "Quetta",
  "Sherani",
  "Sibi",
  "Sohbatpur",
  "Washuk",
  "Zhob",
  "Ziarat",
];

export const stations_data = [
  {
    x: 250,
    y: 290,
    icon: Home,
  },
  {
    x: 110,
    y: 290,
    icon: Grid,
  },
  {
    x: 250,
    y: 450,
    icon: Generator,
  },
  {
    x: 400,
    y: 290,
    icon: Battery,
  },
  {
    x: 250,
    y: 125,
    icon: SolarPanel,
  },
];

export const meterHierarchy_data = [
  {
    x: 300,
    y: 225,
    icon: Home,
  },
  {
    x: 120,
    y: 225,
    icon: Grid,
  },
  {
    x: 300,
    y: 400,
    icon: Generator,
  },
  {
    x: 485,
    y: 225,
    icon: Battery,
  },
  {
    x: 300,
    y: 50,
    icon: SolarPanel,
  },
];

export const alarmStatusList = [
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];

export const priorityList = [
  { value: "Minor", label: "Minor" },
  { value: "Major", label: "Major" },
  { value: "Critical", label: "Critical" },
];

export const roleList = [
  { value: "Patient", label: "Patient" },
  { value: "Doctor", label: "Doctor" },
];

export const providerList = [
  { value: "Huawei", label: "Huawei" },
  { value: "Solis", label: "Solis" },
  { value: "Sungrow", label: "Sungrow" },
  { value: "Solarman", label: "Solarman" },
];

export const rowstick = [
  {
    id: 1234,
    ticketId: "15200548",
    handlingQueue: "ES_NOC",
    assigneQueue: "Asad Munir",
    prority: "Low",
    status: "Resolved",
    rca: "Inverter Over Temperature",
    actionTaken: "Inventor reset",
    pendingReason: null,
    requestsName: "Energy Solutions Related Complaints",
    taskName: "Inverter Related Faults",
  },
  {
    id: 1,
    ticketId: "15200548",
    handlingQueue: "ES_Projects",
    assigneQueue: "Asad Munir",
    prority: "Low",
    status: "Open",
    rca: "Inverter Over Temperature",
    actionTaken: "Inventor reset",
    pendingReason: null,
    requestsName: "Energy Solutions Related Complaints",
    taskName: "Inverter Related Faults",
  },
  {
    id: 2,
    ticketId: "15200548",
    handlingQueue: "ES_NOC",
    assigneQueue: "Asadww Munir",
    prority: "Low",
    status: "Resolved",
    rca: "Inverter Over Temperature",
    actionTaken: "Inventor reset",
    pendingReason: null,
    requestsName: "Energy Solutions Related Complaints",
    taskName: "Inverter Related Faults",
  },
  {
    id: 3,
    ticketId: "15200548",
    handlingQueue: "ES_Infra",
    assigneQueue: "Asad MunirInfra",
    prority: "Low",
    status: "Pending",
    rca: "Inverter Over Temperature",
    actionTaken: "Inventor reset",
    pendingReason: null,
    requestsName: "Energy Solutions Related Complaints",
    taskName: "Inverter Related Faults",
  },
];

export const roles = {
  Doctor: "Doctor",
  Patient: "Patient",
  SITE_MANAGER: "Site Manager",
};
export const passwordMessage =
  "Password must be at least 8 characters with uppercase, lowercase, number, and special character.";

export const filterOptions = ["day", "month", "year"];
export const oemOptions = ["All OEM", "Huawei", "Sungrow", "Solis"];
