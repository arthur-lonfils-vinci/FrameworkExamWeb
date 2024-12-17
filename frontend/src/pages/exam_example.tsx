/*
This file needs to be updated for the need of the exam (if needed, else remove it).
*/

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchBooks } from '../store/slices/example_examSlice';
import { Card, CardContent, CardMedia, Typography, Grid, CircularProgress } from '@mui/material';
import { useAppDispatch } from '../store';
import { Book } from '../types/example_exam';

const Library: React.FC = () => {
  const dispatch = useAppDispatch();
  const { books, loading, error } = useSelector((state: RootState) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  
  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {Array.isArray(books) && books.map((book: Book) => (
        <Grid item xs={12} sm={6} md={4} key={book.id}>
          <Card>
            <CardMedia
              component="img"
              height="500"
              image={book.image === null ? '../../src/assets/cover.jpg' : book.image}
              alt={book.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {book.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {book.author} - {book.year}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Library;