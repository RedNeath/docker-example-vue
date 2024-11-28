import Health from "@/classes/Health";
import axios from "axios";

const apiRoot = import.meta.env.VITE_API_ROOT;

/**
 * @returns {Health} Server health
 */
export async function getHealth() {
    return (await axios.get(`${apiRoot}/health`)).data;
}
