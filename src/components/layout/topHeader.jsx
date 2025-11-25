import Container from "../common/container";

export default function TopHeader() {
  return (
    <div className="bg-gray-400 text-white text-sm py-3">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex gap-6">
            <span>📞 +91 98762 83923</span>
            <span>✉ info@fiams.org</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Login | Membership | Support</span>
            <span className="bg-fiams-gold text-fiams-charcoal px-4 py-2 rounded">Join Our Community</span>
          </div>
        </div>
      </Container>
    </div>
  );
}