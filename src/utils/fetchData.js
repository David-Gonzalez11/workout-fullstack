
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': "7592baae45msh1070ea733d1e4a8p12aa78jsnf3de40755978",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};
export const fetchData = async (url, options) => {
  const response  = await(fetch(url, options))
  const data = response.json()
  return data
}
