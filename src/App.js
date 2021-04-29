import image1 from './images/imageInSrc.jpg';
import './App.css';
function App() {
  return (

    <div className="app-container">
      <div>
        <h1 className="title-red">badis khachaa</h1>
        <img src={image1} alt='image' />
        <br />

        <img src="/images/imageInPublic.jpg" alt='image' />

      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/7puT1EkWVZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    </div>

  );


}
export default App;
