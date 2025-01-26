import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Guidelines from './components/Guidelines';
// import Campus from './components/Campus';
// import Network from './components/Network';
// import Donate from './components/Donate';
import Footer from './components/Footer';
// import Images from "./components/StarterImages";
import TimeLines from './components/TimeLine';
import DistinguishedAlumniAward from './components/DistinguishedAlumniAward';
import SubmitPhotoVideo from './components/SubmitPhotoVideo';
import AlumniAssociationInfo from './components/AlumniAssociationInfo';
import ContactCard from './components/ContactCard';
// import Poster from "./components/Poster";

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Hero />
                <TimeLines />
                <DistinguishedAlumniAward />
                <SubmitPhotoVideo />
                <AlumniAssociationInfo />
                <ContactCard />
            </main>
            <Footer />
        </div>
    );
}

export default App;
