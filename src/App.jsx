import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TechCard from "./components/TechCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load technologies data!");
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    const isExist = selectedStack.some((item) => item.id === tech.id);
    if (isExist) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setSelectedStack([...selectedStack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveItem = (id, name) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
    toast.info(`${name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error("All technologies removed from your stack.");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between font-sans">
      <Navbar />
      <ToastContainer position="top-right" autoClose={2500} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full" id="home">
        <Banner />

        <div className="mt-16" id="technologies">
          <h2 className="text-3xl font-bold tracking-tight">
            Explore the <span className="text-brand-gradient">Technologies</span>
          </h2>
          <p className="text-slate-500 mt-1 mb-8">
            Pick technologies to design and customize your ideal stack.
          </p>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    isAdded={selectedStack.some((item) => item.id === tech.id)}
                    onAdd={handleAddToStack}
                  />
                ))}
              </div>

              <div className="lg:col-span-1 sticky top-24">
                <YourStack
                  stack={selectedStack}
                  onRemove={handleRemoveItem}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}