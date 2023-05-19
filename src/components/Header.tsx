import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBurger,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const GetHeader = () => {
  return (
    <header className="w-auto h-32 flex flex-row justify-evenly items-center bg-cyan-500">
      {/* burger menu */}
      <section className="flex flex-row justify-center items-center">
        <FontAwesomeIcon
          icon={faBars}
          size="2xl"
          className="scale-150 hover:text-white transition ease-in cursor-pointer"
        />
      </section>
      <section>
        <h1 className="text-white text-2xl">ScheduleMe</h1>
      </section>
    </header>
  );
};

export default GetHeader;
