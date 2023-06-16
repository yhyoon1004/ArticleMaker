package rest.articlemakerrest.service;

import org.springframework.stereotype.Service;
import rest.articlemakerrest.DTO.Article;

import java.util.List;

@Service
public interface ArticleService {
    List<Article> serveGetArticleList();

    Boolean serveInsertArticle(Article article);
}