import Decks from "./Decks";
import Top from "./Top"
import Footer from "./Footer"


export default function App(){
  return (
      <div className="main">
        <Top></Top>
        <Decks></Decks>
        <Footer></Footer>
      </div>
  )
}