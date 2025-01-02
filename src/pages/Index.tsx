import { useState } from "react";
import Navbar from "@/components/Navbar";

interface ImageData {
  url: string;
  caption: string;
}

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const images: ImageData[] = [
    { url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", caption: "Woman using laptop" },
    { url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", caption: "Gray laptop computer" },
    { url: "https://images.unsplash.com/photo-1518770660439-4636190af475", caption: "Circuit board macro" },
    { url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", caption: "Java programming" },
    { url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", caption: "MacBook Pro user" },
    { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", caption: "Woman using laptop" },
    { url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e", caption: "White robot" },
    { url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5", caption: "Matrix code" },
    { url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1", caption: "Laptop on surface" },
    { url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", caption: "Code on monitor" },
    { url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81", caption: "Video screens display" },
    { url: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c", caption: "Stylus and tablet" },
    { url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", caption: "Team working" },
    { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f", caption: "Laptop on glass table" },
    { url: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b", caption: "Blue light bulb" }
  ];

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

      {/* Image Holder Section */}
      <section id="works" className="min-h-screen bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600 text-center">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full">
            <img
              src={selectedImage.url}
              alt={selectedImage.caption}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4">{selectedImage.caption}</p>
          </div>
        </div>
      )}

      {/* Other sections */}
      <section id="exhibitions" className="min-h-screen bg-gray-50" />
      <section id="news" className="min-h-screen bg-white" />
      <section id="contact" className="min-h-screen bg-gray-50" />
    </div>
  );
};

export default Index;
