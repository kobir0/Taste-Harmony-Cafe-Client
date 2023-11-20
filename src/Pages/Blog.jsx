// @ts-nocheck
import Lottie from "lottie-react";
import Container from "../Components/UI/Container";
import blog1Animation from "../assets/blog1Animation.json";
import blog2Animation from "../assets/blog2Animation.json";
import blog3Animation from "../assets/blog3Animation.json";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog | TasteHarmony Cafe</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="my-20 space-y-24">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/SVsX3wJ/blog1.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold font-dancing">
                One-way data binding
              </h1>
              <p className="py-6">
                One-way data binding is a data flow concept used in various web
                development frameworks, such as Angular and React. In one-way
                data binding, data changes are reflected in the user interface
                (UI) elements, but the reverse is not true. This means that
                changes in the model or data source automatically update the UI,
                but changes in the UI do not affect the underlying data. It
                provides a predictable and controlled way to update the UI based
                on changes in the data model.
              </p>
              <Lottie
                className="w-[300px]"
                animationData={blog2Animation}
              ></Lottie>
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/8mf6wP0/blog2.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold font-dancing">
                NPM in Node.js
              </h1>
              <p className="py-6">
                NPM stands for Node Package Manager. It is a package manager and
                dependency management tool for Node.js. NPM is used to install,
                manage, and distribute packages (libraries, modules, and
                applications) for Node.js projects. It simplifies the process of
                adding external libraries to your Node.js applications and
                managing their versions and dependencies. NPM is typically
                included with Node.js installation, and it provides a vast
                ecosystem of open-source packages that can be easily integrated
                into Node.js projects.
              </p>
              <Lottie
                className="w-[300px]"
                animationData={blog3Animation}
              ></Lottie>
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/xj0Ngd7/blog3.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold font-dancing">
                Difference between MongoDB and MySQL databases:
              </h1>
              <p className="py-6">
                MongoDB and MySQL are both popular database management systems,
                but they have several differences: Data Model: MongoDB is a
                NoSQL database that uses a flexible, document-oriented data
                model. It stores data in collections of JSON-like documents,
                allowing for schema flexibility. MySQL is a relational database
                management system (RDBMS) that uses structured tables with
                predefined schemas to store data. Query Language: MongoDB uses a
                query language called BSON (Binary JSON) for querying and
                manipulation of data. MySQL uses Structured Query Language (SQL)
                for data querying and manipulation. Scalability: MongoDB is
                designed for horizontal scalability and can handle large amounts
                of unstructured or semi-structured data. MySQL is typically
                scaled vertically and may have limitations in handling very
                large datasets. Schema: MongoDB has a dynamic schema, which
                allows you to change the structure of documents without
                affecting existing data. MySQL has a fixed schema, meaning that
                the table structure is predefined, and changes can be more
                challenging. Use Cases: MongoDB is often used for applications
                that require flexibility, such as content management systems,
                real-time analytics, and mobile applications. MySQL is commonly
                used for applications with structured data requirements, such as
                e-commerce, financial systems, and traditional relational data.
                The choice between MongoDB and MySQL depends on the specific
                requirements of your project, including data structure,
                scalability, and performance needs.
              </p>
              <Lottie
                className="w-[300px]"
                animationData={blog1Animation}
              ></Lottie>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
