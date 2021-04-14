import { API } from "./api";
import { NOTIFY } from "./notification";
import { serviceMdl } from "./service";
const commonMiddleWare = [...serviceMdl, API, NOTIFY];
export default commonMiddleWare;
