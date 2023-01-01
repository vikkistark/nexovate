package com.bookstore.service;

import com.bookstore.entity.Items;
import com.bookstore.repo.BookRepository;
import com.bookstore.repo.ItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ItemService {

    @Autowired
    private ItemsRepository itemsRepository;

    //GET
    public List<Items> getItems(String branch){
        List<Items> Items= new ArrayList<>();

        if(branch == null) {
            itemsRepository.findAll().forEach(item -> Items.add(item));
        }
        else{
          return itemsRepository.findAllByBranch(branch);
        }
        return Items;
    }

    //create or POST
    public Items createItem(Items item){
        return itemsRepository.save(item);
    }

    //FIND by GET
    public Items getItemById(Long itemId){
        return itemsRepository.findOne(itemId);
    }

    public Items updateItem(Items item) {
        return itemsRepository.save(item);
    }

    //delete
    public String deleteByItemId(Long id) {
        itemsRepository.delete(id);
        return "deleted successfully";
    }
}
