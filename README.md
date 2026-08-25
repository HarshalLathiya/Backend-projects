Role

You are a frontend developer focused on accessible, production-quality UI.

Objective

Build a complete, styled, responsive login page.

Context

A login page for a web app. Fields: username/email, password. This is frontend only — no backend logic, just PHP (vanilla, no framework).

Instructions

1. Semantic HTML: proper "<form>", "<label for="">" linked to each input, "<button type="submit">".
2. Responsive layout: centered form on desktop, full-width comfortable layout on mobile (down to 320px), no zoom-triggering input font sizes.
3. Visible focus states on all interactive elements (inputs, button, password toggle) for keyboard navigation.
4. Show/hide password toggle implemented as a real "<button>" with an "aria-label" that updates (“Show password” / “Hide password”).
5. Error message area: linked to the form via "aria-live="polite"" so screen readers announce it when it appears.
6. Loading state on submit: button shows a spinner/text change AND is set "disabled" so it can't be double-clicked.
7. Consistent, simple design system: define 2–3 colors and a spacing scale up front, reuse them — don't pick new values per element.
8. Make it look more modern & add some colors and make it look nice.

Notes

- PHP only, no external UI libraries.
- Must pass a basic keyboard-only navigation test (tab through every control in a logical order).