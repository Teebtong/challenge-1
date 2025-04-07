import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BlogPostItem from '../BlogPostItem';

// We need to wrap with BrowserRouter because BlogPostItem uses Link
const renderWithRouter = ui => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('BlogPostItem', () => {
  it('renders the blog post title correctly', () => {
    // Arrange
    const props = {
      title: 'Test Blog Post',
      url: '/posts/1',
      summary: 'This is a test summary',
      date: '2023-01-01',
    };

    // Act
    renderWithRouter(<BlogPostItem {...props} />);

    // Assert
    expect(screen.getByText('Test Blog Post')).toBeInTheDocument();
  });
});
