package rest.articlemakerrest.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import rest.articlemakerrest.DTO.Article;
import rest.articlemakerrest.service.ArticleService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ArticleController {
    private final ArticleService articleService;
    @GetMapping("/main")
    public String mainArticle() {

        return "Hello";
    }


    @GetMapping("/desk")
    public List<Article> deskMain(){
        return articleService.serveArticleList();
    }
}