import React from 'react';
import classes from './blog.module.css';

const Blog = () => {
  return (
    <div className="article">
      <h1>My Articles</h1>
      <div className={classes.blogs}>
        <div className={classes.blog}>
          <blockquote className="embedly-card">
            <h4>
              <a href="https://medium.com/@imdeepanshugpt/redux-saga-react-middleware-a3f5dc236dc1">
                Redux Saga | React Middleware
              </a>
            </h4>
            <p>
              Saga is just a middleware to handle asynchronous actions, though, with more
              capabilities and quite a bit more complex. One major bonus is that Saga can help you
              thin out your action creators and provides you : &quot;side effects: &quot; since you
              have separate actions, reducers and saga files.
            </p>
          </blockquote>
        </div>
        <div className={classes.blog}>
          <blockquote className="embedly-card">
            <h4>
              <a href="https://medium.com/@imdeepanshugpt/redux-thunk-react-middleware-f577b5427e59">
                Redux Thunk | React Middleware
              </a>
            </h4>
            <p>
              In Server Side (for Express apps) Middleware are the functions, which used as next
              function in the application&apos;s request-response cycle. We need Thunk as a
              middleware to handle asynchronous flow...
            </p>
          </blockquote>
        </div>
        <div className={classes.blog}>
          <blockquote className="embedly-card">
            <h4>
              <a href="https://medium.com/@imdeepanshugpt/build-a-progressive-web-app-using-service-worker-5a73ca1d5877">
                Build a progressive web app using service worker
              </a>
            </h4>
            <p>
              Service worker are used to build a progressive web app. service workers are what make
              Progressive Web Apps so amazing. What is service worker? A service worker is a script
              that is run by the browser in the background. It does not interact with the actual app
              and even the usual user won&apos;t know anything about it.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Blog;
