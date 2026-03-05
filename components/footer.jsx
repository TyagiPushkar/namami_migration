import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16">

      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10 pb-10">

        {/* Company */}
        <div>
          <img
            src="/assets/images/darklogo.png"
            alt="Logo"
            className="w-40 mb-4"
          />
          <p>
            Say bye to Manual Tasks & Digitize your workflows with our
            customized mobile apps.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Useful Links
          </h3>

          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p>+91-9906060126</p>
          <p>solutions@namami-infotech.com</p>
          <p>
            DPT - 303, DLF Prime Tower,
            Okhla Phase - 1, New Delhi.
          </p>
        </div>

      </div>

      <div className="bg-gray-800 text-center py-4 text-sm">
        © 2024 Namami Infotech. All Rights Reserved.
      </div>

    </footer>
  );
}