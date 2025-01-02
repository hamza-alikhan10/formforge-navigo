import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to FormForge</h1>
          <p className="text-xl text-gray-600">Crafting Digital Experiences</p>
        </div>
      </section>

      {/* Other sections would go here */}
      <section id="works" className="min-h-screen bg-white" />
      <section id="exhibitions" className="min-h-screen bg-gray-50" />
      <section id="news" className="min-h-screen bg-white" />
      <section id="contact" className="min-h-screen bg-gray-50" />
    </div>
  );
};

export default Index;
