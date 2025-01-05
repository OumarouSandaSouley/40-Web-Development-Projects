# Pyza Pizza 🍕  
**Pyza Pizza** is a modern web application designed to provide a seamless pizza-ordering experience. Built with cutting-edge technologies like **React**, **TypeScript**, and **Vite**, the platform allows users to browse an enticing menu of pizzas, customize their orders, and manage their cart effortlessly. With an integrated admin panel, order management has never been easier.

---

## Features  
- **User-Friendly Menu**: Browse a delicious selection of pizzas with descriptions, images, and prices for different sizes.  
- **Cart Management**: Add pizzas to your cart, update quantities, and view the total price dynamically.  
- **Order Placement**: Place orders with a simple checkout process, including cash-on-delivery payment.  
- **Order History**: View your previous orders, including details and status updates.  
- **Admin Panel**: Manage and update orders efficiently via a secure admin interface.  

---

## Technologies Used  
Pyza Pizza leverages the following technologies for an efficient, scalable, and user-friendly experience:  
- **Frontend**:  
  - React  
  - TypeScript  
  - Vite  
  - Tailwind CSS  

- **Backend & Authentication**:  
  - Appwrite (Database & Backend)  
  - Clerk (User Authentication)  

---

## Getting Started  

### Prerequisites  
Ensure you have the following installed on your machine:  
- **Node.js** (v14 or higher)  
- **npm** or **yarn**

---

### Installation  

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/OumarouSandaSouley/pyza-pizza.git
   cd pyza-pizza
   ```

2. **Install dependencies**:  
   ```bash
   npm install
   ```
   or  
   ```bash
   yarn install
   ```

3. **Set up environment variables**:  
   Create a `.env.local` file in the root directory and add the following environment variables:  
   ```env
   VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_CLERK_FRONTEND_API=your_clerk_frontend_api
   ```

---

### Running the Application  

To start the development server, run:  
```bash
npm run dev
```
or  
```bash
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

### Building for Production  

To build the application for production, run:  
```bash
npm run build
```
or  
```bash
yarn build
```

The production-ready files will be generated in the `dist` directory.

---

### Linting  

To lint the code, ensuring consistent style and identifying potential issues, run:  
```bash
npm run lint
```
or  
```bash
yarn lint
```

---

## Project Structure  

The project is organized as follows:  

```
src/
├── components/       # Reusable React components
├── pages/            # Application pages (e.g., Menu, Cart, Checkout)
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
├── styles/           # Global styles and Tailwind configurations
├── App.tsx           # Main application entry point
```

---

## Contributing  

We welcome contributions! If you'd like to contribute, please follow these steps:  
1. Fork the repository.  
2. Create a new branch:  
   ```bash
   git checkout -b feature/your-feature-name
   ```  
3. Commit your changes:  
   ```bash
   git commit -m "Add your feature description"
   ```  
4. Push to your branch:  
   ```bash
   git push origin feature/your-feature-name
   ```  
5. Open a pull request on the main repository.

---

## License  

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more details.

---

## Acknowledgements  

- **[Appwrite](https://appwrite.io/)**: Backend and database services.  
- **[Clerk](https://clerk.dev/)**: Authentication and user management.  
- **[Tailwind CSS](https://tailwindcss.com/)**: Modern styling framework.  
- **[Vite](https://vitejs.dev/)**: Lightning-fast build tool.  
- **[React](https://reactjs.org/)**: Frontend library for building user interfaces.  

---

## Author  

**Oumarou Sanda Souley**  
Passionate developer with a love for building robust, user-centric web applications.  

--- 

Let me know if you'd like further refinements! 🚀