---
title: "JWT Pitfalls"
date: "2026-05-10"
slug: "jwt-pitfalls"
status: published
featured: false
excerpt: "Token expiry edge cases broke production twice. Never trust the client clock for security decisions."
tags:
  - backend
  - security
---

Token expiry edge cases broke production twice. Never trust the client clock for security decisions.

Users in different timezones were getting logged out randomly. The fix was embarrassingly simple — always validate on the server. Client-side checks are convenience, not security.

Three rules I follow now:

1. Server validates everything. Always.
2. Client-side expiry is a UX hint, not a security boundary.
3. Clock skew is real. Account for it.
