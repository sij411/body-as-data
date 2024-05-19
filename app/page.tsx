import Link from 'next/link';


export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
     
        
        <div id="button-container" className="flex items-center justify-center flex-col gap-4">
        <Link href="/webcam">
          <div id="webcam-button" className="p-6 w-32 h-16 bg-black rounded-xl shadow-lg flex items-center justify-center space-x-4">
            <p>My body</p>
          </div>
        </Link>

          <div id="webcam-button" className="p-6 w-32 h-16 bg-black rounded-xl shadow-lg flex items-center justify-center space-x-4">
            <p>Bodies</p>
          </div>
        </div>
      
    </main>
  );
}
