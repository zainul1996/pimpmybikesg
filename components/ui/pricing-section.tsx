"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Send } from "lucide-react"

export function PricingSection() {
  return (
    <section className="container mx-auto py-16 px-4 md:px-6 max-w-7xl" id="pricing">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Premium Detailing Packages</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Professional motorcycle detailing services tailored for all classes in Singapore
        </p>
      </div>

      <Tabs defaultValue="standard" className="w-full">
        <div className="flex justify-center mb-10">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="standard">Standard</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
        </div>

        {/* Standard Detailing Tab */}
        <TabsContent value="standard" className="space-y-8 animate-in fade-in-50 duration-300">
          <div className="grid gap-6 md:grid-cols-3">
            <StandardPricingCard
              title="Class 2B"
              price="$30"
              description="For smaller motorcycles up to 200cc"
              packageName="Standard Detailing - Class 2B"
            />
            <StandardPricingCard
              title="Class 2A"
              price="$35"
              description="For motorcycles between 201cc to 400cc"
              packageName="Standard Detailing - Class 2A"
            />
            <StandardPricingCard
              title="Class 2"
              price="$40"
              description="For motorcycles above 400cc"
              packageName="Standard Detailing - Class 2"
            />
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Our standard detailing includes a thorough cleaning of your motorcycle, ensuring it looks fresh and
              well-maintained.
            </p>
          </div>
        </TabsContent>

        {/* Premium Services Tab */}
        <TabsContent value="premium" className="animate-in fade-in-50 duration-300">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="group">
              <Card className="border h-full flex flex-col transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10 hover:border-primary/50">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                      Gloss Enhancement
                      <Badge variant="secondary" className="ml-2">
                        Popular
                      </Badge>
                    </CardTitle>
                  </div>
                  <CardDescription className="pt-2 text-base">
                    Restore and enhance the visual appeal of your ride with our Gloss Enhancement Package
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4 flex-grow">
                  <div className="grid gap-3">
                    <div className="font-medium text-lg">Package Includes:</div>
                    <ul className="space-y-2.5">
                      <PricingFeature>Plastic restoration</PricingFeature>
                      <PricingFeature>Ceramic coating (6 months durability)</PricingFeature>
                      <PricingFeature>1-step polishing</PricingFeature>
                      <PricingFeature>Foam wash</PricingFeature>
                      <PricingFeature>Chain degreasing</PricingFeature>
                      <PricingFeature>Chain lubrication</PricingFeature>
                      <PricingFeature>Rim cleaning</PricingFeature>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="pt-4 flex flex-col items-start border-t gap-6">
                  <div className="grid grid-cols-3 gap-4 w-full text-center">
                    <PriceBox title="Class 2B" price="$100" packageName="Gloss Enhancement - Class 2B" />
                    <PriceBox title="Class 2A" price="$105" packageName="Gloss Enhancement - Class 2A" />
                    <PriceBox title="Class 2" price="$110" packageName="Gloss Enhancement - Class 2" />
                  </div>
                </CardFooter>
              </Card>
            </div>

            <div className="group">
              <Card className="border-2 border-primary h-full flex flex-col transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/20 overflow-hidden pt-0">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium z-10">
                  Best Value
                </div>
                <CardHeader className="pb-4 bg-primary/5 dark:bg-primary/10 pt-6">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                      Glass Coating
                      <Sparkles className="h-5 w-5 text-primary" />
                    </CardTitle>
                    <Badge variant="default">Premium</Badge>
                  </div>
                  <CardDescription className="pt-2 text-base">
                    Long-term protection and a showroom finish that lasts for years
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4 flex-grow">
                  <div className="grid gap-3">
                    <div className="font-medium text-lg">Package Includes:</div>
                    <ul className="space-y-2.5">
                      <PricingFeature highlighted>Plastic restoration</PricingFeature>
                      <PricingFeature highlighted>Glass coating (5 years durability)</PricingFeature>
                      <PricingFeature highlighted>2-step polishing</PricingFeature>
                      <PricingFeature highlighted>Foam wash</PricingFeature>
                      <PricingFeature highlighted>Chain degreasing</PricingFeature>
                      <PricingFeature highlighted>Chain lubrication</PricingFeature>
                      <PricingFeature highlighted>Rim cleaning</PricingFeature>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-primary/20">
                      <div className="font-medium text-lg flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        Bonus:
                      </div>
                      <div className="text-sm mt-2 text-foreground/80 dark:text-foreground/90 font-medium">
                        Free maintenance coat on your next detailing session
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-4 flex flex-col items-start border-t gap-6">
                  <div className="grid grid-cols-2 gap-6 w-full text-center">
                    <PriceBox title="Non-Fairing" price="$280" packageName="Glass Coating - Non-Fairing" premium />
                    <PriceBox title="Fairing" price="$350" packageName="Glass Coating - Fairing" premium />
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Yearly Package Tab */}
        <TabsContent value="yearly" className="animate-in fade-in-50 duration-300">
          <div className="max-w-md mx-auto">
            <Card className="border-2 border-primary/80 transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/20 overflow-hidden pt-0">
              <CardHeader className="pb-4 bg-primary/5 dark:bg-primary/10 pt-6">
                <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                  Yearly Wash Package
                  <Badge variant="outline" className="ml-2 border-primary/30 text-primary">
                    Best Deal
                  </Badge>
                </CardTitle>
                <CardDescription className="pt-2 text-base">
                  Consistent care and maintenance throughout the year
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="grid gap-3">
                  <div className="font-medium text-lg">Package Includes:</div>
                  <ul className="space-y-2.5">
                    <PricingFeature highlighted>Full-body foam wash</PricingFeature>
                    <PricingFeature highlighted>Chain degreasing</PricingFeature>
                    <PricingFeature highlighted>Chain lubrication</PricingFeature>
                    <PricingFeature highlighted>Rim cleaning</PricingFeature>
                  </ul>
                  <div className="mt-4 pt-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Note:</span> This package includes multiple
                      service visits throughout the year
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-4 flex flex-col items-center border-t gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">$600</div>
                  <div className="text-sm text-muted-foreground mt-1">per year</div>
                </div>
                <Button
                  size="lg"
                  className="w-full mt-2 group"
                  onClick={() => window.open(`https://t.me/ameewull?text=I'm interested in the Yearly Wash Package for $600/year. Can you provide more details?`, "_blank")}
                >
                  <span>Contact on Telegram</span>
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 text-center">
        <p className="text-muted-foreground max-w-2xl mx-auto">
          All services are performed by certified professionals using premium products. Need a custom package?
        </p>
        <Button variant="outline" className="mt-6" onClick={() => window.open(`https://t.me/ameewull`, "_blank")}>
          <Send className="mr-2 h-4 w-4" />
          Contact Us on Telegram
        </Button>
      </div>
    </section>
  )
}

