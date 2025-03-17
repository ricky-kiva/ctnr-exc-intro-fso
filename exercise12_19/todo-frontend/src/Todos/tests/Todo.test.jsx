import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import Todo from '../Todo'

describe('Todo Component', () => {
  const mockDeleteTodo = vi.fn()
  const mockCompleteTodo = vi.fn()
  
  it('renders an incomplete todo correctly', () => {
    const todo = { text: 'Test todo', done: false }
    
    render(<Todo todo={todo} deleteTodo={mockDeleteTodo} completeTodo={mockCompleteTodo} />)
    
    expect(screen.getByText('Test todo')).toBeInTheDocument()
    expect(screen.getByText('This todo is not done')).toBeInTheDocument()
    expect(screen.getByText('Delete')).toBeInTheDocument()
    expect(screen.getByText('Set as done')).toBeInTheDocument()
  })
  
  it('renders a completed todo correctly', () => {
    const todo = { text: 'Completed todo', done: true }
    
    render(<Todo todo={todo} deleteTodo={mockDeleteTodo} completeTodo={mockCompleteTodo} />)
    
    expect(screen.getByText('Completed todo')).toBeInTheDocument()
    expect(screen.getByText('This todo is done')).toBeInTheDocument()
    expect(screen.getByText('Delete')).toBeInTheDocument()
    expect(screen.queryByText('Set as done')).not.toBeInTheDocument()
  })
  
  it('calls deleteTodo when Delete button is clicked', () => {
    const todo = { text: 'Test todo', done: false }
    
    render(<Todo todo={todo} deleteTodo={mockDeleteTodo} completeTodo={mockCompleteTodo} />)
    
    fireEvent.click(screen.getByText('Delete'))
    expect(mockDeleteTodo).toHaveBeenCalledWith(todo)
  })
  
  it('calls completeTodo when Set as done button is clicked', () => {
    const todo = { text: 'Test todo', done: false }
    
    render(<Todo todo={todo} deleteTodo={mockDeleteTodo} completeTodo={mockCompleteTodo} />)
    
    fireEvent.click(screen.getByText('Set as done'))
    expect(mockCompleteTodo).toHaveBeenCalledWith(todo)
  })
})