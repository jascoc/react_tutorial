import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

const App = () => {
  let capibaras = ["Happy Capi", "Angry Capi", "Hermano Capi", "Loco Capi"];
  let cats = ["Happy Cat", "Angry Cat", "Hermano Cat", "Loco Cat"];
  return (
    <div>
      <ListGroup items={capibaras} heading="Capibara"/>
      <ListGroup items={cats} heading="Cat"/>
    </div>
  );
};

export default App;
