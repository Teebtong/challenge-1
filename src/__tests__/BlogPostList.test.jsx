import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BlogPostList from '../BlogPostList';


const renderWithRouter = (ui) => {
    return render(
      <BrowserRouter>{ui}</BrowserRouter>
    );
  };

describe('BlogPostList', () => {
    it('should display "no blog posts available" message when posts array is empty', () => {
      // Arrange
      const posts = [];
  
      // Act
      renderWithRouter(<BlogPostList posts={posts} />);
  
      // Assert
      expect(screen.getByText(/no blog posts available/i)).toBeInTheDocument();
    });

    it('should render posts when the posts array is not empty', () => {
      // Arrange
      const posts = [
        { id: 1, title: 'Test Post 1', summary: 'This is a test summary', date: '2023-01-01' },
        { id: 2, title: 'Test Post 2', summary: 'This is another test summary', date: '2023-01-02' },
      ];

      // Act
      renderWithRouter(<BlogPostList posts={posts} />);

      // Assert
      expect(screen.getByText(/Test Post 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Test Post 2/i)).toBeInTheDocument();
    });
});