import Message from './Message'
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
export default function App(){
let items=['Chennai','Madurai','Tirunelveli','Coimbatore']
const handleEvent =(item:string)=>{
  console.log(item)
}
  return <div>
    <Alert>Welcome <b>Rohit</b></Alert>
    <ListGroup items={items} heading="Cities" onSelectItem={handleEvent}></ListGroup>
    <Message></Message>
    </div>;
}