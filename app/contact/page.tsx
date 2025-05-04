"use client";

import { OrganizationJSONLD } from "@/components/ui/json-ld";

// Note: The metadata for this page is defined in page-metadata.tsx
// We use a separate file because "use client" can't be combined with metadata exports

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Have questions about our services? Need a custom detailing solution? We&apos;re here to help.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-lg">Email</h3>
              <p className="text-primary">info@pimpmybikesg.com</p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg">Phone</h3>
              <p className="text-primary">+65 8123 4567</p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg">Location</h3>
              <p className="text-gray-700 dark:text-gray-300">
                123 Bike Street<br />
                Singapore 123456
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg">Hours</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Monday - Friday: 9am - 7pm<br />
                Saturday: 10am - 5pm<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <OrganizationJSONLD />
    </div>
  );
}