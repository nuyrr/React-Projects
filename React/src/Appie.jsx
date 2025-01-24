import { useState , useEffect} from "react";
import { Data } from "./EmployeeData";

function App() {
  const [data, setData] = useState([]); // Initialize with an empty array

  useEffect(() => {
    setData(Data); // Assume Data is an array of objects
    console.log(Data);
  }, []);

  return (
    <div className="App">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <td>Sr. No</td>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
              <td>
                <button onClick={() => handleAction(item.id)}>Action</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Example function for the action button
function handleAction(id) {
  alert(`Action clicked for ID: ${id}`);
}

export default App;
  //const[cityName, setCityName] = useState("Lahore")
  // const[weatherOfCityName, setWeatherOfCityName] = useState("")
  //const [celciusTemp, setCelciusTemp] = useState(0)//   // const handleChange = (e) => {    // setCityName(e.target.value)  // }//   // function getWeather(e) {    // e.preventDefault()    // axios.get(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityName}`).then((res) => {      // setWeatherOfCityName(`${res.data.location.name}(${res.data.location.region})`)      // setCelciusTemp(res.data.current.temp_c)    // }).catch((err) => { alert(err.message) })  // }//   useEffect(()=>{  setData(Data)  console.log(Data)},[]);  return (    <div className="App">      {/* <div><h1>Practicing State Variables and API Fecthing</h1></div> */}      {/*  */}      {/* Current Weather of {weatherOfCityName} is {celciusTemp} Celcius */}      {/* <br /> */}      {/* <form onSubmit={getWeather}> */}