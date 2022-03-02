
import './style.css';
import imageInSrc from './imageInsrc.jpg';
import vidSrc from './vidSrc.mp4';


function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black', maxWidth:'100vw'}}>

<h1 className ="title red">Your name here</h1>

<br/>

<img className='imgsrc' src={imageInSrc} alt="imageInsrc"/>

<br/>

<img src="/imageInPublic.jpg" alt="imageInPublic"/>

</div>

<video width="320" height="240" controls>

<source src={vidSrc} type="video/mp4" />

</video>

<video width="320" height="240" controls>

<source src="/vidPb.mp4" type="video/mp4" />

</video>

    </div>
  );
}

export default App;

