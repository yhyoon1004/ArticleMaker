package rest.articlemakerrest.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ArticleController {
    @GetMapping("/main")
    public String mainArticle(){

        return "Hello";
    }

}
