import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChartSimple,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const GetHeader = () => {
  return (
    <header className="bg-gray-800 flex flex-col items-center text-white">
      <section className="flex flex-col items-center mt-8">
        <section className="flex flex-row justify-between items-center content-around">
          <div>
            <FontAwesomeIcon icon={faGear} size="2xl" className="mt-5" />
          </div>
          <p className="mt-4 text-sm">Options</p>
        </section>
        <section className="flex flex-row justify-center items-center">
          <div>
            <FontAwesomeIcon
              icon={faCalendarDays}
              size="2xl"
              className="mt-5"
            />
          </div>
          <p className="mt-4 text-sm">Schedules</p>
        </section>
        <section className="flex flex-row justify-center items-center">
          <div>
            <FontAwesomeIcon icon={faChartSimple} size="2xl" className="mt-5" />
          </div>
          <p className="mt-4 text-sm">Statistics</p>
        </section>
      </section>
    </header>
  );
};

export default GetHeader;
