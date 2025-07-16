import { NavLink } from "react-router-dom";
import { useThemeContext } from "../Context/ThemeContext";

export const CountryCard = ({ curCountry, name }) => {
  const { population, region, capital, flags } = curCountry;

  const { theme } = useThemeContext();

  return (
    <NavLink title={name} className={`country_card `} to={`/country-list/${name}`}>
      <div className="country_flag">
        <img src={flags.png} alt="" />
      </div>

      <div className="country_content">
        <h2 className="country_name" >
          {name.length > 15 ? `${name.slice(0, 15)}...` : name}
        </h2>
        <div
          className={`country_details ${
            theme === "light" ? "text-light" : "text-dark"
          }`}
        >
          <p>
            <b>Population:</b> {population.toLocaleString("en-IN")}
          </p>
          <p>
            <b>Region:</b> {region}
          </p>
          <p>
            <b>Capital:</b> {capital}
          </p>
        </div>
      </div>
    </NavLink>
  );
};
