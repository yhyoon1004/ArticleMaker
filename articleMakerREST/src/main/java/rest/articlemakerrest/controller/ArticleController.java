package rest.articlemakerrest.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
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
    public List<Article> deskMain() {
        return articleService.serveGetArticleList();
    }

    @PostMapping("/articleInsert")
    public Boolean articleInsert(@RequestBody Article article) {
        return articleService.serveInsertArticle(article);
    }

    @DeleteMapping("/articleDelete/{id}")
    public Boolean articleDelete(@PathVariable Long id) {
        return articleService.serveDeleteArticle(id);
    }
}