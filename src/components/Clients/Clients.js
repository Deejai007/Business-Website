import React from "react";
import axios from "axios";
import "./Clients.css";
const baseURL = "https://reqres.in/api/users?page=1";
function Clients() {
  const [clients, setClients] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setClients(response.data);
    });
  }, []);
  //   let clients_info = clients.data;

  if (!clients) return <div className="dj-Loading">Loading</div>;
  return (
    <div className="clients-div ClientsComp ScrollComp">
      <h1>Our clients...</h1>

      <div className="clients-list">
        {[...clients.data].map((x) => (
          <div className="clients-client" key={x.id}>
            <div className="image-div">
              <img src={x.avatar} alt="" />
            </div>
            <div className="info-div">
              <div className="name-div">
                {x.first_name} {x.last_name}
              </div>
              <div className="email-div">
                <i className="fa fa-thin fa-envelope"></i> {x.email}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Clients;
