//package com.example.reactspringboot.post;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.rest.webmvc.RepositoryRestController;
//import org.springframework.hateoas.CollectionModel;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;
//
//@RepositoryRestController
//public class PostController {
//
//    @Autowired
//    private PostRepository postRepository;
//
//    @RequestMapping(method = RequestMethod.GET, value = "/posts")
//    @ResponseBody
//    public ResponseEntity<CollectionModel<Post>> getPosts(){
//
//        Iterable<Post> posts = postRepository.findAll();
//
//        CollectionModel<Post> resources = CollectionModel.of(posts);
//
//        resources.add(linkTo(methodOn(PostController.class).getPosts()).withSelfRel());
//
//        return ResponseEntity.ok(resources);
//    }
//}
