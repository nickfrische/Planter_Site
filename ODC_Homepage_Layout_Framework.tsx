// app/page.tsx
// HOMEPAGE LAYOUT FRAMEWORK
// Structure only - no styling, edge-to-edge sections

export default function HomePage() {
  return (
    <>
      {/* HEADER - Fixed/Sticky */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between h-[72px] px-6">
          <div>[LOGO]</div>
          <nav className="hidden lg:flex gap-8">
            <a href="/planter-subscriptions">Planter Subscriptions</a>
            <a href="/seasonal-decor">Seasonal Decor</a>
            <a href="/irrigation">Irrigation</a>
            <a href="/maintenance">Maintenance</a>
            <a href="/events-rentals">Events & Rentals</a>
            <a href="/about">About Us</a>
            <a href="/faq">FAQ</a>
          </nav>
          <a href="/contact">[CONTACT BTN]</a>
          <button className="lg:hidden">[MENU]</button>
        </div>
      </header>

      <main className="pt-[72px]">

        {/* ============================================ */}
        {/* SECTION 1: HERO - Split Screen              */}
        {/* Edge-to-edge, full viewport                 */}
        {/* ============================================ */}
        <section className="w-full min-h-screen grid lg:grid-cols-2">
          {/* Left: Video */}
          <div className="h-[50vh] lg:h-auto">
            [VIDEO - Looping, muted, autoplay]
          </div>
          {/* Right: Content */}
          <div className="flex flex-col justify-center p-8 lg:p-16">
            <h1>Your Private Gardener</h1>
            <p>Professional seasonal planters, designed and installed for you.</p>
            <div className="flex gap-4 mt-8">
              <a href="#how-it-works">[See How It Works]</a>
              <a href="/contact">[Request a Consultation]</a>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 2: TRUST BAR - 3 Icons              */}
        {/* Edge-to-edge background                     */}
        {/* ============================================ */}
        <section className="w-full">
          <div className="grid grid-cols-3 gap-8 p-8">
            <div className="text-center">
              [ICON] Local & Family-Owned
            </div>
            <div className="text-center">
              [ICON] 4 Seasonal Refreshes/Year
            </div>
            <div className="text-center">
              [ICON] Zero Maintenance Required
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 3: HOW IT WORKS - 3 Steps           */}
        {/* Edge-to-edge, minimal text                  */}
        {/* ============================================ */}
        <section id="how-it-works" className="w-full">
          <div className="p-8 lg:p-16">
            <h2 className="text-center">How It Works</h2>
            <div className="grid lg:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <span>01</span>
                [ICON]
                <h3>We Visit Your Space</h3>
              </div>
              <div className="text-center">
                <span>02</span>
                [ICON]
                <h3>We Design & Install</h3>
              </div>
              <div className="text-center">
                <span>03</span>
                [ICON]
                <h3>We Handle Everything</h3>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 4: WHAT WE DO - 5 Service Cards     */}
        {/* Edge-to-edge grid                           */}
        {/* ============================================ */}
        <section className="w-full">
          <div className="p-8 lg:p-16">
            <h2 className="text-center">What We Do</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              <a href="/planter-subscriptions" className="block">
                [IMAGE]
                <h3>Planter Subscriptions</h3>
                <span>Learn More →</span>
              </a>
              <a href="/seasonal-decor" className="block">
                [IMAGE]
                <h3>Seasonal Decor</h3>
                <span>Learn More →</span>
              </a>
              <a href="/irrigation" className="block">
                [IMAGE]
                <h3>Irrigation</h3>
                <span>Learn More →</span>
              </a>
              <a href="/maintenance" className="block">
                [IMAGE]
                <h3>Maintenance</h3>
                <span>Learn More →</span>
              </a>
            </div>
            {/* 5th card centered below */}
            <div className="flex justify-center mt-4">
              <a href="/events-rentals" className="block w-full max-w-xs">
                [IMAGE]
                <h3>Events & Rentals</h3>
                <span>Learn More →</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 5: SEASONAL PREVIEW TOGGLE          */}
        {/* Edge-to-edge image display                  */}
        {/* ============================================ */}
        <section className="w-full">
          <div className="p-8 lg:p-16">
            <h2 className="text-center">See the Transformation</h2>
            {/* Toggle Buttons */}
            <div className="flex justify-center gap-2 mt-8">
              <button>[Spring]</button>
              <button>[Summer]</button>
              <button>[Fall]</button>
              <button>[Winter]</button>
            </div>
            {/* Preview Image - Full width */}
            <div className="mt-8 w-full aspect-[16/10]">
              [SEASONAL IMAGE - Same planter in selected season]
              <div>[Season Name]</div>
              <div>[Season Description]</div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 6: BEFORE/AFTER GALLERY             */}
        {/* Edge-to-edge slider                         */}
        {/* ============================================ */}
        <section className="w-full">
          <div className="p-8 lg:p-16">
            <h2 className="text-center">The Difference</h2>
            {/* Slider Container */}
            <div className="mt-12 w-full aspect-[16/9] relative">
              [BEFORE IMAGE - Left side]
              [AFTER IMAGE - Right side]
              [DRAG HANDLE - Center]
              <span>[Before Label]</span>
              <span>[After Label]</span>
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              <button>[•]</button>
              <button>[•]</button>
              <button>[•]</button>
              <button>[•]</button>
            </div>
            <div className="text-center mt-6">
              <a href="/gallery">See More Work</a>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 7: OUR STORY - Brief                */}
        {/* Edge-to-edge, 2 columns                     */}
        {/* ============================================ */}
        <section className="w-full">
          <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-16">
            {/* Photo */}
            <div className="aspect-[4/5]">
              [PHOTO - Brian & Eliza]
            </div>
            {/* Content */}
            <div className="flex flex-col justify-center">
              <span>OUR STORY</span>
              <h2>Meet Brian & Eliza</h2>
              <p>We started Detroit Style Planter Company to bring beautiful planters to Detroit-area homes—while creating flexible jobs for our community.</p>
              <a href="/about">Learn More About Us →</a>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 8: TESTIMONIALS                     */}
        {/* Edge-to-edge carousel                       */}
        {/* ============================================ */}
        <section className="w-full">
          <div className="p-8 lg:p-16">
            <h2 className="text-center">What Customers Say</h2>
            {/* Carousel */}
            <div className="relative mt-12">
              <button className="absolute left-0 top-1/2">[←]</button>
              <div className="text-center px-16">
                <div>[★★★★★]</div>
                <blockquote>"Worth every penny. Our porch has never looked better."</blockquote>
                <p>— Sarah M., Birmingham</p>
              </div>
              <button className="absolute right-0 top-1/2">[→]</button>
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              <button>[•]</button>
              <button>[•]</button>
              <button>[•]</button>
              <button>[•]</button>
              <button>[•]</button>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 9: FAQ PREVIEW - 4 Questions        */}
        {/* Edge-to-edge                                */}
        {/* ============================================ */}
        <section className="w-full">
          <div className="p-8 lg:p-16">
            <h2 className="text-center">Common Questions</h2>
            {/* Accordion */}
            <div className="mt-12 max-w-2xl mx-auto space-y-3">
              <div>
                <button className="w-full flex justify-between">
                  <span>What is a planter subscription?</span>
                  <span>[+]</span>
                </button>
                <div>[Answer content]</div>
              </div>
              <div>
                <button className="w-full flex justify-between">
                  <span>What areas do you serve?</span>
                  <span>[+]</span>
                </button>
                <div>[Answer content]</div>
              </div>
              <div>
                <button className="w-full flex justify-between">
                  <span>Do I need to do any maintenance?</span>
                  <span>[+]</span>
                </button>
                <div>[Answer content]</div>
              </div>
              <div>
                <button className="w-full flex justify-between">
                  <span>How do I get started?</span>
                  <span>[+]</span>
                </button>
                <div>[Answer content]</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="/faq">See All FAQs →</a>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 10: FINAL CTA - Contact Form        */}
        {/* Edge-to-edge with background                */}
        {/* ============================================ */}
        <section className="w-full relative">
          {/* Background */}
          <div className="absolute inset-0">
            [BACKGROUND IMAGE]
            [OVERLAY]
          </div>
          {/* Content */}
          <div className="relative z-10 p-8 lg:p-16">
            <h2 className="text-center">Ready to Transform Your Outdoor Space?</h2>
            {/* Form */}
            <form className="mt-12 max-w-lg mx-auto">
              <div className="mb-4">
                <label>Name</label>
                <input type="text" name="name" autoComplete="name" />
              </div>
              <div className="mb-4">
                <label>Email</label>
                <input type="email" name="email" autoComplete="email" />
              </div>
              <div className="mb-4">
                <label>Phone</label>
                <input type="tel" name="phone" autoComplete="tel" />
              </div>
              <div className="mb-4">
                <label>Message (optional)</label>
                <textarea name="message" rows={3}></textarea>
              </div>
              <button type="submit">[Request a Consultation]</button>
            </form>
            <p className="text-center mt-8">
              Or call us: <a href="tel:+12485550123">(248) 555-0123</a>
            </p>
          </div>
        </section>

      </main>

      {/* ============================================ */}
      {/* FOOTER                                       */}
      {/* Edge-to-edge                                 */}
      {/* ============================================ */}
      <footer className="w-full">
        <div className="p-8 lg:p-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Logo & Tagline */}
            <div>
              [LOGO]
              <p>Your Private Gardener</p>
            </div>
            {/* Services */}
            <div>
              <h4>Services</h4>
              <ul>
                <li><a href="/planter-subscriptions">Planter Subscriptions</a></li>
                <li><a href="/seasonal-decor">Seasonal Decor</a></li>
                <li><a href="/irrigation">Irrigation</a></li>
                <li><a href="/maintenance">Maintenance</a></li>
                <li><a href="/events-rentals">Events & Rentals</a></li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            {/* Areas */}
            <div>
              <h4>Areas We Serve</h4>
              <ul>
                <li><a href="/areas/birmingham">Birmingham</a></li>
                <li><a href="/areas/bloomfield-hills">Bloomfield Hills</a></li>
                <li><a href="/areas/grosse-pointe">Grosse Pointe</a></li>
                <li><a href="/areas/royal-oak">Royal Oak</a></li>
                <li><a href="/areas/troy">Troy</a></li>
                <li><a href="/areas">View All →</a></li>
              </ul>
            </div>
          </div>
          {/* Bottom */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t">
            <p>© 2026 DS Planter Company</p>
            <div className="flex gap-4">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
            <div className="flex gap-4">
              [FB] [IG] [PIN]
            </div>
          </div>
        </div>
      </footer>

      {/* ============================================ */}
      {/* CHATBOT - Fixed Position                     */}
      {/* ============================================ */}
      <div className="fixed bottom-6 right-6 z-50">
        <button>[💬 Chat]</button>
        {/* Chat panel when open */}
        <div className="hidden">
          <div>[Header: Chat with us] [X]</div>
          <div>[Messages area]</div>
          <div>[Quick actions: Subscriptions, Service Areas, Get Started]</div>
          <div>[Input field] [Send]</div>
        </div>
      </div>

    </>
  )
}
