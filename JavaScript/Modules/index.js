import { getStudentCount, students } from "./data/data.js";
import logger from "./data/utils.js";
import { school } from "./data/extra.js";

logger(
  `We currently have ${getStudentCount()} students enrolled at ${school}:`
);
students.forEach((student) => logger(`- ${student}`));
