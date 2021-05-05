// package com.example.reactspringboot.post;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.data.domain.Page;
// import org.springframework.data.domain.Pageable;
// import org.springframework.data.rest.webmvc.RepositoryRestController;
// import org.springframework.data.web.PageableDefault;
// import org.springframework.hateoas.CollectionModel;
// import org.springframework.hateoas.EntityModel;
// import org.springframework.hateoas.PagedModel;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

// import java.util.List;

// @RepositoryRestController
// public class PostController {

//    @Autowired
//    private PostRepository postRepository;

//    @RequestMapping(method = RequestMethod.GET, value = "/posts")
//    @ResponseBody
//    public ResponseEntity<CollectionModel<Post>> getPosts(@PageableDefault Pageable pageable){

//         Page<Post> posts = postRepository.findAll(pageable);

//         PagedModel.PageMetadata pageMetadata = new PagedModel.PageMetadata(pageable.getPageSize(), posts.getSize(), posts.getTotalElements());

//         PagedModel<Post> resources = new PagedModel<>(posts.getContent(), pageMetadata);

//         // CollectionModel<Post> resources = CollectionModel.of(posts);

//         resources.add(linkTo(methodOn(PostController.class).getPosts(pageable)).withSelfRel());

//         return ResponseEntity.ok(resources);
//    }
// }
