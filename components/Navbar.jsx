import Link from "next/link";

export default function Navbar() {
    return <div>
        <nav style={{ display: "flex", gap: "2rem" }}>
            
            <Link href="/">Home</Link>
            <Link href="/Alltask">All task</Link>
          
       </nav>
    </div>;
  }