import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import data from "./Data";

function App() {
  const position = [50.83, 4.34]
  
  return (
    <>
      <div className="leaflet-containe">
        <MapContainer center={position} zoom={11} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />


    
        {data.map((frmr) => (
             <Marker
             key={frmr.id}
             position={[frmr.latitude, frmr.longitude]}
           >
             <Popup
               className="Popup"
               position={[frmr.latitude, frmr.longitude]}
             >
               <div>
                 <h4>{frmr.name}</h4>
                 <p style={{ textAlign: "left", fontWeight: "bold" }}>
                   {"Owner: " + " " + frmr.owner}
                 </p>
                 <p style={{ textAlign: "left" }}>
                   {"Contact:" + " " + frmr.contact}
                 </p>

                 <button variant="success" onClick={console.log("myHandleShow")}>
                   Show products
                 </button>
               </div>
             </Popup>
           </Marker>
          ))}

        </MapContainer>
      </div>
      </>
  );
}

export default App;
