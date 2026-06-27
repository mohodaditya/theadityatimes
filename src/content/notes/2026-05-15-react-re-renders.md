---
title: "React Re-renders"
date: "2026-05-15"
slug: "react-re-renders"
status: published
featured: false
excerpt: "Memoization is not always the answer. Sometimes restructuring the component tree solves the problem permanently."
tags:
  - react
  - performance
---

Memoization is not always the answer. Sometimes restructuring the component tree solves the problem permanently.

I was wrapping everything in `React.memo` and `useMemo`. Performance got worse. Then I moved state closer to where it was consumed, split one mega-component into three focused ones, and the re-render problem vanished.

Structure beats optimization. Every time.

```js
// Before: one giant component
function Dashboard({ user, data, settings, theme }) {
  // Everything re-renders when anything changes
}

// After: focused components
function UserPanel({ user }) { /* only re-renders for user changes */ }
function DataGrid({ data }) { /* only re-renders for data changes */ }
```
