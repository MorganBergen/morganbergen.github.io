import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 relative rounded-full overflow-hidden">
          <Image
            src="/headshot.jpg"
            alt="Morgan Bergen"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Morgan Bergen</h1>
          <p className="text-lg mb-6">
            Hello, My name is Morgan Bergen. I'm a senior studying Computer Science and Math at Wichita State University School of Engineering.
          </p>
          <Link 
            href="/resume" 
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            View Resume
          </Link>
        </div>
      </div>
    </div>
  );
}