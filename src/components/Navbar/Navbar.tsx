
export default function Navbar() {
  return (
    <>
      <section id="navbar" className="flex flex row ">
        <div>
          <p className="text-3xl m-2"><span className="text-blue-400">T</span>olotra.</p>
        </div>
         
       <ul className="flex flex-row gap-12 ml-210 mt-5   ">
                <a href="#navbar" className="hidden">Navbar</a>
                <a href="#home" className=" text-purple-800 bg-transparent border-2 border-none ">Home</a>
                <a href="#about">About</a>
                <a href="#skills" >Skills</a>
                <a href="#projet" >Project</a>
        </ul>
  

        </section>
     
  
       

    </>
  )
}
