# Namstore

## 📝 Overview

<p>
  Namstore is an e-commerce web application, built with Next.js and TypeScript. Currently, There are total of 22 products under 4 categories and 3 genders. The products are stored in mongodb, noSQL database, while the CRUD operations are done by using mongoose because of its strongly typed schemas, and better query building. You can search any product by a single or multiple search keys combined via "+" between them, matching the category, gender, or title.
</p>

### 🌟 <b>Categories</b>

- 👕 T-Shirts
- 👖 Pants
- 👟 Sneakers
- 🧸 Toys

### <b>🌟 Genders</b>

- 👨 Man
- 👩 Woman
- 🧒 Child

#

<img src="GIF/preview.gif" />

#

## 📖 Getting Started

<p>You can start the app by typing the following commands in the command line:</p>

1.  **First install the dependencies**

    ```shell
    # Install the dependencies
    yarn
    ```

2.  **Start the app in development mode**

    ```shell
    # Development
    yarn dev
    ```

3.  **Start the app in production mode**

        ```shell
        # Build the app
        yarn build

        # Start the app at localhost:3000
        yarn start
        ```

You can find the working example [here](https://namstore.vercel.app).

#

## 🧭 Roadmap

- Authentication and Authorization
- Favorite products
- Dynamic filtering
- Admin dashboard
