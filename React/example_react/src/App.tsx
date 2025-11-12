import CardComponent from "./components/card/card.component";

function App() {
  return (
    <div className="">
      <h1>Vita + React + Tunahan</h1>
      <CardComponent
        title="An Amazing Journey!"
        description="Our journey through the forests of React!"
        imageUrl="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTBkyvS4-2Tlgu-Rq_fyncTkM5MaBzWDEA9DpPDHKMkrc-6UCBAlivjonskty1NlCGIhleoLCvoIHc4Bx2Fd-8"
      />
      <CardComponent
        title="Today Is The Day We Conquer!"
        description="We will overcome the likes of React like we did with JavaScript!"
        imageUrl="https://images.squarespace-cdn.com/content/v1/52d199b9e4b02276b3d88764/1586882999868-TI2RVANV0P7T7LQCCXL2/Overcome_Slide.jpg"
      />
    </div>
  );
}

export default App;
