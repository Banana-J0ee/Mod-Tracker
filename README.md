# Mod Tracker

A personal tracker for fan PC ports and mods, with plain-language update notes and a weekly newsletter, *The Memory Card*.

**Live page:** https://banana-j0ee.github.io/Mod-Tracker/

## Layout

```
index.html             the page
assets/css/style.css   look and feel
assets/js/app.js       renders the tracker and the newsletter
assets/img/            card images
data/projects.js       every tracked project and its update notes
newsletters/           one file per weekly issue (issue-01.js, issue-02.js, ...)
```

A new newsletter issue is a new file in `newsletters/`, plus one `<script>` line in `index.html`. Past issues are never removed.

No game files are hosted here; every project linked needs your own copy of its game.
