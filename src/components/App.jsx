import Footer from './Footer';
import MusicPlayer from './MusicPlayer';

function App() {
  return (
    <div className="flex flex-col min-h-screen px-3 pt-3 mx-auto">
      <MusicPlayer />
      <Footer/>
    </div>
  );
}

export default App;
