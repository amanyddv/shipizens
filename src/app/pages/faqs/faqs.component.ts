import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
  faqs = [

    {
      state: false, q: " What is a shipping website?     ", a: "A website that offers shipping services to users is known as a shipping website. Customers may track their products, change their delivery preferences, and book and pay for shipping services online using these websites.      "

    },
    {
      state: false, q: " How are logistics and shipping websites different?      ", a: " Logistics and shipping websites are related but serve different purposes.      Websites dedicated to logistics offer data and tools for managing the complete supply chain, including distribution, warehousing, inventory control, and transportation.  On the other hand, shipping websites are mostly concerned with the transportation of goods from one place to another       "
    },
    {
      state: false, q: " What are the key benefits of a shipping website over traditional means of shipping?      ", a: " The major benefits of using a shipping website over conventional shipping include the following:" ,step:["1. Wider Reach2. Better Customer Service","  3. Cost-Effective 4. Hassle-Free Process",  " 5. Better Marketing Opportunities","  6. Fail-safe and Secure Operation"          ]

    },
    {
      state: false, q: " What services do Shipizens offer? ", a: "    Our website offers a variety of services to ensure customer satisfaction such as",step:[  " 1. Safe and On- time delivery."   ,"2. User - Friendly Interface. " ," 3. Customer Support and Effective Query Resolution.","  4. Live Location Tracking. " ,"5. Personalized services to get the best deals according to your needs. "         ]
    },
{
  state: false, q: " How does Shipizens function?  ", a: "  The following steps are taken during the shipping procedure via our website:",step:["1. Customers fill out personal and contact information, such as their name, address, email address, and phone number, to create an account on the website."," 2. Customers enter package information, including the size, weight, contents, and delivery address."," 3. Based on aspects including cost, delivery time, and package size, customers choose a shipping carrier and service level."," 4.  Then, the customer selects their payment mode and enters all the necessary details that follow."," 5. Once the package information and payment details are submitted, the website generates a shipping label with all the necessary information for the carrier to deliver the package.","6. After that, the transporter arrives at the customer's location within the estimated time, and the customer delivers their packages to the transporter.","7. The customer can utilize the tracking number provided by the website to follow the package's path from pickup through delivery.","8. Once the package is delivered, the carrier confirms it, and the website updates the customer's account with the delivery status. "  ]
},
{
  state: false, q: " What are the various scenarios in which I can employ the services of Shipizens? ", a: " Shipizens is a shipping company that provides logistics solutions for all sizes of businesses. We aim to bridge the gap between producers, manufacturers, and sellers of goods on one side, and buyers, distributors, and consumers on the other. Several scenarios where Shipizens might be useful are listed below:",step:["1. E-commerce: With the advent of online shopping, a shipping company like Shipizens is critical in delivering packages and commodities ordered online from multiple stores to customers' doorsteps."," 2. Business shipping: Business firms can rely on us to deliver and receive goods, documents, and other vital supplies from and to their clients, suppliers, and business partners. ","3. Personal shipping: Individuals frequently utilize shipping firms such as ours to deliver gifts, personal possessions, and other products to family and friends over a distance.","4. Retail distribution: Retailers may use Shipizens to move inventory from distribution centres to stores or to fulfil online orders. "]
},
{
  state: false, q: " What are the various factors that can affect the cost of shipping services?  ", a: "The following list includes the factors that may affect the cost of shipping services:" ,step:["  1. Package Size and Weight","2. Shipping Distance" ,"3. Shipping Method"," 4. Carrier and Service Level "," 5. Additional Requests"]
},
{
  state: false, q: " What steps are being taken by Shipizens to guarantee a fail-safe delivery? ", a: "  Shipizens take every precaution to ensure the safety of our clients' belongings from any type of damage. However, in the event of any unforeseeable mishap, we guarantee our clients' immediate claim settlement from the insurance provider with whom we are associated.   "
},
{
  state: false, q: "  How can I track my shipment?  ", a: " With the use of a vehicle location monitoring technique, Shipizens offers live location tracking stepions to its clients. Vehicle location monitoring is a convenient solution to follow the whereabouts and motion of cars in real-time, enabling organisations and individuals to enhance operations, boost productivity, and guarantee the protection and safety of their assets.  "
},
{
  state: false, q: "  Can I join the Shipizens team?  ", a: " Shipizens is a growing business firm that is actively looking for talented individuals who share our vision and are enthusiastic about working to improve our services. So, if you believe you can be an asset to our company, please fill out your information on the contact us page, and we will contact you within 1-2 business days to discuss the process of joining us. "
}
  ]



onClick(id: any) {
  this.faqs[id].state = !this.faqs[id].state;

}
}
