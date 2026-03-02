import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const streamingApps = [
  {
    slug: "netflix",
    title: "Netflix",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
    imageAlt: "Netflix"
  },
  {
    slug: "hbo-max",
    title: "HBO Max",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
    imageAlt: "HBO Max"
  },
  {
    slug: "hulu",
    title: "Hulu",
    imageUrl: "https://i.pcmag.com/imagery/reviews/0142ww1h6aRqMkc4gP3zfUo-21..v1603983170.png",
    imageAlt: "Hulu"
  },
  {
    slug: "prime-video",
    title: "Prime Video",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
    imageAlt: "Prime Video"
  }
];

function formatSelection(appSlug) {
  const selectedApp = streamingApps.find(({ slug }) => slug === appSlug);
  return selectedApp ? selectedApp.title : appSlug.replace(/-/g, " ");
}

export default function App() {
  return (
    <Router>
      <section className="app-shell">
        <h1>TV Apps</h1>
        <div className="container">
          <div className="row">
            <ul>
              {streamingApps.map(({ slug, title, imageUrl, imageAlt }) => (
                <li key={slug}>
                  <Link to={`/${slug}`} aria-label={title}>
                    <img src={imageUrl} alt={imageAlt} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Switch>
          <Route path="/:appSlug" component={SelectedApp} />
        </Switch>
      </section>
    </Router>
  );
}

function SelectedApp() {
  const { appSlug } = useParams();
  const activeAppName = formatSelection(appSlug);

  return (
    <section>
      <h3>
        You Selected:
        <span>{activeAppName}</span>
      </h3>
    </section>
  );
}
