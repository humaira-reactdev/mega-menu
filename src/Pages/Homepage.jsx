import Navbar from "../Components/Navbar"


const Homepage = () => {
  return (
    <>
      <Navbar/>
      <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white py-12">
      </header>
      <main id="products" className="flex-grow p-4">
      </main>
    </div>
    </>
  )
}

export default Homepage