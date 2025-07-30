# Styling Guide for Student Management Application

## Overview

This guide provides comprehensive styling for your student management application with modern, responsive design principles.

## Design System

### Color Palette

```css
/* Primary Colors */
--primary-color: #667eea;
--primary-dark: #5a6fd8;
--primary-light: #8b9ff8;

/* Secondary Colors */
--secondary-color: #764ba2;
--secondary-dark: #6a4190;
--secondary-light: #8f5bb8;

/* Status Colors */
--success-color: #28a745;
--success-dark: #218838;
--warning-color: #ffc107;
--danger-color: #dc3545;
--danger-dark: #c82333;

/* Neutral Colors */
--white: #ffffff;
--light-gray: #f8f9fa;
--gray: #6c757d;
--dark-gray: #343a40;
--border-color: #e9ecef;
```

### Typography

```css
/* Font Family */
font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

/* Font Sizes */
--text-xs: 0.75rem; /* 12px */
--text-sm: 0.875rem; /* 14px */
--text-base: 1rem; /* 16px */
--text-lg: 1.125rem; /* 18px */
--text-xl: 1.25rem; /* 20px */
--text-2xl: 1.5rem; /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem; /* 36px */
```

### Spacing System

```css
/* Spacing Scale */
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem; /* 8px */
--space-3: 0.75rem; /* 12px */
--space-4: 1rem; /* 16px */
--space-5: 1.25rem; /* 20px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
--space-10: 2.5rem; /* 40px */
--space-12: 3rem; /* 48px */
```

## Component Styles

### 1. Layout Components

#### Container

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.container-sm {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
}
```

#### Header

```css
.header {
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  color: white;
  padding: var(--space-8) var(--space-6);
  text-align: center;
  border-radius: 15px 15px 0 0;
}

.header h1 {
  font-size: var(--text-4xl);
  font-weight: 300;
  margin-bottom: var(--space-3);
}

.header p {
  font-size: var(--text-lg);
  opacity: 0.9;
}
```

### 2. Form Components

#### Form Group

```css
.form-group {
  margin-bottom: var(--space-6);
}

.form-label {
  display: block;
  margin-bottom: var(--space-2);
  font-weight: 600;
  color: var(--dark-gray);
  font-size: var(--text-sm);
}

.form-input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-size: var(--text-base);
  transition: all 0.3s ease;
  background: var(--light-gray);
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-color);
  background: var(--white);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-input.error {
  border-color: var(--danger-color);
  background: #fff5f5;
}
```

#### Buttons

```css
.btn {
  display: inline-block;
  padding: var(--space-3) var(--space-5);
  border: none;
  border-radius: 8px;
  font-size: var(--text-base);
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;
}

.btn-primary {
  background: var(--primary-color);
  color: var(--white);
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.btn-secondary {
  background: var(--gray);
  color: var(--white);
}

.btn-success {
  background: var(--success-color);
  color: var(--white);
}

.btn-danger {
  background: var(--danger-color);
  color: var(--white);
}

.btn-danger:hover {
  background: var(--danger-dark);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(220, 53, 69, 0.3);
}
```

### 3. Card Components

#### Student Card

```css
.student-card {
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: var(--space-5);
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.student-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.student-id {
  background: var(--primary-color);
  color: var(--white);
  padding: var(--space-1) var(--space-3);
  border-radius: 15px;
  font-size: var(--text-xs);
  display: inline-block;
  margin-bottom: var(--space-3);
  font-weight: 600;
}

.student-name {
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--dark-gray);
  margin-bottom: var(--space-2);
}

.student-email {
  color: var(--gray);
  font-size: var(--text-sm);
  word-break: break-all;
  margin-bottom: var(--space-4);
}
```

### 4. Grid Layouts

#### Statistics Grid

```css
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-5);
  margin-bottom: var(--space-8);
}

.stat-card {
  background: var(--light-gray);
  padding: var(--space-5);
  border-radius: 12px;
  text-align: center;
  border-left: 4px solid var(--primary-color);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-3px);
}

.stat-number {
  font-size: var(--text-4xl);
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: var(--space-1);
}

