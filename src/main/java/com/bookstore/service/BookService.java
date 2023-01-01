package com.bookstore.service;

import com.bookstore.entity.Book;
import com.bookstore.repo.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public List<Book> getBooks(){

        List<Book> bookList = new ArrayList<>();
        bookRepository.findAll().forEach(book -> bookList.add(book));
        return bookList;
    }
}
