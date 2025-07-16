export const getApiData = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags");
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
