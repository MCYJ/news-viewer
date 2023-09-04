import { useState } from 'react';
import NewsList from './components/NewsList';

const App = () => {
  // const [data, setData] = useState(null);

/*   const onClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/').then(response => {
      setData(response.data);
    });
  }; */

/*   const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=4debf998c9b64761bcfbfe9ca7997ef5',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  let keys = []
  for (const key in data){
    keys.push(key);
  }
  console.log(keys);
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 4)} readOnly={true}/>}
    </div>
  ) */

  return <NewsList />;
};

export default App;
