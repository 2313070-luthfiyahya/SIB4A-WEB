export default function Learn() {
    return (
      <section className="h-screen bg-gray-100 flex flex-col gap-8 p-8 items-center">
      <div className="flex gap-28">
        <div className="bg-blue-200 p-8 h-72 w-100 rounded-4xl flex flex-col justify-between text-blue-950">
            <div className="flex gap-4">
                <img src="/palette.svg" alt="palette"/>
                <p className="font-bold">Design</p>
        </div>
        <div>
            <h2 className="text-4xl font-bold">Adobe Photoshop</h2>
            <p className="font-bold">in days 3</p>
        </div>
        </div>

        <div className="bg-green-200 p-8 h-72 w-100 rounded-4xl flex flex-col justify-between text-blue-950">
            <div className="flex gap-4">
                <img src="/terminal-2.svg" alt="terminal-2"/>
                <p className="font-bold">AI</p>
        </div>
        <div>
            <h2 className="text-4xl font-bold">DALL·E 2, Midjourney, Stable Diffusion</h2>
            <p className="font-bold">in 5 days</p>
        </div>
        </div>
        </div>
        <div className="flex gap-6">
        <div className="bg-purple-300 p-8 h-64 w-72 rounded-4xl flex flex-col justify-between text-blue-950"> 
        <div className="flex gap-4">
          <img src="/palette.svg" alt="palette"/>
          <p className="font-bold">Design</p>
          </div>
          <div>
          <h2 className="text-4xl font-bold">Figma</h2>
          <p className="font-bold">8 hours ago</p>
          </div>
          </div>
          
         
        <div className="bg-orange-300 p-8 h-64 w-72 rounded-4xl flex flex-col justify-between text-blue-950"> 
        <div className="flex gap-4">
          <img src="/code.svg" alt="code"/>
          <p className="font-bold">Codding</p>
          </div>
          <div>
          <h2 className="text-4xl font-bold">Python</h2>
          <p className="font-bold">2 days ago</p>
          </div>
          </div>
         
          <div className="bg-red-300 p-8 h-64 w-72 rounded-4xl flex flex-col justify-between text-blue-950"> 
        <div className="flex gap-4">
          <img src="/palette.svg" alt="palette"/>
          <p className="font-bold">Design</p>
          </div>
          <div>
          <h2 className="text-4xl font-bold">Sketch</h2>
          <p className="font-bold">4 days ago</p>
          </div>
          </div>
        </div>
          </section>
    );
    }