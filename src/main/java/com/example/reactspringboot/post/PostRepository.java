package com.example.reactspringboot.post;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = PostProjection.class)
public interface PostRepository extends PagingAndSortingRepository<Post,Long> {

}
