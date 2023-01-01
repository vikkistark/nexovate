package com.bookstore.controller;

import com.bookstore.entity.Items;
import com.bookstore.service.BookService;
import com.bookstore.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ItemAvailability {

    @Autowired
    private ItemService itemService;

    @RequestMapping(value = "/itemavailability", method = RequestMethod.GET)
    public List<Items> getItems(@RequestParam(value = "branch", required = false) String branch){

        return itemService.getItems(branch);
    }

    @RequestMapping(value = "/itemavailability", method = RequestMethod.POST)
    public Items createItem(@RequestBody Items item){
         return itemService.createItem(item);
    }

    @RequestMapping(value = "/itemavailability/{id}")
    public Items getItemById(@PathVariable("id") Long itemId){
        return itemService.getItemById(itemId);
    }
    @RequestMapping(value = "/itemavailability", method = RequestMethod.PUT)
    public Items updateItem(@RequestBody Items item){
        return itemService.updateItem(item);
    }

    @RequestMapping(value = "/itemavailability/{id}", method = RequestMethod.DELETE)
    public String deleteItemById(@PathVariable Long id){
        return itemService.deleteByItemId(id);
    }


}
