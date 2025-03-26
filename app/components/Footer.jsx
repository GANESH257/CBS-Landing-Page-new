export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Chesterfield Bariatric Surgery</h3>
            <p className="mb-2">222 Clarkson Road</p>
            <p className="mb-2">Chesterfield, MO 63011</p>
            <p className="mb-2">Phone: (314) 205-6868</p>
            <p className="mb-2">Fax: (314) 205-6869</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Office Hours</h3>
            <p className="mb-2">Monday - Thursday: 8:00am - 5:00pm</p>
            <p className="mb-2">Friday: 8:00am - 3:00pm</p>
            <p className="mb-2">Saturday - Sunday: Closed</p>
            <p className="mb-2 mt-4 font-medium">Accepting Most Major Insurance Plans</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Weight Loss Solutions</a></li>
              <li><a href="#testimonials" className="hover:text-accent transition-colors">Patient Stories</a></li>
              <li><a href="#success-stories" className="hover:text-accent transition-colors">Success Stories</a></li>
              <li><a href="#appointment" className="hover:text-accent transition-colors">Appointments</a></li>
              <li><a href="https://cbsurgery.com" className="hover:text-accent transition-colors">Main Website</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Chesterfield Bariatric Surgery. All rights reserved.</p>
          <p className="mt-2 text-sm">Serving St. Louis County, St. Charles County, and surrounding areas in Missouri</p>
        </div>
      </div>
    </footer>
  );
}
