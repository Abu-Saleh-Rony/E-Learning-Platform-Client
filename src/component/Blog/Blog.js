import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Programming Related Questioons
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-1 lg:px-12 xl:px-32">
            <div>
              <h2 className="font-semibold text-2xl">1: What is cors?</h2>
              <p className="mt-1 dark:text-gray-400">
                {" "}
                Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser.A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-2xl">
                {" "}
                2: Why are you using firebase? What other options do you have to
                implement authentication?
              </h2>
              <p className="mt-1 dark:text-gray-400">
                {" "}
                Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
                Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-2xl">
                {" "}
                3: How does the private route work?
              </h2>
              <p className="mt-1 dark:text-gray-400">
                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-2xl">
                {" "}
                4: What is Node? How does Node work?
              </h2>
              <p className="mt-1 dark:text-gray-400">
                Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
