package com.example.reactspringboot.post;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.rest.core.config.Projection;

import java.sql.Timestamp;

@Projection(name = "postProjection", types = { Post.class })
public interface PostProjection {

    @JsonProperty("id")
    Long getSeq();

    String getTitle();
    String getBody();

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    Timestamp getPublishedAt();

}
