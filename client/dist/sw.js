if (!self.define) {
  let e,
    s = {};
  const i = (i, n) => (
    (i = new URL(i + ".js", n).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, r) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[c]) return;
    let t = {};
    const o = (e) => i(e, c),
      l = { module: { uri: c }, exports: t, require: o };
    s[c] = Promise.all(n.map((e) => l[e] || o(e))).then((e) => (r(...e), t));
  };
}
define(["./workbox-e3490c72"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "assets/index-CwtKnq9w.css", revision: null },
        { url: "assets/index-QKbDyFwp.js", revision: null },
        { url: "index.html", revision: "baceb0aa47859b02efd0e70cc4e26b08" },
        { url: "registerSW.js", revision: "1872c500de691dce40960bb85481de07" },
        { url: "icons/192.png", revision: "a7ba479e8759161d6c30753cfd8ba32c" },
        { url: "icons/512.png", revision: "c0f585b15c03ec16175cd483cd851f66" },
        {
          url: "manifest.webmanifest",
          revision: "dae0ec85498ba9f7c51e60a56414e9c5",
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
    );
});
