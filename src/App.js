import Image from "./Image";
import "./modules/App.css";

function App() {
  // console.log(data);
  return (
    <div>
      <h1 className="title">Image Gallery</h1>
      <Image/>
    </div>
  );
}

export default App;















// function App() {
//   // console.log(data);
//   return (
//     <div>
//       <h1>Image Gallery</h1>
//       {data.map( ({photographer,src},index)=>(
//     <div key={index}>
//       <Image img={src}/>
//       <p>{photographer}</p>
//     </div>
//      ) )}
//     </div>
//   );
// }

// export default App;