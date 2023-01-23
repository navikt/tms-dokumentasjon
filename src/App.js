import './App.css';
import {DocumentationGroup} from "./DocumentationGroup";

function App() {
    return (
        <div className="App">
            <h1>Dokumentasjon for min side</h1>
            <DocumentationGroup title={"Utkast"}
                                repositories={["min-side-utkast-topic-iac", "tms-utkast"]}/>
        </div>
    );
}

export default App;