function StandardPricingCard({
  title,
  price,
  description,
  packageName,
}: {
  title: string
  price: string
  description: string
  packageName: string
}) {
  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-md dark:hover:shadow-primary/10">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="pt-1">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-3xl font-bold">{price}</div>
        <p className="text-sm text-muted-foreground mt-2">Standard detailing service</p>
        <ul className="space-y-2 text-sm mt-4">
          <PricingFeature>Basic cleaning</PricingFeature>
          <PricingFeature>Chain maintenance</PricingFeature>
          <PricingFeature>Rim cleaning</PricingFeature>
        </ul>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button
          className="w-full group"
          onClick={() => window.open(`https://t.me/ameewull?text=I'm interested in the ${packageName}. Can you provide more details?`, "_blank")}
        >
          <span>Contact on Telegram</span>
          <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  )
}

function PricingFeature({
  children,
  highlighted = false,
}: {
  children: React.ReactNode
  highlighted?: boolean
}) {
  return (
    <li className="flex items-center">
      <Check className={`h-4 w-4 mr-2 ${highlighted ? "text-primary" : "text-primary/80"}`} />
      <span className={highlighted ? "font-medium" : ""}>{children}</span>
    </li>
  )
}

function PriceBox({
  title,
  price,
  packageName,
  premium = false,
}: {
  title: string
  price: string
  packageName: string
  premium?: boolean
}) {
  return (
    <div
      className={`border rounded-md p-3 transition-all duration-300 hover:border-primary/50 ${
        premium ? "bg-primary/5 dark:bg-primary/10" : ""
      }`}
    >
      <div className="text-sm font-medium">{title}</div>
      <div className={`text-xl font-bold ${premium ? "text-primary" : ""}`}>{price}</div>
      <Button
        size="sm"
        variant={premium ? "default" : "outline"}
        className="w-full mt-3 group"
        onClick={() => window.open(`https://t.me/ameewull?text=I'm interested in the ${packageName} for ${price}. Can you provide more details?`, "_blank")}
      >
        <span>Contact</span>
        <Send className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  )
}
