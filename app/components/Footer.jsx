export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Location 1 */}
          <div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Chesterfield Location</h3>
              <p className="text-gray-300">
                16216 Baxter Road, Suite 110, Chesterfield, MO 63017
              </p>
            </div>
          </div>

          {/* Location 2 */}
          <div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">St. Louis Location</h3>
              <p className="text-gray-300">
                10004 Kennerly Road, Suite 370A, Saint Louis, MO 63128
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-300">Phone: +1 (314) 500-2424</p>
              <p className="text-gray-300">Fax: (877) 569-3007</p>
              <p className="text-gray-300">Email: info@cbsurgery.com</p>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
            <div className="space-y-2">
              <p className="text-gray-300">Monday - Friday: 9:00 AM - 4:00 PM</p>
              <p className="text-gray-300">Saturday: By Appointment</p>
              <p className="text-gray-300">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Ensemble Digital Labs. All rights reserved.</p>
            <p className="mt-2">Serving the Greater St. Louis Area</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