.stat-label {
  color: var(--gray);
  font-size: var(--text-sm);
  font-weight: 500;
}
```

#### Student Grid

```css
.student-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-5);
  margin-top: var(--space-5);
}
```

### 5. Table Styles

#### Data Table

```css
.data-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.data-table th {
  background: var(--primary-color);
  color: var(--white);
  padding: var(--space-4);
  text-align: left;
  font-weight: 500;
  font-size: var(--text-sm);
}

.data-table td {
  padding: var(--space-4);
  border-bottom: 1px solid var(--border-color);
  font-size: var(--text-sm);
}

.data-table tr:hover {
  background: var(--light-gray);
}
```

## Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
/* Base styles for mobile */

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }

  .header h1 {
    font-size: var(--text-4xl);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 0 3rem;
  }

  .student-grid {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
}

/* Large Desktop */
@media (min-width: 1280px) {
  .container {
    max-width: 1400px;
  }
}
```

### Mobile Optimizations

```css
@media (max-width: 768px) {
  .header h1 {
    font-size: var(--text-2xl);
  }

  .student-grid {
    grid-template-columns: 1fr;
  }

  .stats {
    grid-template-columns: 1fr;
  }

  .button-group {
    flex-direction: column;
    gap: var(--space-3);
  }

  .btn {
    width: 100%;
  }
}
```

## Animation and Transitions

### Hover Effects

```css
/* Card hover effect */
.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

/* Button hover effect */
.btn-hover {
  transition: all 0.3s ease;
}

.btn-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
```

### Loading States

```css
.loading {
  opacity: 0.6;
  pointer-events: none;
}

.spinner {
  border: 3px solid var(--border-color);
  border-top: 3px solid var(--primary-color);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

## Utility Classes

### Spacing Utilities

```css
.m-0 {
  margin: 0;
}
.m-1 {
  margin: var(--space-1);
}
.m-2 {
  margin: var(--space-2);
}
.m-3 {
  margin: var(--space-3);
}
.m-4 {
  margin: var(--space-4);
}
.m-5 {
  margin: var(--space-5);
}

.p-0 {
  padding: 0;
}
.p-1 {
  padding: var(--space-1);
}
.p-2 {
  padding: var(--space-2);
}
.p-3 {
  padding: var(--space-3);
}
.p-4 {
  padding: var(--space-4);
}
.p-5 {
  padding: var(--space-5);
}
```

### Text Utilities

```css
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}

.text-primary {
  color: var(--primary-color);
}
.text-success {
  color: var(--success-color);
}
.text-danger {
  color: var(--danger-color);
}
.text-gray {
  color: var(--gray);
}

.font-bold {
  font-weight: 700;
}
.font-semibold {
  font-weight: 600;
}
.font-normal {
  font-weight: 400;
}
```

### Display Utilities

```css
.d-flex {
  display: flex;
}
.d-grid {
  display: grid;
}
.d-block {
  display: block;
}
.d-inline {
  display: inline;
}
.d-none {
  display: none;
}

.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.justify-around {
  justify-content: space-around;
}

.items-center {
  align-items: center;
}
.items-start {
  align-items: flex-start;
}
.items-end {
  align-items: flex-end;
}
```

## Best Practices

### 1. CSS Organization

- Use CSS custom properties for consistent theming
- Group related styles together
- Use meaningful class names
- Keep specificity low

### 2. Performance

- Minimize CSS file size
- Use efficient selectors
- Avoid expensive properties in animations
- Use transform and opacity for animations

### 3. Accessibility

- Ensure sufficient color contrast
- Provide focus indicators
- Use semantic HTML
- Test with screen readers

### 4. Browser Support

- Use progressive enhancement
- Test across different browsers
- Provide fallbacks for older browsers
- Use modern CSS features responsibly

## Implementation Example

```css
/* Complete component example */
.student-management-app {
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  padding: var(--space-5);
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
  background: var(--white);
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.app-header {
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  color: var(--white);
  padding: var(--space-8) var(--space-6);
  text-align: center;
}

.app-content {
  padding: var(--space-8);
}

.app-footer {
  background: var(--light-gray);
  padding: var(--space-4);
  text-align: center;
  color: var(--gray);
  font-size: var(--text-sm);
}
```

This styling guide provides a comprehensive foundation for creating a modern, responsive, and accessible student management application.
