import { RiShieldUserFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
const information_contact = [
  {
    id: "1",
    className: "input-wrap",
    name: "Frist Name",
    label: "Frist Name",
    icon: <RiShieldUserFill />,
  },
  {
    id: "2",
    className: "input-wrap",
    name: "Last Name",
    label: "Last Name",
    icon: <RiShieldUserFill />,
  },
  {
    id: "3",
    className: "input-wrap w-100",
    name: "Email",
    label: "Email",
    icon: <FaEnvelope />,
  },
];

const texx = [
  {
    id: "1",
    className: "input-wrap textarea w-100",
    name: "Message",
    label: "Message",
    icon: <MdOutlineMessage />,
  },
];
const Buged = [
  {
    id: "1",
    className: "input-wrap textarea w-100",
    name: "Text",
    label: "Report a Bug",
    icon: <MdOutlineMessage />,
  },
];

const Feature = [
  {
    id: "1",
    className: "input-wrap textarea w-100",
    name: "Text",
    label: "Add NewFeature",
    icon: <MdOutlineMessage />,
  },
];

export default information_contact;
export { texx, Buged, Feature };
