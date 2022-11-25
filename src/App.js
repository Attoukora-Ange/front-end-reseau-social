import Inscription from "./pages/inscription/Inscription";
import ProtetedRoute from "./ProtetedRoute";
import { Navigate, Route, Routes } from "react-router-dom";
import Accueil from "./pages/accueil/Accueil";
import PublicRoute from "./PublicRoute";
import Connexion from "./pages/connexion/Connexion";
import Identification from "./pages/identification/Identification";
import ModfierIdendification from "./pages/identification/ModfierIdendification";
import CodeIdentification from "./pages/identification/CodeIdentification";
import axios from "axios";
import { useEffect, useState} from "react";

function App() {
  const [id, setId] = useState(null)
  // const { dispacth } = useContext(BASE_CONTEXTE);
 
  
  useEffect(() => {
    const URL_JWT = `${process.env.REACT_APP_URL}/jwt`;
    axios
      .get(URL_JWT, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200){
          setId(response.data.data)
          // return dispacth({type: AFFICHER_ID_UTILISATEUR, payload: response.data.data});
        } 
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, setId]);

  return (
    <div className="App">
      <Routes>
        <Route element={<ProtetedRoute id = {id} />}>
          <Route path="/" element={<Accueil />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
        <Route element={<PublicRoute id = {id}  />}>
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/compte/identification" element={<Identification />} />
          <Route path="/compte/code" element={<CodeIdentification />} />
          <Route
            path="/compte/modifier/identification"
            element={<ModfierIdendification />}
          />
          <Route path="/*" element={<Connexion />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
