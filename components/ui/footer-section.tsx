"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Instagram, Send, MapPin, Phone } from "lucide-react"
import { FaTiktok } from "react-icons/fa"
import { BsTelegram, BsYoutube } from "react-icons/bs"

function FooterSection() {
  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300" id="contact">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Get in Touch</h2>
            <p className="mb-6 text-muted-foreground">
              We&apos;d love to hear from you and help with your motorcycle detailing needs.
            </p>
            <div className="space-y-3">
              <Button
                onClick={() => window.open("https://t.me/ameewull", "_blank")}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
              >
                <span>Contact Us Now</span>
                <Send className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => window.open("https://g.co/kgs/zFkNqj7", "_blank")}
                variant="outline"
                className="w-full flex items-center justify-center gap-2 hover:bg-primary/10 transition-all duration-200"
              >
                <span>Locate Us</span>
                <MapPin className="h-4 w-4" />
              </Button>
            </div>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Operating Hours</h3>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <div className="font-medium">Mon - Fri:</div>
              <div>11am - 8pm</div>
              
              <div className="font-medium">Saturday:</div>
              <div>1pm - 6pm</div>
              
              <div className="font-medium">Sunday:</div>
              <div>Closed</div>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p className="font-medium">PimpMyBikeSG</p>
              <p>7A Marsiling Drive</p>
              <p>Singapore, 730007</p>
              <a 
                href="tel:+6587918141" 
                className="flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>+65 8791 8141</span>
              </a>
            </address>
          </div>
          
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      onClick={() => window.open("https://www.instagram.com/pimpmybike.sg/", "_blank")}
                    >
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      onClick={() => window.open("https://www.tiktok.com/@pimpmybike.sg", "_blank")}
                    >
                      <FaTiktok className="h-3.5 w-3.5" />
                      <span className="sr-only">TikTok</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on TikTok</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      onClick={() => window.open("https://t.me/+lzCq0xqINRVlZWY9", "_blank")}
                    >
                      <BsTelegram className="h-4 w-4" />
                      <span className="sr-only">Telegram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Join our Telegram channel</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      onClick={() => window.open("https://www.youtube.com/user/Wix", "_blank")}
                    >
                      <BsYoutube className="h-4 w-4" />
                      <span className="sr-only">YouTube</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Subscribe to our YouTube</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PimpMyBikeSG. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="/privacy-policy" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { FooterSection }