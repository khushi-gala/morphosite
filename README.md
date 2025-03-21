
# Morphosite

SaaS Website Builder, Project Management And Dashboard With Stripe using Nextjs14, Bun, Stripe Connect, Prisma, MySQL, Tailwind

## 📝 Problem Statement
Managing a multivendor B2B2B SaaS platform is challenging due to complex agency management, payment processing, and lack of real-time tracking. Morphosite simplifies operations with role-based access, funnel building, subscription management, and performance analytics, making it easier to scale and manage businesses.

## Screenshots
### 1. Landing Page: ###
<img src="public/images/landingPage.png" width=100%>
<img src="public/images/plans.png" width=100%>

### 2. Agency Dashboard: ###
<img src="public/images/agencyDashboard.png" width=100%>

### 3. Agency Launchpad: ###
<img src="public/images/agencyLaunchpad.png" width=100%>

### 4. Agency Settings: ###
<img src="public/images/agencySettings.png" width=100%>

### 5. Agency Subaccounts: ###
<img src="public/images/agencySubaccounts.png" width=100%>

### 6. Subaccount Dashboard: ###
<img src="public/images/subaccountDashboard.png" width=100%>

### 7. Add Images: ###
<img src="public/images/uploadMedia.png" width=100%>

### 8. Khanban Board for Subaccounts: ###
<img src="public/images/khanbanBoard.png" width=100%>

### 9. Raise Tickets in Pipelines: ###
<img src="public/images/ticket.png" height=600px>

### 10. Create Funnels: ###
<img src="public/images/funnel.png" width=100%>

### 11. Light Mode: ###
<img src="public/images/lightMode.png" width=100%>

### 12. Drag and Drop Website Builder: ###
<img src="public/images/websiteBuilder.png" width=100%>

### 13. Access Uploaded Images in Website Builder: ###
<img src="public/images/accessImages.png" width=100%>

### 14. Sample Website: ###
<img src="public/images/sample1.png" width=100%>
<img src="public/images/sample2.png" width=100%>

## 🚀Features in this application
- 🤯 Multivendor B2B2B Saas
- 🏢 Agency and Sub accounts
- 🌐 Unlimited funnel hosting
- 🚀 Full Website & Funnel builder
- 💻 Role-based Access
- 🔄 Stripe Subscription plans
- 🛒Stripe add-on products
- 🔐 Connect Stripe accounts for all users! - Stripe Connect
- 💳 Charge application fee per sale and recurring sales
- 💰 Custom Dashboards
- 📊 Media Storage
- 📈 Stripe Product Sync
- 📌Custom checkouts on funnels
- 📢 Get leads from funnels
- 🎨 Khanban board
- 📂 Project management system
- 🔗 Notifications
- 📆 Funnel performance metrics
- 🧾 Agency and subacc metrics
- 🌙 Graphs and charts
- ☀️ Light & Dark mode
- 📄 Functioning landing page

## Website with background grids
[ibelick](https://bg.ibelick.com/)

## Shadcn UI Theme creator
[Link To Website](https://gradient.page/tools/shadcn-ui-theme-generator)
## 🛠️ Technologies Used 🚀

🌐 **Frontend**  
- **Next.js:** Used to build a fast and interactive UI, including dashboards, funnels, and user management.  
- **Tailwind CSS:** Ensures a sleek, responsive design with customizable styling.  
- **Clerk:** Manages authentication, allowing secure sign-in and user management.  
- **ShadCN UI:** Provides pre-styled components for a consistent UI.  
- **Radix UI:** Used for accessible and customizable UI primitives like modals, dropdowns, and tooltips.  
- **react-icons:** Adds intuitive icons for navigation, actions, and UI enhancements.  
- **react-hook-form:** Manages form validation and submission efficiently.  
- **Recharts:** Displays analytics and funnel performance with interactive graphs.  
- **UploadThing:** Enables secure file uploads for media storage.  

🖥️ **Backend**  
- **Node.js:** Powers the backend server, handling API requests and business logic.  
- **Next.js API Routes:** Manages backend functionality within the same project.  
- **Prisma:** ORM for interacting with the database, ensuring efficient queries and schema management.  
- **Clerk:** Provides authentication, user roles, and access control.  
- **Stripe API:** Enables payment processing, including subscription plans and add-ons.    

💾 **Database**  
- **PostgreSQL:** Stores structured data, including users, agencies, subscriptions, and transactions.  

## Installation

### 1. Install morphosite with bun: ###

```bash
  cd morphosite
  bun install 
```
### 2.  Create a ```.env``` file in the server folder and define the following variables: ###
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
- CLERK_SECRET_KEY
- UPLOADTHING_SECRET
- UPLOADTHING_APP_ID
- UPLOADTHING_TOKEN
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- STRIPE_WEBHOOK_SECRET
- NEXT_PUBLIC_STRIPE_CLIENT_ID

Sample ```.env``` file is uploaded

### 3. Run the project: ###

```bash
  bun run dev 
```

For any issues or questions, feel free to open an issue or reach out at: https://www.linkedin.com/in/khushigala05

We're here to help! 🌟💬 
