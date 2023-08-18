import { v4 as uuidv4 } from "uuid";

const agendaTab = [
  { text: "Android", type: "Android", key: uuidv4(), page: "speaker" },
  { text: "ChromeOS", type: "ChromeOS", key: uuidv4(), page: "speaker" },
  { text: "iOS", type: "iOS", key: uuidv4(), page: "speaker" },
  { text: "watchOS", type: "watchOS", key: uuidv4(), page: "speaker" },
  { text: "visionOS", type: "visionOS", key: uuidv4(), page: "speaker" },
  { text: "IoT", type: "IoT", key: uuidv4(), page: "speaker" },
  { text: "UI/UX", type: "UI/UX", key: uuidv4(), page: "speaker" },
  {
    text: "Project Management",
    type: "Project Management",
    key: uuidv4(),
    page: "speaker",
  },
  {
    text: "Service/Product Operations",
    type: "Service/Product Operations",
    key: uuidv4(),
    page: "speaker",
  },
  {
    text: "Game Planning/Design",
    type: "Game Planning/Design",
    key: uuidv4(),
    page: "speaker",
  },
  {
    text: "Digital Contents",
    type: "Digital Contents",
    key: uuidv4(),
    page: "speaker",
  },
  { text: "Big Data", type: "Big Data", key: uuidv4(), page: "speaker" },
  { text: "DevOps", type: "DevOps", key: uuidv4(), page: "speaker" },
  { text: "SRE", type: "SRE", key: uuidv4(), page: "speaker" },
  {
    text: "Cloud Services & HA/HS Computing",
    type: "Cloud Services & HA/HS Computing",
    key: uuidv4(),
    page: "speaker",
  },
  {
    text: "Machine Learning/AI",
    type: "Machine Learning/AI",
    key: uuidv4(),
    page: "speaker",
  },
  { text: " VR/AR", type: " VR/AR", key: uuidv4(), page: "speaker" },
];

export default agendaTab;
