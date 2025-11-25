import Container from "../common/container";

export default function Footer() {
  return (
    <footer className="bg-fiams-purple/5 text-fiams-charcoal py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-xl font-bold mb-4">FIAMS</h4>
            <p className="text-sm mb-6">The Federation for Integrated Arts & Management Studies - Where Creativity Meets Leadership Excellence</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-fiams-purple text-white rounded flex items-center justify-center hover:bg-fiams-gold">Li</a>
              <a href="#" className="w-10 h-10 bg-fiams-purple text-white rounded flex items-center justify-center hover:bg-fiams-gold">X</a>
              <a href="#" className="w-10 h-10 bg-fiams-purple text-white rounded flex items-center justify-center hover:bg-fiams-gold">Fb</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#development" className="hover:text-fiams-purple">Executive Leadership</a></li>
              <li><a href="#development" className="hover:text-fiams-purple">Professional Development</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#research" className="hover:text-fiams-purple">Publications</a></li>
              <li><a href="#events" className="hover:text-fiams-purple">Events</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm">info@fiams.org<br />+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="text-center text-sm mt-10 pt-8 border-t border-fiams-purple/20">
          © 2025 Federation for Integrated Arts & Management Studies. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}