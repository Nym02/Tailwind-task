import Card from "./components/Card";
import Form from "./components/Form";


function App() {
  const dp = {
    person1: 'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    person2: 'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    person3: 'https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    person4: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
  return (
    <div className="bg-[#F5F6FA] h-auto xs:h-screen w-full flex flex-col justify-center items-center p-2">
      <Card name="amyrobson" timeAgo="1 month" likes='12' img={dp.person1} />
      <Card name="maxblagun" timeAgo="2 weeks" likes='5' img={dp.person2} />
      <div className="relative ">
        <span className="inline-block absolute bg-gray-200 w-[1.5px] left-4 md:left-12 h-full"></span>
        <Card type="reply" mentionName={'maxblagun'} name="ramsesmiron" timeAgo="1 week" img={dp.person3} likes='4' />
        <Card type="reply" name="juliusomo" mentionName='ramsesmiron' timeAgo="2 days" likes='2' img={dp.person4} self={true} />
      </div>
        <Form img={dp.person4} />
    </div>
  );
}

export default App;
