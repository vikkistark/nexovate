package com.bookstore.repo;

import com.bookstore.entity.Items;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemsRepository extends CrudRepository<Items, Long> {

    List<Items> findAllByBranch(String branch);
}
